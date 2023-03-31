import React, {useEffect} from 'react';
import Logo from "../images/logo.png";
import {TiSocialFacebook, TiSocialGithubCircular, TiSocialLinkedin, TiSocialTwitter} from "react-icons/ti";
import Aos from "aos";
import "aos/dist/aos.css";



const Footer = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne" data-aos="fade-up" data-aos-duration="2500">
                    <div className="logoDiv">
                        <img src={Logo} alt="logo" className="logo"/>
                    </div>
                    <p> Az elmének erősebbnek kell lennie az érzéseknél! </p>

                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon"/>
                        <TiSocialTwitter className="icon"/>
                        <TiSocialGithubCircular className="icon"/>
                        <TiSocialLinkedin className="icon"/>
                    </div>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle"> Információ </span>
                    <li><a href="#"> Kezdőlap </a> </li>
                    <li><a href="#"> Felfedezés </a> </li>
                    <li><a href="#"> Repülési állapot </a> </li>
                    <li><a href="#"> Utazás </a> </li>
                    <li><a href="#"> Bejelentkezés </a> </li>
                    <li><a href="#"> Kezelje foglalásait </a> </li>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle"> Gyors útmutató </span>
                    <li><a href="#"> GYIK </a> </li>
                    <li><a href="#"> Hogyan </a> </li>
                    <li><a href="#"> Tulajdonságok </a> </li>
                    <li><a href="#"> Poggyász </a> </li>
                    <li><a href="#"> Útvonal térkép </a> </li>
                    <li><a href="#"> Közösségünk </a> </li>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="2500">
                    <span className="linkTitle"> További információ </span>
                    <li><a href="#"> Sofőr </a> </li>
                    <li><a href="#"> Partnereink </a> </li>
                    <li><a href="#"> Úticél </a> </li>
                    <li><a href="#"> Karrier </a> </li>
                    <li><a href="#"> Szállítás </a> </li>
                    <li><a href="#"> Szabályzat </a> </li>
                </div>
            </div>
        </div>
    );
};

export default Footer;