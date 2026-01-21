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
    console.log("Greater than 2")
} else {
    console.log("Not greater than 2");
}