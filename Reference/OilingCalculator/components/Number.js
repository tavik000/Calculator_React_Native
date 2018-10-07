import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

var isNumber =0
var expression =[]
var input = []
var value = 0
var operator
var add=0
var subtract=0
var division =0
var product =0
var ans =0
var power =0
var priorA=0
var priorB=0
var see = []
//
export default class Number extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       no: props.no,
     };
     this.getNumber =this.getNumber.bind(this)
     this.delNumber =this.delNumber.bind(this)
   }
   delNumber(){
     if(input.length >0){
       var temp =input.reverse()
       console.log("temp "+ temp);
       temp.splice(0,1)
       input =temp.reverse()
       console.log("input1 " +input);
     }else{
       var tempExpression =expression.reverse()
       expression.splice(0,1)
       expression=expression.reverse()
     }
   }
   allClean(){
     expression =[]
     input=[]
     ans =''
   }
   reset(){
    add=0
    subtract=0
    division =0
    product =0
    power=0
   }
   resetAB(){
     priorA=0
     priorB=0
   }
   checkNumber(v){
     if (typeof v == 'number'){
       isNumber=0
     }else {
       isNumber=1
       switch (v) {
         case "+":
           operator = "+"
           break;
         case "-":
           operator = "-"
           break;
         case "*":
           operator = "*"
           break;
         case "/":
           operator = "/"
           break;
         case "=":
           operator = "="
           break;
         case "(":
           operator = "("
           break;
         case ")":
           operator = ")"
           break;
         case "^":
           operator = "^"
           break;
       }
     }
   }
   priorCheck(arr){
     temp =arr
             var m = arr.indexOf("(")
             var n = arr.indexOf(")")
             var priorArr = arr.slice(m+1,n)
             var x = m-1
             var y= m+2

             if(n-m == 2){
               if(m !=0){
              arr[m] ="*"
              arr.splice(n,1)
              console.log(arr);
              console.log(arr[m]);
            }else{
              arr.splice(m,1)
              arr.splice(n-1,1)
              console.log("arr"+ arr);
              console.log("arr[m]"+arr[m]);
            }
            return arr

             }
             this.calculate(priorArr)

             if(typeof arr[x] =='number'){
                 if(m ==0){
                   arr.splice(m,1)
                   arr.splice(m+1,n-m-1)
                   arr[m] =ans
                 }else{
                 arr.splice(m,1)
                 arr[m] ="*"
                 arr[m+1] =ans
                 arr.splice(m+2,n-m-1)
               }
             }else{
               arr.splice(m,1)
               arr.splice(m+1,n-m-1)
               arr[m] =ans
             }

             console.log("update expression "+arr);
      }

   calculate(arr){
     var result=0
     temp =arr
     this.reset()
     arr.find(function(x){if(x =="+"){add =add+1}})
     arr.find(function(x){if(x =="-"){subtract =subtract+1}})
     arr.find(function(x){if(x =="/"){division =division+1}})
     arr.find(function(x){if(x =="*"){product =product+1}})
     arr.find(function(x){if(x =="^"){power =power+1}})
     if(power>0){
       for(var i=0;i<power;i++){
        var m = arr.indexOf("^")
        result = Math.pow( temp[m-1],temp[m+1])
        temp[m-1] =result
        temp.splice(m,2)
        console.log("power " +temp);

      }
    }

     if(product>0){
       for(var i=0;i<product;i++){
        var m = arr.indexOf("*")
        result = temp[m-1]*temp[m+1]
        temp[m-1] =result
        temp.splice(m,2)
        console.log("product " +temp);

      }
    }
      if(division>0){
        for(var i=0;i<division;i++){
         var m = arr.indexOf("/")
         result = temp[m-1]/temp[m+1]
         temp[m-1] =result
         temp.splice(m,2)
         console.log("divi " +temp);

       }
     }

       if(add>0){
         for(var i=0;i<add;i++){
          var m = arr.indexOf("+")
          result = temp[m-1]+temp[m+1]
          temp[m-1] =result
          temp.splice(m,2)
          console.log("add " +temp);

        }
      }
        if(subtract>0){
          for(var i=0;i<subtract;i++){
           var m = arr.indexOf("-")
           result = temp[m-1]-temp[m+1]
           temp[m-1] =result
           temp.splice(m,2)
           console.log("sub "+ temp);

         }
       }
      ans=result
      // ans =ans.toFixed(2)
      return ans
     }
   getNumber(no){
    var no = this.state.no
     this.checkNumber(no);
     if(isNumber ==0){
       input =input.concat(no)
      console.log("input: "+ input);
     }else {

     if(input.length >= 1){
      var temp =input.reverse()
      for(i=0; i<input.length;i++){
        temp[i] = temp[i]*Math.pow(10,i)
        value = value +temp[i]
      }

      expression =expression.concat(value)
      // expression =expression.concat(operator)
      temp.splice(0,input.length)
      value =0
      console.log("expression: " +expression);
     }
     if(operator){
     expression =expression.concat(operator)
   }
   if(operator == "="){
     expression.find(function(x){if(x =="("){priorA =priorA+1}})
     expression.find(function(x){if(x ==")"){priorB =priorB+1}})
     for(var i=0;i<priorA;i++){
       console.log(priorA);
       this.priorCheck(expression);
     }
     this.resetAB();
     this.calculate(expression)
     console.log("answer: " +ans);
     expression=[]
   }
   }
 }
  render(){
    if(this.state.no == "ans"){
      return(
        <Text style={styles.text}>{ans}</Text>
      )
    }
    if(this.state.no == "express"){
      return(
        <View >
        <Text style={styles.text}>{expression}</Text>
        <Text style={styles.text}>{input}</Text>
        </View>
      )
    }
    if(this.state.no =="<"){
      return(
        <TouchableOpacity onPressIn={this.delNumber} onPressOut={this.props.x}>
        <Text style={styles.text}>{this.props.no} </Text>
        </TouchableOpacity>
      )
    }
    if(this.state.no =="AC"){
      return(
        <TouchableOpacity onPressIn={this.allClean} onPressOut={this.props.x}>
        <Text style={{fontSize:40}}>{this.props.no} </Text>
        </TouchableOpacity>
      )
    }
    return(
      <TouchableOpacity onPressIn={this.getNumber} onPressOut={this.props.x}>
      <Text style={styles.text}>{this.props.no} </Text>
      </TouchableOpacity>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',

  },
  output:{
    flex: 3,
    backgroundColor: 'yellow',
    marginRight: 10
  },
  input:{
    flex: 7,
    backgroundColor: 'skyblue',
  },
  box:{
    flex:1,
    backgroundColor: 'powderblue'
  },
  row:{
    flex:1,
    flexDirection: 'row'
  },
  text:{
    fontSize:50,
    marginRight:10
  }
});
