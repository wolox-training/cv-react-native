import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import PropTypes from 'prop-types';


const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#607D8B',
      }}
    />
  );
};

class Chats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Button title='Filtrar' style={styles.marginRight}/>
        </View>
        <FlatList
          data={this.props.chatsList}
          style={styles.flatListStyle}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
            <View style={styles.itemContainer}>
              <View style={styles.contactInfo}>
                <View>
                  <Text style={styles.contactName}>{item.body}</Text>
                </View>
              </View>
              <FlatListItemSeparator/>
            </View>
          }
        />
      </View>
    );}
}

Chats.propTypes = {
  chatsList: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  addButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '90%',
    margin: 10
  },
  marginRight: {
    margin: 10
  }
});

export default Chats;
