import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Link} from "react-router-dom";

// to do state for the button component (mobileNavBar)
function MainNavBar() {
    return (
        <div className="row navigation-bar">
            <div className="col menu">
                <Link to="/">
                    <ul>
                        <li><i className="fas fa-home"></i>home</li>
                    </ul>
                </Link>
            </div>
            <div className="col menu">
                <Link to="/portfolio">
                    <ul>
                        <li><i className="fas fa-paint-brush"></i>portfolio</li>
                    </ul>
                </Link>
            </div>
            <div className="col menu">
                <Link to="/contacts">
                    <ul>
                        <li><i className="fas fa-address-card"></i>contacts</li>
                    </ul>
                </Link>
            </div>
        </div>
    )
}

function BurgerButtonOpen(props) {
    return (
        <>
            <ul className="menubox">
                <li onClick={props.onClick} key="home"><Link className="menu-item" to="/"><i
                    className="fas fa-home"></i>home</Link></li>
                <li onClick={props.onClick} key="portfolio"><Link className="menu-item" to="/portfolio"><i
                    className="fas fa-paint-brush"></i>portfolio</Link></li>
                <li onClick={props.onClick} key="contacts"><Link className="menu-item" to="/contacts"><i
                    className="fas fa-address-card"></i>contacts</Link></li>
            </ul>
        </>
    )
}

function MobileNavBar() {
    let [burgerButtonOpen, setBurgerButtonOpen] = useState(false)
    let navBar;
    if (burgerButtonOpen) {
        navBar = <BurgerButtonOpen onClick={() => setBurgerButtonOpen(!burgerButtonOpen)}/>;
    }
    console.log("Rendering <MobileNavBar> with burgerButtonOpen:", burgerButtonOpen)
    return (
        <div className="row main-bar">
            <input id="menu-toggle" type="checkbox" checked={burgerButtonOpen} onChange={() => {
            }}/>
            <label id="menu-btn" onClick={() => setBurgerButtonOpen(!burgerButtonOpen)} className="menu-btn"
                   htmlFor="menu-toggle">
                <span></span>
            </label>
            {navBar}
        </div>
    )
}

// used useEffect hook to prevent redundant eventListeners creating
const isMobileBar = () => window.innerWidth < 801;
export default function Navbar() {
    let [mobileBar, setMobileBar] = useState(isMobileBar());
    console.log(`Rendering nav bar for, mobile: ${mobileBar}`)
    useEffect(() => {
        window.addEventListener('resize', () => setMobileBar(isMobileBar()))
    }, []);
    return (
        <>
            {mobileBar ? <MobileNavBar/> : <MainNavBar/>}
        </>
    )
}