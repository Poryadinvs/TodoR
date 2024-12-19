import React, {useState, useEffect} from "react"
import {DAYS, MONTHS, SEASONS} from '../utils/date'

export default function Header(){
    const [time, setTime] = useState("day");

    const date = new Date();
    let hours = date.getHours();
    let season = Math.floor((date.getMonth() % 12) / 3) + 1;

    function check_time(season){
        if(hours >= 0 && hours <= 5){
            setTime(`${season}-night`);
        }
        else if(hours >= 6 && hours <= 10){
            setTime(`${season}-morning`);
        }
        else if(hours >= 11 && hours <= 18){
            setTime(`${season}-afternoon`);
        }
        else{
            setTime(`${season}-evening`);
        }
    }

    useEffect(() => {
        check_time(SEASONS[season])
        }, [hours, season]);


    return(
        <div className={`header ${time}`}>
            <div className="h-up">
                <h1>{DAYS[date.getDay()]}</h1>
            </div>
            
            <div className="h-down">
                <span>
                    {MONTHS[date.getMonth()]}, {date.getDate()}
                </span>
            </div>
        </div>
    )
}