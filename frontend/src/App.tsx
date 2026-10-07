import { Navigation } from './components/navigation/Navigation';
import { Hero } from './sections/Hero';
import { AiChatSection } from './sections/AiChatSection';
import { KnowledgeSection } from './sections/KnowledgeSection';
import { WorkSection } from './sections/WorkSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="relative">
      <Navigation />
      
      <main>
        <Hero />
        <AiChatSection />
        <KnowledgeSection />
        <WorkSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

