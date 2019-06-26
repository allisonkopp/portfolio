import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { schema } from './Projects.schema';
import { CardLayout, ModalLayout } from '..';

class Projects extends Component {
  state = { open: false };

  toggleModal = _ => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    return (
      <div id="projects">
        <h1>Projects</h1>
        <Grid container>
          {schema.map(project => (
            <>
              <CardLayout title={project.title} toggleModal={this.toggleModal} />
              <ModalLayout
                open={open}
                onClose={this.toggleModal}
                title={project.title}
                description={project.description}
              />
            </>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
