import React from 'react';
import contactsList from '../../../utils/contactsList';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const FlatListItemSeparator = () => {

    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

class Contacts extends React.Component {

  render() {
    return (
    <View style={styles.container}>
    <FlatList
      data = {contactsList}
      style={styles.flatListStyle}
      ItemSeparatorComponent = {this.FlatListItemSeparator}
      renderItem={({item}) =>
      <View style={styles.itemContainer}>
        <View style={styles.contactInfo}>
          <View>
            <Text style={styles.contactName}>{item.username}</Text>
            <Text>no hay mensajes</Text>
          </View>
          <View >
            <Image source={{ uri: item.avatar }} style={styles.avatar}/>
          </View>
        </View>
        <FlatListItemSeparator/>
      </View>
    }
    />
    </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    marginTop: 10
    },
  flatListStyle: {
     width: '100%',
  },
  itemContainer: {
    flexDirection: 'column'
  },
  contactInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row'
  },
  contactName: {
    color: '#000',
    fontSize: 24
  },
  avatar: {
    width: 60,
    height: 40,
    alignItems: 'center'
  },
  separator: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%'
  }
});

export default Contacts;
