import Reveal from '../components/Reveal';

const partners = [
  'Uppingham School UK',
  "The King's School Canterbury",
  'Moon Hall Reigate',
  'Chelsea FC',
  'Rafa Nadal Academy',
  'NBA',
  'G Developments',
  'Bloom Holding',
];

const values = ['Excellence', 'Long-Term Impact', 'Innovation', 'Future-Focused Growth'];

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="py-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left text — fades from left */}
          <Reveal direction="left" duration={800}>
            <span className="section-eyebrow">Strategic Partnerships</span>
            <span className="divider-line" />
            <h2 className="section-title mb-7">
              Partnerships That<br />Shape Excellence
            </h2>
            <p className="section-lead mb-8">
              New Era Group collaborates with globally respected institutions and brands across education, sports, and development.
            </p>

            <p
              className="text-navy/50 text-[11px] tracking-[0.25em] uppercase mb-4 font-semibold"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Our partnerships are built on shared values:
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {values.map((v) => (
                <span
                  key={v}
                  className="border border-soft-blue/30 text-soft-blue text-[10px] tracking-[0.2em] uppercase px-4 py-2 font-semibold"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  {v}
                </span>
              ))}
            </div>

            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Strategic Partnerships"
              className="w-full h-64 object-cover"
            />
          </Reveal>

          {/* Right partners grid — fades from right */}
          <Reveal direction="right" duration={800} delay={80}>
            <p
              className="text-navy/45 text-[10px] tracking-[0.35em] uppercase mb-6 font-semibold"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Key Strategic Partners
            </p>
            <div className="grid grid-cols-1 gap-px bg-beige">
              {partners.map((partner, i) => (
                <Reveal key={partner} direction="right" delay={i * 55} duration={600}>
                  <div className="bg-white px-7 py-5 flex items-center justify-between group hover:bg-navy transition-all duration-400 cursor-default">
                    <span
                      className="text-navy group-hover:text-white font-semibold text-sm transition-colors duration-400"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {partner}
                    </span>
                    <span className="w-1.5 h-1.5 bg-cyan/40 group-hover:bg-cyan rotate-45 transition-colors duration-400 shrink-0" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
