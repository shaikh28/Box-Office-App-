import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  const [inputValue, setInputValue] = useState('')

  console.log(inputValue);
  const onInputChange = (ev)=>{
    setInputValue(ev.target.value)
  }
  return <div>
    <div>{inputValue}</div>
    <button onClick={()=>{setInputValue("Hunter")}}>updateRandom</button>
    <input type="text" value={inputValue}  onChange={onInputChange} />
  </div>;
};

export default Home;
