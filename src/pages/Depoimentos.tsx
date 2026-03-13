import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Depoimentos() {
  const testimonials = [
    {
      id: 1,
      text: "Descubra Você mudou completamente minha perspectiva sobre relacionamentos. Recomendo para qualquer pessoa que deseja se entender melhor.",
      author: "Maria Silva",
      book: "Descubra Você"
    },
    {
      id: 2,
      text: "A Autópsia da Personalidade foi uma experiência transformadora. Finalmente entendi os padrões que me limitavam.",
      author: "João Santos",
      book: "Autópsia da Personalidade"
    },
    {
      id: 3,
      text: "Engenharia da Colisão ofereceu ferramentas práticas que apliquei imediatamente em meus relacionamentos.",
      author: "Ana Costa",
      book: "Engenharia da Colisão"
    },
    {
      id: 4,
      text: "Os livros de Júlio Bhrósz são profundos, práticos e transformadores. Vale cada página.",
      author: "Carlos Oliveira",
      book: "Portal Pleno O Código"
    },
    {
      id: 5,
      text: "Finalmente encontrei conteúdo que combina teoria com aplicação prática. Excelente!",
      author: "Fernanda Lima",
      book: "Descubra Você"
    },
    {
      id: 6,
      text: "A qualidade dos ebooks e o conhecimento transmitido são incomparáveis. Muito obrigado!",
      author: "Roberto Martins",
      book: "Engenharia da Colisão"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header currentPage="depoimentos" />
      
      <main className="mt-[85px] max-w-[1200px] mx-auto py-[60px] px-[5%] w-full">
        <h1 className="font-playfair text-[2.5rem] mb-[50px] text-center text-black">
          Depoimentos de Leitores
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-[30px] rounded-[4px] shadow-md border-l-4 border-[#FFD700] hover:shadow-lg transition-shadow"
            >
              <p className="text-[#333] leading-[1.8] mb-[20px] italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-[#D1D1D1] pt-[15px]">
                <p className="font-bold text-black">
                  {testimonial.author}
                </p>
                <p className="text-[0.85rem] text-[#666] uppercase tracking-[0.5px]">
                  {testimonial.book}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
