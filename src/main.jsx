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
      short="Your avrage doggy"
      />
      <App 
      imgSrc="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F04%2Fwhite-samoyed-field-flowers-997016774-2000.jpg"
      name="Jane CuteDog"
      short="WoW. Much Cute Dog"
      />
      <App 
      imgSrc="https://i.ytimg.com/vi/1-BfDBTFLSc/maxresdefault.jpg"
      name="Timothy AngryDog"
      short="Such an angry doggie"
      />
      <App 
      imgSrc="https://i2-prod.mirror.co.uk/incoming/article27598932.ece/ALTERNATES/n615/1_SWNS_SURPRISED_DOG_008.jpg"
      name="Jeffrey SurprisedDog"
      short="Wow! This dog is surprised!"
      />
      <App 
      imgSrc="https://helios-i.mashable.com/imagery/articles/05LBAd3pyjn21wM7qWpKvoO/hero-image.fill.size_1200x900.v1611613595.png"
      name="Snoopi HighDog"
      short="what?"
      />
      <App 
      imgSrc="https://www.alphapaws.com/wp-content/uploads/2019/07/how-to-calm-and-train-an-overly-excited-dog-img1.jpg"
      name="Joe ExcitedDog"
      short="High energy doggie"
      />
      <App 
      imgSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTmNMpXOC16ueX8H2E0pb0XxP3TAlVRnFckZL6euwfg6H8nii1ywsDCd5Agl5FteHXj"
      name="John HotDog"
      short="Many Calories"
      />
    </div>
  </React.StrictMode>,
)


