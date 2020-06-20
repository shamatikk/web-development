function Calc(){
let powerCalc = new Calc;
justCalc.addMethod("*", (a, b) => a * b);
justCalc.addMethod("/", (a, b) => a / b);
justCalc.addMethod("+", (a, b) => a + b);
justCalc.addMethod("-", (a, b) => a - b);

let result = justCalc.calculator();
alert( result );}