'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../lib/language-context';
import { MDXContent as MDXContentType } from '../../lib/mdx';

export function MDXContentSection() {
  const { language } = useLanguage();
  const [mdxContent, setMdxContent] = useState<MDXContentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  useEffect(() => {
    const loadMDXContent = async () => {
      setIsLoading(true);
      try {
        // Use static content based on language
        const content = language === 'pt-BR' ? getPortugueseContent() : getEnglishContent();
        setMdxContent(content);
      } catch (error) {
        console.error('Error loading MDX content:', error);
        // Fallback content
        setMdxContent({
          metadata: {
            title: language === 'pt-BR' ? 'Sobre Diego Lorandi' : 'About Diego Lorandi',
            subtitle: language === 'pt-BR' ? 'Desenvolvedor Fullstack' : 'Fullstack Developer',
            lastUpdated: '2024-01-15',
            author: 'Diego Lorandi',
          },
          content: language === 'pt-BR' 
            ? '# Sobre Mim\n\nOlá! Eu sou Diego Lorandi, um desenvolvedor fullstack apaixonado...'
            : '# About Me\n\nHello! I\'m Diego Lorandi, a passionate fullstack developer...'
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadMDXContent();
  }, [language]);

  const getEnglishContent = (): MDXContentType => ({
    metadata: {
      title: "About Diego Lorandi",
      subtitle: "Fullstack Developer & Remote Work Specialist",
      lastUpdated: "2024-01-15",
      author: "Diego Lorandi"
    },
    content: `# About Me

Hello! I'm **Diego Lorandi**, a passionate fullstack developer based in Brazil, specializing in modern web technologies and remote collaboration. I love turning complex problems into simple, beautiful digital solutions.

## My Journey

My journey in software development has been driven by curiosity and a genuine passion for technology. I believe in the power of code to create meaningful experiences and solve real-world problems.

### What I Do

- **Frontend Development**: Creating responsive, accessible, and beautiful user interfaces using React, Next.js, and TypeScript
- **Backend Development**: Building robust APIs and server-side applications with Node.js, Express, and modern databases
- **Full-Stack Solutions**: Delivering complete web applications from conception to deployment
- **Remote Collaboration**: Working effectively with international teams across different time zones

## Technical Philosophy

I believe in:

- **Clean, Maintainable Code**: Writing code that is not just functional, but readable and sustainable
- **Performance First**: Optimizing for speed and efficiency without compromising on functionality
- **Accessibility**: Creating inclusive experiences that work for everyone
- **Continuous Learning**: Staying current with evolving technologies and best practices

## Beyond Code

When I'm not coding, you'll find me:

- Exploring new technologies and frameworks
- Contributing to open-source projects
- Learning about design principles and user experience
- Enjoying the vibrant tech community in Brazil

---

*Ready to collaborate on your next project? [Let's get in touch!](/contact)*`
  });

  const getPortugueseContent = (): MDXContentType => ({
    metadata: {
      title: "Sobre Diego Lorandi",
      subtitle: "Desenvolvedor Fullstack & Especialista em Trabalho Remoto",
      lastUpdated: "2024-01-15",
      author: "Diego Lorandi"
    },
    content: `# Sobre Mim

Olá! Eu sou **Diego Lorandi**, um desenvolvedor fullstack apaixonado baseado no Brasil, especializado em tecnologias web modernas e colaboração remota. Adoro transformar problemas complexos em soluções digitais simples e bonitas.

## Minha Jornada

Minha jornada no desenvolvimento de software tem sido impulsionada pela curiosidade e uma paixão genuína pela tecnologia. Acredito no poder do código para criar experiências significativas e resolver problemas do mundo real.

### O Que Eu Faço

- **Desenvolvimento Frontend**: Criando interfaces de usuário responsivas, acessíveis e bonitas usando React, Next.js e TypeScript
- **Desenvolvimento Backend**: Construindo APIs robustas e aplicações server-side com Node.js, Express e bancos de dados modernos
- **Soluções Full-Stack**: Entregando aplicações web completas da concepção ao deployment
- **Colaboração Remota**: Trabalhando efetivamente com equipes internacionais em diferentes fusos horários

## Filosofia Técnica

Eu acredito em:

- **Código Limpo e Sustentável**: Escrevendo código que não seja apenas funcional, mas legível e sustentável
- **Performance em Primeiro Lugar**: Otimizando para velocidade e eficiência sem comprometer a funcionalidade
- **Acessibilidade**: Criando experiências inclusivas que funcionam para todos
- **Aprendizado Contínuo**: Mantendo-me atualizado com tecnologias e melhores práticas em evolução

## Além do Código

Quando não estou programando, você me encontrará:

- Explorando novas tecnologias e frameworks
- Contribuindo para projetos open-source
- Aprendendo sobre princípios de design e experiência do usuário
- Aproveitando a vibrante comunidade tech no Brasil

---

*Pronto para colaborar no seu próximo projeto? [Vamos conversar!](/contact)*`
  });

  // Parse and render the MDX content as HTML
  const renderContent = (mdxContent: string) => {
    return mdxContent
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-foreground mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium text-foreground mb-3 mt-6">$1</h3>')
      .replace(/^\- (.*$)/gim, '<li class="text-muted-foreground mb-2 ml-4">• $1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline transition-colors">$1</a>')
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.includes('<h') || paragraph.includes('<li')) {
          return paragraph;
        }
        return `<p class="text-muted-foreground leading-relaxed mb-4">${paragraph}</p>`;
      })
      .join('');
  };

  if (isLoading) {
    return (
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!mdxContent) {
    return null;
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Metadata */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {mdxContent.metadata.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              {mdxContent.metadata.subtitle}
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span>By {mdxContent.metadata.author}</span>
              <span>•</span>
              <span>Updated {mdxContent.metadata.lastUpdated}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: renderContent(mdxContent.content)
            }}
          />
        </motion.div>
      </div>
    </section>
  );
} 