import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-page text-primary flex flex-col">
      <Navbar /> 
      <Hero />
      <Projects />
    </div>
  )
}

export default App
