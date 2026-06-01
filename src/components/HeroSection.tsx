import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  id?: string;
  image: string;
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: 'navy' | 'plum' | 'gradient';
  showScroll?: boolean;
}

export default function HeroSection({
  id,
  image,
  label,
  title,
  titleHighlight,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  height = 'full',
  overlay = 'navy',
  showScroll = true,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const heightClass =
    height === 'full' ? 'min-h-screen' : height === 'large' ? 'min-h-[85vh]' : 'min-h-[60vh]';

  const overlayClass =
    overlay === 'navy'
      ? 'bg-navy/65'
      : overlay === 'plum'
      ? 'bg-plum/72'
      : 'bg-gradient-to-b from-navy/85 via-navy/55 to-plum/65';

  const handleScroll = (href?: string) => {
    if (!href) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const item = (delay: number) => ({
    style: {
      transitionDuration: '900ms',
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    className: `transition-all ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`,
  });

  return (
    <section
      id={id}
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover hero-bg scale-105"
        style={{
          backgroundImage: `url(${image})`,
          transform: 'scale(1.05)',
        }}
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />
      {/* Subtle left accent bar */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-cyan/60 to-transparent" />

      {/* Content — centered, fade-up only */}
      <div className="relative z-10 max-w-[52rem] mx-auto px-6 text-center">
        {label && (
          <p {...item(100)} style={{ ...item(100).style, fontFamily: 'var(--font-secondary)' }}
            className={`${item(100).className} text-cyan text-[10px] tracking-[0.45em] uppercase mb-6`}
          >
            {label}
          </p>
        )}

        {/* Thin horizontal rule */}
        <div
          {...item(180)}
          className={`${item(180).className} flex items-center justify-center gap-4 mb-8`}
        >
          <span className="block w-12 h-[1px] bg-cyan/50" />
          <span className="block w-1.5 h-1.5 bg-cyan/60 rotate-45" />
          <span className="block w-12 h-[1px] bg-cyan/50" />
        </div>

        <h1
          {...item(260)}
          style={{ ...item(260).style, fontFamily: 'var(--font-primary)' }}
          className={`${item(260).className} text-[2.6rem] md:text-[4rem] lg:text-[4.8rem] font-semibold text-white leading-[1.1] mb-7 tracking-[-0.02em]`}
        >
          {title}
          {titleHighlight && (
            <>
              {' '}
              <em className="text-cyan not-italic">{titleHighlight}</em>
            </>
          )}
        </h1>

        {subtitle && (
          <p
            {...item(400)}
            style={{ ...item(400).style, fontFamily: 'var(--font-secondary)' }}
            className={`${item(400).className} text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-[1.7] mb-12`}
          >
            {subtitle}
          </p>
        )}

        {(ctaText || secondaryCtaText) && (
          <div
            {...item(530)}
            style={item(530).style}
            className={`${item(530).className} flex flex-col sm:flex-row items-center justify-center gap-4`}
          >
            {ctaText && (
              <button
                onClick={() => handleScroll(ctaHref)}
                className="btn-accent group"
              >
                <span>{ctaText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}
            {secondaryCtaText && (
              <button
                onClick={() => handleScroll(secondaryCtaHref)}
                className="btn-outline"
              >
                <span>{secondaryCtaText}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div
          {...item(750)}
          style={item(750).style}
          className={`${item(750).className} absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2`}
        >
          <span
            className="text-white/40 text-[10px] tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          <ChevronDown size={14} className="text-white/30" />
        </div>
      )}
    </section>
  );
}
