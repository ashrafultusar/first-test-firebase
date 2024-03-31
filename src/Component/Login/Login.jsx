import React, { useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const [users , setUsers]=useState('')
    const provider = new GoogleAuthProvider();


    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUsers(user)
            })
            .catch(error => {
                console.log('error', error.message)
            })
}

    return (
        <div>
            <button onClick={handelGoogleSignIn}>Google login</button>
       
        </div>
    );
};

export default Login;