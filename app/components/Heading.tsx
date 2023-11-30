const Heading = ({title, subtitle}: any) => {
    return (
        <section className="space-y-6">
            <h1 className="text-white text-6xl font-black">
                {title}
            </h1>
            <p className="text-white text-xl font-semibold">
                {subtitle}
            </p>
        </section>
    )
}

export default Heading;