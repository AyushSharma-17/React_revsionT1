import { useEffect } from "react";

function Ncounter({ count }) {
    const handleConter = () => {
        console.log("you clicked");
    }

    useEffect(() => {
        handleConter();
    }, [])
    return (
        <div><h1>
            the value of count {count}
        </h1></div>
    )

}
export default Ncounter;