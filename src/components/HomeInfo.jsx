import { useState } from 'react'
import { arrow } from '../assets/icons'

const InfoBox = ({text, btnText, onMouseEnter}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <button
        className="neo-brutalism-white neo-btn"
        onMouseEnter={() => onMouseEnter && setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
        {visible && <div className="absolute -bottom-full p-2 bg-black overflow-hidden">
          Me neither
        </div>}
      </button>
    </div>
  )
}

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"><span className="line-through">Satan, The Lord of Hell</span> Alexander</span> 👋
      <br />
      And this is... Somthing!
    </h1>
  ),
  2: (
    <InfoBox
      text="wow, look, these are popups that appear when you fly over a certain place!"
      btnText='Cool!'
    />
  ),
  3: (
    <InfoBox
      text="But why are there buttons?.."
      btnText="IDK"
      onMouseEnter
    />
  ),
  4: (
    <InfoBox
      text="Oh, wow, another popup..."
      btnText='Button!'
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo