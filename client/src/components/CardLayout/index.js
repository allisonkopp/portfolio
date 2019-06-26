import React, { Component } from 'react';
import './CardLayout.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class CardLayout extends Component {
  state = { isMouseOver: false };

  toggleBtn = _ => this.setState({ isMouseOver: !this.state.isMouseOver });

  render() {
    const { title, toggleModal } = this.props;
    const { isMouseOver } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card onMouseEnter={this.toggleBtn} onMouseLeave={this.toggleBtn}>
          <CardContent>
            <Typography component="h2">{title}</Typography>
            {isMouseOver && <button onClick={toggleModal}>More Info</button>}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CardLayout;
