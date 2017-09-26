import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[
        {
          title: "Neuroevolution",
          catergory: "Research"
        },
        {
          title: "Post Secondary Planner",
          catergory: "Web Development"
        },
        {
          title: "Project Climb",
          catergory: "Unity 3D Game"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        Jamie Pinheiro
        <Projects projects={this.state.projects}/>
      </div>
    );
  }

}

export default App;
