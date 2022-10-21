import { useEffect } from "react";
import { useMemo, useState } from "react";
import "../components/css/clock.css"

const Clock = () => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    })

    const hours = useMemo(() => {
        let stringHour = String(time.getHours())
        return stringHour.padStart(2, "0");}, [time]);

    const Minutes = useMemo(() => {
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2, "0");}, [time]);

    const Seconds = useMemo(() => {
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2, "0");}, [time]);
    
    return ( 
        <div id="clockbox">
            <h1 id="clock">{hours} : {Minutes} : {Seconds}</h1> 
        </div>
    );
}

export default Clock;