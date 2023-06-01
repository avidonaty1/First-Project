import { useEffect, useState } from "react";


function String() {

    const [text, setText] = useState("World");



    useEffect(() => {
        setTimeout(() => {
            setText("Avi");
            console.log('running');
    
        }, 2000)


    }, []);
    
 
    return (
        <h1>Hello {text}</h1>
    )
}


export default String;