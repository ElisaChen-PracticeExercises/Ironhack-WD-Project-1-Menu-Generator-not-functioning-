// // // VARIABLES 
import {allMenuItems} from "../menu-items.js"
import {allPrompts} from "../questions-answers.js"

const startBtn = document.getElementById("start")
const welcomeScreen = document.getElementById("welcomeScreen")
const playScreen = document.getElementById("playScreen") 
const menuTable = document.getElementById("fullMenuTable")

// // // FUNCTIONS

function initWelcomeScreen() {
    welcomeScreen.style.display = "flex"
}

function initPlayScreen() {
    playScreen.style.display = "none"
    //NEED TO FIX THIS FOR MEDIA QUERY
}

function hideWelcomeScreen() {
    welcomeScreen.style.display = "none"
}

function showPlayScreen() {
    playScreen.style.display = "flex"
    //NEED TO FIX THIS FOR MEDIA QUERY
}

// load menu items 
function loadMenuItems(array) {
    array.forEach((element) => {
    let newItem = document.createElement('tr');
    newItem.classList.add("menuItem");

    let name = document.createElement('td');
    name.textContent = element.name;
    newItem.appendChild(name);

    let type = document.createElement('td');
    type.textContent = element.category;
    newItem.appendChild(type);

    let price = document.createElement('td')
    price.textContent = element.price;
    newItem.appendChild(price);

    menuTable.appendChild(newItem);
})};

// shuffle a random prompt 

// shuffle menu items? 
// select menu item (highlight in menu)
// add menu item to player choices 
// generate response

// filter menu items 
// sort menu items 


// // // FLOW LOGIC

// INITIALIZE WELCOME SCREEN
window.onload = () => {
    initWelcomeScreen()
    initPlayScreen
}

// MOVE TO PLAY SCREEN
startBtn.onclick = () => {
    hideWelcomeScreen();
    showPlayScreen();
    loadMenuItems(allMenuItems);
    // shuffle the menu items ?
    // player choices should be empty to start
    // recomend now button should be gray with grey text and not clickable
    // shuffle a random prompt
}


// PLAYER MAKES 3 MENU CHOICES 
// event listener: on click of menu items, item gets highlighted and added to playerchoice list
// once you hit three items, recommend now button turns blue with a little animation to show it's clickable

// PLAYER SUBMITS CHOICES 
// event listener: on click of submit button, generate a response based on the items shown





// FOR LATER
// FILTER ITEMS
// on click of filter button
// pop up a form that they can click on 
// click on attribute they want to filter by
// filter only the items they want to keep

// SORT ITEMS 
// on click of sort button
// pop up a form that they can click on 
// click on attribute they want to sort by
// sorts the items 



