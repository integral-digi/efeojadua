"use client"
import { projectData, ProjectDataProps } from "@/app/Components/PortfolioData";
import { motion } from "framer-motion";
import { Popover, Transition } from "@headlessui/react";
import ProjectModal from "./ProjectModal";

const PostTray = () => {
    return (
        <section className="w-full">
            <section className="w-full grid items-center grid-cols-2 gap-6 lg:grid-cols-1">
                {projectData.map((project) => (
                    <Popover key={project.id} data-popover-target={`project-modal-${project.id}`}>
                        <Popover.Button>
                            <motion.section 
                                key={project.id} 
                                className={`relative ${project.id === 0 && "grid-cols-1"}`}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.2 }}
                            >
                                <section className="bg-amber-700 opacity-90 w-full h-full absolute top-0 left-0 hover:opacity-0" />
                                <section className="w-full h-[640px] justify-center relative">
                                    <img 
                                        src={project.photo} 
                                        alt={project.name} 
                                        className="w-full h-full object-cover" 
                                    />
                                    <section className="absolute bottom-8 left-8 z-20">
                                        <section className="space-y-12">
                                            <section className="space-x-3 flex items-center">
                                                {project.tags.map((tag, index) => (
                                                    <section 
                                                        key={index} 
                                                        className="px-4 py-1 bg-white rounded-full flex items-center justify-center"
                                                    >
                                                        <p className="text-orange-950 text-base font-normal leading-loose">
                                                            {tag}
                                                        </p>
                                                    </section>
                                                ))}
                                            </section>
                                            <p className="text-white text-4xl font-extrabold leading-10">
                                                {project.name}
                                            </p>
                                        </section>
                                    </section>
                                </section>
                            </motion.section>
                        </Popover.Button>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="z-50 top-0 right-0 w-full h-[640px] absolute" id={`project-modal-${project.id}`}>
                                <ProjectModal project={findProjectById(project.id)} />
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                ))}
            </section>
        </section>
    );
};

// Helper function to find project data by ID
function findProjectById(id: number): ProjectDataProps | undefined {
    return projectData.find(project => project.id === id);
}

export default PostTray;
