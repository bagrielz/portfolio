import { Badge } from './badge';
import Link from 'next/link';

// Componentes auxiliares para SVG
const ArrowIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.24341 3.16554C8.46796 2.92057 8.83203 2.92057 9.05659 3.16554L13.0816 7.55644C13.3061 7.80141 13.3061 8.19858 13.0816 8.44354L9.05659 12.8345C8.83203 13.0794 8.46796 13.0794 8.24341 12.8345C8.01886 12.5895 8.01886 12.1923 8.24341 11.9474L11.2868 8.62727H2.325C2.00744 8.62727 1.75 8.34643 1.75 7.99999C1.75 7.65356 2.00744 7.37272 2.325 7.37272H11.2868L8.24341 4.05263C8.01886 3.80767 8.01886 3.4105 8.24341 3.16554Z"
      fill="currentColor"
    />
  </svg>
);

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
      aria-label={`Projeto ${title}`}
      role="link"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-between items-center p-4 rounded-xl transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-dark-50"
    >
      <div className="font-medium">
        <h3 className="mb-3">{title}</h3>
        <p className="text-neutral-500 dark:text-neutral-200 mb-5">
          {description}
        </p>
        <ul className="flex gap-3">
          {stacks.map((stack, index) => (
            <li key={index}>
              <Badge>{stack}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-4 h-4 overflow-hidden">
        <ArrowIcon className="absolute fill-dark-50 dark:fill-neutral-50 right-0 top-0 transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
        <ArrowIcon className="absolute fill-dark-50 dark:fill-neutral-50 right-0 top-0 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
      </div>
    </Link>
  );
}
