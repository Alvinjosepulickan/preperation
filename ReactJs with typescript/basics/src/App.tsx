import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './Components/Greet'
import Person from './Components/Person'
import GenericProp from './Components/GenericProp'
type PersonObj={
  name:{
      first: string,
      last: string
  },
  age: number
}
function App() {
  const [count, setCount] = useState(0)

  const person: PersonObj={
    name:{
      first: "Alvin",
      last: "Jose"
    },
    age: 26
  }
  return (
    <>
      <div>
        <Greet name='pj' messageCount={10}/>
        <Person name={person.name} age={person.age}/>
        <GenericProp item={[1,2,3,4]} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
