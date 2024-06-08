const Sidebar = (props) => {
    const { flight_details } = props;
    return (
        <div className="w-[40%] h-fit flex justify-center">
            <div className="w-[95%] mt-5 flex flex-col items-center bg-white rounded-[2rem] shadow-xl shadow-black">

                {/* flight details box */}
                <div className="w-[90%] mt-10 p-6 h-fit border-2 border-black rounded-xl">

                    <div className="flex justify-between mb-12">
                        <div className="text-2xl">{flight_details.airline}</div>
                        <div>Flight {flight_details.flight_number}</div>
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <div className="text-4xl">{flight_details.departure_airport}</div>
                        <div>{flight_details.duration}</div>
                        <div className="text-4xl">{flight_details.arrival_airport}</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col text-left">
                            <div>Departure</div>
                            <div>{flight_details.departure_date.toLocaleString()}</div>
                        </div>
                        <div className="flex-col text-right">
                            <div>Arrival</div>
                            <div>{flight_details.arrival_date.toLocaleString()}</div>
                        </div>
                    </div>

                </div>

                {/* fare and passengers */}
                <div className="w-[90%] mt-7 p-5 flex justify-between">
                    <div className="text-left">
                        <div className="text-2xl mb-2">Fare Amount</div>
                        <div className="text-xl">₹{flight_details.price * props.passengers_num}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl mb-2">Passengers</div>
                        <div className="text-xl">{props.passengers_num} Adult</div>
                    </div>
                </div>

                <div className="w-[90%] mt-2 p-6 mb-8">
                    <button className='w-fit p-2 h-10 text-white text-lg bg-[#d354bd] text-semibold rounded-3xl shadow-gray-800 shadow-md hover:scale-105 hover:bg-opacity-20'>Book Now</button>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;