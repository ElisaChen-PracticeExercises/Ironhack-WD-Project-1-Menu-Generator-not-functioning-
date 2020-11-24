// // // VARIABLES 
import {allMenuItems} from "../menu-items.js"
import {allPrompts} from "../questions-answers.js"

const startBtn = document.getElementById("start")
const welcomeScreen = document.getElementById("welcomeScreen")
const playScreen = document.getElementById("playScreen") 
const menuTable = document.getElementById("fullMenuTable")
const playerChoices = document.getElementById("playerChoicesTable")


// // // FUNCTIONS

function initWelcomeScreen() {welcomeScreen.style.display = "flex"}

function initPlayScreen() {
    playScreen.style.display = "none"
    //NEED TO FIX THIS FOR MEDIA QUERY
}

function hideWelcomeScreen() {welcomeScreen.style.display = "none"}

function showPlayScreen() {
    playScreen.style.display = "flex"
    //NEED TO FIX THIS FOR MEDIA QUERY
}

// load menu items 
function loadMenuItems(array) {
    // add to Menu Items table
    array.forEach((element) => {
// CAN I CREATE A CLASS METHOD FOR THE LINES BELOW?
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
    });
};

// shuffle a random prompt
function printPrompt() {}

// select menu item (highlight in menu)
function selectItem(target) {
    if (target.classList.contains("selected")) {
        playerChoices.innerHTML += target.closest('tr').innerHTML
        target.closest('tr').style.backgroundColor = "#F6F1D1"
        target.closest('tr').style.fontWeight = "bold"
    } else {
        target.closest('tr').style.backgroundColor = "white"
        target.closest('tr').style.fontWeight = "normal"
    }
}

// add menu item to player choices 
function removeItemFromChoices(target) {
    if (target.classList.contains("selected")) {
        menuTable.innerHTML += target.closest('tr').innerHTML
        target.closest('tr').remove()
    }
}
// generate response

// shuffle menu items? 
// filter menu items 
// sort menu items 


// // // FLOW LOGIC

loadMenuItems(allMenuItems);

// INITIALIZE WELCOME SCREEN
window.onload = () => {
    initWelcomeScreen();
    initPlayScreen;
    printPrompt();    
}

// MOVE TO PLAY SCREEN
startBtn.onclick = () => {
    hideWelcomeScreen();
    showPlayScreen();
    // shuffle the menu items ?
    // recomend now button should be gray with grey text and not clickable
}

// PLAYER MAKES 3 MENU CHOICES 
const menuItemRow = [... document.querySelectorAll(".menuItem")]
menuItemRow.forEach(row => row.onclick = (evt) => {
    evt.target.classList.toggle("selected");
    selectItem(evt.target)
})

// THIS DOESN'T GET CONSTRUCTED FOR NEW ELEMENTS?
const playerChoiceRow = [... document.querySelectorAll(".playerChoicesTable tr")]
playerChoiceRow.forEach(row => row.onclick = (evt) => {
    evt.target.classList.toggle("selected");
    removeItemFromChoices(evt.target)
})



// event listener: on click of menu items, item gets highlighted and added to playerchoice list
// limit adds to 3 items 
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
