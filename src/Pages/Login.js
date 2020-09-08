import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';


function Login() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const logIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            history.push('/');
        })
        .catch((err) => alert(err.message))
    }

    const signIn = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            history.push('/');
        })
        .catch((err) => alert(err.message))
    }

    return (
        <div className="login">
         <Link to="/">
            <img className="login_logo"  src='https://pngimg.com/uploads/amazon/amazon_PNG7.png'
          alt='' />
         </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email"/>
                    <h5>Password</h5>
                    <input onChange={e => setPassword(e.target.value)}  value={password} type="password"/>
                    <button onClick={logIn} type="submit" className="sign_in_btn">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice. 
                </p>
                <button onClick={signIn}  className="sign_up_btn">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
