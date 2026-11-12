import { LanguageProvider } from './context/LanguageProvider';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-page text-primary flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
