//get parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//get pokemons from parameters and print
const pokemonList = document.querySelector("#pokemon-list");
const pokemon = urlParams.get('pokemon')
const pokemonArr = pokemon.split(',')

pokemonArr.forEach((pokemon) => {
    const pokemonDiv = document.createElement('div')
    pokemonDiv.classList.add('pokemonDiv')

    const grass = document.createElement('img')
    grass.src = "./grass.png"
    grass.classList.add('grass')

    const img = document.createElement('img')
    if(pokemon <= 649){
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon}.gif`
        img.classList.add('gif')
    } else {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`
        img.classList.add('img')
    }

    pokemonDiv.appendChild(grass)
    pokemonDiv.appendChild(img)
    pokemonList.appendChild(pokemonDiv)
})

//get trainer
const trainerPage = document.querySelector("#trainer-page")
const trainerName = urlParams.get('trainer')
const trainerDiv = document.createElement('div')

const nameNode = document.createElement('p')
nameNode.classList.add('trainerName')
nameNode.textContent = trainerName

trainerPage.appendChild(nameNode)