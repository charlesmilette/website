(function () {

	var themesArray = ["3024Day", "3024Night", "AdventureTime", "Afterglow", "AlienBlood", "Argonaut", "Arthur", "AtelierSulphurpool", "Atom", "AtomOneLight", "ayu", "ayu_light", "Batman", "BelafonteDay", "BelafonteNight", "BirdsOfParadise", "Blazer", "BlulocoDark", "BlulocoLight", "Borland", "BrightLights", "Broadcast", "Brogrammer", "C64", "Chalkboard", "Chalk", "Ciapre", "CLRS", "Cobalt2", "CobaltNeon", "CrayonPonyFish", "DarkPastel", "Darkside", "deep", "Desert", "DimmedMonokai", "DotGov", "Dracula", "DuotoneDark", "Earthsong", "Elemental", "Elementary", "ENCOM", "Espresso", "EspressoLibre", "Fideloper", "FirefoxDev", "Firewatch", "FishTank", "Flat", "Flatland", "Floraverse", "ForestBlue", "FrontEndDelight", "FunForrest", "Galaxy", "Github", "Glacier", "Grape", "Grass", "GruvboxDark", "Hacktober", "Hardcore", "Harper", "Highway", "HipsterGreen", "Homebrew", "Hurtado", "Hybrid", "IC_Green_PPL", "IC_Orange_PPL", "idleToes", "IR_Black", "JackieBrown", "Japanesque", "Jellybeans", "JetBrainsDarcula", "Kibble", "LaterThisEvening", "Lavandula", "LiquidCarbon", "LiquidCarbonTransparent", "LiquidCarbonTransparentInverse", "ManPage", "MaterialDark", "Material", "Mathias", "Medallion", "Misterioso", "Molokai", "MonaLisa", "MonokaiSoda", "MonokaiVivid", "N0tch2k", "Neopolitan", "Neutron", "NightLionv1", "NightLionv2", "Novel", "Obsidian", "Ocean", "OceanicMaterial", "Ollie", "OneHalfDark", "OneHalfLight", "Pandora", "ParaisoDark", "ParasioDark", "PaulMillr", "PencilDark", "PencilLight", "PiattoLight", "Pnevma", "Pro", "ProLight", "RedAlert", "RedPlanet", "RedSands", "Rippedcasts", "Royal", "Ryuuko", "SeafoamPastel", "SeaShells", "Seti", "Shaman", "Slate", "Smyck", "Snazzy", "SoftServer", "SolarizedDarcula", "SolarizedDark", "SolarizedDarkHigherContrast", "SolarizedDark-Patched", "SolarizedLight", "Spacedust", "SpaceGray", "SpaceGrayEightiesDull", "SpaceGrayEighties", "Spiderman", "Spring", "Square", "Sundried", "Symfonic", "synthwave", "TangoAdapted", "TangoHalfAdapted", "Teerb", "TerminalBasic", "ThayerBright", "TheHulk", "Tomorrow", "TomorrowNightBlue", "TomorrowNightBright", "TomorrowNight", "TomorrowNightEighties", "ToyChest", "Treehouse", "Twilight", "Ubuntu", "UnderTheSea", "Urple", "Vaughn", "VibrantInk", "VioletDark", "VioletLight", "WarmNeon", "Wez", "WildCherry", "Wombat", "Wryan", "Zenburn"];
	var columnToAdd = 1;
	var elementsArray = [];

	document.getElementById("total-number").textContent = themesArray.length;
	themesArray.sort(function (a, b) {
		return a.localeCompare(b, {'sensitivity': 'base'});
	});

	// Auto-gen
	themesArray.forEach(function (theme) {
		if (columnToAdd > 3)
			columnToAdd = 1;

		var imageFile = 'img/' + theme + '.png';

		var card = document.createElement("a");
		card.href = imageFile;

		var thumbnail = document.createElement("img");
		thumbnail.src = 'img/bw-placeholder.png';
		thumbnail.setAttribute('data-src', imageFile);
		thumbnail.className = "lazyload";

		var name = document.createElement("h3");
		name.textContent = theme;

		card.appendChild(thumbnail);
		card.appendChild(name);
		document.getElementById('pics-' + columnToAdd).appendChild(card);

		elementsArray.push(card);
		columnToAdd++;
	}, this);
	
	new LuminousGallery(elementsArray);

})();