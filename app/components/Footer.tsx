"use client"
import Link from "next/link";
import EmailSub from "./EmailSub";
import { motion } from "framer-motion";

interface SocialProps {
    id: number;
    name: string;
    href: string;
    icon: string;
}

export const socials: SocialProps[] = [
    { id: 1, name: "x", href: "https://x.com/integral19", icon: "/assets/x.svg" },
    { id: 2, name: "youtube", href: "https://youtube.com/integral19", icon: "/assets/youtube.svg"  },
    { id: 3, name: "instagram", href: "https://instagram.com/oh_great", icon: "/assets/instagram.svg" },
    { id: 4, name: "facebook", href: "https://fb.com/ojadua.efe", icon: "/assets/facebook.svg" },
    { id: 5, name: "medium", href: "https://medium.com/ogreat00", icon: "/assets/medium.svg" },
    { id: 6, name: "github", href: "https://github.com/integral-digi", icon: "/assets/github.svg" },
    { id: 7, name: "linkedin", href: "https://linkedin.com/ojadua-efe", icon: "/assets/x.svg" },
]

const linkTo = {
    figma: "https://www.figma.com/file/gO6RhuBiptMrpcezFoKzVY/Portfolio-By-Efe?type=design&node-id=0-1&mode=design&t=4DNPA60t9NSbcOoh-0",
    github: "https://github.com/integral-digi/efeojadua",
    linkStyle: "text-indigo-200 hover:underline"
}

const Footer = () => {
    return (    
        <motion.section 
            className="space-y-14 justify-center mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 3 }}
            exit={{ opacity: 0 }}
        >
            <EmailSub />
            <h1 className="text-white text-center text-6xl font-bold leading-10">
                hi@efeojadua.dev
            </h1>
            <section className="flex items-center space-x-4 justify-center">
                {socials.map((social) => (
                    <section 
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.name === "facebook" ? "bg-indigo-500" : "bg-transparent"}`} 
                        key={social.id}
                    >
                        <Link 
                            href={social.href} 
                            passHref
                            target="blank"
                        >
                            <img 
                                src={social.icon} 
                                alt={social.name} 
                                className="w-4 h-4" 
                            />
                        </Link>
                    </section>
                ))}
            </section>
            <section className="justify-center flex">
                <p className="text-center text-white text-sm font-medium">
                    © 2023 <Link href={linkTo.figma} target="blank" className={linkTo.linkStyle}>Designed</Link> & <Link href={linkTo.github} className={linkTo.linkStyle}>Developed</Link> by Efe Ojadua  •  All Rights Reserved
                </p>
            </section>
        </motion.section>
    )
}

export default Footer