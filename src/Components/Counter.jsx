// Counter Function

import { useState } from "react"

const Counter = ()=> {
    const[counter,setCounter] = useState(0)
    return (<div className="section">
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <div>
            <button onClick={(e)=>setCounter(counter+1)}>Increase</button>
            <button onClick={(e)=>setCounter(counter-1)}>Decrease</button>
        </div>
    </div>)
}

export default Counter;