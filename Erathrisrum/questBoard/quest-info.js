import { getById } from "./questCardObjects.js"

const url = window.location.href
const id = url.split("=")[1]
const quest = getById(id)

const infoRef = document.getElementById("quest-info")
const titleRef = document.getElementById("title")

// Create a new h2 element for the quest title
var questTitle = document.createElement("h1");
questTitle.classList.add("quest-title"); // Add the "quest-title" class to the h2
questTitle.innerHTML = quest.title; // Set the inner HTML of the h2 to the quest title

// Create a new p element for the quest giver
var questGiver = document.createElement("p");
questGiver.classList.add("quest-giver"); // Add the "quest-giver" class to the p
questGiver.innerHTML = "Kontaktperson: " + quest.giver; // Set the inner HTML of the p to the quest giver

// Create a new p element for the quest reward
var questReward = document.createElement("p");
questReward.classList.add("quest-reward"); // Add the "quest-reward" class to the p
questReward.innerHTML = "Belöning: " + quest.reward; // Set the inner HTML of the p to the quest reward

// Create a new p element for the quest location
var questLocation = document.createElement("p");
questLocation.classList.add("quest-location"); // Add the "quest-location" class to the p
questLocation.innerHTML = "Address: " + quest.address + ", " + quest.district; // Set the inner HTML of the p to the quest location

// Create a new p element for the quest reward
var questDesc = document.createElement("p");
questDesc.classList.add("quest-desc"); // Add the "quest-reward" class to the p
questDesc.innerHTML = "Beskrivning: " + quest.description; // Set the inner HTML of the p to the quest reward

infoRef.appendChild(questTitle)
infoRef.appendChild(questGiver)
infoRef.appendChild(questReward)
infoRef.appendChild(questLocation)
infoRef.appendChild(questDesc)

titleRef.innerHTML = quest.title

