import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Reveal from './Reveal';

const footerLinks = {
  ecosystem: [
    { label: 'Education', href: '#education' },
    { label: 'Sports & Academies', href: '#sports' },
    { label: 'Residential Communities', href: '#communities' },
    { label: 'Lifestyle Destinations', href: '#lifestyle' },
    { label: 'Higher Education', href: '#higher-education' },
  ],
  company: [
    { label: 'About New Era Group', href: '#about' },
    { label: 'Our Vision', href: '#about' },
    { label: 'Leadership', href: '#about' },
    { label: 'Partners', href: '#about' },
    { label: 'News & Updates', href: '#news' },
  ],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white">
      {/* Banner bar */}
      <div className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-plum/40 via-navy to-navy" />
        <Reveal direction="fade" duration={800} className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[1.5rem] md:text-[1.8rem] font-semibold text-white leading-snug"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Building Futures. Creating Communities.
            </p>
            <p
              className="text-white/50 text-sm mt-1.5"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Join the New Era Group ecosystem.
            </p>
          </div>
          <button
            onClick={() => handleNav('#contact')}
            className="border border-white/30 text-white text-[10px] tracking-[0.25em] uppercase font-bold px-8 py-3.5 hover:bg-white hover:text-navy hover:border-white transition-all duration-300 shrink-0"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Contact Us
          </button>
        </Reveal>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <Reveal direction="up" delay={0} duration={700}>
          <div className="mb-7">
            <p
              className="text-white text-[1.4rem] font-semibold tracking-[0.1em] leading-none"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              NEW ERA
            </p>
            <p
              className="text-cyan text-[9px] tracking-[0.45em] uppercase mt-0.5"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              GROUP
            </p>
          </div>
          <p
            className="text-white/50 text-sm leading-[1.8] mb-7"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            A future-focused investment and development platform creating integrated ecosystems across Egypt and the region.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/45 hover:text-white hover:border-cyan/50 hover:bg-white/5 transition-all duration-300"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Ecosystem */}
        <Reveal direction="up" delay={80} duration={700}>
          <h4
            className="text-white text-[10px] tracking-[0.35em] uppercase mb-6 font-bold"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Our Ecosystem
          </h4>
          <ul className="space-y-3.5">
            {footerLinks.ecosystem.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-white/50 hover:text-cyan text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Company */}
        <Reveal direction="up" delay={160} duration={700}>
          <h4
            className="text-white text-[10px] tracking-[0.35em] uppercase mb-6 font-bold"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Company
          </h4>
          <ul className="space-y-3.5">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-white/50 hover:text-cyan text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Contact */}
        <Reveal direction="up" delay={240} duration={700}>
          <h4
            className="text-white text-[10px] tracking-[0.35em] uppercase mb-6 font-bold"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Contact
          </h4>
          <ul className="space-y-5">
            {[
              { icon: MapPin, value: 'New Cairo, Egypt' },
              { icon: Phone, value: '+20 (2) 0000 0000' },
              { icon: Mail, value: 'info@neweragroup-eg.com' },
            ].map(({ icon: Icon, value }) => (
              <li key={value} className="flex items-start gap-3">
                <Icon size={13} className="text-cyan mt-1 shrink-0" />
                <span
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  {value}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p
              className="text-white/30 text-[9px] tracking-[0.3em] uppercase mb-3 font-bold"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Our Schools
            </p>
            {[
              'Uppingham Cairo',
              'Uppingham New Cairo',
              "The King's School Canterbury Cairo",
              'Moon Hall Cairo',
            ].map((s) => (
              <p
                key={s}
                className="text-white/35 text-xs leading-[1.9]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                {s}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-white/30 text-[11px] tracking-wider"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            &copy; {new Date().getFullYear()} New Era Group. All rights reserved.
          </p>
          <div className="flex gap-7">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((t) => (
              <button
                key={t}
                className="text-white/30 hover:text-white/60 text-[11px] tracking-wider transition-colors duration-200"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
