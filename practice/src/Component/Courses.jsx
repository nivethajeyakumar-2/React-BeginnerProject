import React, { useState } from "react";
import './Course.css';
import { Password } from "@mui/icons-material";
function Course(Props){
    const [buy , setBuy]=useState('')
    const[count , SetCount]=useState(0)
    const Decrement=()=>{ if(count>0){
        SetCount(count-1)
    }
else{
    SetCount(count-1)
}}
 const [show , setShow]=useState(false)
 const handle=()=>{ setShow(!show)}


 //

  

   
    return(
        <>
        <div className="container">
        <div className="card">
            <h1>Card container</h1>
            <p>Then we define our. An application can have multiple. Our basic example only uses one. can be nested. The first has a path of / and renders the Layout component.</p>
       <button onClick={()=> setBuy('added to purchase list')}>Buy now </button>
       <h2>{buy}</h2>
     

        </div>
         <div className="card">
         <h1>Card container</h1>
         <p>Then we define our. An application can have multiple. Our basic example only uses one. can be nested. The first has a path of / and renders the Layout component.</p>
    <div><button onClick={()=>SetCount(count+1)}>add</button>
    <button onClick={Decrement}>sub</button>
    <button onClick={()=>SetCount(0)}>Reset</button>
     
    </div>
    <div><h3>{count}</h3></div>
    
     </div>
       <div className="card">
            <h1>Card container</h1>
            <p>Then we define our. An application can have multiple. Our basic example only uses one. can be nested. The first has a path of / and renders the Layout component.</p>
      <button onClick={handle}>show</button>
      <div>{show?<ul><li>hello</li>
      <li> hello</li>
      </ul>:""}</div>
        </div>
        </div>
        
        </>
       
    )
}
export default Course