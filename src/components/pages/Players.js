// import dependencies
import React, { Component } from 'react';
import PlayerDetails from './PlayerDetails';
import { Container, StyleProvider } from 'native-base';

class Players extends Component {

  constructor() {
    super();
      this.state = {
        playerDetails: [],
      }
  }

  getData() {
    // return fetch('http://www.energylivenews.com/wp-json/wp/v2/posts?_embed')
    // return fetch('https://theenergyst.com/wp-json/wp/v2/posts?_embed')
    return fetch('https://tmgfootball-a704b.firebaseio.com/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ playerDetails: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state);
    return (
      <PlayerDetails data={this.state.playerDetails} />
    );
  }
}

export default Players;
