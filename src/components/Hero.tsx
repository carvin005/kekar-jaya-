import { ArrowRight, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { createWhatsAppLink } from '../config/contact';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              🐱 Spesialis Produk Kucing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Solusi Kebutuhan Kucing Kesayangan Anda
            </h1>
            <p className="text-lg text-gray-600">
              Toko Kekar Jaya menyediakan produk berkualitas tinggi untuk kucing kesayangan Anda. 
              Dari makanan premium hingga perlengkapan lengkap, kami siap membantu memberikan yang terbaik untuk si meong.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('catalog')}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
              >
                Lihat Katalog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={createWhatsAppLink('Halo Toko Kekar Jaya, saya ingin bertanya')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720291062255-1aa606aac7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwaGVhbHRoeSUyMG9yYW5nZSUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDc4NDkwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kucing Sehat dan Bahagia"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}