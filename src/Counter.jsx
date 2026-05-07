import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>COUNTER :{count}</h1>
            <button onClick={() => setCount(count + 1)}>click to increament</button>
        </div>
    )
}
export default Counter;