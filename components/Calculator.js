import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
let math = require('mathjs');


export default class Calculator extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            //keypad digit
            row: [
                ['AC', '(', ')'],
                [7, 8, 9],
                [4, 5, 6],
                [1, 2, 3],
                [".", 0, "⌫"]
            ],
            //operators
            col: ['^','÷', 'x', '-', '+', '='],
            //expression string
            expression: '',
            result: '',
        };
    }

    // For the input display
    _onPressButton = (value) => {
        let {expression, result} = this.state;
        switch (value) {
            case 'AC':
                expression = '';
                result = '';
                this.setState({
                    expression: expression,
                    result: result,
                });
                break;
            case '⌫':
                expression = expression.substring(0, expression.length - 1);
                this.setState({
                    expression: expression,
                });
                break;
            case '=':
                expression = expression.replace("x", "*");
                expression = expression.replace("÷", "/");

                try {
                    result = math.eval(expression);
                } catch (e) {
                    result = 'Error';
                }
                this.setState({result: result});
                break;
            default:
                expression = expression.concat(value.toString());
                this.setState({
                    expression: expression,
                });
        }

    };

    render() {
        let {expression, result} = this.state;
        return (
            <View style={styles.container}>
                {/*<View style={[styles.boxContainer, styles.boxZero]}>*/}
                <View style={styles.boxContainer}>
                    <View style={styles.boxZero}>
                        <Text style={styles.input}>{expression}</Text>
                    </View>
                    <View style={styles.boxOne}>
                        <Text style={styles.input}>{result}</Text>
                    </View>
                    <View style={styles.boxTwo}>
                        <View style={styles.keypad}>
                            <View style={styles.keyRow}>
                                {
                                    this.state.row[0].map((d, i) => (
                                        <TouchableHighlight
                                            key={d}
                                            onPress={() => this._onPressButton(d)} underlayColor="white">
                                            <View
                                                style={styles.keyEachRow}>
                                                <Text style={styles.key}>{d}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </View>
                            <View style={styles.keyRow}>
                                {
                                    this.state.row[1].map((d, i) => (
                                        <TouchableHighlight
                                            key={d}
                                            onPress={() => this._onPressButton(d)} underlayColor="white">
                                            <View
                                                style={styles.keyEachRow}>
                                                <Text style={styles.key}>{d}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </View>
                            <View style={styles.keyRow}>
                                {
                                    this.state.row[2].map((d, i) => (
                                        <TouchableHighlight
                                            key={d}
                                            onPress={() => this._onPressButton(d)} underlayColor="white">
                                            <View
                                                style={styles.keyEachRow}>
                                                <Text style={styles.key}>{d}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </View>
                            <View style={styles.keyRow}>
                                {
                                    this.state.row[3].map((d, i) => (
                                        <TouchableHighlight
                                            key={d}
                                            onPress={() => this._onPressButton(d)} underlayColor="white">
                                            <View
                                                style={styles.keyEachRow}>
                                                <Text style={styles.key}>{d}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </View>
                            <View style={styles.keyRow}>
                                {
                                    this.state.row[4].map((d, i) => (
                                        <TouchableHighlight
                                            key={d}
                                            onPress={() => this._onPressButton(d)} underlayColor="white">
                                            <View
                                                style={styles.keyEachRow}>
                                                <Text style={styles.key}>{d}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.operators}>
                            {
                                this.state.col.map((d, i) => (
                                    <TouchableHighlight
                                        key={d}
                                        onPress={() => this._onPressButton(d)} underlayColor="white">
                                        <View
                                            style={styles.operatorEachRow}>
                                            <Text style={styles.key}>{d}</Text>
                                        </View>
                                    </TouchableHighlight>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    boxContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxZero: {
        backgroundColor: '#f4fdff',
        width: 375,
        height: 150,
        justifyContent: 'center',

    },
    boxOne: {
        backgroundColor: '#80fff5',
        width: 375,
        height: 100,
        justifyContent: 'center',
    },
    boxTwo: {
        width: 375,
        height: 417,
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        maxWidth: 375,
        textAlign: 'right',
        color: '#5e5e5e',
        marginTop: 5,
        padding: 12,
        paddingBottom: 0,
        fontSize: 40,
        overflow: 'hidden',
    },
    output: {
        maxWidth: 375,
        textAlign: 'right',
        color: '#5e5e5e',
        marginTop: 5,
        padding: 12,
        paddingBottom: 0,
        fontSize: 28,
        overflow: 'hidden',
    },
    keypad: {
        backgroundColor: '#f2fdff',
        width: 281.25,
        height: 417,
        flex: 1,
        flexDirection: 'column',
    },
    keyRow: {
        width: 281.25,
        height: 83.4,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    keyEachRow: {
        width: 93.75,
        height: 83.4,
        justifyContent: 'center',
        borderColor: '#dbdbdb',
        borderWidth: 1,
    },
    key: {
        fontSize: 24,
        fontWeight: '300',
        textAlign: 'center',
    },
    operators: {
        backgroundColor: '#b6b2bd',
        width: 93.75,
        height: 417,
        flexDirection: 'column',
    },
    operatorEachRow: {
        width: 93.75,
        height: 69.5,
        justifyContent: 'center',
        borderColor: '#828282',
        borderWidth: 1,
    },
});


