import { ArrowRight, GraduationCap, Building2, Layers } from 'lucide-react';
import Reveal from '../components/Reveal';

const subsidiaries = [
  {
    icon: GraduationCap,
    name: 'New Era Education',
    description:
      'Delivering world-class British schooling through partnerships with Uppingham, King\'s Canterbury, and Moon Hall — creating future-ready learners.',
    color: 'bg-soft-blue/10',
    iconColor: 'text-soft-blue',
    accent: 'bg-soft-blue',
  },
  {
    icon: Building2,
    name: 'New Era Communities',
    description:
      'Designing integrated residential and lifestyle destinations where wellbeing, culture, and connection converge into thriving neighbourhoods.',
    color: 'bg-cyan/10',
    iconColor: 'text-navy',
    accent: 'bg-cyan',
  },
  {
    icon: Layers,
    name: 'New Era Platforms',
    description:
      'Building youth-focused sports, performance, and lifestyle venues — spaces engineered for ambition, belonging, and peak experience.',
    color: 'bg-navy/8',
    iconColor: 'text-navy',
    accent: 'bg-navy',
  },
];

export default function AboutSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top two-col: text + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Text */}
          <Reveal direction="left" duration={800}>
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <span className="divider-line" />
              <h2 className="section-title mb-6">
                A Vision Beyond<br />Education
              </h2>
              <div className="space-y-4 section-lead">
                <p>
                  New Era Group was founded with a bold ambition: to create impactful ecosystems that empower future generations through education, community, wellbeing, and innovation.
                </p>
                <p>
                  What began as a commitment to premium British education has evolved into a broader regional platform spanning schools, sports development, integrated communities, lifestyle destinations, and future higher education initiatives.
                </p>
                <p
                  className="text-navy font-semibold text-base leading-snug"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  We believe education is only the beginning.
                </p>
                <p>
                  The true value lies in building connected environments where people can learn, perform, live, and thrive.
                </p>
              </div>
              <button
                onClick={() => handleNav('#ecosystem')}
                className="btn-primary group mt-8"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal direction="right" duration={800} delay={100}>
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="New Era Group Vision"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-8 right-0 bg-navy text-white p-6 w-52 shadow-2xl">
                  <p
                    className="text-cyan text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Founded With
                  </p>
                  <p
                    className="text-white text-lg font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    A Bold Ambition
                  </p>
                  <div className="w-8 h-[2px] bg-cyan mt-3" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-cyan/30 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-soft-blue/20 pointer-events-none" />
            </div>
          </Reveal>

        </div>

        {/* Our Subsidiaries */}
        <Reveal direction="up" duration={700} className="mb-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="section-eyebrow">Our Subsidiaries</span>
            <span className="divider-line mx-auto" />
            <h2 className="section-title mb-4">Three Pillars, One Vision</h2>
            <p className="section-lead mx-auto text-center">
              Each subsidiary operates with its own focus and identity, united by New Era Group's commitment to long-term impact.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {subsidiaries.map((sub, i) => {
            const Icon = sub.icon;
            return (
              <Reveal key={sub.name} direction="up" delay={i * 100} duration={700}>
                <div className="group bg-white border border-beige hover:border-soft-blue/30 hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Accent top bar */}
                  <div className={`h-[3px] w-full ${sub.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="p-8 flex flex-col flex-1">
                    <div className={`w-11 h-11 ${sub.color} flex items-center justify-center mb-5`}>
                      <Icon size={18} className={sub.iconColor} />
                    </div>

                    <h3
                      className="text-navy text-[1.2rem] font-semibold mb-3 leading-snug"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {sub.name}
                    </h3>

                    <p
                      className="text-navy/55 text-sm leading-[1.8] flex-1"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {sub.description}
                    </p>

                    <div className={`w-6 h-[2px] ${sub.accent} mt-6 group-hover:w-10 transition-all duration-300`} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
