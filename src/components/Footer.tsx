import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-pink-500/10 rounded-lg">
                <Coffee className="h-5 w-5 text-pink-400" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Jasreanna's Place
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A modern café experience in Belize. Blending that modern café vibe with real warmth, creating a space where you actually want to hang out.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-pink-400 transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-pink-400 transition-colors">Media & Gallery</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-pink-400 shrink-0" />
                <span>Belize City, Belize</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-400 shrink-0" />
                <span>+501 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-400 shrink-0" />
                <span>hello@jasreannasplace.bz</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jasreanna's Place. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
