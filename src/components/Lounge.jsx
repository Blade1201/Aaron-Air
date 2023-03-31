import React, {useEffect} from 'react';
import gridImage from "../images/travelersGrid.png";
import Aos from "aos";
import "aos/dist/aos.css";



const Lounge = () => {


    useEffect(() => {
        Aos.init({duration: 2000})
    },[])



    return (
        <div className="lounge container section">
            <div className="sectionContainer grid">
                <div className="imgDiv" data-aos="fade-down" data-aos-duration="2500">
                    <img src={gridImage} alt="travelers"/>
                </div>

                <div className="textDiv">
                    <h2 data-aos="fade-down" data-aos-duration="2500">Kísérő nélküli kis társalgó</h2>


                <div className="grids grid">
                    <div className="singleGrid" data-aos="fade-down" data-aos-duration="2500">
                        <span className="gridTitle"> Segítség a repülőtéren keresztül </span>
                        <p>Az Aaron Air területén az AMS Assistance Kft. nyújt segítséget a fogyatékkal élő és korlátozott mozgású utasainknak!</p>
                    </div>

                    <div className="singleGrid" data-aos="fade-down" data-aos-duration="2500">
                        <span className="gridTitle"> Helybeni elsősegély nyújtás </span>
                        <p>Járatainkon képzett szakemberek nyújtanak segítséget!</p>
                    </div>

                    <div className="singleGrid" data-aos="fade-down" data-aos-duration="2500">
                        <span className="gridTitle"> Előrefoglalás </span>
                        <p>Foglaljon előre a sorban állás és egyéb kellemetlenségek elkerülése érdekében!</p>
                    </div>

                    <div className="singleGrid" data-aos="fade-down" data-aos-duration="2500">
                        <span className="gridTitle"> Sofőr-vezető szolgáltatás </span>
                        <p>Érkezéskor minden utasunknak biztositott saját utaztatási szolgáltatásunk!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Lounge;