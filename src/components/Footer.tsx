import { Cat, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Cat className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">Toko Kekar Jaya</p>
                <p className="text-xs text-gray-400">Solusi Kebutuhan Kucing</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Toko petshop khusus kucing terpercaya dengan produk berkualitas dan harga terjangkau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Katalog Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kategori Produk</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Makanan Kucing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Pasir Kucing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Kandang Kucing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Patam Lestari, Sekupang, Batam City, Riau Islands</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+62 812-6759-7586</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@tokokekarjaya.com</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Ikuti Kami</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Toko Kekar Jaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}