import { useState } from "react";
function Toggle() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <h2>Toggle name </h2>
            {
                display ? <h1>Ayush</h1> : null
            }
            <button onClick={() => setDisplay(!display)}>Clik to hide and show name</button>
        </div>
    )
}
export default Toggle;