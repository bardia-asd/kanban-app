import { projectData } from "@/data/projectsData";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
