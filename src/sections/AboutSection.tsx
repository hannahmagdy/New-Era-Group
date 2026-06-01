import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function AboutSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text — fades from left */}
          <Reveal direction="left" duration={800}>
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <span className="divider-line" />
              <h2 className="section-title mb-7">
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
                  className="text-navy font-semibold text-lg leading-snug"
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
                className="btn-primary group mt-10"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </Reveal>

          {/* Image — fades from right */}
          <Reveal direction="right" duration={800} delay={100}>
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="New Era Group Vision"
                  className="w-full h-[540px] object-cover"
                />
                <div className="absolute bottom-8 right-0 bg-navy text-white p-7 w-56 shadow-2xl">
                  <p
                    className="text-cyan text-[10px] tracking-[0.3em] uppercase mb-2"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Founded With
                  </p>
                  <p
                    className="text-white text-xl font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    A Bold Ambition
                  </p>
                  <div className="w-8 h-[2px] bg-cyan mt-4" />
                </div>
              </div>
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-cyan/30 pointer-events-none" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border border-soft-blue/20 pointer-events-none" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
