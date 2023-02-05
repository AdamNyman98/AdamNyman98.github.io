import createCard from "./createQuestCard.js"

const questMetaData = [
{
    title: "Retrieve the Lost Blueprint",
    giver: "Professor Nikola",
    reward: "500 gold pieces",
    category: "retrieve"
},
{
    title: "xx",
    giver: "xx",
    reward: "xx",
    category: "investigate"
},
{
    title: "xx",
    giver: "xx",
    reward: "xx",
    category: "hunt"
},
{
    title: "xx",
    giver: "xx",
    reward: "xx",
    category: "deliver"
},
{
    title: "xx",
    giver: "xx",
    reward: "xx",
    category: "protect"
},
{
    title: "xx",
    giver: "xx",
    reward: "xx",
    category: "other"
}

]

const getCards = () => questMetaData.forEach(quest => createCard(quest))

export default getCards