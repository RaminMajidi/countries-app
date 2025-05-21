import LocalSwitcher from "../custom/LocalSwitcher"
import ThemeSwitch from "../custom/toggleSwitch/ThemeSwitch"
import Logo from "./Logo"

const Header = () => {
    return (
        <header className="w-full h-14 flex 
        justify-between items-center px-4 py-2
         bg-blue-500/70 text-slate-100"
        >
            <LocalSwitcher />
            <Logo />
            <ThemeSwitch />
        </header>
    )
}

export default Header