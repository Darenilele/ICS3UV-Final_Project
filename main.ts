/**
 * @author Daren Ileleji
 * @version 1.0.0
 * @date 2026-01-12
 * @fileoverview This FINAL program will prompt the user with the to do list and leads the user on an adventure based game to complete it 
 */

// Variables 

// Let statements
let narrator: string = "";
let tasksDone: number = 0;

let bedroomChoice: string = "";
let kitchenChoice: string = "";
let livingRoomChoice: string = "";
let outsideChoice: string = "";
let outsideChoice2: string = "";

let searchChoice: string = "";

let money: boolean = false;
let key: boolean = false;
let remoteFound: boolean = false;
let grocriesFound: boolean = false;
let friendsInvited: boolean = false;
let pizzaOrdered: boolean = false;
let movieDiscFound: boolean = false;

// Constants

// Arrays
const ORIGINAL_LIST: string[] = ["GROCRIES (POPCORN, COKE, CHOCOLATE BAR, DORITOS)", "FIND THE REMOTE", "INVITE TYRONE AND JEROME", "ORDER PIZZA", "FIND “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” MOVIE DISK"];
let CURRENT_LIST: string[] = ["GROCRIES (POPCORN, COKE, CHOCOLATE BAR, DORITOS)", "FIND THE REMOTE", "INVITE TYRONE AND JEROME", "ORDER PIZZA", "FIND “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” MOVIE DISK"];

// PROCESSING
console.log(`Good morning! You are thinking of hosting a movie night for you and your friends, but you need to go find some stuff to make it work, here is your list: ${ORIGINAL_LIST}. As soon as you complete one of the tasks, it will disapear from your list (your list will be shown again once completed a task so make sure to remember the list!), and you must complete every objective for the ULTIMATE movie night! Are you ready?`)
narrator = prompt(`Enter "1" if yes      Enter "2" if no`) || "0";


if (narrator == "1") {
  console.log("Okay. Great! Now lets start off the day. You wake up, what do you want to do?")

  // 1 leads to pathway REMOTE + GROCRIES + MOVIE DISK, INVITE TYRONE AND JEROME. 2 leads to pathway ORDER PIZZA and REMOTE (key is hidden to unlock drawer for remote)

  while (tasksDone < 5) {
    bedroomChoice = prompt(`You are currently in the bedroom: Enter "1" to go to living room      Enter "2" to go to the kitchen`) || "0"

    if (bedroomChoice == "1") {
      // Entering Living Room
      console.log("You have entered the living, you think you have some things you need to do outside, would you like to stay inside or outside?")
      livingRoomChoice = prompt(`Enter "1" to go outside      Enter "2" to stay inside     Enter "3" to return to bedroom`) || "0"
    
      if (livingRoomChoice == "1") {
        // Going outside
        let inOutside: boolean = true;
        while (inOutside) {
          let grocriesStatus = "";
          if (grocriesFound) {
            grocriesStatus = "(COMPLETED)"
          }
          let friendsStatus = "";
          if (friendsInvited) {
            friendsStatus = "(COMPLETED)"
          }
          console.log("You went outside: ")
          outsideChoice = prompt(`Enter "1" to explore the neighboorhood ${friendsStatus}      Enter "2" to go to the grocery store ${grocriesStatus}`) || "0"

        } if (outsideChoice == "1") {
          console.log("You decide to walk around and you found your friends home.")
          outsideChoice2 = prompt(`Enter "1" to invite your friends over        Enter "2" to ask them for some money    'Enter "3" to say hello and return back to steert`) || "0";
          if (outsideChoice2 == "1") {
            if (friendsInvited == false) {
              console.log("CONGRATS, you have invited your friends over for the movie night")
              friendsInvited = true;
              tasksDone++
            } else {
              console.log("Your friends are already at your house waiting!")
            }
          } else if (outsideChoice2 == "2") {
            if (money == false) {
              console.log("They give you some money!")
              money = true;
            } else {
              console.log("They already gave you enough money")
            }
          } else if (outsideChoice2 == "3") {
            console.log("You say hello and head back.")
          }
        }


        // Inside the living room
      } else if (livingRoomChoice == "2") {
        let inLivingRoom: boolean = true;
        while (inLivingRoom) {
          // When objective is finished, show the (COMPLETED) text
          let remoteStatus = "";
          if (remoteFound) {
            remoteStatus = "(COMPLETED)"
          }
          let discStatus = "";
          if (movieDiscFound) {
            discStatus = "(COMPLETED)"
          }

          console.log("You stayed inside:")
          searchChoice = prompt(`Enter 1 to search cabinet ${remoteStatus}       Enter 2 to search inside cushions ${discStatus}       Enter 3 to return to bedroom`) || "0";
          
          // Searching Cabinet
          if (searchChoice == "1") {
            if (remoteFound) {
              console.log("You already unlocked the cabinet! There is nothing else here")
            } else if (key == false) {
            console.log("A key is required to unlock this.") 
            } else {
              console.log("CONGRATS! You have found the remote! You will now return to living room menu")
              remoteFound = true;
              tasksDone++;
            } 


            // Searching Cushions
          } else if (searchChoice == "2") {
            if (movieDiscFound == false) {
              console.log("CONGRATS! You have found the MOVIE disc of “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” You will now return to living room menu")
              movieDiscFound = true;
              tasksDone ++;
            } else {
              console.log("You have already searched here, nothing else but crums here")
            }
          } 
          else if (searchChoice == "3") {
            console.log("Going back to bedroom: ")
            inLivingRoom = false;
          } 
        } if (searchChoice != "1" || "2" || "3") {
          console.log("Invalid choice. please choose something better.")
        }
      } 
      
    
    // Entering Kitchen 
    } else if (bedroomChoice == "2") {
      let inKitchen: boolean = true;
      while (inKitchen) {
        // When objective is finished, shows the (COMPLETED) text
        let phoneCall = ""
        if (pizzaOrdered) {
          phoneCall = "(COMPLETED)"; 
      }

      console.log("You have entered the kitchen: ")
      kitchenChoice = prompt(`Enter "1" to go to call the pizza place ${phoneCall}   Enter "2" to search drawers instead        Enter "3" to return to bedroom`) || "0"

      // Completing PIZZA objective
      if (kitchenChoice == "1") {
      if (pizzaOrdered == false) {
        console.log("You have called the pizza place, and the pizza will be arriving shortly, congrats you have completed this task! you will now return to the kitchen menu")
        pizzaOrdered = true;
        tasksDone = tasksDone + 1; 
        } else {
        console.log("You already ordered the pizza!")
      } 
      // Finding the key -> to get remote in living room
    } else if (kitchenChoice == "2") {
      if (key == false) {
        console.log("You looked through the drawers and found a KEY!")
        key = true;
      } else {
        console.log("The drawers are empty.")
      } 
    } else if (kitchenChoice == "3") {
        console.log("Going back to the bedroom.")
        inKitchen = false;
        // Invalid choice for Kitchen
      } else {
        console.log("Invalid choice. please choose something better.");
      }
    }
    // Invalid choice for Living room
      } else {
        console.log("Invalid choice, please chose something better.");
      }
    } 
    console.log("CONGRATS! You have finished the to do list, now enjoy the AMAZING move with your friends!")
  }

else if (narrator == "2") {
  console.log("Okay. Goodbye!");
} else (console.log("That is an invalid option, please restart and stop fooling around."));


