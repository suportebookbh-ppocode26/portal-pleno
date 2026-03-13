import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const products = [
    {
      id: 1,
      title: 'Descubra Você',
      image: 'https://via.placeholder.com/280x400/FFD700/000?text=Descubra+Você',
      href: '/descubra'
    },
    {
      id: 2,
      title: 'Autópsia da Personalidade',
      image: 'https://via.placeholder.com/280x400/FFD700/000?text=Autópsia',
      href: '/autopsia'
    },
    {
      id: 3,
      title: 'Engenharia da Colisão',
      image: 'https://via.placeholder.com/280x400/FFD700/000?text=Engenharia',
      href: '/engenharia'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header currentPage="home" />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-[100px] px-[5%] text-center border-b-[10px] border-[#FFD700] mt-[85px]">
        <h1 className="font-playfair text-[3rem] mb-[20px] uppercase">
          O Conforto é uma Prisão<br />O Código é a Chave
        </h1>
        <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#ccc]">
          Acesse os protocolos de engenharia biológica e assuma o controle do seu hardware operacional.
        </p>
      </section>

      {/* Catalog */}
      <main className="max-w-[1200px] mx-auto py-[60px] px-[5%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              href={product.href}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
