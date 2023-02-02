import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Title from './components/Title'
import './index.css'
import './main.css'

/* import styles from './components/Title' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <div id="subroot">
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
      <App 
      imgSrc="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F04%2Fwhite-samoyed-field-flowers-997016774-2000.jpg"
      name="Jane CuteDog"
      short="CuteDog Extraordinaire"
      />
    </div>
  </React.StrictMode>,
)
