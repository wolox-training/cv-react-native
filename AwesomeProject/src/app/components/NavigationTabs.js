import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Contacts from '../screens/Contacts';
import Chats from '../screens/Chats';
import Groups from '../screens/Groups';


const ContactsScreen = () => (
  <View style={{ flex: 1}}>
    <Contacts/>
  </View>
);

const ChatsScreen = () => (
  <View style={{ flex: 1}}>
    <Chats/>
  </View>
);

const GroupsScreen = () => (
  <View style={{ flex: 1}}>
    <Groups />
  </View>
);

const RootTabs = TabNavigator({
  Contacts: {
    screen: ContactsScreen,
    navigationOptions: {
      tabBarLabel: 'Contactos'
    }
  },
  Chats: {
    screen: ChatsScreen,
    navigationOptions: {
      tabBarLabel: 'Chats'
    }
  },
  Groups: {
    screen: GroupsScreen,
    navigationOptions: {
      tabBarLabel: 'Grupos'
    }
  }
});

export default RootTabs;
