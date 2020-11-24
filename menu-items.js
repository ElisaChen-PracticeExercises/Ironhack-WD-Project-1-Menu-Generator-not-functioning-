class MenuItem {
    constructor(item) {
        this.name = item.name; // name of menu item
        this.category = item.category; // app, main, sweets
        this.price = item.price; // numerical price without dollar sign
        this.containsFish = item.containsFish; //true or false
        this.containsCrustacean = item.containsCrustacean; //true or false
        this.containsCheese = item.containsCheese; //true or false
        this.containsLactose = item.containsLactose; //true or false
        this.glutenFree = item.glutenFree; //true or false
        this.vegetarian = item.vegetarian; //true or false
        this.containsAlcohol = item.containsAlcohol; //true or false
        this.containsRaw = item.containsRaw; //true or false
        this.halal = item.halal; //true or false
        this.kosher = item.kosher; //true or false
        this.richness = item.richness // 1 = very light, 5 = very rich
    }
}

const ricottaCarrots = new MenuItem({
    name: "Smoked ricotta with roasted carrots",
    category: 'APP',
    price: 7,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: true,
    containsLactose: true,  
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 2,   
});

const pateEnCroute = new MenuItem({
    name: 'Paté en croute',
    category: 'APP',
    price: 12,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: false,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: true,
    halal: false,
    kosher: false,
    richness: 4    
})

const eggplantCaviar = new MenuItem({
    name: 'Eggplant caviar',
    category: 'APP',
    price: 7,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 1    
})

const baconScone = new MenuItem({
    name: 'Bacon scone with maple syrup and clotted cream',
    category: 'APP',
    price: 9,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: false,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: true,
    halal: false,
    kosher: false,
    richness: 4    
})

const caesarSalad = new MenuItem({
    name: 'Caesar salad',
    category: 'APP',
    price: 9,
    containsFish: true,
    containsCrustacean: false,
    containsCheese: true,
    containsLactose: true,
    glutenFree: true,
    vegetarian: false,
    containsAlcohol: false,
    containsRaw: true,
    halal: false,
    kosher: false,
    richness: 3    
})

const vitelloTonnato = new MenuItem({
    name: 'Vitello tonnato',
    category: 'APP',
    price: 11,
    containsFish: true,
    containsCrustacean: false,
    containsCheese: true,
    containsLactose: true,
    glutenFree: true,
    vegetarian: false,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: false,
    richness: 4    
})

const chickenTagine = new MenuItem({
    name: 'Chicken Tagine with Bulgour',
    category: 'MAIN',
    price: 19,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: false,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: true,
    halal: true,
    kosher: true,
    richness: 3    
})

const blanquetteVeau = new MenuItem({
    name: 'Blanquette de veau',
    category: 'MAIN',
    price: 21,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: true,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: false,
    halal: true,
    kosher: false,
    richness: 4    
})

const fennelGratin = new MenuItem({
    name: 'Fennel gratin with olives and confit lemon',
    category: 'MAIN',
    price: 16,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: false,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 3    
})

const thaiGreenCurry = new MenuItem({
    name: 'Thai green curry',
    category: 'MAIN',
    price: 17,
    containsFish: true,
    containsCrustacean: true,
    containsCheese: false,
    containsLactose: false,
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 2    
})

const scallopsLeeks = new MenuItem({
    name: 'Scallops with buttered leeks',
    category: 'MAIN',
    price: 28,
    containsFish: false,
    containsCrustacean: true,
    containsCheese: false,
    containsLactose: true,
    glutenFree: true,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: false,
    halal: true,
    kosher: false,
    richness: 2    
})

const pithiviers = new MenuItem({
    name: 'Pithiviers',
    category: 'MAIN',
    price: 27,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: false,
    vegetarian: false,
    containsAlcohol: true,
    containsRaw: true,
    halal: false,
    kosher: false,
    richness: 5    
})

const pumpkinTortellini = new MenuItem({
    name: 'Pumpkin and Ricotta Tortellini',
    category: 'MAIN',
    price: 18,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: true,
    containsLactose: true,
    glutenFree: false,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: true,
    halal: true,
    kosher: true,
    richness: 3    
})

const chocolateCake = new MenuItem({
    name: 'Chocolate cake with vanilla bourbon ice cream',
    category: 'SWEET',
    price: 8,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: false,
    vegetarian: true,
    containsAlcohol: true,
    containsRaw: false,
    halal: false,
    kosher: true,
    richness: 4    
})

const babaAuRhum = new MenuItem({
    name: 'Baba au rhum',
    category: 'SWEET',
    price: 10,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: false,
    vegetarian: true,
    containsAlcohol: true,
    containsRaw: false,
    halal: false,
    kosher: true,
    richness: 4    
})

const tiramisu = new MenuItem({
    name: 'Tiramisu',
    category: 'SWEET',
    price: 8,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: true,
    glutenFree: false,
    vegetarian: true,
    containsAlcohol: true,
    containsRaw: false,
    halal: false,
    kosher: true,
    richness: 4    
})

const chocChipCookies = new MenuItem({
    name: 'Chocolate chip cookies',
    category: 'SWEET',
    price: 6,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 3    
})

const poachedPears = new MenuItem({
    name: 'Poached pears',
    category: 'SWEET',
    price: 9,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: true,
    containsRaw: false,
    halal: false,
    kosher: true,
    richness: 1    
})

const pineappleCarpaccio = new MenuItem({
    name: 'Pineapple Carpaccio',
    category: 'SWEET',
    price: 7,
    containsFish: false,
    containsCrustacean: false,
    containsCheese: false,
    containsLactose: false,
    glutenFree: true,
    vegetarian: true,
    containsAlcohol: false,
    containsRaw: false,
    halal: true,
    kosher: true,
    richness: 1    
})

 let allMenuItems = []
 allMenuItems.push(ricottaCarrots)
 allMenuItems.push(pateEnCroute)
 allMenuItems.push(eggplantCaviar)
 allMenuItems.push(baconScone)
 allMenuItems.push(caesarSalad)
 allMenuItems.push(vitelloTonnato)
 allMenuItems.push(chickenTagine)
 allMenuItems.push(blanquetteVeau)
 allMenuItems.push(fennelGratin)
 allMenuItems.push(thaiGreenCurry)
 allMenuItems.push(scallopsLeeks)
 allMenuItems.push(pithiviers)
 allMenuItems.push(pumpkinTortellini)
 allMenuItems.push(chocolateCake)
 allMenuItems.push(tiramisu)
 allMenuItems.push(babaAuRhum)
 allMenuItems.push(chocChipCookies)
 allMenuItems.push(poachedPears)
 allMenuItems.push(pineappleCarpaccio)

 export {allMenuItems}
//  console.log(allMenuItems[7])