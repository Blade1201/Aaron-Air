import React, {useEffect} from 'react';
import {HiOutlineLocationMarker} from "react-icons/hi";
import {RiAccountPinCircleLine} from "react-icons/ri";
import {RxCalendar} from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";



const Search = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    return (
        <div className="search container section">
            <div className="sectionContainer grid" data-aos="fade-up" data-aos-duration="2500" >

                <div className="btns flex">
                    <div className="singleBtn">
                        <span> Gazdaságos </span>
                    </div>

                    <div className="singleBtn">
                        <span> Üzleti </span>
                    </div>

                    <div className="singleBtn">
                        <span> Első osztály </span>
                    </div>
                </div>


                <div className="searchInputs flex" data-aos="fade-up" data-aos-duration="2000" >
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className="icon"/>
                        </div>

                        <div className="texts">
                            <h4> Helyszín </h4>
                            <input type="text" placeholder="Hova szeretne utazni?"/>
                        </div>
                    </div>




                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className="icon"/>
                        </div>

                        <div className="texts">
                            <h4> Utazók </h4>
                            <input type="text" placeholder="Utasok hozzáadása"/>
                        </div>
                    </div>




                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className="icon"/>
                        </div>

                        <div className="texts">
                            <h4> Bejelentkezési időpont </h4>
                            <input type="text" placeholder="Adja meg az időpontot"/>
                        </div>
                    </div>




                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className="icon"/>
                        </div>

                        <div className="texts">
                            <h4> Kijelentkezési időpont </h4>
                            <input type="text" placeholder="Adja meg az időpontot"/>
                        </div>
                    </div>


                    <button className="btn btnBlock flex"> Járat keresése </button>
                </div>
            </div>
        </div>
    );
};

export default Search;