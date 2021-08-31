import React from 'react'

import './App.css'
import Header from '../components/template/Header'
import Card from '../components/card/Card'

export default props =>
    <div className="app">
      <div className="container">
        <Header title="Leonardo Coêlho"
          subtitle="Frontend developer, 
          i build web applications,
          i just started writing"/>
        <div class="content">
          <Card title="Calculadora"
          subtitle="Calculadora App"
          language="React"
          image="testeee"/>
          <hr/>
          <Card title="Podcasts"
          subtitle="No auth needed podcasts web app"
          language="React"
          image="testeee"/>
          <hr/>
          <Card title="Magazine"
          subtitle="Online magazine starter kit"
          language="React"
          image="testeee"/>
        </div>
      </div>
    </div>