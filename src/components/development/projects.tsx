import ProjectContainer from "./project-container";

export default function DevelopmentProjects() {
  return (
    <section>
      <h2 className="container font-bold">Projetos de desenvolvimento web</h2>
      <ul className="projects-container">
        <li>
          <ProjectContainer
            title="Dogs Next"
            href="https://github.com/bagrielz/dogs-project"
            description="Projeto ficcional de uma rede social para cachorros."
            stacks={["NextJS", "TypeScript", "CSS Modules", "API"]}
          />
        </li>
      </ul>
    </section>
  );
}
