import { Link } from 'wouter';

interface ProductCardProps {
  title: string;
  image: string;
  href: string;
}

export default function ProductCard({ title, image, href }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[4px] overflow-hidden transition-transform duration-300 border-b-4 border-black hover:translate-y-[-10px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto block"
      />
      <div className="p-[25px] text-center">
        <h3 className="font-playfair text-[1.4rem] mb-[15px] font-bold">
          {title}
        </h3>
        <Link href={href} className="bg-black text-[#FFD700] no-underline py-3 px-6 inline-block font-bold uppercase text-[0.8rem] rounded-[2px] hover:opacity-80 transition-opacity">
          Ver Sinopse
        </Link>
      </div>
    </div>
  );
}
