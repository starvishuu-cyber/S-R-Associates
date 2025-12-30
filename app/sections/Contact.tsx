'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: '[email protected]',
    link: 'mailto:[email protected]',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Nagpur, Maharashtra, India',
    link: '#',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 10AM - 7PM',
    link: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    // Replace with your WhatsApp number (include country code without + or spaces)
    const whatsappNumber = '919876543210'; // Format: country code + number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format email body
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    
    // Open email client
    window.location.href = `mailto:[email protected]?subject=Tax Consultation Inquiry&body=${emailBody}`;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Get In <span className="text-emerald">Touch</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Let's discuss how we can help optimize your tax strategy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-offwhite mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-offwhite/70 text-lg leading-relaxed">
                Whether you need help with tax filing, GST compliance, or strategic 
                tax planning, our expert team is here to assist you. Reach out today 
                for a free consultation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 hover:border-emerald/40 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-emerald/20 group-hover:bg-emerald/30 transition-colors">
                      <Icon className="text-emerald" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm text-offwhite/60 font-medium mb-1">
                        {info.label}
                      </div>
                      <div className="text-offwhite font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick WhatsApp Button */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi!%20I%20need%20help%20with%20tax%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 w-full p-3 bg-emerald hover:bg-emerald/90 text-offwhite/90 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-2xl p-8"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-offwhite font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-transparent/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-offwhite font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="[email protected]"
                  className="w-full px-4 py-3 bg-transparent/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-offwhite font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-transparent/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-offwhite font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your tax requirements..."
                  className="w-full px-4 py-3 bg-transparent/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald/90 text-offwhite font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle size={20} />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald/90 text-offwhite font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail size={20} />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-center text-offwhite/60 text-sm">
                We typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
