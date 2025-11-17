import { useState } from "react";
import {Form, Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from "firebase";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPasswrord] = useState('');
    const [error, setError] = useState;

    const navigate = useNavigate();

    async function login() {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch(e) {
            setError(e.message);
        }
    }

  return (
    <>
    <h1>Login Page</h1>
    { error && <p>{error}</p>}
        <input
        placeholder='Your email address'
        value={email}
        onChange={e=> setEmail(e.target.value)}
    />
        <input
        placeholder='Your password'
        value={password}
        onChange={e=> setPasswrord(e.target.value)}
    />
    <button onClick={login}>Log In</button>
    <Link to='/create-account'>Don't have an account? Create one here.</Link>
    </>
  );
}