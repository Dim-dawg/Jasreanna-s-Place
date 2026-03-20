import { motion } from 'motion/react';
import { Coffee, CakeSlice, Leaf, CupSoda } from 'lucide-react';

export default function Menu() {
  const menuCategories = [
    {
      title: "Signature Classics",
      icon: <Coffee className="h-6 w-6" />,
      description: "Crafted with premium, ethically sourced beans.",
      items: [
        { name: "Signature Latte", price: "$10.00 BZD", desc: "12-ounce classic espresso with steamed milk" },
        { name: "Classic Cappuccino", price: "$10.00 BZD", desc: "12-ounce espresso with equal parts steamed milk and foam" },
      ]
    },
    {
      title: "Trendy & Cold",
      icon: <CupSoda className="h-6 w-6" />,
      description: "Indulgent, Instagram-worthy beverages.",
      items: [
        { name: "Trendy FrappÃ©", price: "$14.00 BZD", desc: "Blended iced coffee beverage with whipped cream" },
        { name: "Cold Brew", price: "$14.00 BZD", desc: "Smooth, slow-steeped cold coffee" },
      ]
    },
    {
      title: "Specialty",
      icon: <Leaf className="h-6 w-6" />,
      description: "Vibrant and high-quality ingredients.",
      items: [
        { name: "Matcha Latte", price: "$16.00 BZD", desc: "Premium green tea powder with steamed milk" },
      ]
    },
    {
      title: "Food & Pastries",
      icon: <CakeSlice className="h-6 w-6" />,
      description: "Sourced from talented local Belizean bakeries.",
      items: [
        { name: "Assorted Pastries", price: "$7.00 BZD", desc: "Freshly baked daily selection" },
        { name: "Light Bites", price: "$7.00 BZD", desc: "Perfect snacks to go with your drink" },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
            alt="Coffee beans"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            Craftsmanship and heart poured into every cup.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-12">
            {menuCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                    <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start group">
                      <div className="pr-8">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-pink-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-block px-4 py-1.5 bg-slate-50 text-slate-900 font-mono font-medium rounded-full text-sm border border-slate-200">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Strategy Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-pink-600 rounded-3xl p-8 text-white sticky top-28 shadow-2xl shadow-pink-900/20"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">Our Pricing Strategy</h3>
              <div className="space-y-6 text-pink-100 leading-relaxed text-sm">
                <p>
                  At Jasreanna's Place, our pricing is a reflection of the craftsmanship and heart we pour into every cup. We've carefully balanced our costs with the local market to ensure our prices feel fair while allowing our cafÃ© to flourish.
                </p>
                <p>
                  For those seeking the perfect caffeine fix, our signature 12-ounce lattes and cappuccinos are priced at $10.00 BZD, showcasing the premium, ethically sourced beans we use.
                </p>
                <p>
                  If you're looking for something a bit more indulgent or "Instagram-worthy," our trendy frappÃ©s and cold brews sit at $14.00 BZD, while our vibrant matcha lattes are offered at $16.00 BZD to reflect their high-quality ingredients and current popularity.
                </p>
                <p>
                  We also want to ensure you have the perfect snack to go with your drink without compromising on taste. By partnering with talented local bakeries, we're able to offer a delicious selection of pastries and light bites for $7.00 BZD.
                </p>
                <p className="font-medium text-white pt-4 border-t border-pink-500/50">
                  Our goal is to provide that high-end, aesthetic vibe you love, while keeping our menu grounded in the value of a great local partnership.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
