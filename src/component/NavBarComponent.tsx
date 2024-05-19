import {Disclosure} from '@headlessui/react'
import { HomeIcon } from '@heroicons/react/24/outline'
let NavBarComponent = (props) =>{
  
  return (
    <Disclosure  as="nav" className="relative bg-gray-800 static top-0 z-1">
    {
      <div className="mx-auto max-w-7xl
      px-2 sm:p-6 lg:px-8 bg-amber-400">
      <div className= "relative flex h-16 items-center  justify-between" >
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
      <Disclosure.Button className="absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="absolute inset-0.5"/>
      <span className="sr-only">Open Menu Button </span>
      
      </Disclosure.Button>
   
      </div>
      </div>
      hello
      
      </div>
     /*({open})=>{
       <>
       hello
       </>
     }*/
    }
    </Disclosure>
    
    )
}

export default NavBarComponent