import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
class ScoreInfo extends Component{
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress= {()=>Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Posture Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>{this.props.activePosture.full_name}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activePosture.description}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activePosture.id}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activePosture.owner.login}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.activePosture.url}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    activePosture : state.activePosture
  };}
export default connect(mapStateToProps)(ScoreInfo);
