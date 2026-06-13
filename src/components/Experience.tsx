import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Android Developer Virtual Internship',
    company: 'AICTE EduSkills',
    period: 'Jan 2024 – Mar 2024',
    type: 'Internship',
    points: [
      'Enhanced skills in Android app development using Java and Android Studio.',
      'Implemented user-friendly interfaces following Material Design guidelines.',
      'Integrated third-party APIs and handled real-time data fetching.',
      'Debugged and optimized app performance across multiple device configurations.',
    ],
    tags: ['Android', 'Java', 'APIs', 'UI/UX'],
  },
  {
    role: 'Java Full Stack Intern',
    company: 'Makeskilled',
    period: 'Jul 2024 – Oct 2024',
    type: 'Internship',
    points: [
      'Built dynamic web applications using HTML, CSS, JavaScript and responsive design.',
      'Developed robust backend systems with Java and Spring Boot REST APIs.',
      'Worked on database design and integration using MySQL.',
      'Collaborated in agile sprints delivering iterative features for client projects.',
    ],
    tags: ['Java', 'Spring Boot', 'HTML/CSS', 'MySQL', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="blob w-72 h-72 bg-sky-500/6 top-1/2 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Experience</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          My <span className="text-gradient">professional journey</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-sky-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-8">
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={16} className="text-teal-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card-hover bg-[#0f1929] border border-white/8 rounded-2xl p-7">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-teal-400 font-semibold text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-teal-500 mt-1 flex-shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
