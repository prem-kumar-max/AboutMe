import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Chat Application',
    subtitle: 'Real-time messaging platform',
    description:
      'A feature-rich chat application built with Flutter and Firebase enabling seamless real-time communication. Implements authentication, instant messaging, cloud storage, and push notifications with a responsive and scalable UI.',
    image: '/IMG_0329.JPG.jpeg',
    tags: ['Flutter', 'Firebase', 'Dart', 'Push Notifications', 'Real-time'],
    github: 'https://github.com/prem-kumar-max',
    color: 'from-teal-500/20 to-cyan-500/5',
    accent: 'teal',
  },
  {
    title: 'SkillConnect',
    subtitle: 'Social & Business Networking Platform',
    description:
      'A social and business networking platform using Java Spring Boot that enables seamless service discovery and booking. Connects users with professionals, streamlining service requests and fostering collaboration through RESTful APIs and scalable architecture.',
    image: '/model.jpg',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Authentication'],
    github: 'https://github.com/prem-kumar-max',
    color: 'from-sky-500/20 to-blue-500/5',
    accent: 'sky',
  },
  {
    title: 'Smart Bike Rental Platform',
    subtitle: 'ML-powered rental marketplace',
    description:
      'An intelligent bike rental platform allowing users to buy, sell, or rent bikes through an intuitive interface. Powered by Flask APIs, SQLite, ML-driven predictions, and an NLP-based chatbot for enhanced user engagement.',
    image: '/one.PNG',
    tags: ['Python', 'Flask', 'SQLite', 'Machine Learning', 'NLP', 'HTML/CSS'],
    github: 'https://github.com/prem-kumar-max',
    color: 'from-violet-500/20 to-indigo-500/5',
    accent: 'violet',
  },
];

const accentMap: Record<string, string> = {
  teal: 'border-teal-500/30 hover:border-teal-500/50',
  sky: 'border-sky-500/30 hover:border-sky-500/50',
  violet: 'border-violet-500/30 hover:border-violet-500/50',
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="blob w-80 h-80 bg-violet-500/6 top-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Projects</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
          Things I've <span className="text-gradient">built</span>
        </h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group card-hover bg-[#0f1929] border ${accentMap[p.accent]} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Image */}
                <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} z-10`} />
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#050811]/40 z-20" />
                  <div className={`absolute bottom-0 ${i % 2 === 1 ? 'right-0' : 'left-0'} m-4 z-30`}>
                    <span className={`tag text-xs`}>0{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                    {p.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
