// function fo(){
//     console.log("fo")
//     bar()
// }
// fo()
// function bar(){
//     console.log("bar")
// }
//2.
// function make_avg(num1,num2,num3){
//     var sum=num1+num2+num3;
//     var avg=sum/3;
//     return avg;
// }
// var result=make_avg(10,20,30)
//console.log(result)
//3.
function make_avg(array){
    
    if(!Array.isArray(array)){
        return 'please give an array'
    }
    for(var x of array){
        if(typeof x!=='number'){
            return 'please give an array of number'
        }
        else if(x%1!==0){
            return "please give an array of integer number"
        }
    }
    
    
    
    let sum=0;
    for(var i=0;i<array.length;i++){
        
        var element=array[i]
        sum+=element;
        //console.log(i,totalElement,element)
    }
    var avg=sum/array.length
    return avg


}
var numbers=[1.5,40,10,20,10,20]
var result=make_avg(numbers)
console.log(result)
//4.
// function odd_even(integer){
//     if(integer%2==0){
//         return "even";
//     }
//     else{
//        return "odd"
//     }
   
// }

// console.log(odd_even(5))


