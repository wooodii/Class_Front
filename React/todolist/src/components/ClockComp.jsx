// 함수형 컴포넌트 - 시간 출력
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    const [time, setTime] = useState(new Date());

    // 1초마다 반복하기 위한 setInterval사용 
    // 생성될 때 한번만 실행
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    },[])
    // useMemo return 값이 바뀌지 않는다면, 이전의 return 값을 그대로 쓸 수 있음 
    // useMemo는 return 값을 사용해서 내야 한다.
    const hours = useMemo(() => {
        let stringHour = String(time.getHours())
        return stringHour.padStart(2,"0");}, [time]); 

    const Minutes = useMemo(() => {
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0");}, [time]); 

    const seconds = useMemo(() => {
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2,"0");}, [time]); 

    return ( 
        <div>
            <h1>{hours} : {Minutes} : {seconds}</h1>
        </div>
    );
}

export default ClockComp;