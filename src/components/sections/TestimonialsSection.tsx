'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('title', 'AboutPage.testimonials')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description', 'AboutPage.testimonials')}
            </p>
          </motion.div>

          {/* Placeholder Content */}
          <motion.div
            className="p-8 md:p-12 bg-card border border-border rounded-xl"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              
              <p className="text-xl text-muted-foreground mb-6 italic">
                {t('placeholder', 'AboutPage.testimonials')}
              </p>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground">
                Client testimonials and recommendations will be displayed here as the portfolio grows.
              </p>
            </div>
          </motion.div>

          {/* Call to action for testimonials */}
          <motion.div
            className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-xl"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Worked with me?
            </h3>
                         <p className="text-muted-foreground">
               I&apos;d love to hear your feedback! Feel free to reach out if you&apos;d like to share your experience working together.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 