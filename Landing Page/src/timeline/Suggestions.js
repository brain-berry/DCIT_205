import { Avatar } from "@mui/material";
import React from 'react'
import "./Suggestions.css"

function Suggestions() {
  return <div className='suggestions'>
    <div className='sugestions__title'>Suggestions for you</div>
    <div className='suggestion__usernames'>
    <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">henry_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">henry_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">henry_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>H</Avatar>
            </span>
            <div className="username__info">
              <span className="username">henry_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
    </div>
  </div>
}

export default Suggestions