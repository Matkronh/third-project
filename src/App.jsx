import './App.module.css'

import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import Title from './components/Title'
import styles from './App.module.css'

function App(props){
  return (
      <div>

        <Title />

        <div className={subroot}>

        <Profile 
          imgSrc="https://github.com/Matkronh/third-project/blob/master/img/doggi.jpg?raw=true"
          name="John Dog"
          short="Your avrage doggy"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F04%2Fwhite-samoyed-field-flowers-997016774-2000.jpg"
          name="Jane CuteDog"
          short="WoW. Much Cute Dog"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="https://i.ytimg.com/vi/1-BfDBTFLSc/maxresdefault.jpg"
          name="Timothy AngryDog"
          short="Such an angry doggie"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="https://i2-prod.mirror.co.uk/incoming/article27598932.ece/ALTERNATES/n615/1_SWNS_SURPRISED_DOG_008.jpg"
          name="Jeffrey SurprisedDog"
          short="Wow! This dog is surprised!"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="https://helios-i.mashable.com/imagery/articles/05LBAd3pyjn21wM7qWpKvoO/hero-image.fill.size_1200x900.v1611613595.png"
          name="Snoopi HighDog"
          short="what?"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="https://www.alphapaws.com/wp-content/uploads/2019/07/how-to-calm-and-train-an-overly-excited-dog-img1.jpg"
          name="Joe ExcitedDog"
          short="High energy doggie"
        >
          <div className='item'><AiFillHtml5 size={30}/></div>
          <div className='item'><DiReact size={30}/></div>
          <div className='item'><SiCss3 size={30}/></div>
          <div className='item'><IoLogoJavascript size={30}/></div>
        </Profile>

        <Profile 
          imgSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTmNMpXOC16ueX8H2E0pb0XxP3TAlVRnFckZL6euwfg6H8nii1ywsDCd5Agl5FteHXj"
          name="John HotDog"
          short="Many Calories"
        >
          <div className={styles.item}><AiFillHtml5 size={30}/></div>
          <div className={styles.item}><DiReact size={30}/></div>
          <div className={styles.item}><SiCss3 size={30}/></div>
          <div className={styles.item}><IoLogoJavascript size={30}/></div>
        </Profile>

      </div>

    </div>

  )  
  }


function Profile(props){
  return (
      <div className={styles.card}>
        <img className={styles.resizeMe} src={props.imgSrc}></img>
        <br />
        <text>Name: {props.name}</text>
        <br />
        <text>Short: {props.short}</text>
        <div className={icon-box}>
          {props.children}
        </div>
      </div>
  )
}

export default App