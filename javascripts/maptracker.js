var monnames = [
//   1              2              3            4             5            6            7             8            9             0
"Bulbasaur",  "Ivysaur",    "Venusaur",   "Charmander", "Charmeleon", "Charizard", "Squirtle",   "Wartortle", "Blastoise",  "Caterpie",
"Metapod",    "Butterfree", "Weedle",     "Kakuna",     "Beedrill",   "Pidgey",    "Pidgeotto",  "Pidgeot",   "Rattata",    "Raticate",
"Spearow",    "Fearow",     "Ekans",      "Arbok",      "Pikachu",    "Raichu",    "Sandshrew",  "Sandslash", "Nidoran♀",   "Nidorina",
"Nidoqueen",  "Nidoran♂",   "Nidorino",   "Nidoking",   "Clefairy",   "Clefable",  "Vulpix",     "Ninetales", "Jigglypuff", "Wigglytuff",
"Zubat",      "Golbat",     "Oddish",     "Gloom",      "Vileplume",  "Paras",     "Parasect",   "Venonat",   "Venomoth",   "Diglett",
"Dugtrio",    "Meowth",     "Persian",    "Psyduck",    "Golduck",    "Mankey",    "Primeape",   "Growlithe", "Arcanine",   "Poliwag",
"Poliwhirl",  "Poliwrath",  "Abra",       "Kadabra",    "Alakazam",   "Machop",    "Machoke",    "Machamp",   "Bellsprout", "Weepinbell",
"Victreebel", "Tentacool",  "Tentacruel", "Geodude",    "Graveler",   "Golem",     "Ponyta",     "Rapidash",  "Slowpoke",   "Slowbro",
"Magnemite",  "Magneton",   "Farfetch'd", "Doduo",      "Dodrio",     "Seel",      "Dewgong",    "Grimer",    "Muk",        "Shellder",
"Cloyster",   "Gastly",     "Haunter",    "Gengar",     "Onix",       "Drowzee",   "Hypno",      "Krabby",    "Kingler",    "Voltorb",
"Electrode",  "Exeggcute",  "Exeggutor",  "Cubone",     "Marowak",    "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing",    "Weezing",
"Rhyhorn",    "Rhydon",     "Chansey",    "Tangela",    "Kangaskhan", "Horsea",    "Seadra",     "Goldeen",   "Seaking",    "Staryu",
"Starmie",    "Mr. Mime",   "Scyther",    "Jynx",       "Electabuzz", "Magmar",    "Pinsir",     "Tauros",    "Magikarp",   "Gyarados",
"Lapras",     "Ditto",      "Eevee",      "Vaporeon",   "Jolteon",    "Flareon",   "Porygon",    "Omanyte",   "Omastar",    "Kabuto",
"Kabutops",   "Aerodactyl", "Snorlax",    "Articuno",   "Zapdos",     "Moltres",   "Dratini",    "Dragonair", "Dragonite",  "Mewtwo",
"Mew"];

// Set list

