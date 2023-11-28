import Heading from "./Heading";

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
    { id: 6, name: "testace", src: "/assets/testace.svg" },
    { id: 7, name: "opennode", src: "/assets/opennode.svg" },
    { id: 8, name: "quincy", src: "/assets/quincy.svg" },
    { id: 9, name: "rentvec", src: "/assets/rentvec.svg" },
    { id: 10, name: "bliqit", src: "/assets/bliqit.svg" },
    { id: 11, name: "metamars", src: "/assets/metamars.svg" },
]

const scElements = {
    title: "Past clients",
    subtitle: "A few of the brands I have been privileged to work with"
}

const Showcase = () => {
    return (
        <section className="w-full">
            <section className="space-y-16">
                <Heading title={scElements.title} subtitle={scElements.subtitle} />
                <section className="flex items-center justify-between flex-1">
                    {logos.map((logo) => (
                        <section key={logo.id} className="w-auto h-6">
                            <img src={logo.src} alt={logo.name} className={`w-auto ${logo.id === 1 ? "h-5" : "h-6"}`} />
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Showcase;