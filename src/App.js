// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/welcome.js';
import ScoreList from './components/scorelist.js';
import ScoreInfo from './components/scoreinfo.js';
export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} />
          <Scene key="ScoreList" component={ScoreList} title="ScoreList" />
          <Scene key="ScoreInfo" component={ScoreInfo} title="ScoreInfo" />
        </Scene>
      </Router>
    );
  }
}
