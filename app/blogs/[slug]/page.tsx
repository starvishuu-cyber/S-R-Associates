import { getAllBlogSlugs, getBlogBySlug } from '@/app/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Metadata } from 'next';
import BlogContent from '@/app/components/BlogContent';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  return {
    title: blog.meta.title,
    description: blog.meta.description,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      images: blog.meta.image ? [blog.meta.image] : [],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  let blog;
  
  try {
    blog = await getBlogBySlug(slug);
  } catch (error) {
    notFound();
  }

  const { meta, sections, readingTime } = blog;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 px-6 bg-emerald/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald/3 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-emerald hover:text-emerald/80 mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="text-charcoal group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-charcoal">Back to Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-emerald text-charcoal text-sm font-bold rounded-full">
              {meta.category}
            </span>
            <div className="flex items-center gap-2 text-charcoal/60">
              <Clock size={16} />
              <span className="text-sm">{readingTime}</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
            {meta.title}
          </h1>

          <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
            {meta.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-emerald/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald/20 to-emerald/5 flex items-center justify-center">
                <User size={20} className="text-emerald" />
              </div>
              <div>
                <div className="text-charcoal font-semibold">{meta.author}</div>
                <div className="text-sm text-charcoal/60">{meta.authorRole || 'Tax Consultant'}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-emerald/20" />
            <div className="flex items-center gap-2 text-charcoal/60">
              <Calendar size={18} />
              <span>{new Date(meta.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 md:py-16 px-6 bg-emerald/10 ">
        <div className="max-w-4xl mx-auto">
          {meta.image && (
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-emerald/20 shadow-2xl shadow-emerald/10">
              <Image
                src={meta.image}
                alt={meta.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Render Blog Content */}
          <BlogContent sections={sections} />

          {/* Tags */}
          {meta.tags && meta.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-emerald/20">
              <h3 className="text-charcoal font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-3">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 text-emerald rounded-xl hover:bg-emerald/20 transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share & CTA sections remain the same */}
        </div>
      </article>
    </>
  );
}
