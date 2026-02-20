import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

// Configure marked for better rendering
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert \n to <br>
});

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogDirectory = path.join(process.cwd(), 'content/blog');

  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(blogDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://varanasibikerental.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(blogDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Remove h1 from content (title is already shown in header)
  const contentWithoutH1 = content.replace(/^# .*$/gm, '');

  // Convert markdown to HTML using marked library
  const htmlContent = marked.parse(contentWithoutH1) as string;

  return (
    <>
      <article>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
          <div className="container-custom max-w-4xl">
            <nav className="text-sm mb-4 text-dark-600">
              <Link href="/" className="hover:text-primary-600">Home</Link> /
              <Link href="/blog" className="hover:text-primary-600 ml-1">Blog</Link> /
              <span className="ml-1 text-dark-900">{data.title}</span>
            </nav>
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              {data.category}
            </span>
            <h1 className="heading-xl mt-4 mb-4">{data.title}</h1>
            <p className="text-xl text-dark-700 mb-6">{data.description}</p>
            <div className="flex items-center gap-6 text-dark-600">
              <span>📅 {new Date(data.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>⏱️ {data.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-dark-900
                prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-dark-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-dark-900 prose-strong:font-semibold
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-dark-700 prose-li:mb-2
                prose-table:w-full prose-table:border-collapse prose-table:my-6
                prose-th:bg-primary-50 prose-th:border prose-th:border-dark-200 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-dark-200 prose-td:p-3
                prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-dark-600
                prose-code:bg-dark-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-dark-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </section>

        {/* Related CTAs */}
        <section className="section-padding bg-dark-50">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-3">🏍️</div>
                <h3 className="font-bold text-lg mb-2">Book Your Ride</h3>
                <p className="text-dark-600 text-sm">Start your Varanasi adventure</p>
              </Link>
              <Link href="/pricing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2">View Pricing</h3>
                <p className="text-dark-600 text-sm">Transparent rates from ₹299/day</p>
              </Link>
              <Link href="/blog" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-bold text-lg mb-2">More Guides</h3>
                <p className="text-dark-600 text-sm">Explore all travel tips</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
