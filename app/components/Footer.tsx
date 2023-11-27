import EmailSub from "./EmailSub";

const socials = [
    { id: 1, name: "x", href: "x.com/integral19", icon: "/assets/x.svg" },
    { id: 2, name: "facebook", href: "fb.com/ojadua.efe", icon: "/assets/facebook.svg" },
    { id: 3, name: "instagram", href: "instagram.com/oh_great", icon: "/assets/instagram.svg" },
    { id: 4, name: "youtube", href: "youtube.com/integral19", icon: "/assets/youtube.svg" },
    { id: 5, name: "medium", href: "medium.com/ogreat00", icon: "/assets/medium.svg" },
    { id: 6, name: "github", href: "github.com/integral-digi", icon: "/assets/github.svg" },
    { id: 7, name: "linkedin", href: "linkedin.com/ojadua-efe", icon: "/assets/x.svg" },
]

const Footer = () => {
    return (    
        <section className="space-y-14 justify-center mx-auto">
            <EmailSub />
            <h1 className="text-white text-center text-6xl font-bold leading-10">
                hi@efeojadua.dev
            </h1>
            <section className="flex items-center space-x-4 justify-center">
                {socials.map((social) => (
                    <section 
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.id === 2 ? "bg-indigo-500" : "bg-transparent"}`} 
                        key={social.id}
                    >
                        <img 
                            src={social.icon} 
                            alt={social.name} 
                            className="w-4 h-4" 
                        />
                    </section>
                ))}
            </section>
            <section className="justify-center flex">
                <p className="text-center text-white text-sm font-medium">
                    © 2023 Efe Ojadua  •  All Rights Reserved
                </p>
            </section>
        </section>
    )
}

export default Footer