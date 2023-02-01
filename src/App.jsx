import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
        <Profile />
        <Icons />
        {/* <Icon1 
        size={100}/> */}
    </div>
  )
}

function Profile(){
  return (
      <div>
        <img id="resizeMe" src="https://github.com/Matkronh/third-project/blob/master/img/doggi.jpg?raw=true"></img>
        <br />
        <text>Name: John Dog</text>
        <br />
        <text>Short: Web Developer extraordinaire</text>
      </div>
  )
}

function Icons(){
  return (
    <div id="icon-box">
      <div className='item'><AiFillHtml5 /></div>
      <div className='item'><DiReact /></div>
      <div className='item'><SiCss3 /></div>
      <div className='item'><IoLogoJavascript /></div>
    </div>
  )
}

/* function Icon1({size}){
  return (
    <div id="icon-box">
      textContent=AiFillHtml5
      display: flex;
      padding-left: 7.5px;
      padding-right: 7.5px;
      font-size: 28px;
    </div>
  )
} */

export default App