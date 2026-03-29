import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryHighlights } from './components/CategoryHighlights';
import { StoreAdvantages } from './components/StoreAdvantages';
import { About } from './components/About';
import { ProductCatalog } from './components/ProductCatalog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryHighlights />
      <StoreAdvantages />
      <About />
      <ProductCatalog />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
