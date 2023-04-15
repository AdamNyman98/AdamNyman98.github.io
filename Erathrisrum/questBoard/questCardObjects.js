import createCard from "./createQuestCard.js"

const questMetaData = [
{
    title: "Retrieve the Lost Blueprint",
    id: 1,
    giver: "Professor Nikola",
    address: "address",
    reward: "500 gold pieces",
    category: "retrieve",
    district: "distrikt",
    description: "Professor Nikola's valuable blueprint for a new invention has gone missing. He needs someone to retrieve it before it falls into the wrong hands. The blueprint was last seen in the hands of a rival inventor, who is known to frequent the local tavern. Time is of the essence."
},
{
    title: "xx",
    id: 2,
    giver: "xx",
    address: "xx",
    reward: "xx",
    category: "investigate",
    district: "xx",
    description: "xx"
},
{
    title: "xx",
    id: 3,
    giver: "xx",
    address: "xx",
    reward: "xx",
    category: "hunt",
    district: "xx",
    description: "xx"
},
{
    title: "xx",
    id: 4,
    giver: "xx",
    address: "xx",
    reward: "xx",
    category: "deliver",
    district: "xx",
    description: "xx"
},
{
    title: "xx",
    id: 5,
    giver: "xx",
    address: "xx",
    reward: "xx",
    category: "protect",
    district: "xx",
    description: "xx"
},
{
    title: "xx",
    id: 6,
    giver: "xx",
    address: "xx",
    reward: "xx",
    category: "other",
    district: "xx",
    description: "xx"
}

]

export function getCards(){
    questMetaData.forEach(quest => createCard(quest))
}

export function getById(id){
    for(let i = 0; i < questMetaData.length; i++){
        if(questMetaData[i].id == id) return questMetaData[i]
    }
    return null
}

//export default getCards