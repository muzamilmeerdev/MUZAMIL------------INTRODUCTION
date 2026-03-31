import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, Target, Shield } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative">
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
              <User className="w-6 h-6 text-green-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(34,197,94,0.1)] hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.2)] transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am <span className="text-green-400 font-semibold">Muzamil Meer</span>, a passionate Cybersecurity learner and developer. 
                  I focus on <span className="text-cyan-400 font-semibold">Ethical Hacking</span> and building secure systems using 
                  Python and JavaScript.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  My goal is to protect digital systems and grow as a professional hacker, making the internet a safer place for everyone.
                </p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <StatsCard
                icon={<Shield className="w-6 h-6" />}
                title="Cybersecurity Focus"
                description="Specializing in ethical hacking and security"
                color="green"
                delay={0.6}
              />
              <StatsCard
                icon={<Target className="w-6 h-6" />}
                title="Continuous Learning"
                description="Always expanding skills and knowledge"
                color="cyan"
                delay={0.7}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({ icon, title, description, color, delay }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const colorClasses = {
    green: 'from-green-500/20 to-green-500/5 border-green-500/30 text-green-400',
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className={`p-6 rounded-xl bg-gradient-to-br ${colorClasses[color as 'green' | 'cyan']} backdrop-blur-md border shadow-lg hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`${color === 'green' ? 'text-green-400' : 'text-cyan-400'}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
