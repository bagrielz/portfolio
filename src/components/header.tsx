import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";

export async function Header() {
  return (
    <header className="container text-dark-100 dark:text-neutral-50">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold inline-block mb-[14px]">
            Gabriel Stênio
          </span>
          <div className="flex gap-2">
            <Image
              src={"/icons/spotify.svg"}
              alt="Ícone do Spotify"
              width={24}
              height={24}
            />
            <span className="font-semibold">Não está tocando</span>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
      <p className="text-neutral-500 font-medium dark:text-neutral-200 leading-6 mt-10">
        Sou apaixonado pela área de desenvolvimento front-end e design de
        interfaces. Por meio dos estudos, procuro evoluir meu conhecimento e
        construir minha jornada profissional. Meu intuito é criar soluções que
        ajudem as pessoas a se posicionar de forma clara e objetiva através de
        sites, aplicativos e sistemas.
      </p>
    </header>
  );
}
