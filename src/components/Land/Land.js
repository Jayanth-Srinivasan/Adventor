import React from 'react';
import Sample from './assets/Sample.mp4';
import './Land.css';
import { useHistory } from "react-router-dom";

function Land() {
    let history = useHistory();
    const logindir = () => {
        history.push('/login');
    }
    return (
        <div className="show">
            <div className="head">
                <h2 className="logo">Logo</h2>
            </div>
            <video autoPlay loop muted>
                <source src={Sample} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="text">
                <h2>Adventure the paths</h2>
                <h3>Explore the Unseen</h3>
                <p>What the fuck to write here sajhdb jashdj jaksd hgasd hjgasj jasdgj ygyu afs jags jasd jyyd yghgd kjdfjolg kejhfi s ufbsdfh  sdgfddbkf sddgbfj shdf jsg dufsdb sdbfjhsd ysbd sudjhfbsd  hhdb hjsd hjshdgbj ssjhd bd fjhfvjdsb col holy fuck...shit fuked skjdashdb ahsgjhsba as hasbjh n fuk it</p>
                <button onClick={() => logindir()}>Get Started</button>
            </div>
        </div>
    )
}

export default Land
