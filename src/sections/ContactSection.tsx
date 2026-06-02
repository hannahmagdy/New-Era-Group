import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';

const contactDetails = [
  { icon: MapPin, label: 'Location', value: 'New Cairo, Egypt' },
  { icon: Phone, label: 'Phone', value: '[Phone Number]' },
  { icon: Mail, label: 'Email', value: '[Email Address]' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text fades from left */}
          <Reveal direction="left" duration={800}>
            <span className="section-eyebrow">Contact</span>
            <span className="divider-line" />
            <h2 className="section-title mb-6">
              Let's Build the Future Together
            </h2>
            <p
              className="text-navy/60 leading-[1.8] mb-12 text-[0.95rem]"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Whether you are an investor, strategic partner, educational institution, or community collaborator, we welcome opportunities to shape impactful ecosystems together.
            </p>

            <div className="space-y-7 mb-12">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-navy flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-cyan" />
                  </div>
                  <div>
                    <p
                      className="text-navy/40 text-[10px] tracking-[0.3em] uppercase mb-1"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-navy text-sm font-medium"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="h-48 bg-navy/8 border border-beige flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20" />
              <div className="relative text-center z-10">
                <MapPin size={22} className="text-soft-blue mx-auto mb-2" />
                <p
                  className="text-navy/50 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                >
                  New Cairo, Egypt
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — form fades from right */}
          <Reveal direction="right" duration={800} delay={80}>
            <div className="bg-white p-10 lg:p-12 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-cyan/15 flex items-center justify-center mx-auto mb-6">
                    <Send size={22} className="text-soft-blue" />
                  </div>
                  <h3
                    className="text-navy text-2xl font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Message Sent
                  </h3>
                  <p
                    className="text-navy/55 text-sm"
                    style={{ fontFamily: 'var(--font-secondary)' }}
                  >
                    Thank you for reaching out. Our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-navy text-xl font-semibold mb-7"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Get in Touch
                  </h3>

                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-navy/45 text-[10px] tracking-[0.3em] uppercase mb-2"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        className="w-full border-b border-beige focus:border-navy outline-none px-0 py-3 text-navy text-sm transition-colors duration-300 bg-transparent placeholder:text-navy/25"
                        style={{ fontFamily: 'var(--font-secondary)' }}
                      />
                    </div>
                  ))}

                  <div className="pt-1">
                    <label
                      htmlFor="message"
                      className="block text-navy/45 text-[10px] tracking-[0.3em] uppercase mb-2"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-b border-beige focus:border-navy outline-none px-0 py-3 text-navy text-sm resize-none transition-colors duration-300 bg-transparent placeholder:text-navy/25"
                      style={{ fontFamily: 'var(--font-secondary)' }}
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="btn-primary group w-full justify-center">
                      <span>Get in Touch</span>
                      <Send size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
