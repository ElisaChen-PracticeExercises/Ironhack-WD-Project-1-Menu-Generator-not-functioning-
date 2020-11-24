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
function highlightItem(targetRow) {
    if (targetRow.classList.contains("selected")) {
        targetRow.parentNode.style.color = "lightgray"
    } else {
        targetRow.parentNode.style.color = "black"
    }
}

// add menu item to player choices 
function addItemToChoices(targetRow) {
    if (targetRow.classList.contains("selected")) {
        let playerChoice = document.createElement('tr');
        playerChoice.classList.add("playerChoice");

        let name = document.createElement('td');
        name.textContent = targetRow.parentNode.firstChild.textContent;
        playerChoice.appendChild(name);

        let price = document.createElement('td')
        price.textContent = targetRow.parentNode.lastChild.textContent;
        playerChoice.appendChild(price);

        let trash = document.createElement('td');
        trash.textContent = "remove";
        trash.classList.add("trash")
        trash.onclick = (evt) => {removeItemFromChoices(evt);}
        playerChoice.appendChild(trash);

        playerChoices.appendChild(playerChoice);
    }
}

function removeItemFromChoices(event) {
    event.target.parentNode.remove();
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
    highlightItem(evt.target)
    addItemToChoices(evt.target)
    activateTrashBtn()
})

const trashBtn = [... document.querySelectorAll(".trash")]
function activateTrashBtn() {
    trashBtn.forEach(button => button.onclick = (evt) => {
    removeItemFromChoices(evt);
})};

console.log(trashBtn)

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
