import React,{useState} from 'react';
import {SiConsul} from "react-icons/si";
import {BsPhoneVibrate} from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";
import Logo from "../images/logo.png";
import {CgMenuGridO} from "react-icons/cg";



const Navbar = () => {

    const [active,setActive] = useState("navbarMenu")
    const showNavbar = () => {
        setActive("navbarMenu shownavBar")
    }
    const removeNavbar = () => {
        setActive("navbarMenu")
    }




    const [noBackground,addBackground] = useState("navbarTwo")
    const addBackgroundColor = () => {
        if (window.scrollY >= 10){
            addBackground("navbarTwo addBackgroundColor")
        }
        else{
            addBackground("navbarTwo")
        }
    }
window.addEventListener('scroll',addBackgroundColor)


    return (
        <div className='navbar flex'>
            <div className="navbarOne flex">
                <div>
                    <SiConsul/>
                </div>

                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrate className="icon"/> Támogatás</li>
                    <li className='flex'> <AiOutlineGlobal className="icon"/> Nyelv</li>
                </div>

                <div className="atb flex">
                    <span> Bejelentkezés </span>
                    <span> Regisztráció </span>
                </div>
            </div>


            <div className={noBackground}>
                <div className="logoDiv">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavbar} className="listItem">Kezdőlap</li>
                        <li onClick={removeNavbar} className="listItem">Rólunk</li>
                        <li onClick={removeNavbar} className="listItem">Ajánlatok</li>
                        <li onClick={removeNavbar} className="listItem">Ülések</li>
                        <li onClick={removeNavbar} className="listItem">Úticélok</li>
                    </ul>

                    <button onClick={removeNavbar} className="btn flex btnOne">
                        Elérhetőség
                    </button>
                </div>

                    <button className="btn flex btnTwo">
                        Elérhetőség
                    </button>

                    <div onClick={showNavbar} className="toggleIcon">
                        <CgMenuGridO className="icon"/>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;