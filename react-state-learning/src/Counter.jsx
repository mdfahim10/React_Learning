import { useState } from "react";

function Counter(){

    let [count,setcount]=useState(0);

    let incount =()=>{
        setcount(count+1);
    }
    return (
        <div className="counter">
            <h2>Count : {count}</h2>
            <button onClick={incount}>Increase Count</button> 
        </div>
    )
}
export default Counter;