"use client"
import { useRouter } from "next/navigation";
import MainNav, { navItems } from "./MainNav";
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
        <section className="bg-zinc-900 w-full h-full z-50">
            <section className="space-y-32 px-36 py-16">
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
                        <p 
                            className="text-6xl text-white font-black cursor-pointer" 
                            key={index} onClick={()=>router.push(item.href)}
                        >
                            {item.name.toUpperCase()}
                        </p>
                    ))}
                </section>
                <section className="flex items-center space-x-4">
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
            </section>
        </section>
    )
}

export default Menu;