import React, { Component } from "react";

import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Footer,
  FooterTab,
  Text,
  Right,
  
} from "native-base";
import { Font } from 'expo';

export default class SearchBar extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
          <Header hasTabs='true' searchBar rounded 
           style={{ backgroundColor: "#FFF" }} 
          androidStatusBarColor="#fff">
          <Item>
           <Button onPress={() => this.props.navigation.goBack()} style={{ backgroundColor: "#FFF",elevation:0,
           shadowColor:'transparent' }} > 
           <Icon active name="arrow-back" style={{ color: "#5d61cc" }}/></Button>
            <Input placeholder="Search Twitter" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
       <Content padder/>
         <Footer style={{backgroundColor: 'white'}}>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button >
            <Text style={{fontSize: 12, color: "#5d61cc", fontWeight: 'bold'}}>All</Text>
          </Button>
          <Button>
            <Text style={{  fontWeight: 'bold'}}>Mentions</Text>
          </Button>
          
        </FooterTab>
        <Right>
            <Icon style={{ marginRight: 10, color: "#5d61cc" }} name='settings'></Icon>
        </Right>
      </Footer>
        
      </Container>
    );
  }
}