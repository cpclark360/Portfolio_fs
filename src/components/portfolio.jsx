import React, { Component } from "react";
import todo from "../img/todo.png";
import "../App.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <main id="main">
       <div className="container">
  
  <div className="projectcontainer">
    <div className="projectview">Preview</div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
</div>
<div className="container">
  <div className="projectcontainer">
<div className="projectview">Preview</div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
</div>

 <div className="container">
  <div className="projectcontainer">
<div className="projectview">Preview</div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
  </div>
      </main>
    );
  }
}

export default Portfolio;
