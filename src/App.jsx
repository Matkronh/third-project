import './App.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

function App() {

  return (
    <div className="card">
        <Profile 
        imgSrc="https://github.com/Matkronh/third-project/blob/master/img/doggi.jpg?raw=true" 
        name="John Dog" 
        short="Dog Extraordinaire"
        >
        <div className='item'><AiFillHtml5 /></div>
        <div className='item'><DiReact /></div>
        <div className='item'><SiCss3 /></div>
        <div className='item'><IoLogoJavascript /></div>
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