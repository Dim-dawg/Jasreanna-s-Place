import { motion } from 'motion/react';
import { Play, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

export default function Media() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
      alt: "Coffee beans",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      alt: "Cafe interior",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
      alt: "Barista making coffee",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
      alt: "Latte art",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
      alt: "Coffee cup",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-24 text-center border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
          >
            Media & Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
          >
            Experience the vibe of Jasreanna's Place before you even step through the doors.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Video Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
              <VideoIcon className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">The Experience</h2>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900 group">
            {/* Using a placeholder video for demonstration */}
            <video 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              controls
              poster="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
          </div>
          <p className="text-slate-500 mt-4 text-center text-sm">
            A glimpse into our modern cafÃ© vibe and the craftsmanship behind every cup.
          </p>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
              <ImageIcon className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Our Space</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
