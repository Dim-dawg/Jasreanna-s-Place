import { motion } from 'motion/react';
import { ArrowRight, Coffee, Users, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Modern Cafe Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-200 border border-pink-400/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              A Modern Café Experience in Belize
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Not Just Another <br className="hidden md:block" />
              <span className="text-pink-300 italic">Coffee Shop</span>
            </h1>
            <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              We're blending that modern café vibe with real warmth, creating a space where you actually want to hang out. Great drinks, good vibes, and a place that feels like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-colors shadow-lg shadow-white/10"
              >
                Explore Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/media"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                The Idea Behind <span className="text-pink-600">Jasreanna's Place</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  The basic idea behind Jasreanna's Place is that people are drawn to authenticity. This dedication is reflected in the name itself, which emphasizes friendliness, individual attention, and the kind of hospitality that makes a person feel more like a guest than a customer.
                </p>
                <p>
                  Our goal is to provide more than just a delicious drink; we want to establish an environment where real human connection occurs organically. The leadership group behind the café has extensive experience in small business operations, culinary arts, and hospitality management.
                </p>
                <p>
                  Our employees receive extensive training that goes well beyond learning how to make drinks; we make significant investments in teaching hospitality concepts.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                  alt="Barista making coffee"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-100 text-pink-600 rounded-full">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Authentic Connection</h3>
                </div>
                <p className="text-slate-600 text-sm">A place where relationships are formed, work is accomplished, and moments of relaxation are enjoyed.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars / Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Our Methodology</h2>
            <p className="text-lg text-slate-600">
              Built upon three foundational pillars to ensure a superior experience for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Product Sourcing",
                desc: "High-quality coffee beans obtained from sustainable and ethically responsible farms. Pastries sourced from local Belizean bakeries."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer Experience",
                desc: "Creating a 'third place'—an environment distinct from home and work that facilitates community connection and social interaction."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Market Positioning",
                desc: "Modern, trendy, and authentically welcoming. A classy white-and-pink aesthetic targeting young professionals, students, and tourists."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-pink-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
