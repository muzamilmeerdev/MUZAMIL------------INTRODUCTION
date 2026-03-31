import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Code2, Shield, Database, Terminal } from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', level: 90, icon: Code2, color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', level: 85, icon: Code2, color: 'from-yellow-500 to-orange-500' },
  { name: 'Python', level: 88, icon: Terminal, color: 'from-blue-500 to-cyan-500' },
  { name: 'Cybersecurity', level: 75, icon: Shield, color: 'from-green-500 to-emerald-500' },
  { name: 'Web Security', level: 70, icon: Database, color: 'from-cyan-500 to-blue-500' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500" />
              <Code2 className="w-6 h-6 text-green-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, isInView }: any) {
  const [progress, setProgress] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 200 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 shadow-lg hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.2)] transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <span className="text-sm text-green-400 font-mono">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${skill.color} relative`}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}
