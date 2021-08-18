import Logo from "../components/Logo";
import { useState } from "react";

export default function Header() {
    return (
        <header className="bg-spring-wood max-w-md sm:max-w-lg lg:max-w-6xl md:max-w-3xl mx-auto py-6 flex flex-col items-center overflow-hidden md:flex-row md:justify-between">
            <Logo />
            <nav className="flex flex-col">
                <div className="top-menu flex flex-row justify-center mb-4 mt-4 md:mt-0 md:justify-end">
                    <div className="social-links">
                        <a href="" className="icons mr-4 icon-instagram"></a>
                        <a href="" className="icons mr-4 icon-facebook"></a>
                        <a href="" className="icons icon-twitter"></a>
                    </div>
                    <div className="line-divider w-px bg-black mx-6"></div>
                    <div className="login-menu">
                        <button className="flex justify-center item-center">
                            Log In <i className="icons icon-chevron-down ml-2"></i>
                        </button>
                    </div>
                </div>
                <div className="main-menu flex justify-center text-gray-600 transition-all duration-75 text-sm flex-wrap md:text-base">
                    <a href="#" className="font-bold text-black hover:font-bold hover:text-black mb-3 md:mb-0">
                        Home
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        Our Portfolio
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        Suppliers
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        Careers
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        Our Causes
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        News
                    </a>
                    <a href="#" className="ml-8 hover:font-bold hover:text-black">
                        About Us
                    </a>
                </div>
            </nav>
        </header>
    );
}
