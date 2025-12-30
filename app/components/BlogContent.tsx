'use client';

import { BlogSection } from '@/app/lib/blog';
import Image from 'next/image';

interface BlogContentProps {
  sections: BlogSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            type HeadingLevel = 1 | 2 | 3 | 4;

            const level: HeadingLevel = (section.level ?? 2) as HeadingLevel;

            const HeadingTag: React.ElementType = `h${level}`;

            const headingClasses: Record<HeadingLevel, string> = {
            1: 'text-4xl md:text-5xl font-bold text-charcoal mb-6 mt-12 font-serif',
            2: 'text-3xl md:text-4xl font-bold text-charcoal mb-6 mt-10 border-l-4 border-emerald pl-6 font-serif',
            3: 'text-2xl md:text-3xl font-semibold text-charcoal mb-4 mt-8',
            4: 'text-xl md:text-2xl font-semibold text-charcoal mb-3 mt-6',
            };

            return (
            <HeadingTag key={index} className={headingClasses[level]}>
                {section.content}
            </HeadingTag>
            );
          case 'paragraph':
            return (
              <p key={index} className="text-charcoal/80 text-lg leading-relaxed">
                {section.content}
              </p>
            );

          case 'list':
            const ListTag = section.ordered ? 'ol' : 'ul';
            return (
              <ListTag
                key={index}
                className={`space-y-3 text-charcoal/80 text-lg ${
                  section.ordered ? 'list-decimal' : 'list-disc'
                } list-inside ml-4`}
              >
                {section.items?.map((item, i) => (
                  <li key={i} className="pl-2">
                    {item}
                  </li>
                ))}
              </ListTag>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-emerald pl-6 py-4 my-6 italic text-charcoal/70 bg-emerald/5 rounded-r-lg"
              >
                {section.content}
              </blockquote>
            );

          case 'table':
            return (
              <div key={index} className="overflow-x-auto my-8">
                <table className="min-w-full border border-emerald/20 rounded-lg overflow-hidden">
                  <thead className="bg-emerald/10">
                    <tr>
                      {section.headers?.map((header, i) => (
                        <th
                          key={i}
                          className="px-6 py-3 text-left text-sm font-semibold text-emerald border-b border-emerald/20"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald/10">
                    {section.rows?.map((row, i) => (
                      <tr key={i} className="hover:bg-emerald/5 transition-colors">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-6 py-4 text-sm text-charcoal/80"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {section.caption && (
                  <p className="text-sm text-charcoal/60 mt-2 text-center italic">
                    {section.caption}
                  </p>
                )}
              </div>
            );

          case 'code':
            return (
              <div key={index} className="my-6">
                <pre className="bg-offwhite/50 border border-emerald/20 rounded-xl p-6 overflow-x-auto">
                  <code className="text-emerald text-sm font-mono">
                    {section.content}
                  </code>
                </pre>
                {section.caption && (
                  <p className="text-sm text-charcoal/60 mt-2">
                    {section.caption}
                  </p>
                )}
              </div>
            );

          case 'image':
            return (
              <div key={index} className="my-8">
                {section.content && (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-emerald/20">
                    <Image
                      src={section.content as string}
                      alt={section.alt || 'Blog image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {section.caption && (
                  <p className="text-sm text-charcoal/60 mt-3 text-center italic">
                    {section.caption}
                  </p>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
