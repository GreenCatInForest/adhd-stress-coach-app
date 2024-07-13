import { Link } from 'react-router-dom';

import nightModeIcon from "../assets/images/night-mode.svg";



export const Navbar = () => {
    return (
        <div className="navbar-main">
            <h1><Link to="/">ADHD  Co{'&'}H</Link></h1>
            <img src={nightModeIcon} alt="Night Mode Icon" className="night-mode-icon"/>
            <ul class="navbar-main-links-wrapper">
                <li class="navbar-main-link">
                <Link to="what-is-it">what is it</Link></li>
                <li class="navbar-main-link"><Link to="how-works">how works</Link></li>
                <li class="navbar-main-link"><Link to="what-for">what for</Link></li>
                <li class="navbar-main-link"><Link to="whos">who</Link></li>
            </ul>     
        </div>
    )
}