"use client"
import PostTray from "./components/PostTray";
import MainNav from "../components/MainNav";
import { hamburgerIcon } from "../components/Menu";
import PortHeading from "./components/PortHeading";
import Footer from "../components/Footer";

const PortHome = () => {
    return (
        <section className="w-full bg-gray-950 px-36 lg:px-8">
            <section className="py-16 space-y-60">
                <MainNav icon={hamburgerIcon} />
                <PortHeading />
                <PostTray />
                <Footer />
            </section>
        </section>
    )
}

export default PortHome;