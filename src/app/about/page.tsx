import { AboutHero } from '../../components/sections/AboutHero';
import { ProfessionalBackground } from '../../components/sections/ProfessionalBackground';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { EducationSection } from '../../components/sections/EducationSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { MDXContentSection } from '../../components/sections/MDXContentSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ProfessionalBackground />
      <SkillsSection />
      <EducationSection />
      
      {/* MDX Rich Content Section */}
      <MDXContentSection />
      
      <TestimonialsSection />
      <ContactCTA />
    </main>
  );
} 