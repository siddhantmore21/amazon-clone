import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log("login successful "+auth)
            if(auth){
                history.push('/')
            }
        } )
        .catch(error => alert(error.message))


    }

    

    return (
        <div className="login">
            <Link to ='/'>
                <img 
                className="login__logo"
                src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg" 
                />
            </Link>
            <div className="login__container">
                <p className="login__title">Sign-In</p>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange =
                    {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange =
                    {e => setPassword(e.target.value)}/>

                    <button 
                    type="submit"
                    className='login__signInButton' 
                    onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p className="login__notice">
                    By signing-in, you agree to Amazon Clone's  Conditions of Use and Privacy Notice.
                </p>
            </div>

            <p className = "login__newToAmazon">New to Amazon?</p>

            <Link to='/register'>
                <button className="login__createAccountButton">Create Your Account</button>
            </Link>
        </div>
    )
}

export default Login
