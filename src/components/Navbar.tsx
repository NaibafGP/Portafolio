const NAV_LINKS = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#about", label: "Sobre Mí" },
] as const;

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2.5 sm:py-3 flex justify-between items-center md:grid md:grid-cols-3">
        {/* Espaciador izquierdo para centrar el menú en escritorio */}
        <div className="hidden md:block" />

        {/* Menú central */}
        <ul className="flex items-center gap-4 sm:gap-6 md:justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem href={link.href}>{link.label}</NavItem>
            </li>
          ))}
        </ul>

        {/* Botón derecho */}
        <div className="flex justify-end items-center">
          <a
            href="/cv.pdf"
            download="Fabian_Garcia_CV.pdf"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <span className="hidden sm:inline">Descargar </span>CV
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative py-1 text-secondary hover:text-primary transition-colors text-xs sm:text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
    >
      {children}
    </a>
  );
}