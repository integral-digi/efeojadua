import Image from "next/image";
import { projectData, ProjectDataProps } from "@/app/Components/PortfolioData";
import Link from "next/link";

const labels = [ "client", "year", "link", "description", "repo", ]


const ProjectModal = ( {project}: { project: ProjectDataProps }) => {
    return (
        <section className="project-modal w-1/2 p-16 space-y-8 bg-gray-900 z-50 min-h-screen h-full fixed overflow-y-scroll shadow-2xl">
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-semibold">
                    {labels[0]}
                </p>
                <section className="">
                    <Image  
                        src={project.logo}
                        width={160}
                        height={12}
                        alt={project.name}
                    />
                </section>
            </section>
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-semibold">
                    {labels[1]}
                </p>
                <p className="text-base text-white font-bold">
                    {project.year}
                </p>
            </section>
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-semibold">
                    {labels[2]}
                </p>
                <p className="text-base text-white font-bold underline">
                    <Link href={project.link} passHref>
                        {project.link}
                    </Link>
                </p>
            </section>
            <section className="w-full min-w-full max-w-full">
                <Image
                    src={project.photo}
                    width={720}
                    height={640}
                    alt={project.name}
                />
            </section>
            <section className="block">
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.description}
                </p>
            </section>
            <section className="flex items-center space-x-8">
                <p className="text-base text-white font-bold">
                    {project.github}
                </p>
            </section>
        </section>
    )
}

export default ProjectModal;