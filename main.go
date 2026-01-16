/**
 * @author Daren Ileleji
 * @version 1.0.0
 * @date 2026-01-12
 * @fileoverview This FINAL program will prompt the user with the to do list and leads the user on an adventure based game to complete it 
 */

package main

import (
"bufio"
"fmt"
"os"
"strings"
)

func main() {
reader := bufio.NewReader(os.Stdin)

// Variables 

// Let statements
var narrator string = ""
var tasksDone int = 0

var bedroomChoice string = ""
var kitchenChoice string = ""
var livingRoomChoice string = ""
var outsideChoice string = ""
var outsideChoice2 string = ""
var aisleName string = ""
var aisle1Food string = ""
var aisle2Food string = ""

var searchChoice string = ""

var popcorn bool = false
var chocolate bool = false
var doritos bool = false
var coke bool = false

var money bool = false
var key bool = false
var remoteFound bool = false
var grocriesFound bool = false
var friendsInvited bool = false
var pizzaOrdered bool = false
var movieDiscFound bool = false

// Constants (Arrays in Go)
ORIGINAL_LIST := [5]string{"GROCRIES (POPCORN, COKE, CHOCOLATE BAR, DORITOS)", "FIND THE REMOTE", "INVITE TYRONE AND JEROME", "ORDER PIZZA", "FIND “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” MOVIE DISK"}

// PROCESSING
fmt.Printf("Good morning! You are thinking of hosting a movie night for you and your friends, but you need to go find some stuff to make it work, here is your list: %v. As soon as you complete one of the tasks, it will disapear from your list (your list will be shown again once completed a task so make sure to remember the list!), and you must complete every objective for the ULTIMATE movie night! Are you ready?\n", ORIGINAL_LIST)
fmt.Print("Enter \"1\" if yes      Enter \"2\" if no: ")
narrator, _ = reader.ReadString('\n')
narrator = strings.TrimSpace(narrator)

if narrator == "1" {
fmt.Println("Okay. Great! Now lets start off the day. You wake up, what do you want to do?")

for tasksDone < 5 {
fmt.Print("You are currently in the bedroom: Enter \"1\" to go to living room      Enter \"2\" to go to the kitchen: ")
bedroomChoice, _ = reader.ReadString('\n')
bedroomChoice = strings.TrimSpace(bedroomChoice)

if bedroomChoice == "1" {
// Entering Living Room
fmt.Println("You have entered the living, you think you have some things you need to do outside, would you like to stay inside or outside?")
fmt.Print("Enter \"1\" to go outside      Enter \"2\" to stay inside     Enter \"3\" to return to bedroom: ")
livingRoomChoice, _ = reader.ReadString('\n')
livingRoomChoice = strings.TrimSpace(livingRoomChoice)

if livingRoomChoice == "1" {
// Going outside
var inOutside bool = true
for inOutside {
var friendsStatus string = ""
if friendsInvited {
friendsStatus = "(COMPLETED)"
}
var groceriesStatus string = ""
if grocriesFound {
groceriesStatus = "(COMPLETED)"
}
fmt.Println("You went outside: ")
fmt.Print("Enter \"1\" to explore the neighboorhood       Enter \"2\" to go to the grocery store     Enter \"3\" to return: ")
outsideChoice, _ = reader.ReadString('\n')
outsideChoice = strings.TrimSpace(outsideChoice)

if outsideChoice == "1" {
fmt.Println("You decide to walk around and you found your friends home.")
fmt.Printf("Enter \"1\" to invite your friends over %s       Enter \"2\" to ask them for some money    'Enter \"3\" to say hello and return back to steert: ", friendsStatus)
outsideChoice2, _ = reader.ReadString('\n')
outsideChoice2 = strings.TrimSpace(outsideChoice2)

if outsideChoice2 == "1" {
if friendsInvited == false {
fmt.Println("CONGRATS, you have invited your friends over for the movie night")
friendsInvited = true
tasksDone++
} else {
fmt.Println("Your friends are already at your house waiting!")
}
} else if outsideChoice2 == "2" {
if money == false {
fmt.Println("They give you some money!")
money = true
} else if money == true {
fmt.Println("They already gave you enough money")
}
} else if outsideChoice2 == "3" {
fmt.Println("You say hello and head back.")
} else {
fmt.Println("Invalid Response.")
}
} else if outsideChoice == "2" && money == false {
fmt.Println("You cannot enter, you do not any money on you, go find some.")
} else if outsideChoice == "2" && money == true {
var inGroceryStore bool = true
for inGroceryStore {
fmt.Println("You entered the grocery store, which aisle do you wanna go in?")
fmt.Printf("Enter \"1\" for Snacks aisle %s, Enter \"2\" for Drinks aisle %s, Enter \"3\" to leave store: ", groceriesStatus, groceriesStatus)
aisleName, _ = reader.ReadString('\n')
aisleName = strings.TrimSpace(aisleName)

if aisleName == "1" {
fmt.Println("Which items do you need?")
fmt.Print("Enter \"1\" for ice cream, Enter \"2\" for popcorn, Enter \"3\" for choclate, Enter \"4\" for doritos, Enter \"5\" to leave: ")
aisle1Food, _ = reader.ReadString('\n')
aisle1Food = strings.TrimSpace(aisle1Food)

if aisle1Food == "2" {
fmt.Println("You have grabbed the popcorn needed for the list")
popcorn = true
} else if aisle1Food == "1" {
fmt.Println("You do not need this item")
} else if aisle1Food == "3" {
fmt.Println("You have grabbed the chocolate needed for the list")
chocolate = true
} else if aisle1Food == "4" {
fmt.Println("You have grabbed the dorritos needed for the list")
doritos = true
} else if aisle1Food == "5" {
fmt.Println("Going back:")
} else {
fmt.Println("Invalid Respone.")
}
} else if aisleName == "2" {
fmt.Println("Which items do you need?")
fmt.Print("Enter \"1\" for coke, Enter \"2\" for water, Enter \"3\" to leave: ")
aisle2Food, _ = reader.ReadString('\n')
aisle2Food = strings.TrimSpace(aisle2Food)

if aisle2Food == "1" {
fmt.Println("You have grabbed the coke needed for the list")
coke = true
} else if aisle2Food == "2" {
fmt.Println("You do not need that item")
} else if aisle2Food == "3" {
fmt.Println("Going back:")
} else {
fmt.Println("Invalid Respone.")
}
}

if aisleName == "3" {
fmt.Println("Returning.")
inGroceryStore = false
} else if aisleName != "1" && aisleName != "2" && aisleName != "3" {
fmt.Println("Invalid Respone.")
}

if popcorn && chocolate && doritos && coke && grocriesFound == false {
fmt.Println("CONGRATS! You have completed the groceries objective, returning outside.")
inGroceryStore = false
grocriesFound = true
tasksDone++
}
}
}

if outsideChoice == "3" {
fmt.Println("Returning:")
inOutside = false
} else if outsideChoice != "1" && outsideChoice != "2" && outsideChoice != "3" {
fmt.Println("Invalid Response.")
}
}
// Inside the living room
} else if livingRoomChoice == "2" {
var inLivingRoom bool = true
for inLivingRoom {
var remoteStatus string = ""
if remoteFound {
remoteStatus = "(COMPLETED)"
}
var discStatus string = ""
if movieDiscFound {
discStatus = "(COMPLETED)"
}

fmt.Println("You stayed inside:")
fmt.Printf("Enter 1 to search cabinet %s       Enter 2 to search inside cushions %s       Enter 3 to return to bedroom: ", remoteStatus, discStatus)
searchChoice, _ = reader.ReadString('\n')
searchChoice = strings.TrimSpace(searchChoice)

if searchChoice == "1" {
if remoteFound {
fmt.Println("You already unlocked the cabinet! There is nothing else here")
} else if key == false {
fmt.Println("A key is required to unlock this.")
} else {
fmt.Println("CONGRATS! You have found the remote! You will now return to living room menu")
remoteFound = true
tasksDone++
}
} else if searchChoice == "2" {
if movieDiscFound == false {
fmt.Println("CONGRATS! You have found the MOVIE disc of “DAREN, ZAC, AND ETHAN: THE B.A.W TRIO” You will now return to living room menu")
movieDiscFound = true
tasksDone++
} else {
fmt.Println("You have already searched here, nothing else but crums here")
}
} else if searchChoice == "3" {
fmt.Println("Going back to bedroom: ")
inLivingRoom = false
} else {
fmt.Println("Invalid option.")
}
}
} else if livingRoomChoice == "3" {
// This handles returning to bedroom from living room
} else {
fmt.Println("Invalid choice, please chose something better.")
}

} else if bedroomChoice == "2" {
var inKitchen bool = true
for inKitchen {
var phoneCall string = ""
if pizzaOrdered {
phoneCall = "(COMPLETED)"
}

fmt.Println("You have entered the kitchen: ")
fmt.Printf("Enter \"1\" to go to call the pizza place %s   Enter \"2\" to search drawers instead        Enter \"3\" to return to bedroom: ", phoneCall)
kitchenChoice, _ = reader.ReadString('\n')
kitchenChoice = strings.TrimSpace(kitchenChoice)

if kitchenChoice == "1" {
if pizzaOrdered == false {
fmt.Println("You have called the pizza place, and the pizza will be arriving shortly, congrats you have completed this task! you will now return to the kitchen menu")
pizzaOrdered = true
tasksDone = tasksDone + 1
} else {
fmt.Println("You already ordered the pizza!")
}
} else if kitchenChoice == "2" {
if key == false {
fmt.Println("You looked through the drawers and found a KEY!")
key = true
} else {
fmt.Println("The drawers are empty.")
}
} else if kitchenChoice == "3" {
fmt.Println("Going back to the bedroom.")
inKitchen = false
} else {
fmt.Println("Invalid choice. please choose something better.")
}
}
} else {
fmt.Println("Invalid choice, please chose something better.")
}
}
fmt.Println("CONGRATS! You have finished the to do list, now enjoy the AMAZING move with your friends!")
} else if narrator == "2" {
fmt.Println("Okay. Goodbye!")
} else {
fmt.Println("That is an invalid option, please restart and stop fooling around.")
}
}