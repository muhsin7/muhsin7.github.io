import ProjectCard from "./projectcard";

export default function Projects() {
  return (
    <div className="lg:px-40 md:px-20">
        <div className="text-3xl font-bold mb-16">Projects</div>
        <div className="grid justify-items-center gap-y-10 gap-x-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
