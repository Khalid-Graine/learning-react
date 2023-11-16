import { useState } from "react";
import Child from "../components/Child";

const Hooks = () => {
    const [count, setCount] = useState(0)
    return ( <div className="border p-2">
       parent
       <Child count={count} setCount={setCount} />
    </div> );
}
 
export default Hooks;