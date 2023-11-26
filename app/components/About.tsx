const aboutItems = {
    info: "I'm a versatile Product Designer and Developer with over 7 years of experience. My journey began with a degree in accounting, but my passion led me to become a self-taught frontend developer. I'm a creative problem solver, and my skills span UI/UX design, frontend, and a little bit of dabbling in backend development with a toolkit that includes",
}

const features = [
    { icon: "/assets/figma.svg", heading: "UI/UX - Figma", subtitle: "4 years experience in designing flawless user experiences for impactful brands." },
    { icon: "/assets/js.svg", heading: "Javascript", subtitle: "8 years experience in crafting client-side interactions with the popular JS scripting language." },
    { icon: "/assets/react.svg", heading: "React Js / Native", subtitle: "4 years experience building some of the coolest frontends using React JS and React Native." },
    { icon: "/assets/py.svg", heading: "Python", subtitle: "2 years experience working with Python, and Python frameworks like Flask and Django." },
    { icon: "/assets/redux.svg", heading: "Redux", subtitle: "4 years experience building some of the coolest frontends using Redux Toolkit." },
    { icon: "/assets/postgres.svg", heading: "PostgreSQL", subtitle: "4 years worth of valuable experience building reliable databases" },
]

const About = () => {
    return (
        <section className="w-full space-y-6">
            <section>
                <span className="text-white text-6xl font-black">
                    About &nbsp;
                </span>
                <span className="text-slate-400 text-6xl font-black">
                    me
                </span>
            </section>
            <section className="w-[80%]">
                <p className="text-white text-2xl font-bold">
                    {aboutItems.info}
                </p>
            </section>
            <section className="flex items-center space-x-6 overflow-x-scroll">
                {features.map((feature, index) => (
                    <section className="w-80 h-[464px] bg-zinc-900 rounded-2xl shadow px-3 pt-8 pb-3" key={index}>
                        <img 
                            src={feature.icon} 
                            alt={feature.heading} 
                            className="w-16 h-16" 
                        />
                        <p className="text-white text-lg font-bold">
                            {feature.heading}
                        </p>
                        <p className="text-slate-100 text-xl font-normal leading-loose">
                            {feature.subtitle}
                        </p>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default About;