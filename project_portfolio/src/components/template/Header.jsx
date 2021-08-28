import React from 'react'

import './Header.css'

export default props =>
    <div class="header">
      { props.title }
      <div className="introduction">
        <ul>
          <span className="title">{ props.title }</span> <br/>
        </ul>
        <ul className="margin-subtitle">
          <span className="subtitle">{ props.subtitle }</span> <br/>        
        </ul>
        <ul>
          <span className="location"><i>Teresina - PI, Brazil</i></span>
          </ul>
      </div>
    </div>