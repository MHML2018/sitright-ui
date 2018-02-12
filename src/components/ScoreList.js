import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getScores, getScoreThunk, pageSelected} from '../actions/index';
class ScoreList extends Component{
  componentWillMount(){
    this.props.getPostureThunk();
  }
  render(){
    if(this.props.scores.length === 0){
      return(
        <Container>
          <Header>
            <Left>
              <Button transparent onPress= {()=>Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Positions</Title>
            </Body>
            <Right />
          </Header>
          <Content >
            <Text>Loading your position scores List, one moment please...</Text>
            <Spinner />
          </Content>
        </Container>
      );
    }
    else if(this.props.scores.length !== 0){
      return(
        <Container>
          <Header>
            <Left>
              <Button transparent onPress= {()=>Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Your Positions</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List dataArray={this.props.scores}
              renderRow={(item) =>
              <ListItem onPress={() => { Actions.ScoreInfo();
                this.props.pageSelected(item)}}>
                <Text>{item.full_name}</Text>
              </ListItem>}>
            </List>
          </Content>
        </Container>
      );
    }
  }
}
function mapStateToProps(state){
  return{
    scores : state.scores
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getScores: getScores,
    getScoreThunk: getScoreThunk,
    pageSelected: pageSelected
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ScoreList);
