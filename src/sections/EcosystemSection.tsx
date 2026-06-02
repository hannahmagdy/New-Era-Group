import { GraduationCap, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const pillars = [
  {
    id: 'education',
    icon: GraduationCap,
    label: 'Education',
    title: 'World-Class British Education',
    description:
      "Delivering world-class British education through strategic partnerships with some of the UK's most respected institutions.",
    closing:
      'We combine academic excellence, character development, innovation, and wellbeing to create future-ready learning environments.',
    listLabel: 'Our education ecosystem includes:',
    items: [
      'Uppingham Cairo',
      'Uppingham New Cairo',
      "The King's School Canterbury Cairo",
      'Moon Hall Cairo',
    ],
    image:
      'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Education',
  },
  {
    id: 'platforms',
    icon: Layers,
    label: 'Platforms',
    title: 'New Era Platforms',
    description:
      'Developing integrated lifestyle and youth-focused destinations that bring together sports, wellness, communities, culture, and everyday experiences.',
    closing:
      'Through New Era Platforms, we are creating environments designed around connection, performance, and belonging.',
    listLabel: 'Key verticals include:',
    items: [
      'Sports & Performance',
      'Communities',
      'Lifestyle Experiences',
    ],
    image:
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Platforms',
  },
  {
    id: 'future-expansion',
    icon: TrendingUp,
    label: 'Future Expansion',
    title: 'Future Expansion',
    description:
      "Our vision extends beyond K-12 education. New Era Group is actively expanding into:",
    closing: '',
    listLabel: '',
    items: [
      'Higher education',
      'Innovation hubs',
      'Regional education partnerships',
      'Youth development platforms',
      'Integrated mixed-use destinations across the Middle East and North Africa',
    ],
    image:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Future Expansion',
  },
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Reveal direction="up" duration={750} className="max-w-2xl mb-14">
          <span className="section-eyebrow">What We Build</span>
          <span className="divider-line" />
          <h2 className="section-title mb-5">Our Ecosystem</h2>
          <p className="section-lead">
            Three interconnected pillars — each reinforcing the others to create environments where people learn, perform, live, and thrive.
          </p>
        </Reveal>

        {/* Pillar rows — alternating image/text direction */}
        <div className="space-y-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;
            const imageDir = isEven ? 'left' : 'right';
            const textDir = isEven ? 'right' : 'left';

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group grid lg:grid-cols-2 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-700"
              >
                {/* Image */}
                <Reveal
                  direction={imageDir}
                  duration={800}
                  threshold={0.1}
                  className={`relative overflow-hidden h-72 lg:h-auto ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/15 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span
                      className="bg-navy text-white text-[10px] tracking-[0.3em] uppercase px-4 py-2 font-semibold"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal
                  direction={textDir}
                  duration={800}
                  delay={80}
                  threshold={0.1}
                  className={`p-10 lg:p-14 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 bg-soft-blue/10 flex items-center justify-center">
                      <Icon size={17} className="text-soft-blue" />
                    </div>
                    <span
                      className="text-soft-blue text-[10px] tracking-[0.3em] uppercase font-semibold"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {pillar.label}
                    </span>
                  </div>

                  <h3
                    className="text-[1.65rem] md:text-[2rem] font-semibold text-navy mb-4 leading-[1.2]"
                    style={{ fontFamily: 'var(--font-primary)', letterSpacing: '-0.01em' }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="text-navy/60 text-sm leading-[1.8] mb-4"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    {pillar.description}
                  </p>

                  {pillar.listLabel && (
                    <p
                      className="text-navy/50 text-[11px] tracking-[0.15em] uppercase mb-3 font-semibold"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {pillar.listLabel}
                    </p>
                  )}

                  <ul className="space-y-2.5 mb-5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-navy/65 text-sm"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                      >
                        <span className="w-[5px] h-[5px] bg-cyan rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {pillar.closing && (
                    <p
                      className="text-navy/60 text-sm leading-[1.8] mb-7"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {pillar.closing}
                    </p>
                  )}

                  <button
                    className="group/btn flex items-center gap-2 text-soft-blue text-[11px] tracking-[0.2em] uppercase font-bold hover:text-navy transition-colors duration-200 self-start mt-2"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Learn More
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
