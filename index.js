// Code your solutions in this file
    for (age =30; age <40; age ++){
        console.log(`I'm ${age} years old. Happy birthday to me!`);
        debugger;
    }

const cards = [];
cards.length=0
cards.push("Guadalupe", "Ollie", "Aki")

function writeCards(cards,event){
    let message=[]
    for (let i=0; i<cards.length; i++){
        console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
        message.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return message;
}

function countDown(x){
    
    while(x>=0){
        console.log(x--)
    }

}