const HelloFuncComp = (props) => {
    // props에서 받아와서 안의 변수들 전달
    const {name, adress, children} = props

    return (
        <h1> {name} 화살표 함수로 만든 component</h1>
    )
}

export default HelloFuncComp;