//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

var display = function(screens) {
    console.log(screens);
}

var Laptop = function(){
    var developed, storage, display;
}

var Tablet = function(){
    var developed, storage, display;
}

Laptop.prototype.display = display;
Tablet.prototype.display = display;

firstLaptop = new Laptop;
firstLaptop.developed = "Lenovo";
firstLaptop.storage = "SSD";
firstLaptop.display = ('Ultra HD');

firstTablet = new Tablet;
firstTablet.developed = "Apple";
firstTablet.storage = "Flash";
firstTablet.display = ('Retina');

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = ["1","2","3","4","5","6","7","8","9","10"];
console.log(numbers.length);
console.log(numbers.slice(5));


//3. Delete the last number in the array that you created above.

var numbers = ["1","2","3","4","5","6","7","8","9","10"];
console.log(numbers.length);
delete numbers[9];
console.log(numbers);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.


function myFunction() {
    var fruits = document.getElementById("paragraph").innerHTML; 
   var res = fruits.replace(/Strawberries/gi, "Bananas");
    //var res = fruits.replace(/strawberry/g, "banana");//
    document.getElementById("paragraph").innerHTML = res;
}


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballTeams = ['arsenal', 'chelsea','manchester united','liverpool'];
footballTeams[0] = 'audi';
footballTeams[1] = 'opel';
footballTeams[2] = 'tesla';
footballTeams[3] = 'ford';
console.log(footballTeams);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    {name: "alexandra"},
    {name: "laila"},
    {name: "napoleon"},             
];

var name = people.filter(function(people) {
    return name[0] === "a";
});


//7. Create a simple function that logs the date.

var d = new Date();

console.log(d);
