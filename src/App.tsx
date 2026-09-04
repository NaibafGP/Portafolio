import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-page text-primary flex flex-col">
      <Navbar /> 
      <Hero />
      <Projects />
      <About />
    </div>
  )
}

export default App
