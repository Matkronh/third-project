import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
    imgSrc="https://github.com/Matkronh/third-project/blob/master/img/doggi.jpg?raw=true"
    name="John Dog"
    short="Dog Extraordinaire"
    />
    <App 
    imgSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTmNMpXOC16ueX8H2E0pb0XxP3TAlVRnFckZL6euwfg6H8nii1ywsDCd5Agl5FteHXj"
    name="John HotDog"
    short="HotDog Extraordinaire"
    />
  </React.StrictMode>,
)
