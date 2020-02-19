// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
<<<<<<< HEAD
function objKey(name, age) {
  return Object.keys(objKey)
}
=======
>>>>>>> 627dab1585ead45ae7fcf4a86803941763678810

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

<<<<<<< HEAD
function objLength(obj) {
  return Object.keys(obj).length
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

var obi = [{ id: 2, value: 50 }, { id: 0, value: 70 }, { id: 1, value: 40 }]
function objSort(obj) {
  obj.sort((a, b) => (a.id) - (b.id));
  return obj
}
=======
// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
>>>>>>> 627dab1585ead45ae7fcf4a86803941763678810
