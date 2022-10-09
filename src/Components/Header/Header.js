import React from 'react'
import 'antd/dist/antd.min.css';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import telegramImg from '../assets/Image/telegram.png';
import profileIcon from '../assets/Image/man.png'

function HeaderFun(props) {
  console.log("props.pathName.length",props.pathName.length)
  return (
    <div className='header'>
        <div><h3 className='advisory'><Link to="/Advisory">{props.pathName.length>2 ? `${props.pathName[1]} > ${props.pathName[2]}`: `${props.pathName[1]}`}</Link></h3></div>
        <div className='headerImg'>
            <img src={telegramImg} alt="telegramImg" /> 
            <img src={profileIcon} alt="telegramImg" />
        </div>
    </div>
  )
}

export default HeaderFun