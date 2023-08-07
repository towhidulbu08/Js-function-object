var shoppingCart={
    Book:4,
    Sunglass:3,
    Keyboard:1,
    Pen:5,
    Mouse:8,
}
//console.log(shoppingCart)

//multiples ways of getting values of keys from an object.
//1.using dot(.)notation
var valuesOfBook=shoppingCart.Book;
//console.log(valuesOfBook)
//2.using third brackets
var KeyValues=shoppingCart['Mouse']
//console.log(KeyValues)
//3.when an object property is in a another variable.
var propertyName='Keyboard'
console.log(shoppingCart[propertyName])
//4.
var Values=Object.values(shoppingCart)
//console.log(Values)
//5.
var Keys=Object.keys(shoppingCart)
console.log(Keys)
//multiples ways to set value  of keys in an object
//1.
var ShopMouse=shoppingCart.Mouse
ShopMouse=12;
console.log(ShopMouse)
shoppingCart['Mouse']=20;
console.log(shoppingCart['Mouse'])
var setPropertyValue='Mouse';
shoppingCart[setPropertyValue]=30;
console.log(shoppingCart[setPropertyValue])
//console.log(shoppingCart)
