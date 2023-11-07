"use strict";
// Question #2 //
let Eric = " Eric ";
console.log("Hello" + Eric + "would you like to learn some python today ?");
//Question #3 //
let Name = "My name is Nazneen Rizvi";
console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:", Name.toUpperCase());
console.log("Titlecase:", Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());
//Question # 4
var famousQuote = "The only way to do great work is to love what you do.";
var author = "Steve Jobs";
console.log('Famous Quote: "' + famousQuote + '" - ' + author);
//Question #5
var famousQuote = "The only way to do great work is to love what you do.";
var famous_person = "Steve Jobs";
var message = 'Famous Person: "' + famousQuote + '" - ' + famous_person;
console.log(message);
//Questin# 6//
var nameWithWhitespace = "\t   Nazneen\tRizvi  \n";
console.log("\t :");
console.log(nameWithWhitespace);
var nameWithWhitespace = nameWithWhitespace.trim();
console.log("\n:");
console.log(nameWithWhitespace);
//question#7
console.log("Addition:", 2 + 6);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 16 / 2);
//Question #8 You should create four lines that look like this:console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//question #9
let myfavouriteNumber = "3 or 6";
let printmessage = `My favorite number is ${myfavouriteNumber}.`;
console.log(printmessage);
// Question #10
// program 1 date = new Date();
var date = new Date();
console.log(date);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//program 2 date = new Date();
var date = new Date();
console.log(date);
var famousQuote = "The only way to do great work is to love what you do.";
var famous_person = "Steve Jobs";
var message = 'Famous Person: "' + famousQuote + '" - ' + famous_person;
console.log(message);
//question #11
var Allfriendsnames = "My friends Names:";
console.log(Allfriendsnames);
const naMes = ["Hiba", "Kishwer", "Ammar", "Hussain", "Ali"];
// Print each person's name one at a time
for (const name of naMes) {
    console.log(name);
}
//question12
// Create an array of friends' names
const names = ["Hiba", "Kishwer", "Ammare", "Hussain", "Ali"];
// Personalized Greetings
for (const name of names) {
    const message = `Hello, ${name}! Have a great day.`; // Personalized message
    console.log(message);
}
//question13
var myFavouriteCar = ["suzuki wegonR", "Honda CC"];
myFavouriteCar.forEach(function (myFavouriteCar) {
    console.log("I would Like to own a " + myFavouriteCar + "!.");
});
// question14
// Create an array of guests you'd like to invite
let guestList = ["Nasreen Iftikhar", "kishwer Salman", "Amna Rizvi"];
// Invite each person to dinner
for (const guest of guestList) {
    console.log(`Dear ${guest},Asalam-o-Alaykum you are invited to dinner. Please join us for a delightful evening.`);
}
// Question # 15 
// Create an array of guests you'd like to invite
guestList = ["Nasreen Iftikhar", "kishwer Salman", "Amna Rizvi"];
// Invite each person to dinner
for (const guest of guestList) {
    console.log(`Dear ${guest}, Asalam-o-Alaykum you are invited to dinner. Please join us for a delightful evening.`);
}
// A guest can't make it
let guestWhoCantMakeIt = "Amna Rizvi";
// Name of the new person you are inviting
let newGuest = "Talat";
// Print a message about the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);
// Modify the list by replacing the guest who can't make it with the new person
const index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
// Print a second set of invitation messages for the updated list
for (const guest of guestList) {
    console.log(`Dear ${guest}, Asalam-o-Alaykum you are invited to dinner. Please join us for a delightful evening.`);
}
//Question # 16
guestList = ["Nasreen Iftikhar ", "kishwer Salman  ", "Talat"];
guestWhoCantMakeIt = "Amna Rizvi ";
newGuest = "Talat";
const Totalguest = guestList.indexOf(guestWhoCantMakeIt);
if (Totalguest !== -1) {
    guestList[Totalguest] = newGuest;
}
console.log("Great news! We found a bigger  party dinner table");
// Adding more 5 Guest
guestList.push("Batool", "ArifA", "Ahmed", "Fatima", "Sadaf");
console.log(guestWhoCantMakeIt + " Unfotunately Can't come in the party because have some emergency problem.");
console.log("------New Guest List-------");
guestList.forEach(function (NewGuestList) {
    console.log("Assala mo Alikum My Dear Friends ".concat(NewGuestList, ", you are cordially invited to Lunch and Dinner Please join us at sadi town Karachi on Saturday at 2:00 PM till 8:pm We look forward to your presence Thank you"));
});
//Question#17
// Create an array of guests you'd like to invite
guestList = ["Nasreen Iftikhar", " Kishwe Salman  ", " Talat ",
    "Batool", "Arif", "Ahmed", "Fatima", "Sadaf"
];
// Inform that you can invite only two people
console.log("Unfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}
// Print a message to the two people still on your list
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for a delightful evening.`);
}
// Remove the last two names from the list to make it empty
guestList.pop();
guestList.pop();
// Print the list to ensure it's empty
console.log("Guest list at the end of the program:", guestList);
//Question#18
// Store the locations you'd like to visit in an array
const placesToVisit = ["Dubai", "Canada", "U.S.A", "Japan", "Greece"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("\nAlphabetical Order:");
console.log(sortedAlphabetically);
// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original order
const sortedReverseAlphabetically = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order:");
console.log(sortedReverseAlphabetically);
// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to restore the original order
placesToVisit.reverse();
console.log("\nOriginal Order (restored):");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order (modified):");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (modified):");
console.log(placesToVisit);
//question#19
const dinnerGuests = ["Nasreen Iftikhar", " Kishwe Salman  ", " Talat ", "Batool", "Fatima", "Sadaf"];
console.log(`You are inviting ${dinnerGuests.length} people to dinner.`);
//question#20
// Create an array of countries
const countries = ["USA", "Canada", "UK", "France", "Germany", "Australia", "Japan", "Brazil", "Pakistan", "China"];
// Print the array
console.log("List of Countries:");
console.log(countries);
//question #21
// Create an object containing information about cities
const citiesInfo = {
    karaChi: {
        country: 'Pakistan',
        population: 17236000,
        famousLandmarks: ['Bahria Icone Tower', 'Habib Bank Plaza', 'Safari Park'],
    },
    paris: {
        country: 'France',
        population: 2206488,
        famousLandmarks: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    },
    tokyo: {
        country: 'Japan',
        population: 13929286,
        famousLandmarks: ['Tokyo Skytree', 'Senso-ji Temple', 'Shibuya Crossing'],
    },
};
// Print information about New York
console.log('\nKaraChi Info:');
console.log('Country:', citiesInfo.karaChi.country);
console.log('Population:', citiesInfo.karaChi.population);
console.log('Famous Landmarks:', citiesInfo.karaChi.famousLandmarks);
// Print information about Paris
console.log('\nParis Info:');
console.log('Country:', citiesInfo.paris.country);
console.log('Population:', citiesInfo.paris.population);
console.log('Famous Landmarks:', citiesInfo.paris.famousLandmarks);
// Print information about Tokyo
console.log('\nTokyo Info:');
console.log('Country:', citiesInfo.tokyo.country);
console.log('Population:', citiesInfo.tokyo.population);
console.log('Famous Landmarks:', citiesInfo.tokyo.famousLandmarks);
// question#22
var cars = ["Honda", "Aulto", "Pajiro", "Hybrid", "Suzuki"];
console.log(cars[10]);
console.log(cars[2]);
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// question # 23
var car = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');
console.log("Is car != 'ford'? I predict true.");
console.log(car != 'ford');
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
console.log("Is car !== 'Subaru'? I predict true.");
console.log(car !== 'Subaru');
console.log("Is car < 'volvo'? I predict true.");
console.log(car < 'volvo');
console.log("Is car > 'audi'? I predict false.");
console.log(car > 'audi');
//question24
var Fruite = "apple";
console.log("Is apple == 'apple' ? I predict True");
console.log(Fruite == 'apple');
console.log("Is apple == 'orange'I predict False");
console.log(Fruite == 'apple');
console.log("Is apple === 'red'? I predict True.");
console.log(Fruite === 'red');
console.log("Is apple === 'green'? I predict False.");
console.log(Fruite === 'green');
console.log("Is apple != 'juice'? I predict True.");
console.log(Fruite != 'juice');
console.log("Is apple != 'banana'? I predict False.");
console.log(Fruite != 'banana');
console.log("Is apple !== 'taste'? I predict False.");
console.log(Fruite !== 'taste');
console.log("Is apple !== 'eat'? I predict True.");
console.log(Fruite !== 'eat');
console.log("Is apple < 'redshape'? I predict True.");
console.log(Fruite < 'redshape');
console.log("Is apple > 'tastelemon'? I predict False.");
console.log(Fruite > 'tastelemon');
// Tests using the lower case function
console.log("Tests using the lower case function");
console.log("'Nazneen'.toLowerCase() == 'Azfar'? I predict true.");
console.log('Nazneen'.toLowerCase() == 'Azfar');
console.log("'Nazneen'.toLowerCase() == 'Azfar'? I predict true.");
console.log('Nazneen'.toLowerCase() == 'Azfar');
console.log("'Nazneen'.toLowerCase() == 'Azfar'? I predict false.");
console.log('Nazneen'.toLowerCase() == 'Azfar');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("5 == 5? I predict true.");
console.log(5 == 5);
console.log("10 > 5? I predict true.");
console.log(10 > 5);
console.log("5 < 10? I predict true.");
console.log(5 < 10);
console.log("10 >= 10? I predict true.");
console.log(10 >= 10);
console.log("5 <= 10? I predict true.");
console.log(5 <= 10);
// Tests using "and" and "or" operators
console.log("(5 > 3) && (10 < 20)? I predict true.");
console.log((5 > 3) && (10 < 20));
console.log("(5 > 10) || (10 < 20)? I predict true.");
console.log((5 > 10) || (10 < 20));
//  Test whether an item is in a array
console.log("Is 'apple' in the fruits array? I predict true.");
var Fruites = ['apple', 'banana', 'orange'];
console.log(Fruites.indexOf('apple'));
console.log("Is 'grape' in the fruits array? I predict false.");
console.log(Fruites.indexOf('grape'));
// Test whether an item is not in a array
console.log("Is 'apple' not in the fruits array? I predict false.");
console.log(Fruites.indexOf('apple'));
console.log("Is 'grape' not in the fruits array? I predict true.");
console.log(Fruites.indexOf('grape'));
//question#24
var Alien_Color = 'blue';
if (Alien_Color === 'blue') {
    console.log("Congratulations! You just earned 5 points.");
}
if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//question#25
var Alien_Color = 'blue';
if (Alien_Color === 'blue') {
    console.log("Congratulations! You just earned 5 points.");
}
if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
//question#26
var AlienColor = "blue";
if (AlienColor === "blue") {
    console.log("Congratulations! You just earned 5 points.");
    console.log("Congratulations! You just earned 10 points.");
}
var aliancolor = "green";
if (aliancolor === "blue") {
}
else {
    console.log("Congratulations! You just earned 5 points.");
    console.log("Congratulations! You just earned 10 points.");
}
//question#27
console.log("Version 1");
var aliencolor = "blue";
if (aliencolor === "blue") {
    console.log("Congratulations! You just earned 5 points.");
}
console.log("Version 2");
var alien_color = "green";
if (alien_color === "red") {
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
console.log("Version 3");
var AlienColor = "orange";
if (AlienColor === "yellow") {
}
else {
    console.log("Congratulations! You just earned 15 points.");
}
//question#28
var baby = 1;
if (baby < 2) {
    console.log("The person is a baby.");
}
;
var toddler = 3;
if (toddler < 2 && toddler > 4) {
}
else {
    console.log("The person is a toddler");
}
;
var kid = 3;
if (kid < 4 && kid > 13) {
}
else {
    console.log("The person is a kid");
}
;
var teenager = 11;
if (teenager < 13 && teenager > 20) {
}
else {
    console.log("The person is a teenager");
}
;
//question#29
var FavouritesFruites = "Mango";
if (FavouritesFruites === "Mango") {
    console.log("I love Mango");
}
var Favourites_Fruites = "Banana";
if (Favourites_Fruites === "Banana") {
    console.log("I love Banana");
}
var favourites_fruites = "Watermelon";
if (favourites_fruites === "Watermelon") {
    console.log("I love Watermelon");
}
var favouritesfruites = "Guava";
if (favouritesfruites === "Guava") {
    console.log("I love Guava");
}
console.log("The part of IF and I really like fruites!");
var favoriteFruitsMango = "Mango";
if (favoriteFruitsMango === "Mango") {
    console.log("I really like Mangoes");
}
var favoriteFruitsBanana = "Banana";
if (favoriteFruitsBanana === "Banana") {
    console.log("I really like Bananas");
}
var favoriteFruitsWatermelon = "Watermelon";
if (favoriteFruitsWatermelon === "Watermelon") {
    console.log("I really like Watermelons");
}
var favoriteFruitsGuava = "Guava";
if (favoriteFruitsGuava === "Guava") {
    console.log("I really like Guavas");
}
//question#30
let nAmes = ["Admin", "Selman", "Abdullah", "Umar", "Azfar", "Ali"];
for (var i = 0; i < nAmes.length; i++) {
    if (nAmes[i] === 'Admin') {
        console.log("Hello Admin, would you like to see a status report today?");
    }
    else {
        console.log("Hello " + nAmes[i] + ", Good to see you back");
    }
}
// QUESTION#31
// With user name:
console.log("No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.");
var namEs = ['baby', 'toddler', 'kid', 'teenager', 'adult', 'elder'];
if (names.length === 6) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var empty = names_1[_i];
        if (empty === '') {
        }
        else {
        }
    }
}
// Without names:
console.log("If the list is empty, print the message We need to find some users!");
var NamEs = [];
if (NamEs.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, Names_1 = nAmes; _a < Names_1.length; _a++) {
        var withempty = Names_1[_a];
        if (withempty === '') {
        }
        else {
        }
    }
}
// Usernames have been removed
console.log("Remove all of the usernames from your array, and make sure the correct message is printed.");
var UserNames = ['baby', 'toddler', 'kid', 'teenager', 'adult', 'elder'];
if (UserNames.length === 0) {
}
else {
    var Usernames = [];
    console.log("Usernames have been removed ");
}
//question #32
var currentusers = ["saima", "Jamila", "Maham", "Ammar", "Hussain", "Itrat"];
var comingusers = ["Saima", "Jamila", "Aliya", "Ahmed", "Salman", "Aizaz"];
for (var i = 0; i < comingusers.length; i++) {
    var username = comingusers[i];
    var taken = false;
    for (var l = 0; l < comingusers.length; l++) {
        if (currentusers[l] === username) {
            taken = true;
            break;
        }
    }
    if (taken) {
        console.log("The username ".concat(username, " is already in used."));
    }
    else {
        console.log("This username ".concat(username, " is available."));
    }
}
//Queation # 33
function getOrdinalNumber(NumbeR) {
    var suffixes = ["th", "st", "nd", "rd"];
    var remainder = NumbeR % 100;
    return NumbeR + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
for (var numberwithordinal of numbers) {
    var ordinalNumber = getOrdinalNumber(numberwithordinal);
    console.log(ordinalNumber);
}
//question#34
const favoritePizzas = ["Pepperoni", "Fajita", "Supreme"];
// Using a for loop to print the names of the pizzas
console.log("My favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Using a for loop to print sentences about the pizzas
console.log("\nWhy I like these pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}
// Printing an additional sentence
console.log("\nI really love pizza!");
