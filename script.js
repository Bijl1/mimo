var age = 100;
console.log(age);

var age = 500;
console.log("Age: " + age);

const sixtyNine = 69;
console.log(sixtyNine + " new messages");

const dji = true;
const text = "Did DJI get the FCC covered list on Dec 23: "
console.log(text + dji);
console.log(`${text}${dji}`);

const number = 91;
const winner = "Lucky number: " + number;
console.log(winner);

const fish = 10;
var see = fish + " fish";
console.log(see);

var see = fish + (fish === 1 ? " fish" : " fish");
console.log(see);

const movie = "Joker";
const score = 90;
console.log(movie + " audience score: " + score);

const user = "John";
const isOnline = true;
const message = user + " is online: " + isOnline;
console.log(message);

let isInstalled = true;
if (isInstalled) {
    console.log("You already have MacOS");
} else {
    console.log("Installing MacOs");
}

let password = 10101010;
let correctPassword = 10000000;
if (password === correctPassword) {
    console.log("Correct Password is correct");
} else {
    console.log("Incorrect Password");
}

let flourAdded = 50;
let flourNeeded = 200;
if (flourAdded === flourNeeded) {
    console.log("Add vanilla beans");
} else {
    flourAdded = 200
    console.log("Add more flour")
}

let memoryFull = false;
let takePictures = false;
let memoryBroken = true;
if (memoryBroken) {
    console.log("Memory is broken.");
} else if (memoryFull) {
    console.log("Memory full. Add more memory.");
} else {
    takePictures = true;
    console.log("You can take pictures.");
}

let messages = 5;
if (messages === 99) {
    console.log("Message empty");
} else {
    console.log("You have a new message");
}

let messagesTwo = 1100;
let inboxFull = false;
if (messagesTwo < 1000) {
    inboxFull = true;
    console.log("Inbox is full");
} else if (messagesTwo < 0) {
    console.log("You have one new message");
} else {
    inboxFull = true;
    console.log("No new message");
}

let commonFriends = 3;
if (commonFriends > 2) {
    console.log("Greater than 2");
} else {
    console.log("Not greater than 2");
}

let vw = 1989;
if (vw > 2000) {
    console.log("You got newer VW");
} else {
    console.log("You have beauitful VW Mk1");
}

let repeat = true;
while (repeat) {
    repeat = false;
}

var keepPlaying = true;
while (keepPlaying === true) {
    console.log("Now Playing");
    console.log("Never Gonna Give You Up");
    keepPlaying = false;
    console.log("Not Playing");
}

let displayAd = true;
while (displayAd === true) {
    console.log("Sign up for this new app");
    displayAd = false;
}

var repearMessage = true;
while (repearMessage === true) {
    console.log("Hi, there!");
    repearMessage = false;
}

let lyric = "I want to hold your h";
for (i = 0; i < 6; i++) {
    lyric += "a";
}
lyric += "nd";
console.log(lyric);

const notifications = 4;
for (i = 0; i < notifications; i++) {
    console.log("You've got mail!");
}

let guest = 3;
for (let i = 0; i < guest; i++) {
    console.log("Guest: " + i);
}

console.log("*");
let halfChristmas = "";
for (i=0; i<5; i++) {
    halfChristmas += "!";
    console.log(halfChristmas);
}

console.log("- -");
console.log(". .");
let nose = "  >";
for (let i = 0; i < 3; i++) {
 nose += "-";
}
console.log(nose);
console.log(" o ");

const background = "beige";
const texts = "salmon";
const colorScheme = [background, texts];
console.log(colorScheme);

const topSpeeds = [500, 130, 200];
topSpeeds[2] = 7;
console.log(topSpeeds);

const scientists = ["Ada Lovelace", "Margaret Hamilton", "Grace Hopper"];
console.log(scientists[2])
console.log(scientists[0]);

function morningRoutine () {
    console.log("Lights off");
    console.log("Alarm set");
} morningRoutine();