var CaveMons = [20,[18,49],[19,49],[17,49],[20,49],[16,49],[15,49],[21,49],[22,49],[29,50],[31,50]];
var LastIslandMons = [12,[80,41],[82,19],[88,39],[80,124],[87,23],[88,70],[88,93],[89,56],[89,64],[90,131]];
var MansionMons1 = [10,[52,108],[50,108],[54,76],[50,76],[54,57],[52,76],[50,87],[52,76],[53,109],[54,88]];
var MansionMons2 = [10,[55,57],[55,76],[55,36],[55,104],[55,109],[55,125],[55,88],[55,96],[55,92],[55,66]];
var MansionMons3 = [10,[60,37],[60,58],[60,77],[60,125],[60,23],[60,109],[60,111],[60,104],[60,75],[60,135]];
var MansionMonsB1 = [10,[62,48],[62,121],[62,88],[62,56],[62,75],[62,109],[62,102],[62,113],[62,88],[62,125]];
var MoonMons1 = [10,[17,94],[17,73],[17,40],[17,26],[17,103],[17,24],[17,38],[17,34],[17,29],[17,32]];
var MoonMonsB1 = [10,[18,49],[18,87],[18,108],[18,22],[18,47],[18,42],[18,68],[18,38],[18,34],[18,78]];
var MoonMonsB2 = [10,[19,65],[19,110],[19,103],[19,73],[19,40],[19,49],[19,94],[19,26],[19,53],[19,131]];
var TowerMons3 = [10,[50,91],[50,92],[50,91],[50,92],[50,91],[50,92],[50,91],[50,103],[50,104],[50,92]];
var TowerMons4 = [10,[50,23],[50,88],[50,109],[50,91],[50,91],[50,92],[50,92],[55,103],[55,103],[50,92]];
var TowerMons5 = [10,[55,92],[55,92],[55,92],[55,91],[55,91],[55,91],[55,92],[55,103],[55,103],[55,91]];
var TowerMons6 = [15,[55,92],[55,104],[55,23],[55,88],[55,91],[55,92],[55,92],[55,103],[57,109],[57,93]];
var TowerMons7 = [15,[61,91],[57,91],[59,91],[56,91],[60,91],[58,92],[55,103],[57,103],[58,92],[59,92]];
var PowerPlantMons = [10,[60,100],[60,81],[60,25],[60,127],[60,112],[60,121],[65,80],[60,81],[65,99],[60,124]];
var TunnelMonsB1 = [15,[36,110],[36,125],[36,36],[36,76],[36,74],[36,40],[36,27],[36,65],[36,94],[36,114]];
var TunnelMonsB2 = [15,[37,41],[37,56],[37,104],[37,66],[37,125],[37,109],[37,88],[37,23],[37,94],[37,75]];
var Route1Mons = [25,[4,20],[4,51],[3,83],[4,15],[3,24],[4,42],[4,68],[3,103],[3,113],[4,101]];
var Route10Mons = [15,[35,99],[35,124],[35,80],[35,24],[35,27],[35,29],[35,110],[35,36],[35,41],[35,134]];
var Route11Mons = [15,[18,45],[18,51],[18,113],[18,95],[18,20],[18,123],[18,79],[18,101],[18,126],[18,131]];
var Route12Mons = [15,[38,44],[38,14],[38,46],[38,48],[38,52],[38,116],[38,89],[38,85],[38,94],[38,111]];
var Route13Mons = [20,[40,48],[40,70],[40,17],[40,84],[40,88],[40,109],[40,23],[40,122],[40,43],[40,81]];
var Route14Mons = [15,[42,56],[42,50],[42,125],[42,21],[42,52],[42,11],[42,113],[42,114],[42,107],[42,142]];
var Route15Mons = [15,[40,60],[40,97],[40,123],[40,46],[40,104],[40,58],[40,54],[40,66],[40,17],[40,64]];
var Route16Mons = [25,[40,75],[40,30],[40,33],[40,53],[40,59],[40,18],[40,110],[40,84],[40,78],[40,105]];
var Route17Mons = [25,[41,23],[41,109],[41,41],[41,96],[41,121],[41,122],[41,109],[41,19],[41,88],[40,106]];
var Route18Mons = [25,[43,84],[43,21],[43,17],[43,82],[43,52],[43,48],[43,14],[43,11],[43,45],[43,120]];
var Route2Mons = [25,[5,59],[6,38],[5,22],[6,28],[5,31],[5,87],[6,18],[5,3],[5,6],[5,0]];
var Route21Mons = [21,[62,90],[62,118],[32,116],[62,86],[52,54],[32,120],[52,98],[42,72],[32,71],[42,133]];
var Route21WMons = [18,[20,117],[20,119],[20,85],[20,97],[20,115],[30,128],[30,89],[30,53],[30,71],[30,72]];
var Route22Mons = [25,[5,42],[5,31],[5,22],[5,108],[5,87],[5,36],[5,20],[5,83],[5,24],[5,28]];
var Route23Mons = [10,[71,33],[71,30],[71,21],[71,78],[71,131],[71,84],[71,88],[71,127],[71,126],[71,112]];
var Route24Mons = [17,[18,57],[18,36],[18,76],[18,45],[18,65],[18,62],[18,42],[18,15],[18,82],[18,80]];
var Route25Mons = [15,[20,79],[20,55],[20,95],[20,68],[20,47],[20,103],[20,101],[20,124],[20,125],[20,122]];
var Route3Mons = [20,[8,62],[8,55],[7,65],[7,89],[5,132],[8,53],[8,119],[8,115],[8,99],[7,136]];
var Route4Mons = [20,[10,97],[10,78],[10,95],[10,82],[10,20],[10,131],[10,83],[10,113],[12,15],[10,22]];
var Route5Mons = [15,[19,87],[19,146],[19,20],[19,83],[19,55],[19,68],[19,32],[19,29],[19,115],[19,43]];
var Route6Mons = [15,[20,47],[20,16],[20,21],[20,60],[20,57],[20,76],[20,45],[20,69],[20,97],[15,15]];
var Route7Mons = [15,[27,125],[27,124],[27,121],[27,66],[27,23],[27,88],[27,126],[27,122],[27,104],[27,87]];
var Route8Mons = [15,[32,127],[32,39],[32,35],[32,129],[32,27],[32,63],[32,25],[32,114],[32,112],[32,131]];
var Route9Mons = [15,[33,103],[33,45],[33,128],[33,99],[33,65],[33,51],[33,108],[33,126],[33,69],[33,147]];
var ZoneMons1 = [30,[50,52],[50,107],[50,82],[50,102],[50,136],[50,7],[50,126],[50,122],[50,114],[50,127]];
var ZoneMons2 = [30,[50,129],[50,111],[50,70],[50,125],[50,124],[50,1],[50,88],[50,48],[50,121],[50,112]];
var ZoneMons3 = [30,[50,75],[50,67],[50,64],[50,4],[50,61],[50,131],[50,44],[50,70],[50,123],[50,114]];
var ZoneMonsCenter = [30,[50,56],[50,109],[50,78],[50,94],[50,50],[50,100],[50,54],[50,81],[50,122],[50,112]];
var IslandMons1 = [15,[40,85],[40,78],[40,89],[40,115],[45,115],[41,40],[49,41],[38,53],[35,89],[38,54]];
var IslandMonsB1 = [10,[50,120],[50,116],[50,90],[50,118],[50,78],[50,85],[50,139],[50,54],[50,86],[50,137]];
var IslandMonsB2 = [10,[57,85],[57,78],[57,137],[57,78],[57,115],[57,119],[57,139],[57,89],[57,41],[57,79]];
var IslandMonsB3 = [10,[65,78],[65,85],[65,78],[65,138],[65,115],[65,89],[65,115],[65,140],[65,116],[65,86]];
var IslandMonsB4 = [10,[70,115],[70,89],[70,140],[70,89],[70,78],[70,85],[70,78],[70,138],[70,79],[70,41]];
var DungeonMons1 = [10,[80,41],[80,96],[80,81],[80,88],[80,48],[80,23],[80,67],[80,46],[80,25],[80,124]];
var DungeonMons2 = [15,[80,84],[80,48],[80,64],[80,111],[80,104],[80,100],[80,112],[80,39],[80,131],[80,148]];
var DungeonMonsB1 = [16,[85,111],[85,104],[85,100],[85,112],[85,46],[85,25],[85,23],[85,93],[85,27],[88,131]];
var PlateauMons1 = [15,[80,66],[80,74],[80,41],[80,5],[80,110],[80,111],[80,104],[80,50],[80,75],[80,67]];
var PlateauMons2 = [10,[80,65],[80,73],[80,2],[80,94],[80,103],[80,49],[80,110],[80,41],[80,104],[80,75]];
var PlateauMons3 = [15,[81,94],[81,114],[81,41],[81,8],[81,48],[81,75],[81,67],[81,104],[81,35],[81,112]];
var ForestMons = [8,[5,47],[5,9],[5,12],[5,49],[4,62],[6,13],[6,10],[5,36],[5,53],[5,0]];
var WaterMons = [5,[20,71],[20,72],[20,54],[20,120],[20,116],[20,128],[20,129],[20,86],[20,78],[20,71]];

