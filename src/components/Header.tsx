import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-start justify-between gap-6 border-b border-[rgba(110,31,27,0.18)] pb-6 pt-6 md:pt-8">
      <a href="#top" className="relative block h-12 w-40 md:h-14 md:w-48">
        <Image
          src="/images/logo-red.svg"
          alt="J A Andrews"
          fill
          sizes="(max-width: 768px) 160px, 192px"
          className="object-contain object-left"
          priority
        />
      </a>
      <nav aria-label="Primary" className="flex gap-6 pt-2 font-serif text-sm tracking-editorial text-burgundy">
        <a href="#solutions" className="transition-opacity hover:opacity-70 focus-visible:underline">
          
        </a>
        <a href="#contact" className="transition-opacity hover:opacity-70 focus-visible:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
