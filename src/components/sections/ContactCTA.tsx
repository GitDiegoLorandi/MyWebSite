'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/language-context';

export function ContactCTA() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const handleResumeDownload = () => {
    // Placeholder for resume download functionality
    // In a real implementation, this would download the actual resume file
    console.log('Resume download clicked');
    // You could implement this with a public PDF file:
    // const link = document.createElement('a');
    // link.href = '/resume-diego-lorandi.pdf';
    // link.download = 'Diego-Lorandi-Resume.pdf';
    // link.click();
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main CTA Card */}
          <motion.div
            className="p-8 md:p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border rounded-2xl text-center"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('title', 'AboutPage.cta')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('description', 'AboutPage.cta')}
            </p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={stagger}
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors group"
                >
                  <Mail className="h-5 w-5" />
                  {t('button', 'AboutPage.cta')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button
                  onClick={handleResumeDownload}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors group"
                >
                  <Download className="h-5 w-5" />
                  {t('resume', 'AboutPage.cta')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within 24 hours
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Communication</h3>
              <p className="text-muted-foreground text-sm">
                Clear, detailed project discussions and regular updates
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/20 transition-colors"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Portfolio & Resume</h3>
              <p className="text-muted-foreground text-sm">
                Complete work samples and detailed experience overview
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 