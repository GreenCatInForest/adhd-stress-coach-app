import nightModeIcon from "../assets/images/night-mode.svg";

export const Navbar = () => {
    return (
        <div className="navbar-main">
            <h1>ADHD  CH{']'}</h1>
            <img src={nightModeIcon} alt="Night Mode Icon" className="night-mode-icon"/>
        </div>
    )
}