import React from 'react';
import {Timer} from "./components";
import './App.css'

const App = () => {

    const inputIn = document.querySelector('.input-in')
    const button = document.querySelector('button');

    const div1 = document.querySelector('.out')

    const btn = () => {
        div1.innerHTML = inputIn;
    }



    return (
        <div>
            <div className="app">
                <div className="container">
                    <form action="">
                    <input type="text" placeholder="Введіть назву події" className="input-in"/>
                        <h1 className="out"></h1>
                        <input type="date" id="date"/>
                    <button onClick={btn}>Ввести</button>
                    <Timer deadline="text" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
