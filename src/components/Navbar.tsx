import { Cat, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <Cat className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg text-gray-800">Toko Kekar Jaya</span>
              <span className="text-xs text-orange-600">Solusi Kebutuhan Kucing</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Katalog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Kontak
            </button>
            <a
              href="https://wa.me/6281267597586?text=Halo%20Toko%20Kekar%20Jaya%2C%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded"
            >
              Katalog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded"
            >
              Kontak
            </button>
            <a
              href="https://wa.me/6281267597586?text=Halo%20Toko%20Kekar%20Jaya%2C%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}