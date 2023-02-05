const pokemonListContainer = document.querySelector("#pokemon-list-container");
      const pokemonImage = document.querySelector("#pokemon-image");
      const pokemonName = document.querySelector("#pokemon-name");
      const pokemonId = document.querySelector("#pokemon-id")
      const pokemonType = document.querySelector('#pokemon-type')
      const pokemonType2 = document.querySelector('#pokemon-type2')
      const pokemonWeight = document.querySelector('#pokemon-weight')
      const pokemonHeight = document.querySelector('#pokemon-height')

      const getPokemon = async (pokemon,index) => {
        if(pokemon === '???') return {index: index, name: '???', image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png`, id: '???', type: '???',type2: '???',weight: '???', height: '???'}
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await response.json()
        const name = data.name
        const id = data.id
        const type = data.types[0].type.name
        let type2
        if(data.types.length > 1){
          type2 = data.types[1].type.name
        }
        else {
          type2 = ""
        }
        const weight = data.weight + ' kg'
        const height = data.height / 10 + ' m'
        const img = data.sprites.other['official-artwork'].front_default
        
        return {
            index: index,
            name: name,
            image: img,
            id: index + 1,
            type: type,
            type2: type2,
            weight: weight,
            height: height,
        }
    }

      function displayPokemon(pokemon) {
        pokemonImage.src = pokemon.image;
        pokemonName.textContent = pokemon.name;
        pokemonId.textContent = pokemon.id;
        pokemonType.textContent = pokemon.type
        if(pokemonType.classList.length > 1){
          const oldType = pokemonType.classList[1] 
          pokemonType.classList.remove(oldType)
          pokemonType.classList.add(pokemon.type)
        } 
        else pokemonType.classList.add(pokemon.type)

        pokemonType2.textContent = pokemon.type2
        
        if(pokemon.type2 === '') pokemonType2.style.display = "none";
        else {pokemonType2.style.display = "inline-block";
          if(pokemonType2.classList.length > 1){
            const oldType = pokemonType2.classList[1] 
            pokemonType2.classList.remove(oldType)
            pokemonType2.classList.add(pokemon.type2)
          } 
          else pokemonType2.classList.add(pokemon.type2);
        }

        pokemonWeight.textContent = pokemon.weight
        pokemonHeight.textContent = pokemon.height
      }

      function displayPokemonList(pokemons) {
        pokemons.forEach(pokemon => {
          const pokemonItem = document.createElement("div");
          pokemonItem.innerHTML = pokemon.name;
          pokemonItem.classList.add("pokemon-item");
          pokemonItem.addEventListener("click", () => {
            displayPokemon(pokemon);
            pokemonListContainer.querySelectorAll(".pokemon-item").forEach(item => {
              item.classList.remove("selected");
            });
            pokemonItem.classList.add("selected");
          });
          pokemonListContainer.appendChild(pokemonItem);
        });
      }

      
      const pokemons = [];
      const pokemonIds = [
        //starters
        //leaf
        "bulbasaur",
        "ivysaur",
        "venusaur",
        "chikorita",
        "bayleef",
        "meganium",
        "turtwig",
        "grotle",
        "torterra",
        "chespin",
        "quilladin",
        "chesnaught",

        //fire
        "cyndaquil",
        "quilava",
        "typhlosion",
        "torchic",
        "combusken",
        "blaziken",
        "chimchar",
        "monferno",
        "infernape",
        "fennekin",
        "braixen",
        "delphox",
        "litten",
        "torracat",
        "incineroar",
        "scorbunny",
        "raboot",
        "cinderace",

        //water
        "squirtle",
        "wartortle",
        "blastoise",
        "totodile",
        "croconaw",
        "feraligatr",
        "mudkip",
        "marshtomp",
        "swampert",
        "oshawott",
        "dewott",
        "samurott-hisui",
        "froakie",
        "frogadier",
        "greninja",
        "popplio",
        "brionne",
        "primarina",

        //bugs
        "cutiefly",

        //variants
        "growlithe-hisui",
        "arcanine-hisui",
        "petilil",
        "lilligant-hisui",

        "meowth-galar",
        "perrserker",
        "scream-tail",
        "great-tusk",
        "flutter-mane",
        "slither-wing",
        "farfetchd-galar",
        "sirfetchd",
        "mr-mime-galar",
        "mr-rime",
        "yamask-galar",
        "runerigus",

        "vulpix-alola",
        "ninetales-alola",
        "sandshrew-alola",
        "sandslash-alola",
        "rattata-alola",
        "raticate-alola",
        "cubone",
        "marowak-alola",

        //klassiker
        "eevee",
        "munchlax",
        "snorlax",
        "aipom",
        "ambipom",
        "wooper",
      
      "skitty",
      "sentret",
      "buneary",
      "zigzagoon",
      "doduo",
      "wooloo",
      "stunky",

      "audino",
      "minccino",
      "648",
      
      "porygon",
      "purrloin",
      
      "tyrogue",
      "makuhita",
      "clobbopus",
      "dratini",
      "latias",
      "latios",
      "drampa",
      "dreepy",
      "778",
      
      "frillish",
      
      
      "uxie",
      "oranguru",
      "ralts",
      "hatenna",
      "cresselia",
      
      
      "cleffa",
      "mawile",
      "dedenne",
      "zacian",
      "milcery",
      "psyduck",
      "slowpoke",
      "lapras",
      
      "wooper",
      
      "feebas",
      
      
      "phantump",
      "710",
      "applin",
      "skiddo",
      
      "492",
      "deerling",
      "morelull",
      "cherubi",
      "budew",
      
      "bounsweet",
      
      
      
      "pikachu",
      "plusle",
      "minun",
      "dedenne",
      "mareep",
      "pachirisu",
      
      
      "numel",
      "murkrow",
      "hoppip",
      "swablu",
      "noibat",
      "pikipek",
      "swinub",
      "amaura",
      "875",
      
      "swadloon",
      "marshadow",
      "chingling",
      "drifloon",
      "cottonee",
      
      "ducklett",
      "wobbuffet",  
      
      "oddish",
      "ditto",
      "poliwag",
      "spheal",
      
      //legendary
      "celebi",
      "jirachi",
      "mew",
      "kyogre",

      //extended
      "meowth",
      "persian",
      "meowth-alola",
      "persian-alola",
      "marowak",
      "samurott",
      "typhlosion-hisui",
      "lilligant",
      "growlithe",
      "arcanine",
      "ponyta-galar",
      "slowpoke-galar",
      "farfetchd",
      "jigglypuff",
      "phanpy",
      "misdreavus",
      "larvesta",
      "volcarona",
      "yamask",
      "zigzagoon-galar",
      "linoone-galar",
      "obstagoon",
      "sandshrew",
      "rattata",
      "raticate",
      "vulpix",
      "ninetales",
      '???',]

      await Promise.all(pokemonIds.map( async (id,index) => {
        pokemons.push(await getPokemon(id,index))
      }))

      pokemons.sort((a,b) => {return a.index-b.index})

      displayPokemonList(pokemons);
      displayPokemon(pokemons[0]);

      /*
      "indeedee"
      "eevee",
      "aipom",
      "snorlax",
      "skitty",
      "sentret",
      "buneary",
      "doduo",
      "porygon",
      "audino",
      "minccino",
      "648",
      "meowth",
      "wooloo",
      "tandemaus",
      "zigzagoon",
      "purrloin",
      "stunky",
      "tyrogue",
      "makuhita",
      "clobbopus",
      "dratini",
      "latias",
      "latios",
      "drampa",
      "tatsugiri",
      "dreepy",
      "778",
      "misdreavus",
      "frillish",
      "yamask",
      "jirachi",
      "uxie",
      "oranguru",
      "ralts",
      "hatenna",
      "cresselia",
      "mew",
      "jigglypuff",
      "cleffa",
      "mawile",
      "dedenne",
      "zacian",
      "milcery",
      "tinkatink",
      "psyduck",
      "slowpoke",
      "lapras",
      "totodile",
      "wooper",
      "mudkip",
      "feebas",
      "kyogre",
      "oshawott",
      "froakie",
      "wiglett",
      "bulbasaur",
      "chikorita",
      "phantump",
      "710",
      "applin",
      "toedscool", 
      "skiddo",
      "celebi",
      "906",
      "492",
      "deerling",
      "morelull",
      "cherubi",
      "budew",
      "petilil",
      "bounsweet",
      "cyndaquil",
      "growlithe",
      "torchic",
      "fennekin",
      "litten",
      "scorbunny",
      "charcadet",
      "chimchar",
      "pikachu",
      "plusle",
      "minun",
      "dedenne",
      "pawmi",
      "tadbulb",
      "mareep",
      "pachirisu",
      "cubone",
      "wooper",
      "phanpy",
      "numel",
      "murkrow",
      "hoppip",
      "swablu",
      "noibat",
      "pikipek",
      "swinub",
      "amaura",
      "875",
      "larvesta",
      "cutiefly",
      "swadloon",]*/