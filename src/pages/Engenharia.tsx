import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Engenharia() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header currentPage="ebooks" />
      
      <main className="mt-[85px] max-w-[1350px] mx-auto py-[60px] px-[5%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr_210px] gap-[45px]">
          {/* Cover */}
          <div className="col-span-1">
            <img 
              src="https://via.placeholder.com/340x500/2C2C2C/FFD700?text=Engenharia" 
              alt="Engenharia da Colisão"
              className="w-full shadow-lg rounded-[2px]"
            />
          </div>

          {/* Content */}
          <div className="col-span-1">
            <h1 className="font-playfair text-[3rem] mb-[5px] text-black">
              Engenharia da Colisão
            </h1>
            <p className="text-[1.1rem] text-[#8B6B00] mb-[40px] font-bold uppercase tracking-[1px]">
              Por Júlio Bhrósz
            </p>
            
            <div className="text-[1.15rem] text-[#333] leading-[2.1] text-justify">
              <p className="mb-[25px]">
                Dois seres em colisão. Duas vidas em intersecção. Mas qual é a engenharia por trás dessa conexão? Este livro explora os mecanismos técnicos que governam os relacionamentos humanos, revelando os padrões ocultos que determinam se uma colisão resulta em destruição ou em criação.
              </p>
              
              <h2 className="text-[1rem] uppercase tracking-[2px] text-[#666] border-b border-[#D1D1D1] pb-[10px] mb-[15px]">
                Sinopse
              </h2>
              
              <p className="mb-[25px]">
                "Engenharia da Colisão" é um mapa técnico dos relacionamentos. Através de análises de dinâmicas interpessoais, padrões de atração e mecânicas de conflito, Júlio Bhrósz oferece ferramentas para você compreender e otimizar suas conexões com outras pessoas.
              </p>
              
              <p className="mb-[25px]">
                Aprenda a engenharia de encontros que transformam vidas.
              </p>
            </div>
          </div>

          {/* Action Card */}
          <div className="col-span-1 bg-[#2C2C2C] p-[25px] rounded-[4px] h-fit sticky top-[120px] text-white shadow-lg">
            <span className="text-[0.65rem] text-[#FFD700] uppercase block text-center font-bold mb-[5px]">
              Apenas
            </span>
            <div className="text-[1.9rem] font-bold text-center mb-[25px]">
              R$ 49,00
            </div>
            
            <div className="flex flex-col gap-[10px]">
              <a 
                href="#" 
                className="block bg-[#FFD700] text-black text-center py-[14px] px-[5px] no-underline font-bold text-[0.7rem] uppercase rounded-[4px] hover:opacity-80 transition-opacity"
              >
                Adicionar ao Carrinho
              </a>
              <a 
                href="#" 
                className="block bg-[#CC0000] text-white text-center py-[12px] px-[5px] no-underline font-bold text-[0.65rem] uppercase rounded-[4px] hover:opacity-80 transition-opacity"
              >
                Compre Agora
              </a>
              <a 
                href="#" 
                className="block bg-[#CC0000] text-white text-center py-[12px] px-[5px] no-underline font-bold text-[0.65rem] uppercase rounded-[4px] hover:opacity-80 transition-opacity"
              >
                Combo Audio
              </a>
              <a 
                href="#" 
                className="block bg-[#CC0000] text-white text-center py-[12px] px-[5px] no-underline font-bold text-[0.65rem] uppercase rounded-[4px] hover:opacity-80 transition-opacity"
              >
                Combo E-book
              </a>
              <a 
                href="#" 
                className="block bg-[#CC0000] text-white text-center py-[12px] px-[5px] no-underline font-bold text-[0.65rem] uppercase rounded-[4px] hover:opacity-80 transition-opacity"
              >
                Combo Coletânea
              </a>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="mt-[80px] pt-[40px] border-t border-[#D1D1D1]">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-[45px]">
            <div className="text-[1.2rem] font-bold uppercase text-black">
              Detalhes do eBook
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  Editora
                </span>
                <span className="text-[1rem] text-black">
                  Portal Pleno O Código
                </span>
              </div>
              
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  Data de Lançamento
                </span>
                <span className="text-[1rem] text-black">
                  Março de 2026
                </span>
              </div>
              
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  ISBN
                </span>
                <span className="text-[1rem] text-black">
                  978-X-XXXX-XXXX-X
                </span>
              </div>
              
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  Idioma
                </span>
                <span className="text-[1rem] text-black">
                  Português
                </span>
              </div>
              
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  Opções de Download
                </span>
                <span className="text-[1rem] text-black">
                  EPUB 3 (Fluxo Adaptável)
                </span>
              </div>
              
              <div className="border-b border-[#D1D1D1] pb-[15px]">
                <span className="text-[0.75rem] font-bold uppercase text-[#666] block mb-[5px]">
                  Hardware Compatível
                </span>
                <span className="text-[1rem] text-black">
                  iOS, Android, e-Readers, Desktop
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
