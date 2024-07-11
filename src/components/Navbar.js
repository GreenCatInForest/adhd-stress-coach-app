import nightModeIcon from "../assets/images/night-mode.svg";

export const Navbar = () => {
    return (
        <div className="navbar-main">
            <h1>ADHD  CH{']'}</h1>
            <img src={nightModeIcon} alt="Night Mode Icon" className="night-mode-icon"/>
            <ul class="navbar-main-links-wrapper">
                <li class="navbar-main-link">what is it</li>
                <li class="navbar-main-link">how works</li>
                <li class="navbar-main-link">what for</li>
                <li class="navbar-main-link">who</li>
            </ul>     
        </div>
    )
}