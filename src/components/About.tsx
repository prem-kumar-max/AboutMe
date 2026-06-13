import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

const softSkills = [
  'Problem-solving', 'Leadership', 'Active Listening',
  'Creativity', 'Adaptability', 'Time Management',
  'Interpersonal Communication', 'Optimism', 'Patience',
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="blob w-72 h-72 bg-sky-500/6 top-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">About Me</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          Crafting the future with <span className="text-gradient">code & curiosity</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — photo & quick facts */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/8 h-96">
              <img
                src="/one.PNG"
                alt="Prem Kumar"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">Prem Kumar Thanneru</p>
                <p className="text-slate-400 text-sm mt-1">B.Tech AI &amp; Data Science · CGPA 7.60</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: GraduationCap, label: 'Education', value: 'B.Tech 2025' },
                { icon: MapPin, label: 'Location', value: 'India' },
                { icon: Briefcase, label: 'Experience', value: '2 Internships' },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#0f1929] border border-white/8 rounded-xl p-4 text-center"
                >
                  <Icon size={18} className="text-teal-400 mx-auto mb-2" />
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-white font-semibold mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio, education, soft skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Profile Summary</h3>
              <p className="text-slate-400 leading-relaxed">
                Detail-oriented Software Engineer with a strong foundation in Artificial Intelligence
                and Data Science. I'm experienced in hands-on design, programming, and scripting to
                deliver scalable, end-to-end web frameworks and applications.
              </p>
              <p className="text-slate-400 leading-relaxed mt-3">
                Proficient in Python, SQL, JavaScript, and ReactJS with practical exposure to backend
                frameworks (Django/Flask) and database management. Skilled in UI/UX best practices,
                performance tuning, API integration, and cloud-based workflows.
              </p>
            </div>

            <div className="bg-[#0f1929] border border-white/8 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Education</h3>
              <div className="flex gap-4">
                <div className="timeline-dot mt-1" />
                <div>
                  <p className="text-white font-semibold">B.Tech — Artificial Intelligence & Data Science</p>
                  <p className="text-teal-400 text-sm font-medium mt-0.5">Usha Rama College of Engineering and Technology</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="tag">2021 – 2025</span>
                    <span className="tag">CGPA: 7.60 / 10</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
