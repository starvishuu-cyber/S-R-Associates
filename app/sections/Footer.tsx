'use client'
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-offwhite/10 bg-charcaol">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-offwhite mb-4">S R &  <span className="text-emerald">Associates</span></h3>
            <p className="text-offwhite/70 leading-relaxed">
              Premium tax consultation and financial advisory services for discerning clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-offwhite mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Resources', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-offwhite/70 hover:text-emerald transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-offwhite mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-offwhite/70">
                <Mail size={20} className="text-emerald mt-1 flex-shrink-0" />
                <span>sanjayrajak26@yahoo.com</span>
              </li>
              <li className="flex items-start gap-3 text-offwhite/70">
                <Phone size={20} className="text-emerald mt-1 flex-shrink-0" />
                <span>+91 9650462399</span>
              </li>
              <li className="flex items-start gap-3 text-offwhite/70">
                <MapPin size={20} className="text-emerald mt-1 flex-shrink-0" />
                <span>2363, First Floor, Oppo. Metri Plole No. 218, Shadikhmpur, New Delhi, India</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-offwhite mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg border border-offwhite/10 hover:border-emerald/50 hover:bg-emerald/10 transition-all"
                >
                  <Icon size={20} className="text-offwhite/70 hover:text-emerald transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-offwhite/10 text-center">
          <p className="text-offwhite/60 text-sm">
            © 2024 S R & Associates All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
