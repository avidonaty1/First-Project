import { useState } from "react";


function FunctionalCounter() {


    let [number, setNumber] = useState(0);

    function handleClick() {
        setNumber(number + 1);
    }

    return (
        <>
        <button onClick={handleClick}>Click Me</button>
        <h1>Count: {number}</h1>
        </>
    )
}


export default FunctionalCounter;