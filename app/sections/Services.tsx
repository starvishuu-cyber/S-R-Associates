'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  FileText, 
  DollarSign, 
  Shield, 
  Award,
  Scale,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

// Categorized services data
const serviceCategories = [
  {
    id: 'business',
    name: 'Business Registration',
    icon: Building2,
    color: 'emerald',
    services: [
      { 
        title: 'Private Limited Company',
        description: 'Register your private limited company with complete compliance and documentation support.'
      },
      { 
        title: 'Public Limited Company',
        description: 'Public company registration for large-scale businesses with IPO capabilities.'
      },
      { 
        title: 'One Person Company (OPC)',
        description: 'Ideal for solo entrepreneurs who want limited liability protection.'
      },
      { 
        title: 'Partnership Firm',
        description: 'Register your partnership firm with deed preparation and filing.'
      },
      { 
        title: 'LLP Registration',
        description: 'Limited Liability Partnership with flexibility of partnership and limited liability.'
      },
      { 
        title: 'Sole Proprietorship',
        description: 'Simple business structure for individual entrepreneurs with minimal compliance.'
      },
      { 
        title: 'Startup India Registration',
        description: 'Get recognized as a startup and avail tax benefits and funding opportunities.'
      },
      { 
        title: 'Section 8 Company (NGO)',
        description: 'Register non-profit organization for charitable, social, or religious purposes.'
      },
      { 
        title: 'NGO Registration',
        description: 'Complete registration services for Trust, Society, and Section 8 companies.'
      },
    ]
  },
  {
    id: 'gst',
    name: 'GST & Compliance',
    icon: FileText,
    color: 'blue',
    services: [
      { 
        title: 'GST Registration',
        description: 'Quick GST registration for your business with complete documentation support.'
      },
      { 
        title: 'GST Return Filing',
        description: 'Monthly, quarterly, and annual GST return filing services with compliance checks.'
      },
      { 
        title: 'IEC Registration',
        description: 'Import Export Code registration for businesses engaged in international trade.'
      },
      { 
        title: 'MSME Registration',
        description: 'Udyam registration for micro, small, and medium enterprises with benefits.'
      },
    ]
  },
  {
    id: 'income-tax',
    name: 'Income Tax',
    icon: DollarSign,
    color: 'amber',
    services: [
      { 
        title: 'ITR Filing - Individuals',
        description: 'Income tax return filing for salaried employees, freelancers, and self-employed.'
      },
      { 
        title: 'ITR Filing - Companies',
        description: 'Corporate tax return filing with tax optimization and planning strategies.'
      },
      { 
        title: 'Tax Consultancy',
        description: 'Expert tax advisory services for tax planning, appeals, and litigation support.'
      },
      { 
        title: 'Advance Tax & TDS Filing',
        description: 'Timely advance tax calculation and TDS return filing services.'
      },
    ]
  },
  {
    id: 'accounts',
    name: 'Accounts & Audit',
    icon: Scale,
    color: 'purple',
    services: [
      { 
        title: 'Annual Compliance - LLP',
        description: 'Annual ROC filings, financial statements, and compliance for LLPs.'
      },
      { 
        title: 'Annual Compliance - Pvt Ltd',
        description: 'Complete annual compliance including AOC-4, MGT-7, and audit requirements.'
      },
      { 
        title: 'Accounts & Audits',
        description: 'Statutory audit, internal audit, and accounting services for businesses.'
      },
    ]
  },
  {
    id: 'trademark',
    name: 'Trademark & IP',
    icon: Award,
    color: 'pink',
    services: [
      { 
        title: 'Trademark Registration',
        description: 'Protect your brand name and logo with trademark registration in India.'
      },
      { 
        title: 'Logo Registration',
        description: 'Register your business logo and get exclusive rights for brand protection.'
      },
      { 
        title: 'Trademark Renewal',
        description: 'Renew your trademark registration before expiry to maintain protection.'
      },
      { 
        title: 'Trademark Opposition',
        description: 'File or respond to trademark opposition proceedings effectively.'
      },
      { 
        title: 'Trademark Objection',
        description: 'Respond to trademark objections from the Registry with expert support.'
      },
      { 
        title: 'Trademark Assignment',
        description: 'Transfer trademark ownership with proper legal documentation.'
      },
    ]
  },
  {
    id: 'licenses',
    name: 'Licenses & Permits',
    icon: Shield,
    color: 'teal',
    services: [
      { 
        title: 'FSSAI Basic License',
        description: 'Food license for small food businesses with turnover up to ₹12 lakhs.'
      },
      { 
        title: 'FSSAI State License',
        description: 'State-level food license for medium-scale food businesses.'
      },
      { 
        title: 'FSSAI Central License',
        description: 'Central food license for large manufacturers and importers.'
      },
      { 
        title: 'Import Export License',
        description: 'Get IEC code and licenses for international trade operations.'
      },
    ]
  },
];

import { 
  ChevronDown,
} from 'lucide-react';
// Same serviceCategories data as above...

export function Services() {
  const [openCategories, setOpenCategories] = useState<string[]>(['business']);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header - same as above */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Our <span className="text-emerald">Services</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Comprehensive financial and compliance solutions tailored to your business needs
          </p>
        </motion.div>

        
        <div className="space-y-4">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = openCategories.includes(category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-emerald/20 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald/5 to-transparent hover:border-emerald/40 transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-emerald/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald/10">
                      <Icon size={24} className="text-emerald" strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-offwhite">
                        {category.name}
                      </h3>
                      <p className="text-sm text-offwhite/60">
                        {category.services.length} services
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="text-emerald" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.services.map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-4 rounded-xl bg-emerald/30 border border-emerald/10 hover:border-emerald/30 transition-all"
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <CheckCircle className="text-emerald flex-shrink-0 mt-0.5" size={16} />
                              <h4 className="text-lg font-semibold text-offwhite">
                                {service.title}
                              </h4>
                            </div>
                            <p className="text-sm text-offwhite/70 leading-relaxed ml-7">
                              {service.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
