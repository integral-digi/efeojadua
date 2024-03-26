"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import MainNav from "./MainNav";
import { motion } from "framer-motion";
import { Popover } from "@headlessui/react";
import { socials } from "./Footer";


interface MenuItemsProps {
    name: string;
    href: string;
}

const menuItems: MenuItemsProps[] = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "mailto:ojaduagreat@gmail.com" }
]


const Menu = () => {
    const router = useRouter();
    
    return (
        <section className="bg-gray-950 w-full h-full min-h-screen z-50">
            <section className="space-y-32 px-36 py-16 lg:px-8 lg:space-y-24">
                <section className="flex items-center justify-between">
                    <MainNav icon={null} />
                    <Popover.Button>
                        <p className="text-lg text-white font-black cursor-pointer">
                            close
                        </p>
                    </Popover.Button>
                </section>
                <section className="space-y-8">
                    {menuItems.map((item, index) => (
                        <motion.p 
                            className="text-6xl text-white font-black cursor-pointer lg:text-4xl" 
                            key={index} onClick={()=>router.push(item.href)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 0.5 }}
                            exit={{ opacity: 0 }}
                        >
                            {item.name.toUpperCase()}
                        </motion.p>
                    ))}
                </section>
                <section className="flex items-center space-x-4">
                    {socials.map((social) => (
                        <section 
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.name === "facebook" ? "bg-indigo-500" : "bg-transparent"}`} 
                            key={social.id}
                        >
                            <Link 
                                href={social.href} 
                                passHref target="blank"
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
            </section>
        </section>
    )
}

export default Menu;