import React, { useState } from 'react';
import "../Styles/Fruits.css";


function Clock() {
        setInterval(updatetime, 1000)
        const now = new Date().toLocaleTimeString();

        const [time, settime] = useState(now);

        function updatetime() {
                const nowtime = new Date().toLocaleTimeString();
                settime(nowtime);

        }

        return (
                <div className='time'>
                        <h1>{time}</h1>
                </div>
        )
}

export default Clock;