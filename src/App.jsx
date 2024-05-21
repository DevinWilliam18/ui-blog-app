import { useState } from 'react'
import ColorSchemesExample from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorSchemesExample/>
    </>
  )
}

export default App
