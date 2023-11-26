import Heading from "./Heading";

const pageInfo = {
    title: "Portfolio",
    subtitle: "Insights & Ideas shared based on my experiences",
    moreLink: "See all"
};

const entries = [
    { id: 0, name: "Middletrust", tags: ["design", "frontend"], photo: "/assets/midBanner.jpg" },
    { id: 1, name: "Travvelbaby", tags: ["design", "frontend"], photo: "/assets/travBanner.jpg" },
    { id: 2, name: "Testace", tags: ["design", "frontend"], photo: "/assets/testBanner.jpg" },
    { id: 3, name: "Toodle", tags: ["design", "frontend", "backend"], photo: "/assets/toodBanner.jpg" },
]

const Portfolio = () => {
    return (
        <section className="w-full overflow-x-hidden space-y-6">
            <section className="flex justify-between items-end">
                <Heading 
                    title={pageInfo.title} 
                    subtitle={pageInfo.subtitle} 
                />
                <p className="text-right text-blue-500 text-2xl font-bold">
                    {pageInfo.moreLink}
                </p>
            </section>
            <section className="overflow-x-scroll w-max flex items-center space-x-12">
                {entries.map((entry) => (
                    <section 
                        key={entry.id} 
                        className="w-full h-[576px] flex items-center justify-center relative"
                    >
                        <section className="absolute bottom-8 left-8 z-50">
                            <section className="space-y-12">
                                <section className="space-x-3 flex items-center">
                                    {entry.tags.map((tag, index) => (
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
                                    {entry.name}
                                </p>
                            </section>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default Portfolio;