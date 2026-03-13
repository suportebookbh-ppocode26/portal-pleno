import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Degustacao() {
  const samples = [
    {
      id: 1,
      title: 'Descubra Você',
      excerpt: 'O Amor Extraordinário Começa Onde Você Menos Espera: Dentro de Você. Muitas vezes, passamos a vida como caçadores do parceiro ideal, acreditando que a felicidade é um destino externo que depende de outra pessoa. Mas e se a peça que falta para relacionamentos verdadeiramente plenos estivesse guardada na sua própria essência?'
    },
    {
      id: 2,
      title: 'Autópsia da Personalidade',
      excerpt: 'O que resta quando as máscaras caem? É preciso coragem para realizar uma autópsia técnica em quem você acredita ser. Este livro não é para os fracos de coração, mas para aqueles que desejam compreender as camadas mais profundas de sua própria psique.'
    },
    {
      id: 3,
      title: 'Engenharia da Colisão',
      excerpt: 'Dois seres em colisão. Duas vidas em intersecção. Mas qual é a engenharia por trás dessa conexão? Este livro explora os mecanismos técnicos que governam os relacionamentos humanos, revelando os padrões ocultos que determinam se uma colisão resulta em destruição ou em criação.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header currentPage="degustacao" />
      
      <main className="mt-[85px] max-w-[1200px] mx-auto py-[60px] px-[5%] w-full">
        <h1 className="font-playfair text-[2.5rem] mb-[20px] text-center text-black">
          Degustação
        </h1>
        <p className="text-center text-[1.1rem] text-[#666] mb-[50px]">
          Confira trechos dos nossos ebooks para descobrir o conteúdo que espera por você.
        </p>
        
        <div className="space-y-[40px]">
          {samples.map((sample) => (
            <div 
              key={sample.id}
              className="bg-white p-[40px] rounded-[4px] shadow-md border-l-4 border-[#FFD700]"
            >
              <h2 className="font-playfair text-[1.8rem] mb-[20px] text-black">
                {sample.title}
              </h2>
              <p className="text-[1.1rem] text-[#333] leading-[2] text-justify">
                {sample.excerpt}
              </p>
              <div className="mt-[20px] pt-[20px] border-t border-[#D1D1D1]">
                <a 
                  href={`/${sample.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block bg-black text-[#FFD700] py-[12px] px-[25px] no-underline font-bold uppercase text-[0.8rem] rounded-[2px] hover:opacity-80 transition-opacity"
                >
                  Leia a Sinopse Completa
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
