import React from 'react';
import './Login.css';
import {auth, provider, db, storage} from '../../firebase';
function login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.PhotoURL,
                uid: result.user.uid
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser);
            db.collection('/users').doc(newUser.uid).set({
                name:newUser.name,
                photo:newUser.photo
            })
            var storageRef = storage.ref('/'+(newUser.uid));
            storageRef.child(newUser.name).put();
        })
        .catch((error) => {
            alert(error.me)
        })
    }
    return (
        <div className='loginPage'>
            <div className='card'>
                <div className='title'>
                    <h1>Adventor</h1>
                    <p>Explore the infinity</p>
                </div>
                <div className='login_signup'>
                    <button onClick={() => signIn()} className='button' data-hover='login'><div><i className="fab fa-google"></i>Sign Up</div ></button>
                </div>
            </div>

        </div>
    )
}

export default login
