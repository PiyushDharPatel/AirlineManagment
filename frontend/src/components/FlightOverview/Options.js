import { useState } from "react";
import PassengerInfo from "./PassengerInfo";

const prev_passenger_info = {
    name: "John Smith",
    gender: "Male",
    email: "john@me.com",
    phone: "1234567890",
}

const Options = (props) => {

    const [passenger_info_list, setPassengerInfoList] = useState({});

    return (
        <div className="overflow-auto w-[60%]">
            <div className="flex flex-col items-center mt-6 mb-6 gap-8">

                <div className="bg-white p-10 w-[90%] rounded-[2rem] shadow-xl shadow-black flex flex-col items-centre gap-8">

                    {/* seat type */}
                    <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">
                        <div className="text-2xl text-center">Seat Type</div>
                        <div className="flex justify-around">
                            <div>
                                <input name="seat" id="economy" type="radio" checked />
                                <label className="text-lg p-2" for="economy">Economy</label>
                            </div>
                            <div>
                                <input name="seat" id="business" type="radio" />
                                <label className="text-lg p-2" for="business">Business</label>
                            </div>
                            <div>
                                <input name="seat" id="first" type="radio" />
                                <label className="text-lg p-2" for="first">First Class</label>
                            </div>
                        </div>
                    </div>

                    {/* seat pref */}
                    <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">
                        <div className="text-2xl text-center">Seat Preference</div>
                        <div className="flex justify-around">
                            <div>
                                <input name="seat-pref" id="aisle" type="radio" checked />
                                <label className="text-lg p-2" for="aisle">Aisle Seat</label>
                            </div>
                            <div>
                                <input name="seat-pref" id="window" type="radio" />
                                <label className="text-lg p-2" for="window">Window Seat</label>
                            </div>
                        </div>
                    </div>

                    {/* luggage allowed */}
                    <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">
                        <div className="text-2xl text-center">Luggage Allowed</div>
                        <div className="flex justify-between">
                            <div className="ml-10 mr-10">
                                <div className="text-left text-lg">Cabin Baggage</div>
                                <div>7 Kgs (1 piece only) / Adult</div>
                            </div>
                            <div className="ml-10 mr-10">
                                <div className="text-right text-lg">Check-in Baggage</div>
                                <div>15 Kgs (1 piece only) / Adult</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* promo code */}
                <div className="bg-white p-10 w-[90%] rounded-[2rem] shadow-xl shadow-black flex flex-col items-centre gap-8">
                    <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">
                        <div className="text-2xl text-center">Promo Code</div>
                        <div className="flex justify-center">
                            <select name="promocode" className="border-2 border-black rounded-lg p-1">
                                <option checked>None</option>
                                <option>CASHBK5</option>
                                <option>CASHBK10</option>
                                <option>SAVE6.9</option>
                                <option>GETKARMA</option>
                                <option>NISPA</option>
                                <option>ASIRPA</option>
                                <option>PHANTHM</option>
                                <option>KAMUY</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* passengers info */}
                <div className="bg-white p-10 w-[90%] rounded-[2rem] shadow-xl shadow-black flex flex-col justify-center items-centre gap-8">
                    <div className="flex justify-center gap-6">
                        <div className="text-2xl">Number of Passengers</div>
                        <div className="flex justify-centre gap-4">
                            <button className="border-2 border-black w-7 rounded-full" onClick={() => props.passengers_num > 1 && props.setPassengersNum(props.passengers_num - 1)}>-</button>
                            <div>{props.passengers_num}</div>
                            <button className="border-2 border-black w-7 rounded-full" onClick={() => props.passengers_num < 7 && props.setPassengersNum(props.passengers_num + 1)}>+</button>
                        </div>
                    </div>

                    {Array.from({ length: props.passengers_num }, (_, i) => i + 1).map(num => (
                        <PassengerInfo
                            key={num}
                            num={num}
                            prev_passenger_info={prev_passenger_info}
                            passenger_info_list={passenger_info_list}
                            setPassengerInfoList={setPassengerInfoList}
                        />
                    ))}
                </div>

                {/* important info */}
                <div className="bg-white p-10 w-[90%] rounded-[2rem] shadow-xl shadow-black flex flex-col items-centre gap-8">
                    <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">
                        <div className="text-2xl text-center">Important Information</div>
                        <div className="p-5">
                            <div className="text-xl mb-3">Check travel guidelines and baggage information below:</div>
                            <ul>
                                <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges.</li>
                                <li>Wearing a mask/face cover is no longer mandatory. However, all travellers are advised to do so as a precautionary measure.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;