interface LogoProps {
    id: number;
    name: string;
    src: string;
}

const logos: LogoProps[] = [
    { id: 0, name: "fiverr", src: "/assets/fiverr.svg" },
    { id: 1, name: "oracle", src: "/assets/oracle.svg" },
    { id: 3, name: "quadplan", src: "/assets/quadplan.svg" },
    { id: 4, name: "hims", src: "/assets/hims.svg" },
    { id: 5, name: "middletrust", src: "/assets/middletrust.svg" },
    { id: 6, name: "travvelbaby", src: "/assets/travvelbaby.svg" },
    
]

const Showcase = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between">
                {logos.map((logo) => (
                    <section key={logo.id} className="w-auto h-6">
                        <img src={logo.src} alt={logo.name} className={`w-auto ${logo.id === 1 ? "h-5" : "h-6"}`} />
                    </section>
                ))}
            </section>
        </section>
    )
}

export default Showcase;