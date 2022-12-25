import React from 'react';

function Tareekh() {


        const newDate = new Date()
        let date = newDate.getDate();
        let year = newDate.getFullYear();
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let name = month[newDate.getMonth()];

        console.log(newDate);
        return (
                <div className='Tareekh'>
                        <h1> {date} , {name} , {year}</h1>

                </div>
        );
}

export default Tareekh;