'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, TrendingUp } from 'lucide-react';
import { BlogPost } from '@/app/lib/blog';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
  featured?: boolean;
}

export default function BlogCard({ blog, index, featured = false }: BlogCardProps) {
  const { slug, meta, readingTime } = blog;

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href={`/blogs/${slug}`}>
          <div className="group relative bg-gradient-to-br from-emerald/10 via-emerald/5 to-transparent border border-emerald/30 rounded-3xl overflow-hidden hover:border-emerald/50 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
                {meta.image ? (
                  <Image
                    src={meta.image}
                    alt={meta.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald/20 to-emerald/5 flex items-center justify-center">
                    <TrendingUp size={80} className="text-emerald/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-offwhite via-offwhite/20 to-transparent lg:bg-gradient-to-r lg:from-offwhite/40 lg:to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-emerald text-charcoal text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
                    {meta.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-charcoal/60 mb-4">
                  <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{meta.author}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-offwhite/30" />
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{new Date(meta.date).toLocaleDateString('en-IN', { 
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-offwhite/30" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{readingTime}</span>
                  </div>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald/60 mb-4 group-hover:text-emerald transition-colors duration-300">
                  {meta.title}
                </h2>

                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6">
                  {meta.description}
                </p>

                {/* Tags */}
                {meta.tags && meta.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {meta.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-offwhite/30 backdrop-blur-sm text-emerald text-xs font-medium rounded-full border border-emerald/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 text-emerald font-semibold group-hover:gap-4 transition-all">
                  <span>Read Full Article</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/blogs/${slug}`}>
        <div className="group h-full bg-gradient-to-br from-emerald/5 to-transparent border border-emerald/20 rounded-2xl overflow-hidden hover:border-emerald/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald/10 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-offwhite/40">
            {meta.image ? (
              <Image
                src={meta.image}
                alt={meta.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald/20 to-emerald/5 flex items-center justify-center">
                <TrendingUp size={60} className="text-emerald/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-offwhite/80 via-offwhite/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-emerald/90 backdrop-blur-sm text-offwhite text-xs font-bold rounded-full shadow-lg">
                {meta.category}
              </span>
            </div>

            {/* Reading Time Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-charcoal/60 backdrop-blur-md rounded-full text-xs text-offwhite">
                <Clock size={12} />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center gap-3 text-xs text-charcoal/60 mb-3">
              <div className="flex items-center gap-1">
                <User size={12} />
                <span>{meta.author}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-offwhite/30" />
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{new Date(meta.date).toLocaleDateString('en-IN', { 
                  day: 'numeric',
                  month: 'short'
                })}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-bold text-emerald/60 mb-3 group-hover:text-emerald transition-colors line-clamp-2 leading-tight">
              {meta.title}
            </h3>

            {/* Description */}
            <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
              {meta.description}
            </p>

            {/* Tags */}
            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {meta.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-emerald/10 text-emerald text-xs rounded border border-emerald/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-emerald/10">
              <span className="text-emerald text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
