/*var pTag = document.getElementById('myPTag');
pTag.addEventListener('click', function(e) {
    console.log(this.id, "fired ptag click");
})*/

/*function checkScope() {
    let name = 'Bryan';
    console.log(name);
};

var obj = {
    a: checkScope
};*/

//Object.create({key, value});

/*
var checkScope = function() {                      doesn't work here
    console.log(this, 'this inside checkScope');
*/

/*
obj.a();
console.log(obj.a, 'obj.a in the global context');*/


/*let myVar = 'this is a string';
function myFunc() {
    let myVar = 'this is another string';
    console.log(myVar, 'inside the function');
}

console.log(myVar, 'outside the function');*/

//myFunc();


/*var stringObj = 'this is a string';
console.log(stringObj.length);
console.log(Object.getPrototypeOf(stringObj));

var array = [1, 2, 3];
array[1];
array.1;*/

//var newObj = Object.create({david: 'is cool'})
// console.log(newObj['david']);
// console.log(newObj.david);

/*
var newObj = {
    firstName: 'Bryan',
    lastName: 'Stephens',
    age: '35'
};

console.log(newObj);*/




var myNewUser;
function user(username, password) {
    this.userName = username;
    this.password = password;
};

function gatherInfo() {
    var userName = prompt('Enter a valid username', 'User Name');
    var password = prompt('Enter a password', 'password');
    myNewUser = new user(userName, password);
    console.log(myNewUser);
}

gatherInfo();