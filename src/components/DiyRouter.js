import React, { Component } from "react"
import JavaScript from "./JavaScript"
import Haskell from "./Haskell"
import CoffeeScript from "./CoffeeScript"
import "./diyrouter.css"

class DiyRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  reDirect = () => {
    document.location.assign("http://localhost:3000/javascript")
  }

  render() {
    var path = document.location.pathname
    console.log(document.location)
    return (
      <div>
        <h1>DiyRouter</h1>
        <div id="nav">
          <ul>
            <li>
              <a href="http://localhost:3000/javascript"> JavaScript </a>
            </li>
            <li>
              <a href="http://localhost:3000/haskell"> Haskell </a>
            </li>
            <li>
              <a href="http://localhost:3000/coffeescript"> CoffeeScript </a>
            </li>
          </ul>
        </div>
        <hr />
        {path === "/javascript" ? <JavaScript /> : null}
        {path === "/haskell" ? <Haskell /> : null}
        {path === "/coffeescript" ? <CoffeeScript reDirect={this.reDirect} /> : null}
      </div>
    )
  }
}

export default DiyRouter
