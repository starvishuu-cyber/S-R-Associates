import { getAllBlogs } from '@/app/lib/blog';
import BlogCard from '@/app/components/BlogCard';

export const metadata = {
  title: 'Blog - Tax Consultancy Insights',
  description: 'Stay updated with the latest tax news, GST updates, and financial tips.',
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  console.log(blogs)
  const featuredBlog = blogs.find((b:any)=>b.meta.featured); // First blog as featured

  return (
    <section className="py-2 pt-8 px-6 min-h-screen bg-emerald/10">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/90 bg-emerald/5 mb-6">
            <span className="text-sm text-emerald font-medium">Latest Insights</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
            Tax & Finance <span className="text-emerald">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            Expert guidance on taxation, compliance, and financial planning from certified professionals
          </p>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald/30" />
              <span className="text-sm font-semibold text-emerald">Featured Article</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald/30" />
            </div>
            <BlogCard blog={featuredBlog} index={0} featured />
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index + 1} />
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">No Articles Yet</h3>
            <p className="text-charcoal/60 text-lg">Check back soon for expert insights and updates!</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="my-2 relative">
          <div className="bg-gradient-to-br from-emerald/10 via-emerald/5 to-transparent border border-emerald/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Stay Updated
              </h2>
              <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
                Get the latest tax updates, compliance tips, and financial insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-offwhite/50 border border-emerald/20 rounded-lg text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-emerald/60 focus:ring-2 focus:ring-emerald/20"
                />
               <a href="mailto:abc@example.com">
                <button className="px-8 py-3 bg-emerald cursor-pointer hover:bg-emerald/90 text-charcoal font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald/30">
                    Subscribe
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
