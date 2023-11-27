interface HeroItemProps {
    photo: string;
    heading: string;
    headingTwo: string;
    subtitle: string;
    buttonText: string;
    linkText: string;
}

const heroItems: HeroItemProps = {
    photo: "/assets/efeimg.jpg",
    heading: "Crafting Digital Experiences with",
    headingTwo: "Passion & Precision",
    subtitle: "Hi, I’m Efe Ojadua - Product Designer & Developer",
    buttonText: "Hire me",
    linkText: "Download CV"
}


const Hero = () => {
    return (
        <section className="w-full space-y-9 relative">
            <section className="w-36 h-36">
                <img 
                    src={heroItems.photo} 
                    alt="efe ojadua" 
                    className="w-full h-full object-cover rounded-full" 
                />
            </section>
            <section className="space-y-6">
                <span className="space-y-6">
                    <h1 className="text-6xl text-white font-black">
                        {heroItems.heading}
                    </h1>
                    <h1 className="text-6xl text-slate-400 font-black">
                        {heroItems.headingTwo}
                    </h1>
                </span>
                <p className="text-white text-2xl font-semibold">
                    {heroItems.subtitle}
                </p>
            </section>
            <section className="flex items-center space-x-6">
                <button className="flex items-center justify-center px-16 py-2 bg-white rounded-full text-zinc-900 font-medium">
                    {heroItems.buttonText}
                </button>
                <button className="flex items-center justify-center bg-transparent font-medium">
                    {heroItems.linkText}
                </button>
            </section>
            <section className="w-32 h-32 bg-lime-500 rounded-full absolute -bottom-24 right-0" />
        </section>
    )
}

export default Hero;