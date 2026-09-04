export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
  <div></div>
        
        <ul className="flex justify-center space-x-6">
            <li><a href="#projects" className="relative py-1 text-secondary hover:text-primary transition-colors text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">Proyectos</a></li>
            <li><a href="#skills" className="relative py-1 text-secondary hover:text-primary transition-colors text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">Habilidades</a></li>
            <li><a href="#experience" className="relative py-1 text-secondary hover:text-primary transition-colors text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">Experiencia</a></li>
            <li><a href="#education" className="relative py-1 text-secondary hover:text-primary transition-colors text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">Educación</a></li>
        </ul>
        <div className="flex justify-end">
        <a
        href="/cv.pdf"
        download="Fabian_Garcia_CV.pdf"
        className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors shadow-sm">Descargar CV
        </a>
        </div>
      </div>
    </nav>
  );
}