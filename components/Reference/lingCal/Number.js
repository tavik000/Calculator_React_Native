import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import data from './data.json';


var isNumber =0
var expression =[]
var input = []
var value = 0
var operator
var add=0
var subtract=0
var division =0
var product =0
var priorA=0
var priorB=0
var ans =0
var mystr = {}
var str ={}
//sd

export default class Number extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       no: props.no,
       finalAnswer: 0
     };
     this.getNumber =this.getNumber.bind(this)
   }
     reset(){
        add=0
        subtract=0
        division =0
        product =0
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
       }
     }
   }
   priorCheck(arr){
     temp =arr
     arr.find(function(x){if(x =="("){priorA =priorA+1}})
     arr.find(function(x){if(x ==")"){priorB =priorB+1}})

      if(priorA>0){
           if(priorA != priorB){
             console.log("wrong!");
           }else {
             for(var i=0;i<priorA;i++){
             var m = arr.indexOf("(")
             var n = arr.indexOf(")")
             var priorArr = arr.slice(m+1,n)
             this.calculate(priorArr)
             temp.splice(m,n-m)
             temp[m] =ans
             console.log("()" +temp);
           }
         }
         this.calculate(temp)


         }
      }
   calculate(arr){
     var result=0
     temp =arr

     arr.find(function(x){if(x =="+"){add =add+1}})
     arr.find(function(x){if(x =="-"){subtract =subtract+1}})
     arr.find(function(x){if(x =="/"){division =division+1}})
     arr.find(function(x){if(x =="*"){product =product+1}})

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
      // var str = {"ans" +" : " }
      // var final =JSON.stringify(ans)
     }
   getNumber(){
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
      expression =expression.concat(operator)

      temp.splice(0,input.length)
      value =0
      console.log("expression: " +expression);
     }


     if(operator == "="){
       this.priorCheck(expression);
       this.calculate(expression)
       console.log("answer: " +ans);
       expression=[]
       this.reset();

       console.log(this.state.finalAnswer);
     }
     this.setState({
       finalAnswer: ans
     })

   }
 }

    render(){
      if(this.state.no !="ans"){
        return(
          <TouchableOpacity  onPress={this.getNumber}>
          <View style={styles.box}>
          <Text style={styles.text}>{this.props.no}</Text>
          </View>
          </TouchableOpacity>
          )
      }
        else{
          return(
            <View style={styles.box}>
            <Text style={styles.text}>{this.state.finalAnswer}</Text>
            </View>
          )

        }
      }


}



const styles = StyleSheet.create({
  box:{
    height: 60,
    width: 60,
    margin:2,
    backgroundColor: 'powderblue'
  },
  text:{
    fontSize: 50
  }
});
