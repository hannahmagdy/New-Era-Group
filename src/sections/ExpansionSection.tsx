import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const pipeline = [
  'Uppingham New Cairo',
  "King's School Canterbury Cairo",
  'Higher education and university developments',
  'Innovation and entrepreneurship hubs',
  'Integrated residential and lifestyle communities',
  'Sports and youth development platforms',
];

const regions = ['Egypt', 'Saudi Arabia', 'UAE', 'and beyond'];

export default function ExpansionSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="expansion" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image — fades from left */}
          <Reveal direction="left" duration={800}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Expansion & Pipeline"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-navy/30" />

              {/* Region tags */}
              <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-semibold"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="absolute -top-5 -right-5 w-20 h-20 border border-cyan/30 pointer-events-none" />
            </div>
          </Reveal>

          {/* Text — fades from right */}
          <Reveal direction="right" duration={800} delay={80}>
            <span className="section-eyebrow">Expansion & Pipeline</span>
            <span className="divider-line" />
            <h2 className="section-title mb-6">
              Building the<br />Next Chapter
            </h2>
            <p
              className="text-navy/60 text-sm leading-[1.8] mb-8"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              New Era Group continues to expand its footprint through ambitious projects and regional partnerships across Egypt, Saudi Arabia, UAE, and beyond.
            </p>

            <p
              className="text-navy/45 text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Current pipeline initiatives include:
            </p>

            <ul className="space-y-3 mb-9">
              {pipeline.map((item, i) => (
                <Reveal key={item} direction="right" delay={i * 60} duration={600}>
                  <li
                    className="flex items-start gap-3 text-navy/65 text-sm"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    <span className="w-[5px] h-[5px] bg-cyan rounded-full mt-[0.45rem] shrink-0" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>

            <p
              className="text-navy font-semibold text-[0.95rem] leading-snug mb-10 border-l-2 border-cyan pl-5"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Our ambition is to create scalable ecosystems that deliver lasting educational, social, and economic impact.
            </p>

            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary group"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
