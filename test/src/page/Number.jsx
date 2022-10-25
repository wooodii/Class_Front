import { Outlet } from "react-router-dom";

const Number = () => {
    {/** 리액트 라우터 돔에서 제공하는 useParams 사용 
        주소를 통해서 값을 전달 : params > 객체형태로 들어옴 */} 
    return ( 
        <div>
            <h1>NumberPage입니다</h1>
            {/** 객체형태로 들어오기에 .을 통해서 접근함 
             *   id 값 사용시 주의점, id에 모든 값이 "문자열"로 들어갈 수 있기에 주의
             *    NumberPage입니다도 전체로 렌더링 되지만 id 값만 바꾸어주면 
             *   화면을 바꾸는데 시간이 적게 걸림 */}
            <Outlet />
        </div>
    );
}

export default Number;