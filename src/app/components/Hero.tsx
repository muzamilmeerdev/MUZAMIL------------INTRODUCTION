import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Code, Terminal } from 'lucide-react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Ethical Hacker', 'Cybersecurity Expert', 'Developer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setTypedText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex]);

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Icon Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center gap-6 mb-8"
        >
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Terminal className="w-8 h-8 text-green-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient">
            Muzamil Meer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Future Ethical Hacker | Python & JavaScript Developer
        </motion.p>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-16 mb-12 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl font-mono text-green-400">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={handleViewWork}
          className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-semibold rounded-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all duration-300"
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-green-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MatrixRain() {
  const chars = '01アイウエオカキクケコサシスセソタチツテト';
  const columns = 50;
  
  return (
    <div className="flex justify-around h-full">
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col text-green-500 text-xs font-mono opacity-20"
          style={{
            animation: `matrix-fall ${3 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {Array.from({ length: 30 }).map((_, j) => (
            <span key={j}>{chars[Math.floor(Math.random() * chars.length)]}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
