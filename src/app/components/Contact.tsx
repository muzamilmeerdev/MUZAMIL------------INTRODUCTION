import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muzamilmeer598@gmail.com',
      link: 'mailto:muzamilmeer598@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9103594759',
      link: 'tel:+919103594759',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      link: 'https://wa.me/919103594759',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
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
              <Send className="w-6 h-6 text-green-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss cybersecurity? Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <ContactCard key={method.label} method={method} index={index} isInView={isInView} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 via-cyan-500/10 to-green-500/10 backdrop-blur-md border border-green-500/20 shadow-[0_8px_32px_0_rgba(34,197,94,0.2)]"
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Build Something Secure Together</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new projects and opportunities
            </p>
            <a
              href="mailto:muzamilmeer598@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-semibold rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ method, index, isInView }: any) {
  const Icon = method.icon;

  return (
    <motion.a
      href={method.link}
      target={method.label === 'WhatsApp' ? '_blank' : undefined}
      rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 shadow-lg hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.2)] transition-all duration-300 hover:scale-105"
    >
      <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-200">{method.label}</h3>
      <p className="text-gray-400 text-sm break-all">{method.value}</p>
    </motion.a>
  );
}
