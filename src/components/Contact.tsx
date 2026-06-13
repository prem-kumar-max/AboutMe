import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prem64748494@gmail.com',
    href: 'mailto:prem64748494@gmail.com',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93925 69121',
    href: 'tel:+919392569121',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/prem-kumar-max',
    href: 'https://github.com/prem-kumar-max',
    color: 'text-slate-300',
    bg: 'bg-white/5 border-white/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/prem-kumar-max',
    href: 'http://www.linkedin.com/in/prem-kumar-max',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailtoUrl = `mailto:prem64748494@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="blob w-80 h-80 bg-teal-500/8 bottom-0 right-0" />
      <div className="blob w-60 h-60 bg-sky-500/6 top-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Let's <span className="text-gradient">work together</span>
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-xl">
          I'm currently open to new opportunities. Whether you have a project in mind, a
          question, or just want to say hi — my inbox is always open.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-6">Get in touch</h3>
            {contactLinks.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border ${bg} hover:scale-[1.02] transition-all duration-200 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-white text-sm font-medium truncate">{value}</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-teal-400 transition-colors flex-shrink-0" />
              </a>
            ))}

            <div className="mt-6 pt-6 border-t border-white/5">
              <a
                href="/Gradious.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-500 text-slate-900 font-semibold text-sm hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
              >
                Download Resume
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="John Doe"
                className="w-full bg-[#0f1929] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="john@example.com"
                className="w-full bg-[#0f1929] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-[#0f1929] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                sent
                  ? 'bg-emerald-500 text-white'
                  : 'bg-teal-500 text-slate-900 hover:bg-teal-400 shadow-lg shadow-teal-500/20'
              }`}
            >
              {sent ? (
                'Message sent!'
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
