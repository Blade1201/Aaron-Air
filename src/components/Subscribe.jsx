import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";



const Subscribe = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])



    return (
        <div className="subscribe section">
            <div className="sectionContainer container" data-aos="fade-up" data-aos-duration="2500">
                <h2> Iratkozzon fel hírajánlatainkra </h2>

                <div className="inputDiv flex">
                    <input type="text" placeholder="Irja be az e-mail címét"/>
                    <button className="btn"> Feliratkozás </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;