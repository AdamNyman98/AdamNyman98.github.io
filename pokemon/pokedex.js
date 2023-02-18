const pokemonListContainer = document.querySelector("#pokemon-list-container");
      const pokemonImage = document.querySelector("#pokemon-image");
      const pokemonName = document.querySelector("#pokemon-name");
      const pokemonId = document.querySelector("#pokemon-id")
      const pokemonType = document.querySelector('#pokemon-type')
      const pokemonType2 = document.querySelector('#pokemon-type2')
      const pokemonWeight = document.querySelector('#pokemon-weight')
      const pokemonHeight = document.querySelector('#pokemon-height')

      const getPokemon = async (pokemon,index) => {
        if(pokemon === '???') return {index: index, name: '???', image: `./unknown.png`, id: '???', type: '???',type2: '???',weight: '???', height: '???'}
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await response.json()
        
        let nameArr = data.name.split("-")
        let name = nameArr[0]
        if(name == "mr" ) name += ". " + nameArr[1]
        if(name == "scream" || name == "great" || name == "slither" || name == "flutter") name += " " + nameArr[1]
        
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
        "???", //"bulbasaur",
        "???", //"ivysaur",
        "???", //"venusaur",
        "???", //"chikorita",
        "???", //"bayleef",
        "???", //"meganium",
        "???", //"turtwig",
        "???", //"grotle",
        "???", //"torterra",
        "???", //"chespin",
        "???", //"quilladin",
        "???", //"chesnaught",

        //fire
        "???", //"cyndaquil",
        "???", //"quilava",
        "???", //"typhlosion",
        "???", //"torchic",
        "???", //"combusken",
        "???", //"blaziken",
        "???", //"chimchar",
        "???", //"monferno",
        "???", //"infernape",
        "???", //"fennekin",
        "???", //"braixen",
        "???", //"delphox",
        "???", //"litten",
        "???", //"torracat",
        "???", //"incineroar",
        "???", //"scorbunny",
        "???", //"raboot",
        "???", //"cinderace",

        //water
        "???", //"squirtle",
        "???", //"wartortle",
        "???", //"blastoise",
        "???", //"totodile",
        "???", //"croconaw",
        "???", //"feraligatr",
        "???", //"mudkip",
        "???", //"marshtomp",
        "???", //"swampert",
        "???", //"oshawott",
        "???", //"dewott",
        "???", //"samurott-hisui",
        "???", //"froakie",
        "???", //"frogadier",
        "???", //"greninja",
        "???", //"popplio",
        "???", //"brionne",
        "???", //"primarina",

        //bugs
        "???", //"caterpie",
        "???", //"metapod",
        "???", //"butterfree",
        "???", //"weedle",
        "???", //"kakuna",
        "???", //"beedrill",
        "???", //"venonat",
        "???", //"venomoth",
        "???", //"cutiefly",
        "???", //"ribombee",

        //bird
        "???", //"pikipek",
        "???", //"trumbeak",
        "???", //"toucannon",
        "???", //"murkrow",
        "???", //"honchkrow",
        "???", //"swablu",
        "???", //"altaria",

        //normal
        "???", //"zigzagoon",
        "???", //"linoone",
        "???", //"stunky",
        "???", //"skuntank",
        "???", //"sentret",
        "???", //"furret",
        "???", //"skitty",
        "???", //"delcatty",
        "???", //"buneary",
        "???", //"lopunny",
        "???", //"wooloo",
        "???", //"dubwool",
        "???", //"swinub",
        "???", //"piloswine",
        "???", //"mamoswine",

        //pikachu variants
        "???", //"pikachu",
        "???", //"plusle",
        "???", //"minun",
        "???", //"pachirisu",
        "???", //"minccino",
        "???", //"dedenne",
        "???", //"778",

        //cave
        "???", //"noibat",
        "???", //"noivern",
        "???", //"morelull",
        "???", //"shiinotic",
        "???", //"purrloin",
        "???", //"liepard",
        //cave and variants
        "???", //"rattata-alola",
        "???", //"raticate-alola",
        "???", //"meowth-galar",
        "???", //"perrserker",
        "???", //"yamask-galar",
        "???", //"runerigus",
        
        //variants
        "???", //"growlithe-hisui",
        "???", //"arcanine-hisui",
        "???", //"petilil",
        "???", //"lilligant-hisui",
        "???", //"farfetchd-galar",
        "???", //"sirfetchd",
        "???", //"ponyta",
        "???", //"rapidash",
        "???", //"scream-tail",
        "???", //"great-tusk",
        "???", //"flutter-mane",
        "???", //"slither-wing",

        // plain 
        "???", //"eevee",
        "???", //"flareon",
        "???", //"jolteon",
        "???", //"vaporeon",
        "???", //"espeon",
        "???", //"umbreon",
        "???", //"leafeon",
        "???", //"glaceon",
        "???", //"sylveon",
        "???", //"munchlax",
        "???", //"snorlax",
        "???", //"cleffa",
        "???", //"clefairy",
        "???", //"clefable",
        "???", //"aipom",
        "???", //"ambipom",
        "???", //"mareep",
        "???", //"flaaffy",
        "???", //"ampharos",
        "???", //"doduo",
        "???", //"dodrio",
        "???", //"audino",
        "???", //"porygon",
        "???", //"porygon2",
        "???", //"474",
        "???", //"mawile",
        "???", //"ducklett",
        "???", //"wobbuffet",  
        "???", //"milcery",
        "???", //"alcremie",
        "???", //"numel",
        "???", //"camerupt",
        "???", //"ditto",

        //water
        "???", //"magikarp",
        "???", //"gyarados",
        "???", //"feebas",
        "???", //"milotic",
        "???", //"psyduck",
        "???", //"golduck",
        "???", //"slowpoke",
        "???", //"slowbro",
        "???", //"slowking",
        "???", //"poliwag",
        "???", //"poliwhirl",
        "???", //"poliwrath",
        "???", //"spheal",
        "???", //"sealeo",
        "???", //"wooper",
        "???", //"quagsire",
        "???", //"lapras",

        //fighting
        "???", //"tyrogue",
        "???", //"hitmonlee",
        "???", //"hitmonchan",
        "???", //"hitmontop",
        "???", //"makuhita",
        "???", //"hariyama",
        "???", //"clobbopus",
        "???", //"grapploct",
        
        //ghost
        "???", //"frillish",
        "???", //"phantump",
        "???", //"trevenant",
        "???", //"710",
        "???", //"711",
        "???", //"marshadow",
        "???", //"drifloon",
        "???", //"drifblim",
        //variant ghost
        "???", //"cubone",
        "???", //"marowak-alola",
      
        //psychic
        "???", //"ralts",
        "???", //"kirlia",
        "???", //"gardevoir",
        "???", //"gallade",
        "???", //"oranguru",
        "???", //"cresselia",
        "???", //"hatenna",
        "???", //"hattrem",
        "???", //"hatterene",
        "???", //"chingling",
        "???", //"chimecho",
      
        //ice
        "???", //"875",
        //ice variants
        "???", //"mr-mime-galar",
        "???", //"mr-rime",
        "???", //"vulpix-alola",
        "???", //"ninetales-alola",
        "???", //"sandshrew-alola",
        "???", //"sandslash-alola",

        //fossil
        "???", //"amaura",
        "???", //"aurorus",
        "???", //"tyrunt",
        "???", //"tyrantrum",
        "???", //"cranidos",
        "???", //"rampardos",
        "???", //"aerodactyl",
        
        //grass
        "???", //"oddish",
        "???", //"gloom",
        "???", //"vileplume",
        "???", //"bellossom",
        "???", //"applin",
        "???", //"flapple",
        "???", //"appletun",
        "???", //"skiddo",
        "???", //"gogoat",
        
        "???", //"deerling",
        "???", //"sawsbuck",
        "???", //"cherubi",
        "???", //"cherrim",
        "???", //"budew",
        "???", //"roselia",
        "???", //"roserade",
        "???", //"bounsweet",
        "???", //"steenee",
        "???", //"tsareena",
        "???", //"hoppip",
        "???", //"skiploom",
        "???", //"jumpluff",
        "???", //"swadloon",
        "???", //"sewaddle",
        "???", //"leavanny",
        "???", //"cottonee",
        "???", //"whimsicott",
      
        //dragons
        "???", //"drampa",
        "???", //"dreepy",
        "???", //"drakloak",
        "???", //"dragapult",
        "???", //"dratini",
        "???", //"dragonair",
        "???", //"dragonite",

        //legendary
        "???", //"492",

        "???", //"latias",
        "???", //"latios",

        "???", //"celebi",
        "???", //"jirachi",
        "???", //"mew",
        "???", //"uxie",

        //extended
        /*
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
        "rapidash-galar",
        "slowpoke-galar",
        "slowbro-galar",
        "slowking-galar",
        "farfetchd",
        "jigglypuff",
        "phanpy",
        "donphan",
        "misdreavus",
        "mismagius",
        "larvesta",
        "volcarona",
        "yamask",
        "cofagrigus",
        "zigzagoon-galar",
        "linoone-galar",
        "obstagoon",
        "sandshrew",
        "sandslash",
        "rattata",
        "raticate",
        "vulpix",
        "ninetales",*/
]

      const pokemonIds2 = [
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
        "caterpie",
        "metapod",
        "butterfree",
        "weedle",
        "kakuna",
        "beedrill",
        "venonat",
        "venomoth",
        "cutiefly",
        "ribombee",

        //bird
        "pikipek",
        "trumbeak",
        "toucannon",
        "murkrow",
        "honchkrow",
        "swablu",
        "altaria",

        //normal
        "zigzagoon",
        "linoone",
        "stunky",
        "skuntank",
        "sentret",
        "furret",
        "skitty",
        "delcatty",
        "buneary",
        "lopunny",
        "wooloo",
        "dubwool",
        "swinub",
        "piloswine",
        "mamoswine",

        //pikachu variants
        "pikachu",
        "plusle",
        "minun",
        "pachirisu",
        "minccino",
        "dedenne",
        "778",

        //cave
        "noibat",
        "noivern",
        "morelull",
        "shiinotic",
        "purrloin",
        "liepard",
        //cave and variants
        "rattata-alola",
        "raticate-alola",
        "meowth-galar",
        "perrserker",
        "yamask-galar",
        "runerigus",
        
        //variants
        "growlithe-hisui",
        "arcanine-hisui",
        "petilil",
        "lilligant-hisui",
        "farfetchd-galar",
        "sirfetchd",
        "ponyta",
        "rapidash",
        "scream-tail",
        "great-tusk",
        "flutter-mane",
        "slither-wing",

        // plain 
        "eevee",
        "flareon",
        "jolteon",
        "vaporeon",
        "espeon",
        "umbreon",
        "leafeon",
        "glaceon",
        "sylveon",
        "munchlax",
        "snorlax",
        "cleffa",
        "clefairy",
        "clefable",
        "aipom",
        "ambipom",
        "mareep",
        "doduo",
        "dodrio",
        "audino",
        "porygon",
        "porygon2",
        "474",
        "mawile",
        "ducklett",
        "wobbuffet",  
        "milcery",
        "alcremie",
        "numel",
        "camerupt",
        "ditto",

        //water
        "magikarp",
        "gyarados",
        "feebas",
        "milotic",
        "psyduck",
        "golduck",
        "slowpoke",
        "slowbro",
        "slowking",
        "poliwag",
        "poliwhirl",
        "poliwrath",
        "spheal",
        "sealeo",
        "wooper",
        "quagsire",
        "lapras",

        //fighting
        "tyrogue",
        "hitmonlee",
        "hitmonchan",
        "hitmontop",
        "makuhita",
        "hariyama",
        "clobbopus",
        "grapploct",
        
        //ghost
        "frillish",
        "phantump",
        "trevenant",
        "710",
        "711",
        "marshadow",
        "drifloon",
        "drifblim",
        //variant ghost
        "cubone",
        "marowak-alola",
      
        //psychic
        "ralts",
        "kirlia",
        "gardevoir",
        "gallade",
        "oranguru",
        "cresselia",
        "hatenna",
        "hattrem",
        "hatterene",
        "chingling",
        "chimecho",
      
        //ice
        "875",
        //ice variants
        "mr-mime-galar",
        "mr-rime",
        "vulpix-alola",
        "ninetales-alola",
        "sandshrew-alola",
        "sandslash-alola",

        //fossil
        "amaura",
        "aurorus",
        "tyrunt",
        "tyrantrum",
        "cranidos",
        "rampardos",
        "aerodactyl",
        
        //grass
        "oddish",
        "gloom",
        "vileplume",
        "bellossom",
        "applin",
        "flapple",
        "appletun",
        "skiddo",
        "gogoat",
        
        "deerling",
        "sawsbuck",
        "cherubi",
        "cherrim",
        "budew",
        "roselia",
        "roserade",
        "bounsweet",
        "steenee",
        "tsareena",
        "hoppip",
        "skiploom",
        "jumpluff",
        "swadloon",
        "sewaddle",
        "leavanny",
        "cottonee",
        "whimsicott",
      
        //dragons
        "drampa",
        "dreepy",
        "drakloak",
        "dragapult",
        "dratini",
        "dragonair",
        "dragonite",

        //legendary
        "492",

        "latias",
        "latios",

        "celebi",
        "jirachi",
        "mew",
        "uxie",

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
        "rapidash-galar",
        "slowpoke-galar",
        "slowbro-galar",
        "slowking-galar",
        "farfetchd",
        "jigglypuff",
        "phanpy",
        "donphan",
        "misdreavus",
        "mismagius",
        "larvesta",
        "volcarona",
        "yamask",
        "cofagrigus",
        "zigzagoon-galar",
        "linoone-galar",
        "obstagoon",
        "sandshrew",
        "sandslash",
        "rattata",
        "raticate",
        "vulpix",
        "ninetales",
      ]

      await Promise.all(pokemonIds.map( async (id,index) => {
        pokemons.push(await getPokemon(id,index))
      }))

      pokemons.sort((a,b) => {return a.index-b.index})

      displayPokemonList(pokemons);
      displayPokemon(pokemons[0]);