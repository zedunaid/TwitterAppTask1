import React, { Component } from 'react';
import {Image,Dimensions,ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Text, View, Body,Left,Thumbnail,
Badge,
Icon,
Button,
Footer,
FooterTab,
Fab,
Right,
Header,
Item,
ListItem
} from 'native-base';
const cover = require("../assets/profile.png");



export default class SideBar extends Component {
	// eslint-disable-line
    constructor() {
        super();
       
        this.state = {
          active: true,
        };
      
      }
	render() {
    // eslint-disable-line
    const { navigate } = this.props.navigation;
		return (
            <Container>
       <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
          
          <Button style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent',marginLeft:13,
        marginTop:10 }}>
          <Thumbnail source={cover} />
          </Button>
          
             <View style={{flexDirection:'row'}}>
               
                  <Text style={{fontSize: 19, fontWeight: 'bold',marginLeft:14}}>Zunaid Sorathiya</Text>
             
               
                  <Icon style={{color:'#c4aeae',marginLeft:70,marginRight:4}} name='arrow-dropdown'></Icon>
                 
             </View>
             <Text style={{fontSize: 15, color:'#c4aeae',marginLeft:14}}>@imzunaidyo</Text>
             <View style={{flexDirection:'row',marginTop:7,borderBottomWidth:0.5,borderBottomColor:'#c4aeae',
             paddingBottom:10}}>
               
                  <Text style={{fontSize: 15, fontWeight: 'bold',marginLeft:14}}>
                 150 </Text>
                 <Text style={{fontSize: 15,color:'#c4aeae'}}>
                 Following   </Text>
                 <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                 500 </Text>
                 <Text style={{fontSize: 15,color:'#c4aeae'}}>
                 Followers </Text>
             
               
                  </View>
           
            
         

          <ListItem style={{borderBottomWidth:0}} noBorder icon>
            <Left>
              <Button style={{  backgroundColor: "#FFF", elevation:0 }}>
                <Icon style={{color:'#a88f8f'}} name="ios-person-outline" />
              </Button>
            </Left>
            <Body>
              <Text style={{borderBottomWidth:0}}>Profile</Text>
            </Body>
            
          </ListItem>

          <ListItem style={{borderBottomWidth:0}} noBorder icon>
            <Left>
              <Button style={{  backgroundColor: "#FFF", elevation:0 }}>
                <Icon style={{color:'#a88f8f'}} name="ios-list-box-outline" />
              </Button>
            </Left>
            <Body>
              <Text style={{borderBottomWidth:0}}>Lists</Text>
            </Body>
            
          </ListItem>

          <ListItem style={{borderBottomWidth:0}} noBorder icon>
            <Left>
              <Button style={{   backgroundColor: "#FFF", elevation:0 }}>
                <Icon style={{color:'#a88f8f'}} name="ios-flash-outline" />
              </Button>
            </Left>
            <Body>
              <Text style={{borderBottomWidth:0}}>Moments</Text>
            </Body>
            
          </ListItem>

          <ListItem style={{borderBottomWidth:0}} noBorder icon>
            <Left>
              <Button style={{  backgroundColor: "#FFF", elevation:0 }}>
                <Icon style={{color:'#a88f8f'}} name="md-copy" />
              </Button>
            </Left>
            <Body>
              <Text style={{borderBottomWidth:0}}>Highlights</Text>
            </Body>
            
          </ListItem>
      
      <ListItem noBorder>
      <Text>Settings and privacy</Text>
      </ListItem>
      <ListItem noBorder>
      <Text>Help Center</Text>
      </ListItem>
      
      
      
      <Content padder />

      <Footer style={{backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#c4aeae'}}>
     
       
      <Left>
      <Icon style={{ marginLeft: 10, color: "#5d61cc" }} name='moon'></Icon>
    </Left>
     <Right>
     <Icon style={{ marginRight: 10, color: "#5d61cc" }} name='qr-scanner'></Icon>
     </Right>
   </Footer>
    
    </View>
    </Container>
  );
}
}