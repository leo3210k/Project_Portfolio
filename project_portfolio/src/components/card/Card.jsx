import React from 'react'

import './Card.css'

export default props =>
    <div class="card">
      <img  class="card__image" src="data:image/jpeg;base64,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" 
        alt="rottweiler" />
      <div className="description">
        <div className="description__title">{ props.title }</div> 
        <div className="description__subtitle">{ props.subtitle }</div>         
        <div className="description__language">{ props.language }</div>
      </div>
    </div>