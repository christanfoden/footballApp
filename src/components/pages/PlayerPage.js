import React, { Component } from 'react';
import { Text, View, Linking, Image } from 'react-native';
import firebase from 'firebase';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  // Button,
  Icon,
  Left,
  Body,
  Right,
  Deckswiper
} from 'native-base';
import YouTube from 'react-native-youtube';
import AppHeader from '../appHeader';

import { Spinner, CardSection, Button } from '../common';
import NotificationService from '../../services/notification';


export default class PlayerPage extends Component {

  constructor() {
    super();
    this.state = {PlayerData: ''}
  }

  render() {
    console.log(this);

    return (
        <Container>
          <AppHeader />
          <Content>
            <Image source={{uri: `https://talksport.com/sites/default/files/styles/just_scale/public/field/image/201709/kane_2.jpg?itok=sL6IzEUy`}} style={{height: 200, width: null, flex: 1}}/>
            {/* <Image source={{uri: `${this.props.img}`}} style={{height: 200, width: null, flex: 1}}/> */}
            {/* <Text>Player Page</Text> */}
            {/* <View> */}
              <Card>
                {/* <CardItem> */}

                {/* </CardItem> */}
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: `https://pbs.twimg.com/profile_images/935075006484221952/eXb9zUIl_400x400.jpg`}} />
                    <Body>
                      <Text title >Harry Kane</Text>
                      <Text note >Tottenham Hotspurs</Text>
                      <Text note >Striker</Text>
                      <Text note >Age: 22</Text>
                      <Text note >Height: 670cms</Text>
                      <Text note >Weight 75Kgs</Text>
                    </Body>
                  </Left>

                </CardItem>
              </Card>
              <Card>
                <YouTube
                  videoId="GgpL8iLHCNQ"   // The YouTube video ID
                  play={true}             // control playback of video with true/false
                  fullscreen={true}       // control whether the video should play in fullscreen or inline
                  loop={true}             // control whether the video should loop when ended
                  apiKey="AIzaSyDa74OaPhgtQ1oayWSxf4pSz7TfX_doLOU"
                  onReady={e => this.setState({ isReady: true })}
                  onChangeState={e => this.setState({ status: e.state })}
                  onChangeQuality={e => this.setState({ quality: e.quality })}
                  onError={e => this.setState({ error: e.error })}
                  style={{ alignSelf: 'stretch', height: 300 }}
                />
              </Card>
            {/* </View> */}
          </Content>
        </Container>

    );
  }
}

module.export = PlayerPage;
