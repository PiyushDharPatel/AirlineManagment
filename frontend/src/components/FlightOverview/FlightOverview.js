import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";
import Options from "./Options";

import { useState, useEffect } from "react";


const flight_details = {
    flight_number: 6969,
    airline: "Air India",
    departure_airport: "Delhi",
    arrival_airport: "Mumbai",
    departure_date: new Date,
    arrival_date: new Date,
    duration: "1h 30m",
    price: 1000
}


const FlightOverview = () => {
    const [passengers_num, setPassengersNum] = useState(1);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);
    // }, []);

    return (
        <>
            <Navbar />
            {loading ? (
                <>
                    <div className='h-[4.5rem]'></div>
                    <div className="text-center p-20">Fetching Flight Details...</div>
                </>
            ) : (
                <>
                    <div className='h-[4.5rem]'></div>
                    <div className="flex w-full h-[calc(100vh-4.5rem)] bg-gradient-to-r from-purple-500 to-pink-500">
                        <Sidebar
                            flight_details={flight_details}
                            passengers_num={passengers_num}
                        />
                        <Options
                            passengers_num={passengers_num}
                            setPassengersNum={setPassengersNum}
                            flight_details={flight_details}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default FlightOverview;