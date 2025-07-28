'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MDXContent as MDXContentType } from '../../lib/mdx';

interface MDXContentProps {
  content: MDXContentType;
  className?: string;
}

export function MDXContent({ content, className = '' }: MDXContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  // Parse and render the MDX content as HTML
  // In a more complex setup, you'd use MDX's compile function
  // For now, we'll render the raw content with basic markdown parsing
  const renderContent = (mdxContent: string) => {
    // Basic markdown-to-HTML conversion for demonstration
    // In production, you'd want to use a proper MDX renderer
    return mdxContent
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-foreground mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium text-foreground mb-3 mt-6">$1</h3>')
      .replace(/^\- (.*$)/gim, '<li class="text-muted-foreground mb-2">$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">')
      .replace(/^(?!<[h|l])/gm, '<p class="text-muted-foreground leading-relaxed mb-4">');
  };

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Metadata */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {content.metadata.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {content.metadata.subtitle}
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>By {content.metadata.author}</span>
              <span>•</span>
              <span>Updated {content.metadata.lastUpdated}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: renderContent(content.content)
            }}
          />
        </motion.div>
      </div>
    </section>
  );
} 