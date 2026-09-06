import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-page text-primary flex flex-col">
      <Navbar /> 
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
