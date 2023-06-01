import Hello from "./Hello";
import { useState } from "react";


function App() {

  let [word, setWord] = useState('');

    function handleChange(event) {
        setWord(event.target.value);
        console.log(event.target);

    }

  return (
    // <String value={word} onChange={handleChange}/>
    <Hello />
  )
}

export default App;
