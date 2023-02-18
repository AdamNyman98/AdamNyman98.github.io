//get parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const addPokemonToList = (pokemon, type) => {
    const pokemonDiv = document.createElement('div')
    pokemonDiv.classList.add('pokemonDiv')
    let environment; 

    if(type == "grass") environment = getGrass()
    else environment = getPc()
    

    const img = document.createElement('img')
    if(pokemon <= 649){
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon}.gif`
        img.classList.add('gif')
    } else {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`
        img.classList.add('img')
    }

    pokemonDiv.appendChild(img)
    pokemonDiv.appendChild(environment)
    pokemonList.appendChild(pokemonDiv)
} 

const getPc = () => {
    const pc = document.createElement('img')
    pc.src = "./pc.png"
    pc.classList.add('environment')
    return pc
}

const getGrass = () => {
    const grass = document.createElement('img')
    grass.src = "./grass.png"
    grass.classList.add('environment')
    return grass
}

//get pokemons from parameters and print
const pokemonList = document.querySelector("#pokemon-list");
const pokemon = urlParams.get('pokemon')
const pokemonArr = pokemon.split(',')

pokemonArr.forEach((pokemon) => {
    addPokemonToList(pokemon, "grass")
})


const pcPokemon = urlParams.get('pcPokemon')
const pokemonPcArr = pcPokemon.split(',')

if(pcPokemon != "0"){
    pokemonPcArr.forEach((pokemon) => {
        addPokemonToList(pokemon, "pc")
    })
}

//get trainer
const trainerPage = document.querySelector("#trainer-page")


const trainerName = urlParams.get('trainer')
const nameNode = document.createElement('p')
nameNode.classList.add('trainerName')
nameNode.textContent = trainerName

const imageUrl = urlParams.get('img')
const trainerImg = document.createElement('img')
trainerImg.classList.add('trainerImg')
trainerImg.src = imageUrl + '.png'

const color = urlParams.get('color')

trainerPage.appendChild(nameNode)
trainerPage.appendChild(trainerImg)
trainerPage.style.background = `#${color}`

