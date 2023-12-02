import PostTray from "./Components/PostTray";
import MainNav from "../Components/MainNav";
import { hamburgerIcon } from "../page";
import PortHeading from "./Components/PortHeading";
import Footer from "../Components/Footer";

const PortHome = () => {
    return (
        <section className="w-full bg-[#1A1A1A] px-36 lg:px-8">
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