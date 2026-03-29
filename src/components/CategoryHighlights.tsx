import { Apple, Box, Home } from 'lucide-react';

export function CategoryHighlights() {
  const categories = [
    {
      icon: Apple,
      title: 'Makanan Kucing',
      description: 'Makanan premium dan bergizi untuk kucing kesayangan',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Box,
      title: 'Pasir Kucing',
      description: 'Pasir kucing berkualitas dengan daya serap tinggi',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Home,
      title: 'Kandang Kucing',
      description: 'Kandang dan carrier yang aman dan nyaman',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kategori Produk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilihan lengkap produk berkualitas untuk memenuhi semua kebutuhan kucing Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={scrollToCatalog}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
