// 함수형 컴포넌트 - 시간 출력
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    // 시간 출력을 위해 newDate사용 
    const [time, setTime] = useState(new Date());

    // useEffect를 이용해 값을 사용  -> 빈 배열에 넣으면 참고하는 값이 없어서 업데이트가 되지 않음 
    // 처음 시작할 때만 setInterval을 통해 업데이트 되도록 
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
        // 출력하고 싶은 내용(2자리값)에 맞춰서 return 값 출력
        // 원 값을 변형해서 사용하고 싶다면 useMemo, return 사용
        return stringHour.padStart(2,"0");}, [time]); 

    const Minutes = useMemo(() => {
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0");}, [time]); 

    const seconds = useMemo(() => {
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2,"0");}, [time]); 

    return ( 
        <div>
            {/** getHours()로 넣으면 한자리로만 출력 ,함수를 time에 맞춰서 업데이트 하기 위해 useMemo 사용 */}
            <h1>{hours} : {Minutes} : {seconds}</h1>
        </div>
    );
}

export default ClockComp;