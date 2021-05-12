import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';
import './Login.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const { email } = loggedInUser;

    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/isAdmin', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                const newLoggedInUser = { ...loggedInUser }
                newLoggedInUser.isAdmin = data;
                setLoggedInUser(newLoggedInUser)
            })
    }, [email])

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            setIsSignedIn(true)
            const signedInUser = { ...loggedInUser }
            signedInUser.name = displayName;
            signedInUser.email = email;
            signedInUser.photoURL = photoURL;
            signedInUser.isSignedIn = true
            setLoggedInUser(signedInUser)
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div style={{ height: '500px' }} className="row justify-content-center mx-0 align-items-center" >
            <div className="col-md-4 align-items-center d-flex flex-column">
                <h3 >Welcome,</h3>
                <p className="text-secondary" > Sign in to continue </p>
                <div onClick={handleGoogleSignIn} className="google-btn mt-5">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
            </div>
        </div>
    );
};

export default Login;