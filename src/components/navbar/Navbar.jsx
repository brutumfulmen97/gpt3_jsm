import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
    return (
        <>
            <p>
                <a href="#home">Home</a>
            </p>
            <p>
                <a href="#whatgpt3">What is GPT3?</a>
            </p>
            <p>
                <a href="#possibility">Open AI</a>
            </p>
            <p>
                <a href="#features">Case Studies</a>
            </p>
            <p>
                <a href="#blog">Library</a>
            </p>
        </>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        onClick={() => setToggleMenu(false)}
                        size={27}
                        color="#fff"
                    />
                ) : (
                    <RiMenu3Line
                        onClick={() => setToggleMenu(true)}
                        size={27}
                        color="#fff"
                    />
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu-container scale-up-center">
                        <div className="gpt3__navbar-menu-container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu-container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
