import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  return (
    
    <div className='main'>
    <div className='nav'>
    <p>gemini</p>
    <img src={assets.user_icon} alt = ""></img>
    </div>
    <div className='main-container'>
        <div className='greet'>
            <p><span>hello,dev</span></p>
            <p>how can i help you today ?</p>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>1</p>
                <img src={assets.compass_icon} alt=''></img>
            </div>
            <div className='card'>
                <p>2</p>
                <img src={assets.bulb_icon} alt=''></img>
            </div>
            <div className='card'>
                <p>3</p>
                <img src={assets.message_icon} alt=''></img>
            </div>
            <div className='card'>
                <p>4</p>
                <img src={assets.code_icon} alt=''></img>
            </div>
        </div>
        
        <div className='main-bottom'>
            <div className='search-box'>
                <input type='text' placeholder='enter prompt here'></input>
                <div>
                    <img alt={assets.gallery_icon} src=''></img>
                    <img alt={assets.mic_icon} src=''></img>
                    <img alt={assets.send_icon} src=''></img>
                </div>
            </div>
            <p className='bottom-info'>gemini may displaty</p>
        </div>
    </div>
    </div>
  )
}

export default Main