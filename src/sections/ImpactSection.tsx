import { DollarSign, Building2, Layers, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';

const model = [
  { icon: Building2, label: 'Development' },
  { icon: DollarSign, label: 'Investment' },
  { icon: Layers, label: 'Operations' },
  { icon: Sparkles, label: 'Ecosystem Creation' },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-32 bg-navy relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text — fades from left */}
          <Reveal direction="left" duration={800}>
            <span
              className="text-cyan text-[10px] tracking-[0.45em] uppercase mb-3 block font-semibold"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Our Impact
            </span>
            <span className="block w-12 h-[2px] bg-cyan mb-6" />
            <h2
              className="text-[2.1rem] md:text-[2.75rem] font-semibold text-white leading-[1.15] mb-7 tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Creating Long-Term Impact
            </h2>
            <p
              className="text-white/65 text-[1.05rem] leading-[1.75] mb-6"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              USD 150M+ invested across education and community development initiatives in Egypt.
            </p>

            <p
              className="text-white/50 text-sm leading-[1.8] mb-3"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Our model combines:
            </p>

            {/* Model pillars */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {model.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} direction="up" delay={i * 70} duration={600}>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/8 hover:border-cyan/20 transition-all duration-300">
                    <Icon size={14} className="text-cyan shrink-0" />
                    <span
                      className="text-white/70 text-xs font-semibold tracking-wide"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right — fades from right */}
          <Reveal direction="right" duration={800} delay={80}>
            <div className="space-y-6">
              <div className="border-l-2 border-cyan/40 pl-7 py-1">
                <p
                  className="text-white/70 text-sm leading-[1.85]"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  We are building destinations that integrate learning, living, wellbeing, performance, and community engagement into one connected experience.
                </p>
              </div>

              {/* Foundation coming soon */}
              <div className="bg-white/[0.04] border border-white/10 p-8 hover:border-cyan/25 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                  <span
                    className="text-cyan text-[10px] tracking-[0.35em] uppercase font-semibold"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  New Era Foundation
                </p>
                <div className="w-8 h-[2px] bg-cyan/40 mt-4" />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
