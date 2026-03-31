import { Terminal, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 shadow-lg">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold text-gray-300">Muzamil Meer</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Muzamil Meer</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Securing the digital world, one line of code at a time</p>
        </div>
      </div>
    </footer>
  );
}
