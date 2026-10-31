import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { marked } from 'marked';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';
import { getPost, getPostSlugs, getLastModified, extractFaqs } from '@/lib/blog';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
});

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const data = post.frontmatter;

  return {
    title: `${data.title} | Kashi Rentals Blog`,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${siteConfig.url}/blog/${params.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${siteConfig.url}/blog/${params.slug}`,
      type: 'article',
      publishedTime: data.date,
      modifiedTime: getLastModified(data),
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter: data, content } = post;
  const postUrl = `${siteConfig.url}/blog/${params.slug}`;
  const faqs = extractFaqs(content);

  // Remove h1 from content (title is already shown in header)
  const contentWithoutH1 = content.replace(/^# .*$/gm, '');
  const htmlContent = marked.parse(contentWithoutH1) as string;

  const organization = {
    "@type": "Organization",
    "name": siteConfig.fullBrandName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": data.title,
    "description": data.description,
    "datePublished": data.date,
    "dateModified": getLastModified(data),
    "keywords": data.keywords?.join(', '),
    "articleSection": data.category,
    "inLanguage": "en-IN",
    "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl },
    "image": `${siteConfig.url}/logo.png`,
    "author": organization,
    "publisher": organization,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteConfig.url}/blog` },
      { "@type": "ListItem", "position": 3, "name": data.title, "item": postUrl },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  } : null;

  return (
    <article>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}
      {/* Header */}
      <section className="relative overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-dark-50/70 via-white to-white border-b border-dark-100">
        <div className="container-custom max-w-3xl px-4 sm:px-6">
          <nav className="text-xs mb-4 text-dark-500 flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-dark-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-dark-900 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-dark-900 truncate max-w-xs">{data.title}</span>
          </nav>

          <span className="badge-ember text-xs mb-3">
            {data.category}
          </span>

          <h1 className="heading-lg sm:text-4xl text-dark-950 font-bold tracking-tight mb-4 leading-tight">
            {data.title}
          </h1>

          <p className="text-sm sm:text-base text-dark-600 leading-relaxed mb-6">
            {data.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-dark-500 pt-4 border-t border-dark-100">
            <span>📅 {new Date(data.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            {data.updated && (
              <>
                <span>•</span>
                <span>Updated {new Date(data.updated).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </>
            )}
            <span>•</span>
            <span>⏱️ {data.readTime}</span>
            <span>•</span>
            <span className="text-dark-700 font-medium">By Varanasi Travel Desk</span>
          </div>
        </div>
      </section>

      {/* Main Reading Canvas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-3xl px-4 sm:px-6">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* In-Article Conversion Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-dark-50 border border-dark-200/80">
            <h3 className="text-lg font-bold text-dark-950 mb-2">
              Ready to explore this route?
            </h3>
            <p className="text-xs sm:text-sm text-dark-600 mb-6 leading-relaxed">
              Rent a verified Honda Activa or motorcycle in Varanasi starting at ₹299/day. Doorstep delivery and sanitized helmet included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppBookingUrl({ customText: `Hi! I was reading "${data.title}" and want to rent a vehicle in Varanasi.` })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-6 justify-center"
              >
                <span>Book Ride on WhatsApp</span>
                <span>→</span>
              </a>
              <Link href="/pricing" className="btn-outline text-xs sm:text-sm py-2.5 px-5 justify-center">
                Check Rental Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Quick Links */}
      <section className="section-padding bg-dark-50/50 border-t border-dark-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-dark-500 mb-6 text-center">
            Explore Varanasi Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/scooty-rental-in-varanasi" className="card-minimal p-5 block group">
              <span className="text-xs font-bold text-primary-600">🛵 SCOOTY FLEET</span>
              <h3 className="font-bold text-sm text-dark-950 group-hover:text-primary-600 transition-colors my-1">
                Honda Activa & Jupiter
              </h3>
              <p className="text-xs text-dark-500">From ₹299/day with helmet</p>
            </Link>

            <Link href="/bike-rental-in-varanasi" className="card-minimal p-5 block group">
              <span className="text-xs font-bold text-primary-600">🏍️ MOTORCYCLE FLEET</span>
              <h3 className="font-bold text-sm text-dark-950 group-hover:text-primary-600 transition-colors my-1">
                Royal Enfield & Pulsar
              </h3>
              <p className="text-xs text-dark-500">From ₹499/day for highway tours</p>
            </Link>

            <Link href="/locations" className="card-minimal p-5 block group">
              <span className="text-xs font-bold text-primary-600">📍 PICKUP HUBS</span>
              <h3 className="font-bold text-sm text-dark-950 group-hover:text-primary-600 transition-colors my-1">
                12+ Locations in Kashi
              </h3>
              <p className="text-xs text-dark-500">Cantt, Assi, BHU Lanka, Sigra</p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
