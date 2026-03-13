import { Link } from 'wouter';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-1000 h-[85px] bg-black border-b-2 border-[#FFD700] flex justify-between items-center px-[5%]">
      <div className="logo flex items-center gap-[15px]">
        <img 
          src="https://via.placeholder.com/60x60/FFD700/000?text=Logo" 
          alt="Portal Pleno O Código" 
          className="h-[60px] w-auto"
        />
        <span className="font-bold text-white text-[1.1rem] uppercase tracking-[1px]">
          Portal Pleno O Código
        </span>
      </div>
      
      <nav>
        <ul className="list-none flex gap-[20px]">
          <li>
            <Link href="/" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'home' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/ebooks" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'ebooks' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Ebooks
            </Link>
          </li>
          <li>
            <Link href="/audiobooks" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'audiobooks' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Audiobooks
            </Link>
          </li>
          <li>
            <Link href="/arsenal" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'arsenal' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Arsenal
            </Link>
          </li>
          <li>
            <Link href="/depoimentos" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'depoimentos' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Depoimentos
            </Link>
          </li>
          <li>
            <Link href="/degustacao" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'degustacao' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Degustação
            </Link>
          </li>
          <li>
            <Link href="/sobre" className={`text-white text-[0.7rem] font-bold uppercase transition-colors duration-300 ${currentPage === 'sobre' ? 'text-[#FFD700]' : 'hover:text-[#FFD700]'}`}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
