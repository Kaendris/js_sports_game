let shoot1 = document.querySelector("#teamone-shoot-button");
let shoot2 = document.querySelector("#teamtwo-shoot-button");
let reset = document.querySelector("#reset-button");
let resettotal = document.querySelector("#num-resets");
let goal1 = document.querySelector("#teamone-numgoals");
let goal2 = document.querySelector("#teamtwo-numgoals");
let takenshot1 = document.querySelector("#teamone-numshots");
let takenshot2 = document.querySelector("#teamtwo-numshots");


shoot1.addEventListener("click", function() {
        console.log("Team 1 Shoots!")
    let newtakenshot1Value = Number(takenshot1.innerHTML) + 1;
    takenshot1.innerHTML = newtakenshot1Value;
    Audio
})

shoot1.addEventListener("click", function() {

if (Math.random() < 0.15) {
    let newgoal1Value = Number(goal1.innerHTML) + 1;
    goal1.innerHTML = newgoal1Value;
    window.alert("GOOOOOALL Team 1!!");
}
})
    

shoot2.addEventListener("click", function() {
        console.log("Team 2 Shoots!")
    let newtakenshot2Value = Number(takenshot2.innerHTML) + 1;
    takenshot2.innerHTML = newtakenshot2Value;
   
})


shoot2.addEventListener("click", function() {

    if (Math.random() < 0.25) {
        let newgoal2Value = Number(goal2.innerHTML) + 1;
        goal2.innerHTML = newgoal2Value;
        window.alert("GOOOOOALL Team 2!!");
}
})


reset.addEventListener("click", function() {
        console.log("A New Game Begins!!")
    let newresettotalValue = Number(resettotal.innerHTML) + 1;
    resettotal.innerHTML = newresettotalValue;
    let newtakenshot1Value = 0;
    takenshot1.innerHTML = newtakenshot1Value;
    let newtakenshot2Value = 0;
    takenshot2.innerHTML = newtakenshot2Value;
    let newgoal1Value = 0
    goal1.innerHTML = newgoal1Value;
    let newgoal2Value = 0
    goal2.innerHTML = newgoal2Value;
})
