import React, {useState} from 'react';
import {Timer} from "./Timer";
import "../App.css"
import {MyButton} from "./MyButton";
import {MyInput} from "./MyInput";

const SetAttribute = () => {
    const [value, setValue] = useState('')
    const [time, setTime] = useState('')
    const btn = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <form>
            <MyInput value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Введіть назву події"/>
                <MyInput value={time} onChange={e => setTime(e.target.value)} type="date"/>
            <MyButton onClick={btn}>Ввести</MyButton>
                <h1 className="header">{value}</h1>
            </form>
            <Timer deadline={time}></Timer>
        </div>
    );
};

export {SetAttribute};
