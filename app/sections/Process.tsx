'use client'
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { MessageCircle, FileSearch, Calculator, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Consultation',
    description: 'Share your requirements in a free 30-minute consultation call.',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Document Review',
    description: 'Our experts analyze your financial documents and identify opportunities.',
  },
  {
    icon: Calculator,
    number: '03',
    title: 'Strategy & Filing',
    description: 'We create a tax-optimized strategy and handle all filings seamlessly.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Support & Monitoring',
    description: 'Ongoing support with real-time updates and proactive compliance management.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Our <span className="text-emerald">Process</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            A seamless journey from consultation to compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card delay={index * 0.15}>
                  <div className="flex flex-col items-start h-full">
                    <div className="text-6xl font-bold text-emerald mb-4">{step.number}</div>
                    <div className="p-3 rounded-xl bg-emerald/10 mb-6">
                      <Icon size={32} className="text-emerald" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-offwhite mb-4">{step.title}</h3>
                    <p className="text-offwhite/70 leading-relaxed">{step.description}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                    className="hidden lg:block absolute top-1/3 -right-3 w-6 h-px bg-gradient-to-r from-emerald to-transparent origin-left"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
