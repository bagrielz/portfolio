import ProjectContainer from './project-container';

const projects = [
  {
    title: 'Dogs Next',
    href: 'https://github.com/bagrielz/dogs-project',
    description: 'Projeto ficcional de uma rede social para cachorros.',
    stacks: ['NextJS', 'TypeScript', 'CSS Modules', 'API'],
  },
  {
    title: 'To Do List',
    href: 'https://github.com/bagrielz/teste-dev-junior',
    description: 'Desafio técnico para uma vaga de desenvolvedor front-end.',
    stacks: ['NextJS', 'TypeScript', 'SASS'],
  },
  {
    title: 'Animais Fantásticos',
    href: 'https://github.com/bagrielz/animais-fantasticos-project',
    description: 'Projeto ficcional de uma página sobre animais.',
    stacks: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function DevelopmentProjects() {
  return (
    <section aria-labelledby="development-projects" className="container my-8">
      <h2
        id="development-projects"
        className="font-semibold text-dark-100 dark:text-neutral-50 mb-6"
      >
        Projetos de desenvolvimento web
      </h2>
      <ul className="projects-container -ml-4 space-y-6">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectContainer
              title={project.title}
              href={project.href}
              description={project.description}
              stacks={project.stacks}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
