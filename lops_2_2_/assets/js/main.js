const btn = document.querySelector(`input[type="submit"]`);
const loopNumber = document.querySelector("#loopNumber")
const loopOutput = document.querySelector("#loopOutput")

const loopMe = ["L", "p"]


btn.addEventListener("click", () => {
   let loopNumberValue = loopNumber.value
   for ( let i = 0; i < loopNumberValue; i++) {
    loopMe.splice(1, 0, "o")
   } 
   loopOutput.innerHTML = loopMe.join("")
})

