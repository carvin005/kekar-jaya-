import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProductVariant = {
  name: string;
  price: string;
  image?: string;
};

type Product = {
  id: number;
  name: string;
  category: 'food' | 'litter' | 'cage';
  description: string;
  price: string;
  image: string;
  className?: string;
  variants?: ProductVariant[];
};

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'litter' | 'cage'>('all');
  const [selectedVariants, setSelectedVariants] = useState<Record<number, number>>({});

  const products: Product[] = [
    // Makanan Kucing
    {
      id: 1,
      name: 'WHISKAS Junior',
      category: 'food',
      description: 'Makanan khusus untuk anak kucing dengan nutrisi lengkap dan seimbang',
      price: 'Rp 70.000',
      image: '/images/whiskas.jpg',
      className: 'w-full h-full object-contain',
      variants: [
        { name: 'Whiskas Junior Rasa Ikan Laut', price: 'Rp 70.000', image: '/images/whiskas.jpg' },
        { name: 'Whiskas Junior Mackerel Flavor', price: 'Rp 70.000', image: '/images/whiskasmackarel.jpg' },
        { name: 'Whiskas Junior Tuna & Salmon Flavour', price: 'Rp 70.000', image: '/images/whiskastuna.jpg' },
      ]
    },
    {
      id: 2,
      name: 'Furlove',
      category: 'food',
      description: 'Makanan premium untuk kucing dewasa, mendukung kesehatan optimal',
      price: 'Rp 15.000',
      image: '/images/furlove.jpg',
      variants: [
        { name: 'Furlove (kaleng)', price: 'Rp 15.000', image: '/images/furlove.jpg' },
        { name: 'Furlove Tuna dry cat food', price: 'Rp 28.500', image: '/images/furlovedry.jpg' },
      ]
    },
    {
      id: 3,
      name: 'Cat Choize',
      category: 'food',
      description: 'Terbuat dari sumber protein berkualitas untuk menjaga otot dan energi kucing tetap optimal.',
      price: 'Rp 15.500',
      image: '/images/catchoize.jpg',
      variants: [
        { name: 'Tuna Flavor', price: 'Rp 15.500', image: '/images/catchoize.jpg' },
        { name: 'Tuna with Milk (dry)', price: 'Rp 30.000', image: '/images/catchoize2.jpg' },
        { name: 'Cat Choize Adult Cat Dry Food Tuna', price: 'Rp 21.000', image: '/images/catchoizetuna.jpg' },
        { name: 'Cat Choize Kitten Salmon with Milk (dry)', price: 'Rp 33.000', image: '/images/catchoizesalmon.jpg' },
      ]
    },
    {
      id: 4,
      name: 'Excel Chicken Tuna',
      category: 'food',
      description: 'Diperkaya vitamin dan mineral untuk menjaga bulu tetap berkilau dan meningkatkan sistem imun kucing.',
      price: 'Rp 15.000',
      image: '/images/excel.jpg',
    },
    {
      id: 5,
      name: 'Bolt Cat',
      category: 'food',
      description: 'Makanan kucing dengan rasa tuna yang lezat, diperkaya taurin untuk kesehatan mata dan jantung',
      price: 'Rp 24.500',
      image: '/images/bolt.jpg',
      variants: [
        { name: 'Bolt Cat Tuna', price: 'Rp 24.500', image: '/images/bolt.jpg' },
        { name: 'Bolt Cat Salmon', price: 'Rp 24.500', image: '/images/bolttuna.jpg' },
        { name: 'Bolt Cat Salmon Kitten', price: 'Rp 16.000', image: '/images/boltkitten.jpg' },
      ]
    },
    {
      id: 6,
      name: 'Felibite',
      category: 'food',
      description: 'Mengandung Omega 3 & 6 untuk kulit sehat dan bulu berkilau, serta diperkaya Taurin untuk kesehatan mata.',
      price: 'Rp 15.000',
      image: '/images/felibite.jpg',
    },
    {
      id: 7,
      name: 'Me-O Persian Adult Dry Cat Food',
      category: 'food',
      description: 'Diperkaya Vitamin C untuk meningkatkan sistem kekebalan tubuh dan membantu mengurangi stres.',
      price: 'Rp 60.000',
      image: '/images/Me-o.jpg',
    },
    {
      id: 8,
      name: 'Lifecat',
      category: 'food',
      description: 'Potongan daging asli yang juicy dengan aroma kuat, sangat disukai kucing yang pemilih makanan.',
      price: 'Rp 18.000',
      image: '/images/lifecat.jpg',
    },
    {
      id: 9,
      name: 'Markotops',
      category: 'food',
      description: 'Tekstur daging lembut dengan kuah yang lezat, favorit untuk kucing yang sulit makan.',
      price: 'Rp 18.000',
      image: '/images/markotops.jpg',
    },
    {
      id: 10,
      name: 'Chester Tuna Cat Food',
      category: 'food',
      description: 'Makanan kucing rasa tuna yang lezat, diformulasikan untuk memenuhi selera makan anabul setiap hari.',
      price: 'Rp 23.000',
      image: '/images/chester.jpg',
    },
    {
      id: 11,
      name: 'Beauty Premium Cat Food',
      category: 'food',
      description: 'Makanan kucing premium dengan nutrisi lengkap untuk kesehatan dan kecantikan bulu kucing.',
      price: 'Rp 35.000',
      image: '/images/beauty.jpg',
    },
    {
      id: 12,
      name: 'Me-O wet cat food',
      category: 'food',
      description: 'Terbuat dari ikan asli dengan tekstur lembut dan aroma kuat yang sangat disukai kucing.',
      price: 'Rp 8.000',
      image: '/images/me-obasah.jpg',
    },
    {
      id: 13,
      name: 'Life Cat Tuna Kitten wet food',
      category: 'food',
      description: 'Kaya akan Omega 3 & 6 untuk mendukung kesehatan kulit dan membuat bulu anabul lebih berkilau.',
      price: 'Rp 7.000',
      image: '/images/lifecatwet.jpg',
    },

    // Pasir Kucing
    {
      id: 14,
      name: 'Pasir Kucing Bentonite Super Premium CatLike 25L',
      category: 'litter',
      description: 'Pasir kucing organik dengan daya serap tinggi dan ramah lingkungan',
      price: 'Rp 100.000',
      image: '/images/catlike.jpg',
    },
    {
      id: 15,
      name: 'Pasir Kucing Bentonit Wangi Kuat Premium Super Sand Napping Cat Clumping',
      category: 'litter',
      description: 'Pasir bentonit premium dengan daya gumpal ekstra kuat dan aroma wangi yang tahan lama.',
      price: 'Rp 30.000',
      image: '/images/napping cat.jpg',
    },
    {
      id: 16,
      name: 'GRAND PANDA 5L Pasir Gumpal wangi Bentonite Kucing Cat Litter',
      category: 'litter',
      description: 'Pasir gumpal premium dengan daya serap tinggi dan kontrol bau maksimal.',
      price: 'Rp 37.700',
      image: '/images/grandpanda.jpg',
    },
    {
      id: 17,
      name: 'MARKOTOPS Bentonite Cat Litter 25lt',
      category: 'litter',
      description: 'Menyerap cairan dengan sangat cepat dan membentuk gumpalan kuat yang tidak mudah pecah.',
      price: 'Rp 145.000',
      image: '/images/markotopspasir.jpg',
    },
    {
      id: 18,
      name: 'Bentonite Cat Litter',
      category: 'litter',
      description: 'Minim debu dan tidak lengket di kaki, menjaga area sekitar litter box tetap bersih dan kering.',
      price: 'Rp 40.000',
      image: '/images/bentonitecat.jpg',
    },
    {
      id: 19,
      name: 'Meowpets Bentonite Cat Litter',
      category: 'litter',
      description: 'Dilengkapi butiran aromatik yang efektif mengunci bau tak sedap dan memberikan kesegaran tahan lama.',
      price: 'Rp 135.000',
      image: '/images/meowpets.jpg',
    },

    // Kandang Kucing
    {
      id: 20,
      name: 'Bak Pasir Kucing Plastik Tebal - Berbagai Ukuran',
      category: 'cage',
      description: 'Wadah pasir terbuka dari bahan plastik yang kuat, mudah dicuci, dan tersedia dalam berbagai pilihan warna.',
      price: 'Rp33.000 - Rp43.000',
      image: '/images/kandang1.jpg',
    },
    {
      id: 21,
      name: 'Kandang Besi Lipat (Large/Medium)',
      category: 'cage',
      description: 'Kandang kawat lipat yang kokoh dengan lapisan cat anti-karat, cocok untuk kucing dewasa atau kelinci.',
      price: 'Rp 230.000',
      image: '/images/kandang2.jpg',
    },
    {
      id: 22,
      name: 'Kandang Besi Portabel',
      category: 'cage',
      description: 'Kandang ringkas yang ideal untuk anak kucing (kitten) atau hewan kecil lainnya, mudah dipindahkan dan disimpan.',
      price: 'Rp 110.000',
      image: '/images/kandang3.jpg',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleOrderWhatsApp = (productName: string, imagePath: string) => {
    const configuredSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
    const siteUrl = configuredSiteUrl && configuredSiteUrl.length > 0
      ? configuredSiteUrl.replace(/\/$/, '')
      : window.location.origin;
    const normalizedImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    const imageUrl = `${siteUrl}${normalizedImagePath}`;
    const message = encodeURIComponent(
      `Halo Toko Kekar Jaya, saya ingin pesan ${productName}\nFoto produk: ${imageUrl}`
    );
    window.open(`https://wa.me/6281267597586?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Katalog Produk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Pilihan produk lengkap untuk kebutuhan kucing kesayangan Anda
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Produk
            </button>
            <button
              onClick={() => setActiveCategory('food')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'food'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🥫 Makanan Kucing
            </button>
            <button
              onClick={() => setActiveCategory('litter')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'litter'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🪨 Pasir Kucing
            </button>
            <button
              onClick={() => setActiveCategory('cage')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'cage'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🏠 Kandang Kucing
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const selectedVariantIndex = selectedVariants[product.id] ?? 0;
            const currentVariant = product.variants?.[selectedVariantIndex];
            const displayPrice = currentVariant?.price ?? product.price;
            const displayImage = currentVariant?.image ?? product.image;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={displayImage}
                    alt={product.name}
                    className={product.className ?? "w-full h-full object-contain"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Variant Selector */}
                  {product.variants && product.variants.length > 0 && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih Varian:
                      </label>
                      <select
                        value={selectedVariantIndex}
                        onChange={(e) => setSelectedVariants(prev => ({
                          ...prev,
                          [product.id]: parseInt(e.target.value)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        {product.variants.map((variant, index) => (
                          <option key={index} value={index}>
                            {variant.name} - {variant.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-orange-600">
                      {displayPrice}
                    </p>
                    <button
                      onClick={() => handleOrderWhatsApp(
                        product.variants 
                          ? `${product.name} (${product.variants[selectedVariantIndex].name})`
                          : product.name,
                        displayImage
                      )}
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}