import React, {useEffect} from 'react';
import {RxCalendar} from "react-icons/rx";
import {BsBookmarkCheck, BsShieldCheck} from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";




const Info = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])



    return (
        <div className="info section">
            <div className="infoContainer container">
                <div className="titleDiv flex">
                    <h2 data-aos="fade-right" data-aos-duration="2500" > Utazzon, hogy emlékeket szerezzen szerte a világon! </h2>
                    <button className="btn" data-aos="fade-left" data-aos-duration="2500" > Mindet megnézem </button>
                </div>

                <div className="cardsDiv grid">
                    <div className="singleCard grid"  data-aos="fade-up" data-aos-duration="5500">
                        <div className="iconDiv flex">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle"> Könyvek és Lazulás </span>
                        <p>Számos regény és további szolgáltatásunk közül válogathat!</p>
                    </div>



                    <div className="singleCard grid"  data-aos="fade-up" data-aos-duration="5500">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle"> Okos ellenőrző lista </span>
                        <p>Tartsa dolgait egy helyen a telefonjáról!</p>
                    </div>



                    <div className="singleCard grid"  data-aos="fade-up" data-aos-duration="5500">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle"> Megtakaritások </span>
                        <p>Hívjo légitársaságokat telefonjáról és foglaljon repülőjegyet!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;