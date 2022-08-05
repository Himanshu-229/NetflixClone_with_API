import { useRef, useState } from "react"
import { Language ,ArrowDropDown } from "@material-ui/icons";
import "./Register.scss"

export default function Register() {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")

   const emailRef = useRef();
   const passwordRef = useRef();

   const handleFinish = () =>{
    setPassword(passwordRef.current.value)
   }
   const handleStart = () =>{
    setEmail(emailRef.current.value)
   }

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                
             <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
             <button className="engButton">
                <Language className="glob"/> 
             English
             <ArrowDropDown className="globBut"/>
             </button>
            
            <button className="loginButton">Sign In</button>
        </div>
         
         

        </div>
        <div className="container">
            <h1>Unlimited movies, TV </h1>
            <h1>shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>Ready watch? Enter your email to create or restart your membership</p>
           {!email ?(

            <div className="input">
                <input type="email" placeholder="email address" ref ={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
           ): (
            <form className="input">
                <input type="password" placeholder="password" ref ={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
        )}
            
           
        </div>

      
     
  
    </div>
  )
}
