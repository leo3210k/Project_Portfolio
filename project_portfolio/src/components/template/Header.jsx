import React from 'react'

import './Header.css'

export default props =>
    <div class="header">
      { props.title }
      <div className="introduction">
        <div className="title">{ props.title }</div> 
        <div className="subtitle">{ props.subtitle }</div>         
        <div className="location"><i>Teresina - PI, Brazil</i></div>
      </div>
    </div>