import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Key, Lock, Copy, RefreshCw, Eye, EyeOff } from 'lucide-react';

export function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tools" className="py-20 px-4 md:px-8 relative">
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
              <Key className="w-6 h-6 text-green-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Security Tools
              </span>
            </h2>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <PasswordGenerator isInView={isInView} />
            <TextEncryptor isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PasswordGenerator({ isInView }: { isInView: boolean }) {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setShowPassword(true);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 shadow-[0_8px_32px_0_rgba(34,197,94,0.1)] hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.3)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
          <Key className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-green-400">Password Generator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            placeholder="Generated password will appear here"
            className="w-full p-4 pr-12 bg-black/30 border border-white/20 rounded-lg text-green-400 font-mono focus:outline-none focus:border-green-500/50"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={generatePassword}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Generate
          </button>
          <button
            onClick={copyToClipboard}
            disabled={!password}
            className="px-6 py-3 bg-white/5 border border-white/20 text-gray-300 font-semibold rounded-lg hover:border-green-500/50 hover:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {copied ? '✓ Copied!' : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function TextEncryptor({ isInView }: { isInView: boolean }) {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');

  const caesarCipher = (text: string, shift: number, decrypt: boolean = false) => {
    const actualShift = decrypt ? -shift : shift;
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + actualShift + 26) % 26) + base);
        }
        return char;
      })
      .join('');
  };

  const handleProcess = () => {
    if (inputText) {
      const result = caesarCipher(inputText, 3, mode === 'decrypt');
      setOutputText(result);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 shadow-[0_8px_32px_0_rgba(34,211,238,0.1)] hover:shadow-[0_8px_32px_0_rgba(34,211,238,0.3)] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-cyan-400">Text Encryptor</h3>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2 p-1 bg-black/30 rounded-lg">
          <button
            onClick={() => setMode('encrypt')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
              mode === 'encrypt'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Encrypt
          </button>
          <button
            onClick={() => setMode('decrypt')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
              mode === 'decrypt'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Decrypt
          </button>
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Enter text to ${mode}...`}
          className="w-full p-4 bg-black/30 border border-white/20 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-500/50 resize-none h-24"
        />

        <button
          onClick={handleProcess}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
        >
          {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'} Text
        </button>

        <textarea
          value={outputText}
          readOnly
          placeholder="Result will appear here..."
          className="w-full p-4 bg-black/30 border border-white/20 rounded-lg text-cyan-400 font-mono focus:outline-none resize-none h-24"
        />
      </div>
    </motion.div>
  );
}
