'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide comprehensive tax consultancy services including income tax filing, GST registration and filing, tax planning and advisory, audit support, TDS compliance, and business taxation for individuals, startups, and established businesses.',
  },
  {
    question: 'How much does your tax consultation cost?',
    answer: 'Our pricing varies based on the complexity of your tax situation and specific needs. We offer competitive packages starting from ₹5,000 for basic tax filing to comprehensive annual packages for businesses. Contact us for a personalized quote.',
  },
  {
    question: 'What documents do I need for tax filing?',
    answer: 'Typically, you\'ll need PAN card, Aadhaar card, Form 16/16A, bank statements, investment proofs (80C, 80D), property documents (if applicable), business income records, and previous year\'s ITR. We\'ll provide a detailed checklist based on your specific situation.',
  },
  {
    question: 'Can you help with GST registration and filing?',
    answer: 'Yes, we specialize in GST services including new registration, GST return filing (GSTR-1, GSTR-3B), input tax credit reconciliation, GST notices and audits, and ongoing compliance management for businesses of all sizes.',
  },
  {
    question: 'Do you handle tax notices from Income Tax Department?',
    answer: 'Absolutely. Our experienced team assists with responding to all types of tax notices, scrutiny assessments, appeals, and representations before tax authorities. We ensure timely and appropriate responses to protect your interests.',
  },
  {
    question: 'How long does the tax filing process take?',
    answer: 'For individuals with complete documentation, the filing process typically takes 3-5 business days. Business tax returns may take 7-10 days depending on complexity. We prioritize accuracy over speed to ensure error-free filing.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 relative">
      {/* Background Gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Frequently Asked <span className="text-emerald">Questions</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Find answers to common questions about our tax consultancy services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-emerald/20 rounded-xl overflow-hidden bg-gradient-to-br from-emerald/5 to-transparent hover:border-emerald/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-emerald/5 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-offwhite pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="text-emerald" size={24} strokeWidth={2} />
                  ) : (
                    <Plus className="text-emerald" size={24} strokeWidth={2} />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-offwhite/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-offwhite/70 mb-4">Still have questions?</p>
          <a href='/#contact' className="px-8 py-3 bg-emerald text-charcoal font-semibold rounded-lg hover:bg-emerald/90 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/20">
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
