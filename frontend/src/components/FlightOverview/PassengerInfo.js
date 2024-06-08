import { useState } from "react";

const PassengerInfo = (props) => {

    const [passenger_info, setPassengerInfo] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
    });

    const handleAddPrevPassengerInfo = () => {
        setPassengerInfo(props.prev_passenger_info);
    };

    const handleClear = () => {
        setPassengerInfo({
            name: "",
            gender: "",
            email: "",
            phone: "",
        })
    };

    return (
        <div className="flex flex-col items-centre justify-center gap-6 border-2 border-black rounded-lg pt-7 pb-7">

            <div className="flex justify-around">
                <div className="text-2xl">Passenger {props.num}</div>
                <div>
                    <buton className="border-2 border-black rounded-lg p-1 hover:cursor-pointer mr-3" onClick={handleAddPrevPassengerInfo}>Add Previous Passenger Info</buton>
                    <button className="border-2 border-black rounded-lg p-1 hover:cursor-pointer mr-3" onClick={handleClear} >Clear</button>
                </div>
            </div>

            <div className="flex flex-col gap-4 ml-8">
                <div>
                    <label className="p-7 text-lg">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="border-2 border-black rounded-lg p-1"
                        placeholder="Mark Twain"
                        value={passenger_info.name}
                        onChange={(e) => setPassengerInfo({ ...passenger_info, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="p-7 text-lg">Gender</label>
                    <select
                        name="gender"
                        className="border-2 border-black rounded-lg p-1"
                        value={passenger_info.gender}
                        onChange={(e) => setPassengerInfo({ ...passenger_info, gender: e.target.value })}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="p-7 text-lg">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="border-2 border-black rounded-lg p-1"
                        placeholder="Lh7oN@example.com"
                        value={passenger_info.email}
                        onChange={(e) => setPassengerInfo({ ...passenger_info, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="p-7 text-lg">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        className="border-2 border-black rounded-lg p-1"
                        placeholder="1234567890"
                        value={passenger_info.phone}
                        onChange={(e) => setPassengerInfo({ ...passenger_info, phone: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
}

export default PassengerInfo;