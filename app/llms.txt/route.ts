import { siteConfig } from '@/lib/config';
import { locations } from '@/lib/locations';
import { vehicles } from '@/lib/pricing';
import { getAllPosts, getLastModified } from '@/lib/blog';

export const dynamic = 'force-static';

// llms.txt (https://llmstxt.org): a plain-markdown map of the site for AI assistants and answer engines
export function GET() {
  const url = siteConfig.url;

  const posts = getAllPosts().sort((a, b) =>
    getLastModified(b.frontmatter).localeCompare(getLastModified(a.frontmatter))
  );

  const lines = [
    `# ${siteConfig.fullBrandName}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `${siteConfig.name} rents scooties and motorcycles in ${siteConfig.currentCity} from verified local fleets. ` +
      `Bookings are made on WhatsApp (+${siteConfig.contact.whatsappNumber}) or by phone (${siteConfig.contact.phoneDisplay}), ` +
      `${siteConfig.contact.businessHours.display}. Email: ${siteConfig.contact.email}.`,
    '',
    '## Rentals and pricing',
    '',
    `- [Pricing](${url}/pricing): daily, weekly and monthly rental rates`,
    `- [Scooty rental in Varanasi](${url}/scooty-rental-in-varanasi)`,
    `- [Bike rental in Varanasi](${url}/bike-rental-in-varanasi)`,
    ...vehicles.map((v) => `- ${v.name} (${v.type}): from ₹${v.pricePerDay}/day`),
    '',
    '## Pickup locations',
    '',
    ...locations.map((l) => `- [${l.name}](${url}/locations/${l.slug}): ${l.description}`),
    '',
    '## Travel guides',
    '',
    ...posts.map((p) => `- [${p.frontmatter.title}](${url}/blog/${p.slug}): ${p.frontmatter.description}`),
    '',
    '## Company',
    '',
    `- [About](${url}/about)`,
    `- [Contact](${url}/contact)`,
    `- [Terms and conditions](${url}/terms-and-conditions)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
