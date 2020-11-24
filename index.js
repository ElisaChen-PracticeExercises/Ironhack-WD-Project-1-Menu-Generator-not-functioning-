// // // VARIABLES 
import {allMenuItems} from "../menu-items.js"
import {allPrompts} from "../questions-answers.js"

const startBtn = document.getElementById("start")
const welcomeScreen = document.getElementById("welcomeScreen")
const playScreen = document.getElementById("playScreen") 
const menuTable = document.getElementById("fullMenuTable")
const playerChoices = document.getElementById("playerChoicesTable")
const question = document.getElementById("question")
const submitBtn = document.getElementById("submit")
const response = document.getElementById("responseText")
const resetBtn = document.getElementById("reset")
let selectedItems = [] // gets filled in with prompt below
let selectedPrompt // gets filled in with a random prompt with printPrompt function



// // // FUNCTIONS

function getRandomInteger(number) {
  return Math.floor(Math.random() * Math.floor(number));
}

// shuffle a random prompt
function printPrompt(array) {
    let index = getRandomInteger(array.length)
    selectedPrompt = array[index]
    question.textContent = selectedPrompt.question
    return index
}

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

// select menu item (highlight in menu)
function selectItem(target) {
    if (target.classList.contains("selected")) {
        target.style.backgroundColor = "#F6F1D1"
        target.style.fontWeight = "bold"
    } else {
        target.style.backgroundColor = "white"
        target.style.fontWeight = "normal"
    }
}


function saveResponses() {
    let selection = [... document.querySelectorAll(".selected")]
    selectedItems = [];
    for (let i=0; i<3; i++) {
        allMenuItems.forEach(item => {
            if (item.name === selection[i].firstChild.textContent){
                selectedItems.push(item)
            }
        })
    }
    console.log(selectedItems)
    return selectedItems
}

// generate response
// evaluate choices - create a function to check for each of the prompts
function isVegetarian() {
    let isVegetarianEval = []
    selectedItems.forEach(item =>  isVegetarianEval.push(item.vegetarian) )
    let isTrue = isVegetarianEval.every((el) => el === true)
    // console.log(isVegetarianEval)
    // console.log(isTrue)
    return isTrue
}

function judgeResponses() {}

function printResult(boolean) {
    response.textContent = selectedPrompt.response(boolean)
}

// reset button: generate new prompt, remove all selected classes
function clearSelection() {
    let selected = [... document.querySelectorAll(".selected")]
    selected.forEach(element => {
        element.classList.remove("selected")
        selectItem(element)
    })
}

function clearResponse() {response.textContent = ""}

// shuffle menu items? 
// filter menu items 
// sort menu items 


// // // FLOW LOGIC

loadMenuItems(allMenuItems);

// INITIALIZE WELCOME SCREEN
window.onload = () => {
    initWelcomeScreen();
    initPlayScreen;
}

// MOVE TO PLAY SCREEN
startBtn.onclick = () => {
    hideWelcomeScreen();
    showPlayScreen();
    printPrompt(allPrompts);    
    // shuffle the menu items ?
    // recomend now button should be gray with grey text and not clickable
}

// PLAYER MAKES 3 MENU CHOICES 
const menuItemRow = [... document.querySelectorAll(".menuItem")]
menuItemRow.forEach(row => row.onclick = (evt) => {
// NEED TO LIMIT THIS TO 3 CHOICES
    if ([...(document.querySelectorAll(".selected"))].length < 3) {
        evt.target.closest("tr").classList.toggle("selected");
        selectItem(evt.target.closest("tr"))
    } else {
        evt.target.closest("tr").classList.remove("selected");
        selectItem(evt.target.closest("tr"))
    }
})


// PLAYER SUBMITS CHOICES 
submitBtn.onclick = () => {
    saveResponses()
    judgeResponses() // NEED TO FIX returns a boolean based on conditions of the specifc prompt
    printResult(false)
}

resetBtn.onclick = () => {
    printPrompt(allPrompts);
    clearSelection()  
    clearResponse()  
}

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
