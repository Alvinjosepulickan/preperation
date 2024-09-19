import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../style.css'
import ProductItem from '../Components/productItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ReactJs Concepts</h1>
      <ProductItem/>
    </>
  )
}

export default App
