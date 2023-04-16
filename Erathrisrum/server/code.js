const bitcodes = 
[
    "1010011", //s
    "1001111", //o
    "1010000", //p
    "1010100", //t

    "1010010", //r
    "1000001", //a
    "1011001", //y
    "1010011", //s

    "1000101", //e
    "1010110", //v
    "1010100", //t
    "1000101", //e
    "1001001", //i
    "1001101"  //m
]

// ----------------------------------final section --------------------------------------------------------------
const messageRef = document.getElementById("message")
const finalSectionRef = document.getElementById("final-code-section")
const finalPasswordRef = document.getElementById("final-password")
const finalCodeRef = document.getElementById("final-code")
const finalButtonRef = document.getElementById("final-button")
finalSectionRef.style.visibility = "hidden"
const locked = [true, true]
const tryToUnlock = () =>{
    if(!locked[0] && !locked[1]){
        messageRef.style.visibility = "hidden"
        finalSectionRef.style.visibility = "visible"
    } 
}

// logic related to the button in the final section 
let k = 8
finalCodeRef.innerText = bitcodes[k]
const finalClick = () => {
    k++
    if(k > 13) k = 8
    finalCodeRef.innerText = bitcodes[k]
    
}
finalButtonRef.addEventListener("click", finalClick)

//final password logic 
const finalPassword = () => {
    if(finalPasswordRef.value.toLowerCase() === "operativsystem"){
        alert("unlocked!")
    }
}
finalPasswordRef.addEventListener("change", finalPassword)


// ---------------------------------- left section ---------------------------------------------------------------

const leftSectionRef = document.getElementById("left-section")
const leftCodeRef = document.getElementById("left-code")
const leftInputRef = document.getElementById("left-input")
const leftCodeSectionRef = document.getElementById("left-code-section")
const leftButtonRef = document.getElementById("left-button")
const leftPasswordRef = document.getElementById("left-password")

// logic related to the visibility of the section
const leftCheck = () => {
    if(leftInputRef.value === "5863"){
        leftCodeSectionRef.style.visibility = "visible"
    }
}
leftInputRef.addEventListener("change", leftCheck)
leftCodeSectionRef.style.visibility = "hidden"

// logic related to the button in the left section 
let i = 0
leftCodeRef.innerText = bitcodes[i]
const leftClick = () => {
    i++
    if(i > 3) i = 0
    leftCodeRef.innerText = bitcodes[i]
}
leftButtonRef.addEventListener("click", leftClick)

//left password logic 
const leftPassword = () => {
    if(leftPasswordRef.value.toLowerCase() === "post"){
        leftSectionRef.style.background = "rgba(179, 243, 164, 0.8)"
        locked[0] = false
        tryToUnlock()
    }
}
leftPasswordRef.addEventListener("change", leftPassword)

// ---------------------------------- right section ---------------------------------------------------------------

const rightSectionRef = document.getElementById("right-section")
const rightCodeRef = document.getElementById("right-code")
const rightInputRef = document.getElementById("right-input")
const rightCodeSectionRef = document.getElementById("right-code-section")
const rightButtonRef = document.getElementById("right-button")
const rightPasswordRef = document.getElementById("right-password")

// logic related to the visibility of the section
const rightCheck = () => {
    if(rightInputRef.value === "1702"){
        rightCodeSectionRef.style.visibility = "visible"
    }
}
rightInputRef.addEventListener("change", rightCheck)
rightCodeSectionRef.style.visibility = "hidden"

// logic related to the button in the left section 
let j = 4
rightCodeRef.innerText = bitcodes[j]
const rightClick = () => {
    j++
    if(j > 7) j = 4
    rightCodeRef.innerText = bitcodes[j]
    
}
rightButtonRef.addEventListener("click", rightClick)

//left password logic 
const rightPassword = () => {
    if(rightPasswordRef.value.toLowerCase() === "syra"){
        rightSectionRef.style.background = "rgba(179, 243, 164, 0.8)"
        locked[1] = false
        tryToUnlock()
    }
}
rightPasswordRef.addEventListener("change", rightPassword)


