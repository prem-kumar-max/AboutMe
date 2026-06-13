import { Award, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'Artificial Intelligence — Human Interactions & Methodologies',
    issuer: 'Infosys Springboard',
    icon: '🤖',
    color: 'from-teal-500/15 to-cyan-500/5',
    border: 'border-teal-500/20',
  },
  {
    title: 'Core Employability Skills',
    issuer: 'Edunet Foundation, APSSDC',
    icon: '💼',
    color: 'from-sky-500/15 to-blue-500/5',
    border: 'border-sky-500/20',
  },
  {
    title: 'Introduction to Industry 4.0 & Industrial Internet of Things',
    issuer: 'NPTEL',
    icon: '🏭',
    color: 'from-violet-500/15 to-indigo-500/5',
    border: 'border-violet-500/20',
  },
  {
    title: 'Blockchain and Its Applications',
    issuer: 'NPTEL',
    icon: '⛓️',
    color: 'from-amber-500/15 to-orange-500/5',
    border: 'border-amber-500/20',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    icon: '🔒',
    color: 'from-emerald-500/15 to-green-500/5',
    border: 'border-emerald-500/20',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="blob w-72 h-72 bg-amber-500/5 top-1/2 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Certifications</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          Learning &amp; <span className="text-gradient">achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`card-hover bg-gradient-to-br ${cert.color} border ${cert.border} rounded-2xl p-6 flex flex-col`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <Award size={14} className="text-teal-400 mb-1" />
                  <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug">{cert.title}</h3>
            </div>
          ))}

          {/* GitHub / more */}
          <div className="card-hover bg-[#0f1929] border border-white/8 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <BookOpen size={28} className="text-teal-400 mb-3" />
            <p className="text-white font-semibold mb-1">Continuous Learner</p>
            <p className="text-slate-500 text-sm">
              Always exploring new technologies, online courses, and open-source contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
