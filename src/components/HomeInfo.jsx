import { Link } from "react-router-dom"
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"><span className="line-through">Satan, The Lord of Hell</span> Alexander</span> 👋
      <br />
      A Software Engineer from Russia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on some cool projects, I promise"
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text="Oh, mein lieber Freund, ich bin so froh, dass du hier bist. Deshalb habe ich dich das übersetzen lassen"
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="YEAS, the best dev for you is me! Don't like somthing in my text? Just don't give me the copywriter job"
      link='/contact'
      btnText='Contact me'
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo