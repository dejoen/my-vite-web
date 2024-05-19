import { useState } from 'react'
import NavBarComponent from './component/NavBarComponent.tsx'
function App() {
  const [count, setCount] = useState(0)
let name= "john"
  const [image,setImage] = useState(null)
   return (

    <>
  <NavBarComponent name={name}/>
  <div className="relative bg-blue-400 min-h-screen">
  <p> body</p>
  <div className="bg-amber-700  m-1.5 rounded sm:m-10 sm:bg-emerald-700 sm:h-96 h-fit" >

  </div>
  </div>
   </>
  )
}

export default App

