import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "Varanasi Travel Blog & Two-Wheeler Route Guides | Kashi Rentals",
  description: "Expert travel guides for exploring Varanasi by scooty and motorcycle. Ghat circuits, Sarnath routes, sunrise itineraries, and local road tips from Awaken AI.",
  keywords: [
    "varanasi travel blog",
    "varanasi travel tips",
    "banaras guide",
    "varanasi routes scooty",
    "kashi travel blog",
    "assi ghat to sarnath bike"
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
  };
}

function getBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(process.cwd(), 'content/blog');

  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data as BlogPost['frontmatter'],
    };
  });

  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();
  // Preferred order first; any new category used by a post is appended so it never silently disappears
  const preferredCategories = ['Festival Guides', 'Travel Guides', 'Comparison', 'Route Guides', 'Hyperlocal'];
  const categories = Array.from(new Set([...preferredCategories, ...posts.map((post) => post.frontmatter.category)]));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>📖</span>
            <span>Varanasi Exploration Guides</span>
          </div>
          <h1 className="heading-xl mb-4">Travel Guides & Route Notes</h1>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Insider routes, morning aarti timings, ghat parking maps, and road tips written by locals for riders in Varanasi.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-8 pb-14 bg-white">
          <div className="container-custom max-w-5xl">
            <div className="card-minimal p-8 sm:p-12 relative overflow-hidden bg-white shadow-card">
              <span className="badge-ember text-xs mb-4">
                ★ Editor&apos;s Featured Route
              </span>
              <h2 className="heading-lg mb-3">
                <Link href={`/blog/${posts[0].slug}`} className="hover:text-primary-600 transition-colors">
                  {posts[0].frontmatter.title}
                </Link>
              </h2>
              <p className="text-sm sm:text-base text-dark-600 leading-relaxed mb-6 max-w-3xl">
                {posts[0].frontmatter.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-dark-500 mb-8">
                <span className="badge-pill">{posts[0].frontmatter.category}</span>
                <span>📅 {new Date(posts[0].frontmatter.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span>⏱️ {posts[0].frontmatter.readTime}</span>
              </div>

              <Link href={`/blog/${posts[0].slug}`} className="btn-primary text-xs sm:text-sm py-2.5 px-6">
                Read Full Itinerary →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.map((category) => {
        const categoryPosts = posts.filter(post => post.frontmatter.category === category);
        if (categoryPosts.length === 0) return null;

        return (
          <section key={category} className="section-padding bg-dark-50/50 border-t border-dark-100">
            <div className="container-custom max-w-6xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="heading-md">{category}</h2>
                <span className="text-xs text-dark-500 font-medium">{categoryPosts.length} Guides</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="card-minimal h-full p-6 flex flex-col justify-between group-hover:border-dark-300 transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="badge-pill text-[10px] uppercase font-semibold">
                            {post.frontmatter.category}
                          </span>
                          <span className="text-[11px] text-dark-400">
                            {post.frontmatter.readTime}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-dark-950 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                          {post.frontmatter.title}
                        </h3>

                        <p className="text-xs text-dark-600 line-clamp-3 leading-relaxed mb-4">
                          {post.frontmatter.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-dark-100 flex items-center justify-between text-[11px] text-dark-400">
                        <span>{new Date(post.frontmatter.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="text-primary-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                          Read Guide →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom Conversion Card */}
      <section className="section-padding bg-white border-t border-dark-100 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-lg mb-3">Put These Routes to Work</h2>
          <p className="text-dark-600 text-sm mb-6">
            Rent an Activa or motorcycle starting at ₹299/day and explore Varanasi like a local.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I was reading your travel blog and want to rent a vehicle in Varanasi." })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-8 justify-center"
            >
              <span>Book Ride on WhatsApp</span>
              <span>→</span>
            </a>
            <Link href="/pricing" className="btn-outline text-sm py-3 px-6 justify-center">
              View Rental Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
