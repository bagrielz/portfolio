import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";

export default function ProjectContainer({
  title,
  href,
  description,
  stacks,
}: {
  title: string;
  href: string;
  description: string;
  stacks: string[];
}) {
  return (
    <Link
      href={href}
      className="group flex justify-between items-center p-4 rounded-xl transition duration-300 ease-in-out hover:bg-dark-50"
    >
      <div className="font-medium">
        <h3 className="mb-3 font-semibold">{title}</h3>
        <p className="text-neutral-200 mb-5">{description}</p>
        <ul className="flex gap-3">
          {stacks.map((stack, index) => (
            <li key={index}>
              <Badge>{stack}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative overflow-hidden">
        <div className="invisible">
          <Image
            src={"/icons/arrow.svg"}
            alt="Ícone de uma seta"
            width={16}
            height={16}
          />
        </div>
        <div className="absolute right-0 top-0 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
          <Image
            src={"/icons/arrow.svg"}
            alt="Ícone de uma seta"
            width={16}
            height={16}
          />
        </div>
        <div className="absolute right-0 top-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0">
          <Image
            src={"/icons/arrow.svg"}
            alt="Ícone de uma seta"
            width={16}
            height={16}
          />
        </div>
      </div>
    </Link>
  );
}
