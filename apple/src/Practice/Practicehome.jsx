import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Practicehome = () => {
    const router = useNavigate();
    const{state} = useContext(AuthContext)
  return (
    <div>
        <h1>Authentication</h1>
        <h1>User : {state?.user?.firstname}</h1>
        <button onClick={()=>router('/practicesignin')}>Go to sign in</button>
    </div>
  )
}

export default Practicehome