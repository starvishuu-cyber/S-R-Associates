'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Shield, value: '99.8%', label: 'Success Rate' },
  { icon: TrendingUp, value: '₹50Cr+', label: 'Tax Saved' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6  relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            About <span className="text-emerald">Us</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Your trusted partner in tax planning and financial compliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-emerald/20 shadow-2xl shadow-emerald/10">
              {/* Replace with your actual image path */}
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald/20 to-emerald/5 flex items-center justify-center">
                <Image
                  src="/about-team.avif"
                  alt="Tax consulting team"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-emerald p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-charcoal">15+</div>
                <div className="text-sm font-semibold text-charcoal/80">Years Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-offwhite leading-tight">
              Empowering Your Financial Growth Through Expert Tax Solutions
            </h3>
            
            <p className="text-offwhite/70 text-lg leading-relaxed">
              We are a team of certified tax professionals dedicated to helping individuals 
              and businesses navigate the complex world of taxation. With over 15 years of 
              experience, we've helped thousands of clients optimize their tax strategies 
              and achieve financial peace of mind.
            </p>
            
            <p className="text-offwhite/70 text-lg leading-relaxed">
              Our approach combines deep expertise in Indian tax laws with personalized 
              service, ensuring that every client receives tailored solutions that align 
              with their unique financial goals and compliance requirements.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-offwhite/80">
                <Shield className="text-emerald" size={20} />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2 text-offwhite/80">
                <Award className="text-emerald" size={20} />
                <span>Award Winning Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/20 rounded-xl p-6 text-center hover:border-emerald/40 transition-all duration-300"
              >
                <Icon className="text-emerald mx-auto mb-4" size={32} strokeWidth={1.5} />
                <div className="text-4xl font-bold text-offwhite mb-2">{stat.value}</div>
                <div className="text-offwhite/60 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