// Map list

var maps = [
["Route 1",Route1Mons],["Route 2",Route2Mons],["Route 3",Route3Mons],["Route 4",Route4Mons],["Route 5",Route5Mons],
["Route 6",Route6Mons],["Route 7",Route7Mons],["Route 8",Route8Mons],["Route 9",Route9Mons],["Route 10",Route10Mons],
["Route 11",Route11Mons],["Route 12",Route12Mons],["Route 13",Route13Mons],["Route 14",Route14Mons],["Route 15",Route15Mons],
["Route 16",Route16Mons],["Route 17",Route17Mons],["Route 18",Route18Mons],["Route 19",WaterMons],["Route 20",WaterMons],
["Route 21|Grass",Route21Mons],["|Water",Route21WMons],["Route 22",Route22Mons],["Route 23",Route23Mons],["Route 24",Route24Mons],
["Route 25",Route25Mons],["Viridian Forest",ForestMons],["Mt. Moon|1F",MoonMons1],["|B1F",MoonMonsB1],["|B2F",MoonMonsB2],
["Rock Tunnel|B1F",TunnelMonsB1],["|B2F",TunnelMonsB2],["Power Plant",PowerPlantMons],
["Victory Road|1F",PlateauMons1],["|2F",PlateauMons2],["|3F",PlateauMons3],
["Pokémon Tower|3F",TowerMons3],["|4F",TowerMons4],["|5F",TowerMons5],["|6F",TowerMons6],["|7F",TowerMons7],
["Seafoam Islands|1F",IslandMons1],["|B1F",IslandMonsB1],["|B2F",IslandMonsB2],["|B3F",IslandMonsB3],["|B4F",IslandMonsB4],
["Pokémon Mansion|1F",MansionMons1],["|2F",MansionMons2],["|3F",MansionMons3],["|B1F",MansionMonsB1],["Diglett's Cave",CaveMons],
["Safari Zone|East",ZoneMons1],["|North",ZoneMons2],["|West",ZoneMons3],["|Center",ZoneMonsCenter],
["Cerulean Cave|1F",DungeonMons1],["|2F",DungeonMons2],["|B1F",DungeonMonsB1],["Unknown Island",LastIslandMons]];

