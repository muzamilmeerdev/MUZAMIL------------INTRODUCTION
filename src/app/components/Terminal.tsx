import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const commands = [
    '> Initializing system...',
    '> Loading security modules...',
    '> Connecting to secure network...',
    '> System ready.',
    '> Welcome, Muzamil Meer',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        setLines((prev) => [...prev, commands[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-8 right-8 w-80 z-50 hidden lg:block"
    >
      <div className="p-4 rounded-lg bg-black/90 backdrop-blur-md border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-500/20">
          <TerminalIcon className="w-4 h-4 text-green-400" />
          <span className="text-xs text-green-400 font-mono">terminal@muzamil</span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-1 font-mono text-xs">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-green-400"
            >
              {line}
            </motion.div>
          ))}
          {lines.length > 0 && (
            <div className="text-green-400 animate-pulse">_</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
