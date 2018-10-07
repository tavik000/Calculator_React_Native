// Exported from snack.expo.io
// Exported from snack.expo.io
// Exported from snack.expo.io
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, //Text,
    View, Image, Alert,
    TouchableHighlight, Button, Text } from 'react-native';


// let uri = 'http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png';
//var cal = 0;
let array = [];
let test = '';
let array2 = [];
let test2 = '';
let equal = '';

const  conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
//import { Bat, Hat, Cat } from './icons'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {uri:'http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png',
            output: [],
            number: [],
            temp1: '',
            temp2: '',
            result: '',
        }
        //this._handleButtonPress= this._handleButtonPress.bind(this)
    }
    _handleButtonPress0 = () => {
        this.setState({output: this.state.output+0,
            number: this.state.number+0,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress1 = () => {
        this.setState({output: this.state.output+1,
            number: this.state.number+1,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress2 = () => {
        this.setState({output: this.state.output+2,
            number: this.state.number+2,

        })
        console.log(this.state.number);
    };
    _handleButtonPress3 = () => {
        this.setState({output: this.state.output+3,
            number: this.state.number+3,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress4 = () => {
        this.setState({output: this.state.output+4,
            number: this.state.number+4,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress5 = () => {
        this.setState({output: this.state.output+5,
            number: this.state.number+5,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress6 = () => {
        this.setState({output: this.state.output+6,
            number: this.state.number+6,

        })
        //console.log(this.state.number);
    };
    _handleButtonPress7 = () => {
        // input = 7;
        // array=array.concat(input);
        this.setState({output: this.state.output+7,
            number: this.state.number+7,

        })
        //console.log(this.state.number);

    };
    _handleButtonPress8 = () => {
        this.setState({output: this.state.output+8,
            number: this.state.number+8,

        })
        //console.log(this.state.number);

    };
    _handleButtonPress9 = () => {
        this.setState({output: this.state.output+9,
            number: this.state.number+9,

        })
        //console.log(this.state.number);
    };
    _handleButtonPressplus = () => {
        this.setState({temp1: this.state.number,
            result: Number(this.state.temp1)+Number(this.state.number),
            number: '',
        });
        console.log('this '+this.state.result);
        //setTimeout(function(){this.setState({temp1: this.state.output,});}, 1000);
        // array = this.state.temp1;
        // array2= this.state.number;
        // test = Number(array);
        // test2= Number(array2);
        // equal = test+test2;
        // console.log("test: "+ test +'test2: '+ test2 +"equal: "+equal);

        setTimeout(() => {
            this._handleButtonPressequal()
        }, 50);
    };
    _handleButtonPressless = () => {
        this.setState({temp1: this.state.number,
            result: Number(this.state.temp1)-Number(this.state.number),
            number: '',
        });

        // array = this.state.temp1;
        // array2= this.state.number;
        // test = Number(array);
        // test2= Number(array2);
        // equal = test-test2;
        // console.log("test: "+ test +'test2: '+ test2 +"equal: "+equal);

        setTimeout(() => {
            this._handleButtonPressequal()
        }, 50);
    };
    _handleButtonPressmulti = () => {
        this.setState({temp1: this.state.number,
            result: Number(this.state.temp1)*Number(this.state.number),
            number: '',
        });

        // array = this.state.temp1;
        // array2= this.state.number;
        // test = Number(array);
        // test2= Number(array2);
        // equal = test*test2;
        // console.log("test: "+ test +'test2: '+ test2 +"equal: "+equal);

        setTimeout(() => {
            this._handleButtonPressequal()
        }, 50);
    };
    _handleButtonPressdiv = () => {
        this.setState({temp1: this.state.number,
            result: Number(this.state.temp1)/Number(this.state.number),
            number: '',
        });

        // array = this.state.temp1;
        // array2= this.state.number;
        // test = Number(array);
        // test2= Number(array2);
        // equal = test/test2;
        // console.log("test: "+ test +'test2: '+ test2 +"equal: "+equal);

        setTimeout(() => {
            this._handleButtonPressequal()
        }, 50);
    };
    _handleButtonPressequal = () => {
        setTimeout(() => {
            this.setState({temp1: this.state.output,
                //output: this.state.result,
                //result: '',
            })
        }, 50);

        //this.setState({output: this.state.result,
        //})
        this._display();
    };
    _display = () => {

        this.setState({output: this.state.result,
            temp1: '', number:'',result:'',
        })


        //this.setState({output: this.state.result,
        //})

    };
    _handleButtonPressclr = () => {
        this.setState({output: '',temp1: '', number:'',result:'',
        })
        //console.log("CAL "+cal);
    };


    render() {
        let out = this.state.output
        return (
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxHead]}>
                    <Text>{out}</Text>
                </View>
                <View style={[styles.boxContainer, styles.boxOne]}>
                    <Button
                        title="  7  "
                        onPress={this._handleButtonPress7}
                    />
                    <Button
                        title="  8  "
                        onPress={this._handleButtonPress8}
                    />
                    <Button
                        title="  9  "
                        onPress={this._handleButtonPress9}
                    />
                    <Button
                        title="  +  "
                        onPress={this._handleButtonPressplus}
                    />
                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                    <Button
                        title="  4  "
                        onPress={this._handleButtonPress4}
                    />
                    <Button
                        title="  5  "
                        onPress={this._handleButtonPress5}
                    />
                    <Button
                        title="  6  "
                        onPress={this._handleButtonPress6}
                    />
                    <Button
                        title="  -  "
                        onPress={this._handleButtonPressless}
                    />
                </View>
                <View style={[styles.boxContainer, styles.boxThree]}>
                    <Button
                        title="  1  "
                        onPress={this._handleButtonPress1}
                    />
                    <Button
                        title="  2  "
                        onPress={this._handleButtonPress2}
                    />
                    <Button
                        title="  3  "
                        onPress={this._handleButtonPress3}
                    />
                    <Button
                        title="  *  "
                        onPress={this._handleButtonPressmulti}
                    />
                </View>
                <View style={[styles.boxContainer, styles.boxOne]}>
                    <Button
                        title="  0  "
                        onPress={this._handleButtonPress0}
                    />
                    <Button
                        title="clr"
                        onPress={this._handleButtonPressclr}
                    />
                    <Button
                        title="  =  "
                        onPress={this._handleButtonPressequal}
                    />
                    <Button
                        title="  /  "
                        onPress={this._handleButtonPressdiv}
                    />
                </View>
            </View>
        )}
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // 1: 1
        flexDirection: 'column',
    },
    boxContainer: {
        flex: 1, // 1:3
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boxOne: {
        flex: 3, // 3:6
        backgroundColor: '#FFEEE4',
        //justifyContent: 'space-around',
        //alignItems: 'flex-start'
    },
    boxTwo: {
        flex: 3, // 1:6
        backgroundColor: '#CCFFCC'
    },
    boxThree: {
        flex: 3, // 2:6
        //: 'row',
        //justifyContent: 'space-between', // main axis
        //alignItems: 'flex-end', // cross axis
        backgroundColor: '#CCFFFF',
    },
    boxHead: {
        flex: 2, // 1:6
        backgroundColor: '#CCFFCC'
    },
});

AppRegistry.registerComponent('TTT', () => Main);



