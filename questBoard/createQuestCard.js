 
const createCard = (quest) => {
  // Create a new div element for the quest card
  var questCard = document.createElement("div");
  questCard.classList.add("quest-card", quest.category); // Add the "quest-card" and category class to the div
  
  // Create a new h2 element for the quest title
  var questTitle = document.createElement("h2");
  questTitle.classList.add("quest-title"); // Add the "quest-title" class to the h2
  questTitle.innerHTML = quest.title; // Set the inner HTML of the h2 to the quest title
  
  // Create a new p element for the quest giver
  var questGiver = document.createElement("p");
  questGiver.classList.add("quest-giver"); // Add the "quest-giver" class to the p
  questGiver.innerHTML = "Given by: " + quest.giver; // Set the inner HTML of the p to the quest giver
  
  // Create a new p element for the quest reward
  var questReward = document.createElement("p");
  questReward.classList.add("quest-reward"); // Add the "quest-reward" class to the p
  questReward.innerHTML = "Reward: " + quest.reward; // Set the inner HTML of the p to the quest reward
  
  // Create a new a element for the "Learn More" link
  var questLink = document.createElement("a");
  questLink.classList.add("quest-link"); // Add the "quest-link" class to the a
  questLink.innerHTML = "Learn More"; // Set the inner HTML of the a to "Learn More"
  questLink.href = "quest-info.html"; // Set the href of the a to the link for the quest information
  
  // Append the h2, p, and a elements to the div
  questCard.appendChild(questTitle);
  questCard.appendChild(questGiver);
  questCard.appendChild(questReward);
  questCard.appendChild(questLink);
  
  // Append the div to the quest board
  document.getElementById("quest-board").appendChild(questCard);
}

export default createCard
