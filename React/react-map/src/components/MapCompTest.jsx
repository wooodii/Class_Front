import { Component } from "react";

// 클래스형 컴포넌트
class MapCompTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["홍길동", "성춘향", "Jhon"],
      inputName : ""
    };

    this.deleteName = (index) => {
      // 이름 값을 가져와서
      // state.names의 filter를 통해서 이름을 제외하고 배열 만듦
      const newNames = this.state.names.filter((n,i) => i != index);
      this.setState({names:newNames})
    }

  }
  render() {
    const { names, inputName } = this.state;
    let num = 0;
    return (
      <div>
        <input type="text" onChange={(e)=>{ this.setState({ inputName : e.target.value})}} />
        <button onClick={ ()=>{
          // 버튼을 클릭했을때, 흥부 이름이 고정적으로 추가
          // this.state.names의 배열에 값이 추가 > 배열 메소드를 통해서 추가
          // 새로운 배열을 만들어서 추가 : concat()
          const newNames = names.concat(inputName);
          // setState를 통해서 state의 값이 바뀔때 화면이 바뀐다.
          this.setState({names:newNames})
        } }>이름 추가</button>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>이름</td>
            </tr>
            {names.map((name, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={ () => { this.deleteName(index) }}>
                  {name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MapCompTest;