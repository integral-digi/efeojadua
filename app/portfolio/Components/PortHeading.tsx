const headingInfo = {
    title: "Portfolio",
    subtitle: "A showcase of some of my recent web and app design and development projects. "
}

const PortHeading = () => {
    return (
        <section className="w-full space-y-6 justify-center">
            <h1 className="text-center text-white text-6xl font-black leading-10">
                {headingInfo.title}
            </h1>
            <p className="w-full text-center text-white text-opacity-80 text-lg font-normal">
                {headingInfo.subtitle}
            </p>
        </section>
    )
}

export default PortHeading;