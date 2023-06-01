import { useState } from "react";


// function String() {

//     let [word, setWord] = useState('foo');

//     function handleChange(event) {
//         setWord(event.target.value);
//     }

//     return (
//         <>
//         <p>Type Word Here:   </p>
//         <input value={word} onChange={handleChange} />

//         <p>Typed:  {word}</p>

//         </>
//     )
// }

// export default String;





function String(props) {

    console.log(props);

    return (
        <>
        <p>Type Word Here:  </p>
        <input value={props.value} onChange={props.onChange}></input>
        <p>Typed:     {props.value}</p>
        </>
    )
}


export default String;