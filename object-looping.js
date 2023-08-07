/// array vs object
//  you cannot set property and its value in one array at the same time.....
//.... But in Object you can do it ..
var shoppingCart={
    Book:4,
    Sunglass:3,
    Keyboard:1,
    Pen:5,
    Mouse:8,
    Shoes:12,
   
}
var array=Object.entries(shoppingCart)
console.log(array)
var keys=Object.keys(shoppingCart)
//console.log(keys)
for(var i=0; i<keys.length;i++){
    var keysName=keys[i]
    var keysValue=shoppingCart[keysName]
//console.log(keysName,keysValue)
}
for( var propertyName in shoppingCart){
    const value=shoppingCart[propertyName]
   // console.log(propertyName, value)

}

