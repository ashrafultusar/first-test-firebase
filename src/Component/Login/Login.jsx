import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const [users , setUsers]=useState(null)

    const auth = getAuth(app);
    
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

    
    const handelSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUsers(null)
            })
            .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div>
            {
                users?
            <button onClick={handelSignOut}>Sign Out</button>:
            <button onClick={handelGoogleSignIn}>Google login</button>
}



            {
                users&&<div>
                <h2>User: {users.displayName }</h2>
                    <h3>Email: {users.email }</h3>
                    <h3><img src={users.photoURL } alt="" /></h3>
                
                </div>
            }
        </div>
    );
};

export default Login;