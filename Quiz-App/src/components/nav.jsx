import React from 'react'
import './nav.css'

function Nav(props) {

  return (
      <div className="heading">
            <h1 style={{color: props.theme ? 'black' : 'white'}}>ReactQuizMaster</h1>
            <div>
              <button className="theme" style={{
                    color: props.theme ? 'black' : 'white',
                    backgroundColor: props.theme ? 'white' : '#242424'
                  }} onClick={props.onThemeChange}>
                {props.theme ? 'Light' : 'Dark'} Theme
              </button>
            </div>
          </div>

  )
}

export default Nav