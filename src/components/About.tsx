import { Clock, MapPin, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tentang Toko Kekar Jaya
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner terpercaya dalam merawat kucing kesayangan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="/images/tokokekarjaya.jpg"
              alt="Toko Kekar Jaya"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Cerita Kami
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Toko Kekar Jaya adalah toko petshop khusus kucing yang telah melayani para pecinta kucing 
              dengan dedikasi penuh. Kami memahami bahwa kucing adalah bagian penting dari keluarga Anda, 
              oleh karena itu kami berkomitmen untuk menyediakan produk-produk berkualitas tinggi dengan 
              harga yang terjangkau.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan pengalaman bertahun-tahun, kami telah membangun kepercayaan dengan ribuan pelanggan 
              setia. Tim kami siap memberikan rekomendasi terbaik untuk kebutuhan kucing Anda.
            </p>

            {/* Location & Hours */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Alamat:</p>
                  <p className="text-gray-700">Patam Lestari, Sekupang</p>
                  <p className="text-gray-700">Batam City, Riau Islands</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Jam Operasional:</p>
                  <p className="text-gray-700">Senin - Sabtu: 09.00 - 20.00 WIB</p>
                  <p className="text-gray-700">Minggu: 10.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadi toko petshop kucing terpercaya dan terdepan dalam menyediakan produk berkualitas 
              tinggi serta pelayanan terbaik untuk kesejahteraan kucing di Indonesia.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
            </div>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Menyediakan produk berkualitas dengan harga terjangkau</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Memberikan pelayanan terbaik dan responsif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Edukasi perawatan kucing yang baik dan benar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}