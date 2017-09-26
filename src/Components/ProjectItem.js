import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
        <strong> {this.props.project.title} - {this.props.project.catergory} </strong>
      </li>
    );
  }

}

export default ProjectItem;
