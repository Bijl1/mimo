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