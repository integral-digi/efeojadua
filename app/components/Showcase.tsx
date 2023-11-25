interface LogoProps {
    id: number;
    name: string;
    src: string;
}

const logos: LogoProps[] = [
    { id: 0, name: "quadplan", src: "/assets/quadplan.svg" },
    { id: 1, name: "oracle", src: "/assets/oracle.svg" },
    { id: 2, name: "middletrust", src: "/assets/middletrust.svg" },
    { id: 3, name: "hims", src: "/assets/hims.svg" },
    { id: 4, name: "travvelbaby", src: "/assets/travvelbaby.svg" },
    { id: 5, name: "rentvec", src: "/assets/rentvec.svg" },
]

const Showcase = () => {
    return (
        <section className="w-full">
            <section className="flex items-center justify-between">
                {logos.map((logo) => (
                    <section key={logo.id} className="w-auto h-9">
                        <img src={logo.src} alt={logo.name} className="w-auto h-9" />
                    </section>
                ))}
            </section>
        </section>
    )
}

export default Showcase;