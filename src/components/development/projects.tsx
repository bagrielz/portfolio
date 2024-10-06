import ProjectContainer from "./project-container";

export default function DevelopmentProjects() {
  return (
    <section>
      <h2 className="container font-bold">Projetos de desenvolvimento web</h2>
      <ul className="projects-container space-y-6">
        <li>
          <ProjectContainer
            title="Dogs Next"
            href="https://github.com/bagrielz/dogs-project"
            description="Projeto ficcional de uma rede social para cachorros."
            stacks={["NextJS", "TypeScript", "CSS Modules", "API"]}
          />
        </li>
        <li>
          <ProjectContainer
            title="To Do List"
            href="https://github.com/bagrielz/teste-dev-junior"
            description="Desafio técnico para uma vaga de desenvolvedor front-end."
            stacks={["NextJS", "TypeScript", "SASS"]}
          />
        </li>
        <li>
          <ProjectContainer
            title="Animais Fantásticos"
            href="https://github.com/bagrielz/animais-fantasticos-project"
            description="Projeto ficcional de uma página sobre animais."
            stacks={["HTML", "CSS", "JavaScript"]}
          />
        </li>
      </ul>
    </section>
  );
}
