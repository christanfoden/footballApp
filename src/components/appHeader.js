import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Header, Body } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
          <Body>
            <Image source={require('../img/tmgLogo.png')} style={{ width: 89, height: 32 }} />
          </Body>
        </Header>
    );
  }
}

module.export = AppHeader;
