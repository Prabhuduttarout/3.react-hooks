import { useState } from 'react'
import "./index.css"

// use of class component
// import Input from './Components/State&EffectWithClass'

// use of functional Component
import Input from './Components/State&EffectWithFunction'

import Counter from './Components/Counter'
import Blog from './Components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          {/* <h1>Getting started React Hooks</h1>
          <Input/>
          <Counter/> */}
          <Blog/>
        </div>
    </>
  )
}

export default App