var specials = [
[75,143,"Seafoam Islands B4F"],[75,144,"Power Plant"],[75,145,"Victory Road 2F"],
[100,149,"Cerulean Cave B1F"],[80,150,"Unknown Island 3F"]];

function ele(a,b) {
	var c = document.createElement(a);
	$(c).append(b)
	return c
}

function readFlag(a,b) {return (a[Math.floor(b/16)] >> (b % 16) & 1) == 1}

$(document).ready(function(){
	$("#loading").remove();
	for(i in maps) {
		var row = document.createElement("tr");
		var col = document.createElement("td");
		$(col).addClass("mapname");
		mapl = maps[i][0].split('|');
		if(mapl[1] == undefined) mapl[1] = "";
		$(col).append(ele("div",mapl[0]));
		$(col).append(ele("div",mapl[1]));
		$(row).append(col);
		
		var wild = maps[i][1];
		$(row).append(ele("td",(wild[0]*100/256).toFixed(2)+"%"));
		for(var j=1;j<11;j++) {
			var col = document.createElement("td");
			$(col).addClass("monentry");
			if(readFlag(seen,wild[j][1])) $(col).addClass("seen");
			if(readFlag(caught,wild[j][1])) $(col).addClass("caught");
			$(col).append(ele("div",monnames[wild[j][1]]));
			$(col).append(ele("div","lv. "+wild[j][0]));
			$(row).append(col);
		}
		$("#list").append(row);
	}
	
	for(i in specials) {
		var row = document.createElement("tr");	
		var wild = specials[i];
		var col = document.createElement("td");
		$(col).addClass("monentry");
		if(readFlag(seen,wild[1])) $(col).addClass("seen");
		if(readFlag(caught,wild[1])) $(col).addClass("caught");
		$(col).append(monnames[wild[1]]+" lv. "+wild[0]);
		$(row).append(col);
		$(row).append(ele("td",wild[2]));
		$("#special").append(row);
	}
});
