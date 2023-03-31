import React, {useEffect} from 'react';
import gridImage from "../images/imageGrid.png";
import Aos from "aos";
import "aos/dist/aos.css";



const Support = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])



    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div className="titlesDiv">
                    <small> Utazási tanácsadás </small>
                    <h2> Tervezze meg utazását bizalommal</h2>
                    <p> Keressen segítséget a foglalási és utazási tervéhez! </p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo" data-aos="fade-down" data-aos-duration="2500" >
                            <span className="number"> 01 </span>
                            <h4> Védőoltások </h4>
                            <p>Amennyiben azt saját egészségügyi állapota megkívánja, gondoskodjon a védőoltás beadatásáról a szabályozásoktól függetlenül is!</p>
                        </div>

                        <div className="singleInfo" data-aos="fade-down" data-aos-duration="3500" >
                            <span className="number colorOne"> 02 </span>
                            <h4> Előzetes ismerkedés a célországgal </h4>
                            <p>Ismerje meg a választott célország legfontosabb szabályait, szokásait, amelyekre az ott-tartózkodása során ügyelnie kell!</p>
                        </div>

                        <div className="singleInfo" data-aos="fade-down" data-aos-duration="4500" >
                            <span className="number colorTwo"> 03 </span>
                            <h4> Több kockázatú utasbiztosítás </h4>
                            <p>A biztosítás mindig jó befektetés, hiszen a ráfordított összeg minimális a külföldi orvosi ellátás költségeihez viszonyítva!</p>
                        </div>
                    </div>

                    <div className="imgDiv"  data-aos="fade-up" data-aos-duration="2500">
                        <img src={gridImage} alt="travel grid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;