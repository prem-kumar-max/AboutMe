import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-teal-500/10 top-1/4 -left-32" />
      <div className="blob w-80 h-80 bg-sky-500/8 top-1/3 right-0" />
      <div className="blob w-64 h-64 bg-indigo-500/6 bottom-1/4 left-1/3" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 py-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="section-label mb-5 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Software Engineer &amp; AI Developer
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">Prem Kumar</span>
            <br />
            <span className="text-white">Thanneru</span>
          </h1>
          <p
            className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            Detail-oriented engineer with a passion for AI &amp; Data Science. I build
            scalable, end-to-end web frameworks and intelligent applications that solve
            real problems.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-12 animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold text-sm hover:bg-teal-400 transition-colors duration-200 shadow-lg shadow-teal-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:border-teal-500/40 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-5 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            {[
              { icon: Github, href: 'https://github.com/prem-kumar-max', label: 'GitHub' },
              { icon: Linkedin, href: 'http://www.linkedin.com/in/prem-kumar-max', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:prem64748494@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+919392569121', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 hover:bg-teal-500/5 transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div
          className="flex-shrink-0 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <div className="relative animate-float">
            <div className="photo-outer">
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#050811]">
                <img
                  src="/model.jpg"
                  alt="Prem Kumar Thanneru"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-8 bg-[#0f1929] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-500 font-medium">Status</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <p className="text-sm text-white font-semibold">Open to Work</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-8 bg-[#0f1929] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-500 font-medium">Graduation</p>
              <p className="text-sm text-white font-semibold mt-0.5">B.Tech 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-teal-400 transition-colors duration-200"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
