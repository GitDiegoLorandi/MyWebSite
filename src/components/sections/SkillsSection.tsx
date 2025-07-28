'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Palette,
  Terminal,
  Zap,
  Shield
} from 'lucide-react';
import { useLanguage } from '../../lib/language-context';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <Code2 className="h-6 w-6" />, category: 'frontend', proficiency: 90 },
  { name: 'Next.js', icon: <Globe className="h-6 w-6" />, category: 'frontend', proficiency: 85 },
  { name: 'TypeScript', icon: <Code2 className="h-6 w-6" />, category: 'frontend', proficiency: 88 },
  { name: 'Tailwind CSS', icon: <Palette className="h-6 w-6" />, category: 'frontend', proficiency: 92 },
  { name: 'React Native', icon: <Smartphone className="h-6 w-6" />, category: 'frontend', proficiency: 75 },
  
  // Backend
  { name: 'Node.js', icon: <Server className="h-6 w-6" />, category: 'backend', proficiency: 82 },
  { name: 'Express', icon: <Server className="h-6 w-6" />, category: 'backend', proficiency: 80 },
  { name: 'Python', icon: <Terminal className="h-6 w-6" />, category: 'backend', proficiency: 78 },
  { name: 'REST APIs', icon: <Zap className="h-6 w-6" />, category: 'backend', proficiency: 85 },
  
  // Database
  { name: 'PostgreSQL', icon: <Database className="h-6 w-6" />, category: 'database', proficiency: 80 },
  { name: 'MongoDB', icon: <Database className="h-6 w-6" />, category: 'database', proficiency: 75 },
  { name: 'Prisma', icon: <Database className="h-6 w-6" />, category: 'database', proficiency: 82 },
  
  // Tools
  { name: 'Git', icon: <GitBranch className="h-6 w-6" />, category: 'tools', proficiency: 88 },
  { name: 'Docker', icon: <Shield className="h-6 w-6" />, category: 'tools', proficiency: 70 },
  { name: 'Vercel', icon: <Globe className="h-6 w-6" />, category: 'tools', proficiency: 85 },
];

export function SkillsSection() {
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

  const categories = {
    frontend: { color: 'text-blue-500', bg: 'bg-blue-500/10' },
    backend: { color: 'text-green-500', bg: 'bg-green-500/10' },
    database: { color: 'text-purple-500', bg: 'bg-purple-500/10' },
    tools: { color: 'text-orange-500', bg: 'bg-orange-500/10' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('title', 'AboutPage.skills')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description', 'AboutPage.skills')}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                className="space-y-6"
                variants={fadeInUp}
              >
                {/* Category Header */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(category, 'AboutPage.skills.categories')}
                  </h3>
                  <div className={`w-12 h-1 ${categories[category as keyof typeof categories].bg} mx-auto rounded-full`} />
                </div>

                {/* Category Skills */}
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors group"
                      whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${categories[skill.category].bg} ${categories[skill.category].color} group-hover:scale-110 transition-transform`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="text-foreground font-medium">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r from-primary to-accent`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 