import React, {useEffect} from 'react';
import paris from "../images/paris.jpg";
import dubai from "../images/dubai.jpg";
import budapest from "../images/budapest.jpg";
import london from "../images/london.jpg";
import parisTraveler from "../images/parisTraveler.jpg";
import dubaiTraveler from "../images/dubaiTraveler.jpg";
import budapestTraveler from "../images/budapestTraveler.jpg";
import londonTraveler from "../images/londonTraveler.jpg";
import Aos from "aos";
import "aos/dist/aos.css";



const Travelers = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    const travelers = [
        {
            id:1,
            destinationImage:paris,
            travelerImage:parisTraveler,
            travelerName: "Molnár Gréta"
        },
        {
            id:2,
            destinationImage:dubai,
            travelerImage:dubaiTraveler,
            travelerName: "Molnár Ildikó"
        },
        {
            id:3,
            destinationImage:budapest,
            travelerImage:budapestTraveler,
            travelerName: "Molnár Evelin"
        },
        {
            id:4,
            destinationImage:london,
            travelerImage:londonTraveler,
            travelerName: "Molnár Eszter"
        }
    ]



    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500"> A hónapban legtöbbet utazók </h2>


                <div className="travelersContainer grid">
                    {
                        travelers.map(({id, destinationImage,travelerImage,travelerName}) => {
                            return(
                                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                                    <img src={destinationImage} alt="destination" className="destinationImage"/>

                                    <div className="travelerPicture">
                                        <img src={travelerImage} alt="ParisTraveler" className="travelerImage"/>
                                    </div>
                                    <div className="travelerName">
                                        <span> {travelerName} </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    );
};

export default Travelers;