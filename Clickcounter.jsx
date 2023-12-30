import React from "react";
import { useState } from "react";

const Clickcounter= ()=>{
const   [counter, setCounter] =useState(0)

const Increase=()=>{
    setCounter(counter+1)
}
const Decrease=()=>{

    counter>1?setCounter(counter-2): setCounter(0);

    
}


return(
    <div>
<button onClick={Increase}>Increment</button>
<button onClick={Decrease}>Decrement</button>
<div>{counter}</div>
    </div>
   
)
}
export default Clickcounter;