function launch() {
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("Electronics failure!");
    console.log("Abort");
   }
   launch();

   function deviceUpdate () {
    console.log("Starting update");
    console.log("Do not power off");
   }
   deviceUpdate();

   function checkPoints () {
    const points = 5;
    const required = 20;
    console.log("Requirement reached");
    console.log(points > required);
   }
   checkPoints();

   function decreaseVolume() {
    console.log("Volume down");
   }
   decreaseVolume();
   decreaseVolume();

   function getAge(info) {
    return info[1];
   }
   console.log("The person's age is: " + getAge(["Jon John", 37, "Texas"]) + " years.");
  
   function getName(info) {
    return info[0];
   }
   console.log("My name is: " + getName(["John John", 37, "Texas"]));
  
   function getBMI (height, weight) {
   return weight / (height * weight);
   }
   const bmi = getBMI(2.7, 70);
   console.log(bmi);

   function greet(salutation, firstName, lastName) {
    return "Good day " + salutation + "" + firstName + " " + lastName + "!";
   }
   const greeting = greet("Dr. ", "John", "Banner");
   console.log(greeting);

   function addToPot (first, second, third) {
    console.log("Boil " + first);
    console.log("Add " + second);
    console.log("Cook " + third);
   }
   addToPot("water", "salt", "pasta");

   function printMsg(first, second, third) {
   console.log(first + " " + second + "" + third);
   }
   const result = printMsg ("Hello", "World", "!");

   const microwave = {
    brand: "Samsung",
    heat: function () {
        console.log("Now heating your food");
    }
   };
   microwave.heat();

   const employee = {
    name: "Jim Halpert",
    title: "Saleman",
    displayName: function() {
        console.log(this.name);
        console.log(this.title);
    }
   }
   employee.displayName();

   const dog = {
    name: "Sterling",
    age: 5,
    breed: "Lab Retriever",
    ageUp: function () {
        this.age++;
        console.log(this.age);
        console.log(this.name + " I miss you!");
    }
};
dog.ageUp();

const apartment = {
    number: 404,
    location: "unknown",
    display: function() {
     console.log(this.number = 200);
    }
   };
   apartment.display();

   function addOneHundred(number) {
    return number + 100;
   }
   const answer = addOneHundred(29);
   console.log(answer);

   function multiByTen(number) {
    return number * 10;
   }
   const ten = multiByTen(30);
   console.log(ten);

   function isKilometer(meters){
    if (meters === 1000) {
        return "Exactly a kilometer";
    }
    return "Not a kilometer";
   }
   const resultTwo = isKilometer(5000);
   console.log(resultTwo);

   function isFair(boolean) {
    if (boolean === true) {
     return "That's fair";
    } else {
    return "That's not fair";
    }
   }
   const resultThree = isFair(false);
   console.log(resultThree);

   function isTemperate(degrees) {
    if (degrees < 32) {
     return "Too cold";
    } else if (degrees > 85) {
     return "Too hot";
    }
    return "perfect"
   }
   const resultFour = isTemperate(75);
   console.log(resultFour);

   const numbers = [2, 4, 6, 8];
   function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
}
printNumbers(numbers);

const firstNumber = 10;
const secondNumber = 5;
function add(num1, num2) {
 return num1 + num2;
}
const resultFive = add(firstNumber, secondNumber);
console.log(resultFive);

const names = ['John', 'Adam', 'Sarah'];
function printEachName(names) {
 for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
 }
}
printEachName(names);

const languages = ["JavaScript", "C++", "Python"];
function findLanguage(languages, language) {
 for (let i = 0; i < languages.length; i++) {
  if (languages[i] === language) {
   console.log(language + " found!");
   break;
  } else {
   console.log(language +
    " does not exist or has not been found yet!.")
  }
 }
}
findLanguage(languages, "JavaScript");

const prices = [100, 150, 200];
const discounts = [0.1, 0.2, 0.25];
function getValues(prices, discounts) {
 let values = [prices, discounts];
 for (let i = 0; i < prices.length; i++) {
    values[i] = prices[i] * discounts[i]
 }
 console.log(values);
}
getValues(prices, discounts);

const numbersTwo = [1, 2, 3, 4, 5];
function double(numbersTwo) {
 for (let i = 0; i < numbersTwo.length; i++) {
  console.log(numbersTwo[i] * 2);
 }
}
double(numbersTwo);

function visitCountry() {
    const country= "Holland";
    console.log(country);
} 
visitCountry();

let cityToVisit = "Dan Haag";
function travel() {
    console.log("Let's go to " + cityToVisit);
}
travel();
console.log(cityToVisit);

