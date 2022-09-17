//document.getelementById("count-el").innerText = 5
// let count = 2+7
// console.log(count)

// let myAge = 35
// let firstBatch=5
// let count = firstBatch
// console.log(count)

// let myAge = 21
// let humanDogratio =7
// let myDogAge = myAge * humanDogratio
// console.log(myDogAge)
// let count = 3
// count = count+1
// console.log(count)
//   let bonusPoints = 50 
//   console.log(bonusPoints)
//    bonusPoints = bonusPoints + 100
//    console.log(bonusPoints)
//   bonusPoints = bonusPoints - 20
//   console.log(bonusPoints)
//   bonusPoints = bonusPoints +75
//  console.log(bonusPoints)
// function increment(){
//     console.log("The button was clicked")
// }
// function countdown (){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// function writetoconsole(){
//     console.log("42")
// }
// writetoconsole()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function findlap (){
//     console.log(lap1+lap2+lap3)
// }
// findlap()
// let count = 0
// let lapsCompleted = count
// function countLap(){
//         lapsCompleted = lapsCompleted + 1
//         console.log(lapsCompleted)
// }
// countLap()
// countLap()
// countLap()
// let countEl = document.getElementById("count-el")
// console.log(countEL)
// let count = 0
// function increment(){
//     count = count + 1 
//     countEL.innerText = count
// }
// // increment()
// function save(){
//     console.log(count)
// }
// let methods = "you have three new notification"
// console.log(methods)
// let name = "Akshay"
// let greetings ="hi my name is"
// let myGreetings = greetings + " " + name
// console.log(myGreetings)
// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(totalPoints)
// let greetingsEL = document.getElementById("greetings-el")
//   let text="hi"
//   let name="akshay"
//     greetingsEL.innerText = text +" "+ name
//     let count = 0
     
// function increment (){
   
//    incrementButton.innerText = count
// }
let countEL = document.getElementById("count-el")
// let saveBtn = document.getElementById("save-btn")

count = 0
function increment(){
  console.log("clicked")
  count += 1
  countEL.innerText = count
}

saveEL=document.getElementById("save-el")
function save(){
  let countStr=count+ " - "
    console.log(count)
    console.log("count")
    saveEL.textContent += countStr
    console.log(saveEL)
    countEL.innerText = 0
 }

 
