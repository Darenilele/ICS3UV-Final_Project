/**
 * @author Daren Ileleji
 * @version 1.0.0
 * @date 2026-01-12
 * @fileoverview This FINAL program will prompt the user with the to do list and leads the user on an adventure based game to complete it 
 */

// Variables 

// Let statements
let narrator: string = "";
let narratorNum: number = 0;
let key: boolean = false;
let remoteFound: boolean = false;
let grocriesFound: boolean = false;
let friendsInvited: boolean = false;
let pizzaOrdered: boolean = false;
let movieDiskFound: boolean = false;

// Constants

// Arrays
const ORIGINAL_LIST: string[] = ["GROCRIES (POPCORN, COKE, CHOCOLATE BAR, DORITOS)", "FIND THE REMOTE", "INVITE TYRONE AND JEROME", "ORDER PIZZA", "FIND “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” MOVIE DISK"];
let CURRENT_LIST: string[] = ["GROCRIES (POPCORN, COKE, CHOCOLATE BAR, DORITOS)", "FIND THE REMOTE", "INVITE TYRONE AND JEROME", "ORDER PIZZA", "FIND “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” MOVIE DISK"];

// PROCESSING
console.log(`Good morning! You are thinking of hosting a movie night for you and your friends, but you need to go find some stuff to make it work, here is your list: ${ORIGINAL_LIST}. As soon as you complete one of the tasks, it will disapear from your list (your list will be shown again once completed a task so make sure to remember the list!), and you must complete every objective for the ULTIMATE movie night! Are you ready?`)
narrator = prompt(`Enter "1" if yes      Enter "2" if no`) || "0";
narratorNum = parseInt(narrator);


if (narratorNum == 1) {
  console.log("Okay. Great! Now lets start off the day. You wake up, what do you want to do?")

  // 1 leads to pathway REMOTE + GROCRIES + MOVIE DISK, INVITE TYRONE AND JEROME. 2 leads to pathway ORDER PIZZA and REMOTE (key is hidden to unlock drawer for remote)

  while (CURRENT_LIST.length > 0) {
    // When objective is finished, shows the (COMPLETED) text
    let phoneCall = "pizza place"
    if (pizzaOrdered) {
      phoneCall = "(COMPLETED)"
    }

    narrator = prompt(`You are currently in the bedroom: Enter "1" to go to living room      Enter "2" to go to the kitchen`) || "0"
    narratorNum = parseInt(narrator)

    if (narratorNum == 1) {
      // Entering Living Room
      console.log("You have entered the living, you think you have some things you need to do outside, would you like to stay inside or outside?")
      narrator = prompt(`Enter "1" to go outside      Enter "2" to stay inside     Enter "3" to return to bedroom`) || "0"
    
      if (narratorNum == 1) {
        console.log("You went outside, you think about either going to the grocery store,")

    }






    
    // Entering Kitchen 
    } else if (narratorNum == 2) {
      console.log("You have entered the kitchen, you decide maybe this would be a good time to call the pizza place")
      narrator = prompt(`Enter "1" to go to call the pizza place (${phoneCall})     Enter "2" to search drawers instead        Enter "3" to return to bedroom`) || "0"
    } if (narratorNum == 1) {
      console.log("You have called the pizza place, and the pizza will be arriving shortly, congrats")
      let pizzaOrdered: boolean = true;
    }




  }
  

} else if (narratorNum == 2) {
  console.log("Okay. Goodbye!");




} else (console.log("That is an invalid option, please restart and stop fooling around."));


// OUTPUT