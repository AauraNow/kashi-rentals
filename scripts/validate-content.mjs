// Quality gate for blog content and the SEO pipeline state files.
// Run: npm run validate:content   (exit code 1 on errors; warnings don't fail)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();
const blogDir = path.join(root, 'content/blog');
const seoDir = path.join(root, 'content/seo');

const errors = [];
const warnings = [];
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const REQUIRED = ['title', 'description', 'category', 'date', 'readTime', 'keywords'];

// Contact details must come from siteConfig (the booking card on every post), never from article text
const HARDCODED_CONTACT = [
  { pattern: /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}\b/, label: 'phone number' },
  { pattern: /wa\.me\//, label: 'WhatsApp link' },
  { pattern: /[\w.+-]+@[\w-]+\.(?:com|in|org|net)\b/, label: 'email address' },
];

const slugs = new Set();
const titles = new Map();

for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))) {
  const slug = file.replace(/\.mdx$/, '');
  const where = `content/blog/${file}`;
  slugs.add(slug);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`${where}: slug must be lowercase-kebab-case`);
  }

  const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const { data, content } = matter(raw);
  const frontmatterLines = raw.split('\n').length - content.split('\n').length;

  for (const field of REQUIRED) {
    if (data[field] === undefined || data[field] === '') errors.push(`${where}: missing frontmatter "${field}"`);
  }
  if (data.date && !DATE.test(data.date)) errors.push(`${where}: date must be YYYY-MM-DD`);
  if (data.updated && !DATE.test(data.updated)) errors.push(`${where}: updated must be YYYY-MM-DD`);
  if (data.updated && data.date && data.updated < data.date) errors.push(`${where}: updated is before date`);
  if (data.keywords && !Array.isArray(data.keywords)) errors.push(`${where}: keywords must be a list`);

  if (data.title) {
    if (titles.has(data.title)) errors.push(`${where}: duplicate title (also in ${titles.get(data.title)})`);
    titles.set(data.title, where);
    if (data.title.length > 70) warnings.push(`${where}: title is ${data.title.length} chars (aim for <= 70)`);
  }
  if (data.description && (data.description.length < 110 || data.description.length > 170)) {
    warnings.push(`${where}: description is ${data.description.length} chars (aim for 110-170)`);
  }

  content.split('\n').forEach((line, i) => {
    for (const { pattern, label } of HARDCODED_CONTACT) {
      if (pattern.test(line)) errors.push(`${where}:${i + 1 + frontmatterLines}: hardcoded ${label}; contact details come from siteConfig`);
    }
  });

  const faqSection = content.match(/^##\s+.*(?:FAQ|Frequently Asked).*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im);
  if (faqSection) {
    const questions = (faqSection[1].match(/^\*\*Q:.+\*\*\s*$/gm) || []).length;
    const answers = (faqSection[1].match(/^A:\s*\S/gm) || []).length;
    if (questions === 0) errors.push(`${where}: FAQ section has no "**Q: ...**" questions`);
    if (questions !== answers) errors.push(`${where}: FAQ has ${questions} questions but ${answers} "A:" answers`);
  } else {
    warnings.push(`${where}: no FAQ section (no FAQPage rich results)`);
  }
}

// Pipeline state
const readYaml = (file) => matter(`---\n${fs.readFileSync(file, 'utf8')}\n---`).data;

const eventsFile = path.join(seoDir, 'events.yaml');
if (fs.existsSync(eventsFile)) {
  const { events = [] } = readYaml(eventsFile);
  const ids = new Set();
  for (const event of events) {
    const where = `content/seo/events.yaml [${event.id ?? '?'}]`;
    for (const field of ['id', 'name', 'publish_lead_days', 'keywords']) {
      if (event[field] === undefined) errors.push(`${where}: missing "${field}"`);
    }
    if (ids.has(event.id)) errors.push(`${where}: duplicate id`);
    ids.add(event.id);
    for (const [year, entry] of Object.entries(event.dates ?? {})) {
      if (!DATE.test(entry.start)) errors.push(`${where}: dates.${year}.start must be YYYY-MM-DD`);
      if (!['confirmed', 'unverified'].includes(entry.status)) {
        errors.push(`${where}: dates.${year}.status must be confirmed or unverified`);
      }
    }
    for (const slug of event.related_posts ?? []) {
      if (!slugs.has(slug)) errors.push(`${where}: related post "${slug}" does not exist`);
    }
  }
}

const logFile = path.join(seoDir, 'content-log.json');
if (fs.existsSync(logFile)) {
  try {
    const { runs = [] } = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    for (const run of runs) {
      if (!DATE.test(run.date)) errors.push(`content-log.json: run has invalid date "${run.date}"`);
      if (!['new', 'refresh', 'research'].includes(run.action)) {
        errors.push(`content-log.json: run ${run.date} has unknown action "${run.action}"`);
      }
      if (run.action !== 'research' && !slugs.has(run.slug)) {
        errors.push(`content-log.json: run ${run.date} points at missing post "${run.slug}"`);
      }
    }
  } catch (e) {
    errors.push(`content-log.json: invalid JSON (${e.message})`);
  }
}

warnings.forEach((w) => console.warn(`warn  ${w}`));
errors.forEach((e) => console.error(`error ${e}`));
console.log(`\n${slugs.size} posts checked: ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length > 0 ? 1 : 0);
