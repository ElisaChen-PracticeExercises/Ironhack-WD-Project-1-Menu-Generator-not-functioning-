// createa a class Questions

class Prompt {
    constructor (info) {
        this.question = info.question;
        this.wrongAnswer = info.wrongAnswer;
        this.rightAnswer = info.rightAnswer;
    }

    response(boolean) {
        let response;
        if (boolean) {response = this.rightAnswer}
        else (response = this.wrongAnswer)
        return response
    }
}

let vegetarian = new Prompt ({
    question: "I'm vegetarian and don't eat any meat or fish. What can you recommend?",
    wrongAnswer: "I told you I don't eat our animal or fish friends! I'm outta here!",
    rightAnswer: "Perfect! This sounds delicious and virtuous."
});

let fishAllergy = new Prompt ({
    question: "I'm deathly allergic to fish, my throat will swell shut. What can I have?",
    wrongAnswer: 'Jesus, are you trying to kill me?!',
    rightAnswer: "Thank you for taking my allergy seriously, that sounds great!"
});

let crustaceanAllergy = new Prompt ({
    question: "I can't eat any shellfish. Can you recommend something for me?",
    wrongAnswer: "No way, that's going to send me to the hospital!",
    rightAnswer: "Wonderful, that should work for me!"
});

let noCheese = new Prompt ({
    question: 'I hate cheese. Can you suggest a menu without any cheese at all?',
    wrongAnswer: "Ugh, I know there's some parmesan hanging out in there!",
    rightAnswer: "Perfect, not a shred of cheese anywhere!"
});

let lactoseIntolerant = new Prompt ({
    question: "I'm lactose intolerant, even a drop is too much. What can I have?",
    wrongAnswer: "You know that's going to make me feel bloated all night!",
    rightAnswer: "Great, that sounds digestively perfect!"
});

let halal = new Prompt ({
    question: 'I eat strictly halal. What can I have here?',
    wrongAnswer: "You're disrespecting my religious beliefs! I can't eat that!",
    rightAnswer: "That sounds wonderful, thank you"
});

let kosher = new Prompt ({
    question: "I each strictly kosher. Do you know what I can eat?",
    wrongAnswer: "No way! That is so NOT kosher.",
    rightAnswer: "I'll go with your suggestions, thanks!"
});

let glutenFree = new Prompt ({
    question: "My body can't process anything with gluten. Help me!",
    wrongAnswer: "That's going to make my stomach explode! ",
    rightAnswer: "Ooh, that sounds lovely. "
});

let lighter = new Prompt ({
    question: "I'm trying to eat lighter. What would you recommend?",
    wrongAnswer: "Did you not hear me when I said 'lighter'? Not 'richer'! ",
    rightAnswer: "That sounds like the perfect meal for my diet!"
});

let noAlcohol = new Prompt ({
    question: "I've sworn off alcohol for dry January. What can I have?",
    wrongAnswer: "Uhhh, I know there's some booze hiding in there!",
    rightAnswer: "Sweet, thanks for helping me stick to my resolutions!"
});

let pregnant = new Prompt ({
    question: "I'm pregnant and can't eat any raw or uncooked foods or alcohol. What do you suggest?",
    wrongAnswer: "Are you trying to kill my baby?!",
    rightAnswer: "Thanks for helping me navigating these restrictions!"
});

let allPrompts = [];
allPrompts.push(vegetarian);
allPrompts.push(fishAllergy);
allPrompts.push(crustaceanAllergy);
allPrompts.push(noCheese);
allPrompts.push(lactoseIntolerant);
allPrompts.push(halal);
allPrompts.push(kosher);
allPrompts.push(glutenFree);
allPrompts.push(lighter);
allPrompts.push(noAlcohol);
allPrompts.push(pregnant);

// console.log(noAlcohol.response(false))
export {allPrompts}