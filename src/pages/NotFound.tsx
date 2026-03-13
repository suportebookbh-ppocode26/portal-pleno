import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8EAEB]">
      <Header />
      
      <main className="flex-1 flex items-center justify-center mt-[85px] px-[5%]">
        <div className="text-center">
          <h1 className="font-playfair text-[4rem] text-black mb-[20px]">
            404
          </h1>
          <p className="text-[1.5rem] text-[#666] mb-[30px]">
            Página não encontrada
          </p>
          <p className="text-[1.1rem] text-[#999] mb-[40px]">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link href="/" className="inline-block bg-black text-[#FFD700] py-[14px] px-[30px] no-underline font-bold uppercase text-[0.8rem] rounded-[2px] hover:opacity-80 transition-opacity">
            Voltar ao Início
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
