import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PhaseStructure from './components/PhaseStructure';
import AutomationsGrid from './components/AutomationsGrid';
import DashboardSection from './components/DashboardSection'; // <-- Imported here
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';


export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-teal-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PhaseStructure />
      <AutomationsGrid />
      <DashboardSection /> {/* <-- Dropped right here */}
      <PricingSection />
      <FaqSection />
      <CtaSection />
      
    </main>
  );
}