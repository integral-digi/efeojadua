interface HeroItemProps {
    photo: string;
    heading: string;
    subtitle: string;
    buttonText: string;
    linkText: string;
}

const heroItems: HeroItemProps = {
    photo: "/images/efeimg.png",
    heading: "Crafting Digital Experiences with Passion & Precision",
    subtitle: "Hi, I’m Efe Ojadua - Product Designer & Developer",
    buttonText: "Hire me",
    linkText: "Download CV"
}


const Hero = () => {
    return (
        <section className="w-full space-y-9">
            <img 
                src={heroItems.photo} 
                alt="efe ojadua" 
                className="w-36 h-36" 
            />
            <section className="space-y-6">
                <h1 className="text-6xl text-white font-black">
                    {heroItems.heading}
                </h1>
                <p className="text-white text-2xl font-semibold">
                    {heroItems.subtitle}
                </p>
            </section>
            <section className="flex items-center space-x-6">
                <button className="flex items-center justify-center w-52cd efe-ojadua py-2 bg-white rounded-full text-zinc-900">
                    {heroItems.buttonText}
                </button>
                <button className="flex items-center justify-center bg-transparent">
                    {heroItems.linkText}
                </button>
            </section>
        </section>
    )
}

export default Hero;