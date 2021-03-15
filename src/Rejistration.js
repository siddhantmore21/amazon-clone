import React, { useState }  from 'react'
import './Rejistration.css'
import { Link , useHistory } from 'react-router-dom'
import { auth } from './firebase';


function Rejistration() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
   


    const register = e => {
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log("registered successfully "+auth)
            
            if(auth){
               
                history.push('/login')
            }
        } )
        .catch(error => alert(error.message))


    }


    return (

        <div className="registration">
            <Link to ='/'>
                <img 
                className="registration__logo"
                src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg" 
                />
            </Link>
            <div className="registration__container">
                <p className="registration__title">Create Account</p>
                <form>


                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange =
                    {e => setEmail(e.target.value)}/>

                    <h5>New Password</h5>
                    <input type='password' value={password} onChange =
                    {e => setPassword(e.target.value)} placeholder="At least 6 characters"/>

                    <button 
                    type="submit"
                    className='registration__createAccountButton' 
                    onClick={register}>
                        Create your Amazon Account
                    </button>
                </form>
                <p className="register__notice">
                    By creating account, you agree to Amazon Clone's  Conditions of Use and Privacy Notice.
                </p>

           
                <p className="registration__haveAnAccount">Already have an account? <Link to='/login' className='signIn__link'> Sign-In</Link></p>
            </div>
        </div>
    )
}

export default Rejistration