const greetGuest  = () => {
    console.log("Hi " + "Jon");
    console.log("Hola " + "Jon");
   };
   greetGuest();

   const greetGuestTwo = (name) => {
    console.log("Hi " + name);
    console.log("Hola " + name);
   }
   greetGuestTwo("Jon");

   const canDrive = (age) => {
    if (age >= 16) {
     return "Yes";
    } else {
     return "No";
    }}
      canDrive(17);


    const isEvenNumber = (number) => number % 2 == 0;
    console.log(isEvenNumber(24));

    const shouldDeployChute = (altitude) => {
        if (altitude <= 2000) return true;
        return false;
       };

    let balance = 100;
    const withdraw = amount => {
        balance = balance - amount;
        if (balance < 0) {
            console.log("Overdrawn"); 
        }
    };
    console.log("Balance: ", balance);
        withdraw(150);

    const fullName = "Helen McGuire";
    console.log("Hello " + fullName + "!");
    console.log(`Hello ${fullName}!`);

    const greetings = (name) => {
        return `Bonjour ${name}`;
    };
    console.log(greetings`John`);

    let ticketPrice = 100;
    let persons = 5;
    let total = `Total cost: ${ticketPrice * persons}`;
    console.log(total);

    const likeBy = person => {
        return `Movie liked by: ${person}`;
    }
    console.log(likeBy `Jon`);

    const cars = ["Honda", "VW", "Jeep", "Bentley", "Cadillac", "Toyota", "Chevy", "Nissan", "KIA"];
    if (cars[0] === "VW") {
        console.log("The prettiest car is a Hyundai");
    } else if (cars[1] === "Jeep") {
        console.log("The prettiest car is Jeep");
    } else {
        console.log(`${cars[2]} cars are prettier than ${cars[8]} cars.`);
    }

    const carsTwo = ["Honda", "VW", "Jeep", "Bentley", "Cadillac", "Toyota", "Chevy", "Nissan", "KIA"];
    const [firstCar, secondCar, threeCar, fourCar, fiveCar, sixCar, sevenCar, eightCar, nineCar] = carsTwo;
    if (firstCar === "Hyundai") {
        console.log("The prettiest car is a Hyundai");
    } else if (secondCar === "Jeep") {
        console.log("The prettiest car is Jeep");
    } else {
        console.log(`${threeCar} cars are prettier than ${nineCar} cars.`);
    }
    
    const [companyName, phone, address] = [`Leo Pizza`, `3053055994`, `305 SW Main ST, Bunkie`];
    console.log(companyName);
    console.log(phone);
    console.log(address);

    const [companyNameTwo, ...addressTwo] = [`Leo Pizza`, `3053055994`, `305 SW Main ST, Bunkie`];
    console.log(companyNameTwo);
    console.log(addressTwo);

    const userInformation = {
    firstName: "John",
    lastName: " Smith",
    ageTwo: 41,
};
const { firstName, lastName, ageTwo } = userInformation;
console.log(firstName, lastName, ageTwo);

const carInformation = {
    item1: "Ram",
    item2: "3500",
    item3: "White",
};
const {
    item1: brand,
    item2: model,
    item3: color,
} = carInformation;
console.log(brand);
console.log(model);
console.log(color);

const bananas = 20;
const oranges = 10;
const fruits = `Fruits : ${bananas + oranges}`;
console.log(fruits);

const game = `soccer`;
const eventName = `${game} tournament`;
console.log(eventName);

const normalSeats = 32100;
const vipSeats = 450;
const fans = `Fan ${normalSeats + vipSeats}`;
console.log(fans);

const favoriteIceCream = `Strawbery`;
console.log(favoriteIceCream);

const aircrafts = {
 brandTwo: 'Boeing',
 nose: 'Pointed nose',
 windshield: 'V-shaped windshield',
 tail: 'Sloped Tail',
};
const {
    brandTwo,
    noseTwo,
    windshield,
    tail
}
= aircrafts;
console.log(`The ${brandTwo} Company was founded on July 15, 1916.`);
console.log(`This aircraft has a ${noseTwo}, and a ${windshield}`);
console.log(`And at least but not last a ${tail}`);

const mountains = ["Swiss Alps", "Mount Logan", "Mount Fuji",
 "Mauna Kea", "Jotunheimen Mountains"
];
function getMountainsNickname([alps, logan]) {
 console.log(`The ${alps} are The Magical Mountains.`);
 console.log(`The ${logan} is The Snowy Paradise.`);
}
getMountainsNickname(mountains);

const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celsius = [];
for (const element of fahrenheit) {
    let c = (element - 32) * (5/9);
    celsius.push(c);
}
console.log(celsius);

const fahrenheitTwo = [72,69,54];
const celsiusTwo = fahrenheit.map(function(temp){
    return Math.round((temp - 32) * 5/9);
});
console.log(celsiusTwo);

const values =  [56, 59, 49, 41];
const evenOrOdd = values.map(function(element) {
    return (element % 2) == 0;
});
console.log(evenOrOdd);

const queue = ["Sarah", "Hank", "Chris", "Beatrice"];
const displayQueue = queue.map(function(element, index) {
    return index + ": " + element;
});
console.log(displayQueue);

const states = [`fl`, `md`, `va`, `ca`];
const uppercaseStates = states.map((element) => element.toUpperCase());
console.log(uppercaseStates);

const valuesTwo = [1, 2, 3, 4];
const doubled = values.map(element => element * 2);
console.log(doubled);