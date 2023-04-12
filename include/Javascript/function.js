// document.write("qadis")

// Var,let,const for making variables
// 1)let used inside a function
        // -->Scope blocks
// 2)var can support complex data types (float etc)
        // -->Data type depends on type of value
// 3)const used inside a constant value 
// var n1 = prompt("");


// console.log(result);
// var n1 = prompt("Enter 1st Number:","0");
// var n2 = prompt("Enter 2nd Number:","0");

// var add = parseInt(n1)+parseInt(n2);
// var sub = n1-n2;

// document.write("Result:",add)
// document.write("Result:",sub)

function add (n1,n2){
        return n1+n2       
}
function sub (n1,n2){
        return n1-n2       
}
function mul (n1,n2){
        return n1*n2       
}
function div (n1,n2){
        return n1/n2       
}
document.write("Addition result:",add(12,3))
        document.write("<br>")
document.write("Subtraction result:",sub(12,3))
        document.write("<br>")
document.write("Multiplication result:",mul(12,3))
        document.write("<br>")
document.write("Division result:",div(12,3))

