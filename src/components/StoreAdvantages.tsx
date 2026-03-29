import { Award, DollarSign, MessageSquare, TrendingUp } from 'lucide-react';

export function StoreAdvantages() {
  const advantages = [
    {
      icon: Award,
      title: 'Produk Berkualitas',
      description: 'Hanya menyediakan produk terbaik dan terpercaya untuk kucing Anda',
    },
    {
      icon: DollarSign,
      title: 'Harga Terjangkau',
      description: 'Harga kompetitif dengan kualitas terjamin',
    },
    {
      icon: MessageSquare,
      title: 'Fast Response WhatsApp',
      description: 'Tim kami siap melayani dengan cepat dan ramah',
    },
    {
      icon: TrendingUp,
      title: 'Berpengalaman',
      description: 'Melayani pecinta kucing sejak bertahun-tahun',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto">
                <advantage.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
