import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Contacts from '../screens/contacts/Layout.js';
import Chats from '../screens/chat';
import Group from '../screens/groups'


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
    <Group/>
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
