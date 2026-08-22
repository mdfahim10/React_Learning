import { useState, useEffect } from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

    let increaseCount = () => {
        setCount((currentCount) => currentCount + 1);
    };

    useEffect(function printSomething() {
        console.log("This is because of useEffect");
    },[]);

    return (
        <div>
            <h3>Count = {count}</h3>

            <button onClick={increaseCount}>
                +1
            </button>
        </div>
    );
}