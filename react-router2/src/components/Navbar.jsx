import { NavLink } from "react-router-dom";

const Navbar = () => {
    // 누르면 green색으로 메뉴바 변경
    const activeStyle = {color : "green"};
    return ( 
        <div>
            {/** NavLink의 경우 isActive라는 값을 통해서 활성화가 되었을 때 디자인 추가 className도 동일한 형태로 사용 가능 
             *   사용할 때 화살표 함수 형태로 사용하며, {isActive} 형식으로 구조화 할당을 통해 가져옴
            */}
            <NavLink to='/' style={
                ({isActive}) => isActive ? activeStyle : undefined}> Home</NavLink>  {"  "}
            <NavLink to='/boardlist' style={
                ({isActive}) => isActive ? activeStyle : undefined}> boardlist</NavLink> {"  "} 
            <NavLink to='/writeform' style={
                ({isActive}) => isActive ? activeStyle : undefined}> writeform</NavLink> {"  "}
        </div>
    );
}

export default Navbar;