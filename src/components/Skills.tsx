const skillGroups = [
  {
    category: 'Languages',
    color: 'from-teal-500 to-cyan-400',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 82 },
      { name: 'SQL', level: 80 },
      { name: 'Java', level: 72 },
      { name: 'Dart / Flutter', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    color: 'from-sky-500 to-blue-400',
    skills: [
      { name: 'React JS', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Angular', level: 70 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 78 },
    ],
  },
  {
    category: 'Backend & Data',
    color: 'from-violet-500 to-indigo-400',
    skills: [
      { name: 'Django / Flask', level: 75 },
      { name: 'Spring Boot', level: 68 },
      { name: 'REST APIs', level: 82 },
      { name: 'SQLite / MySQL', level: 78 },
      { name: 'Machine Learning', level: 72 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Firebase', level: 78 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'OOP Concepts', level: 88 },
      { name: 'NLP', level: 65 },
      { name: 'Android Dev', level: 68 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="blob w-80 h-80 bg-teal-500/8 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Technical Skills</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          What I <span className="text-gradient">work with</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover bg-[#0f1929] border border-white/8 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-lg font-bold text-white">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
