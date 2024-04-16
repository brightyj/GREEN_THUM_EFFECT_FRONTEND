import React,{useState} from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
const[state,setState] = useState("Login");

const [formData,setFormData]=useState({
  username:"",
  password:"",
  email:""
})

const changeHandler=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const login = async () => {
  console.log("Login Function Executed", formData);

  try {
      const response = await fetch('https://green-thumb-effect-frontend-7mxw.onrender.com/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace("/");
      } else {
          alert(responseData.errors);
      }
  } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while trying to login");
  }
}




const signup = async () => {
  console.log("Signup changes Executed", formData);
  try {
      const response = await fetch('http://localhost:4000/signup', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace("/");
      } else {
          alert(responseData.errors);
      }
  } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred while trying to sign up");
  }
}

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="SignUp"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        
        <button onClick={() => {
  if (state === "Login") {
    login();
  } else if (state === "SignUp") {
    signup();
  } else {
    // Handle the case when neither "Login" nor "SignUp" state is set
    console.error("Invalid state:", state);
  }
}}>Continue</button>



{state === "SignUp" ? (
  <p className="loginsignup-login">
    Already have an account? <span onClick={() => { setState("Login") }}>Login here</span>
  </p>
) : (
  <p className="loginsignup-login">
    Create an account? <span onClick={() => { setState("SignUp") }}>Click here</span>
  </p>
)}

         <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div> 
      </div>
    </div>
  )
}

export default LoginSignup
