// sfc를 통해서 (화살표) 함수형 컴포넌트 작성
import { useEffect, useState } from "react";

const StateEffectHookComp = () => {
    // 클래스형 컴포넌트의 state 처럼 사용할 수 있음
    const [count,setCount] = useState(0);
    const [time, setTime ] = useState(new Date());

    // 이펙트 훅 : componentWillMount 와 componentWillUpdate 내용 을 가짐 
    useEffect(() => {
        console.log("이펙트훅이 실행")

        // 언마운트 될 때, 
        return(() => {
            console.log("종료")
        })
    }); // 두번째 인수 값을 넣지 않을 때, 모든 state와 props 값이 대해 실행


    // 두번째 인수의 배열요소 : update 할 때 참고할 state 나 props
    // 두번째 인수 값이 없는 useEffect는 모든 state 에 대해서 update됨
    // 빈 배열[] 로 넣을 경우 시작할 때 한번만 실행
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    },[]);
    
    // useEffect는 두번째 인수를 배열로 받아올 수 있음 -> 모든 state가 아니라 원하는 state 만 작동할 수 있도록 넣을 수 있음     
    // 마운트 할 때만 실행하고 싶다면 빈 배열을 넣고, 특정 조건에 따라서 넣고 싶다면 useeffect 사용
    useEffect(() => {
        console.log('카운트가 증가하였습니다');
    }, [count])

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={
                // 클래스형에서는 구조화할당을 통해서 값을 따로 가져와서 사용했는데,
                // this.state에 있는 count는 영향을 미치지 않기 때문에 직접 접근한 count++는 먹지 않음
                () => { setCount(count +1) }
            }> +1</button>

            <h2>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</h2>
        </div>
     );
}

export default StateEffectHookComp;