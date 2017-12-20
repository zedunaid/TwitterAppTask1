import React, { Component } from "react";
import {Image,Dimensions,Platform} from 'react-native';
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
  Tabs,
  Badge,
  Tab,
  Fab,
  TabHeading,
  Right,
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  StyleProvider,
  View
  } from "native-base";
import { Font } from 'expo';
import { TabNavigator,StackNavigator,DrawerNavigator } from "react-navigation";


import HomeScreen from './homeScreen';
import SearchBar from './searchBar';
import NotificationScreen from './notificationScreen';
import MessageScreen from './messageScreen';
import SearchScreen from './searchScreen'
import cover from '../assets/profile.png';
import SideBar from './sideBar';
const HomeNavigator = StackNavigator({
 HomeScreen: { screen: HomeScreen },
  
}, { headerMode:'none',
  navigationOptions:({ navigation}) => ({
    header: (<View style={{elevation:0}}>
            <Header hasTabs='true'
              style={{ backgroundColor: "#FFF" }} 
            androidStatusBarColor="#fff">
              <Left>
              <Button  onPress={() => navigation.navigate("DrawerOpen")} style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent' }}>
              <Thumbnail source={cover} small />
              </Button>
              </Left>
             <Body>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home</Text>
              </Body>
              <Right />
            </Header>
     
           </View>)
  })
});

const SearchNavigator = StackNavigator({
  SearchBar: { screen: SearchBar },
   
 }, { headerMode:'none',
   navigationOptions:({ navigation}) => ({
     header:  (<View style={{elevation:0}}>
             <Header searchBar style={{backgroundColor:'white'}}>
 <Left>
   
 <Button  onPress={() => navigation.navigate("DrawerOpen")} style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent' }}>
              <Thumbnail source={cover} small />
              </Button>
   </Left>
    <Body>
   
   <Item rounded style={{width: 200, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search Twitter" 
         onChangeText={ (text) =>{navigation.navigate("SearchScreen")}}/>
      </Item>
   
    </Body>
    
  <Right>
  <Icon name="md-person-add" style={{color: 'blue'}} />
          </Right>
        </Header>
      </View>)
     })
   });


 const NotificationNavigator = StackNavigator({
  NotificationScreen: { screen: NotificationScreen },
   
 }, { headerMode:'none',
   navigationOptions:({ navigation}) => ( {
     header:  (<View style={{elevation:0}}>
              <Header hasTabs='true'
               style={{ backgroundColor: "#FFF" }} 
             androidStatusBarColor="#fff">
               <Left>
               <Button  onPress={() => navigation.navigate("DrawerOpen")} 
               style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent' }}>
               <Thumbnail source={cover} small />
               </Button>
               </Left>
              <Body>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}>Notifications</Text>
               </Body>
               <Right />
             </Header>
      
            </View>)
   })
 });


 const MessageNavigator = StackNavigator({
  MessageScreen: { screen: MessageScreen },
   
 }, { headerMode:'none',
   navigationOptions:({ navigation}) => ( {
     header:  (<View style={{elevation:0}}>
             <Header hasTabs='true'
               style={{ backgroundColor: "#FFF",elevation:0 }} 
             androidStatusBarColor="#fff">
               <Left>
               <Button  onPress={() => navigation.navigate("DrawerOpen")}
               style={{ backgroundColor: "#FFF", elevation:0, shadowColor:'transparent' }}>
               <Thumbnail source={cover} small />
               </Button>
               </Left>
              <Body>
               <Text style={{fontSize: 20, fontWeight: 'bold'}}>Messages</Text>
               </Body>
               <Right />
             </Header>
      
            </View>)
   })
 });

 



const MainScreenNavigator =  StackNavigator({
  MyTab: { 
    screen:TabNavigator(
  {
   HomeScreen: { screen: HomeNavigator },
   SearchBar: { screen: SearchNavigator },
   NotificationScreen: { screen: NotificationNavigator },
   MessageScreen: { screen: MessageNavigator },
  },
  {
    tabBarPosition:"top",
    tabBarComponent: props => {
 
    return (
      <Footer style={{elevation:0,shadowColor:'transparent'}}>
          <FooterTab style={{elevation:0,shadowColor:'transparent'}}><Button
              vertical style={{  elevation:0, shadowColor:'transparent' }}
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("HomeScreen")}
            ><Icon name="home" transparent/></Button>  
           <Button
              vertical style={{  elevation:0, shadowColor:'transparent' }}
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("SearchBar")}
            ><Icon name="search" /></Button> 

             <Button
              vertical style={{ elevation:0, shadowColor:'transparent' }}
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NotificationScreen")} >
              <Icon ios='ios-notifications'  android='md-notifications' /></Button>
             <Button
              vertical style={{  elevation:0, shadowColor:'transparent' }}
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("MessageScreen")} >
              <Icon name="mail" /></Button></FooterTab>
       </Footer>

      );
    }
  }),
   }
},{
headerMode: 'screen' },);

 const DrawerContents = DrawerNavigator(
  {
    Home: { screen: MainScreenNavigator },
    HomeHeader:{ screen: HomeNavigator },
    SearchHeader:{screen:SearchNavigator},
    NotificationHeader:{screen:NotificationNavigator},
    MessageHeader:{screen:MessageNavigator},
    SearchScreen: {screen: SearchScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerContents;

/* Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
  Highlights: { screen: Lists }, */