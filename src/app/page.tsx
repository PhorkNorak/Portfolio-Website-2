import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Reviews from '@/components/sections/Reviews';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </main>
  );
}
