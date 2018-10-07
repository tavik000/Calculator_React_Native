import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import Number from './components/Number'

export default class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       x: 0,
     };
     this.update =this.update.bind(this)
   }
   update(){
     console.log(this.state.x);
     if(this.state.x ==0){
       this.setState({
         x:1
       })
     }else{
       this.setState({
         x:0
       })
     }
   }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.output} >

      <Number no="ans"/>
      <Number no="express"/>
      </View>

      <View style={styles.input} >

        <Text>Open up App.j s to start working on your app!</Text>

        <View style={styles.row}>
          <View style={styles.box}>
          <Number no={1} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={2} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={3} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"="} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"<"} x={this.update}/>
          </View>
        </View>


        <View style={styles.row}>
          <View style={styles.box}>
          <Number no={4} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={5} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={6} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"*"} x={this.update} / >
          </View>
          <View style={styles.box}>
          <Number no={"^"} x={this.update} / >
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
          <Number no={7} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={8} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={9} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={")"} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"/"} x={this.update}/>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.box}>
          <Number no={0} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"("} x={this.update}/>
          </View>

          <View style={styles.box}>
          <Number no={"+"} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"-"} x={this.update}/>
          </View>
          <View style={styles.box}>
          <Number no={"AC"} x={this.update}/>
          </View>
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
  output:{
    flex: 3,
    backgroundColor: 'pink',

  },
  input:{
    flex: 7,
    backgroundColor: 'skyblue',
  },
  box:{
    flex:1,
    margin:2,
    backgroundColor: 'powderblue'
  },
  row:{
    flex:1,
    flexDirection: 'row'
  },
  text:{
    fontSize:50,
  }
});
