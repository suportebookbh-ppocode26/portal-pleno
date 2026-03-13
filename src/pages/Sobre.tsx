import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header currentPage="sobre" />
      
      <main className="mt-[85px] max-w-[1200px] mx-auto py-[60px] px-[5%] w-full">
        <div className="bg-white p-[40px] rounded-[4px] shadow-md">
          <h1 className="font-playfair text-[2.5rem] mb-[30px] text-black">
            Sobre o Portal Pleno O Código
          </h1>
          
          <div className="text-[1.1rem] text-[#333] leading-[2] space-y-[20px]">
            <p>
              O Portal Pleno O Código é uma plataforma dedicada à transformação pessoal através da literatura e do conhecimento estruturado. Fundado por Júlio Bhrósz, o portal oferece uma coleção curada de ebooks que exploram temas de desenvolvimento pessoal, relacionamentos e soberania mental.
            </p>
            
            <p>
              Nossos livros combinam psicologia, neurociência e filosofia prática para oferecer ferramentas reais de transformação. Cada obra é cuidadosamente desenvolvida para guiar você em uma jornada de autodescoberta e crescimento.
            </p>
            
            <h2 className="font-playfair text-[1.8rem] mt-[40px] mb-[20px] text-black">
              Sobre Júlio Bhrósz
            </h2>
            
            <p>
              Júlio Bhrósz é autor, pesquisador e especialista em desenvolvimento humano. Com mais de uma década de experiência em psicologia aplicada e neurociência comportamental, ele dedica sua carreira a criar conteúdo que capacita indivíduos a assumir o controle de suas vidas.
            </p>
            
            <p>
              Seus livros têm impactado milhares de leitores, oferecendo não apenas conhecimento teórico, mas ferramentas práticas para aplicação imediata em suas vidas.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
