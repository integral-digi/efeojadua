const navItems = {
    logo: "/assets/logo.svg",
    hamburger: "/assets/hamburger.svg"
}

const MainNav = () => {
    return (
        <nav className="w-full flex items-center justify-between">
            <img src={navItems.logo} alt="logo" className="h-6 w-auto" />
            <img src={navItems.hamburger} alt="logo" className="w-8 h-4" />
        </nav>
    )
}

export default MainNav;