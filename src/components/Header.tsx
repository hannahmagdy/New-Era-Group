import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Our Ecosystem',
    href: '#ecosystem',
    children: [
      { label: 'Education', href: '#education' },
      { label: 'Sports', href: '#sports' },
      { label: 'Communities', href: '#communities' },
      { label: 'Lifestyle', href: '#lifestyle' },
    ],
  },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-navy shadow-[0_4px_40px_rgba(28,50,81,0.45)] py-3.5'
          : 'bg-transparent py-7'
      } ${mounted ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionProperty: 'background-color, padding, box-shadow, opacity' }}
    >
      {/* Top accent line — only when not scrolled */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex flex-col items-start group"
        >
          <span
            className="text-white text-[1.35rem] font-semibold tracking-[0.1em] leading-none"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            NEW ERA
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="block w-3 h-[1px] bg-cyan/70 group-hover:w-5 transition-all duration-300" />
            <span
              className="text-cyan text-[9px] tracking-[0.45em] uppercase leading-none"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              GROUP
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => !item.children && handleNav(item.href)}
                className="nav-link flex items-center gap-1 py-1 group/nav"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-cyan scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                {item.children && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-navy/95 backdrop-blur-sm border border-white/10 shadow-2xl py-2"
                  style={{
                    animation: 'dropIn 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                  }}
                >
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-navy/95 border-l border-t border-white/10 rotate-45" />
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNav(child.href)}
                      className="block w-full text-left px-6 py-3 text-white/60 hover:text-white hover:bg-white/5 text-[11px] tracking-[0.18em] uppercase transition-colors duration-150 font-semibold"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden lg:flex items-center gap-2 border border-white/35 text-white text-[10px] tracking-[0.25em] uppercase font-bold px-6 py-2.5 hover:bg-white hover:text-navy hover:border-white transition-all duration-300"
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          Get in Touch
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-1.5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.children) {
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    } else {
                      handleNav(item.href);
                    }
                  }}
                  className="nav-link w-full text-left flex justify-between items-center py-4 border-b border-white/8"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="pl-4 py-2 bg-white/3">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNav(child.href)}
                        className="block text-white/55 hover:text-white text-[11px] py-2.5 tracking-[0.18em] uppercase font-semibold w-full text-left"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-5 border border-white/30 text-white text-[10px] tracking-[0.25em] uppercase font-bold py-3.5 text-center hover:bg-white hover:text-navy transition-all duration-300"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Get in Touch
            </button>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </header>
  );
}
