import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';

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

class Groups extends React.Component {
  _keyExtractor = (item) => item.id;

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button title='Filtrar' style={styles.marginRight}/>
        <Button title='+' style={styles.addButton}/>
      </View>
      <FlatList
        data = {this.props.groupsList}
        style={styles.flatListStyle}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) =>
        <View style={styles.itemContainer}>
          <View style={styles.contactInfo}>
            <View>
              <Text style={styles.name} key={item.id}>{item.name}</Text>
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
  name: {
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

export default Groups;
