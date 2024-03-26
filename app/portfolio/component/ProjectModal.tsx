import Image from "next/image";
import { ProjectDataProps } from "@/app/components/PortfolioData";

const labels = ["client", "year", "link", "description", "repo"];

const ProjectModal = ({ project }: { project?: ProjectDataProps }) => {
    // If project is undefined, render a placeholder or nothing
    if (!project) return null; // or return some default component or message

    return (
        <section className="project-modal w-[80%] px-8 space-y-8">
            <section className="flex items-center space-x-8">
                <p className="text-base text-white font-semibold">{labels[0]}</p>
                <section className="">
                    <Image
                        src={project.logo}
                        width={200}
                        height={16}
                        alt={project.name}
                    />
                </section>
            </section>
            <section className="flex items-center space-x-8">
                <p className="text-base text-white font-semibold">{labels[2]}</p>
                <p className="text-lg text-white font-bold">{project.year}</p>
            </section>
            <section className="flex items-center space-x-8">
                <p className="text-base text-white font-semibold">{labels[3]}</p>
                <p className="text-lg text-white font-bold">{project.link}</p>
            </section>
            <section className="block">
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.description}
                </p>
            </section>
            <section className="flex items-center space-x-8">
                <p className="text-base text-white font-bold">{project.github}</p>
            </section>
        </section>
    );
};

export default ProjectModal;
