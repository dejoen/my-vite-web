import { useState } from 'react'
import NavBarComponent from './component/NavBarComponent.tsx'
function App() {
 /* const [count, setCount] = useState(0)
let name= "john"
  const [image,setImage] = useState(null)
  */
  const [text,setText] = useState("nothing yet!!!")
  const [users, updateUser] = useState([
    {
      id:1,
      name:"joe",
      isAdmin:false
    },
        {
      id:2,
      name:"jossy",
      isAdmin:false
        },
    {
      id:3,
      name:"dejoe",
      isAdmin:false
    }
    
    ])
    
    let onButtonClicked = (e,id) =>{
      updateUser(prevState=>{
        return prevState.map(user=>{
          if(user.id==id){
           return  {
              ...user,
              isAdmin:!user.isAdmin
            }
          }
           return user
        })
        /*prevState.map(user=>{
         if(user.id==id){
           /*return {
              ...user,
              isAdmin:true
            }
          }
         return
        })*/
        
      })
        
      
    }
  
   return (

    <>
  <NavBarComponent />
  <div className="relative  min-h-screen">
  <div className=" w-fit m-auto p-10 text-justify space-y-2 text-neutral-900" > 
  <p> this is a new project that i will like to present. i am trying to build a nice app with nice flows.</p>
   <p> this is a new project that i will like to present. i am trying to build a nice app with nice flows.</p>
    <p> this is a new project that i will like to present. i am trying to build a nice app with nice flows.</p>
  </div>
  <div className="bg-amber-700  m-1.5 rounded sm:m-10 sm:bg-emerald-700 sm:h-96 h-fit m-10 p-5" >
     hello
        <p> this is a new project that i will like to present. i am trying to build a nice app with nice flows.</p>
    <p> this is a new project that i will like to present. i am trying to build a nice app with nice flows.</p>
  </div>
  
    <div className="bg-amber-700  m-1.5 rounded sm:m-10 sm:bg-emerald-700 sm:h-96 h-fit m-10 p-5 w-auto" >
      <input type="text-area" className="outline-0 h-auto p-3" onChange={
         (e)=>{
          setText(text=>{
            return text=e.target.value
          })
         }
        }/>
      
      <p>{text}</p>
    </div>
    
    {
      users.map(user=>(
            <ul Key={user.id} className="bg-amber-700  m-1.5 rounded sm:m-10 sm:bg-emerald-700 sm:h-96 h-fit m-10 p-5 w-auto" onClick={(e)=>{
              onButtonClicked(e,user.id)
             // alert(e.target.Key)
            }}>
             <div >
              <p>{user.name} </p>
              <p>{user.isAdmin.toString()}</p>
              </div>
            
    </ul>
           
        ))
    }
    
  </div>
   </>
  )
}

export default App

