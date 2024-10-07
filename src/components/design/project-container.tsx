import Link from 'next/link';
import ArrowIcon from '../arrow-icon';

export default function ProjectContainer({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`Projeto ${title}`}
      role="link"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-between items-center p-4 rounded-xl transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-dark-50"
    >
      <div className="font-medium">
        <h3 className="mb-3 text-dark-100 dark:text-neutral-50">{title}</h3>
        <p className="text-neutral-500 dark:text-neutral-200">{description}</p>
      </div>
      <div className="relative w-4 h-4 overflow-hidden">
        <ArrowIcon className="absolute fill-dark-50 dark:fill-neutral-50 right-0 top-0 transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
        <ArrowIcon className="absolute fill-dark-50 dark:fill-neutral-50 right-0 top-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
      </div>
    </Link>
  );
}
