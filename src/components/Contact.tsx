import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6281267597586?text=Halo%20Toko%20Kekar%20Jaya%2C%20saya%20ingin%20bertanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp (Preferred)</p>
                    <p className="text-gray-700">+62 812-6759-7586</p>
                    <p className="text-sm text-green-600 mt-1">Klik untuk chat langsung</p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telepon</p>
                    <p className="text-gray-700">0895-3402-72534</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-700">info@tokokekarjaya.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Alamat Toko</p>
                    <p className="text-gray-700">Patam Lestari, Sekupang</p>
                    <p className="text-gray-700">Batam City, Riau Islands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Lokasi Toko
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6392850467743!2d103.963077!3d1.1101549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b82dc96269f%3A0x5f131b618d051513!2sKEKAR%20JAYA!5e0!3m2!1sen!2sid!4v1707849032123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Toko Kekar Jaya"
                ></iframe>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Butuh Bantuan Segera?
              </h3>
              <p className="mb-6 text-orange-50">
                Tim kami siap membantu Anda memilih produk terbaik untuk kucing kesayangan Anda.
              </p>
              <a
                href="https://wa.me/6281267597586?text=Halo%20Toko%20Kekar%20Jaya%2C%20saya%20butuh%20bantuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}