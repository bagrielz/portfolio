import ProjectContainer from './project-container';

const projects = [
  {
    title: 'Samsung',
    href: 'https://www.figma.com/design/F5r8s6SAEK5z1A55yDQW1N/samsung-redesign-12-06-24?m=auto&t=fsoirzMdpjVNQKp9-1',
    description: 'Redesign da página de lançamento do Samsung Galaxy Z Flip6.',
  },
  {
    title: 'Crypto App',
    href: 'https://www.figma.com/design/vTiVpQihvrdsTRzJ4xMDBk/cripto-app-15-02-24?m=auto&t=fsoirzMdpjVNQKp9-1',
    description: 'Aplicativo para serviços de NFTs.',
  },
];

export default function DesignProjects() {
  return (
    <section aria-labelledby="development-projects" className="container my-8">
      <h2
        id="development-projects"
        className="font-semibold text-dark-100 dark:text-neutral-50 mb-6"
      >
        Projetos de design
      </h2>
      <ul className="projects-container -ml-4 space-y-6">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectContainer
              title={project.title}
              href={project.href}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
