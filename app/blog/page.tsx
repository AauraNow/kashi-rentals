import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: "Varanasi Travel Blog | Scooty & Bike Rental Guides, Routes, Tips",
  description: "Expert travel guides for exploring Varanasi by scooty and bike. Route guides, itineraries, tips, and local insights for the perfect Banaras trip.",
  keywords: [
    "varanasi travel blog",
    "varanasi travel tips",
    "banaras guide",
    "varanasi routes",
    "kashi travel blog"
  ],
  alternates: {
    canonical: 'https://rentals.awakenais.com/blog',
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

  // Check if directory exists, if not return empty array
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

  // Sort by date (newest first)
  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();

  // Group by category
  const categories = ['Travel Guides', 'Comparison', 'Route Guides', 'Hyperlocal'];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Varanasi Travel Blog & Guides</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Expert tips, routes, and guides for exploring Varanasi by scooty and bike.
            Written by locals who know every lane of Banaras.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-lg p-8 md:p-12">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">FEATURED</span>
              <h2 className="heading-md mt-4 mb-3">
                <Link href={`/blog/${posts[0].slug}`} className="hover:text-primary-600 transition-colors">
                  {posts[0].frontmatter.title}
                </Link>
              </h2>
              <p className="text-lg text-dark-700 mb-4">{posts[0].frontmatter.description}</p>
              <div className="flex items-center gap-4 text-dark-600 mb-4">
                <span className="bg-dark-100 px-3 py-1 rounded">{posts[0].frontmatter.category}</span>
                <span>📅 {new Date(posts[0].frontmatter.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>⏱️ {posts[0].frontmatter.readTime}</span>
              </div>
              <Link href={`/blog/${posts[0].slug}`} className="btn-primary">
                Read Full Guide →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Posts by Category */}
      {categories.map((category) => {
        const categoryPosts = posts.filter(post => post.frontmatter.category === category);

        if (categoryPosts.length === 0) return null;

        return (
          <section key={category} className="section-padding bg-dark-50">
            <div className="container-custom">
              <h2 className="heading-md mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full">
                      <span className="text-primary-600 text-sm font-semibold">{post.frontmatter.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3 text-dark-900 hover:text-primary-600 transition-colors">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-dark-600 mb-4">{post.frontmatter.description}</p>
                      <div className="flex items-center gap-4 text-sm text-dark-500">
                        <span>📅 {new Date(post.frontmatter.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                        <span>⏱️ {post.frontmatter.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Explore Varanasi?</h2>
          <p className="text-xl mb-8">Put these guides into action with your own scooty or bike rental</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Your Ride
            </Link>
            <Link href="/locations" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              Browse Locations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
