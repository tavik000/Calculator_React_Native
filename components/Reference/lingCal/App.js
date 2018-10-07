import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
 import Number from './components/Number'
 import Answer from './components/Answer'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.output}>
        <Text>Open up App.js to start working on your app!!</Text>
        <Number no="ans" />

        </View>
        <View style= {styles.input}>
          <View style={styles.row}>
          <Number no={1} />
          <Number no={2} />
          <Number no={3} />
          </View>
          <View style={styles.row}>
          <Number no={4} />
          <Number no={5} />
          <Number no={6} />
          </View>
          <View style={styles.row}>
          <Number no={7} />
          <Number no={8} />
          <Number no={9} />
          </View>
          <View style={styles.row}>
          <Number no={0} />
          <Number no={"+"} />
          <Number no={"-"} />
          </View>
          <View style={styles.row}>
          <Number no={"*"} />
          <Number no={"/"} />
          <Number no={"="} />
          </View>
          <View style={styles.row}>
          <Number no={"("} />
          <Number no={")"} />
          </View>
        </View>

        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',

  },
  box:{
    height: 60,
    width: 60,
    margin:2,
    backgroundColor: 'powderblue'
  },
  output:{
    flex: 3,
    backgroundColor: 'yellow',
  },
  input:{
    flex: 7,
    backgroundColor: 'skyblue',
  },
  row:{
    flexDirection: 'row'
  },
  text:{
    fontSize: 50
  }
});
