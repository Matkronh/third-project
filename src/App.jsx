import './App.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

function App(props) {

  return (
    <div className="card">
        <Profile 
        imgSrc={props.imgSrc} 
        name={props.name} 
        short={props.short}
        >
        <div className='item'><AiFillHtml5 size={30}/></div>
        <div className='item'><DiReact size={30}/></div>
        <div className='item'><SiCss3 size={30}/></div>
        <div className='item'><IoLogoJavascript size={30}/></div>
      </Profile>
    </div>
  )
}

function Profile(props){
  return (
      <div>
        <img id="resizeMe" src={props.imgSrc}></img>
        <br />
        <text>Name: {props.name}</text>
        <br />
        <text>Short: {props.short}</text>
        <div id="icon-box">
          {props.children}
        </div>
      </div>
  )
}

export default App