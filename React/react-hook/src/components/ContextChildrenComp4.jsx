import { useContext } from "react";
import { NumContext } from "./ContextComp2";

const ContextChildrenComp4 = () => {
    const {num, setNum} = useContext(NumContext);
    return ( 
        <div>
            <h1>{num}</h1>
            <button onClick={() => {setNum(num*2)}}>*2</button>
        </div>
     );
}
 
export default ContextChildrenComp4;