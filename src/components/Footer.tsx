import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Code2 size={14} className="text-teal-400" />
          </div>
          <span className="text-slate-400 text-sm">
            Designed &amp; Built by <span className="text-teal-400 font-semibold">Prem Kumar Thanneru</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/prem-kumar-max', label: 'GitHub' },
            { icon: Linkedin, href: 'http://www.linkedin.com/in/prem-kumar-max', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:prem64748494@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/30 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
