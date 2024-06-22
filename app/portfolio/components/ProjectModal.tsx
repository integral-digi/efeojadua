import Image from "next/image";
import { ProjectDataProps } from "@/app/components/PortfolioData";
import Link from "next/link";
import { Popover } from "@headlessui/react";

const labels = ["Client", "Year", "Link", "Description", "Github"];

const ProjectModal = ({ project }: { project?: ProjectDataProps }) => {
    // If project is undefined, render a placeholder or nothing
    if (!project) return null;

    return (
        <section className="project-modal w-1/2 px-12 py-16 space-y-12 bg-gray-950 shadow-xl h-full min-h-screen fixed overflow-y-scroll lg:w-full">
            <section className="relative">
                <Popover.Button>
                    <Image
                        src="/assets/close.svg"
                        width={12}
                        height={12}
                        alt="close"
                        className="absolute right-0"
                    />
                </Popover.Button>
            </section>
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-semibold">{labels[0]}</p>
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
                <p className="text-base text-white font-semibold">{labels[1]}</p>
                <p className="text-base text-white font-bold">{project.year}</p>
            </section>
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-semibold">{labels[2]}</p>
                <Link href={project.link} passHref target="_blank">
                    <p className="text-base text-white font-semibold underline" >
                        {project.link}
                    </p>
                </Link>
            </section>
            <section className="min-w-full">
                <Image 
                    src={project.photo}
                    alt={project.name}
                    width={640}
                    height={480}
                />
            </section>
            <section className="block space-y-12">
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.intro || ""}
                </p>
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.midsection || ""}
                </p>
                {project.photoTwo && (
                    <section className="w-full">
                        <Image 
                            src={project.photoTwo}
                            alt={project.name}
                            width={640}
                            height={480}
                        />
                    </section>
                )}
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.description || ""}
                </p>
                {project.photoThree && (
                    <section className="w-full">
                        <Image 
                            src={project.photoThree}
                            alt={project.name}
                            width={640}
                            height={480}
                        />
                    </section>
                )}
                <p className="text-base text-white font-bold leading-10 max-w-fit">
                    {project.outro || ""}
                </p>
            </section>
            <section className="flex items-center justify-between">
                <p className="text-base text-white font-bold">{labels[4]}</p>
                <Link href={project.github} passHref  target="_blank">
                    <p className="text-base text-white font-bold underline">
                        {project.github}
                    </p>
                </Link>
            </section>
            <section className="w-full">
                <p className="text-sm text-white font-bold">
                    © {project.name}, All Rights Reserved
                </p>
            </section>
        </section>
    );
};

export default ProjectModal;
