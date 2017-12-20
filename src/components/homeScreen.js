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
} from 'native-base';
const cover = require("../assets/profile.png");
const blogo = require("../assets/fcblogo.png");
const bcardImage = require("../assets/pes.png");
const mlogo = require("../assets/manclogo.png");
const mcardImage = require("../assets/shark.png");
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
/**<Header hasTabs='true'
           style={{ backgroundColor: "#FFF" }} 
          androidStatusBarColor="#fff">
         <Left>
            <Button style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent' }}>
            <Thumbnail source={cover} small />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home</Text>
          </Body>
          <Right />
        </Header> 

         <Left>
                <Thumbnail source={blogo} /> 
                <Body style={{flexDirection:'row',borderBottomWidth:0}} >
               <Text style={{fontSize: 17,  fontWeight: 'bold',marginLeft:6
                }}>FC Barcelona </Text>
                <Badge small primary><Text>✓</Text></Badge>
                <Text style={{color:'#c4aeae'}}> @FCBarce.. . 21h  </Text>
                <Icon style={{color:'#c4aeae'}} name='arrow-dropdown'></Icon>
               
               </Body>
               
               </Left>


               <CardItem style={{justifyContent: 'flex-end'}}>
            <Left style={{marginLeft:66}}>
              <Button transparent>
                <Icon style={{color:'#a88f8f'}} name="ios-text-outline" />
                <Text style={{color:'#a88f8f'}}>500</Text>
              </Button>
              <Button transparent>
                <Icon style={{color:'#a88f8f'}} name="md-git-compare" />
                <Text style={{color:'#a88f8f'}}>2K</Text>
              </Button>
              <Button transparent>
                <Icon style={{color:'#a88f8f'}} name="md-heart-outline" />
                <Text style={{color:'#a88f8f'}}>10K</Text>
              </Button>
              <Button transparent>
                <Icon style={{color:'#a88f8f'}} name="ios-mail-outline" />
                
              </Button>
            </Left>
          </CardItem>
        
      */

export default class HomeScreen extends Component {
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
    <ScrollView>
        <Card  style={{flex:0}}>
            <CardItem>
              <View style={{flexDirection:'row'}}>
                
                <Thumbnail source={blogo} /> 
                <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row',borderBottomWidth:0}} >
               <Text style={{fontSize: 17,  fontWeight: 'bold',marginLeft:7
                }}>FC Barcelona </Text>
                <Badge small primary><Text>✓</Text></Badge>
                <Text style={{color:'#c4aeae'}}> @FCBarce.. . 21h  </Text>
                <Icon style={{color:'#c4aeae'}} name='arrow-dropdown'></Icon>
               
               </View>
               <Text style={{marginLeft:7,marginTop:2}}>
            Name a more iconic duo, we'll wait.          #GoldenCollection
              </Text> 

              <Image style={{height: deviceHeight*0.35, width:deviceWidth*0.74, resizeMode:'contain',
               marginRight:0.5,marginLeft:7}}
                source={bcardImage}></Image>

<View style={{flexDirection:'row'}}>
                <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="ios-text-outline" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>500</Text>
              </Button>
             
              <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="md-git-compare" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>2K</Text>
              </Button>
             
              <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="md-heart-outline" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>10K</Text>
                </Button>
                <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f',paddingLeft:5}} name="ios-mail-outline" />
                </Button>
             
                  </View>
               </View>
            
           </View>
               
         </CardItem>
     </Card>    

     <Card  style={{flex:0}}>
            <CardItem>
              <View style={{flexDirection:'row'}}>
                
                <Thumbnail source={mlogo} /> 
                <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row',borderBottomWidth:0}} >
               <Text style={{fontSize: 17,  fontWeight: 'bold',marginLeft:7
                }}>Manchester City </Text>
                <Badge small primary><Text>✓</Text></Badge>
                <Text style={{color:'#c4aeae'}}> @ManCity . 22h  </Text>
                <Icon style={{color:'#c4aeae'}} name='arrow-dropdown'></Icon>
               
               </View>
               <Text style={{marginLeft:7,marginTop:2}}>
              WWWWWWWWWWWWWWW.                         #SharkTeam
              </Text> 

              <Image style={{height: deviceHeight*0.30, width:deviceWidth*0.74,
               marginRight:1.5,marginLeft:7,marginTop:2}}
                source={mcardImage}></Image>

<View style={{flexDirection:'row',marginTop:2}}>
                <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="ios-text-outline" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>250</Text>
              </Button>
             
              <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="md-git-compare" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>1K</Text>
              </Button>
             
              <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f'}} name="md-heart-outline" />
                <Text style={{color:'#a88f8f',paddingLeft:5}}>5K</Text>
                </Button>
                <Button small iconLeft transparent>
                <Icon style={{color:'#a88f8f',paddingLeft:5}} name="ios-mail-outline" />
                </Button>
             
                  </View>
               </View>
            
           </View>
               
         </CardItem>
     </Card> 
    
    
  </ScrollView>




      <Fab
      active={this.state.active}
      style={{ backgroundColor: "#5d61cc", marginBottom: 25 }}
      position="bottomRight"
      onPress={() => this.setState({ active:!this.state.active })}>
      <Icon name="logo-twitter" />
      </Fab>
     

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