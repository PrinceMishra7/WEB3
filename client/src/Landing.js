import React from 'react'
import {useNavigate} from 'react-router-dom'
const Landing = () => {
    const navigate = useNavigate()
  return (
    <div>
    <button onClick={()=>navigate("/login")}>Login</button>
    <button onClick={()=>navigate("/signup")}>Signup</button>
    </div>
    
  )
}

export default Landing