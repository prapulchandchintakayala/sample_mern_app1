import { useState } from "react"

import { useNavigate } from "react-router-dom"

function Login(){
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    
    let navigate=useNavigate()

    let handleLogin=async(event)=>{
       event.preventDefault()
       if(email=="admin@gmail.com" && password=="admin"){
           //navigate to admin home
           localStorage.setItem("currentuser",JSON.stringify({"name":"Admin","role":"Admin"}))
           navigate("/adminhome")
       }else{
          //check with my db credentials
          //then decide hrhome or emphome
    let req=await fetch("http://localhost:3000/api/emp/login",
            {method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify({email,password})
            });
    let data=await req.json()
    console.log(data)
    if(data.user){
        if(data.user.role=="HR"){
             localStorage.setItem("currentuser",JSON.stringify(data.user));
             navigate("/hrhome")
        }else{
           localStorage.setItem("currentuser",JSON.stringify(data.user));
           navigate("/emphome")
        }
    }else{

    }



       }

    }

    return(<div>
        <h1>Login page</h1>
    <form onSubmit={handleLogin}>
     <input type="email"
     onChange={(e)=>setEmail(e.target.value)}
     value={email}
    placeholder="Enter Emailid"></input><br/>

     <input type="password"
     onChange={(e)=>setPassword(e.target.value)}
     value={password}
     placeholder="Enter password"></input><br/>
     <button type="submit">Login</button>
    </form>
    </div>)
}
export default Login