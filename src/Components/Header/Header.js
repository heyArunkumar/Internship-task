import React from 'react'
import 'antd/dist/antd.min.css';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import telegramImg from '../assets/Image/telegram.png'

function HeaderFun() {
  return (
    <div className='header'>
        <div><h3 className='advisory'><Link to="/Advisory">Advisory</Link></h3></div>
        <div className='headerImg'>
            <img src={telegramImg} alt="telegramImg" /> 
            <img src={telegramImg} alt="telegramImg" />
        </div>
    </div>
  )
}

export default HeaderFun