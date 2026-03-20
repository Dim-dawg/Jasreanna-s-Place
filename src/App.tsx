/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Media from './pages/Media';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
