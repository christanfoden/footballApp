import React, { Component } from 'react';
import { Text, View, Image, Alert, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import TimeAgo from 'react-native-timeago';
import FitImage from 'react-native-fit-image';
import { Actions } from 'react-native-router-flux';

import AppHeader from '../appHeader';
import { ContentSnippet, GetImage } from '../../helpers/helper';

import PlayerPage from './PlayerPage';
import DataService from '../../services/dataService';

let ds = new DataService();

class PlayerDetails extends Component {

  constructor() {
    super();
    // this.onPlayerPressed = this.onPlayerPressed.bind(this);
  }

  onPlayerPress = () => {
    ds.addWishListItem(this.props.playerData)
  }

  onPlayerPressed() {
    Actions.playerPage();
  }

  render() {
    // console.log(this.state);
    let players = this
    .props
    .data
    .map(function(playerData, index){

      return (
          <Card key={index}>
            <CardItem button onPress={(data) => Actions.playerPage()}>
              <Left>
                <Body>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}> {playerData.playerFirstName} {playerData.playerLastName} </Text>
                  <Text> {playerData.playerClubCurrent} </Text>
                  <Text style={{ color: 'grey'}} > {playerData.playerPosition} </Text>
                </Body>
              </Left>
              <Right>
                  <Image source={{uri: `${playerData.playerImgUrl}`}} style={{height: 50, width: 75, flex: 1, margin: 0, padding: 0 }}/>
              </Right>
            </CardItem>
            {/* <PlayerPage style={{hidden: 'true', display: 'none' }} img={playerData.playerImgUrl}/> */}
          </Card>
      );
    });

    return (
      <Container>
        <AppHeader />
        <Content>{players}</Content>
      </Container>
    );
  }
}

const styles = {
  textStyle: {
    width: 200,
    height: 20
  },
  htmlTitleStyle: {
    width: 275,
    height: 50,
    paddingTop: 5,
    color: 'blue'
  },
  titleStyle: {
    color: 'blue'
  },
  fitImage: {
    borderRadius: 50,
  },
  fitImageWithSize: {
    height: 100,
    width: 'auto'
  },
};

export default PlayerDetails;
