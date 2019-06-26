import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { schema } from './Projects.schema';
import { CardLayout, ModalLayout } from '..';

class Projects extends Component {
  state = { open: false, projects: schema, isProjectActive: false};

  toggleModal = id => _ => {
    const active = schema.map(project => (project.id === id ? { ...project, isProjectActive: true } : project));
    this.setState({ open: !this.state.open, projects: active, isProjectActive: !this.state.isProjectActive });
  };

  render() {
    const { open, projects } = this.state;
    return (
      <div id="projects">
        <h1>Projects</h1>
        <Grid container>
          {schema.map(project => (
              <CardLayout key={project.id} title={project.title} toggleModal={this.toggleModal(project.id)} />
          ))}
        </Grid>
       
      
        {projects.map(project => (
          project.isProjectActive && 
          <ModalLayout
              key={project.id}
              open={open}
              onClose={this.toggleModal(project.id)}
              title={project.title}
              description={project.description}
              icons={project.icons}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
