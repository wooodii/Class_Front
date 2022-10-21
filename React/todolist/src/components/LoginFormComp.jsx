const LoginFormComp = (props) => {
    // setLogin, setName으로 구조화할당해 props을 통해서 값을 아래로 내려줌 
    const { setLogin, setName} = props
    return ( 
        <form onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);}}

        >   {/** 메소드로 이와 같이 값을 바꾸어줌*/}
            <input type="text" onChange={(e) => {setName(e.target.value);}}/>
            <input type="submit" value="로그인" />
        </form>
    );
}

export default LoginFormComp;