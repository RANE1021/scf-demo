import React from 'react'

import scott from "../../images/scott.png"

export const Vacation = ({specificAirport}) => {
    if (specificAirport) {
         return (
            <div className="header-alt">
                <div className="vacation-container">
                    <div className="vacation-found">Vacation, found.</div>
                    <div className="budget">Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.</div>
                </div>
                <div className="scott-container">
                    <img className="scott-image"src={scott} alt="scott" />
                </div>
            </div>
        )
    } else {
        return (
        <div className="header">
            <div className="vacation-container">
                <div className="vacation-found">Vacation, found.</div>
                <div className="budget">Don’t let a tight budget scare you away from traveling. We’ve spotted some scary good deals.</div>
            </div>
            <div className="scott-container">
                <img className="scott-image"src={scott} alt="scott" />
            </div>
        </div>
        )
    }
};
