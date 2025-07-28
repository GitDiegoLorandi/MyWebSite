'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

export function EducationSection() {
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

  // Get education items from translations
  const educationData = t('items', 'AboutPage.education') as unknown;
  const educationItems = Array.isArray(educationData) 
    ? (educationData as Array<{
        period: string;
        title: string;
        institution: string;
        description: string;
      }>)
    : [];

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
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('title', 'AboutPage.education')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description', 'AboutPage.education')}
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors group"
                variants={fadeInUp}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">{item.period}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-primary font-medium mb-3">
                      {item.institution}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <motion.div
            className="mt-16 p-6 md:p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-border rounded-xl"
            variants={fadeInUp}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Continuous Learning Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the importance of staying current with rapidly evolving technologies. 
                  My approach combines formal learning with hands-on experimentation, contributing to 
                  open-source projects, and engaging with the developer community to continuously 
                  expand my knowledge and skills.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 