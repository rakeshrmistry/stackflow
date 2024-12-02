
import './LoginSignup.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react'



const LoginSignup = () => {

  const [action, setAction] = useState("Login")



  return (
    <>
     <div className='loginbox'>
     <div className="login-header"><h2> {action}</h2></div> 
    <div className="inputs">
   
    <div className="input">
    <img src={user_icon} alt="icon"  />
    <input type="text" placeholder='User name' />
    </div>


    {action === "Login" ? <></>  : 
        <div className="input">
        <img src={email_icon} alt="icon"  />
        <input type="email" placeholder='Your Email Id' />
        </div>
         }



    <div className="input">
    <img src={password_icon} alt="icon"  />
    <input type="text" placeholder='Password' />
    </div>

         {action === "Login" ?     <div className="forgot-password">
      Lost password ? <span>Click Here</span>
    </div> : <></>  }

    
    <div className="btn-group">
      <a className={action === "Login" ?  'btnColor' : ' btnColor gray' } onClick={()=>{setAction('Sign up')}}>Sign Up</a>
      <a  className={action === "Sign up" ?  'btnColor' : 'btnColor gray' } onClick={()=>{setAction('Login')}}>Login</a>
    </div>


    </div>
   </div>
    </>
  )
}

export default LoginSignup
