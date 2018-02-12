import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class Welcome extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Hello!</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
                <Card>
                        <CardItem>
                            <Text>
                                Welcome to SitRight! :)
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Press Button to update posture score
                            </Text>
                        </CardItem>
                    </Card>
                <Button dark block onPress= {() =>{ Actions.ScoreList();}} style= {{marginTop: 40}}>
                      <Text> Fetch Posture </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Welcome;
