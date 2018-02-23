
alert("access");
var addressInit = function(_mailaddress_country, _mailaddress_state,
		_mailaddress_city, defaultcountry, defaultstate, defaultcity) {
	var mailaddresscountry = document.getElementById(_mailaddress_country);
	var mailaddressstate = document.getElementById(_mailaddress_state);
	var mailaddresscity = document.getElementById(_mailaddress_city);
	
	function mailaddressSelect(mailaddress, str) {
		
		for (var i = 0; i < mailaddress.options.length; i++) {
			if (mailaddress.options[i].value == str) {
				mailaddress.selectedIndex = i;
				return;
			}
		}
	}
	function mailaddressAddOption(mailaddress, str, obj) {

		var option = document.createElement("OPTION");
		mailaddress.options.add(option);
		option.innerText = str;
		option.value = str;
		option.obj = obj;
	}

	function changestate() {

		mailaddresscity.options.length = 0;
		if (mailaddressstate.selectedIndex == -1)
			return;
		var item = mailaddressstate.options[mailaddressstate.selectedIndex].obj;
		for (var i = 0; i < item.City.length; i++) {
			mailaddressAddOption(mailaddresscity, item.City[i].Name, null);
		}
		mailaddressSelect(mailaddresscity, defaultcity);
	}
	function changecountry() {

		mailaddressstate.options.length = 0;
		mailaddressstate.onchange = null;
		if (mailaddresscountry.selectedIndex == -1)
			return;
		var item = mailaddresscountry.options[mailaddresscountry.selectedIndex].obj;
		for (var i = 0; i < item.State.length; i++) {
			mailaddressAddOption(mailaddressstate, item.State[i].Name,
					item.State[i]);
		}
		mailaddressSelect(mailaddressstate, defaultstate);
		changestate();
		mailaddressstate.onchange = changestate;
	}

	for (var i = 0; i < countryList.length; i++) {
		mailaddressAddOption(mailaddresscountry, countryList[i].Name,
				countryList[i]);
	}
	mailaddressSelect(mailaddresscountry, defaultcountry);
	changecountry();
	mailaddresscountry.onchange = changecountry;
}

var countryList = [{
	"Name" : "United States",
	"Code" : "001",
	"State" : [ {
		"Name" : "Alabama",
		"Code" : "AL",
		"City" : [ {
			"Name" : "Alabaster",
			"Code" : "Alabaster"
		}, {
			"Name" : "Albertville",
			"Code" : "Albertville"
		}, {
			"Name" : "Alexander City",
			"Code" : "Alexander City"
		}, {
			"Name" : "Anniston",
			"Code" : "Anniston"
		}, {
			"Name" : "Arab",
			"Code" : "Arab"
		}, {
			"Name" : "Ashville",
			"Code" : "Ashville"
		}, {
			"Name" : "Athens",
			"Code" : "Athens"
		}, {
			"Name" : "Atmore",
			"Code" : "Atmore"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Bessemer",
			"Code" : "Bessemer"
		}, {
			"Name" : "Birmingham",
			"Code" : "BHM"
		}, {
			"Name" : "Capshaw",
			"Code" : "Capshaw"
		}, {
			"Name" : "Center Point",
			"Code" : "Center Point"
		}, {
			"Name" : "Childersburg",
			"Code" : "Childersburg"
		}, {
			"Name" : "Cullman",
			"Code" : "Cullman"
		}, {
			"Name" : "Daleville",
			"Code" : "Daleville"
		}, {
			"Name" : "Daphne",
			"Code" : "Daphne"
		}, {
			"Name" : "Decatur",
			"Code" : "Decatur"
		}, {
			"Name" : "Dothan",
			"Code" : "Dothan"
		}, {
			"Name" : "Enterprise",
			"Code" : "Enterprise"
		}, {
			"Name" : "Eufaula",
			"Code" : "Eufaula"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Fairhope",
			"Code" : "Fairhope"
		}, {
			"Name" : "Florence",
			"Code" : "Florence"
		}, {
			"Name" : "Fort Payne",
			"Code" : "Fort Payne"
		}, {
			"Name" : "Gadsden",
			"Code" : "Gadsden"
		}, {
			"Name" : "Grand Bay",
			"Code" : "Grand Bay"
		}, {
			"Name" : "Grove Hill",
			"Code" : "Grove Hill"
		}, {
			"Name" : "Guntersville",
			"Code" : "Guntersville"
		}, {
			"Name" : "Hampton Cove",
			"Code" : "Hampton Cove"
		}, {
			"Name" : "Hanceville",
			"Code" : "Hanceville"
		}, {
			"Name" : "Hartselle",
			"Code" : "Hartselle"
		}, {
			"Name" : "Headland",
			"Code" : "Headland"
		}, {
			"Name" : "Helena",
			"Code" : "Helena"
		}, {
			"Name" : "Hodges",
			"Code" : "Hodges"
		}, {
			"Name" : "Homewood",
			"Code" : "Homewood"
		}, {
			"Name" : "Hoover",
			"Code" : "Hoover"
		}, {
			"Name" : "Hueytown",
			"Code" : "Hueytown"
		}, {
			"Name" : "Huntsville",
			"Code" : "Huntsville"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Jasper",
			"Code" : "Jasper"
		}, {
			"Name" : "Leeds",
			"Code" : "Leeds"
		}, {
			"Name" : "Luverne",
			"Code" : "Luverne"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Mobile",
			"Code" : "MOB"
		}, {
			"Name" : "Montgomery",
			"Code" : "MGM"
		}, {
			"Name" : "Mountain Brook",
			"Code" : "Mountain Brook"
		}, {
			"Name" : "Muscle Shoals",
			"Code" : "Muscle Shoals"
		}, {
			"Name" : "Northport",
			"Code" : "Northport"
		}, {
			"Name" : "Notasulga",
			"Code" : "Notasulga"
		}, {
			"Name" : "Opelika",
			"Code" : "Opelika"
		}, {
			"Name" : "Oxford",
			"Code" : "Oxford"
		}, {
			"Name" : "Ozark",
			"Code" : "Ozark"
		}, {
			"Name" : "Pelham",
			"Code" : "Pelham"
		}, {
			"Name" : "Pell City",
			"Code" : "Pell City"
		}, {
			"Name" : "Pennsylvania",
			"Code" : "Pennsylvania"
		}, {
			"Name" : "Phenix City",
			"Code" : "Phenix City"
		}, {
			"Name" : "Prattville",
			"Code" : "Prattville"
		}, {
			"Name" : "Prichard",
			"Code" : "Prichard"
		}, {
			"Name" : "Ramer",
			"Code" : "Ramer"
		}, {
			"Name" : "Roanoke",
			"Code" : "Roanoke"
		}, {
			"Name" : "Saraland",
			"Code" : "Saraland"
		}, {
			"Name" : "Scottsboro",
			"Code" : "Scottsboro"
		}, {
			"Name" : "Selma",
			"Code" : "Selma"
		}, {
			"Name" : "Sheffield",
			"Code" : "Sheffield"
		}, {
			"Name" : "Smiths",
			"Code" : "Smiths"
		}, {
			"Name" : "Sumiton",
			"Code" : "Sumiton"
		}, {
			"Name" : "Sylacauga",
			"Code" : "Sylacauga"
		}, {
			"Name" : "Talladega",
			"Code" : "Talladega"
		}, {
			"Name" : "Thomasville",
			"Code" : "Thomasville"
		}, {
			"Name" : "Trafford",
			"Code" : "Trafford"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Trussville",
			"Code" : "Trussville"
		}, {
			"Name" : "Tuscaloosa",
			"Code" : "Tuscaloosa"
		}, {
			"Name" : "Tuskegee",
			"Code" : "Tuskegee"
		}, {
			"Name" : "Vestavia Hills",
			"Code" : "Vestavia Hills"
		} ]
	}, {
		"Name" : "Alaska",
		"Code" : "AK",
		"City" : [ {
			"Name" : "Anchorage",
			"Code" : "ANC"
		}, {
			"Name" : "Barrow",
			"Code" : "Barrow"
		}, {
			"Name" : "Bethel",
			"Code" : "Bethel"
		}, {
			"Name" : "College",
			"Code" : "College"
		}, {
			"Name" : "Fairbanks",
			"Code" : "FAI"
		}, {
			"Name" : "Homer",
			"Code" : "Homer"
		}, {
			"Name" : "Juneau",
			"Code" : "JUN"
		}, {
			"Name" : "Kenai",
			"Code" : "Kenai"
		}, {
			"Name" : "Ketchikan",
			"Code" : "Ketchikan"
		}, {
			"Name" : "Kodiak",
			"Code" : "Kodiak"
		}, {
			"Name" : "Nome",
			"Code" : "Nome"
		}, {
			"Name" : "Palmer",
			"Code" : "Palmer"
		}, {
			"Name" : "Sitka",
			"Code" : "Sitka"
		}, {
			"Name" : "Soldotna",
			"Code" : "Soldotna"
		}, {
			"Name" : "Sterling",
			"Code" : "Sterling"
		}, {
			"Name" : "Unalaska",
			"Code" : "Unalaska"
		}, {
			"Name" : "Valdez",
			"Code" : "Valdez"
		}, {
			"Name" : "Wasilla",
			"Code" : "Wasilla"
		} ]
	}, {
		"Name" : "Arizona",
		"Code" : "AZ",
		"City" : [ {
			"Name" : "Apache Junction",
			"Code" : "Apache Junction"
		}, {
			"Name" : "Avondale",
			"Code" : "Avondale"
		}, {
			"Name" : "Bisbee",
			"Code" : "Bisbee"
		}, {
			"Name" : "Bouse",
			"Code" : "Bouse"
		}, {
			"Name" : "Bullhead City",
			"Code" : "Bullhead City"
		}, {
			"Name" : "Carefree",
			"Code" : "Carefree"
		}, {
			"Name" : "Casa Grande",
			"Code" : "Casa Grande"
		}, {
			"Name" : "Casas Adobes",
			"Code" : "Casas Adobes"
		}, {
			"Name" : "Chandler",
			"Code" : "Chandler"
		}, {
			"Name" : "Clarkdale",
			"Code" : "Clarkdale"
		}, {
			"Name" : "Cottonwood",
			"Code" : "Cottonwood"
		}, {
			"Name" : "Douglas",
			"Code" : "Douglas"
		}, {
			"Name" : "Drexel Heights",
			"Code" : "Drexel Heights"
		}, {
			"Name" : "El Mirage",
			"Code" : "El Mirage"
		}, {
			"Name" : "Flagstaff",
			"Code" : "Flagstaff"
		}, {
			"Name" : "Florence",
			"Code" : "Florence"
		}, {
			"Name" : "Flowing Wells",
			"Code" : "Flowing Wells"
		}, {
			"Name" : "Fort Mohave",
			"Code" : "Fort Mohave"
		}, {
			"Name" : "Fortuna Foothills",
			"Code" : "Fortuna Foothills"
		}, {
			"Name" : "Fountain Hills",
			"Code" : "Fountain Hills"
		}, {
			"Name" : "Gilbert",
			"Code" : "Gilbert"
		}, {
			"Name" : "Glendale",
			"Code" : "GDA"
		}, {
			"Name" : "Globe",
			"Code" : "Globe"
		}, {
			"Name" : "Goodyear",
			"Code" : "Goodyear"
		}, {
			"Name" : "Green Valley",
			"Code" : "Green Valley"
		}, {
			"Name" : "Kingman",
			"Code" : "Kingman"
		}, {
			"Name" : "Lake Havasu City",
			"Code" : "Lake Havasu City"
		}, {
			"Name" : "Laveen",
			"Code" : "Laveen"
		}, {
			"Name" : "Litchfield Park",
			"Code" : "Litchfield Park"
		}, {
			"Name" : "Marana",
			"Code" : "Marana"
		}, {
			"Name" : "Mesa",
			"Code" : "MQA"
		}, {
			"Name" : "New Kingman-Butler",
			"Code" : "New Kingman-Butler"
		}, {
			"Name" : "Nogales",
			"Code" : "Nogales"
		}, {
			"Name" : "Oracle",
			"Code" : "Oracle"
		}, {
			"Name" : "Oro Valley",
			"Code" : "Oro Valley"
		}, {
			"Name" : "Paradise Valley",
			"Code" : "Paradise Valley"
		}, {
			"Name" : "Parker",
			"Code" : "Parker"
		}, {
			"Name" : "Payson",
			"Code" : "Payson"
		}, {
			"Name" : "Peoria",
			"Code" : "Peoria"
		}, {
			"Name" : "Phoenix",
			"Code" : "PHX"
		}, {
			"Name" : "Pine",
			"Code" : "Pine"
		}, {
			"Name" : "Pinetop",
			"Code" : "Pinetop"
		}, {
			"Name" : "Prescott",
			"Code" : "Prescott"
		}, {
			"Name" : "Prescott Valley",
			"Code" : "Prescott Valley"
		}, {
			"Name" : "Quartzsite",
			"Code" : "Quartzsite"
		}, {
			"Name" : "Queen Creek",
			"Code" : "Queen Creek"
		}, {
			"Name" : "Rio Rico",
			"Code" : "Rio Rico"
		}, {
			"Name" : "Safford",
			"Code" : "Safford"
		}, {
			"Name" : "San Luis",
			"Code" : "San Luis"
		}, {
			"Name" : "Scottsdale",
			"Code" : "STZ"
		}, {
			"Name" : "Sedona",
			"Code" : "Sedona"
		}, {
			"Name" : "Sierra Vista",
			"Code" : "Sierra Vista"
		}, {
			"Name" : "Sierra Vista Southeast",
			"Code" : "Sierra Vista Southeast"
		}, {
			"Name" : "Sun City",
			"Code" : "Sun City"
		}, {
			"Name" : "Sun City West",
			"Code" : "Sun City West"
		}, {
			"Name" : "Surprise",
			"Code" : "Surprise"
		}, {
			"Name" : "Tempe",
			"Code" : "TPE"
		}, {
			"Name" : "Tombstone",
			"Code" : "Tombstone"
		}, {
			"Name" : "Tucson",
			"Code" : "TUC"
		}, {
			"Name" : "Winslow",
			"Code" : "Winslow"
		}, {
			"Name" : "Yuma",
			"Code" : "YUM"
		} ]
	}, {
		"Name" : "Arkansas",
		"Code" : "AR",
		"City" : [ {
			"Name" : "Alexander",
			"Code" : "Alexander"
		}, {
			"Name" : "Arkadelphia",
			"Code" : "Arkadelphia"
		}, {
			"Name" : "Batesville",
			"Code" : "Batesville"
		}, {
			"Name" : "Bella Vista",
			"Code" : "Bella Vista"
		}, {
			"Name" : "Benton",
			"Code" : "Benton"
		}, {
			"Name" : "Bentonville",
			"Code" : "Bentonville"
		}, {
			"Name" : "Berryville",
			"Code" : "Berryville"
		}, {
			"Name" : "Blytheville",
			"Code" : "Blytheville"
		}, {
			"Name" : "Cabot",
			"Code" : "Cabot"
		}, {
			"Name" : "Camden",
			"Code" : "Camden"
		}, {
			"Name" : "Cherry Valley",
			"Code" : "Cherry Valley"
		}, {
			"Name" : "Conway",
			"Code" : "Conway"
		}, {
			"Name" : "Corning",
			"Code" : "Corning"
		}, {
			"Name" : "El Dorado",
			"Code" : "El Dorado"
		}, {
			"Name" : "Fayetteville",
			"Code" : "FYV"
		}, {
			"Name" : "Forrest City",
			"Code" : "Forrest City"
		}, {
			"Name" : "Fort Smith",
			"Code" : "FSM"
		}, {
			"Name" : "Harrison",
			"Code" : "Harrison"
		}, {
			"Name" : "Hope",
			"Code" : "Hope"
		}, {
			"Name" : "Hot Springs",
			"Code" : "Hot Springs"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Jonesboro",
			"Code" : "Jonesboro"
		}, {
			"Name" : "Lake City",
			"Code" : "Lake City"
		}, {
			"Name" : "Little Rock",
			"Code" : "LIT"
		}, {
			"Name" : "Magnolia",
			"Code" : "Magnolia"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "Mountain Home",
			"Code" : "Mountain Home"
		}, {
			"Name" : "Norfork",
			"Code" : "Norfork"
		}, {
			"Name" : "North Little Rock",
			"Code" : "North Little Rock"
		}, {
			"Name" : "Paragould",
			"Code" : "Paragould"
		}, {
			"Name" : "Piggott",
			"Code" : "Piggott"
		}, {
			"Name" : "Pine Bluff",
			"Code" : "Pine Bluff"
		}, {
			"Name" : "Pocahontas",
			"Code" : "Pocahontas"
		}, {
			"Name" : "Prescott",
			"Code" : "Prescott"
		}, {
			"Name" : "Quitman",
			"Code" : "Quitman"
		}, {
			"Name" : "Rogers",
			"Code" : "Rogers"
		}, {
			"Name" : "Russellville",
			"Code" : "Russellville"
		}, {
			"Name" : "Searcy",
			"Code" : "Searcy"
		}, {
			"Name" : "Sheridan",
			"Code" : "Sheridan"
		}, {
			"Name" : "Sherwood",
			"Code" : "Sherwood"
		}, {
			"Name" : "Siloam Springs",
			"Code" : "Siloam Springs"
		}, {
			"Name" : "Springdale",
			"Code" : "Springdale"
		}, {
			"Name" : "Stuttgart",
			"Code" : "Stuttgart"
		}, {
			"Name" : "Texarkana",
			"Code" : "Texarkana"
		}, {
			"Name" : "Van Buren",
			"Code" : "Van Buren"
		}, {
			"Name" : "Ward",
			"Code" : "Ward"
		}, {
			"Name" : "West Helena",
			"Code" : "West Helena"
		}, {
			"Name" : "West Memphis",
			"Code" : "West Memphis"
		}, {
			"Name" : "Wynne",
			"Code" : "Wynne"
		} ]
	}, {
		"Name" : "California",
		"Code" : "CA",
		"City" : [ {
			"Name" : "Acton",
			"Code" : "Acton"
		}, {
			"Name" : "Adelanto",
			"Code" : "Adelanto"
		}, {
			"Name" : "Agoura Hills",
			"Code" : "Agoura Hills"
		}, {
			"Name" : "Aguanga",
			"Code" : "Aguanga"
		}, {
			"Name" : "Alameda",
			"Code" : "Alameda"
		}, {
			"Name" : "Alamo",
			"Code" : "Alamo"
		}, {
			"Name" : "Albany",
			"Code" : "Albany"
		}, {
			"Name" : "Alhambra",
			"Code" : "Alhambra"
		}, {
			"Name" : "Aliso Viejo",
			"Code" : "Aliso Viejo"
		}, {
			"Name" : "Alondra Park",
			"Code" : "Alondra Park"
		}, {
			"Name" : "Alpine",
			"Code" : "Alpine"
		}, {
			"Name" : "Alta Loma",
			"Code" : "Alta Loma"
		}, {
			"Name" : "Altadena",
			"Code" : "Altadena"
		}, {
			"Name" : "American Canyon",
			"Code" : "American Canyon"
		}, {
			"Name" : "Anaheim",
			"Code" : "Anaheim"
		}, {
			"Name" : "Anderson",
			"Code" : "Anderson"
		}, {
			"Name" : "Antelope",
			"Code" : "Antelope"
		}, {
			"Name" : "Antioch",
			"Code" : "Antioch"
		}, {
			"Name" : "Apple Valley",
			"Code" : "Apple Valley"
		}, {
			"Name" : "Aptos",
			"Code" : "Aptos"
		}, {
			"Name" : "Arcadia",
			"Code" : "Arcadia"
		}, {
			"Name" : "Arcata",
			"Code" : "Arcata"
		}, {
			"Name" : "Arden-Arcade",
			"Code" : "Arden-Arcade"
		}, {
			"Name" : "Arroyo Grande",
			"Code" : "Arroyo Grande"
		}, {
			"Name" : "Artesia",
			"Code" : "Artesia"
		}, {
			"Name" : "Arvin",
			"Code" : "Arvin"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Atascadero",
			"Code" : "Atascadero"
		}, {
			"Name" : "Atwater",
			"Code" : "Atwater"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Avalon",
			"Code" : "Avalon"
		}, {
			"Name" : "Avenal",
			"Code" : "Avenal"
		}, {
			"Name" : "Avocado Heights",
			"Code" : "Avocado Heights"
		}, {
			"Name" : "Azusa",
			"Code" : "Azusa"
		}, {
			"Name" : "Bakersfield",
			"Code" : "Bakersfield"
		}, {
			"Name" : "Baldwin Park",
			"Code" : "Baldwin Park"
		}, {
			"Name" : "Banning",
			"Code" : "Banning"
		}, {
			"Name" : "Barstow",
			"Code" : "Barstow"
		}, {
			"Name" : "Bay Point",
			"Code" : "Bay Point"
		}, {
			"Name" : "Baywood-Los Osos",
			"Code" : "Baywood-Los Osos"
		}, {
			"Name" : "Bear Valley Springs",
			"Code" : "Bear Valley Springs"
		}, {
			"Name" : "Beaumont",
			"Code" : "Beaumont"
		}, {
			"Name" : "Bell",
			"Code" : "Bell"
		}, {
			"Name" : "Bell Gardens",
			"Code" : "Bell Gardens"
		}, {
			"Name" : "Bellflower",
			"Code" : "Bellflower"
		}, {
			"Name" : "Belmont",
			"Code" : "Belmont"
		}, {
			"Name" : "Ben Lomond",
			"Code" : "Ben Lomond"
		}, {
			"Name" : "Benicia",
			"Code" : "Benicia"
		}, {
			"Name" : "Berkeley",
			"Code" : "Berkeley"
		}, {
			"Name" : "Beverly Hills",
			"Code" : "Beverly Hills"
		}, {
			"Name" : "Big Bear Lake",
			"Code" : "Big Bear Lake"
		}, {
			"Name" : "Bloomington",
			"Code" : "Bloomington"
		}, {
			"Name" : "Blythe",
			"Code" : "Blythe"
		}, {
			"Name" : "Bonita",
			"Code" : "Bonita"
		}, {
			"Name" : "Bostonia",
			"Code" : "Bostonia"
		}, {
			"Name" : "Brawley",
			"Code" : "Brawley"
		}, {
			"Name" : "Brea",
			"Code" : "Brea"
		}, {
			"Name" : "Brentwood",
			"Code" : "Brentwood"
		}, {
			"Name" : "Brisbane",
			"Code" : "Brisbane"
		}, {
			"Name" : "Brookdale",
			"Code" : "Brookdale"
		}, {
			"Name" : "Buena Park",
			"Code" : "Buena Park"
		}, {
			"Name" : "Burbank",
			"Code" : "Burbank"
		}, {
			"Name" : "Burlingame",
			"Code" : "Burlingame"
		}, {
			"Name" : "Burnham",
			"Code" : "Burnham"
		}, {
			"Name" : "Byron",
			"Code" : "Byron"
		}, {
			"Name" : "Calabasas",
			"Code" : "Calabasas"
		}, {
			"Name" : "Calexico",
			"Code" : "Calexico"
		}, {
			"Name" : "California City",
			"Code" : "California City"
		}, {
			"Name" : "Camarillo",
			"Code" : "Camarillo"
		}, {
			"Name" : "Cameron Park",
			"Code" : "Cameron Park"
		}, {
			"Name" : "Camino",
			"Code" : "Camino"
		}, {
			"Name" : "Camp Pendleton North",
			"Code" : "Camp Pendleton North"
		}, {
			"Name" : "Camp Pendleton South",
			"Code" : "Camp Pendleton South"
		}, {
			"Name" : "Campbell",
			"Code" : "Campbell"
		}, {
			"Name" : "Canoga Park",
			"Code" : "Canoga Park"
		}, {
			"Name" : "Canyon Lake",
			"Code" : "Canyon Lake"
		}, {
			"Name" : "Capitola",
			"Code" : "Capitola"
		}, {
			"Name" : "Carlsbad",
			"Code" : "Carlsbad"
		}, {
			"Name" : "Carmel",
			"Code" : "Carmel"
		}, {
			"Name" : "Carmel Valley",
			"Code" : "Carmel Valley"
		}, {
			"Name" : "Carmichael",
			"Code" : "Carmichael"
		}, {
			"Name" : "Carpinteria",
			"Code" : "Carpinteria"
		}, {
			"Name" : "Carson",
			"Code" : "Carson"
		}, {
			"Name" : "Casa de Oro-Mount Helix",
			"Code" : "Casa de Oro-Mount Helix"
		}, {
			"Name" : "Castaic",
			"Code" : "Castaic"
		}, {
			"Name" : "Castro Valley",
			"Code" : "Castro Valley"
		}, {
			"Name" : "Cathedral City",
			"Code" : "Cathedral City"
		}, {
			"Name" : "Cayucos",
			"Code" : "Cayucos"
		}, {
			"Name" : "Ceres",
			"Code" : "Ceres"
		}, {
			"Name" : "Cerritos",
			"Code" : "Cerritos"
		}, {
			"Name" : "Charter Oak",
			"Code" : "Charter Oak"
		}, {
			"Name" : "Chatsworth",
			"Code" : "Chatsworth"
		}, {
			"Name" : "Cherryland",
			"Code" : "Cherryland"
		}, {
			"Name" : "Chico",
			"Code" : "Chico"
		}, {
			"Name" : "Chino",
			"Code" : "Chino"
		}, {
			"Name" : "Chino Hills",
			"Code" : "Chino Hills"
		}, {
			"Name" : "Chula Vista",
			"Code" : "Chula Vista"
		}, {
			"Name" : "Citrus",
			"Code" : "Citrus"
		}, {
			"Name" : "Citrus Heights",
			"Code" : "Citrus Heights"
		}, {
			"Name" : "City of Commerce",
			"Code" : "City of Commerce"
		}, {
			"Name" : "City of Industry",
			"Code" : "City of Industry"
		}, {
			"Name" : "Claremont",
			"Code" : "Claremont"
		}, {
			"Name" : "Clearlake",
			"Code" : "Clearlake"
		}, {
			"Name" : "Clovis",
			"Code" : "Clovis"
		}, {
			"Name" : "Coachella",
			"Code" : "Coachella"
		}, {
			"Name" : "Coalinga",
			"Code" : "Coalinga"
		}, {
			"Name" : "Colfax",
			"Code" : "Colfax"
		}, {
			"Name" : "Colton",
			"Code" : "Colton"
		}, {
			"Name" : "Colusa",
			"Code" : "Colusa"
		}, {
			"Name" : "Commerce",
			"Code" : "Commerce"
		}, {
			"Name" : "Compton",
			"Code" : "Compton"
		}, {
			"Name" : "Concord",
			"Code" : "Concord"
		}, {
			"Name" : "Corcoran",
			"Code" : "Corcoran"
		}, {
			"Name" : "Corning",
			"Code" : "Corning"
		}, {
			"Name" : "Corona",
			"Code" : "Corona"
		}, {
			"Name" : "Coronado",
			"Code" : "Coronado"
		}, {
			"Name" : "Corte Madera",
			"Code" : "Corte Madera"
		}, {
			"Name" : "Costa Mesa",
			"Code" : "Costa Mesa"
		}, {
			"Name" : "Cotati",
			"Code" : "Cotati"
		}, {
			"Name" : "Cottonwood",
			"Code" : "Cottonwood"
		}, {
			"Name" : "Country Club",
			"Code" : "Country Club"
		}, {
			"Name" : "Covina",
			"Code" : "Covina"
		}, {
			"Name" : "Crestline",
			"Code" : "Crestline"
		}, {
			"Name" : "Cudahy",
			"Code" : "Cudahy"
		}, {
			"Name" : "Culver City",
			"Code" : "Culver City"
		}, {
			"Name" : "Cupertino",
			"Code" : "Cupertino"
		}, {
			"Name" : "Cypress",
			"Code" : "Cypress"
		}, {
			"Name" : "Daly City",
			"Code" : "Daly City"
		}, {
			"Name" : "Dana Point",
			"Code" : "Dana Point"
		}, {
			"Name" : "Danville",
			"Code" : "Danville"
		}, {
			"Name" : "Davis",
			"Code" : "Davis"
		}, {
			"Name" : "Del Mar",
			"Code" : "Del Mar"
		}, {
			"Name" : "Delano",
			"Code" : "Delano"
		}, {
			"Name" : "Desert Hot Springs",
			"Code" : "Desert Hot Springs"
		}, {
			"Name" : "Diamond Bar",
			"Code" : "Diamond Bar"
		}, {
			"Name" : "Dinuba",
			"Code" : "Dinuba"
		}, {
			"Name" : "Dixon",
			"Code" : "Dixon"
		}, {
			"Name" : "Downey",
			"Code" : "Downey"
		}, {
			"Name" : "Duarte",
			"Code" : "Duarte"
		}, {
			"Name" : "Dublin",
			"Code" : "Dublin"
		}, {
			"Name" : "East Foothills",
			"Code" : "East Foothills"
		}, {
			"Name" : "East Hemet",
			"Code" : "East Hemet"
		}, {
			"Name" : "East La Mirada",
			"Code" : "East La Mirada"
		}, {
			"Name" : "East Palo Alto",
			"Code" : "East Palo Alto"
		}, {
			"Name" : "East San Gabriel",
			"Code" : "East San Gabriel"
		}, {
			"Name" : "El Cajon",
			"Code" : "El Cajon"
		}, {
			"Name" : "El Centro",
			"Code" : "El Centro"
		}, {
			"Name" : "El Cerrito",
			"Code" : "El Cerrito"
		}, {
			"Name" : "El Granada",
			"Code" : "El Granada"
		}, {
			"Name" : "El Monte",
			"Code" : "El Monte"
		}, {
			"Name" : "El Paso de Robles",
			"Code" : "El Paso de Robles"
		}, {
			"Name" : "El Segundo",
			"Code" : "El Segundo"
		}, {
			"Name" : "El Sobrante",
			"Code" : "El Sobrante"
		}, {
			"Name" : "Elk Grove",
			"Code" : "Elk Grove"
		}, {
			"Name" : "Emeryville",
			"Code" : "Emeryville"
		}, {
			"Name" : "Encinitas",
			"Code" : "Encinitas"
		}, {
			"Name" : "Encino",
			"Code" : "Encino"
		}, {
			"Name" : "Escondido",
			"Code" : "Escondido"
		}, {
			"Name" : "Etna",
			"Code" : "Etna"
		}, {
			"Name" : "Eureka",
			"Code" : "Eureka"
		}, {
			"Name" : "Exeter",
			"Code" : "Exeter"
		}, {
			"Name" : "Fair Oaks",
			"Code" : "Fair Oaks"
		}, {
			"Name" : "Fairfax",
			"Code" : "Fairfax"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Fairview",
			"Code" : "Fairview"
		}, {
			"Name" : "Fallbrook",
			"Code" : "Fallbrook"
		}, {
			"Name" : "Ferndale",
			"Code" : "Ferndale"
		}, {
			"Name" : "Fillmore",
			"Code" : "Fillmore"
		}, {
			"Name" : "Florence-Graham",
			"Code" : "Florence-Graham"
		}, {
			"Name" : "Florin",
			"Code" : "Florin"
		}, {
			"Name" : "Folsom",
			"Code" : "Folsom"
		}, {
			"Name" : "Fontana",
			"Code" : "Fontana"
		}, {
			"Name" : "Foothill Farms",
			"Code" : "Foothill Farms"
		}, {
			"Name" : "Foothill Ranch",
			"Code" : "Foothill Ranch"
		}, {
			"Name" : "Forestville",
			"Code" : "Forestville"
		}, {
			"Name" : "Fort Bragg",
			"Code" : "Fort Bragg"
		}, {
			"Name" : "Fortuna",
			"Code" : "Fortuna"
		}, {
			"Name" : "Foster City",
			"Code" : "Foster City"
		}, {
			"Name" : "Fountain Valley",
			"Code" : "Fountain Valley"
		}, {
			"Name" : "Freedom",
			"Code" : "Freedom"
		}, {
			"Name" : "Fremont",
			"Code" : "Fremont"
		}, {
			"Name" : "Fresno",
			"Code" : "Fresno"
		}, {
			"Name" : "Fullerton",
			"Code" : "Fullerton"
		}, {
			"Name" : "Galt",
			"Code" : "Galt"
		}, {
			"Name" : "Garberville",
			"Code" : "Garberville"
		}, {
			"Name" : "Garden Acres",
			"Code" : "Garden Acres"
		}, {
			"Name" : "Garden Grove",
			"Code" : "Garden Grove"
		}, {
			"Name" : "Gardena",
			"Code" : "Gardena"
		}, {
			"Name" : "Georgetown",
			"Code" : "Georgetown"
		}, {
			"Name" : "Gilroy",
			"Code" : "Gilroy"
		}, {
			"Name" : "Glen Avon",
			"Code" : "Glen Avon"
		}, {
			"Name" : "Glendale",
			"Code" : "Glendale"
		}, {
			"Name" : "Glendora",
			"Code" : "Glendora"
		}, {
			"Name" : "Goleta",
			"Code" : "Goleta"
		}, {
			"Name" : "Gonzales",
			"Code" : "Gonzales"
		}, {
			"Name" : "Granada Hills",
			"Code" : "Granada Hills"
		}, {
			"Name" : "Grand Terrace",
			"Code" : "Grand Terrace"
		}, {
			"Name" : "Grass Valley",
			"Code" : "Grass Valley"
		}, {
			"Name" : "Greenfield",
			"Code" : "Greenfield"
		}, {
			"Name" : "Grover Beach",
			"Code" : "Grover Beach"
		}, {
			"Name" : "Gualala",
			"Code" : "Gualala"
		}, {
			"Name" : "Guerneville",
			"Code" : "Guerneville"
		}, {
			"Name" : "Hacienda Heights",
			"Code" : "Hacienda Heights"
		}, {
			"Name" : "Half Moon Bay",
			"Code" : "Half Moon Bay"
		}, {
			"Name" : "Hanford",
			"Code" : "Hanford"
		}, {
			"Name" : "Harbor City",
			"Code" : "Harbor City"
		}, {
			"Name" : "Hawaiian Gardens",
			"Code" : "Hawaiian Gardens"
		}, {
			"Name" : "Hawthorne",
			"Code" : "Hawthorne"
		}, {
			"Name" : "Hayward",
			"Code" : "Hayward"
		}, {
			"Name" : "Hemet",
			"Code" : "Hemet"
		}, {
			"Name" : "Hercules",
			"Code" : "Hercules"
		}, {
			"Name" : "Hermosa Beach",
			"Code" : "Hermosa Beach"
		}, {
			"Name" : "Hesperia",
			"Code" : "Hesperia"
		}, {
			"Name" : "Highland",
			"Code" : "Highland"
		}, {
			"Name" : "Hillsborough",
			"Code" : "Hillsborough"
		}, {
			"Name" : "Hollister",
			"Code" : "Hollister"
		}, {
			"Name" : "Hollywood",
			"Code" : "Hollywood"
		}, {
			"Name" : "Huntington Beach",
			"Code" : "Huntington Beach"
		}, {
			"Name" : "Huntington Park",
			"Code" : "Huntington Park"
		}, {
			"Name" : "Idyllwild",
			"Code" : "Idyllwild"
		}, {
			"Name" : "Imperial Beach",
			"Code" : "Imperial Beach"
		}, {
			"Name" : "Indio",
			"Code" : "Indio"
		}, {
			"Name" : "Industry",
			"Code" : "Industry"
		}, {
			"Name" : "Inglewood",
			"Code" : "Inglewood"
		}, {
			"Name" : "Irvine",
			"Code" : "Irvine"
		}, {
			"Name" : "Irwindale",
			"Code" : "Irwindale"
		}, {
			"Name" : "Isla Vista",
			"Code" : "Isla Vista"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Jamul",
			"Code" : "Jamul"
		}, {
			"Name" : "La Canada Flintridge",
			"Code" : "La Canada Flintridge"
		}, {
			"Name" : "La Crescenta-Montrose",
			"Code" : "La Crescenta-Montrose"
		}, {
			"Name" : "La Habra",
			"Code" : "La Habra"
		}, {
			"Name" : "La Jolla",
			"Code" : "La Jolla"
		}, {
			"Name" : "La Mesa",
			"Code" : "La Mesa"
		}, {
			"Name" : "La Mirada",
			"Code" : "La Mirada"
		}, {
			"Name" : "La Palma",
			"Code" : "La Palma"
		}, {
			"Name" : "La Presa",
			"Code" : "La Presa"
		}, {
			"Name" : "La Puente",
			"Code" : "La Puente"
		}, {
			"Name" : "La Quinta",
			"Code" : "La Quinta"
		}, {
			"Name" : "La Riviera",
			"Code" : "La Riviera"
		}, {
			"Name" : "La Verne",
			"Code" : "La Verne"
		}, {
			"Name" : "Ladera Ranch",
			"Code" : "Ladera Ranch"
		}, {
			"Name" : "Lafayette",
			"Code" : "Lafayette"
		}, {
			"Name" : "Laguna",
			"Code" : "Laguna"
		}, {
			"Name" : "Laguna Beach",
			"Code" : "Laguna Beach"
		}, {
			"Name" : "Laguna Hills",
			"Code" : "Laguna Hills"
		}, {
			"Name" : "Laguna Niguel",
			"Code" : "Laguna Niguel"
		}, {
			"Name" : "Lake Elsinore",
			"Code" : "Lake Elsinore"
		}, {
			"Name" : "Lake Forest",
			"Code" : "Lake Forest"
		}, {
			"Name" : "Lakeside",
			"Code" : "Lakeside"
		}, {
			"Name" : "Lakewood",
			"Code" : "Lakewood"
		}, {
			"Name" : "Lamont",
			"Code" : "Lamont"
		}, {
			"Name" : "Lancaster",
			"Code" : "Lancaster"
		}, {
			"Name" : "Larkspur",
			"Code" : "Larkspur"
		}, {
			"Name" : "LaVerne",
			"Code" : "LaVerne"
		}, {
			"Name" : "Lawndale",
			"Code" : "Lawndale"
		}, {
			"Name" : "Laytonville",
			"Code" : "Laytonville"
		}, {
			"Name" : "Lemon Grove",
			"Code" : "Lemon Grove"
		}, {
			"Name" : "Lemoore",
			"Code" : "Lemoore"
		}, {
			"Name" : "Lennox",
			"Code" : "Lennox"
		}, {
			"Name" : "Linda",
			"Code" : "Linda"
		}, {
			"Name" : "Lindsay",
			"Code" : "Lindsay"
		}, {
			"Name" : "Live Oak",
			"Code" : "Live Oak"
		}, {
			"Name" : "Livermore",
			"Code" : "Livermore"
		}, {
			"Name" : "Livingston",
			"Code" : "Livingston"
		}, {
			"Name" : "Lodi",
			"Code" : "Lodi"
		}, {
			"Name" : "Loma Linda",
			"Code" : "Loma Linda"
		}, {
			"Name" : "Lomita",
			"Code" : "Lomita"
		}, {
			"Name" : "Lompoc",
			"Code" : "Lompoc"
		}, {
			"Name" : "Long Beach",
			"Code" : "Long Beach"
		}, {
			"Name" : "Los Alamitos",
			"Code" : "Los Alamitos"
		}, {
			"Name" : "Los Altos",
			"Code" : "Los Altos"
		}, {
			"Name" : "Los Angeles",
			"Code" : "LAX"
		}, {
			"Name" : "Los Banos",
			"Code" : "Los Banos"
		}, {
			"Name" : "Los Gatos",
			"Code" : "Los Gatos"
		}, {
			"Name" : "Los Olivos",
			"Code" : "Los Olivos"
		}, {
			"Name" : "Lynwood",
			"Code" : "Lynwood"
		}, {
			"Name" : "MacKinleyville",
			"Code" : "MacKinleyville"
		}, {
			"Name" : "Madera",
			"Code" : "Madera"
		}, {
			"Name" : "Magalia",
			"Code" : "Magalia"
		}, {
			"Name" : "Malibu",
			"Code" : "Malibu"
		}, {
			"Name" : "Mammoth Lakes",
			"Code" : "Mammoth Lakes"
		}, {
			"Name" : "Manhattan Beach",
			"Code" : "Manhattan Beach"
		}, {
			"Name" : "Manteca",
			"Code" : "Manteca"
		}, {
			"Name" : "Marina",
			"Code" : "Marina"
		}, {
			"Name" : "Marina del Rey",
			"Code" : "Marina del Rey"
		}, {
			"Name" : "Mariposa",
			"Code" : "Mariposa"
		}, {
			"Name" : "Marshall",
			"Code" : "Marshall"
		}, {
			"Name" : "Martinez",
			"Code" : "Martinez"
		}, {
			"Name" : "Marysville",
			"Code" : "Marysville"
		}, {
			"Name" : "Maywood",
			"Code" : "Maywood"
		}, {
			"Name" : "Menlo Park",
			"Code" : "Menlo Park"
		}, {
			"Name" : "Merced",
			"Code" : "Merced"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Midway City",
			"Code" : "Midway City"
		}, {
			"Name" : "Mill Valley",
			"Code" : "Mill Valley"
		}, {
			"Name" : "Millbrae",
			"Code" : "Millbrae"
		}, {
			"Name" : "Milpitas",
			"Code" : "Milpitas"
		}, {
			"Name" : "Mira Loma",
			"Code" : "Mira Loma"
		}, {
			"Name" : "Miranda",
			"Code" : "Miranda"
		}, {
			"Name" : "Mission Viejo",
			"Code" : "Mission Viejo"
		}, {
			"Name" : "Modesto",
			"Code" : "Modesto"
		}, {
			"Name" : "Monclair",
			"Code" : "Monclair"
		}, {
			"Name" : "Monrovia",
			"Code" : "Monrovia"
		}, {
			"Name" : "Montara",
			"Code" : "Montara"
		}, {
			"Name" : "Montclair",
			"Code" : "Montclair"
		}, {
			"Name" : "Montebello",
			"Code" : "Montebello"
		}, {
			"Name" : "Montecito",
			"Code" : "Montecito"
		}, {
			"Name" : "Monterey",
			"Code" : "Monterey"
		}, {
			"Name" : "Monterey Park",
			"Code" : "Monterey Park"
		}, {
			"Name" : "Moorpark",
			"Code" : "Moorpark"
		}, {
			"Name" : "Moraga Town",
			"Code" : "Moraga Town"
		}, {
			"Name" : "Moreno Valley",
			"Code" : "Moreno Valley"
		}, {
			"Name" : "Morgan Hill",
			"Code" : "Morgan Hill"
		}, {
			"Name" : "Morro Bay",
			"Code" : "Morro Bay"
		}, {
			"Name" : "Moss Beach",
			"Code" : "Moss Beach"
		}, {
			"Name" : "Mount Shasta",
			"Code" : "Mount Shasta"
		}, {
			"Name" : "Mountain View",
			"Code" : "Mountain View"
		}, {
			"Name" : "Murrieta",
			"Code" : "Murrieta"
		}, {
			"Name" : "N. Hollywood",
			"Code" : "N. Hollywood"
		}, {
			"Name" : "Napa",
			"Code" : "Napa"
		}, {
			"Name" : "National City",
			"Code" : "National City"
		}, {
			"Name" : "Nevada City",
			"Code" : "Nevada City"
		}, {
			"Name" : "Newark",
			"Code" : "Newark"
		}, {
			"Name" : "Newport Beach",
			"Code" : "Newport Beach"
		}, {
			"Name" : "Norco",
			"Code" : "Norco"
		}, {
			"Name" : "North Auburn",
			"Code" : "North Auburn"
		}, {
			"Name" : "North Fair Oaks",
			"Code" : "North Fair Oaks"
		}, {
			"Name" : "North Fork",
			"Code" : "North Fork"
		}, {
			"Name" : "North Highlands",
			"Code" : "North Highlands"
		}, {
			"Name" : "North Hills",
			"Code" : "North Hills"
		}, {
			"Name" : "North Hollywood",
			"Code" : "North Hollywood"
		}, {
			"Name" : "Northridge",
			"Code" : "Northridge"
		}, {
			"Name" : "Norwalk",
			"Code" : "Norwalk"
		}, {
			"Name" : "Novato",
			"Code" : "Novato"
		}, {
			"Name" : "Nuevo",
			"Code" : "Nuevo"
		}, {
			"Name" : "Oak View",
			"Code" : "Oak View"
		}, {
			"Name" : "Oakdale",
			"Code" : "Oakdale"
		}, {
			"Name" : "Oakhurst",
			"Code" : "Oakhurst"
		}, {
			"Name" : "Oakland",
			"Code" : "Oakland"
		}, {
			"Name" : "Oakley",
			"Code" : "Oakley"
		}, {
			"Name" : "Oceanside",
			"Code" : "Oceanside"
		}, {
			"Name" : "Oildale",
			"Code" : "Oildale"
		}, {
			"Name" : "Ojai",
			"Code" : "Ojai"
		}, {
			"Name" : "Olivehurst",
			"Code" : "Olivehurst"
		}, {
			"Name" : "Ontario",
			"Code" : "Ontario"
		}, {
			"Name" : "Orange",
			"Code" : "Orange"
		}, {
			"Name" : "Orangevale",
			"Code" : "Orangevale"
		}, {
			"Name" : "Orcutt",
			"Code" : "Orcutt"
		}, {
			"Name" : "Oregon House",
			"Code" : "Oregon House"
		}, {
			"Name" : "Orinda",
			"Code" : "Orinda"
		}, {
			"Name" : "Oroville",
			"Code" : "Oroville"
		}, {
			"Name" : "Oxnard",
			"Code" : "Oxnard"
		}, {
			"Name" : "Pacific Grove",
			"Code" : "Pacific Grove"
		}, {
			"Name" : "Pacific Palisades",
			"Code" : "Pacific Palisades"
		}, {
			"Name" : "Pacifica",
			"Code" : "Pacifica"
		}, {
			"Name" : "Pacoima",
			"Code" : "Pacoima"
		}, {
			"Name" : "Pajaro",
			"Code" : "Pajaro"
		}, {
			"Name" : "Palm Desert",
			"Code" : "Palm Desert"
		}, {
			"Name" : "Palm Springs",
			"Code" : "Palm Springs"
		}, {
			"Name" : "Palmdale",
			"Code" : "Palmdale"
		}, {
			"Name" : "Palo Alto",
			"Code" : "Palo Alto"
		}, {
			"Name" : "Palos Verdes Estates",
			"Code" : "Palos Verdes Estates"
		}, {
			"Name" : "Pamona",
			"Code" : "Pamona"
		}, {
			"Name" : "Panorama City",
			"Code" : "Panorama City"
		}, {
			"Name" : "Paradise",
			"Code" : "Paradise"
		}, {
			"Name" : "Paramount",
			"Code" : "Paramount"
		}, {
			"Name" : "Parkway-South Sacramento",
			"Code" : "Parkway-South Sacramento"
		}, {
			"Name" : "Parlier",
			"Code" : "Parlier"
		}, {
			"Name" : "Pasadena",
			"Code" : "Pasadena"
		}, {
			"Name" : "Patterson",
			"Code" : "Patterson"
		}, {
			"Name" : "Pedley",
			"Code" : "Pedley"
		}, {
			"Name" : "Perris",
			"Code" : "Perris"
		}, {
			"Name" : "Petaluma",
			"Code" : "Petaluma"
		}, {
			"Name" : "Pico Rivera",
			"Code" : "Pico Rivera"
		}, {
			"Name" : "Piedmont",
			"Code" : "Piedmont"
		}, {
			"Name" : "Pinole",
			"Code" : "Pinole"
		}, {
			"Name" : "Pismo Beach",
			"Code" : "Pismo Beach"
		}, {
			"Name" : "Pittsburg",
			"Code" : "Pittsburg"
		}, {
			"Name" : "Placentia",
			"Code" : "Placentia"
		}, {
			"Name" : "Placerville",
			"Code" : "Placerville"
		}, {
			"Name" : "Playa del Rey",
			"Code" : "Playa del Rey"
		}, {
			"Name" : "Pleasant Hill",
			"Code" : "Pleasant Hill"
		}, {
			"Name" : "Pleasanton",
			"Code" : "Pleasanton"
		}, {
			"Name" : "Plymouth",
			"Code" : "Plymouth"
		}, {
			"Name" : "Point Reyes Station",
			"Code" : "Point Reyes Station"
		}, {
			"Name" : "Pollock Pines",
			"Code" : "Pollock Pines"
		}, {
			"Name" : "Pomona",
			"Code" : "Pomona"
		}, {
			"Name" : "Port Costa",
			"Code" : "Port Costa"
		}, {
			"Name" : "Port Hueneme",
			"Code" : "Port Hueneme"
		}, {
			"Name" : "Porterville",
			"Code" : "Porterville"
		}, {
			"Name" : "Poway",
			"Code" : "Poway"
		}, {
			"Name" : "Quartz Hill",
			"Code" : "Quartz Hill"
		}, {
			"Name" : "Ramona",
			"Code" : "Ramona"
		}, {
			"Name" : "Rancho Cordova",
			"Code" : "Rancho Cordova"
		}, {
			"Name" : "Rancho Cucamonga",
			"Code" : "Rancho Cucamonga"
		}, {
			"Name" : "Rancho Dominguez",
			"Code" : "Rancho Dominguez"
		}, {
			"Name" : "Rancho Mirage",
			"Code" : "Rancho Mirage"
		}, {
			"Name" : "Rancho Murieta",
			"Code" : "Rancho Murieta"
		}, {
			"Name" : "Rancho Palos Verdes",
			"Code" : "Rancho Palos Verdes"
		}, {
			"Name" : "Rancho San Diego",
			"Code" : "Rancho San Diego"
		}, {
			"Name" : "Rancho Santa Margarita",
			"Code" : "Rancho Santa Margarita"
		}, {
			"Name" : "Red Bluff",
			"Code" : "Red Bluff"
		}, {
			"Name" : "Redding",
			"Code" : "Redding"
		}, {
			"Name" : "Redlands",
			"Code" : "Redlands"
		}, {
			"Name" : "Redondo Beach",
			"Code" : "Redondo Beach"
		}, {
			"Name" : "Redway",
			"Code" : "Redway"
		}, {
			"Name" : "Redwood City",
			"Code" : "Redwood City"
		}, {
			"Name" : "Reedley",
			"Code" : "Reedley"
		}, {
			"Name" : "Reseda",
			"Code" : "Reseda"
		}, {
			"Name" : "Rialto",
			"Code" : "Rialto"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Ridgecrest",
			"Code" : "Ridgecrest"
		}, {
			"Name" : "Rio del Mar",
			"Code" : "Rio del Mar"
		}, {
			"Name" : "Rio Linda",
			"Code" : "Rio Linda"
		}, {
			"Name" : "Rio Nido",
			"Code" : "Rio Nido"
		}, {
			"Name" : "Riverbank",
			"Code" : "Riverbank"
		}, {
			"Name" : "Riverside",
			"Code" : "Riverside"
		}, {
			"Name" : "Rocklin",
			"Code" : "Rocklin"
		}, {
			"Name" : "Rohnert Park",
			"Code" : "Rohnert Park"
		}, {
			"Name" : "Rolling Hills",
			"Code" : "Rolling Hills"
		}, {
			"Name" : "Rosamond",
			"Code" : "Rosamond"
		}, {
			"Name" : "Roseland",
			"Code" : "Roseland"
		}, {
			"Name" : "Rosemead",
			"Code" : "Rosemead"
		}, {
			"Name" : "Rosemont",
			"Code" : "Rosemont"
		}, {
			"Name" : "Roseville",
			"Code" : "Roseville"
		}, {
			"Name" : "Rossmoor",
			"Code" : "Rossmoor"
		}, {
			"Name" : "Rowland Heights",
			"Code" : "Rowland Heights"
		}, {
			"Name" : "Rubidoux",
			"Code" : "Rubidoux"
		}, {
			"Name" : "Sacramento",
			"Code" : "Sacramento"
		}, {
			"Name" : "Salinas",
			"Code" : "Salinas"
		}, {
			"Name" : "San Anselmo",
			"Code" : "San Anselmo"
		}, {
			"Name" : "San Bernardino",
			"Code" : "San Bernardino"
		}, {
			"Name" : "San Bruno",
			"Code" : "San Bruno"
		}, {
			"Name" : "San Buenaventura",
			"Code" : "San Buenaventura"
		}, {
			"Name" : "San Carlos",
			"Code" : "San Carlos"
		}, {
			"Name" : "San Clemente",
			"Code" : "San Clemente"
		}, {
			"Name" : "San Diego",
			"Code" : "SAN"
		}, {
			"Name" : "San Dimas",
			"Code" : "San Dimas"
		}, {
			"Name" : "San Fernando",
			"Code" : "SFO"
		}, {
			"Name" : "San Francisco",
			"Code" : "San Francisco"
		}, {
			"Name" : "San Gabriel",
			"Code" : "San Gabriel"
		}, {
			"Name" : "San Jacinto",
			"Code" : "San Jacinto"
		}, {
			"Name" : "San Jose",
			"Code" : "SJC"
		}, {
			"Name" : "San Juan Capistrano",
			"Code" : "San Juan Capistrano"
		}, {
			"Name" : "San Leandro",
			"Code" : "San Leandro"
		}, {
			"Name" : "San Lorenzo",
			"Code" : "San Lorenzo"
		}, {
			"Name" : "San Luis Obispo",
			"Code" : "San Luis Obispo"
		}, {
			"Name" : "San Marcos",
			"Code" : "San Marcos"
		}, {
			"Name" : "San Marino",
			"Code" : "San Marino"
		}, {
			"Name" : "San Mateo",
			"Code" : "San Mateo"
		}, {
			"Name" : "San Pablo",
			"Code" : "San Pablo"
		}, {
			"Name" : "San Pedro",
			"Code" : "San Pedro"
		}, {
			"Name" : "San Rafael",
			"Code" : "San Rafael"
		}, {
			"Name" : "San Ramon",
			"Code" : "San Ramon"
		}, {
			"Name" : "San Ysidro",
			"Code" : "San Ysidro"
		}, {
			"Name" : "Sanger",
			"Code" : "Sanger"
		}, {
			"Name" : "Santa Ana",
			"Code" : "Santa Ana"
		}, {
			"Name" : "Santa Barbara",
			"Code" : "Santa Barbara"
		}, {
			"Name" : "Santa Clara",
			"Code" : "Santa Clara"
		}, {
			"Name" : "Santa Clarita",
			"Code" : "Santa Clarita"
		}, {
			"Name" : "Santa Cruz",
			"Code" : "Santa Cruz"
		}, {
			"Name" : "Santa Fe Springs",
			"Code" : "Santa Fe Springs"
		}, {
			"Name" : "Santa Maria",
			"Code" : "Santa Maria"
		}, {
			"Name" : "Santa Monica",
			"Code" : "Santa Monica"
		}, {
			"Name" : "Santa Paula",
			"Code" : "Santa Paula"
		}, {
			"Name" : "Santa Rosa",
			"Code" : "Santa Rosa"
		}, {
			"Name" : "Santa Ynez",
			"Code" : "Santa Ynez"
		}, {
			"Name" : "Santee",
			"Code" : "Santee"
		}, {
			"Name" : "Saratoga",
			"Code" : "Saratoga"
		}, {
			"Name" : "Sausalito",
			"Code" : "Sausalito"
		}, {
			"Name" : "Scotts Valley",
			"Code" : "Scotts Valley"
		}, {
			"Name" : "Seal Beach",
			"Code" : "Seal Beach"
		}, {
			"Name" : "Seaside",
			"Code" : "Seaside"
		}, {
			"Name" : "Sebastopol",
			"Code" : "Sebastopol"
		}, {
			"Name" : "Selma",
			"Code" : "Selma"
		}, {
			"Name" : "Shafter",
			"Code" : "Shafter"
		}, {
			"Name" : "Sherman Oaks",
			"Code" : "Sherman Oaks"
		}, {
			"Name" : "Sierra Madre",
			"Code" : "Sierra Madre"
		}, {
			"Name" : "Signal Hill",
			"Code" : "Signal Hill"
		}, {
			"Name" : "Simi Valley",
			"Code" : "Simi Valley"
		}, {
			"Name" : "Solana Beach",
			"Code" : "Solana Beach"
		}, {
			"Name" : "Soledad",
			"Code" : "Soledad"
		}, {
			"Name" : "Solvang",
			"Code" : "Solvang"
		}, {
			"Name" : "Sonoma",
			"Code" : "Sonoma"
		}, {
			"Name" : "Sonora",
			"Code" : "Sonora"
		}, {
			"Name" : "Soquel",
			"Code" : "Soquel"
		}, {
			"Name" : "South El Monte",
			"Code" : "South El Monte"
		}, {
			"Name" : "South Gate",
			"Code" : "South Gate"
		}, {
			"Name" : "South Lake Tahoe",
			"Code" : "South Lake Tahoe"
		}, {
			"Name" : "South Pasadena",
			"Code" : "South Pasadena"
		}, {
			"Name" : "South San Francisco",
			"Code" : "South San Francisco"
		}, {
			"Name" : "South San Jose Hills",
			"Code" : "South San Jose Hills"
		}, {
			"Name" : "South Whittier",
			"Code" : "South Whittier"
		}, {
			"Name" : "South Yuba City",
			"Code" : "South Yuba City"
		}, {
			"Name" : "Spring Valley",
			"Code" : "Spring Valley"
		}, {
			"Name" : "St. Helena",
			"Code" : "St. Helena"
		}, {
			"Name" : "Stanford",
			"Code" : "Stanford"
		}, {
			"Name" : "Stanton",
			"Code" : "Stanton"
		}, {
			"Name" : "Stevenson Ranch",
			"Code" : "Stevenson Ranch"
		}, {
			"Name" : "Stockton",
			"Code" : "Stockton"
		}, {
			"Name" : "Strathmore",
			"Code" : "Strathmore"
		}, {
			"Name" : "Studio City",
			"Code" : "Studio City"
		}, {
			"Name" : "Suisun City",
			"Code" : "Suisun City"
		}, {
			"Name" : "Sun City",
			"Code" : "Sun City"
		}, {
			"Name" : "Sun Valley",
			"Code" : "Sun Valley"
		}, {
			"Name" : "Sunland",
			"Code" : "Sunland"
		}, {
			"Name" : "Sunnyvale",
			"Code" : "Sunnyvale"
		}, {
			"Name" : "Susanville",
			"Code" : "Susanville"
		}, {
			"Name" : "Sutter",
			"Code" : "Sutter"
		}, {
			"Name" : "Sylmar",
			"Code" : "Sylmar"
		}, {
			"Name" : "Tahoe City",
			"Code" : "Tahoe City"
		}, {
			"Name" : "Tamalpais-Homestead Valley",
			"Code" : "Tamalpais-Homestead Valley"
		}, {
			"Name" : "Tarzana",
			"Code" : "Tarzana"
		}, {
			"Name" : "Tehachapi",
			"Code" : "Tehachapi"
		}, {
			"Name" : "Temecula",
			"Code" : "Temecula"
		}, {
			"Name" : "Temple City",
			"Code" : "Temple City"
		}, {
			"Name" : "Thousand Oaks",
			"Code" : "Thousand Oaks"
		}, {
			"Name" : "Tiburon",
			"Code" : "Tiburon"
		}, {
			"Name" : "Topanga",
			"Code" : "Topanga"
		}, {
			"Name" : "Torrance",
			"Code" : "Torrance"
		}, {
			"Name" : "Trabuco Canyon",
			"Code" : "Trabuco Canyon"
		}, {
			"Name" : "Tracy",
			"Code" : "Tracy"
		}, {
			"Name" : "Trinidad",
			"Code" : "Trinidad"
		}, {
			"Name" : "Trona",
			"Code" : "Trona"
		}, {
			"Name" : "Truckee",
			"Code" : "Truckee"
		}, {
			"Name" : "Tujunga",
			"Code" : "Tujunga"
		}, {
			"Name" : "Tulare",
			"Code" : "Tulare"
		}, {
			"Name" : "Turlock",
			"Code" : "Turlock"
		}, {
			"Name" : "Tustin",
			"Code" : "Tustin"
		}, {
			"Name" : "Tustin Foothills",
			"Code" : "Tustin Foothills"
		}, {
			"Name" : "Twentynine Palms",
			"Code" : "Twentynine Palms"
		}, {
			"Name" : "Twentynine Palms Base",
			"Code" : "Twentynine Palms Base"
		}, {
			"Name" : "Ukiah",
			"Code" : "Ukiah"
		}, {
			"Name" : "Union City",
			"Code" : "Union City"
		}, {
			"Name" : "Upland",
			"Code" : "Upland"
		}, {
			"Name" : "Vacaville",
			"Code" : "Vacaville"
		}, {
			"Name" : "Valencia",
			"Code" : "Valencia"
		}, {
			"Name" : "Valinda",
			"Code" : "Valinda"
		}, {
			"Name" : "Valle Vista",
			"Code" : "Valle Vista"
		}, {
			"Name" : "Vallejo",
			"Code" : "Vallejo"
		}, {
			"Name" : "Valley Center",
			"Code" : "Valley Center"
		}, {
			"Name" : "Valley Glen",
			"Code" : "Valley Glen"
		}, {
			"Name" : "Valley Village",
			"Code" : "Valley Village"
		}, {
			"Name" : "Van Nuys",
			"Code" : "Van Nuys"
		}, {
			"Name" : "Vandenberg Air Force Base",
			"Code" : "Vandenberg Air Force Base"
		}, {
			"Name" : "Venice",
			"Code" : "Venice"
		}, {
			"Name" : "Ventura",
			"Code" : "Ventura"
		}, {
			"Name" : "Vernon",
			"Code" : "Vernon"
		}, {
			"Name" : "Victorville",
			"Code" : "Victorville"
		}, {
			"Name" : "View Park-Windsor Hills",
			"Code" : "View Park-Windsor Hills"
		}, {
			"Name" : "Vincent",
			"Code" : "Vincent"
		}, {
			"Name" : "Visalia",
			"Code" : "Visalia"
		}, {
			"Name" : "Vista",
			"Code" : "Vista"
		}, {
			"Name" : "Walnut",
			"Code" : "Walnut"
		}, {
			"Name" : "Walnut Creek",
			"Code" : "Walnut Creek"
		}, {
			"Name" : "Walnut Park",
			"Code" : "Walnut Park"
		}, {
			"Name" : "Wasco",
			"Code" : "Wasco"
		}, {
			"Name" : "Waterford",
			"Code" : "Waterford"
		}, {
			"Name" : "Watsonville",
			"Code" : "Watsonville"
		}, {
			"Name" : "West Athens",
			"Code" : "West Athens"
		}, {
			"Name" : "West Carson",
			"Code" : "West Carson"
		}, {
			"Name" : "West Covina",
			"Code" : "West Covina"
		}, {
			"Name" : "West Hills",
			"Code" : "West Hills"
		}, {
			"Name" : "West Hollywood",
			"Code" : "West Hollywood"
		}, {
			"Name" : "West Puente Valley",
			"Code" : "West Puente Valley"
		}, {
			"Name" : "West Sacramento",
			"Code" : "West Sacramento"
		}, {
			"Name" : "West Whittier-Los Nietos",
			"Code" : "West Whittier-Los Nietos"
		}, {
			"Name" : "Westlake Village",
			"Code" : "Westlake Village"
		}, {
			"Name" : "Westminster",
			"Code" : "Westminster"
		}, {
			"Name" : "Westmont",
			"Code" : "Westmont"
		}, {
			"Name" : "Whittier",
			"Code" : "Whittier"
		}, {
			"Name" : "Wildomar",
			"Code" : "Wildomar"
		}, {
			"Name" : "Willits",
			"Code" : "Willits"
		}, {
			"Name" : "Willowbrook",
			"Code" : "Willowbrook"
		}, {
			"Name" : "Wilmington",
			"Code" : "Wilmington"
		}, {
			"Name" : "Windsor",
			"Code" : "Windsor"
		}, {
			"Name" : "Woodland",
			"Code" : "Woodland"
		}, {
			"Name" : "Woodland Hills",
			"Code" : "Woodland Hills"
		}, {
			"Name" : "Yorba Linda",
			"Code" : "Yorba Linda"
		}, {
			"Name" : "Yreka",
			"Code" : "Yreka"
		}, {
			"Name" : "Yuba City",
			"Code" : "Yuba City"
		}, {
			"Name" : "Yucaipa",
			"Code" : "Yucaipa"
		}, {
			"Name" : "Yucca Valley",
			"Code" : "Yucca Valley"
		} ]
	}, {
		"Name" : "Colorado",
		"Code" : "CO",
		"City" : [ {
			"Name" : "Air Force Academy",
			"Code" : "Air Force Academy"
		}, {
			"Name" : "Alamosa",
			"Code" : "Alamosa"
		}, {
			"Name" : "Applewood",
			"Code" : "Applewood"
		}, {
			"Name" : "Arvada",
			"Code" : "Arvada"
		}, {
			"Name" : "Aspen",
			"Code" : "ASE"
		}, {
			"Name" : "Aurora",
			"Code" : "AUX"
		}, {
			"Name" : "Avon",
			"Code" : "Avon"
		}, {
			"Name" : "Basalt",
			"Code" : "Basalt"
		}, {
			"Name" : "Bellvue",
			"Code" : "Bellvue"
		}, {
			"Name" : "Black Forest",
			"Code" : "Black Forest"
		}, {
			"Name" : "Boulder",
			"Code" : "WBU"
		}, {
			"Name" : "Brighton",
			"Code" : "Brighton"
		}, {
			"Name" : "Broomfield",
			"Code" : "Broomfield"
		}, {
			"Name" : "Canon City",
			"Code" : "Canon City"
		}, {
			"Name" : "Carbondale",
			"Code" : "Carbondale"
		}, {
			"Name" : "Castle Rock",
			"Code" : "Castle Rock"
		}, {
			"Name" : "Castlewood",
			"Code" : "Castlewood"
		}, {
			"Name" : "Centennial",
			"Code" : "Centennial"
		}, {
			"Name" : "Cimarron Hills",
			"Code" : "Cimarron Hills"
		}, {
			"Name" : "Clifton",
			"Code" : "Clifton"
		}, {
			"Name" : "Colorado Springs",
			"Code" : "COS"
		}, {
			"Name" : "Columbine",
			"Code" : "Columbine"
		}, {
			"Name" : "Commerce City",
			"Code" : "Commerce City"
		}, {
			"Name" : "Cortez",
			"Code" : "Cortez"
		}, {
			"Name" : "Crawford",
			"Code" : "Crawford"
		}, {
			"Name" : "Denver",
			"Code" : "DEN"
		}, {
			"Name" : "Durango",
			"Code" : "Durango"
		}, {
			"Name" : "Edwards",
			"Code" : "Edwards"
		}, {
			"Name" : "Elizabeth",
			"Code" : "Elizabeth"
		}, {
			"Name" : "Englewood",
			"Code" : "Englewood"
		}, {
			"Name" : "Estes Park",
			"Code" : "Estes Park"
		}, {
			"Name" : "Evergreen",
			"Code" : "Evergreen"
		}, {
			"Name" : "Federal Heights",
			"Code" : "Federal Heights"
		}, {
			"Name" : "Fort Carson",
			"Code" : "Fort Carson"
		}, {
			"Name" : "Fort Collins",
			"Code" : "FNL"
		}, {
			"Name" : "Fort Morgan",
			"Code" : "Fort Morgan"
		}, {
			"Name" : "Fountain",
			"Code" : "Fountain"
		}, {
			"Name" : "Golden",
			"Code" : "Golden"
		}, {
			"Name" : "Grand Junction",
			"Code" : "GJT"
		}, {
			"Name" : "Greeley",
			"Code" : "Greeley"
		}, {
			"Name" : "Greenwood Village",
			"Code" : "Greenwood Village"
		}, {
			"Name" : "Gunbarrel",
			"Code" : "Gunbarrel"
		}, {
			"Name" : "Highlands Ranch",
			"Code" : "Highlands Ranch"
		}, {
			"Name" : "Holly",
			"Code" : "Holly"
		}, {
			"Name" : "Ken Caryl",
			"Code" : "Ken Caryl"
		}, {
			"Name" : "Lafayette",
			"Code" : "Lafayette"
		}, {
			"Name" : "Lakewood",
			"Code" : "Lakewood"
		}, {
			"Name" : "Littleton",
			"Code" : "Littleton"
		}, {
			"Name" : "Longmont",
			"Code" : "Longmont"
		}, {
			"Name" : "Louisville",
			"Code" : "Louisville"
		}, {
			"Name" : "Loveland",
			"Code" : "Loveland"
		}, {
			"Name" : "Lyons",
			"Code" : "Lyons"
		}, {
			"Name" : "Montrose",
			"Code" : "Montrose"
		}, {
			"Name" : "Monument",
			"Code" : "Monument"
		}, {
			"Name" : "Nederland",
			"Code" : "Nederland"
		}, {
			"Name" : "Niwot",
			"Code" : "Niwot"
		}, {
			"Name" : "Northglenn",
			"Code" : "Northglenn"
		}, {
			"Name" : "Pagosa Springs",
			"Code" : "Pagosa Springs"
		}, {
			"Name" : "Parker",
			"Code" : "Parker"
		}, {
			"Name" : "Penrose",
			"Code" : "Penrose"
		}, {
			"Name" : "Peyton",
			"Code" : "Peyton"
		}, {
			"Name" : "Pueblo",
			"Code" : "Pueblo"
		}, {
			"Name" : "Redlands",
			"Code" : "Redlands"
		}, {
			"Name" : "Ridgway",
			"Code" : "Ridgway"
		}, {
			"Name" : "Rifle",
			"Code" : "Rifle"
		}, {
			"Name" : "Rocky Ford",
			"Code" : "Rocky Ford"
		}, {
			"Name" : "Sanford",
			"Code" : "Sanford"
		}, {
			"Name" : "Security-Widefield",
			"Code" : "Security-Widefield"
		}, {
			"Name" : "Sherrelwood",
			"Code" : "Sherrelwood"
		}, {
			"Name" : "Silver Cliff",
			"Code" : "Silver Cliff"
		}, {
			"Name" : "Snowmass Village",
			"Code" : "Snowmass Village"
		}, {
			"Name" : "Southglenn",
			"Code" : "Southglenn"
		}, {
			"Name" : "Steamboat Springs",
			"Code" : "Steamboat Springs"
		}, {
			"Name" : "Sterling",
			"Code" : "Sterling"
		}, {
			"Name" : "Superior",
			"Code" : "Superior"
		}, {
			"Name" : "Telluride",
			"Code" : "Telluride"
		}, {
			"Name" : "Thornton",
			"Code" : "Thornton"
		}, {
			"Name" : "Vail",
			"Code" : "VAC"
		}, {
			"Name" : "Welby",
			"Code" : "Welby"
		}, {
			"Name" : "Westcliffe",
			"Code" : "Westcliffe"
		}, {
			"Name" : "Westminster",
			"Code" : "Westminster"
		}, {
			"Name" : "Wheat Ridge",
			"Code" : "Wheat Ridge"
		}, {
			"Name" : "Woodland Park",
			"Code" : "Woodland Park"
		} ]
	}, {
		"Name" : "Connecticut",
		"Code" : "CT",
		"City" : [ {
			"Name" : "Ansonia",
			"Code" : "Ansonia"
		}, {
			"Name" : "Avon",
			"Code" : "Avon"
		}, {
			"Name" : "Bethel",
			"Code" : "Bethel"
		}, {
			"Name" : "Bethlehem",
			"Code" : "Bethlehem"
		}, {
			"Name" : "Bloomfield",
			"Code" : "Bloomfield"
		}, {
			"Name" : "Branford",
			"Code" : "Branford"
		}, {
			"Name" : "Bridgeport",
			"Code" : "Bridgeport"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Canaan",
			"Code" : "Canaan"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Central Manchester",
			"Code" : "Central Manchester"
		}, {
			"Name" : "Cheshire",
			"Code" : "Cheshire"
		}, {
			"Name" : "Colchester",
			"Code" : "Colchester"
		}, {
			"Name" : "Coscob",
			"Code" : "Coscob"
		}, {
			"Name" : "Cranbury",
			"Code" : "Cranbury"
		}, {
			"Name" : "Cromwell",
			"Code" : "Cromwell"
		}, {
			"Name" : "Danbury",
			"Code" : "Danbury"
		}, {
			"Name" : "Darien",
			"Code" : "DAQ"
		}, {
			"Name" : "Dayville",
			"Code" : "Dayville"
		}, {
			"Name" : "Derby",
			"Code" : "Derby"
		}, {
			"Name" : "East Hartford",
			"Code" : "East Hartford"
		}, {
			"Name" : "East Haven",
			"Code" : "East Haven"
		}, {
			"Name" : "Ellington",
			"Code" : "Ellington"
		}, {
			"Name" : "Enfield",
			"Code" : "Enfield"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Glastonbury",
			"Code" : "Glastonbury"
		}, {
			"Name" : "Greens Farms",
			"Code" : "Greens Farms"
		}, {
			"Name" : "Greenwich",
			"Code" : "GRH"
		}, {
			"Name" : "Groton",
			"Code" : "Groton"
		}, {
			"Name" : "Guilford",
			"Code" : "Guilford"
		}, {
			"Name" : "Haddam",
			"Code" : "Haddam"
		}, {
			"Name" : "Hamden",
			"Code" : "Hamden"
		}, {
			"Name" : "Hartford",
			"Code" : "HFD"
		}, {
			"Name" : "Harwinton",
			"Code" : "Harwinton"
		}, {
			"Name" : "Lakeville",
			"Code" : "Lakeville"
		}, {
			"Name" : "Lyme",
			"Code" : "Lyme"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Meriden",
			"Code" : "Meriden"
		}, {
			"Name" : "Middletown",
			"Code" : "XIN"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Mystic",
			"Code" : "Mystic"
		}, {
			"Name" : "Naugatuck",
			"Code" : "Naugatuck"
		}, {
			"Name" : "New Britain",
			"Code" : "NWT"
		}, {
			"Name" : "New Canaan",
			"Code" : "New Canaan"
		}, {
			"Name" : "New Hartford",
			"Code" : "New Hartford"
		}, {
			"Name" : "New Haven",
			"Code" : "HVN"
		}, {
			"Name" : "New London",
			"Code" : "New London"
		}, {
			"Name" : "New Milford",
			"Code" : "New Milford"
		}, {
			"Name" : "New Town",
			"Code" : "New Town"
		}, {
			"Name" : "Newington",
			"Code" : "Newington"
		}, {
			"Name" : "North Haven",
			"Code" : "North Haven"
		}, {
			"Name" : "North Stonington",
			"Code" : "North Stonington"
		}, {
			"Name" : "Norwalk",
			"Code" : "Norwalk"
		}, {
			"Name" : "Norwich",
			"Code" : "Norwich"
		}, {
			"Name" : "Old Saybrook",
			"Code" : "Old Saybrook"
		}, {
			"Name" : "Oneco",
			"Code" : "Oneco"
		}, {
			"Name" : "Orange",
			"Code" : "Orange"
		}, {
			"Name" : "Pawcatuck",
			"Code" : "Pawcatuck"
		}, {
			"Name" : "Plainville",
			"Code" : "Plainville"
		}, {
			"Name" : "pomfret",
			"Code" : "pomfret"
		}, {
			"Name" : "Portland",
			"Code" : "Portland"
		}, {
			"Name" : "Putnam",
			"Code" : "Putnam"
		}, {
			"Name" : "Riverside",
			"Code" : "Riverside"
		}, {
			"Name" : "Rocky Hill",
			"Code" : "Rocky Hill"
		}, {
			"Name" : "Rowayton",
			"Code" : "Rowayton"
		}, {
			"Name" : "Sandy Hook",
			"Code" : "Sandy Hook"
		}, {
			"Name" : "Seymour",
			"Code" : "Seymour"
		}, {
			"Name" : "Sharon",
			"Code" : "Sharon"
		}, {
			"Name" : "Shelton",
			"Code" : "Shelton"
		}, {
			"Name" : "South Windsor",
			"Code" : "South Windsor"
		}, {
			"Name" : "Southington",
			"Code" : "Southington"
		}, {
			"Name" : "Southport",
			"Code" : "Southport"
		}, {
			"Name" : "Stamford",
			"Code" : "Stamford"
		}, {
			"Name" : "Sterling",
			"Code" : "Sterling"
		}, {
			"Name" : "Storrs",
			"Code" : "Storrs"
		}, {
			"Name" : "Stratford",
			"Code" : "Stratford"
		}, {
			"Name" : "Suffield",
			"Code" : "Suffield"
		}, {
			"Name" : "Taftville",
			"Code" : "Taftville"
		}, {
			"Name" : "Terryville",
			"Code" : "Terryville"
		}, {
			"Name" : "Tolland",
			"Code" : "Tolland"
		}, {
			"Name" : "Torrington",
			"Code" : "Torrington"
		}, {
			"Name" : "Trumbull",
			"Code" : "Trumbull"
		}, {
			"Name" : "Vernon",
			"Code" : "Vernon"
		}, {
			"Name" : "Wallingford Center",
			"Code" : "Wallingford Center"
		}, {
			"Name" : "Waterbury",
			"Code" : "WAT"
		}, {
			"Name" : "Watertown",
			"Code" : "Watertown"
		}, {
			"Name" : "West Hartford",
			"Code" : "West Hartford"
		}, {
			"Name" : "West Haven",
			"Code" : "West Haven"
		}, {
			"Name" : "Weston",
			"Code" : "Weston"
		}, {
			"Name" : "Westport",
			"Code" : "WPT"
		}, {
			"Name" : "Wethersfield",
			"Code" : "Wethersfield"
		}, {
			"Name" : "Willimantic",
			"Code" : "Willimantic"
		}, {
			"Name" : "Wilton",
			"Code" : "Wilton"
		}, {
			"Name" : "Windsor",
			"Code" : "Windsor"
		}, {
			"Name" : "Windsor Locks",
			"Code" : "Windsor Locks"
		}, {
			"Name" : "Winsted",
			"Code" : "Winsted"
		}, {
			"Name" : "Woodbury",
			"Code" : "Woodbury"
		}, {
			"Name" : "Woodstock",
			"Code" : "Woodstock"
		} ]
	}, {
		"Name" : "Delaware",
		"Code" : "DE",
		"City" : [ {
			"Name" : "Bear",
			"Code" : "Bear"
		}, {
			"Name" : "Brookside",
			"Code" : "Brookside"
		}, {
			"Name" : "Claymont",
			"Code" : "Claymont"
		}, {
			"Name" : "Dover",
			"Code" : "DOR"
		}, {
			"Name" : "Edgemoor",
			"Code" : "Edgemoor"
		}, {
			"Name" : "Elsmere",
			"Code" : "Elsmere"
		}, {
			"Name" : "Georgetown",
			"Code" : "Georgetown"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Milton",
			"Code" : "Milton"
		}, {
			"Name" : "Newark",
			"Code" : "NWK"
		}, {
			"Name" : "Pike Creek",
			"Code" : "Pike Creek"
		}, {
			"Name" : "Seaford",
			"Code" : "Seaford"
		}, {
			"Name" : "Smyrna",
			"Code" : "Smyrna"
		}, {
			"Name" : "Stanton",
			"Code" : "Stanton"
		}, {
			"Name" : "Talleyville",
			"Code" : "Talleyville"
		}, {
			"Name" : "Wilmington",
			"Code" : "ILG"
		} ]
	}, {
		"Name" : "District of Columbia",
		"Code" : "DC",
		"City" : {
			"Name" : "Washington D.C.",
			"Code" : "WAS"
		}
	}, {
		"Name" : "Florida",
		"Code" : "FL",
		"City" : [ {
			"Name" : "Alachua",
			"Code" : "Alachua"
		}, {
			"Name" : "Altamonte Springs",
			"Code" : "Altamonte Springs"
		}, {
			"Name" : "Apopka",
			"Code" : "Apopka"
		}, {
			"Name" : "Atlantic Beach",
			"Code" : "Atlantic Beach"
		}, {
			"Name" : "Auburndale",
			"Code" : "Auburndale"
		}, {
			"Name" : "Aventura",
			"Code" : "Aventura"
		}, {
			"Name" : "Avon Park",
			"Code" : "Avon Park"
		}, {
			"Name" : "Azalea Park",
			"Code" : "Azalea Park"
		}, {
			"Name" : "Bal Harbour",
			"Code" : "Bal Harbour"
		}, {
			"Name" : "Bartow",
			"Code" : "Bartow"
		}, {
			"Name" : "Bayonet Point",
			"Code" : "Bayonet Point"
		}, {
			"Name" : "Bayshore Gardens",
			"Code" : "Bayshore Gardens"
		}, {
			"Name" : "Beach",
			"Code" : "Beach"
		}, {
			"Name" : "Bellair-Meadowbrook Terrace",
			"Code" : "Bellair-Meadowbrook Terrace"
		}, {
			"Name" : "Belle Glade",
			"Code" : "Belle Glade"
		}, {
			"Name" : "Bellview",
			"Code" : "Bellview"
		}, {
			"Name" : "Beverly Hills",
			"Code" : "Beverly Hills"
		}, {
			"Name" : "Bloomingdale",
			"Code" : "Bloomingdale"
		}, {
			"Name" : "Boca del Mar",
			"Code" : "Boca del Mar"
		}, {
			"Name" : "Boca Raton",
			"Code" : "Boca Raton"
		}, {
			"Name" : "Bonita Springs",
			"Code" : "Bonita Springs"
		}, {
			"Name" : "Boynton Beach",
			"Code" : "Boynton Beach"
		}, {
			"Name" : "Bradenton",
			"Code" : "Bradenton"
		}, {
			"Name" : "Brandon",
			"Code" : "Brandon"
		}, {
			"Name" : "Brent",
			"Code" : "Brent"
		}, {
			"Name" : "Brooksville",
			"Code" : "Brooksville"
		}, {
			"Name" : "Brownsville",
			"Code" : "Brownsville"
		}, {
			"Name" : "Buena Ventura Lakes",
			"Code" : "Buena Ventura Lakes"
		}, {
			"Name" : "Bunnell",
			"Code" : "Bunnell"
		}, {
			"Name" : "Callaway",
			"Code" : "Callaway"
		}, {
			"Name" : "Cape Coral",
			"Code" : "Cape Coral"
		}, {
			"Name" : "Carol City",
			"Code" : "Carol City"
		}, {
			"Name" : "Casselberry",
			"Code" : "Casselberry"
		}, {
			"Name" : "Catalina Foothills",
			"Code" : "Catalina Foothills"
		}, {
			"Name" : "Celebration",
			"Code" : "Celebration"
		}, {
			"Name" : "Century Village",
			"Code" : "Century Village"
		}, {
			"Name" : "Citrus Park",
			"Code" : "Citrus Park"
		}, {
			"Name" : "Clearwater",
			"Code" : "Clearwater"
		}, {
			"Name" : "Clermont",
			"Code" : "Clermont"
		}, {
			"Name" : "Cocoa",
			"Code" : "Cocoa"
		}, {
			"Name" : "Cocoa Beach",
			"Code" : "Cocoa Beach"
		}, {
			"Name" : "Coconut Creek",
			"Code" : "Coconut Creek"
		}, {
			"Name" : "Coconut Grove",
			"Code" : "Coconut Grove"
		}, {
			"Name" : "Conway",
			"Code" : "Conway"
		}, {
			"Name" : "Cooper City",
			"Code" : "Cooper City"
		}, {
			"Name" : "Coral Gables",
			"Code" : "Coral Gables"
		}, {
			"Name" : "Coral Springs",
			"Code" : "Coral Springs"
		}, {
			"Name" : "Coral Terrace",
			"Code" : "Coral Terrace"
		}, {
			"Name" : "Cortlandt Manor",
			"Code" : "Cortlandt Manor"
		}, {
			"Name" : "Country Club",
			"Code" : "Country Club"
		}, {
			"Name" : "Crestview",
			"Code" : "Crestview"
		}, {
			"Name" : "Crystal River",
			"Code" : "Crystal River"
		}, {
			"Name" : "Cutler",
			"Code" : "Cutler"
		}, {
			"Name" : "Cutler Ridge",
			"Code" : "Cutler Ridge"
		}, {
			"Name" : "Cypress Gardens",
			"Code" : "Cypress Gardens"
		}, {
			"Name" : "Cypress Lake",
			"Code" : "Cypress Lake"
		}, {
			"Name" : "Dania",
			"Code" : "Dania"
		}, {
			"Name" : "Dania Beach",
			"Code" : "Dania Beach"
		}, {
			"Name" : "Davie",
			"Code" : "Davie"
		}, {
			"Name" : "Daytona Beach",
			"Code" : "Daytona Beach"
		}, {
			"Name" : "De Bary",
			"Code" : "De Bary"
		}, {
			"Name" : "De Funiak Springs",
			"Code" : "De Funiak Springs"
		}, {
			"Name" : "De Land",
			"Code" : "De Land"
		}, {
			"Name" : "Debary",
			"Code" : "Debary"
		}, {
			"Name" : "Deer Park",
			"Code" : "Deer Park"
		}, {
			"Name" : "Deerfield Beach",
			"Code" : "Deerfield Beach"
		}, {
			"Name" : "Del Rio",
			"Code" : "Del Rio"
		}, {
			"Name" : "Delray Beach",
			"Code" : "Delray Beach"
		}, {
			"Name" : "Deltona",
			"Code" : "Deltona"
		}, {
			"Name" : "Destin",
			"Code" : "Destin"
		}, {
			"Name" : "Doctor Phillips",
			"Code" : "Doctor Phillips"
		}, {
			"Name" : "Dora",
			"Code" : "Dora"
		}, {
			"Name" : "Doral",
			"Code" : "Doral"
		}, {
			"Name" : "Dundee",
			"Code" : "Dundee"
		}, {
			"Name" : "Dunedin",
			"Code" : "Dunedin"
		}, {
			"Name" : "East Lake",
			"Code" : "East Lake"
		}, {
			"Name" : "Edgewater",
			"Code" : "Edgewater"
		}, {
			"Name" : "Eglin Air Force Base",
			"Code" : "Eglin Air Force Base"
		}, {
			"Name" : "Egypt Lake-Leto",
			"Code" : "Egypt Lake-Leto"
		}, {
			"Name" : "Elfers",
			"Code" : "Elfers"
		}, {
			"Name" : "Englewood",
			"Code" : "Englewood"
		}, {
			"Name" : "Ensley",
			"Code" : "Ensley"
		}, {
			"Name" : "Eustis",
			"Code" : "Eustis"
		}, {
			"Name" : "Fairview Shores",
			"Code" : "Fairview Shores"
		}, {
			"Name" : "Fern Park",
			"Code" : "Fern Park"
		}, {
			"Name" : "Fernandina Beach",
			"Code" : "Fernandina Beach"
		}, {
			"Name" : "Ferry Pass",
			"Code" : "Ferry Pass"
		}, {
			"Name" : "Flagler Beach",
			"Code" : "Flagler Beach"
		}, {
			"Name" : "Floral City",
			"Code" : "Floral City"
		}, {
			"Name" : "Florida City",
			"Code" : "Florida City"
		}, {
			"Name" : "Florida Ridge",
			"Code" : "Florida Ridge"
		}, {
			"Name" : "Forest City",
			"Code" : "Forest City"
		}, {
			"Name" : "Fort Lauderdale",
			"Code" : "Fort Lauderdale"
		}, {
			"Name" : "Fort Myers",
			"Code" : "Fort Myers"
		}, {
			"Name" : "Fort Myers Beach",
			"Code" : "Fort Myers Beach"
		}, {
			"Name" : "Fort Pierce",
			"Code" : "Fort Pierce"
		}, {
			"Name" : "Fort Walton Beach",
			"Code" : "Fort Walton Beach"
		}, {
			"Name" : "Freeport",
			"Code" : "Freeport"
		}, {
			"Name" : "Fruitville",
			"Code" : "Fruitville"
		}, {
			"Name" : "Ft. Lauderdale",
			"Code" : "Ft. Lauderdale"
		}, {
			"Name" : "Gainesville",
			"Code" : "Gainesville"
		}, {
			"Name" : "Gladeview",
			"Code" : "Gladeview"
		}, {
			"Name" : "Glenvar Heights",
			"Code" : "Glenvar Heights"
		}, {
			"Name" : "Golden Gate",
			"Code" : "Golden Gate"
		}, {
			"Name" : "Golden Glades",
			"Code" : "Golden Glades"
		}, {
			"Name" : "Goldenrod",
			"Code" : "Goldenrod"
		}, {
			"Name" : "Greater Carrollwood",
			"Code" : "Greater Carrollwood"
		}, {
			"Name" : "Greater Northdale",
			"Code" : "Greater Northdale"
		}, {
			"Name" : "Green Cove Springs",
			"Code" : "Green Cove Springs"
		}, {
			"Name" : "Greenacres",
			"Code" : "Greenacres"
		}, {
			"Name" : "Gulf Gate Estates",
			"Code" : "Gulf Gate Estates"
		}, {
			"Name" : "Gulfport",
			"Code" : "Gulfport"
		}, {
			"Name" : "Haines City",
			"Code" : "Haines City"
		}, {
			"Name" : "Hallandale",
			"Code" : "Hallandale"
		}, {
			"Name" : "Hallandale Beach",
			"Code" : "Hallandale Beach"
		}, {
			"Name" : "Hammocks",
			"Code" : "Hammocks"
		}, {
			"Name" : "Hamptons at Boca Raton",
			"Code" : "Hamptons at Boca Raton"
		}, {
			"Name" : "Havana",
			"Code" : "Havana"
		}, {
			"Name" : "Hialeah",
			"Code" : "Hialeah"
		}, {
			"Name" : "Hialeah Gardens",
			"Code" : "Hialeah Gardens"
		}, {
			"Name" : "Highpoint",
			"Code" : "Highpoint"
		}, {
			"Name" : "Hobe Sound",
			"Code" : "Hobe Sound"
		}, {
			"Name" : "Holiday",
			"Code" : "Holiday"
		}, {
			"Name" : "Holly Hill",
			"Code" : "Holly Hill"
		}, {
			"Name" : "Hollywood",
			"Code" : "Hollywood"
		}, {
			"Name" : "Homestead",
			"Code" : "Homestead"
		}, {
			"Name" : "Homosassa",
			"Code" : "Homosassa"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Immokalee",
			"Code" : "Immokalee"
		}, {
			"Name" : "Inverness",
			"Code" : "Inverness"
		}, {
			"Name" : "Iona",
			"Code" : "Iona"
		}, {
			"Name" : "Ives Estates",
			"Code" : "Ives Estates"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Jacksonville Beach",
			"Code" : "Jacksonville Beach"
		}, {
			"Name" : "Jasmine Estates",
			"Code" : "Jasmine Estates"
		}, {
			"Name" : "Jensen Beach",
			"Code" : "Jensen Beach"
		}, {
			"Name" : "Jupiter",
			"Code" : "Jupiter"
		}, {
			"Name" : "Kendale Lakes",
			"Code" : "Kendale Lakes"
		}, {
			"Name" : "Kendall",
			"Code" : "Kendall"
		}, {
			"Name" : "Kendall West",
			"Code" : "Kendall West"
		}, {
			"Name" : "Key Biscayne",
			"Code" : "Key Biscayne"
		}, {
			"Name" : "Key Largo",
			"Code" : "Key Largo"
		}, {
			"Name" : "Key West",
			"Code" : "Key West"
		}, {
			"Name" : "Kings Point",
			"Code" : "Kings Point"
		}, {
			"Name" : "Kissimmee",
			"Code" : "Kissimmee"
		}, {
			"Name" : "Lady Lake",
			"Code" : "Lady Lake"
		}, {
			"Name" : "Lake Alfred",
			"Code" : "Lake Alfred"
		}, {
			"Name" : "Lake City",
			"Code" : "Lake City"
		}, {
			"Name" : "Lake Lucerne",
			"Code" : "Lake Lucerne"
		}, {
			"Name" : "Lake Magdalene",
			"Code" : "Lake Magdalene"
		}, {
			"Name" : "Lake Mary",
			"Code" : "Lake Mary"
		}, {
			"Name" : "Lake Placid",
			"Code" : "Lake Placid"
		}, {
			"Name" : "Lake Wales",
			"Code" : "Lake Wales"
		}, {
			"Name" : "Lake Worth",
			"Code" : "Lake Worth"
		}, {
			"Name" : "Lakeland",
			"Code" : "Lakeland"
		}, {
			"Name" : "Lakeland Highlands",
			"Code" : "Lakeland Highlands"
		}, {
			"Name" : "Lakeside",
			"Code" : "Lakeside"
		}, {
			"Name" : "Land O'Lakes",
			"Code" : "Land O'Lakes"
		}, {
			"Name" : "Largo",
			"Code" : "Largo"
		}, {
			"Name" : "Lauderdale Lakes",
			"Code" : "Lauderdale Lakes"
		}, {
			"Name" : "Lauderhill",
			"Code" : "Lauderhill"
		}, {
			"Name" : "Laurel",
			"Code" : "Laurel"
		}, {
			"Name" : "Lecanto",
			"Code" : "Lecanto"
		}, {
			"Name" : "Leesburg",
			"Code" : "Leesburg"
		}, {
			"Name" : "Lehigh Acres",
			"Code" : "Lehigh Acres"
		}, {
			"Name" : "Leisure City",
			"Code" : "Leisure City"
		}, {
			"Name" : "Lighthouse Point",
			"Code" : "Lighthouse Point"
		}, {
			"Name" : "Lockhart",
			"Code" : "Lockhart"
		}, {
			"Name" : "Longwood",
			"Code" : "Longwood"
		}, {
			"Name" : "Loxahatchee",
			"Code" : "Loxahatchee"
		}, {
			"Name" : "Lutz",
			"Code" : "Lutz"
		}, {
			"Name" : "Lynn Haven",
			"Code" : "Lynn Haven"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Maitland",
			"Code" : "Maitland"
		}, {
			"Name" : "Mango",
			"Code" : "Mango"
		}, {
			"Name" : "Marathon",
			"Code" : "Marathon"
		}, {
			"Name" : "Marco",
			"Code" : "Marco"
		}, {
			"Name" : "Margate",
			"Code" : "Margate"
		}, {
			"Name" : "Medley",
			"Code" : "Medley"
		}, {
			"Name" : "Melbourne",
			"Code" : "Melbourne"
		}, {
			"Name" : "Merritt Island",
			"Code" : "Merritt Island"
		}, {
			"Name" : "Miami",
			"Code" : "Miami"
		}, {
			"Name" : "Miami Beach",
			"Code" : "Miami Beach"
		}, {
			"Name" : "Miami Gardens",
			"Code" : "Miami Gardens"
		}, {
			"Name" : "Miami Lakes",
			"Code" : "Miami Lakes"
		}, {
			"Name" : "Miami Shores",
			"Code" : "Miami Shores"
		}, {
			"Name" : "Miami Springs",
			"Code" : "Miami Springs"
		}, {
			"Name" : "Micco",
			"Code" : "Micco"
		}, {
			"Name" : "Milton",
			"Code" : "Milton"
		}, {
			"Name" : "Mims",
			"Code" : "Mims"
		}, {
			"Name" : "Miramar",
			"Code" : "Miramar"
		}, {
			"Name" : "Mulberry",
			"Code" : "Mulberry"
		}, {
			"Name" : "Myrtle Grove",
			"Code" : "Myrtle Grove"
		}, {
			"Name" : "Naples",
			"Code" : "Naples"
		}, {
			"Name" : "Naples Park",
			"Code" : "Naples Park"
		}, {
			"Name" : "Naranja",
			"Code" : "Naranja"
		}, {
			"Name" : "New Port Richey",
			"Code" : "New Port Richey"
		}, {
			"Name" : "New Port Richey East",
			"Code" : "New Port Richey East"
		}, {
			"Name" : "New Smyrna Beach",
			"Code" : "New Smyrna Beach"
		}, {
			"Name" : "Niceville",
			"Code" : "Niceville"
		}, {
			"Name" : "Nokomis",
			"Code" : "Nokomis"
		}, {
			"Name" : "Norland",
			"Code" : "Norland"
		}, {
			"Name" : "North Andrews Gardens",
			"Code" : "North Andrews Gardens"
		}, {
			"Name" : "North Fort Myers",
			"Code" : "North Fort Myers"
		}, {
			"Name" : "North Lauderdale",
			"Code" : "North Lauderdale"
		}, {
			"Name" : "North Miami",
			"Code" : "North Miami"
		}, {
			"Name" : "North Miami Beach",
			"Code" : "North Miami Beach"
		}, {
			"Name" : "North Naples",
			"Code" : "North Naples"
		}, {
			"Name" : "North Palm Beach",
			"Code" : "North Palm Beach"
		}, {
			"Name" : "North Port",
			"Code" : "North Port"
		}, {
			"Name" : "Oak Ridge",
			"Code" : "Oak Ridge"
		}, {
			"Name" : "Oakland Park",
			"Code" : "Oakland Park"
		}, {
			"Name" : "Ocala",
			"Code" : "Ocala"
		}, {
			"Name" : "Ocoee",
			"Code" : "Ocoee"
		}, {
			"Name" : "Ojus",
			"Code" : "Ojus"
		}, {
			"Name" : "Okeechobee",
			"Code" : "Okeechobee"
		}, {
			"Name" : "Oldsmar",
			"Code" : "Oldsmar"
		}, {
			"Name" : "Olympia Heights",
			"Code" : "Olympia Heights"
		}, {
			"Name" : "Opa-locka",
			"Code" : "Opa-locka"
		}, {
			"Name" : "Orange City",
			"Code" : "Orange City"
		}, {
			"Name" : "Orange Park",
			"Code" : "Orange Park"
		}, {
			"Name" : "Orlando",
			"Code" : "Orlando"
		}, {
			"Name" : "Ormond Beach",
			"Code" : "Ormond Beach"
		}, {
			"Name" : "Ormond-by-the-Sea",
			"Code" : "Ormond-by-the-Sea"
		}, {
			"Name" : "Osprey",
			"Code" : "Osprey"
		}, {
			"Name" : "Oviedo",
			"Code" : "Oviedo"
		}, {
			"Name" : "Palatka",
			"Code" : "Palatka"
		}, {
			"Name" : "Palm Bay",
			"Code" : "Palm Bay"
		}, {
			"Name" : "Palm Beach",
			"Code" : "Palm Beach"
		}, {
			"Name" : "Palm Beach Gardens",
			"Code" : "Palm Beach Gardens"
		}, {
			"Name" : "Palm City",
			"Code" : "Palm City"
		}, {
			"Name" : "Palm Coast",
			"Code" : "Palm Coast"
		}, {
			"Name" : "Palm Harbor",
			"Code" : "Palm Harbor"
		}, {
			"Name" : "Palm River-Clair Mel",
			"Code" : "Palm River-Clair Mel"
		}, {
			"Name" : "Palm Valley",
			"Code" : "Palm Valley"
		}, {
			"Name" : "Palmetto",
			"Code" : "Palmetto"
		}, {
			"Name" : "Palmetto Estates",
			"Code" : "Palmetto Estates"
		}, {
			"Name" : "Panama City",
			"Code" : "Panama City"
		}, {
			"Name" : "Parkland",
			"Code" : "Parkland"
		}, {
			"Name" : "Pembroke Park",
			"Code" : "Pembroke Park"
		}, {
			"Name" : "Pembroke Pines",
			"Code" : "Pembroke Pines"
		}, {
			"Name" : "Pensacola",
			"Code" : "Pensacola"
		}, {
			"Name" : "Perrine",
			"Code" : "Perrine"
		}, {
			"Name" : "Pine Castle",
			"Code" : "Pine Castle"
		}, {
			"Name" : "Pine Hills",
			"Code" : "Pine Hills"
		}, {
			"Name" : "Pinellas Park",
			"Code" : "Pinellas Park"
		}, {
			"Name" : "Pinewood",
			"Code" : "Pinewood"
		}, {
			"Name" : "Plant City",
			"Code" : "Plant City"
		}, {
			"Name" : "Plantation",
			"Code" : "Plantation"
		}, {
			"Name" : "Pompano Beach",
			"Code" : "Pompano Beach"
		}, {
			"Name" : "Pompano Beach Highlands",
			"Code" : "Pompano Beach Highlands"
		}, {
			"Name" : "Ponte Vedra",
			"Code" : "Ponte Vedra"
		}, {
			"Name" : "Port Charlotte",
			"Code" : "Port Charlotte"
		}, {
			"Name" : "Port Orange",
			"Code" : "Port Orange"
		}, {
			"Name" : "Port Saint John",
			"Code" : "Port Saint John"
		}, {
			"Name" : "Port Saint Lucie",
			"Code" : "Port Saint Lucie"
		}, {
			"Name" : "Punta Gorda",
			"Code" : "Punta Gorda"
		}, {
			"Name" : "Quincy",
			"Code" : "Quincy"
		}, {
			"Name" : "Redington Shores",
			"Code" : "Redington Shores"
		}, {
			"Name" : "Richmond Heights",
			"Code" : "Richmond Heights"
		}, {
			"Name" : "Richmond West",
			"Code" : "Richmond West"
		}, {
			"Name" : "Riverview",
			"Code" : "Riverview"
		}, {
			"Name" : "Riviera Beach",
			"Code" : "Riviera Beach"
		}, {
			"Name" : "Rockledge",
			"Code" : "Rockledge"
		}, {
			"Name" : "Royal Palm Beach",
			"Code" : "Royal Palm Beach"
		}, {
			"Name" : "Safety Harbor",
			"Code" : "Safety Harbor"
		}, {
			"Name" : "Saint Augustine",
			"Code" : "Saint Augustine"
		}, {
			"Name" : "Saint Cloud",
			"Code" : "Saint Cloud"
		}, {
			"Name" : "Saint Petersburg",
			"Code" : "Saint Petersburg"
		}, {
			"Name" : "Saint Petersburg Beach",
			"Code" : "Saint Petersburg Beach"
		}, {
			"Name" : "San Carlos Park",
			"Code" : "San Carlos Park"
		}, {
			"Name" : "Sandalfoot Cove",
			"Code" : "Sandalfoot Cove"
		}, {
			"Name" : "Sanford",
			"Code" : "Sanford"
		}, {
			"Name" : "Sanibel",
			"Code" : "Sanibel"
		}, {
			"Name" : "Sarasota",
			"Code" : "Sarasota"
		}, {
			"Name" : "Sarasota Springs",
			"Code" : "Sarasota Springs"
		}, {
			"Name" : "Satellite Beach",
			"Code" : "Satellite Beach"
		}, {
			"Name" : "Scott Lake",
			"Code" : "Scott Lake"
		}, {
			"Name" : "Sebastian",
			"Code" : "Sebastian"
		}, {
			"Name" : "Seminole",
			"Code" : "Seminole"
		}, {
			"Name" : "Shalimar",
			"Code" : "Shalimar"
		}, {
			"Name" : "South Bradenton",
			"Code" : "South Bradenton"
		}, {
			"Name" : "South Daytona",
			"Code" : "South Daytona"
		}, {
			"Name" : "South Miami",
			"Code" : "South Miami"
		}, {
			"Name" : "South Miami Heights",
			"Code" : "South Miami Heights"
		}, {
			"Name" : "South Patrick Shores",
			"Code" : "South Patrick Shores"
		}, {
			"Name" : "South Venice",
			"Code" : "South Venice"
		}, {
			"Name" : "Spring Hill",
			"Code" : "Spring Hill"
		}, {
			"Name" : "Stuart",
			"Code" : "Stuart"
		}, {
			"Name" : "Sun City Center",
			"Code" : "Sun City Center"
		}, {
			"Name" : "Sunny Isles",
			"Code" : "Sunny Isles"
		}, {
			"Name" : "Sunrise",
			"Code" : "Sunrise"
		}, {
			"Name" : "Sunset",
			"Code" : "Sunset"
		}, {
			"Name" : "Sweetwater",
			"Code" : "Sweetwater"
		}, {
			"Name" : "Tallahassee",
			"Code" : "Tallahassee"
		}, {
			"Name" : "Tamarac",
			"Code" : "Tamarac"
		}, {
			"Name" : "Tamiami",
			"Code" : "Tamiami"
		}, {
			"Name" : "Tampa",
			"Code" : "Tampa"
		}, {
			"Name" : "Tarpon Springs",
			"Code" : "Tarpon Springs"
		}, {
			"Name" : "Temple Terrace",
			"Code" : "Temple Terrace"
		}, {
			"Name" : "The Crossings",
			"Code" : "The Crossings"
		}, {
			"Name" : "The Hammocks",
			"Code" : "The Hammocks"
		}, {
			"Name" : "Titusville",
			"Code" : "Titusville"
		}, {
			"Name" : "Town'n'Country",
			"Code" : "Town'n'Country"
		}, {
			"Name" : "University",
			"Code" : "University"
		}, {
			"Name" : "University Park",
			"Code" : "University Park"
		}, {
			"Name" : "Valrico",
			"Code" : "Valrico"
		}, {
			"Name" : "Venice",
			"Code" : "Venice"
		}, {
			"Name" : "Vero Beach",
			"Code" : "Vero Beach"
		}, {
			"Name" : "Vero Beach South",
			"Code" : "Vero Beach South"
		}, {
			"Name" : "Villas",
			"Code" : "Villas"
		}, {
			"Name" : "Warrington",
			"Code" : "Warrington"
		}, {
			"Name" : "Wekiva Springs",
			"Code" : "Wekiva Springs"
		}, {
			"Name" : "Wellington",
			"Code" : "Wellington"
		}, {
			"Name" : "Wesley Chapel",
			"Code" : "Wesley Chapel"
		}, {
			"Name" : "West and East Lealman",
			"Code" : "West and East Lealman"
		}, {
			"Name" : "West Little River",
			"Code" : "West Little River"
		}, {
			"Name" : "West Palm Beach",
			"Code" : "West Palm Beach"
		}, {
			"Name" : "West Park",
			"Code" : "West Park"
		}, {
			"Name" : "West Pensacola",
			"Code" : "West Pensacola"
		}, {
			"Name" : "Westchester",
			"Code" : "Westchester"
		}, {
			"Name" : "Weston",
			"Code" : "Weston"
		}, {
			"Name" : "Westview",
			"Code" : "Westview"
		}, {
			"Name" : "Westwood Lakes",
			"Code" : "Westwood Lakes"
		}, {
			"Name" : "Wilton Manors",
			"Code" : "Wilton Manors"
		}, {
			"Name" : "Windermere",
			"Code" : "Windermere"
		}, {
			"Name" : "Winston",
			"Code" : "Winston"
		}, {
			"Name" : "Winter Garden",
			"Code" : "Winter Garden"
		}, {
			"Name" : "Winter Haven",
			"Code" : "Winter Haven"
		}, {
			"Name" : "Winter Park",
			"Code" : "Winter Park"
		}, {
			"Name" : "Winter Springs",
			"Code" : "Winter Springs"
		}, {
			"Name" : "Wright",
			"Code" : "Wright"
		}, {
			"Name" : "Yeehaw Junction",
			"Code" : "Yeehaw Junction"
		} ]
	}, {
		"Name" : "Georgia",
		"Code" : "GA",
		"City" : [ {
			"Name" : "Acworth",
			"Code" : "Acworth"
		}, {
			"Name" : "Adel",
			"Code" : "Adel"
		}, {
			"Name" : "Albany",
			"Code" : "Albany"
		}, {
			"Name" : "Alma",
			"Code" : "Alma"
		}, {
			"Name" : "Alpharetta",
			"Code" : "Alpharetta"
		}, {
			"Name" : "Americus",
			"Code" : "Americus"
		}, {
			"Name" : "Athens",
			"Code" : "Athens"
		}, {
			"Name" : "Athens-Clarke",
			"Code" : "Athens-Clarke"
		}, {
			"Name" : "Atlanta",
			"Code" : "Atlanta"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Augusta-Richmond",
			"Code" : "Augusta-Richmond"
		}, {
			"Name" : "Austell",
			"Code" : "Austell"
		}, {
			"Name" : "Bainbridge",
			"Code" : "Bainbridge"
		}, {
			"Name" : "Barnesville",
			"Code" : "Barnesville"
		}, {
			"Name" : "Belvedere Park",
			"Code" : "Belvedere Park"
		}, {
			"Name" : "Bogart",
			"Code" : "Bogart"
		}, {
			"Name" : "Bowdon",
			"Code" : "Bowdon"
		}, {
			"Name" : "Braselton",
			"Code" : "Braselton"
		}, {
			"Name" : "Brunswick",
			"Code" : "Brunswick"
		}, {
			"Name" : "Buford",
			"Code" : "Buford"
		}, {
			"Name" : "Byron",
			"Code" : "Byron"
		}, {
			"Name" : "Cairo",
			"Code" : "Cairo"
		}, {
			"Name" : "Calhoun",
			"Code" : "Calhoun"
		}, {
			"Name" : "Candler-MacAfee",
			"Code" : "Candler-MacAfee"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Carrollton",
			"Code" : "Carrollton"
		}, {
			"Name" : "Cartersville",
			"Code" : "Cartersville"
		}, {
			"Name" : "Chamblee",
			"Code" : "Chamblee"
		}, {
			"Name" : "Clarkston",
			"Code" : "Clarkston"
		}, {
			"Name" : "Cochran",
			"Code" : "Cochran"
		}, {
			"Name" : "College Park",
			"Code" : "College Park"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Comer",
			"Code" : "Comer"
		}, {
			"Name" : "Conley",
			"Code" : "Conley"
		}, {
			"Name" : "Conyers",
			"Code" : "Conyers"
		}, {
			"Name" : "Cordele",
			"Code" : "Cordele"
		}, {
			"Name" : "Covington",
			"Code" : "Covington"
		}, {
			"Name" : "Culloden",
			"Code" : "Culloden"
		}, {
			"Name" : "Cumming",
			"Code" : "Cumming"
		}, {
			"Name" : "Dacula",
			"Code" : "Dacula"
		}, {
			"Name" : "Dahlonega",
			"Code" : "Dahlonega"
		}, {
			"Name" : "Dallas",
			"Code" : "Dallas"
		}, {
			"Name" : "Dalton",
			"Code" : "Dalton"
		}, {
			"Name" : "Decatur",
			"Code" : "Decatur"
		}, {
			"Name" : "Dewy Rose",
			"Code" : "Dewy Rose"
		}, {
			"Name" : "Doraville",
			"Code" : "Doraville"
		}, {
			"Name" : "Douglas",
			"Code" : "Douglas"
		}, {
			"Name" : "Douglasville",
			"Code" : "Douglasville"
		}, {
			"Name" : "Druid Hills",
			"Code" : "Druid Hills"
		}, {
			"Name" : "Dublin",
			"Code" : "Dublin"
		}, {
			"Name" : "Duluth",
			"Code" : "Duluth"
		}, {
			"Name" : "Dunwoody",
			"Code" : "Dunwoody"
		}, {
			"Name" : "East Point",
			"Code" : "East Point"
		}, {
			"Name" : "Elberton",
			"Code" : "Elberton"
		}, {
			"Name" : "Ellenwood",
			"Code" : "Ellenwood"
		}, {
			"Name" : "Ellijay",
			"Code" : "Ellijay"
		}, {
			"Name" : "Evans",
			"Code" : "Evans"
		}, {
			"Name" : "Fairmount",
			"Code" : "Fairmount"
		}, {
			"Name" : "Fayetteville",
			"Code" : "Fayetteville"
		}, {
			"Name" : "Flowery Branch",
			"Code" : "Flowery Branch"
		}, {
			"Name" : "Folkston",
			"Code" : "Folkston"
		}, {
			"Name" : "Forest Park",
			"Code" : "Forest Park"
		}, {
			"Name" : "Fort Benning South",
			"Code" : "Fort Benning South"
		}, {
			"Name" : "Fort Gordon",
			"Code" : "Fort Gordon"
		}, {
			"Name" : "Fort Stewart",
			"Code" : "Fort Stewart"
		}, {
			"Name" : "Fort Valley",
			"Code" : "Fort Valley"
		}, {
			"Name" : "Foxborough",
			"Code" : "Foxborough"
		}, {
			"Name" : "Gaines School",
			"Code" : "Gaines School"
		}, {
			"Name" : "Gainesville",
			"Code" : "Gainesville"
		}, {
			"Name" : "Glennville",
			"Code" : "Glennville"
		}, {
			"Name" : "Gresham Park",
			"Code" : "Gresham Park"
		}, {
			"Name" : "Griffin",
			"Code" : "Griffin"
		}, {
			"Name" : "Grovetown",
			"Code" : "Grovetown"
		}, {
			"Name" : "Hampton",
			"Code" : "Hampton"
		}, {
			"Name" : "Hartwell",
			"Code" : "Hartwell"
		}, {
			"Name" : "Hinesville",
			"Code" : "Hinesville"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Jonesboro",
			"Code" : "Jonesboro"
		}, {
			"Name" : "Kennesaw",
			"Code" : "Kennesaw"
		}, {
			"Name" : "Kingsland",
			"Code" : "Kingsland"
		}, {
			"Name" : "LaGrange",
			"Code" : "LaGrange"
		}, {
			"Name" : "Lawrenceville",
			"Code" : "Lawrenceville"
		}, {
			"Name" : "Lilburn",
			"Code" : "Lilburn"
		}, {
			"Name" : "Lithia Springs",
			"Code" : "Lithia Springs"
		}, {
			"Name" : "Lithonia",
			"Code" : "Lithonia"
		}, {
			"Name" : "Locust Grove",
			"Code" : "Locust Grove"
		}, {
			"Name" : "Loganville",
			"Code" : "Loganville"
		}, {
			"Name" : "Louisville",
			"Code" : "Louisville"
		}, {
			"Name" : "Mableton",
			"Code" : "Mableton"
		}, {
			"Name" : "Macon",
			"Code" : "Macon"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Marietta",
			"Code" : "Marietta"
		}, {
			"Name" : "Martinez",
			"Code" : "Martinez"
		}, {
			"Name" : "McDonough",
			"Code" : "McDonough"
		}, {
			"Name" : "Milledgeville",
			"Code" : "Milledgeville"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Morrow",
			"Code" : "Morrow"
		}, {
			"Name" : "Moultrie",
			"Code" : "Moultrie"
		}, {
			"Name" : "Mountain",
			"Code" : "Mountain"
		}, {
			"Name" : "Mountain Park",
			"Code" : "Mountain Park"
		}, {
			"Name" : "Newnan",
			"Code" : "Newnan"
		}, {
			"Name" : "Norcross",
			"Code" : "Norcross"
		}, {
			"Name" : "North Atlanta",
			"Code" : "North Atlanta"
		}, {
			"Name" : "North Decatur",
			"Code" : "North Decatur"
		}, {
			"Name" : "North Druid Hills",
			"Code" : "North Druid Hills"
		}, {
			"Name" : "Oakwood",
			"Code" : "Oakwood"
		}, {
			"Name" : "Panthersville",
			"Code" : "Panthersville"
		}, {
			"Name" : "Peachtree City",
			"Code" : "Peachtree City"
		}, {
			"Name" : "Powder Springs",
			"Code" : "Powder Springs"
		}, {
			"Name" : "Redan",
			"Code" : "Redan"
		}, {
			"Name" : "Rex",
			"Code" : "Rex"
		}, {
			"Name" : "Riverdale",
			"Code" : "Riverdale"
		}, {
			"Name" : "Rome",
			"Code" : "Rome"
		}, {
			"Name" : "Rossville",
			"Code" : "Rossville"
		}, {
			"Name" : "Roswell",
			"Code" : "Roswell"
		}, {
			"Name" : "Saint Marys",
			"Code" : "Saint Marys"
		}, {
			"Name" : "Saint Simons",
			"Code" : "Saint Simons"
		}, {
			"Name" : "Sandy Springs",
			"Code" : "Sandy Springs"
		}, {
			"Name" : "Savannah",
			"Code" : "Savannah"
		}, {
			"Name" : "Scottdale",
			"Code" : "Scottdale"
		}, {
			"Name" : "Sharpsburg",
			"Code" : "Sharpsburg"
		}, {
			"Name" : "Smyrna",
			"Code" : "Smyrna"
		}, {
			"Name" : "Snellville",
			"Code" : "Snellville"
		}, {
			"Name" : "Sparks",
			"Code" : "Sparks"
		}, {
			"Name" : "Statesboro",
			"Code" : "Statesboro"
		}, {
			"Name" : "Stockbridge",
			"Code" : "Stockbridge"
		}, {
			"Name" : "Stone Mountain",
			"Code" : "Stone Mountain"
		}, {
			"Name" : "Suwanee",
			"Code" : "Suwanee"
		}, {
			"Name" : "Thomasville",
			"Code" : "Thomasville"
		}, {
			"Name" : "Tifton",
			"Code" : "Tifton"
		}, {
			"Name" : "Tucker",
			"Code" : "Tucker"
		}, {
			"Name" : "Tybee Island",
			"Code" : "Tybee Island"
		}, {
			"Name" : "Union City",
			"Code" : "Union City"
		}, {
			"Name" : "Valdosta",
			"Code" : "Valdosta"
		}, {
			"Name" : "Vidalia",
			"Code" : "Vidalia"
		}, {
			"Name" : "Villa Rica",
			"Code" : "Villa Rica"
		}, {
			"Name" : "Warner Robins",
			"Code" : "Warner Robins"
		}, {
			"Name" : "Waycross",
			"Code" : "Waycross"
		}, {
			"Name" : "Wilmington Island",
			"Code" : "Wilmington Island"
		}, {
			"Name" : "Winder",
			"Code" : "Winder"
		}, {
			"Name" : "Woodbine",
			"Code" : "Woodbine"
		}, {
			"Name" : "Woodstock",
			"Code" : "Woodstock"
		} ]
	}, {
		"Name" : "Hawaii",
		"Code" : "HI",
		"City" : [ {
			"Name" : "Ahuimanu",
			"Code" : "Ahuimanu"
		}, {
			"Name" : "Aiea",
			"Code" : "Aiea"
		}, {
			"Name" : "Aliamanu",
			"Code" : "Aliamanu"
		}, {
			"Name" : "Ewa Beach",
			"Code" : "Ewa Beach"
		}, {
			"Name" : "Haiku",
			"Code" : "Haiku"
		}, {
			"Name" : "Halawa",
			"Code" : "Halawa"
		}, {
			"Name" : "Hanalei",
			"Code" : "Hanalei"
		}, {
			"Name" : "Hilo",
			"Code" : "Hilo"
		}, {
			"Name" : "Holualoa",
			"Code" : "Holualoa"
		}, {
			"Name" : "Honolulu",
			"Code" : "Honolulu"
		}, {
			"Name" : "Kahului",
			"Code" : "Kahului"
		}, {
			"Name" : "Kailua",
			"Code" : "Kailua"
		}, {
			"Name" : "Kalaheo",
			"Code" : "Kalaheo"
		}, {
			"Name" : "Kamuela",
			"Code" : "Kamuela"
		}, {
			"Name" : "Kaneohe",
			"Code" : "Kaneohe"
		}, {
			"Name" : "Kaneohe Station",
			"Code" : "Kaneohe Station"
		}, {
			"Name" : "Kapaa",
			"Code" : "Kapaa"
		}, {
			"Name" : "Kapolei",
			"Code" : "Kapolei"
		}, {
			"Name" : "Kihei",
			"Code" : "Kihei"
		}, {
			"Name" : "Kula",
			"Code" : "Kula"
		}, {
			"Name" : "Lahaina",
			"Code" : "Lahaina"
		}, {
			"Name" : "Lanai City",
			"Code" : "Lanai City"
		}, {
			"Name" : "Lihue",
			"Code" : "Lihue"
		}, {
			"Name" : "Makaha",
			"Code" : "Makaha"
		}, {
			"Name" : "Makakilo City",
			"Code" : "Makakilo City"
		}, {
			"Name" : "Makawao",
			"Code" : "Makawao"
		}, {
			"Name" : "Mi-Wuk Village",
			"Code" : "Mi-Wuk Village"
		}, {
			"Name" : "Mililani Town",
			"Code" : "Mililani Town"
		}, {
			"Name" : "Naalehu",
			"Code" : "Naalehu"
		}, {
			"Name" : "Nanakuli",
			"Code" : "Nanakuli"
		}, {
			"Name" : "Pahoa",
			"Code" : "Pahoa"
		}, {
			"Name" : "Pearl City",
			"Code" : "Pearl City"
		}, {
			"Name" : "Schofield Barracks",
			"Code" : "Schofield Barracks"
		}, {
			"Name" : "Wahiawa",
			"Code" : "Wahiawa"
		}, {
			"Name" : "Waialua",
			"Code" : "Waialua"
		}, {
			"Name" : "Waianae",
			"Code" : "Waianae"
		}, {
			"Name" : "Wailuku",
			"Code" : "Wailuku"
		}, {
			"Name" : "Waimalu",
			"Code" : "Waimalu"
		}, {
			"Name" : "Waipahu",
			"Code" : "Waipahu"
		}, {
			"Name" : "Waipio",
			"Code" : "Waipio"
		} ]
	}, {
		"Name" : "Idaho",
		"Code" : "ID",
		"City" : [ {
			"Name" : "Blackfoot",
			"Code" : "Blackfoot"
		}, {
			"Name" : "Boise",
			"Code" : "Boise"
		}, {
			"Name" : "Boise City",
			"Code" : "Boise City"
		}, {
			"Name" : "Boulder Hill",
			"Code" : "Boulder Hill"
		}, {
			"Name" : "Burley",
			"Code" : "Burley"
		}, {
			"Name" : "Caldwell",
			"Code" : "Caldwell"
		}, {
			"Name" : "Coeur d'Alene",
			"Code" : "Coeur d'Alene"
		}, {
			"Name" : "Eagle",
			"Code" : "Eagle"
		}, {
			"Name" : "Garden City",
			"Code" : "Garden City"
		}, {
			"Name" : "Idaho Falls",
			"Code" : "Idaho Falls"
		}, {
			"Name" : "Lewiston",
			"Code" : "Lewiston"
		}, {
			"Name" : "Meridian",
			"Code" : "Meridian"
		}, {
			"Name" : "Moscow",
			"Code" : "Moscow"
		}, {
			"Name" : "Mountain Home",
			"Code" : "Mountain Home"
		}, {
			"Name" : "Nampa",
			"Code" : "Nampa"
		}, {
			"Name" : "Payette",
			"Code" : "Payette"
		}, {
			"Name" : "Pocatello",
			"Code" : "Pocatello"
		}, {
			"Name" : "Post Falls",
			"Code" : "Post Falls"
		}, {
			"Name" : "Preston",
			"Code" : "Preston"
		}, {
			"Name" : "Rexburg",
			"Code" : "Rexburg"
		}, {
			"Name" : "Rigby",
			"Code" : "Rigby"
		}, {
			"Name" : "Sandpoint",
			"Code" : "Sandpoint"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Twin Falls",
			"Code" : "Twin Falls"
		} ]
	}, {
		"Name" : "Illinois",
		"Code" : "IL",
		"City" : [ {
			"Name" : "Addison",
			"Code" : "Addison"
		}, {
			"Name" : "Algonquin",
			"Code" : "Algonquin"
		}, {
			"Name" : "Alsip",
			"Code" : "Alsip"
		}, {
			"Name" : "Alton",
			"Code" : "Alton"
		}, {
			"Name" : "Arlington Heights",
			"Code" : "Arlington Heights"
		}, {
			"Name" : "Aurora",
			"Code" : "Aurora"
		}, {
			"Name" : "Bannockburn",
			"Code" : "Bannockburn"
		}, {
			"Name" : "Barrington",
			"Code" : "Barrington"
		}, {
			"Name" : "Bartlett",
			"Code" : "Bartlett"
		}, {
			"Name" : "Batavia",
			"Code" : "Batavia"
		}, {
			"Name" : "Beach Park",
			"Code" : "Beach Park"
		}, {
			"Name" : "Beardstown",
			"Code" : "Beardstown"
		}, {
			"Name" : "Bedford Park",
			"Code" : "Bedford Park"
		}, {
			"Name" : "Belleville",
			"Code" : "Belleville"
		}, {
			"Name" : "Bellwood",
			"Code" : "Bellwood"
		}, {
			"Name" : "Belvidere",
			"Code" : "Belvidere"
		}, {
			"Name" : "Bensenville",
			"Code" : "Bensenville"
		}, {
			"Name" : "Berwyn",
			"Code" : "Berwyn"
		}, {
			"Name" : "Bloomingdale",
			"Code" : "Bloomingdale"
		}, {
			"Name" : "Bloomington",
			"Code" : "Bloomington"
		}, {
			"Name" : "Blue Island",
			"Code" : "Blue Island"
		}, {
			"Name" : "Boling Brook",
			"Code" : "Boling Brook"
		}, {
			"Name" : "Bolingbrook",
			"Code" : "Bolingbrook"
		}, {
			"Name" : "Bourbonnais",
			"Code" : "Bourbonnais"
		}, {
			"Name" : "Bradley",
			"Code" : "Bradley"
		}, {
			"Name" : "Breese",
			"Code" : "Breese"
		}, {
			"Name" : "Bridgeview",
			"Code" : "Bridgeview"
		}, {
			"Name" : "Brimfield",
			"Code" : "Brimfield"
		}, {
			"Name" : "Broadview",
			"Code" : "Broadview"
		}, {
			"Name" : "Brookfield",
			"Code" : "Brookfield"
		}, {
			"Name" : "Buffalo Grove",
			"Code" : "Buffalo Grove"
		}, {
			"Name" : "Burbank",
			"Code" : "Burbank"
		}, {
			"Name" : "Burr Ridge",
			"Code" : "Burr Ridge"
		}, {
			"Name" : "Cahokia",
			"Code" : "Cahokia"
		}, {
			"Name" : "Calumet City",
			"Code" : "Calumet City"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Carbondale",
			"Code" : "Carbondale"
		}, {
			"Name" : "Carlinville",
			"Code" : "Carlinville"
		}, {
			"Name" : "Carol Stream",
			"Code" : "Carol Stream"
		}, {
			"Name" : "Carpentersville",
			"Code" : "Carpentersville"
		}, {
			"Name" : "Carthage",
			"Code" : "Carthage"
		}, {
			"Name" : "Cary",
			"Code" : "Cary"
		}, {
			"Name" : "Centralia",
			"Code" : "Centralia"
		}, {
			"Name" : "Champaign",
			"Code" : "Champaign"
		}, {
			"Name" : "Channahon",
			"Code" : "Channahon"
		}, {
			"Name" : "Charleston",
			"Code" : "Charleston"
		}, {
			"Name" : "Chicago",
			"Code" : "Chicago"
		}, {
			"Name" : "Chicago Heights",
			"Code" : "Chicago Heights"
		}, {
			"Name" : "Chicago Ridge",
			"Code" : "Chicago Ridge"
		}, {
			"Name" : "Cicero",
			"Code" : "Cicero"
		}, {
			"Name" : "Coal City",
			"Code" : "Coal City"
		}, {
			"Name" : "Collinsville",
			"Code" : "Collinsville"
		}, {
			"Name" : "Congerville",
			"Code" : "Congerville"
		}, {
			"Name" : "Country Club Hills",
			"Code" : "Country Club Hills"
		}, {
			"Name" : "Crest Hill",
			"Code" : "Crest Hill"
		}, {
			"Name" : "Crestwood",
			"Code" : "Crestwood"
		}, {
			"Name" : "Crystal Lake",
			"Code" : "Crystal Lake"
		}, {
			"Name" : "Danville",
			"Code" : "Danville"
		}, {
			"Name" : "Darien",
			"Code" : "Darien"
		}, {
			"Name" : "Decatur",
			"Code" : "Decatur"
		}, {
			"Name" : "Deerfield",
			"Code" : "Deerfield"
		}, {
			"Name" : "DeKalb",
			"Code" : "DeKalb"
		}, {
			"Name" : "Des Plaines",
			"Code" : "Des Plaines"
		}, {
			"Name" : "Dixon",
			"Code" : "Dixon"
		}, {
			"Name" : "Dolton",
			"Code" : "Dolton"
		}, {
			"Name" : "Downers Grove",
			"Code" : "Downers Grove"
		}, {
			"Name" : "Earlville",
			"Code" : "Earlville"
		}, {
			"Name" : "East Dundee",
			"Code" : "East Dundee"
		}, {
			"Name" : "East Moline",
			"Code" : "East Moline"
		}, {
			"Name" : "East Peoria",
			"Code" : "East Peoria"
		}, {
			"Name" : "East Saint Louis",
			"Code" : "East Saint Louis"
		}, {
			"Name" : "Edwardsville",
			"Code" : "Edwardsville"
		}, {
			"Name" : "Effingham",
			"Code" : "Effingham"
		}, {
			"Name" : "Elburn",
			"Code" : "Elburn"
		}, {
			"Name" : "Elgin",
			"Code" : "Elgin"
		}, {
			"Name" : "Elk Grove",
			"Code" : "Elk Grove"
		}, {
			"Name" : "Elk Grove Village",
			"Code" : "Elk Grove Village"
		}, {
			"Name" : "Elmhurst",
			"Code" : "Elmhurst"
		}, {
			"Name" : "Elmwood Park",
			"Code" : "Elmwood Park"
		}, {
			"Name" : "Evanston",
			"Code" : "Evanston"
		}, {
			"Name" : "Evergreen Park",
			"Code" : "Evergreen Park"
		}, {
			"Name" : "Fairview Heights",
			"Code" : "Fairview Heights"
		}, {
			"Name" : "Flossmoor",
			"Code" : "Flossmoor"
		}, {
			"Name" : "Forest Park",
			"Code" : "Forest Park"
		}, {
			"Name" : "Frankfort",
			"Code" : "Frankfort"
		}, {
			"Name" : "Franklin Park",
			"Code" : "Franklin Park"
		}, {
			"Name" : "Freeport",
			"Code" : "Freeport"
		}, {
			"Name" : "Galena",
			"Code" : "Galena"
		}, {
			"Name" : "Galesburg",
			"Code" : "Galesburg"
		}, {
			"Name" : "Geneva",
			"Code" : "Geneva"
		}, {
			"Name" : "Genoa",
			"Code" : "Genoa"
		}, {
			"Name" : "Glen Carbon",
			"Code" : "Glen Carbon"
		}, {
			"Name" : "Glen Ellyn",
			"Code" : "Glen Ellyn"
		}, {
			"Name" : "Glencoe",
			"Code" : "Glencoe"
		}, {
			"Name" : "Glendale Heights",
			"Code" : "Glendale Heights"
		}, {
			"Name" : "Glenview",
			"Code" : "Glenview"
		}, {
			"Name" : "Godfrey",
			"Code" : "Godfrey"
		}, {
			"Name" : "Goodings Grove",
			"Code" : "Goodings Grove"
		}, {
			"Name" : "Granite City",
			"Code" : "Granite City"
		}, {
			"Name" : "Grayslake",
			"Code" : "Grayslake"
		}, {
			"Name" : "Gurnee",
			"Code" : "Gurnee"
		}, {
			"Name" : "Hamilton",
			"Code" : "Hamilton"
		}, {
			"Name" : "Hampshire",
			"Code" : "Hampshire"
		}, {
			"Name" : "Hanover Park",
			"Code" : "Hanover Park"
		}, {
			"Name" : "Harvard",
			"Code" : "Harvard"
		}, {
			"Name" : "Harvey",
			"Code" : "Harvey"
		}, {
			"Name" : "Hawthorn Woods",
			"Code" : "Hawthorn Woods"
		}, {
			"Name" : "Hazel Crest",
			"Code" : "Hazel Crest"
		}, {
			"Name" : "Herrin",
			"Code" : "Herrin"
		}, {
			"Name" : "Hickory Hills",
			"Code" : "Hickory Hills"
		}, {
			"Name" : "Highland Park",
			"Code" : "Highland Park"
		}, {
			"Name" : "Hinsdale",
			"Code" : "Hinsdale"
		}, {
			"Name" : "Hoffman Estates",
			"Code" : "Hoffman Estates"
		}, {
			"Name" : "Homewood",
			"Code" : "Homewood"
		}, {
			"Name" : "Huntley",
			"Code" : "Huntley"
		}, {
			"Name" : "Illinois City",
			"Code" : "Illinois City"
		}, {
			"Name" : "Ingleside",
			"Code" : "Ingleside"
		}, {
			"Name" : "Itasca",
			"Code" : "Itasca"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Johnston City",
			"Code" : "Johnston City"
		}, {
			"Name" : "Joliet",
			"Code" : "Joliet"
		}, {
			"Name" : "Justice",
			"Code" : "Justice"
		}, {
			"Name" : "Kankakee",
			"Code" : "Kankakee"
		}, {
			"Name" : "Kenilworth",
			"Code" : "Kenilworth"
		}, {
			"Name" : "Kewanee",
			"Code" : "Kewanee"
		}, {
			"Name" : "La Grange",
			"Code" : "La Grange"
		}, {
			"Name" : "La Grange Park",
			"Code" : "La Grange Park"
		}, {
			"Name" : "La Salle",
			"Code" : "La Salle"
		}, {
			"Name" : "Lake Bluff",
			"Code" : "Lake Bluff"
		}, {
			"Name" : "Lake Forest",
			"Code" : "Lake Forest"
		}, {
			"Name" : "Lake in the Hills",
			"Code" : "Lake in the Hills"
		}, {
			"Name" : "Lake Zurich",
			"Code" : "Lake Zurich"
		}, {
			"Name" : "Lansing",
			"Code" : "Lansing"
		}, {
			"Name" : "Lemont",
			"Code" : "Lemont"
		}, {
			"Name" : "Libertyville",
			"Code" : "Libertyville"
		}, {
			"Name" : "Lincoln",
			"Code" : "Lincoln"
		}, {
			"Name" : "Lincolnwood",
			"Code" : "Lincolnwood"
		}, {
			"Name" : "Lindenhurst",
			"Code" : "Lindenhurst"
		}, {
			"Name" : "Lindenwood",
			"Code" : "Lindenwood"
		}, {
			"Name" : "Lisle",
			"Code" : "Lisle"
		}, {
			"Name" : "Lockport",
			"Code" : "Lockport"
		}, {
			"Name" : "Lombard",
			"Code" : "Lombard"
		}, {
			"Name" : "Long Grove",
			"Code" : "Long Grove"
		}, {
			"Name" : "Loves Park",
			"Code" : "Loves Park"
		}, {
			"Name" : "Lyons",
			"Code" : "Lyons"
		}, {
			"Name" : "MacHenry",
			"Code" : "MacHenry"
		}, {
			"Name" : "Machesney Park",
			"Code" : "Machesney Park"
		}, {
			"Name" : "Macomb",
			"Code" : "Macomb"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Markham",
			"Code" : "Markham"
		}, {
			"Name" : "Marshall",
			"Code" : "Marshall"
		}, {
			"Name" : "Martinsville",
			"Code" : "Martinsville"
		}, {
			"Name" : "Maryville",
			"Code" : "Maryville"
		}, {
			"Name" : "Matteson",
			"Code" : "Matteson"
		}, {
			"Name" : "Mattoon",
			"Code" : "Mattoon"
		}, {
			"Name" : "Maywood",
			"Code" : "Maywood"
		}, {
			"Name" : "McHenry",
			"Code" : "McHenry"
		}, {
			"Name" : "Melrose Park",
			"Code" : "Melrose Park"
		}, {
			"Name" : "Midlothian",
			"Code" : "Midlothian"
		}, {
			"Name" : "Milan",
			"Code" : "Milan"
		}, {
			"Name" : "Minooka",
			"Code" : "Minooka"
		}, {
			"Name" : "Mokena",
			"Code" : "Mokena"
		}, {
			"Name" : "Moline",
			"Code" : "Moline"
		}, {
			"Name" : "Momence",
			"Code" : "Momence"
		}, {
			"Name" : "Montgomery",
			"Code" : "Montgomery"
		}, {
			"Name" : "Monticello",
			"Code" : "Monticello"
		}, {
			"Name" : "Morris",
			"Code" : "Morris"
		}, {
			"Name" : "Morton",
			"Code" : "Morton"
		}, {
			"Name" : "Morton Grove",
			"Code" : "Morton Grove"
		}, {
			"Name" : "Mossville",
			"Code" : "Mossville"
		}, {
			"Name" : "Mount Prospect",
			"Code" : "Mount Prospect"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "Mount Zion",
			"Code" : "Mount Zion"
		}, {
			"Name" : "Mundelein",
			"Code" : "Mundelein"
		}, {
			"Name" : "Naperville",
			"Code" : "Naperville"
		}, {
			"Name" : "New Lenox",
			"Code" : "New Lenox"
		}, {
			"Name" : "Niles",
			"Code" : "Niles"
		}, {
			"Name" : "Normal",
			"Code" : "Normal"
		}, {
			"Name" : "Norridge",
			"Code" : "Norridge"
		}, {
			"Name" : "North Aurora",
			"Code" : "North Aurora"
		}, {
			"Name" : "North Chicago",
			"Code" : "North Chicago"
		}, {
			"Name" : "Northbrook",
			"Code" : "Northbrook"
		}, {
			"Name" : "Northfield",
			"Code" : "Northfield"
		}, {
			"Name" : "Northlake",
			"Code" : "Northlake"
		}, {
			"Name" : "O'Fallon",
			"Code" : "O'Fallon"
		}, {
			"Name" : "Oak Forest",
			"Code" : "Oak Forest"
		}, {
			"Name" : "Oak Lawn",
			"Code" : "Oak Lawn"
		}, {
			"Name" : "Oak Park",
			"Code" : "Oak Park"
		}, {
			"Name" : "Oakbrook",
			"Code" : "Oakbrook"
		}, {
			"Name" : "Oakwood",
			"Code" : "Oakwood"
		}, {
			"Name" : "Olney",
			"Code" : "Olney"
		}, {
			"Name" : "Orland Park",
			"Code" : "Orland Park"
		}, {
			"Name" : "Osco",
			"Code" : "Osco"
		}, {
			"Name" : "Ottawa",
			"Code" : "Ottawa"
		}, {
			"Name" : "Palatine",
			"Code" : "Palatine"
		}, {
			"Name" : "Palos Heights",
			"Code" : "Palos Heights"
		}, {
			"Name" : "Palos Hills",
			"Code" : "Palos Hills"
		}, {
			"Name" : "Park Forest",
			"Code" : "Park Forest"
		}, {
			"Name" : "Park Ridge",
			"Code" : "Park Ridge"
		}, {
			"Name" : "Pekin",
			"Code" : "Pekin"
		}, {
			"Name" : "Peoria",
			"Code" : "Peoria"
		}, {
			"Name" : "Peru",
			"Code" : "Peru"
		}, {
			"Name" : "Plainfield",
			"Code" : "Plainfield"
		}, {
			"Name" : "Pontiac",
			"Code" : "Pontiac"
		}, {
			"Name" : "Princeton",
			"Code" : "Princeton"
		}, {
			"Name" : "Prospect Heights",
			"Code" : "Prospect Heights"
		}, {
			"Name" : "Quincy",
			"Code" : "Quincy"
		}, {
			"Name" : "Ramsey",
			"Code" : "Ramsey"
		}, {
			"Name" : "Rantoul",
			"Code" : "Rantoul"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Richton Park",
			"Code" : "Richton Park"
		}, {
			"Name" : "River Forest",
			"Code" : "River Forest"
		}, {
			"Name" : "Riverdale",
			"Code" : "Riverdale"
		}, {
			"Name" : "Rochelle",
			"Code" : "Rochelle"
		}, {
			"Name" : "Rock Island",
			"Code" : "Rock Island"
		}, {
			"Name" : "Rockford",
			"Code" : "Rockford"
		}, {
			"Name" : "Rolling Meadows",
			"Code" : "Rolling Meadows"
		}, {
			"Name" : "Romeoville",
			"Code" : "Romeoville"
		}, {
			"Name" : "Roscoe",
			"Code" : "Roscoe"
		}, {
			"Name" : "Roselle",
			"Code" : "Roselle"
		}, {
			"Name" : "Round Lake Beach",
			"Code" : "Round Lake Beach"
		}, {
			"Name" : "Saint Charles",
			"Code" : "Saint Charles"
		}, {
			"Name" : "Sauget",
			"Code" : "Sauget"
		}, {
			"Name" : "Sauk Village",
			"Code" : "Sauk Village"
		}, {
			"Name" : "Schaumburg",
			"Code" : "Schaumburg"
		}, {
			"Name" : "Schiller Park",
			"Code" : "Schiller Park"
		}, {
			"Name" : "Shumway",
			"Code" : "Shumway"
		}, {
			"Name" : "Skokie",
			"Code" : "Skokie"
		}, {
			"Name" : "South Elgin",
			"Code" : "South Elgin"
		}, {
			"Name" : "South Holland",
			"Code" : "South Holland"
		}, {
			"Name" : "Spring Valley",
			"Code" : "Spring Valley"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Sterling",
			"Code" : "Sterling"
		}, {
			"Name" : "Streamwood",
			"Code" : "Streamwood"
		}, {
			"Name" : "Streator",
			"Code" : "Streator"
		}, {
			"Name" : "Swansea",
			"Code" : "Swansea"
		}, {
			"Name" : "Sycamore",
			"Code" : "Sycamore"
		}, {
			"Name" : "Taylorville",
			"Code" : "Taylorville"
		}, {
			"Name" : "Tinley Park",
			"Code" : "Tinley Park"
		}, {
			"Name" : "Trenton",
			"Code" : "Trenton"
		}, {
			"Name" : "Urbana",
			"Code" : "Urbana"
		}, {
			"Name" : "Ursa",
			"Code" : "Ursa"
		}, {
			"Name" : "Vernon Hills",
			"Code" : "Vernon Hills"
		}, {
			"Name" : "Villa Park",
			"Code" : "Villa Park"
		}, {
			"Name" : "Walnut",
			"Code" : "Walnut"
		}, {
			"Name" : "Warrenville",
			"Code" : "Warrenville"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "Waukegan",
			"Code" : "Waukegan"
		}, {
			"Name" : "West Chicago",
			"Code" : "West Chicago"
		}, {
			"Name" : "West Dundee",
			"Code" : "West Dundee"
		}, {
			"Name" : "Westchester",
			"Code" : "Westchester"
		}, {
			"Name" : "Western Springs",
			"Code" : "Western Springs"
		}, {
			"Name" : "Westmont",
			"Code" : "Westmont"
		}, {
			"Name" : "Wheaton",
			"Code" : "Wheaton"
		}, {
			"Name" : "Wheeling",
			"Code" : "Wheeling"
		}, {
			"Name" : "Willowbrook",
			"Code" : "Willowbrook"
		}, {
			"Name" : "Wilmette",
			"Code" : "Wilmette"
		}, {
			"Name" : "Winnebago",
			"Code" : "Winnebago"
		}, {
			"Name" : "Winnetka",
			"Code" : "Winnetka"
		}, {
			"Name" : "Wood Dale",
			"Code" : "Wood Dale"
		}, {
			"Name" : "Wood River",
			"Code" : "Wood River"
		}, {
			"Name" : "Woodridge",
			"Code" : "Woodridge"
		}, {
			"Name" : "Woodstock",
			"Code" : "Woodstock"
		}, {
			"Name" : "Worth",
			"Code" : "Worth"
		}, {
			"Name" : "Zion",
			"Code" : "Zion"
		} ]
	}, {
		"Name" : "Indiana",
		"Code" : "IN",
		"City" : [ {
			"Name" : "Albion",
			"Code" : "Albion"
		}, {
			"Name" : "Anderson",
			"Code" : "Anderson"
		}, {
			"Name" : "Angola",
			"Code" : "Angola"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Beech Grove",
			"Code" : "Beech Grove"
		}, {
			"Name" : "Bloomington",
			"Code" : "Bloomington"
		}, {
			"Name" : "Brownsburg",
			"Code" : "Brownsburg"
		}, {
			"Name" : "Carmel",
			"Code" : "Carmel"
		}, {
			"Name" : "Cedar Lake",
			"Code" : "Cedar Lake"
		}, {
			"Name" : "Chesterton",
			"Code" : "Chesterton"
		}, {
			"Name" : "Clarksville",
			"Code" : "Clarksville"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Connersville",
			"Code" : "Connersville"
		}, {
			"Name" : "Crawfordsville",
			"Code" : "Crawfordsville"
		}, {
			"Name" : "Crown Point",
			"Code" : "Crown Point"
		}, {
			"Name" : "Dyer",
			"Code" : "Dyer"
		}, {
			"Name" : "East Chicago",
			"Code" : "East Chicago"
		}, {
			"Name" : "Elkhart",
			"Code" : "Elkhart"
		}, {
			"Name" : "Evansville",
			"Code" : "Evansville"
		}, {
			"Name" : "Fishers",
			"Code" : "Fishers"
		}, {
			"Name" : "Fort Wayne",
			"Code" : "Fort Wayne"
		}, {
			"Name" : "Frankfort",
			"Code" : "Frankfort"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Gary",
			"Code" : "Gary"
		}, {
			"Name" : "Goshen",
			"Code" : "Goshen"
		}, {
			"Name" : "Gosport",
			"Code" : "Gosport"
		}, {
			"Name" : "Granger",
			"Code" : "Granger"
		}, {
			"Name" : "Greenfield",
			"Code" : "Greenfield"
		}, {
			"Name" : "Greensburg",
			"Code" : "Greensburg"
		}, {
			"Name" : "Greenwood",
			"Code" : "Greenwood"
		}, {
			"Name" : "Griffith",
			"Code" : "Griffith"
		}, {
			"Name" : "Hammond",
			"Code" : "Hammond"
		}, {
			"Name" : "Helmsburg",
			"Code" : "Helmsburg"
		}, {
			"Name" : "Highland",
			"Code" : "Highland"
		}, {
			"Name" : "Hobart",
			"Code" : "Hobart"
		}, {
			"Name" : "Huntington",
			"Code" : "Huntington"
		}, {
			"Name" : "Indianapolis",
			"Code" : "Indianapolis"
		}, {
			"Name" : "Jasper",
			"Code" : "Jasper"
		}, {
			"Name" : "Jeffersonville",
			"Code" : "Jeffersonville"
		}, {
			"Name" : "Knightstown",
			"Code" : "Knightstown"
		}, {
			"Name" : "Kokomo",
			"Code" : "Kokomo"
		}, {
			"Name" : "La Porte",
			"Code" : "La Porte"
		}, {
			"Name" : "Lafayette",
			"Code" : "Lafayette"
		}, {
			"Name" : "Lake Station",
			"Code" : "Lake Station"
		}, {
			"Name" : "Lawrence",
			"Code" : "Lawrence"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Liberty",
			"Code" : "Liberty"
		}, {
			"Name" : "Logansport",
			"Code" : "Logansport"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Martinsville",
			"Code" : "Martinsville"
		}, {
			"Name" : "Merrillville",
			"Code" : "Merrillville"
		}, {
			"Name" : "Michigan City",
			"Code" : "Michigan City"
		}, {
			"Name" : "Mishawaka",
			"Code" : "Mishawaka"
		}, {
			"Name" : "Muncie",
			"Code" : "Muncie"
		}, {
			"Name" : "Munster",
			"Code" : "Munster"
		}, {
			"Name" : "N. Albany",
			"Code" : "N. Albany"
		}, {
			"Name" : "Nashville",
			"Code" : "Nashville"
		}, {
			"Name" : "New Albany",
			"Code" : "New Albany"
		}, {
			"Name" : "New Castle",
			"Code" : "New Castle"
		}, {
			"Name" : "New Haven",
			"Code" : "New Haven"
		}, {
			"Name" : "New Trenton",
			"Code" : "New Trenton"
		}, {
			"Name" : "Noblesville",
			"Code" : "Noblesville"
		}, {
			"Name" : "North Vernon",
			"Code" : "North Vernon"
		}, {
			"Name" : "Osceola",
			"Code" : "Osceola"
		}, {
			"Name" : "Peru",
			"Code" : "Peru"
		}, {
			"Name" : "Plainfield",
			"Code" : "Plainfield"
		}, {
			"Name" : "Plymouth",
			"Code" : "Plymouth"
		}, {
			"Name" : "Poland",
			"Code" : "Poland"
		}, {
			"Name" : "Portage",
			"Code" : "Portage"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Rising Sun",
			"Code" : "Rising Sun"
		}, {
			"Name" : "Roanoke",
			"Code" : "Roanoke"
		}, {
			"Name" : "Rockport",
			"Code" : "Rockport"
		}, {
			"Name" : "Schererville",
			"Code" : "Schererville"
		}, {
			"Name" : "Scottsburg",
			"Code" : "Scottsburg"
		}, {
			"Name" : "Seymour",
			"Code" : "Seymour"
		}, {
			"Name" : "Shelbyville",
			"Code" : "Shelbyville"
		}, {
			"Name" : "South Bend",
			"Code" : "South Bend"
		}, {
			"Name" : "Speedway",
			"Code" : "Speedway"
		}, {
			"Name" : "St. John",
			"Code" : "St. John"
		}, {
			"Name" : "Terre Haute",
			"Code" : "Terre Haute"
		}, {
			"Name" : "Thorntown",
			"Code" : "Thorntown"
		}, {
			"Name" : "Tippecanoe",
			"Code" : "Tippecanoe"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Valparaiso",
			"Code" : "Valparaiso"
		}, {
			"Name" : "Vermont",
			"Code" : "Vermont"
		}, {
			"Name" : "Vincennes",
			"Code" : "Vincennes"
		}, {
			"Name" : "Wabash",
			"Code" : "Wabash"
		}, {
			"Name" : "Warsaw",
			"Code" : "Warsaw"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "West Lafayette",
			"Code" : "West Lafayette"
		}, {
			"Name" : "Williams",
			"Code" : "Williams"
		} ]
	}, {
		"Name" : "Iowa",
		"Code" : "IA",
		"City" : [ {
			"Name" : "Altoona",
			"Code" : "Altoona"
		}, {
			"Name" : "Ames",
			"Code" : "Ames"
		}, {
			"Name" : "Ankeny",
			"Code" : "Ankeny"
		}, {
			"Name" : "Bettendorf",
			"Code" : "Bettendorf"
		}, {
			"Name" : "Boone",
			"Code" : "Boone"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Carroll",
			"Code" : "Carroll"
		}, {
			"Name" : "Cedar Falls",
			"Code" : "Cedar Falls"
		}, {
			"Name" : "Cedar Rapids",
			"Code" : "Cedar Rapids"
		}, {
			"Name" : "Clarinda",
			"Code" : "Clarinda"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Clive",
			"Code" : "Clive"
		}, {
			"Name" : "Coralville",
			"Code" : "Coralville"
		}, {
			"Name" : "Council Bluffs",
			"Code" : "Council Bluffs"
		}, {
			"Name" : "Davenport",
			"Code" : "Davenport"
		}, {
			"Name" : "Des Moines",
			"Code" : "Des Moines"
		}, {
			"Name" : "Dubuque",
			"Code" : "Dubuque"
		}, {
			"Name" : "Eldridge",
			"Code" : "Eldridge"
		}, {
			"Name" : "Elkader",
			"Code" : "Elkader"
		}, {
			"Name" : "Essex",
			"Code" : "Essex"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Fayette",
			"Code" : "Fayette"
		}, {
			"Name" : "Fort Dodge",
			"Code" : "Fort Dodge"
		}, {
			"Name" : "Fort Madison",
			"Code" : "Fort Madison"
		}, {
			"Name" : "Harlan",
			"Code" : "Harlan"
		}, {
			"Name" : "Indianola",
			"Code" : "Indianola"
		}, {
			"Name" : "Iowa City",
			"Code" : "Iowa City"
		}, {
			"Name" : "Kalona",
			"Code" : "Kalona"
		}, {
			"Name" : "Keokuk",
			"Code" : "Keokuk"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Marshalltown",
			"Code" : "Marshalltown"
		}, {
			"Name" : "Mason City",
			"Code" : "Mason City"
		}, {
			"Name" : "Muscatine",
			"Code" : "Muscatine"
		}, {
			"Name" : "Newton",
			"Code" : "Newton"
		}, {
			"Name" : "Orange City",
			"Code" : "Orange City"
		}, {
			"Name" : "Oskaloosa",
			"Code" : "Oskaloosa"
		}, {
			"Name" : "Ottumwa",
			"Code" : "Ottumwa"
		}, {
			"Name" : "Pella",
			"Code" : "Pella"
		}, {
			"Name" : "Sioux City",
			"Code" : "Sioux City"
		}, {
			"Name" : "Spencer",
			"Code" : "Spencer"
		}, {
			"Name" : "Storm Lake",
			"Code" : "Storm Lake"
		}, {
			"Name" : "Urbandale",
			"Code" : "Urbandale"
		}, {
			"Name" : "Waterloo",
			"Code" : "Waterloo"
		}, {
			"Name" : "West Des Moines",
			"Code" : "West Des Moines"
		} ]
	}, {
		"Name" : "Kansas",
		"Code" : "KS",
		"City" : [ {
			"Name" : "Arkansas City",
			"Code" : "Arkansas City"
		}, {
			"Name" : "Atchison",
			"Code" : "Atchison"
		}, {
			"Name" : "Coffeyville",
			"Code" : "Coffeyville"
		}, {
			"Name" : "Derby",
			"Code" : "Derby"
		}, {
			"Name" : "Dodge City",
			"Code" : "Dodge City"
		}, {
			"Name" : "El Dorado",
			"Code" : "El Dorado"
		}, {
			"Name" : "Elk City",
			"Code" : "Elk City"
		}, {
			"Name" : "Emporia",
			"Code" : "Emporia"
		}, {
			"Name" : "Fort Riley North",
			"Code" : "Fort Riley North"
		}, {
			"Name" : "Garden City",
			"Code" : "Garden City"
		}, {
			"Name" : "Great Bend",
			"Code" : "Great Bend"
		}, {
			"Name" : "Hays",
			"Code" : "Hays"
		}, {
			"Name" : "Hutchinson",
			"Code" : "Hutchinson"
		}, {
			"Name" : "Independence",
			"Code" : "Independence"
		}, {
			"Name" : "Junction City",
			"Code" : "Junction City"
		}, {
			"Name" : "Kansas City",
			"Code" : "Kansas City"
		}, {
			"Name" : "Kingman",
			"Code" : "Kingman"
		}, {
			"Name" : "Lawrence",
			"Code" : "Lawrence"
		}, {
			"Name" : "Leavenworth",
			"Code" : "Leavenworth"
		}, {
			"Name" : "Leawood",
			"Code" : "Leawood"
		}, {
			"Name" : "Lenexa",
			"Code" : "Lenexa"
		}, {
			"Name" : "Liberal",
			"Code" : "Liberal"
		}, {
			"Name" : "MacPherson",
			"Code" : "MacPherson"
		}, {
			"Name" : "Manhattan",
			"Code" : "Manhattan"
		}, {
			"Name" : "Merriam",
			"Code" : "Merriam"
		}, {
			"Name" : "Minneapolis",
			"Code" : "Minneapolis"
		}, {
			"Name" : "Moscow",
			"Code" : "Moscow"
		}, {
			"Name" : "Moundridge",
			"Code" : "Moundridge"
		}, {
			"Name" : "Nashville",
			"Code" : "Nashville"
		}, {
			"Name" : "Newton",
			"Code" : "Newton"
		}, {
			"Name" : "Olathe",
			"Code" : "Olathe"
		}, {
			"Name" : "Ottawa",
			"Code" : "Ottawa"
		}, {
			"Name" : "Overland Park",
			"Code" : "Overland Park"
		}, {
			"Name" : "Parsons",
			"Code" : "Parsons"
		}, {
			"Name" : "Pittsburg",
			"Code" : "Pittsburg"
		}, {
			"Name" : "Prairie Village",
			"Code" : "Prairie Village"
		}, {
			"Name" : "Rose Hill",
			"Code" : "Rose Hill"
		}, {
			"Name" : "Salina",
			"Code" : "Salina"
		}, {
			"Name" : "Shawnee",
			"Code" : "Shawnee"
		}, {
			"Name" : "tecumseh",
			"Code" : "tecumseh"
		}, {
			"Name" : "Topeka",
			"Code" : "Topeka"
		}, {
			"Name" : "Wichita",
			"Code" : "Wichita"
		}, {
			"Name" : "Winfield",
			"Code" : "Winfield"
		} ]
	}, {
		"Name" : "Kentucky",
		"Code" : "KY",
		"City" : [ {
			"Name" : "Albany",
			"Code" : "Albany"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Bardstown",
			"Code" : "Bardstown"
		}, {
			"Name" : "Berea",
			"Code" : "Berea"
		}, {
			"Name" : "Bowling Green",
			"Code" : "Bowling Green"
		}, {
			"Name" : "Campbellsville",
			"Code" : "Campbellsville"
		}, {
			"Name" : "Catlettsburg",
			"Code" : "Catlettsburg"
		}, {
			"Name" : "Covington",
			"Code" : "Covington"
		}, {
			"Name" : "Crescent Springs",
			"Code" : "Crescent Springs"
		}, {
			"Name" : "Danville",
			"Code" : "Danville"
		}, {
			"Name" : "Dawson Springs",
			"Code" : "Dawson Springs"
		}, {
			"Name" : "Eastview",
			"Code" : "Eastview"
		}, {
			"Name" : "Eddyville",
			"Code" : "Eddyville"
		}, {
			"Name" : "Elizabethtown",
			"Code" : "Elizabethtown"
		}, {
			"Name" : "Erlanger",
			"Code" : "Erlanger"
		}, {
			"Name" : "Evarts",
			"Code" : "Evarts"
		}, {
			"Name" : "Fern Creek",
			"Code" : "Fern Creek"
		}, {
			"Name" : "Florence",
			"Code" : "Florence"
		}, {
			"Name" : "Fort Campbell North",
			"Code" : "Fort Campbell North"
		}, {
			"Name" : "Fort Knox",
			"Code" : "Fort Knox"
		}, {
			"Name" : "Fort Mitchell",
			"Code" : "Fort Mitchell"
		}, {
			"Name" : "Fort Thomas",
			"Code" : "Fort Thomas"
		}, {
			"Name" : "Frankfort",
			"Code" : "Frankfort"
		}, {
			"Name" : "Georgetown",
			"Code" : "Georgetown"
		}, {
			"Name" : "Glasgow",
			"Code" : "Glasgow"
		}, {
			"Name" : "Grays Knob",
			"Code" : "Grays Knob"
		}, {
			"Name" : "Henderson",
			"Code" : "Henderson"
		}, {
			"Name" : "Highview",
			"Code" : "Highview"
		}, {
			"Name" : "Hopkinsville",
			"Code" : "Hopkinsville"
		}, {
			"Name" : "Independence",
			"Code" : "Independence"
		}, {
			"Name" : "Jeffersontown",
			"Code" : "Jeffersontown"
		}, {
			"Name" : "Lawrenceburg",
			"Code" : "Lawrenceburg"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lexington",
			"Code" : "Lexington"
		}, {
			"Name" : "Lexington-Fayette",
			"Code" : "Lexington-Fayette"
		}, {
			"Name" : "Louisville",
			"Code" : "Louisville"
		}, {
			"Name" : "Madisonville",
			"Code" : "Madisonville"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Mayfield",
			"Code" : "Mayfield"
		}, {
			"Name" : "Maysville",
			"Code" : "Maysville"
		}, {
			"Name" : "Middlesborough",
			"Code" : "Middlesborough"
		}, {
			"Name" : "Murray",
			"Code" : "Murray"
		}, {
			"Name" : "Nebo",
			"Code" : "Nebo"
		}, {
			"Name" : "Newburg",
			"Code" : "Newburg"
		}, {
			"Name" : "Newport",
			"Code" : "Newport"
		}, {
			"Name" : "Nicholasville",
			"Code" : "Nicholasville"
		}, {
			"Name" : "Okolona",
			"Code" : "Okolona"
		}, {
			"Name" : "Olive Hill",
			"Code" : "Olive Hill"
		}, {
			"Name" : "Owensboro",
			"Code" : "Owensboro"
		}, {
			"Name" : "Paducah",
			"Code" : "Paducah"
		}, {
			"Name" : "Paris",
			"Code" : "Paris"
		}, {
			"Name" : "Pikeville",
			"Code" : "Pikeville"
		}, {
			"Name" : "Pleasure Ridge Park",
			"Code" : "Pleasure Ridge Park"
		}, {
			"Name" : "Queens",
			"Code" : "Queens"
		}, {
			"Name" : "Radcliff",
			"Code" : "Radcliff"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Saint Dennis",
			"Code" : "Saint Dennis"
		}, {
			"Name" : "Saint Matthews",
			"Code" : "Saint Matthews"
		}, {
			"Name" : "Scottsville",
			"Code" : "Scottsville"
		}, {
			"Name" : "Shively",
			"Code" : "Shively"
		}, {
			"Name" : "Somerset",
			"Code" : "Somerset"
		}, {
			"Name" : "South Shore",
			"Code" : "South Shore"
		}, {
			"Name" : "Tollesboro",
			"Code" : "Tollesboro"
		}, {
			"Name" : "Valley Station",
			"Code" : "Valley Station"
		}, {
			"Name" : "Wallins Creek",
			"Code" : "Wallins Creek"
		}, {
			"Name" : "Walton",
			"Code" : "Walton"
		}, {
			"Name" : "Winchester",
			"Code" : "Winchester"
		} ]
	}, {
		"Name" : "Louisiana",
		"Code" : "LA",
		"City" : [ {
			"Name" : "Abbeville",
			"Code" : "Abbeville"
		}, {
			"Name" : "Alexandria",
			"Code" : "Alexandria"
		}, {
			"Name" : "Amite",
			"Code" : "Amite"
		}, {
			"Name" : "Baker",
			"Code" : "Baker"
		}, {
			"Name" : "Bastrop",
			"Code" : "Bastrop"
		}, {
			"Name" : "Baton Rouge",
			"Code" : "Baton Rouge"
		}, {
			"Name" : "Bayou Cane",
			"Code" : "Bayou Cane"
		}, {
			"Name" : "Bogalusa",
			"Code" : "Bogalusa"
		}, {
			"Name" : "Bossier City",
			"Code" : "Bossier City"
		}, {
			"Name" : "Broussard",
			"Code" : "Broussard"
		}, {
			"Name" : "Calhoun",
			"Code" : "Calhoun"
		}, {
			"Name" : "Chalmette",
			"Code" : "Chalmette"
		}, {
			"Name" : "Covington",
			"Code" : "Covington"
		}, {
			"Name" : "Crowley",
			"Code" : "Crowley"
		}, {
			"Name" : "De Ridder",
			"Code" : "De Ridder"
		}, {
			"Name" : "Delcambre",
			"Code" : "Delcambre"
		}, {
			"Name" : "Denham Springs",
			"Code" : "Denham Springs"
		}, {
			"Name" : "Estelle",
			"Code" : "Estelle"
		}, {
			"Name" : "Eunice",
			"Code" : "Eunice"
		}, {
			"Name" : "Fort Polk South",
			"Code" : "Fort Polk South"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "French Settlement",
			"Code" : "French Settlement"
		}, {
			"Name" : "Garyville",
			"Code" : "Garyville"
		}, {
			"Name" : "Geismar",
			"Code" : "Geismar"
		}, {
			"Name" : "Gretna",
			"Code" : "Gretna"
		}, {
			"Name" : "Hammond",
			"Code" : "Hammond"
		}, {
			"Name" : "Harahan",
			"Code" : "Harahan"
		}, {
			"Name" : "Harvey",
			"Code" : "Harvey"
		}, {
			"Name" : "Houma",
			"Code" : "Houma"
		}, {
			"Name" : "Independence",
			"Code" : "Independence"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Jennings",
			"Code" : "Jennings"
		}, {
			"Name" : "Kenner",
			"Code" : "Kenner"
		}, {
			"Name" : "Lafayette",
			"Code" : "Lafayette"
		}, {
			"Name" : "Lake Charles",
			"Code" : "Lake Charles"
		}, {
			"Name" : "Laplace",
			"Code" : "Laplace"
		}, {
			"Name" : "Mandeville",
			"Code" : "Mandeville"
		}, {
			"Name" : "Marrero",
			"Code" : "Marrero"
		}, {
			"Name" : "Merrydale",
			"Code" : "Merrydale"
		}, {
			"Name" : "Metairie",
			"Code" : "Metairie"
		}, {
			"Name" : "Minden",
			"Code" : "Minden"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Morgan City",
			"Code" : "Morgan City"
		}, {
			"Name" : "Natchitoches",
			"Code" : "Natchitoches"
		}, {
			"Name" : "New Iberia",
			"Code" : "New Iberia"
		}, {
			"Name" : "New Orleans",
			"Code" : "New Orleans"
		}, {
			"Name" : "Opelousas",
			"Code" : "Opelousas"
		}, {
			"Name" : "Pineville",
			"Code" : "Pineville"
		}, {
			"Name" : "Pioneer",
			"Code" : "Pioneer"
		}, {
			"Name" : "Prairieville",
			"Code" : "Prairieville"
		}, {
			"Name" : "River Ridge",
			"Code" : "River Ridge"
		}, {
			"Name" : "Ruston",
			"Code" : "Ruston"
		}, {
			"Name" : "Saint Amant",
			"Code" : "Saint Amant"
		}, {
			"Name" : "Saint Martinville",
			"Code" : "Saint Martinville"
		}, {
			"Name" : "Shenandoah",
			"Code" : "Shenandoah"
		}, {
			"Name" : "Shreveport",
			"Code" : "Shreveport"
		}, {
			"Name" : "Slidell",
			"Code" : "Slidell"
		}, {
			"Name" : "Sulphur",
			"Code" : "Sulphur"
		}, {
			"Name" : "Terrytown",
			"Code" : "Terrytown"
		}, {
			"Name" : "Thibodaux",
			"Code" : "Thibodaux"
		}, {
			"Name" : "Timberlane",
			"Code" : "Timberlane"
		}, {
			"Name" : "Vinton",
			"Code" : "Vinton"
		}, {
			"Name" : "Waggaman",
			"Code" : "Waggaman"
		}, {
			"Name" : "West Monroe",
			"Code" : "West Monroe"
		}, {
			"Name" : "Westwego",
			"Code" : "Westwego"
		}, {
			"Name" : "Zachary",
			"Code" : "Zachary"
		} ]
	}, {
		"Name" : "Maine",
		"Code" : "ME",
		"City" : [ {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Augusta",
			"Code" : "Augusta"
		}, {
			"Name" : "Bangor",
			"Code" : "Bangor"
		}, {
			"Name" : "Bath",
			"Code" : "Bath"
		}, {
			"Name" : "Biddeford",
			"Code" : "Biddeford"
		}, {
			"Name" : "Brunswick",
			"Code" : "Brunswick"
		}, {
			"Name" : "Cornish",
			"Code" : "Cornish"
		}, {
			"Name" : "Dover-Foxcroft",
			"Code" : "Dover-Foxcroft"
		}, {
			"Name" : "Ellsworth",
			"Code" : "Ellsworth"
		}, {
			"Name" : "Etna",
			"Code" : "Etna"
		}, {
			"Name" : "Freeport",
			"Code" : "Freeport"
		}, {
			"Name" : "Gorham",
			"Code" : "Gorham"
		}, {
			"Name" : "Greene",
			"Code" : "Greene"
		}, {
			"Name" : "Harmony",
			"Code" : "Harmony"
		}, {
			"Name" : "Lewiston",
			"Code" : "Lewiston"
		}, {
			"Name" : "Liberty",
			"Code" : "Liberty"
		}, {
			"Name" : "Limerick",
			"Code" : "Limerick"
		}, {
			"Name" : "Lyman",
			"Code" : "Lyman"
		}, {
			"Name" : "Maine",
			"Code" : "Maine"
		}, {
			"Name" : "New Gloucester",
			"Code" : "New Gloucester"
		}, {
			"Name" : "Norridgewock",
			"Code" : "Norridgewock"
		}, {
			"Name" : "North Yarmouth",
			"Code" : "North Yarmouth"
		}, {
			"Name" : "Old Town",
			"Code" : "Old Town"
		}, {
			"Name" : "Orono",
			"Code" : "Orono"
		}, {
			"Name" : "Portland",
			"Code" : "Portland"
		}, {
			"Name" : "Presque Isle",
			"Code" : "Presque Isle"
		}, {
			"Name" : "Saco",
			"Code" : "Saco"
		}, {
			"Name" : "Sanford",
			"Code" : "Sanford"
		}, {
			"Name" : "Scarborough",
			"Code" : "Scarborough"
		}, {
			"Name" : "South Portland",
			"Code" : "South Portland"
		}, {
			"Name" : "Spruce Head",
			"Code" : "Spruce Head"
		}, {
			"Name" : "stockton springs",
			"Code" : "stockton springs"
		}, {
			"Name" : "Thomaston",
			"Code" : "Thomaston"
		}, {
			"Name" : "Waldoboro",
			"Code" : "Waldoboro"
		}, {
			"Name" : "Waterville",
			"Code" : "Waterville"
		}, {
			"Name" : "West Buxton",
			"Code" : "West Buxton"
		}, {
			"Name" : "Westbrook",
			"Code" : "Westbrook"
		}, {
			"Name" : "Whitefield",
			"Code" : "Whitefield"
		}, {
			"Name" : "Windham",
			"Code" : "Windham"
		}, {
			"Name" : "Yarmouth",
			"Code" : "Yarmouth"
		}, {
			"Name" : "York Harbor",
			"Code" : "York Harbor"
		} ]
	}, {
		"Name" : "Maryland",
		"Code" : "MD",
		"City" : [ {
			"Name" : "Aberdeen",
			"Code" : "Aberdeen"
		}, {
			"Name" : "Accokeek",
			"Code" : "Accokeek"
		}, {
			"Name" : "Adelphi",
			"Code" : "Adelphi"
		}, {
			"Name" : "Andrews Air Force Base",
			"Code" : "Andrews Air Force Base"
		}, {
			"Name" : "Annapolis",
			"Code" : "Annapolis"
		}, {
			"Name" : "Arbutus",
			"Code" : "Arbutus"
		}, {
			"Name" : "Arnold",
			"Code" : "Arnold"
		}, {
			"Name" : "Aspen Hill",
			"Code" : "Aspen Hill"
		}, {
			"Name" : "Baltimore",
			"Code" : "Baltimore"
		}, {
			"Name" : "Bel Air North",
			"Code" : "Bel Air North"
		}, {
			"Name" : "Bel Air South",
			"Code" : "Bel Air South"
		}, {
			"Name" : "Beltsville",
			"Code" : "Beltsville"
		}, {
			"Name" : "Berlin",
			"Code" : "Berlin"
		}, {
			"Name" : "Bethesda",
			"Code" : "Bethesda"
		}, {
			"Name" : "Bladensburg",
			"Code" : "Bladensburg"
		}, {
			"Name" : "Boonsboro",
			"Code" : "Boonsboro"
		}, {
			"Name" : "Bowie",
			"Code" : "Bowie"
		}, {
			"Name" : "Brookeville",
			"Code" : "Brookeville"
		}, {
			"Name" : "Brooklandville",
			"Code" : "Brooklandville"
		}, {
			"Name" : "Brooklyn Park",
			"Code" : "Brooklyn Park"
		}, {
			"Name" : "Burtonsville",
			"Code" : "Burtonsville"
		}, {
			"Name" : "Calverton",
			"Code" : "Calverton"
		}, {
			"Name" : "Cambridge",
			"Code" : "Cambridge"
		}, {
			"Name" : "Camp Springs",
			"Code" : "Camp Springs"
		}, {
			"Name" : "Capitol Heights",
			"Code" : "Capitol Heights"
		}, {
			"Name" : "Carney",
			"Code" : "Carney"
		}, {
			"Name" : "Catonsville",
			"Code" : "Catonsville"
		}, {
			"Name" : "Chestertown",
			"Code" : "Chestertown"
		}, {
			"Name" : "Chillum",
			"Code" : "Chillum"
		}, {
			"Name" : "Clarksburg",
			"Code" : "Clarksburg"
		}, {
			"Name" : "Clarksville",
			"Code" : "Clarksville"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Cockeysville",
			"Code" : "Cockeysville"
		}, {
			"Name" : "Colesville",
			"Code" : "Colesville"
		}, {
			"Name" : "College Park",
			"Code" : "College Park"
		}, {
			"Name" : "Columbia",
			"Code" : "Columbia"
		}, {
			"Name" : "Cooksville",
			"Code" : "Cooksville"
		}, {
			"Name" : "Coral Hills",
			"Code" : "Coral Hills"
		}, {
			"Name" : "Crofton",
			"Code" : "Crofton"
		}, {
			"Name" : "Cumberland",
			"Code" : "Cumberland"
		}, {
			"Name" : "Damascus",
			"Code" : "Damascus"
		}, {
			"Name" : "Darlington",
			"Code" : "Darlington"
		}, {
			"Name" : "District Heights",
			"Code" : "District Heights"
		}, {
			"Name" : "Dundalk",
			"Code" : "Dundalk"
		}, {
			"Name" : "East Riverdale",
			"Code" : "East Riverdale"
		}, {
			"Name" : "Easton",
			"Code" : "Easton"
		}, {
			"Name" : "Edgemere",
			"Code" : "Edgemere"
		}, {
			"Name" : "Edgewood",
			"Code" : "Edgewood"
		}, {
			"Name" : "Eldersburg",
			"Code" : "Eldersburg"
		}, {
			"Name" : "Elkridge",
			"Code" : "Elkridge"
		}, {
			"Name" : "Elkton",
			"Code" : "Elkton"
		}, {
			"Name" : "Ellicott City",
			"Code" : "Ellicott City"
		}, {
			"Name" : "Essex",
			"Code" : "Essex"
		}, {
			"Name" : "Fairland",
			"Code" : "Fairland"
		}, {
			"Name" : "Ferndale",
			"Code" : "Ferndale"
		}, {
			"Name" : "Forest Hill",
			"Code" : "Forest Hill"
		}, {
			"Name" : "Forestville",
			"Code" : "Forestville"
		}, {
			"Name" : "Fort Meade",
			"Code" : "Fort Meade"
		}, {
			"Name" : "Fort Washington",
			"Code" : "Fort Washington"
		}, {
			"Name" : "Frederick",
			"Code" : "Frederick"
		}, {
			"Name" : "Fredrick",
			"Code" : "Fredrick"
		}, {
			"Name" : "Friendly",
			"Code" : "Friendly"
		}, {
			"Name" : "Gaithersburg",
			"Code" : "Gaithersburg"
		}, {
			"Name" : "Germantown",
			"Code" : "Germantown"
		}, {
			"Name" : "Glen Burnie",
			"Code" : "Glen Burnie"
		}, {
			"Name" : "Glenn Dale",
			"Code" : "Glenn Dale"
		}, {
			"Name" : "Greater Landover",
			"Code" : "Greater Landover"
		}, {
			"Name" : "Greater Upper Marlboro",
			"Code" : "Greater Upper Marlboro"
		}, {
			"Name" : "Green Haven",
			"Code" : "Green Haven"
		}, {
			"Name" : "Green Valley",
			"Code" : "Green Valley"
		}, {
			"Name" : "Greenbelt",
			"Code" : "Greenbelt"
		}, {
			"Name" : "Hagerstown",
			"Code" : "Hagerstown"
		}, {
			"Name" : "Hanover",
			"Code" : "Hanover"
		}, {
			"Name" : "Harmans",
			"Code" : "Harmans"
		}, {
			"Name" : "Havre de Grace",
			"Code" : "Havre de Grace"
		}, {
			"Name" : "Hillandale",
			"Code" : "Hillandale"
		}, {
			"Name" : "Hillcrest Heights",
			"Code" : "Hillcrest Heights"
		}, {
			"Name" : "Hunt Valley",
			"Code" : "Hunt Valley"
		}, {
			"Name" : "Hurlock",
			"Code" : "Hurlock"
		}, {
			"Name" : "Hyattsville",
			"Code" : "Hyattsville"
		}, {
			"Name" : "Ijamsville",
			"Code" : "Ijamsville"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Jessup",
			"Code" : "Jessup"
		}, {
			"Name" : "Joppatowne",
			"Code" : "Joppatowne"
		}, {
			"Name" : "Kettering",
			"Code" : "Kettering"
		}, {
			"Name" : "Lake Shore",
			"Code" : "Lake Shore"
		}, {
			"Name" : "Langley Park",
			"Code" : "Langley Park"
		}, {
			"Name" : "Lanham",
			"Code" : "Lanham"
		}, {
			"Name" : "Lanham-Seabrook",
			"Code" : "Lanham-Seabrook"
		}, {
			"Name" : "Lansdowne-Baltimore Highlands",
			"Code" : "Lansdowne-Baltimore Highlands"
		}, {
			"Name" : "Largo",
			"Code" : "Largo"
		}, {
			"Name" : "Laurel",
			"Code" : "Laurel"
		}, {
			"Name" : "Lexington Park",
			"Code" : "Lexington Park"
		}, {
			"Name" : "Lochearn",
			"Code" : "Lochearn"
		}, {
			"Name" : "Lutherville-Timonium",
			"Code" : "Lutherville-Timonium"
		}, {
			"Name" : "Marriottsville",
			"Code" : "Marriottsville"
		}, {
			"Name" : "Maryland City",
			"Code" : "Maryland City"
		}, {
			"Name" : "Mays Chapel",
			"Code" : "Mays Chapel"
		}, {
			"Name" : "Middle River",
			"Code" : "Middle River"
		}, {
			"Name" : "Milford Mill",
			"Code" : "Milford Mill"
		}, {
			"Name" : "Millersville",
			"Code" : "Millersville"
		}, {
			"Name" : "Mitchellville",
			"Code" : "Mitchellville"
		}, {
			"Name" : "Montgomery Village",
			"Code" : "Montgomery Village"
		}, {
			"Name" : "National Harbor",
			"Code" : "National Harbor"
		}, {
			"Name" : "New Carrollton",
			"Code" : "New Carrollton"
		}, {
			"Name" : "North Bethesda",
			"Code" : "North Bethesda"
		}, {
			"Name" : "North Laurel",
			"Code" : "North Laurel"
		}, {
			"Name" : "North Potomac",
			"Code" : "North Potomac"
		}, {
			"Name" : "Odenton",
			"Code" : "Odenton"
		}, {
			"Name" : "Olney",
			"Code" : "Olney"
		}, {
			"Name" : "Overlea",
			"Code" : "Overlea"
		}, {
			"Name" : "Owings Mills",
			"Code" : "Owings Mills"
		}, {
			"Name" : "Oxon Hill-Glassmanor",
			"Code" : "Oxon Hill-Glassmanor"
		}, {
			"Name" : "Parkville",
			"Code" : "Parkville"
		}, {
			"Name" : "Parole",
			"Code" : "Parole"
		}, {
			"Name" : "Pasadena",
			"Code" : "Pasadena"
		}, {
			"Name" : "Perry Hall",
			"Code" : "Perry Hall"
		}, {
			"Name" : "Pikesville",
			"Code" : "Pikesville"
		}, {
			"Name" : "Poolesville",
			"Code" : "Poolesville"
		}, {
			"Name" : "Potomac",
			"Code" : "Potomac"
		}, {
			"Name" : "Randallstown",
			"Code" : "Randallstown"
		}, {
			"Name" : "Redland",
			"Code" : "Redland"
		}, {
			"Name" : "Reisterstown",
			"Code" : "Reisterstown"
		}, {
			"Name" : "Riviera Beach",
			"Code" : "Riviera Beach"
		}, {
			"Name" : "Rockville",
			"Code" : "Rockville"
		}, {
			"Name" : "Rosaryville",
			"Code" : "Rosaryville"
		}, {
			"Name" : "Rosedale",
			"Code" : "Rosedale"
		}, {
			"Name" : "Rossville",
			"Code" : "Rossville"
		}, {
			"Name" : "Saint Charles",
			"Code" : "Saint Charles"
		}, {
			"Name" : "Salisbury",
			"Code" : "Salisbury"
		}, {
			"Name" : "Sandy Spring",
			"Code" : "Sandy Spring"
		}, {
			"Name" : "Savage Guilford",
			"Code" : "Savage Guilford"
		}, {
			"Name" : "Severn",
			"Code" : "Severn"
		}, {
			"Name" : "Severna Park",
			"Code" : "Severna Park"
		}, {
			"Name" : "Silver Spring",
			"Code" : "Silver Spring"
		}, {
			"Name" : "Snow Hill",
			"Code" : "Snow Hill"
		}, {
			"Name" : "South Gate",
			"Code" : "South Gate"
		}, {
			"Name" : "South Laurel",
			"Code" : "South Laurel"
		}, {
			"Name" : "Suitland-Silver Hill",
			"Code" : "Suitland-Silver Hill"
		}, {
			"Name" : "Takoma Park",
			"Code" : "Takoma Park"
		}, {
			"Name" : "Temple Hill",
			"Code" : "Temple Hill"
		}, {
			"Name" : "Thurmont",
			"Code" : "Thurmont"
		}, {
			"Name" : "Timonium",
			"Code" : "Timonium"
		}, {
			"Name" : "Towson",
			"Code" : "Towson"
		}, {
			"Name" : "Upper Marlboro",
			"Code" : "Upper Marlboro"
		}, {
			"Name" : "Waldorf",
			"Code" : "Waldorf"
		}, {
			"Name" : "Walker Mill",
			"Code" : "Walker Mill"
		}, {
			"Name" : "Washington Grove",
			"Code" : "Washington Grove"
		}, {
			"Name" : "Westminster",
			"Code" : "Westminster"
		}, {
			"Name" : "Wheaton-Glenmont",
			"Code" : "Wheaton-Glenmont"
		}, {
			"Name" : "White Oak",
			"Code" : "White Oak"
		}, {
			"Name" : "Windsor Mill",
			"Code" : "Windsor Mill"
		}, {
			"Name" : "Woodlawn",
			"Code" : "Woodlawn"
		} ]
	}, {
		"Name" : "Massachusetts",
		"Code" : "MA",
		"City" : [ {
			"Name" : "Abington",
			"Code" : "Abington"
		}, {
			"Name" : "Acton",
			"Code" : "Acton"
		}, {
			"Name" : "Agawam",
			"Code" : "Agawam"
		}, {
			"Name" : "Amesbury",
			"Code" : "Amesbury"
		}, {
			"Name" : "Amherst Center",
			"Code" : "Amherst Center"
		}, {
			"Name" : "Arlington",
			"Code" : "Arlington"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Athol",
			"Code" : "Athol"
		}, {
			"Name" : "Attleboro",
			"Code" : "Attleboro"
		}, {
			"Name" : "Barnstable Town",
			"Code" : "Barnstable Town"
		}, {
			"Name" : "Baxboro",
			"Code" : "Baxboro"
		}, {
			"Name" : "Becket",
			"Code" : "Becket"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Belmont",
			"Code" : "Belmont"
		}, {
			"Name" : "Beverly",
			"Code" : "Beverly"
		}, {
			"Name" : "Billerica",
			"Code" : "Billerica"
		}, {
			"Name" : "Boston",
			"Code" : "Boston"
		}, {
			"Name" : "Boylston",
			"Code" : "Boylston"
		}, {
			"Name" : "Braintree",
			"Code" : "Braintree"
		}, {
			"Name" : "Brockton",
			"Code" : "Brockton"
		}, {
			"Name" : "Brookfield",
			"Code" : "Brookfield"
		}, {
			"Name" : "Brookline",
			"Code" : "Brookline"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Cambridge",
			"Code" : "Cambridge"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Charlestown",
			"Code" : "Charlestown"
		}, {
			"Name" : "Chelmsford",
			"Code" : "Chelmsford"
		}, {
			"Name" : "Chelsea",
			"Code" : "Chelsea"
		}, {
			"Name" : "Chicopee",
			"Code" : "Chicopee"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Concord",
			"Code" : "Concord"
		}, {
			"Name" : "Danvers",
			"Code" : "Danvers"
		}, {
			"Name" : "Dedham",
			"Code" : "Dedham"
		}, {
			"Name" : "Devens",
			"Code" : "Devens"
		}, {
			"Name" : "Devenscrest",
			"Code" : "Devenscrest"
		}, {
			"Name" : "Duxbury",
			"Code" : "Duxbury"
		}, {
			"Name" : "Easthampton",
			"Code" : "Easthampton"
		}, {
			"Name" : "Everett",
			"Code" : "Everett"
		}, {
			"Name" : "Fairhaven",
			"Code" : "Fairhaven"
		}, {
			"Name" : "Fall River",
			"Code" : "Fall River"
		}, {
			"Name" : "Fitchburg",
			"Code" : "Fitchburg"
		}, {
			"Name" : "Florence",
			"Code" : "Florence"
		}, {
			"Name" : "Framingham",
			"Code" : "Framingham"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Gardner",
			"Code" : "Gardner"
		}, {
			"Name" : "Gloucester",
			"Code" : "Gloucester"
		}, {
			"Name" : "Great Barrington",
			"Code" : "Great Barrington"
		}, {
			"Name" : "Greenfield",
			"Code" : "Greenfield"
		}, {
			"Name" : "Groton",
			"Code" : "Groton"
		}, {
			"Name" : "Hadley",
			"Code" : "Hadley"
		}, {
			"Name" : "Harvard",
			"Code" : "Harvard"
		}, {
			"Name" : "Haverhill",
			"Code" : "Haverhill"
		}, {
			"Name" : "Hingham",
			"Code" : "Hingham"
		}, {
			"Name" : "Holbrook",
			"Code" : "Holbrook"
		}, {
			"Name" : "Holliston",
			"Code" : "Holliston"
		}, {
			"Name" : "Holyoke",
			"Code" : "Holyoke"
		}, {
			"Name" : "Hopedale",
			"Code" : "Hopedale"
		}, {
			"Name" : "Housatonic",
			"Code" : "Housatonic"
		}, {
			"Name" : "Hubbardston",
			"Code" : "Hubbardston"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Hull",
			"Code" : "Hull"
		}, {
			"Name" : "Hyannis",
			"Code" : "Hyannis"
		}, {
			"Name" : "Ipswich",
			"Code" : "Ipswich"
		}, {
			"Name" : "Jamaica Plain",
			"Code" : "Jamaica Plain"
		}, {
			"Name" : "Lawrence",
			"Code" : "Lawrence"
		}, {
			"Name" : "Lee",
			"Code" : "Lee"
		}, {
			"Name" : "Lenox",
			"Code" : "Lenox"
		}, {
			"Name" : "Leominster",
			"Code" : "Leominster"
		}, {
			"Name" : "Lexington",
			"Code" : "Lexington"
		}, {
			"Name" : "Longmeadow",
			"Code" : "Longmeadow"
		}, {
			"Name" : "Lowell",
			"Code" : "Lowell"
		}, {
			"Name" : "Lynn",
			"Code" : "Lynn"
		}, {
			"Name" : "Lynnfield",
			"Code" : "Lynnfield"
		}, {
			"Name" : "Malden",
			"Code" : "Malden"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Marblehead",
			"Code" : "Marblehead"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Marlborough",
			"Code" : "Marlborough"
		}, {
			"Name" : "Marshfield",
			"Code" : "Marshfield"
		}, {
			"Name" : "Massachusetts",
			"Code" : "Massachusetts"
		}, {
			"Name" : "Maynard",
			"Code" : "Maynard"
		}, {
			"Name" : "Medfield",
			"Code" : "Medfield"
		}, {
			"Name" : "Medford",
			"Code" : "Medford"
		}, {
			"Name" : "Medway",
			"Code" : "Medway"
		}, {
			"Name" : "Melrose",
			"Code" : "Melrose"
		}, {
			"Name" : "Methuen",
			"Code" : "Methuen"
		}, {
			"Name" : "Middleboro",
			"Code" : "Middleboro"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Milton",
			"Code" : "Milton"
		}, {
			"Name" : "Monson",
			"Code" : "Monson"
		}, {
			"Name" : "Montague",
			"Code" : "Montague"
		}, {
			"Name" : "Nantucket",
			"Code" : "Nantucket"
		}, {
			"Name" : "Natick",
			"Code" : "Natick"
		}, {
			"Name" : "Needham",
			"Code" : "Needham"
		}, {
			"Name" : "New Bedford",
			"Code" : "New Bedford"
		}, {
			"Name" : "Newburyport",
			"Code" : "Newburyport"
		}, {
			"Name" : "Newton",
			"Code" : "Newton"
		}, {
			"Name" : "North Adams",
			"Code" : "North Adams"
		}, {
			"Name" : "North Andover",
			"Code" : "North Andover"
		}, {
			"Name" : "North Attleborough Center",
			"Code" : "North Attleborough Center"
		}, {
			"Name" : "North Easton",
			"Code" : "North Easton"
		}, {
			"Name" : "Northampton",
			"Code" : "Northampton"
		}, {
			"Name" : "Northborough",
			"Code" : "Northborough"
		}, {
			"Name" : "Norwood",
			"Code" : "Norwood"
		}, {
			"Name" : "Orleans",
			"Code" : "Orleans"
		}, {
			"Name" : "Peabody",
			"Code" : "Peabody"
		}, {
			"Name" : "Pepperell",
			"Code" : "Pepperell"
		}, {
			"Name" : "Pittsfield",
			"Code" : "Pittsfield"
		}, {
			"Name" : "Plainfield",
			"Code" : "Plainfield"
		}, {
			"Name" : "Plymouth",
			"Code" : "Plymouth"
		}, {
			"Name" : "Provincetown",
			"Code" : "Provincetown"
		}, {
			"Name" : "Quincy",
			"Code" : "Quincy"
		}, {
			"Name" : "Randolph",
			"Code" : "Randolph"
		}, {
			"Name" : "Reading",
			"Code" : "Reading"
		}, {
			"Name" : "Rehoboth",
			"Code" : "Rehoboth"
		}, {
			"Name" : "Revere",
			"Code" : "Revere"
		}, {
			"Name" : "Rockland",
			"Code" : "Rockland"
		}, {
			"Name" : "Rockport",
			"Code" : "Rockport"
		}, {
			"Name" : "Roslindale",
			"Code" : "Roslindale"
		}, {
			"Name" : "Salem",
			"Code" : "Salem"
		}, {
			"Name" : "Saugus",
			"Code" : "Saugus"
		}, {
			"Name" : "Scituate",
			"Code" : "Scituate"
		}, {
			"Name" : "Seekonk",
			"Code" : "Seekonk"
		}, {
			"Name" : "Shelburne Falls",
			"Code" : "Shelburne Falls"
		}, {
			"Name" : "Sherborn",
			"Code" : "Sherborn"
		}, {
			"Name" : "Shrewsbury",
			"Code" : "Shrewsbury"
		}, {
			"Name" : "Somerset",
			"Code" : "Somerset"
		}, {
			"Name" : "Somerville",
			"Code" : "Somerville"
		}, {
			"Name" : "South Boston",
			"Code" : "South Boston"
		}, {
			"Name" : "South Deerfield",
			"Code" : "South Deerfield"
		}, {
			"Name" : "South Hadley",
			"Code" : "South Hadley"
		}, {
			"Name" : "South Lee",
			"Code" : "South Lee"
		}, {
			"Name" : "South Yarmouth",
			"Code" : "South Yarmouth"
		}, {
			"Name" : "Southborough",
			"Code" : "Southborough"
		}, {
			"Name" : "Southbridge",
			"Code" : "Southbridge"
		}, {
			"Name" : "Southwick",
			"Code" : "Southwick"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Stoneham",
			"Code" : "Stoneham"
		}, {
			"Name" : "Sturbridge",
			"Code" : "Sturbridge"
		}, {
			"Name" : "Swampscott",
			"Code" : "Swampscott"
		}, {
			"Name" : "Swansea",
			"Code" : "Swansea"
		}, {
			"Name" : "Taunton",
			"Code" : "Taunton"
		}, {
			"Name" : "Tewksbury",
			"Code" : "Tewksbury"
		}, {
			"Name" : "Three Rivers",
			"Code" : "Three Rivers"
		}, {
			"Name" : "Truro",
			"Code" : "Truro"
		}, {
			"Name" : "Upton",
			"Code" : "Upton"
		}, {
			"Name" : "Vineyard Haven",
			"Code" : "Vineyard Haven"
		}, {
			"Name" : "Wakefield",
			"Code" : "Wakefield"
		}, {
			"Name" : "Waltham",
			"Code" : "Waltham"
		}, {
			"Name" : "Ware",
			"Code" : "Ware"
		}, {
			"Name" : "Wareham",
			"Code" : "Wareham"
		}, {
			"Name" : "Watertown",
			"Code" : "Watertown"
		}, {
			"Name" : "Wayland",
			"Code" : "Wayland"
		}, {
			"Name" : "Webster",
			"Code" : "Webster"
		}, {
			"Name" : "Wellesley",
			"Code" : "Wellesley"
		}, {
			"Name" : "Wellesley Hills",
			"Code" : "Wellesley Hills"
		}, {
			"Name" : "West Concord",
			"Code" : "West Concord"
		}, {
			"Name" : "West Roxbury",
			"Code" : "West Roxbury"
		}, {
			"Name" : "West Springfield",
			"Code" : "West Springfield"
		}, {
			"Name" : "West Yarmouth",
			"Code" : "West Yarmouth"
		}, {
			"Name" : "Westborough",
			"Code" : "Westborough"
		}, {
			"Name" : "Westfield",
			"Code" : "Westfield"
		}, {
			"Name" : "Westford",
			"Code" : "Westford"
		}, {
			"Name" : "Weston",
			"Code" : "Weston"
		}, {
			"Name" : "Weymouth",
			"Code" : "Weymouth"
		}, {
			"Name" : "Wilbraham",
			"Code" : "Wilbraham"
		}, {
			"Name" : "Wilmington",
			"Code" : "Wilmington"
		}, {
			"Name" : "Winchester",
			"Code" : "Winchester"
		}, {
			"Name" : "Winthrop",
			"Code" : "Winthrop"
		}, {
			"Name" : "Woburn",
			"Code" : "Woburn"
		}, {
			"Name" : "Worcester",
			"Code" : "Worcester"
		}, {
			"Name" : "Yarmouthport",
			"Code" : "Yarmouthport"
		} ]
	}, {
		"Name" : "Michigan",
		"Code" : "MI",
		"City" : [ {
			"Name" : "Adrian",
			"Code" : "Adrian"
		}, {
			"Name" : "Albion",
			"Code" : "Albion"
		}, {
			"Name" : "Allegan",
			"Code" : "Allegan"
		}, {
			"Name" : "Allen Park",
			"Code" : "Allen Park"
		}, {
			"Name" : "Alma",
			"Code" : "Alma"
		}, {
			"Name" : "Alpena",
			"Code" : "Alpena"
		}, {
			"Name" : "Ann Arbor",
			"Code" : "Ann Arbor"
		}, {
			"Name" : "Attica",
			"Code" : "Attica"
		}, {
			"Name" : "Auburn Hills",
			"Code" : "Auburn Hills"
		}, {
			"Name" : "Battle Creek",
			"Code" : "Battle Creek"
		}, {
			"Name" : "Bay City",
			"Code" : "Bay City"
		}, {
			"Name" : "Beecher",
			"Code" : "Beecher"
		}, {
			"Name" : "Belleville",
			"Code" : "Belleville"
		}, {
			"Name" : "Benton Harbor",
			"Code" : "Benton Harbor"
		}, {
			"Name" : "Berkley",
			"Code" : "Berkley"
		}, {
			"Name" : "Beverly Hills",
			"Code" : "Beverly Hills"
		}, {
			"Name" : "Big Rapids",
			"Code" : "Big Rapids"
		}, {
			"Name" : "Birmingham",
			"Code" : "Birmingham"
		}, {
			"Name" : "Bloomfield Hills",
			"Code" : "Bloomfield Hills"
		}, {
			"Name" : "Bloomfield Township",
			"Code" : "Bloomfield Township"
		}, {
			"Name" : "Boyne City",
			"Code" : "Boyne City"
		}, {
			"Name" : "Brighton",
			"Code" : "Brighton"
		}, {
			"Name" : "Burt",
			"Code" : "Burt"
		}, {
			"Name" : "Burton",
			"Code" : "Burton"
		}, {
			"Name" : "Cadillac",
			"Code" : "Cadillac"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Charlotte",
			"Code" : "Charlotte"
		}, {
			"Name" : "Chesterfield",
			"Code" : "Chesterfield"
		}, {
			"Name" : "Clarkston",
			"Code" : "Clarkston"
		}, {
			"Name" : "Clawson",
			"Code" : "Clawson"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Commerce",
			"Code" : "Commerce"
		}, {
			"Name" : "Comstock Park",
			"Code" : "Comstock Park"
		}, {
			"Name" : "Coopersville",
			"Code" : "Coopersville"
		}, {
			"Name" : "Cornell",
			"Code" : "Cornell"
		}, {
			"Name" : "Cutlerville",
			"Code" : "Cutlerville"
		}, {
			"Name" : "Davisburg",
			"Code" : "Davisburg"
		}, {
			"Name" : "Dearborn",
			"Code" : "Dearborn"
		}, {
			"Name" : "Dearborn Heights",
			"Code" : "Dearborn Heights"
		}, {
			"Name" : "Delton",
			"Code" : "Delton"
		}, {
			"Name" : "Detroit",
			"Code" : "Detroit"
		}, {
			"Name" : "Dexter",
			"Code" : "Dexter"
		}, {
			"Name" : "Dowagiac",
			"Code" : "Dowagiac"
		}, {
			"Name" : "East Grand Rapids",
			"Code" : "East Grand Rapids"
		}, {
			"Name" : "East Lansing",
			"Code" : "East Lansing"
		}, {
			"Name" : "Eastpointe",
			"Code" : "Eastpointe"
		}, {
			"Name" : "Ecorse",
			"Code" : "Ecorse"
		}, {
			"Name" : "Escanaba",
			"Code" : "Escanaba"
		}, {
			"Name" : "Evart",
			"Code" : "Evart"
		}, {
			"Name" : "Fair Haven",
			"Code" : "Fair Haven"
		}, {
			"Name" : "Fairgrove",
			"Code" : "Fairgrove"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Farmington Hills",
			"Code" : "Farmington Hills"
		}, {
			"Name" : "Fenton",
			"Code" : "Fenton"
		}, {
			"Name" : "Ferndale",
			"Code" : "Ferndale"
		}, {
			"Name" : "Flint",
			"Code" : "Flint"
		}, {
			"Name" : "Forest Hills",
			"Code" : "Forest Hills"
		}, {
			"Name" : "Fowlerville",
			"Code" : "Fowlerville"
		}, {
			"Name" : "Frankenmuth",
			"Code" : "Frankenmuth"
		}, {
			"Name" : "Fraser",
			"Code" : "Fraser"
		}, {
			"Name" : "Fremont",
			"Code" : "Fremont"
		}, {
			"Name" : "Fruitport",
			"Code" : "Fruitport"
		}, {
			"Name" : "Garden City",
			"Code" : "Garden City"
		}, {
			"Name" : "Goodrich",
			"Code" : "Goodrich"
		}, {
			"Name" : "Grand Blanc",
			"Code" : "Grand Blanc"
		}, {
			"Name" : "Grand Haven",
			"Code" : "Grand Haven"
		}, {
			"Name" : "Grand Rapids",
			"Code" : "Grand Rapids"
		}, {
			"Name" : "Grandville",
			"Code" : "Grandville"
		}, {
			"Name" : "Grosse Ile",
			"Code" : "Grosse Ile"
		}, {
			"Name" : "Grosse Pointe Farms",
			"Code" : "Grosse Pointe Farms"
		}, {
			"Name" : "Grosse Pointe Park",
			"Code" : "Grosse Pointe Park"
		}, {
			"Name" : "Grosse Pointe Woods",
			"Code" : "Grosse Pointe Woods"
		}, {
			"Name" : "Gwinn",
			"Code" : "Gwinn"
		}, {
			"Name" : "Hamtramck",
			"Code" : "Hamtramck"
		}, {
			"Name" : "Hancock",
			"Code" : "Hancock"
		}, {
			"Name" : "Harper Woods",
			"Code" : "Harper Woods"
		}, {
			"Name" : "Harrison",
			"Code" : "Harrison"
		}, {
			"Name" : "Haslett",
			"Code" : "Haslett"
		}, {
			"Name" : "Hazel Park",
			"Code" : "Hazel Park"
		}, {
			"Name" : "Highland Park",
			"Code" : "Highland Park"
		}, {
			"Name" : "Holland",
			"Code" : "Holland"
		}, {
			"Name" : "Holly",
			"Code" : "Holly"
		}, {
			"Name" : "Holt",
			"Code" : "Holt"
		}, {
			"Name" : "Houghton",
			"Code" : "Houghton"
		}, {
			"Name" : "Hudsonville",
			"Code" : "Hudsonville"
		}, {
			"Name" : "Huntington Woods",
			"Code" : "Huntington Woods"
		}, {
			"Name" : "Imlay",
			"Code" : "Imlay"
		}, {
			"Name" : "Inkster",
			"Code" : "Inkster"
		}, {
			"Name" : "Jackon",
			"Code" : "Jackon"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Jenison",
			"Code" : "Jenison"
		}, {
			"Name" : "Kalamazoo",
			"Code" : "Kalamazoo"
		}, {
			"Name" : "Kalkaska",
			"Code" : "Kalkaska"
		}, {
			"Name" : "Kentwood",
			"Code" : "Kentwood"
		}, {
			"Name" : "Kingsford",
			"Code" : "Kingsford"
		}, {
			"Name" : "Lansing",
			"Code" : "Lansing"
		}, {
			"Name" : "Lapeer",
			"Code" : "Lapeer"
		}, {
			"Name" : "Lincoln Park",
			"Code" : "Lincoln Park"
		}, {
			"Name" : "Litchfield",
			"Code" : "Litchfield"
		}, {
			"Name" : "Livonia",
			"Code" : "Livonia"
		}, {
			"Name" : "Ludington",
			"Code" : "Ludington"
		}, {
			"Name" : "Macomb",
			"Code" : "Macomb"
		}, {
			"Name" : "Madison Heights",
			"Code" : "Madison Heights"
		}, {
			"Name" : "Manistee",
			"Code" : "Manistee"
		}, {
			"Name" : "Marquette",
			"Code" : "Marquette"
		}, {
			"Name" : "Marysville",
			"Code" : "Marysville"
		}, {
			"Name" : "Melvindale",
			"Code" : "Melvindale"
		}, {
			"Name" : "Midland",
			"Code" : "Midland"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Mount Clemens",
			"Code" : "Mount Clemens"
		}, {
			"Name" : "Mount Morris",
			"Code" : "Mount Morris"
		}, {
			"Name" : "Mount Pleasant",
			"Code" : "Mount Pleasant"
		}, {
			"Name" : "Mt. Pleasant",
			"Code" : "Mt. Pleasant"
		}, {
			"Name" : "Muskegon",
			"Code" : "Muskegon"
		}, {
			"Name" : "Muskegon Heights",
			"Code" : "Muskegon Heights"
		}, {
			"Name" : "New Hudson",
			"Code" : "New Hudson"
		}, {
			"Name" : "Newaygo",
			"Code" : "Newaygo"
		}, {
			"Name" : "Niles",
			"Code" : "Niles"
		}, {
			"Name" : "Northview",
			"Code" : "Northview"
		}, {
			"Name" : "Northville",
			"Code" : "Northville"
		}, {
			"Name" : "Norton Shores",
			"Code" : "Norton Shores"
		}, {
			"Name" : "Novi",
			"Code" : "Novi"
		}, {
			"Name" : "Oak Park",
			"Code" : "Oak Park"
		}, {
			"Name" : "Okemos",
			"Code" : "Okemos"
		}, {
			"Name" : "Oscoda",
			"Code" : "Oscoda"
		}, {
			"Name" : "Owosso",
			"Code" : "Owosso"
		}, {
			"Name" : "Oxford",
			"Code" : "Oxford"
		}, {
			"Name" : "Petoskey",
			"Code" : "Petoskey"
		}, {
			"Name" : "Pinckney",
			"Code" : "Pinckney"
		}, {
			"Name" : "Plymouth Township",
			"Code" : "Plymouth Township"
		}, {
			"Name" : "Pontiac",
			"Code" : "Pontiac"
		}, {
			"Name" : "Port Huron",
			"Code" : "Port Huron"
		}, {
			"Name" : "Portage",
			"Code" : "Portage"
		}, {
			"Name" : "Redford",
			"Code" : "Redford"
		}, {
			"Name" : "Reese",
			"Code" : "Reese"
		}, {
			"Name" : "River Rouge",
			"Code" : "River Rouge"
		}, {
			"Name" : "Riverview",
			"Code" : "Riverview"
		}, {
			"Name" : "Rochester Hills",
			"Code" : "Rochester Hills"
		}, {
			"Name" : "Rockford",
			"Code" : "Rockford"
		}, {
			"Name" : "Romeo",
			"Code" : "Romeo"
		}, {
			"Name" : "Romulus",
			"Code" : "Romulus"
		}, {
			"Name" : "Roseville",
			"Code" : "Roseville"
		}, {
			"Name" : "Royal Oak",
			"Code" : "Royal Oak"
		}, {
			"Name" : "Saginaw",
			"Code" : "Saginaw"
		}, {
			"Name" : "Saginaw Township North",
			"Code" : "Saginaw Township North"
		}, {
			"Name" : "Saginaw Township South",
			"Code" : "Saginaw Township South"
		}, {
			"Name" : "Saint Clair Shores",
			"Code" : "Saint Clair Shores"
		}, {
			"Name" : "Saint Louis",
			"Code" : "Saint Louis"
		}, {
			"Name" : "Saline",
			"Code" : "Saline"
		}, {
			"Name" : "Saugatuck",
			"Code" : "Saugatuck"
		}, {
			"Name" : "Sault Sainte Marie",
			"Code" : "Sault Sainte Marie"
		}, {
			"Name" : "Schoolcraft",
			"Code" : "Schoolcraft"
		}, {
			"Name" : "Shelby",
			"Code" : "Shelby"
		}, {
			"Name" : "Southfield",
			"Code" : "Southfield"
		}, {
			"Name" : "Southgate",
			"Code" : "Southgate"
		}, {
			"Name" : "Sterling Heights",
			"Code" : "Sterling Heights"
		}, {
			"Name" : "Sturgis",
			"Code" : "Sturgis"
		}, {
			"Name" : "Taylor",
			"Code" : "Taylor"
		}, {
			"Name" : "Traverse City",
			"Code" : "Traverse City"
		}, {
			"Name" : "Trenton",
			"Code" : "Trenton"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Walker",
			"Code" : "Walker"
		}, {
			"Name" : "Walled Lake",
			"Code" : "Walled Lake"
		}, {
			"Name" : "Warren",
			"Code" : "Warren"
		}, {
			"Name" : "Waterford",
			"Code" : "Waterford"
		}, {
			"Name" : "Waverly",
			"Code" : "Waverly"
		}, {
			"Name" : "Wayne",
			"Code" : "Wayne"
		}, {
			"Name" : "West Bloomfield Township",
			"Code" : "West Bloomfield Township"
		}, {
			"Name" : "Westland",
			"Code" : "Westland"
		}, {
			"Name" : "White Lake",
			"Code" : "White Lake"
		}, {
			"Name" : "Whitmore Lake",
			"Code" : "Whitmore Lake"
		}, {
			"Name" : "Williamston",
			"Code" : "Williamston"
		}, {
			"Name" : "Wixom",
			"Code" : "Wixom"
		}, {
			"Name" : "Woodhaven",
			"Code" : "Woodhaven"
		}, {
			"Name" : "Wyandotte",
			"Code" : "Wyandotte"
		}, {
			"Name" : "Wyoming",
			"Code" : "Wyoming"
		}, {
			"Name" : "Ypsilanti",
			"Code" : "Ypsilanti"
		} ]
	}, {
		"Name" : "Minnesota",
		"Code" : "MN",
		"City" : [ {
			"Name" : "Albert Lea",
			"Code" : "Albert Lea"
		}, {
			"Name" : "Alger",
			"Code" : "Alger"
		}, {
			"Name" : "Andover",
			"Code" : "Andover"
		}, {
			"Name" : "Annandale",
			"Code" : "Annandale"
		}, {
			"Name" : "Anoka",
			"Code" : "Anoka"
		}, {
			"Name" : "Apple Valley",
			"Code" : "Apple Valley"
		}, {
			"Name" : "Austin",
			"Code" : "Austin"
		}, {
			"Name" : "Baxter",
			"Code" : "Baxter"
		}, {
			"Name" : "Bemidji",
			"Code" : "Bemidji"
		}, {
			"Name" : "Blaine",
			"Code" : "Blaine"
		}, {
			"Name" : "Blomkest",
			"Code" : "Blomkest"
		}, {
			"Name" : "Bloomington",
			"Code" : "Bloomington"
		}, {
			"Name" : "Blue Earth",
			"Code" : "Blue Earth"
		}, {
			"Name" : "Brainerd",
			"Code" : "Brainerd"
		}, {
			"Name" : "Brooklyn Center",
			"Code" : "Brooklyn Center"
		}, {
			"Name" : "Brooklyn Park",
			"Code" : "Brooklyn Park"
		}, {
			"Name" : "Burnsville",
			"Code" : "Burnsville"
		}, {
			"Name" : "Champlin",
			"Code" : "Champlin"
		}, {
			"Name" : "Chanhassen",
			"Code" : "Chanhassen"
		}, {
			"Name" : "Chaska",
			"Code" : "Chaska"
		}, {
			"Name" : "Chatfield",
			"Code" : "Chatfield"
		}, {
			"Name" : "Circle Pines",
			"Code" : "Circle Pines"
		}, {
			"Name" : "Cloquet",
			"Code" : "Cloquet"
		}, {
			"Name" : "Cokato",
			"Code" : "Cokato"
		}, {
			"Name" : "Columbia Heights",
			"Code" : "Columbia Heights"
		}, {
			"Name" : "Coon Rapids",
			"Code" : "Coon Rapids"
		}, {
			"Name" : "Cottage Grove",
			"Code" : "Cottage Grove"
		}, {
			"Name" : "Crystal",
			"Code" : "Crystal"
		}, {
			"Name" : "Duluth",
			"Code" : "Duluth"
		}, {
			"Name" : "Eagan",
			"Code" : "Eagan"
		}, {
			"Name" : "East Bethel",
			"Code" : "East Bethel"
		}, {
			"Name" : "Eden Prairie",
			"Code" : "Eden Prairie"
		}, {
			"Name" : "Edina",
			"Code" : "Edina"
		}, {
			"Name" : "Elk River",
			"Code" : "Elk River"
		}, {
			"Name" : "Ely",
			"Code" : "Ely"
		}, {
			"Name" : "Fairmont",
			"Code" : "Fairmont"
		}, {
			"Name" : "Faribault",
			"Code" : "Faribault"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Fergus Falls",
			"Code" : "Fergus Falls"
		}, {
			"Name" : "Frazee",
			"Code" : "Frazee"
		}, {
			"Name" : "Fridley",
			"Code" : "Fridley"
		}, {
			"Name" : "Golden Valley",
			"Code" : "Golden Valley"
		}, {
			"Name" : "Grand Rapids",
			"Code" : "Grand Rapids"
		}, {
			"Name" : "Ham Lake",
			"Code" : "Ham Lake"
		}, {
			"Name" : "Hamel",
			"Code" : "Hamel"
		}, {
			"Name" : "Hastings",
			"Code" : "Hastings"
		}, {
			"Name" : "Hibbing",
			"Code" : "Hibbing"
		}, {
			"Name" : "Hopkins",
			"Code" : "Hopkins"
		}, {
			"Name" : "Houston",
			"Code" : "Houston"
		}, {
			"Name" : "Hutchinson",
			"Code" : "Hutchinson"
		}, {
			"Name" : "Inver Grove Heights",
			"Code" : "Inver Grove Heights"
		}, {
			"Name" : "Isanti",
			"Code" : "Isanti"
		}, {
			"Name" : "LaCrescent",
			"Code" : "LaCrescent"
		}, {
			"Name" : "Lakeville",
			"Code" : "Lakeville"
		}, {
			"Name" : "Le Sueur",
			"Code" : "Le Sueur"
		}, {
			"Name" : "Lino Lakes",
			"Code" : "Lino Lakes"
		}, {
			"Name" : "Litchfield",
			"Code" : "Litchfield"
		}, {
			"Name" : "Mankato",
			"Code" : "Mankato"
		}, {
			"Name" : "Maple Grove",
			"Code" : "Maple Grove"
		}, {
			"Name" : "Maplewood",
			"Code" : "Maplewood"
		}, {
			"Name" : "Marshall",
			"Code" : "Marshall"
		}, {
			"Name" : "Mendota Heights",
			"Code" : "Mendota Heights"
		}, {
			"Name" : "Minneapolis",
			"Code" : "Minneapolis"
		}, {
			"Name" : "Minnetonka",
			"Code" : "Minnetonka"
		}, {
			"Name" : "Moorhead",
			"Code" : "Moorhead"
		}, {
			"Name" : "Mounds View",
			"Code" : "Mounds View"
		}, {
			"Name" : "Nelson",
			"Code" : "Nelson"
		}, {
			"Name" : "New Brighton",
			"Code" : "New Brighton"
		}, {
			"Name" : "New Hope",
			"Code" : "New Hope"
		}, {
			"Name" : "New Ulm",
			"Code" : "New Ulm"
		}, {
			"Name" : "North Mankato",
			"Code" : "North Mankato"
		}, {
			"Name" : "North Saint Paul",
			"Code" : "North Saint Paul"
		}, {
			"Name" : "Northfield",
			"Code" : "Northfield"
		}, {
			"Name" : "Oakdale",
			"Code" : "Oakdale"
		}, {
			"Name" : "Onamia",
			"Code" : "Onamia"
		}, {
			"Name" : "Owatonna",
			"Code" : "Owatonna"
		}, {
			"Name" : "Pequot Lakes",
			"Code" : "Pequot Lakes"
		}, {
			"Name" : "Plymouth",
			"Code" : "Plymouth"
		}, {
			"Name" : "Prior Lake",
			"Code" : "Prior Lake"
		}, {
			"Name" : "Ramsey",
			"Code" : "Ramsey"
		}, {
			"Name" : "Red Wing",
			"Code" : "Red Wing"
		}, {
			"Name" : "Renville",
			"Code" : "Renville"
		}, {
			"Name" : "Richfield",
			"Code" : "Richfield"
		}, {
			"Name" : "Robbinsdale",
			"Code" : "Robbinsdale"
		}, {
			"Name" : "Rochester",
			"Code" : "Rochester"
		}, {
			"Name" : "Rosemount",
			"Code" : "Rosemount"
		}, {
			"Name" : "Roseville",
			"Code" : "Roseville"
		}, {
			"Name" : "Royalton",
			"Code" : "Royalton"
		}, {
			"Name" : "Saint Cloud",
			"Code" : "Saint Cloud"
		}, {
			"Name" : "Saint Louis Park",
			"Code" : "Saint Louis Park"
		}, {
			"Name" : "Saint Michael",
			"Code" : "Saint Michael"
		}, {
			"Name" : "Saint Paul",
			"Code" : "Saint Paul"
		}, {
			"Name" : "Saint Peter",
			"Code" : "Saint Peter"
		}, {
			"Name" : "Sauk Rapids",
			"Code" : "Sauk Rapids"
		}, {
			"Name" : "Savage",
			"Code" : "Savage"
		}, {
			"Name" : "Shakopee",
			"Code" : "Shakopee"
		}, {
			"Name" : "Shoreview",
			"Code" : "Shoreview"
		}, {
			"Name" : "South Saint Paul",
			"Code" : "South Saint Paul"
		}, {
			"Name" : "St. Paul",
			"Code" : "St. Paul"
		}, {
			"Name" : "Stewartville",
			"Code" : "Stewartville"
		}, {
			"Name" : "Stillwater",
			"Code" : "Stillwater"
		}, {
			"Name" : "Vadnais Heights",
			"Code" : "Vadnais Heights"
		}, {
			"Name" : "Waconia",
			"Code" : "Waconia"
		}, {
			"Name" : "Wadena",
			"Code" : "Wadena"
		}, {
			"Name" : "West Saint Paul",
			"Code" : "West Saint Paul"
		}, {
			"Name" : "White Bear Lake",
			"Code" : "White Bear Lake"
		}, {
			"Name" : "Willmar",
			"Code" : "Willmar"
		}, {
			"Name" : "Winona",
			"Code" : "Winona"
		}, {
			"Name" : "Woodbury",
			"Code" : "Woodbury"
		}, {
			"Name" : "Worthington",
			"Code" : "Worthington"
		} ]
	}, {
		"Name" : "Mississippi",
		"Code" : "MS",
		"City" : [ {
			"Name" : "Bay Saint Louis",
			"Code" : "Bay Saint Louis"
		}, {
			"Name" : "Biloxi",
			"Code" : "Biloxi"
		}, {
			"Name" : "Brandon",
			"Code" : "Brandon"
		}, {
			"Name" : "Brookhaven",
			"Code" : "Brookhaven"
		}, {
			"Name" : "Byhalia",
			"Code" : "Byhalia"
		}, {
			"Name" : "Byram",
			"Code" : "Byram"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Clarksdale",
			"Code" : "Clarksdale"
		}, {
			"Name" : "Cleveland",
			"Code" : "Cleveland"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Corinth",
			"Code" : "Corinth"
		}, {
			"Name" : "Diamondhead",
			"Code" : "Diamondhead"
		}, {
			"Name" : "Gautier",
			"Code" : "Gautier"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Greenwood",
			"Code" : "Greenwood"
		}, {
			"Name" : "Grenada",
			"Code" : "Grenada"
		}, {
			"Name" : "Gulfport",
			"Code" : "Gulfport"
		}, {
			"Name" : "Hattiesburg",
			"Code" : "Hattiesburg"
		}, {
			"Name" : "Hernando",
			"Code" : "Hernando"
		}, {
			"Name" : "Horn Lake",
			"Code" : "Horn Lake"
		}, {
			"Name" : "Indianola",
			"Code" : "Indianola"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Laurel",
			"Code" : "Laurel"
		}, {
			"Name" : "Long Beach",
			"Code" : "Long Beach"
		}, {
			"Name" : "Lucedale",
			"Code" : "Lucedale"
		}, {
			"Name" : "MacComb",
			"Code" : "MacComb"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Magnolia",
			"Code" : "Magnolia"
		}, {
			"Name" : "Meridian",
			"Code" : "Meridian"
		}, {
			"Name" : "Michigan City",
			"Code" : "Michigan City"
		}, {
			"Name" : "Moselle",
			"Code" : "Moselle"
		}, {
			"Name" : "Moss Point",
			"Code" : "Moss Point"
		}, {
			"Name" : "Natchez",
			"Code" : "Natchez"
		}, {
			"Name" : "Ocean Springs",
			"Code" : "Ocean Springs"
		}, {
			"Name" : "Olive Branch",
			"Code" : "Olive Branch"
		}, {
			"Name" : "Orange Grove",
			"Code" : "Orange Grove"
		}, {
			"Name" : "Oxford",
			"Code" : "Oxford"
		}, {
			"Name" : "Pascagoula",
			"Code" : "Pascagoula"
		}, {
			"Name" : "Pearl",
			"Code" : "Pearl"
		}, {
			"Name" : "Pelahatchie",
			"Code" : "Pelahatchie"
		}, {
			"Name" : "Picayune",
			"Code" : "Picayune"
		}, {
			"Name" : "Quitman",
			"Code" : "Quitman"
		}, {
			"Name" : "Ridgeland",
			"Code" : "Ridgeland"
		}, {
			"Name" : "Senatobia",
			"Code" : "Senatobia"
		}, {
			"Name" : "Southaven",
			"Code" : "Southaven"
		}, {
			"Name" : "Southhaven",
			"Code" : "Southhaven"
		}, {
			"Name" : "Starkville",
			"Code" : "Starkville"
		}, {
			"Name" : "Tupelo",
			"Code" : "Tupelo"
		}, {
			"Name" : "Utica",
			"Code" : "Utica"
		}, {
			"Name" : "Vicksburg",
			"Code" : "Vicksburg"
		}, {
			"Name" : "Yazoo City",
			"Code" : "Yazoo City"
		} ]
	}, {
		"Name" : "Missouri",
		"Code" : "MO",
		"City" : [ {
			"Name" : "Affton",
			"Code" : "Affton"
		}, {
			"Name" : "Annapolis",
			"Code" : "Annapolis"
		}, {
			"Name" : "Arnold",
			"Code" : "Arnold"
		}, {
			"Name" : "Ballwin",
			"Code" : "Ballwin"
		}, {
			"Name" : "Belgique",
			"Code" : "Belgique"
		}, {
			"Name" : "Bellefontaine Neighbors",
			"Code" : "Bellefontaine Neighbors"
		}, {
			"Name" : "Belton",
			"Code" : "Belton"
		}, {
			"Name" : "Berkeley",
			"Code" : "Berkeley"
		}, {
			"Name" : "Blue Springs",
			"Code" : "Blue Springs"
		}, {
			"Name" : "Branson",
			"Code" : "Branson"
		}, {
			"Name" : "Bridgeton",
			"Code" : "Bridgeton"
		}, {
			"Name" : "Brighton",
			"Code" : "Brighton"
		}, {
			"Name" : "California",
			"Code" : "California"
		}, {
			"Name" : "Camdenton",
			"Code" : "Camdenton"
		}, {
			"Name" : "Cape Girardeau",
			"Code" : "Cape Girardeau"
		}, {
			"Name" : "Carthage",
			"Code" : "Carthage"
		}, {
			"Name" : "Chaffee",
			"Code" : "Chaffee"
		}, {
			"Name" : "Chesterfield",
			"Code" : "Chesterfield"
		}, {
			"Name" : "Chillicothe",
			"Code" : "Chillicothe"
		}, {
			"Name" : "Clayton",
			"Code" : "Clayton"
		}, {
			"Name" : "Clever",
			"Code" : "Clever"
		}, {
			"Name" : "Columbia",
			"Code" : "Columbia"
		}, {
			"Name" : "Concord",
			"Code" : "Concord"
		}, {
			"Name" : "Crestwood",
			"Code" : "Crestwood"
		}, {
			"Name" : "Creve Coeur",
			"Code" : "Creve Coeur"
		}, {
			"Name" : "Desloge",
			"Code" : "Desloge"
		}, {
			"Name" : "Dora",
			"Code" : "Dora"
		}, {
			"Name" : "Earth City",
			"Code" : "Earth City"
		}, {
			"Name" : "Excelsior Springs",
			"Code" : "Excelsior Springs"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Fenton",
			"Code" : "Fenton"
		}, {
			"Name" : "Ferguson",
			"Code" : "Ferguson"
		}, {
			"Name" : "Florissant",
			"Code" : "Florissant"
		}, {
			"Name" : "Forsyth",
			"Code" : "Forsyth"
		}, {
			"Name" : "Fort Leonard Wood",
			"Code" : "Fort Leonard Wood"
		}, {
			"Name" : "Fulton",
			"Code" : "Fulton"
		}, {
			"Name" : "Gladstone",
			"Code" : "Gladstone"
		}, {
			"Name" : "Grain Valley",
			"Code" : "Grain Valley"
		}, {
			"Name" : "Grandview",
			"Code" : "Grandview"
		}, {
			"Name" : "Gravois Mills",
			"Code" : "Gravois Mills"
		}, {
			"Name" : "Hannibal",
			"Code" : "Hannibal"
		}, {
			"Name" : "Harrisonville",
			"Code" : "Harrisonville"
		}, {
			"Name" : "Hazelwood",
			"Code" : "Hazelwood"
		}, {
			"Name" : "High Ridge",
			"Code" : "High Ridge"
		}, {
			"Name" : "Independence",
			"Code" : "Independence"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Jefferson City",
			"Code" : "Jefferson City"
		}, {
			"Name" : "Jennings",
			"Code" : "Jennings"
		}, {
			"Name" : "Joplin",
			"Code" : "Joplin"
		}, {
			"Name" : "Kansas City",
			"Code" : "Kansas City"
		}, {
			"Name" : "Kennett",
			"Code" : "Kennett"
		}, {
			"Name" : "Kirksville",
			"Code" : "Kirksville"
		}, {
			"Name" : "Kirkwood",
			"Code" : "Kirkwood"
		}, {
			"Name" : "Kissee Mills",
			"Code" : "Kissee Mills"
		}, {
			"Name" : "Lamar",
			"Code" : "Lamar"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lees Summit",
			"Code" : "Lees Summit"
		}, {
			"Name" : "Lemay",
			"Code" : "Lemay"
		}, {
			"Name" : "Liberty",
			"Code" : "Liberty"
		}, {
			"Name" : "Lone Jack",
			"Code" : "Lone Jack"
		}, {
			"Name" : "Marshall",
			"Code" : "Marshall"
		}, {
			"Name" : "Maryland Heights",
			"Code" : "Maryland Heights"
		}, {
			"Name" : "Maryville",
			"Code" : "Maryville"
		}, {
			"Name" : "Mehlville",
			"Code" : "Mehlville"
		}, {
			"Name" : "Mexico",
			"Code" : "Mexico"
		}, {
			"Name" : "Moberly",
			"Code" : "Moberly"
		}, {
			"Name" : "Murphy",
			"Code" : "Murphy"
		}, {
			"Name" : "Nixa",
			"Code" : "Nixa"
		}, {
			"Name" : "O'Fallon",
			"Code" : "O'Fallon"
		}, {
			"Name" : "Oakville",
			"Code" : "Oakville"
		}, {
			"Name" : "Overland",
			"Code" : "Overland"
		}, {
			"Name" : "Pacific",
			"Code" : "Pacific"
		}, {
			"Name" : "Park Hills",
			"Code" : "Park Hills"
		}, {
			"Name" : "Parkville",
			"Code" : "Parkville"
		}, {
			"Name" : "Peculiar",
			"Code" : "Peculiar"
		}, {
			"Name" : "Poplar Bluff",
			"Code" : "Poplar Bluff"
		}, {
			"Name" : "Raytown",
			"Code" : "Raytown"
		}, {
			"Name" : "Richmond Heights",
			"Code" : "Richmond Heights"
		}, {
			"Name" : "Rolla",
			"Code" : "Rolla"
		}, {
			"Name" : "Saint Ann",
			"Code" : "Saint Ann"
		}, {
			"Name" : "Saint Charles",
			"Code" : "Saint Charles"
		}, {
			"Name" : "Saint Clair",
			"Code" : "Saint Clair"
		}, {
			"Name" : "Saint Joseph",
			"Code" : "Saint Joseph"
		}, {
			"Name" : "Saint Louis",
			"Code" : "Saint Louis"
		}, {
			"Name" : "Saint Peters",
			"Code" : "Saint Peters"
		}, {
			"Name" : "Sappington",
			"Code" : "Sappington"
		}, {
			"Name" : "Sedalia",
			"Code" : "Sedalia"
		}, {
			"Name" : "Sikeston",
			"Code" : "Sikeston"
		}, {
			"Name" : "Spanish Lake",
			"Code" : "Spanish Lake"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "St. Louis",
			"Code" : "St. Louis"
		}, {
			"Name" : "Steelville",
			"Code" : "Steelville"
		}, {
			"Name" : "Sunrise Beach",
			"Code" : "Sunrise Beach"
		}, {
			"Name" : "Town and Country",
			"Code" : "Town and Country"
		}, {
			"Name" : "Trimble",
			"Code" : "Trimble"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "University City",
			"Code" : "University City"
		}, {
			"Name" : "Warrensburg",
			"Code" : "Warrensburg"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "Webb City",
			"Code" : "Webb City"
		}, {
			"Name" : "Webster Groves",
			"Code" : "Webster Groves"
		}, {
			"Name" : "Wentzville",
			"Code" : "Wentzville"
		}, {
			"Name" : "West Plains",
			"Code" : "West Plains"
		}, {
			"Name" : "Wildwood",
			"Code" : "Wildwood"
		} ]
	}, {
		"Name" : "Montana",
		"Code" : "MT",
		"City" : [ {
			"Name" : "Anaconda-Deer Lodge County",
			"Code" : "Anaconda-Deer Lodge County"
		}, {
			"Name" : "Arlee",
			"Code" : "Arlee"
		}, {
			"Name" : "Belgrade",
			"Code" : "Belgrade"
		}, {
			"Name" : "Billings",
			"Code" : "Billings"
		}, {
			"Name" : "Bozeman",
			"Code" : "Bozeman"
		}, {
			"Name" : "Butte",
			"Code" : "Butte"
		}, {
			"Name" : "Butte-Silver Bow",
			"Code" : "Butte-Silver Bow"
		}, {
			"Name" : "Great Falls",
			"Code" : "Great Falls"
		}, {
			"Name" : "Hamilton",
			"Code" : "Hamilton"
		}, {
			"Name" : "Havre",
			"Code" : "Havre"
		}, {
			"Name" : "Helena",
			"Code" : "Helena"
		}, {
			"Name" : "Helena Valley Southeast",
			"Code" : "Helena Valley Southeast"
		}, {
			"Name" : "Helena Valley West Central",
			"Code" : "Helena Valley West Central"
		}, {
			"Name" : "Kalispell",
			"Code" : "Kalispell"
		}, {
			"Name" : "Lame Deer",
			"Code" : "Lame Deer"
		}, {
			"Name" : "Laurel",
			"Code" : "Laurel"
		}, {
			"Name" : "Lewistown",
			"Code" : "Lewistown"
		}, {
			"Name" : "Livingston",
			"Code" : "Livingston"
		}, {
			"Name" : "Malmstrom Air Force Base",
			"Code" : "Malmstrom Air Force Base"
		}, {
			"Name" : "Manhattan",
			"Code" : "Manhattan"
		}, {
			"Name" : "Miles City",
			"Code" : "Miles City"
		}, {
			"Name" : "Missoula",
			"Code" : "Missoula"
		}, {
			"Name" : "Orchard Homes",
			"Code" : "Orchard Homes"
		}, {
			"Name" : "Pablo",
			"Code" : "Pablo"
		}, {
			"Name" : "Polson",
			"Code" : "Polson"
		}, {
			"Name" : "Roberts",
			"Code" : "Roberts"
		}, {
			"Name" : "Ryegate",
			"Code" : "Ryegate"
		}, {
			"Name" : "Sidney",
			"Code" : "Sidney"
		}, {
			"Name" : "Stevensville",
			"Code" : "Stevensville"
		}, {
			"Name" : "Whitefish",
			"Code" : "Whitefish"
		} ]
	}, {
		"Name" : "Nebraska",
		"Code" : "NE",
		"City" : [ {
			"Name" : "Beatrice",
			"Code" : "Beatrice"
		}, {
			"Name" : "Bellevue",
			"Code" : "Bellevue"
		}, {
			"Name" : "Central City",
			"Code" : "Central City"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Cozad",
			"Code" : "Cozad"
		}, {
			"Name" : "Creighton",
			"Code" : "Creighton"
		}, {
			"Name" : "Fremont",
			"Code" : "Fremont"
		}, {
			"Name" : "Gering",
			"Code" : "Gering"
		}, {
			"Name" : "Grand Island",
			"Code" : "Grand Island"
		}, {
			"Name" : "Hastings",
			"Code" : "Hastings"
		}, {
			"Name" : "Homer",
			"Code" : "Homer"
		}, {
			"Name" : "Keamey",
			"Code" : "Keamey"
		}, {
			"Name" : "Kearney",
			"Code" : "Kearney"
		}, {
			"Name" : "La Vista",
			"Code" : "La Vista"
		}, {
			"Name" : "Lexington",
			"Code" : "Lexington"
		}, {
			"Name" : "Lincoln",
			"Code" : "Lincoln"
		}, {
			"Name" : "McCook",
			"Code" : "McCook"
		}, {
			"Name" : "Norfolk",
			"Code" : "Norfolk"
		}, {
			"Name" : "North Platte",
			"Code" : "North Platte"
		}, {
			"Name" : "Offutt Air Force Base West",
			"Code" : "Offutt Air Force Base West"
		}, {
			"Name" : "Ogallala",
			"Code" : "Ogallala"
		}, {
			"Name" : "Omaha",
			"Code" : "Omaha"
		}, {
			"Name" : "Papillion",
			"Code" : "Papillion"
		}, {
			"Name" : "Scottsbluff",
			"Code" : "Scottsbluff"
		}, {
			"Name" : "South Sioux City",
			"Code" : "South Sioux City"
		} ]
	}, {
		"Name" : "Nevada",
		"Code" : "NV",
		"City" : [ {
			"Name" : "Boulder City",
			"Code" : "Boulder City"
		}, {
			"Name" : "Carson City",
			"Code" : "CSN"
		}, {
			"Name" : "Elko",
			"Code" : "EKO"
		}, {
			"Name" : "Goldfield",
			"Code" : "Goldfield"
		}, {
			"Name" : "Henderson",
			"Code" : "HNZ"
		}, {
			"Name" : "Las Vegas",
			"Code" : "LAS"
		}, {
			"Name" : "Laughlin",
			"Code" : "Laughlin"
		}, {
			"Name" : "Lovelock",
			"Code" : "Lovelock"
		}, {
			"Name" : "Mesquite",
			"Code" : "Mesquite"
		}, {
			"Name" : "Nellis Air Force Base",
			"Code" : "Nellis Air Force Base"
		}, {
			"Name" : "North Las Vegas",
			"Code" : "NVS"
		}, {
			"Name" : "Pahrump",
			"Code" : "Pahrump"
		}, {
			"Name" : "Paradise",
			"Code" : "Paradise"
		}, {
			"Name" : "Reno",
			"Code" : "RNO"
		}, {
			"Name" : "Sparks",
			"Code" : "SPK"
		}, {
			"Name" : "Spring Valley",
			"Code" : "Spring Valley"
		}, {
			"Name" : "Sun Valley",
			"Code" : "Sun Valley"
		}, {
			"Name" : "Sunrise Manor",
			"Code" : "Sunrise Manor"
		}, {
			"Name" : "Winchester",
			"Code" : "Winchester"
		}, {
			"Name" : "Winnemucca",
			"Code" : "Winnemucca"
		}, {
			"Name" : "Virginia City",
			"Code" : "VGI"
		} ]
	}, {
		"Name" : "New Hampshire",
		"Code" : "NH",
		"City" : [ {
			"Name" : "Amherst",
			"Code" : "Amherst"
		}, {
			"Name" : "Atkinson",
			"Code" : "Atkinson"
		}, {
			"Name" : "Barrington",
			"Code" : "Barrington"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Belmont",
			"Code" : "Belmont"
		}, {
			"Name" : "Berlin",
			"Code" : "Berlin"
		}, {
			"Name" : "Bow",
			"Code" : "Bow"
		}, {
			"Name" : "Claremont",
			"Code" : "Claremont"
		}, {
			"Name" : "Concord",
			"Code" : "Concord"
		}, {
			"Name" : "Conway",
			"Code" : "Conway"
		}, {
			"Name" : "Derry",
			"Code" : "Derry"
		}, {
			"Name" : "Dover",
			"Code" : "Dover"
		}, {
			"Name" : "Durham",
			"Code" : "Durham"
		}, {
			"Name" : "Epping",
			"Code" : "Epping"
		}, {
			"Name" : "Exeter",
			"Code" : "Exeter"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Gilford",
			"Code" : "Gilford"
		}, {
			"Name" : "Goffstown",
			"Code" : "Goffstown"
		}, {
			"Name" : "Hampstead",
			"Code" : "Hampstead"
		}, {
			"Name" : "Hampton",
			"Code" : "Hampton"
		}, {
			"Name" : "Hanover",
			"Code" : "Hanover"
		}, {
			"Name" : "Hillsborough",
			"Code" : "Hillsborough"
		}, {
			"Name" : "Hollis",
			"Code" : "Hollis"
		}, {
			"Name" : "Hooksett",
			"Code" : "Hooksett"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Keene",
			"Code" : "Keene"
		}, {
			"Name" : "Kingston",
			"Code" : "Kingston"
		}, {
			"Name" : "Laconia",
			"Code" : "Laconia"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Litchfield",
			"Code" : "Litchfield"
		}, {
			"Name" : "Londonderry",
			"Code" : "Londonderry"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Meredith",
			"Code" : "Meredith"
		}, {
			"Name" : "Merrimack",
			"Code" : "Merrimack"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Nashua",
			"Code" : "Nashua"
		}, {
			"Name" : "Newmarket",
			"Code" : "Newmarket"
		}, {
			"Name" : "Newport",
			"Code" : "Newport"
		}, {
			"Name" : "Pelham",
			"Code" : "Pelham"
		}, {
			"Name" : "Pembroke",
			"Code" : "Pembroke"
		}, {
			"Name" : "Peterborough",
			"Code" : "Peterborough"
		}, {
			"Name" : "Plaistow",
			"Code" : "Plaistow"
		}, {
			"Name" : "Plymouth",
			"Code" : "Plymouth"
		}, {
			"Name" : "Portsmouth",
			"Code" : "Portsmouth"
		}, {
			"Name" : "Raymond",
			"Code" : "Raymond"
		}, {
			"Name" : "Rindge",
			"Code" : "Rindge"
		}, {
			"Name" : "Rochester",
			"Code" : "Rochester"
		}, {
			"Name" : "Salem",
			"Code" : "Salem"
		}, {
			"Name" : "Seabrook",
			"Code" : "Seabrook"
		}, {
			"Name" : "Somersworth",
			"Code" : "Somersworth"
		}, {
			"Name" : "Stratham",
			"Code" : "Stratham"
		}, {
			"Name" : "Swanzey",
			"Code" : "Swanzey"
		}, {
			"Name" : "Weare",
			"Code" : "Weare"
		}, {
			"Name" : "Windham",
			"Code" : "Windham"
		}, {
			"Name" : "Wolfeboro",
			"Code" : "Wolfeboro"
		} ]
	}, {
		"Name" : "New Jersey",
		"Code" : "NJ",
		"City" : [ {
			"Name" : "Aberdeen",
			"Code" : "Aberdeen"
		}, {
			"Name" : "Asbury Park",
			"Code" : "Asbury Park"
		}, {
			"Name" : "Atlantic City",
			"Code" : "Atlantic City"
		}, {
			"Name" : "Barnegat",
			"Code" : "Barnegat"
		}, {
			"Name" : "Bayonne",
			"Code" : "Bayonne"
		}, {
			"Name" : "Belleville",
			"Code" : "Belleville"
		}, {
			"Name" : "Bergenfield",
			"Code" : "Bergenfield"
		}, {
			"Name" : "Berkeley",
			"Code" : "Berkeley"
		}, {
			"Name" : "Bernards Township",
			"Code" : "Bernards Township"
		}, {
			"Name" : "Bloomfield",
			"Code" : "Bloomfield"
		}, {
			"Name" : "Branchburg",
			"Code" : "Branchburg"
		}, {
			"Name" : "Brick",
			"Code" : "Brick"
		}, {
			"Name" : "Bridgeton",
			"Code" : "Bridgeton"
		}, {
			"Name" : "Bridgewater",
			"Code" : "Bridgewater"
		}, {
			"Name" : "Burlington Township",
			"Code" : "Burlington Township"
		}, {
			"Name" : "Camden",
			"Code" : "Camden"
		}, {
			"Name" : "Carteret",
			"Code" : "Carteret"
		}, {
			"Name" : "Cherry Hill",
			"Code" : "Cherry Hill"
		}, {
			"Name" : "Cinnaminson",
			"Code" : "Cinnaminson"
		}, {
			"Name" : "City of Orange",
			"Code" : "City of Orange"
		}, {
			"Name" : "Clark",
			"Code" : "Clark"
		}, {
			"Name" : "Cliffside Park",
			"Code" : "Cliffside Park"
		}, {
			"Name" : "Clifton",
			"Code" : "Clifton"
		}, {
			"Name" : "Clinton Township",
			"Code" : "Clinton Township"
		}, {
			"Name" : "Collingswood",
			"Code" : "Collingswood"
		}, {
			"Name" : "Cranford",
			"Code" : "Cranford"
		}, {
			"Name" : "Delran",
			"Code" : "Delran"
		}, {
			"Name" : "Denville",
			"Code" : "Denville"
		}, {
			"Name" : "Deptford",
			"Code" : "Deptford"
		}, {
			"Name" : "Dover",
			"Code" : "Dover"
		}, {
			"Name" : "Dumont",
			"Code" : "Dumont"
		}, {
			"Name" : "East Brunswick",
			"Code" : "East Brunswick"
		}, {
			"Name" : "East Orange",
			"Code" : "East Orange"
		}, {
			"Name" : "East Windsor",
			"Code" : "East Windsor"
		}, {
			"Name" : "Edison",
			"Code" : "Edison"
		}, {
			"Name" : "Egg Harbor",
			"Code" : "Egg Harbor"
		}, {
			"Name" : "Elizabeth",
			"Code" : "Elizabeth"
		}, {
			"Name" : "Elmwood Park",
			"Code" : "Elmwood Park"
		}, {
			"Name" : "Englewood",
			"Code" : "Englewood"
		}, {
			"Name" : "Evesham",
			"Code" : "Evesham"
		}, {
			"Name" : "Ewing",
			"Code" : "Ewing"
		}, {
			"Name" : "Fair Lawn",
			"Code" : "Fair Lawn"
		}, {
			"Name" : "Fairview",
			"Code" : "Fairview"
		}, {
			"Name" : "Fort Lee",
			"Code" : "Fort Lee"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Franklin Township",
			"Code" : "Franklin Township"
		}, {
			"Name" : "Freehold Township",
			"Code" : "Freehold Township"
		}, {
			"Name" : "Galloway",
			"Code" : "Galloway"
		}, {
			"Name" : "Garfield",
			"Code" : "Garfield"
		}, {
			"Name" : "Glassboro",
			"Code" : "Glassboro"
		}, {
			"Name" : "Gloucester Township",
			"Code" : "Gloucester Township"
		}, {
			"Name" : "Hackensack",
			"Code" : "Hackensack"
		}, {
			"Name" : "Haddon Township",
			"Code" : "Haddon Township"
		}, {
			"Name" : "Hamilton",
			"Code" : "Hamilton"
		}, {
			"Name" : "Hamilton Township",
			"Code" : "Hamilton Township"
		}, {
			"Name" : "Hammonton",
			"Code" : "Hammonton"
		}, {
			"Name" : "Hanover",
			"Code" : "Hanover"
		}, {
			"Name" : "Harrison",
			"Code" : "Harrison"
		}, {
			"Name" : "Hawthorne",
			"Code" : "Hawthorne"
		}, {
			"Name" : "Hazlet",
			"Code" : "Hazlet"
		}, {
			"Name" : "Highland Park",
			"Code" : "Highland Park"
		}, {
			"Name" : "Hillsborough",
			"Code" : "Hillsborough"
		}, {
			"Name" : "Hillside",
			"Code" : "Hillside"
		}, {
			"Name" : "Hoboken",
			"Code" : "Hoboken"
		}, {
			"Name" : "Holmdel",
			"Code" : "Holmdel"
		}, {
			"Name" : "Hopatcong",
			"Code" : "Hopatcong"
		}, {
			"Name" : "Hopewell Township",
			"Code" : "Hopewell Township"
		}, {
			"Name" : "Howell",
			"Code" : "Howell"
		}, {
			"Name" : "Irvington",
			"Code" : "Irvington"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Jersey City",
			"Code" : "JEC"
		}, {
			"Name" : "Kearny",
			"Code" : "Kearny"
		}, {
			"Name" : "Lacey",
			"Code" : "Lacey"
		}, {
			"Name" : "Lakewood",
			"Code" : "Lakewood"
		}, {
			"Name" : "Lawrence",
			"Code" : "Lawrence"
		}, {
			"Name" : "Linden",
			"Code" : "Linden"
		}, {
			"Name" : "Lindenwold",
			"Code" : "Lindenwold"
		}, {
			"Name" : "Little Egg Harbor",
			"Code" : "Little Egg Harbor"
		}, {
			"Name" : "Little Falls",
			"Code" : "Little Falls"
		}, {
			"Name" : "Livingston",
			"Code" : "Livingston"
		}, {
			"Name" : "Lodi",
			"Code" : "Lodi"
		}, {
			"Name" : "Long Branch",
			"Code" : "Long Branch"
		}, {
			"Name" : "Lower Township",
			"Code" : "Lower Township"
		}, {
			"Name" : "Lyndhurst",
			"Code" : "Lyndhurst"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Mahwah",
			"Code" : "Mahwah"
		}, {
			"Name" : "Manalapan",
			"Code" : "Manalapan"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Mantua",
			"Code" : "Mantua"
		}, {
			"Name" : "Maple Shade",
			"Code" : "Maple Shade"
		}, {
			"Name" : "Maplewood",
			"Code" : "Maplewood"
		}, {
			"Name" : "Marlboro",
			"Code" : "Marlboro"
		}, {
			"Name" : "Medford",
			"Code" : "Medford"
		}, {
			"Name" : "Metuchen",
			"Code" : "Metuchen"
		}, {
			"Name" : "Middle Township",
			"Code" : "Middle Township"
		}, {
			"Name" : "Middlesex",
			"Code" : "Middlesex"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Millburn",
			"Code" : "Millburn"
		}, {
			"Name" : "Millville",
			"Code" : "Millville"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Monroe Township",
			"Code" : "Monroe Township"
		}, {
			"Name" : "Montclair",
			"Code" : "Montclair"
		}, {
			"Name" : "Montgomery",
			"Code" : "Montgomery"
		}, {
			"Name" : "Montville",
			"Code" : "Montville"
		}, {
			"Name" : "Moorestown",
			"Code" : "Moorestown"
		}, {
			"Name" : "Morris Township",
			"Code" : "Morris Township"
		}, {
			"Name" : "Morristown",
			"Code" : "Morristown"
		}, {
			"Name" : "Mount Laurel",
			"Code" : "Mount Laurel"
		}, {
			"Name" : "Mount Olive",
			"Code" : "Mount Olive"
		}, {
			"Name" : "Neptune",
			"Code" : "Neptune"
		}, {
			"Name" : "New Brunswick",
			"Code" : "New Brunswick"
		}, {
			"Name" : "New Milford",
			"Code" : "New Milford"
		}, {
			"Name" : "Newark",
			"Code" : "NRK"
		}, {
			"Name" : "North Arlington",
			"Code" : "North Arlington"
		}, {
			"Name" : "North Bergen",
			"Code" : "North Bergen"
		}, {
			"Name" : "North Brunswick",
			"Code" : "North Brunswick"
		}, {
			"Name" : "North Plainfield",
			"Code" : "North Plainfield"
		}, {
			"Name" : "Nutley",
			"Code" : "Nutley"
		}, {
			"Name" : "Ocean Township",
			"Code" : "Ocean Township"
		}, {
			"Name" : "Old Bridge",
			"Code" : "Old Bridge"
		}, {
			"Name" : "Palisades Park",
			"Code" : "Palisades Park"
		}, {
			"Name" : "Paramus",
			"Code" : "Paramus"
		}, {
			"Name" : "Parsippany-Troy Hills",
			"Code" : "Parsippany-Troy Hills"
		}, {
			"Name" : "Passaic",
			"Code" : "Passaic"
		}, {
			"Name" : "Paterson",
			"Code" : "PAT"
		}, {
			"Name" : "Pemberton Township",
			"Code" : "Pemberton Township"
		}, {
			"Name" : "Pennsauken",
			"Code" : "Pennsauken"
		}, {
			"Name" : "Pennsville",
			"Code" : "Pennsville"
		}, {
			"Name" : "Pequannock",
			"Code" : "Pequannock"
		}, {
			"Name" : "Perth Amboy",
			"Code" : "Perth Amboy"
		}, {
			"Name" : "Phillipsburg",
			"Code" : "Phillipsburg"
		}, {
			"Name" : "Piscataway",
			"Code" : "Piscataway"
		}, {
			"Name" : "Plainfield",
			"Code" : "Plainfield"
		}, {
			"Name" : "Plainsboro",
			"Code" : "Plainsboro"
		}, {
			"Name" : "Pleasantville",
			"Code" : "Pleasantville"
		}, {
			"Name" : "Point Pleasant",
			"Code" : "Point Pleasant"
		}, {
			"Name" : "Princeton",
			"Code" : "Princeton"
		}, {
			"Name" : "Rahway",
			"Code" : "Rahway"
		}, {
			"Name" : "Ramsey",
			"Code" : "Ramsey"
		}, {
			"Name" : "Randolph",
			"Code" : "Randolph"
		}, {
			"Name" : "Raritan Township",
			"Code" : "Raritan Township"
		}, {
			"Name" : "Readington",
			"Code" : "Readington"
		}, {
			"Name" : "Ridgewood",
			"Code" : "Ridgewood"
		}, {
			"Name" : "Robbinsville",
			"Code" : "Robbinsville"
		}, {
			"Name" : "Rockaway Township",
			"Code" : "Rockaway Township"
		}, {
			"Name" : "Roselle",
			"Code" : "Roselle"
		}, {
			"Name" : "Roxbury",
			"Code" : "Roxbury"
		}, {
			"Name" : "Rutherford",
			"Code" : "Rutherford"
		}, {
			"Name" : "Saddle Brook",
			"Code" : "Saddle Brook"
		}, {
			"Name" : "Sayreville",
			"Code" : "Sayreville"
		}, {
			"Name" : "Scotch Plains",
			"Code" : "Scotch Plains"
		}, {
			"Name" : "Secaucus",
			"Code" : "Secaucus"
		}, {
			"Name" : "South Brunswick",
			"Code" : "South Brunswick"
		}, {
			"Name" : "South Orange Village",
			"Code" : "South Orange Village"
		}, {
			"Name" : "South Plainfield",
			"Code" : "South Plainfield"
		}, {
			"Name" : "South River",
			"Code" : "South River"
		}, {
			"Name" : "Sparta",
			"Code" : "Sparta"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Stafford Township",
			"Code" : "Stafford Township"
		}, {
			"Name" : "Summit",
			"Code" : "Summit"
		}, {
			"Name" : "Teaneck",
			"Code" : "Teaneck"
		}, {
			"Name" : "Tenafly",
			"Code" : "Tenafly"
		}, {
			"Name" : "Tinton Falls",
			"Code" : "Tinton Falls"
		}, {
			"Name" : "Toms River",
			"Code" : "Toms River"
		}, {
			"Name" : "Trenton",
			"Code" : "Trenton"
		}, {
			"Name" : "Union",
			"Code" : "Union"
		}, {
			"Name" : "Union City",
			"Code" : "Union City"
		}, {
			"Name" : "Vernon",
			"Code" : "Vernon"
		}, {
			"Name" : "Verona",
			"Code" : "Verona"
		}, {
			"Name" : "Vineland",
			"Code" : "Vineland"
		}, {
			"Name" : "Voorhees",
			"Code" : "Voorhees"
		}, {
			"Name" : "Wall",
			"Code" : "Wall"
		}, {
			"Name" : "Warren",
			"Code" : "Warren"
		}, {
			"Name" : "Washington Township",
			"Code" : "Washington Township"
		}, {
			"Name" : "Washington Township",
			"Code" : "Washington Township"
		}, {
			"Name" : "Wayne",
			"Code" : "Wayne"
		}, {
			"Name" : "West Deptford",
			"Code" : "West Deptford"
		}, {
			"Name" : "West Milford",
			"Code" : "West Milford"
		}, {
			"Name" : "West New York",
			"Code" : "West New York"
		}, {
			"Name" : "West Orange",
			"Code" : "West Orange"
		}, {
			"Name" : "West Windsor",
			"Code" : "West Windsor"
		}, {
			"Name" : "Westfield",
			"Code" : "Westfield"
		}, {
			"Name" : "Willingboro",
			"Code" : "Willingboro"
		}, {
			"Name" : "Winslow",
			"Code" : "Winslow"
		}, {
			"Name" : "Woodbridge",
			"Code" : "Woodbridge"
		}, {
			"Name" : "Wyckoff",
			"Code" : "Wyckoff"
		} ]
	}, {
		"Name" : "New Mexico",
		"Code" : "NM",
		"City" : [ {
			"Name" : "Alamogordo",
			"Code" : "Alamogordo"
		}, {
			"Name" : "Albuquerque",
			"Code" : "Albuquerque"
		}, {
			"Name" : "Anthony",
			"Code" : "Anthony"
		}, {
			"Name" : "Artesia",
			"Code" : "Artesia"
		}, {
			"Name" : "Belen",
			"Code" : "Belen"
		}, {
			"Name" : "Bernalillo",
			"Code" : "Bernalillo"
		}, {
			"Name" : "Bloomfield",
			"Code" : "Bloomfield"
		}, {
			"Name" : "Carlsbad",
			"Code" : "Carlsbad"
		}, {
			"Name" : "Chaparral",
			"Code" : "Chaparral"
		}, {
			"Name" : "Clovis",
			"Code" : "Clovis"
		}, {
			"Name" : "Corrales",
			"Code" : "Corrales"
		}, {
			"Name" : "Deming",
			"Code" : "Deming"
		}, {
			"Name" : "Espanola",
			"Code" : "Espanola"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Gallup",
			"Code" : "Gallup"
		}, {
			"Name" : "Grants",
			"Code" : "Grants"
		}, {
			"Name" : "Hobbs",
			"Code" : "Hobbs"
		}, {
			"Name" : "Kirtland",
			"Code" : "Kirtland"
		}, {
			"Name" : "Las Cruces",
			"Code" : "Las Cruces"
		}, {
			"Name" : "Las Vegas",
			"Code" : "Las Vegas"
		}, {
			"Name" : "Los Alamos",
			"Code" : "Los Alamos"
		}, {
			"Name" : "Los Lunas",
			"Code" : "Los Lunas"
		}, {
			"Name" : "Lovington",
			"Code" : "Lovington"
		}, {
			"Name" : "North Valley",
			"Code" : "North Valley"
		}, {
			"Name" : "Portales",
			"Code" : "Portales"
		}, {
			"Name" : "Rio Rancho",
			"Code" : "Rio Rancho"
		}, {
			"Name" : "Roswell",
			"Code" : "Roswell"
		}, {
			"Name" : "Ruidoso",
			"Code" : "Ruidoso"
		}, {
			"Name" : "Santa Fe",
			"Code" : "Santa Fe"
		}, {
			"Name" : "Shiprock",
			"Code" : "Shiprock"
		}, {
			"Name" : "Silver City",
			"Code" : "Silver City"
		}, {
			"Name" : "Socorro",
			"Code" : "Socorro"
		}, {
			"Name" : "South Valley",
			"Code" : "South Valley"
		}, {
			"Name" : "Sunland Park",
			"Code" : "Sunland Park"
		} ]
	}, {
		"Name" : "New York",
		"Code" : "NY",
		"City" : [ {
			"Name" : "Airmont",
			"Code" : "Airmont"
		}, {
			"Name" : "Albany",
			"Code" : "Albany"
		}, {
			"Name" : "Alden",
			"Code" : "Alden"
		}, {
			"Name" : "Amherst",
			"Code" : "Amherst"
		}, {
			"Name" : "Amityville",
			"Code" : "Amityville"
		}, {
			"Name" : "Amsterdam",
			"Code" : "Amsterdam"
		}, {
			"Name" : "Arcadia",
			"Code" : "Arcadia"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Aurora",
			"Code" : "Aurora"
		}, {
			"Name" : "Babylon",
			"Code" : "Babylon"
		}, {
			"Name" : "Baldwinsville",
			"Code" : "Baldwinsville"
		}, {
			"Name" : "Ballston",
			"Code" : "Ballston"
		}, {
			"Name" : "Batavia",
			"Code" : "Batavia"
		}, {
			"Name" : "Bath",
			"Code" : "Bath"
		}, {
			"Name" : "Beacon",
			"Code" : "Beacon"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Beekman",
			"Code" : "Beekman"
		}, {
			"Name" : "Bethlehem",
			"Code" : "Bethlehem"
		}, {
			"Name" : "Binghamton",
			"Code" : "Binghamton"
		}, {
			"Name" : "Blooming Grove",
			"Code" : "Blooming Grove"
		}, {
			"Name" : "Briarcliff Manor",
			"Code" : "Briarcliff Manor"
		}, {
			"Name" : "Brighton",
			"Code" : "Brighton"
		}, {
			"Name" : "Brockport",
			"Code" : "Brockport"
		}, {
			"Name" : "Brookhaven",
			"Code" : "Brookhaven"
		}, {
			"Name" : "Brunswick",
			"Code" : "Brunswick"
		}, {
			"Name" : "Buffalo",
			"Code" : "FFO"
		}, {
			"Name" : "Camillus",
			"Code" : "Camillus"
		}, {
			"Name" : "Canandaigua",
			"Code" : "Canandaigua"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Carmel",
			"Code" : "Carmel"
		}, {
			"Name" : "Catskill",
			"Code" : "Catskill"
		}, {
			"Name" : "Cheektowaga",
			"Code" : "Cheektowaga"
		}, {
			"Name" : "Chenango",
			"Code" : "Chenango"
		}, {
			"Name" : "Chester",
			"Code" : "Chester"
		}, {
			"Name" : "Chestnut Ridge",
			"Code" : "Chestnut Ridge"
		}, {
			"Name" : "Chili",
			"Code" : "Chili"
		}, {
			"Name" : "Cicero",
			"Code" : "Cicero"
		}, {
			"Name" : "Clarence",
			"Code" : "Clarence"
		}, {
			"Name" : "Clarkstown",
			"Code" : "Clarkstown"
		}, {
			"Name" : "Clay",
			"Code" : "Clay"
		}, {
			"Name" : "Clifton Park",
			"Code" : "Clifton Park"
		}, {
			"Name" : "Cohoes",
			"Code" : "Cohoes"
		}, {
			"Name" : "Colonie",
			"Code" : "Colonie"
		}, {
			"Name" : "Corning",
			"Code" : "Corning"
		}, {
			"Name" : "Cornwall",
			"Code" : "Cornwall"
		}, {
			"Name" : "Cortland",
			"Code" : "Cortland"
		}, {
			"Name" : "Cortlandt",
			"Code" : "Cortlandt"
		}, {
			"Name" : "Crawford",
			"Code" : "Crawford"
		}, {
			"Name" : "Croton-on-Hudson",
			"Code" : "Croton-on-Hudson"
		}, {
			"Name" : "Depew",
			"Code" : "Depew"
		}, {
			"Name" : "DeWitt (De Witt)",
			"Code" : "DeWitt (De Witt)"
		}, {
			"Name" : "Dobbs Ferry",
			"Code" : "Dobbs Ferry"
		}, {
			"Name" : "Dryden",
			"Code" : "Dryden"
		}, {
			"Name" : "Dunkirk",
			"Code" : "Dunkirk"
		}, {
			"Name" : "East Fishkill",
			"Code" : "East Fishkill"
		}, {
			"Name" : "East Greenbush",
			"Code" : "East Greenbush"
		}, {
			"Name" : "East Hampton",
			"Code" : "East Hampton"
		}, {
			"Name" : "East Hills",
			"Code" : "East Hills"
		}, {
			"Name" : "East Rockaway",
			"Code" : "East Rockaway"
		}, {
			"Name" : "Eastchester",
			"Code" : "Eastchester"
		}, {
			"Name" : "Elma",
			"Code" : "Elma"
		}, {
			"Name" : "Elmira",
			"Code" : "Elmira"
		}, {
			"Name" : "Endicott",
			"Code" : "Endicott"
		}, {
			"Name" : "Esopus",
			"Code" : "Esopus"
		}, {
			"Name" : "Evans",
			"Code" : "Evans"
		}, {
			"Name" : "Fallsburg",
			"Code" : "Fallsburg"
		}, {
			"Name" : "Farmingdale",
			"Code" : "Farmingdale"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Fishkill",
			"Code" : "Fishkill"
		}, {
			"Name" : "Floral Park",
			"Code" : "Floral Park"
		}, {
			"Name" : "Fredonia",
			"Code" : "Fredonia"
		}, {
			"Name" : "Freeport",
			"Code" : "Freeport"
		}, {
			"Name" : "Fulton",
			"Code" : "Fulton"
		}, {
			"Name" : "Garden City",
			"Code" : "Garden City"
		}, {
			"Name" : "Gates",
			"Code" : "Gates"
		}, {
			"Name" : "Geddes",
			"Code" : "Geddes"
		}, {
			"Name" : "Geneseo",
			"Code" : "Geneseo"
		}, {
			"Name" : "Geneva",
			"Code" : "Geneva"
		}, {
			"Name" : "German Flatts",
			"Code" : "German Flatts"
		}, {
			"Name" : "Glen Cove",
			"Code" : "Glen Cove"
		}, {
			"Name" : "Glens Falls",
			"Code" : "Glens Falls"
		}, {
			"Name" : "Glenville",
			"Code" : "Glenville"
		}, {
			"Name" : "Gloversville",
			"Code" : "Gloversville"
		}, {
			"Name" : "Goshen",
			"Code" : "Goshen"
		}, {
			"Name" : "Grand Island",
			"Code" : "Grand Island"
		}, {
			"Name" : "Great Neck",
			"Code" : "Great Neck"
		}, {
			"Name" : "Greece",
			"Code" : "Greece"
		}, {
			"Name" : "Greenburgh",
			"Code" : "Greenburgh"
		}, {
			"Name" : "Guilderland",
			"Code" : "Guilderland"
		}, {
			"Name" : "Halfmoon",
			"Code" : "Halfmoon"
		}, {
			"Name" : "Hamburg",
			"Code" : "Hamburg"
		}, {
			"Name" : "Hamlin",
			"Code" : "Hamlin"
		}, {
			"Name" : "Harrison",
			"Code" : "Harrison"
		}, {
			"Name" : "Hastings",
			"Code" : "Hastings"
		}, {
			"Name" : "Hastings-on-Hudson",
			"Code" : "Hastings-on-Hudson"
		}, {
			"Name" : "Haverstraw",
			"Code" : "Haverstraw"
		}, {
			"Name" : "Hempstead",
			"Code" : "Hempstead"
		}, {
			"Name" : "Henrietta",
			"Code" : "Henrietta"
		}, {
			"Name" : "Herkimer",
			"Code" : "Herkimer"
		}, {
			"Name" : "Highlands",
			"Code" : "Highlands"
		}, {
			"Name" : "Hornell",
			"Code" : "Hornell"
		}, {
			"Name" : "Horseheads",
			"Code" : "Horseheads"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Hudson Falls",
			"Code" : "Hudson Falls"
		}, {
			"Name" : "Huntington",
			"Code" : "Huntington"
		}, {
			"Name" : "Hyde Park",
			"Code" : "Hyde Park"
		}, {
			"Name" : "Ilion",
			"Code" : "Ilion"
		}, {
			"Name" : "Irondequoit",
			"Code" : "Irondequoit"
		}, {
			"Name" : "Islip",
			"Code" : "Islip"
		}, {
			"Name" : "Ithaca",
			"Code" : "Ithaca"
		}, {
			"Name" : "Jamestown",
			"Code" : "Jamestown"
		}, {
			"Name" : "Johnson City",
			"Code" : "Johnson City"
		}, {
			"Name" : "Johnstown",
			"Code" : "Johnstown"
		}, {
			"Name" : "Kenmore",
			"Code" : "Kenmore"
		}, {
			"Name" : "Kent",
			"Code" : "Kent"
		}, {
			"Name" : "Kingsbury",
			"Code" : "Kingsbury"
		}, {
			"Name" : "Kingston",
			"Code" : "Kingston"
		}, {
			"Name" : "Kirkland",
			"Code" : "Kirkland"
		}, {
			"Name" : "Kiryas Joel",
			"Code" : "Kiryas Joel"
		}, {
			"Name" : "Lackawanna",
			"Code" : "Lackawanna"
		}, {
			"Name" : "LaGrange (La Grange)",
			"Code" : "LaGrange (La Grange)"
		}, {
			"Name" : "Lake Grove",
			"Code" : "Lake Grove"
		}, {
			"Name" : "Lancaster",
			"Code" : "Lancaster"
		}, {
			"Name" : "Lansing",
			"Code" : "Lansing"
		}, {
			"Name" : "Le Ray",
			"Code" : "Le Ray"
		}, {
			"Name" : "Lenox",
			"Code" : "Lenox"
		}, {
			"Name" : "Lewisboro",
			"Code" : "Lewisboro"
		}, {
			"Name" : "Lewiston",
			"Code" : "Lewiston"
		}, {
			"Name" : "Liberty",
			"Code" : "Liberty"
		}, {
			"Name" : "Lindenhurst",
			"Code" : "Lindenhurst"
		}, {
			"Name" : "Little Falls",
			"Code" : "Little Falls"
		}, {
			"Name" : "Lloyd",
			"Code" : "Lloyd"
		}, {
			"Name" : "Lockport",
			"Code" : "Lockport"
		}, {
			"Name" : "Long Beach",
			"Code" : "Long Beach"
		}, {
			"Name" : "Lynbrook",
			"Code" : "Lynbrook"
		}, {
			"Name" : "Lysander",
			"Code" : "Lysander"
		}, {
			"Name" : "Macedon",
			"Code" : "Macedon"
		}, {
			"Name" : "Malone",
			"Code" : "Malone"
		}, {
			"Name" : "Malta",
			"Code" : "Malta"
		}, {
			"Name" : "Malverne",
			"Code" : "Malverne"
		}, {
			"Name" : "Mamakating",
			"Code" : "Mamakating"
		}, {
			"Name" : "Mamaroneck",
			"Code" : "Mamaroneck"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Manlius",
			"Code" : "Manlius"
		}, {
			"Name" : "Massapequa Park",
			"Code" : "Massapequa Park"
		}, {
			"Name" : "Massena",
			"Code" : "Massena"
		}, {
			"Name" : "Mastic Beach",
			"Code" : "Mastic Beach"
		}, {
			"Name" : "Mechanicville",
			"Code" : "Mechanicville"
		}, {
			"Name" : "Mendon",
			"Code" : "Mendon"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Milton",
			"Code" : "Milton"
		}, {
			"Name" : "Mineola",
			"Code" : "Mineola"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Montgomery",
			"Code" : "Montgomery"
		}, {
			"Name" : "Moreau",
			"Code" : "Moreau"
		}, {
			"Name" : "Mount Kisco",
			"Code" : "Mount Kisco"
		}, {
			"Name" : "Mount Pleasant",
			"Code" : "Mount Pleasant"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "New Castle",
			"Code" : "New Castle"
		}, {
			"Name" : "New Hartford",
			"Code" : "New Hartford"
		}, {
			"Name" : "New Hyde Park",
			"Code" : "New Hyde Park"
		}, {
			"Name" : "New Paltz",
			"Code" : "New Paltz"
		}, {
			"Name" : "New Rochelle",
			"Code" : "New Rochelle"
		}, {
			"Name" : "New Square",
			"Code" : "New Square"
		}, {
			"Name" : "New Windsor",
			"Code" : "New Windsor"
		}, {
			"Name" : "New York",
			"Code" : "QEE"
		}, {
			"Name" : "Newark",
			"Code" : "Newark"
		}, {
			"Name" : "Newburgh",
			"Code" : "Newburgh"
		}, {
			"Name" : "Newfane",
			"Code" : "Newfane"
		}, {
			"Name" : "Niagara Falls",
			"Code" : "Niagara Falls"
		}, {
			"Name" : "Niskayuna",
			"Code" : "Niskayuna"
		}, {
			"Name" : "North Castle",
			"Code" : "North Castle"
		}, {
			"Name" : "North Greenbush",
			"Code" : "North Greenbush"
		}, {
			"Name" : "North Hempstead",
			"Code" : "North Hempstead"
		}, {
			"Name" : "North Syracuse",
			"Code" : "North Syracuse"
		}, {
			"Name" : "North Tonawanda",
			"Code" : "North Tonawanda"
		}, {
			"Name" : "Northport",
			"Code" : "Northport"
		}, {
			"Name" : "Norwich",
			"Code" : "Norwich"
		}, {
			"Name" : "Nyack",
			"Code" : "Nyack"
		}, {
			"Name" : "Ogden",
			"Code" : "Ogden"
		}, {
			"Name" : "Ogdensburg",
			"Code" : "Ogdensburg"
		}, {
			"Name" : "Olean",
			"Code" : "Olean"
		}, {
			"Name" : "Oneida",
			"Code" : "Oneida"
		}, {
			"Name" : "Oneonta",
			"Code" : "Oneonta"
		}, {
			"Name" : "Onondaga",
			"Code" : "Onondaga"
		}, {
			"Name" : "Ontario",
			"Code" : "Ontario"
		}, {
			"Name" : "Orangetown",
			"Code" : "Orangetown"
		}, {
			"Name" : "Orchard Park",
			"Code" : "Orchard Park"
		}, {
			"Name" : "Ossining",
			"Code" : "Ossining"
		}, {
			"Name" : "Oswego",
			"Code" : "Oswego"
		}, {
			"Name" : "Owego",
			"Code" : "Owego"
		}, {
			"Name" : "Oyster Bay",
			"Code" : "Oyster Bay"
		}, {
			"Name" : "Parma",
			"Code" : "Parma"
		}, {
			"Name" : "Patchogue",
			"Code" : "Patchogue"
		}, {
			"Name" : "Patterson",
			"Code" : "Patterson"
		}, {
			"Name" : "Peekskill",
			"Code" : "Peekskill"
		}, {
			"Name" : "Pelham",
			"Code" : "Pelham"
		}, {
			"Name" : "Penfield",
			"Code" : "Penfield"
		}, {
			"Name" : "Perinton",
			"Code" : "Perinton"
		}, {
			"Name" : "Philipstown",
			"Code" : "Philipstown"
		}, {
			"Name" : "Pittsford",
			"Code" : "Pittsford"
		}, {
			"Name" : "Plattekill",
			"Code" : "Plattekill"
		}, {
			"Name" : "Plattsburgh",
			"Code" : "Plattsburgh"
		}, {
			"Name" : "Pleasant Valley",
			"Code" : "Pleasant Valley"
		}, {
			"Name" : "Pleasantville",
			"Code" : "Pleasantville"
		}, {
			"Name" : "Pomfret",
			"Code" : "Pomfret"
		}, {
			"Name" : "Port Chester",
			"Code" : "Port Chester"
		}, {
			"Name" : "Port Jefferson",
			"Code" : "Port Jefferson"
		}, {
			"Name" : "Port Jervis",
			"Code" : "Port Jervis"
		}, {
			"Name" : "Potsdam",
			"Code" : "Potsdam"
		}, {
			"Name" : "Poughkeepsie",
			"Code" : "Poughkeepsie"
		}, {
			"Name" : "Putnam Valley",
			"Code" : "Putnam Valley"
		}, {
			"Name" : "Queensbury",
			"Code" : "Queensbury"
		}, {
			"Name" : "Ramapo",
			"Code" : "Ramapo"
		}, {
			"Name" : "Red Hook",
			"Code" : "Red Hook"
		}, {
			"Name" : "Rensselaer",
			"Code" : "Rensselaer"
		}, {
			"Name" : "Riverhead",
			"Code" : "Riverhead"
		}, {
			"Name" : "Rochester",
			"Code" : "ROC"
		}, {
			"Name" : "Rockville Centre",
			"Code" : "Rockville Centre"
		}, {
			"Name" : "Rome",
			"Code" : "Rome"
		}, {
			"Name" : "Rotterdam",
			"Code" : "Rotterdam"
		}, {
			"Name" : "Rye",
			"Code" : "Rye"
		}, {
			"Name" : "Rye Brook",
			"Code" : "Rye Brook"
		}, {
			"Name" : "Salamanca",
			"Code" : "Salamanca"
		}, {
			"Name" : "Salina",
			"Code" : "Salina"
		}, {
			"Name" : "Saratoga Springs",
			"Code" : "Saratoga Springs"
		}, {
			"Name" : "Saugerties",
			"Code" : "Saugerties"
		}, {
			"Name" : "Scarsdale",
			"Code" : "Scarsdale"
		}, {
			"Name" : "Schenectady",
			"Code" : "Schenectady"
		}, {
			"Name" : "Schodack",
			"Code" : "Schodack"
		}, {
			"Name" : "Scotia",
			"Code" : "Scotia"
		}, {
			"Name" : "Seneca Falls",
			"Code" : "Seneca Falls"
		}, {
			"Name" : "Shawangunk",
			"Code" : "Shawangunk"
		}, {
			"Name" : "Sherrill",
			"Code" : "Sherrill"
		}, {
			"Name" : "Sleepy Hollow",
			"Code" : "Sleepy Hollow"
		}, {
			"Name" : "Smithtown",
			"Code" : "Smithtown"
		}, {
			"Name" : "Somers",
			"Code" : "Somers"
		}, {
			"Name" : "Southampton",
			"Code" : "Southampton"
		}, {
			"Name" : "Southeast",
			"Code" : "Southeast"
		}, {
			"Name" : "Southold",
			"Code" : "Southold"
		}, {
			"Name" : "Southport",
			"Code" : "Southport"
		}, {
			"Name" : "Spring Valley",
			"Code" : "Spring Valley"
		}, {
			"Name" : "Stony Point",
			"Code" : "Stony Point"
		}, {
			"Name" : "Suffern",
			"Code" : "Suffern"
		}, {
			"Name" : "Sullivan",
			"Code" : "Sullivan"
		}, {
			"Name" : "Sweden",
			"Code" : "Sweden"
		}, {
			"Name" : "Syracuse",
			"Code" : "Syracuse"
		}, {
			"Name" : "Tarrytown",
			"Code" : "Tarrytown"
		}, {
			"Name" : "Thompson",
			"Code" : "Thompson"
		}, {
			"Name" : "Tonawanda",
			"Code" : "Tonawanda"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Ulster",
			"Code" : "Ulster"
		}, {
			"Name" : "Union",
			"Code" : "Union"
		}, {
			"Name" : "Utica",
			"Code" : "Utica"
		}, {
			"Name" : "Valley Stream",
			"Code" : "Valley Stream"
		}, {
			"Name" : "Van Buren",
			"Code" : "Van Buren"
		}, {
			"Name" : "Vestal",
			"Code" : "Vestal"
		}, {
			"Name" : "Victor",
			"Code" : "Victor"
		}, {
			"Name" : "Walden",
			"Code" : "Walden"
		}, {
			"Name" : "Wallkill",
			"Code" : "Wallkill"
		}, {
			"Name" : "Walworth",
			"Code" : "Walworth"
		}, {
			"Name" : "Wappinger",
			"Code" : "Wappinger"
		}, {
			"Name" : "Warwick",
			"Code" : "Warwick"
		}, {
			"Name" : "Watertown",
			"Code" : "Watertown"
		}, {
			"Name" : "Watervliet",
			"Code" : "Watervliet"
		}, {
			"Name" : "Wawarsing",
			"Code" : "Wawarsing"
		}, {
			"Name" : "Webster",
			"Code" : "Webster"
		}, {
			"Name" : "West Haverstraw",
			"Code" : "West Haverstraw"
		}, {
			"Name" : "West Seneca",
			"Code" : "West Seneca"
		}, {
			"Name" : "Westbury",
			"Code" : "Westbury"
		}, {
			"Name" : "Wheatfield",
			"Code" : "Wheatfield"
		}, {
			"Name" : "White Plains",
			"Code" : "White Plains"
		}, {
			"Name" : "Whitestown",
			"Code" : "Whitestown"
		}, {
			"Name" : "Williston Park",
			"Code" : "Williston Park"
		}, {
			"Name" : "Wilton",
			"Code" : "Wilton"
		}, {
			"Name" : "Woodbury",
			"Code" : "Woodbury"
		}, {
			"Name" : "Yonkers",
			"Code" : "Yonkers"
		}, {
			"Name" : "Yorktown",
			"Code" : "Yorktown"
		} ]
	}, {
		"Name" : "North Carolina",
		"Code" : "NC",
		"City" : [ {
			"Name" : "Apex",
			"Code" : "Apex"
		}, {
			"Name" : "Asheboro",
			"Code" : "Asheboro"
		}, {
			"Name" : "Asheville",
			"Code" : "Asheville"
		}, {
			"Name" : "Boone",
			"Code" : "Boone"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Carrboro",
			"Code" : "Carrboro"
		}, {
			"Name" : "Cary",
			"Code" : "Cary"
		}, {
			"Name" : "Chapel Hill",
			"Code" : "Chapel Hill"
		}, {
			"Name" : "Charlotte",
			"Code" : "Charlotte"
		}, {
			"Name" : "Clayton",
			"Code" : "Clayton"
		}, {
			"Name" : "Clemmons",
			"Code" : "Clemmons"
		}, {
			"Name" : "Concord",
			"Code" : "Concord"
		}, {
			"Name" : "Cornelius",
			"Code" : "Cornelius"
		}, {
			"Name" : "Durham",
			"Code" : "Durham"
		}, {
			"Name" : "Fayetteville",
			"Code" : "Fayetteville"
		}, {
			"Name" : "Fuquay-Varina",
			"Code" : "Fuquay-Varina"
		}, {
			"Name" : "Garner",
			"Code" : "Garner"
		}, {
			"Name" : "Gastonia",
			"Code" : "Gastonia"
		}, {
			"Name" : "Goldsboro",
			"Code" : "Goldsboro"
		}, {
			"Name" : "Greensboro",
			"Code" : "Greensboro"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Havelock",
			"Code" : "Havelock"
		}, {
			"Name" : "Hickory",
			"Code" : "Hickory"
		}, {
			"Name" : "High Point",
			"Code" : "High Point"
		}, {
			"Name" : "Holly Springs",
			"Code" : "Holly Springs"
		}, {
			"Name" : "Huntersville",
			"Code" : "Huntersville"
		}, {
			"Name" : "Indian Trail",
			"Code" : "Indian Trail"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Kannapolis",
			"Code" : "Kannapolis"
		}, {
			"Name" : "Kernersville",
			"Code" : "Kernersville"
		}, {
			"Name" : "Kinston",
			"Code" : "Kinston"
		}, {
			"Name" : "Lexington",
			"Code" : "Lexington"
		}, {
			"Name" : "Lumberton",
			"Code" : "Lumberton"
		}, {
			"Name" : "Matthews",
			"Code" : "Matthews"
		}, {
			"Name" : "Mint Hill",
			"Code" : "Mint Hill"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Mooresville",
			"Code" : "Mooresville"
		}, {
			"Name" : "Morrisville",
			"Code" : "Morrisville"
		}, {
			"Name" : "New Bern",
			"Code" : "New Bern"
		}, {
			"Name" : "Raleigh",
			"Code" : "Raleigh"
		}, {
			"Name" : "Rocky Mount",
			"Code" : "Rocky Mount"
		}, {
			"Name" : "Salisbury",
			"Code" : "Salisbury"
		}, {
			"Name" : "Sanford",
			"Code" : "Sanford"
		}, {
			"Name" : "Shelby",
			"Code" : "Shelby"
		}, {
			"Name" : "Statesville",
			"Code" : "Statesville"
		}, {
			"Name" : "Thomasville",
			"Code" : "Thomasville"
		}, {
			"Name" : "Wake Forest",
			"Code" : "Wake Forest"
		}, {
			"Name" : "Wilmington",
			"Code" : "Wilmington"
		}, {
			"Name" : "Wilson",
			"Code" : "Wilson"
		}, {
			"Name" : "Winston-Salem",
			"Code" : "Winston-Salem"
		} ]
	}, {
		"Name" : "North Dakota",
		"Code" : "ND",
		"City" : [ {
			"Name" : "Bismarck",
			"Code" : "Bismarck"
		}, {
			"Name" : "Devils Lake",
			"Code" : "Devils Lake"
		}, {
			"Name" : "Dickinson",
			"Code" : "Dickinson"
		}, {
			"Name" : "Fargo",
			"Code" : "Fargo"
		}, {
			"Name" : "Grand Forks",
			"Code" : "Grand Forks"
		}, {
			"Name" : "Jamestown",
			"Code" : "Jamestown"
		}, {
			"Name" : "Mandan",
			"Code" : "Mandan"
		}, {
			"Name" : "Minot",
			"Code" : "Minot"
		}, {
			"Name" : "Valley City",
			"Code" : "Valley City"
		}, {
			"Name" : "Wahpeton",
			"Code" : "Wahpeton"
		}, {
			"Name" : "West Fargo",
			"Code" : "West Fargo"
		}, {
			"Name" : "Williston",
			"Code" : "Williston"
		} ]
	}, {
		"Name" : "Ohio",
		"Code" : "OH",
		"City" : [ {
			"Name" : "Akron",
			"Code" : "Akron"
		}, {
			"Name" : "Alledonia",
			"Code" : "Alledonia"
		}, {
			"Name" : "Alliance",
			"Code" : "Alliance"
		}, {
			"Name" : "Amherst",
			"Code" : "Amherst"
		}, {
			"Name" : "Apple Creek",
			"Code" : "Apple Creek"
		}, {
			"Name" : "Archbold",
			"Code" : "Archbold"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Ashtabula",
			"Code" : "Ashtabula"
		}, {
			"Name" : "Athens",
			"Code" : "Athens"
		}, {
			"Name" : "Atwater",
			"Code" : "Atwater"
		}, {
			"Name" : "Aurora",
			"Code" : "Aurora"
		}, {
			"Name" : "Austintown",
			"Code" : "Austintown"
		}, {
			"Name" : "Avon Lake",
			"Code" : "Avon Lake"
		}, {
			"Name" : "Barberton",
			"Code" : "Barberton"
		}, {
			"Name" : "Batavia",
			"Code" : "Batavia"
		}, {
			"Name" : "Bay Village",
			"Code" : "Bay Village"
		}, {
			"Name" : "Beachwood",
			"Code" : "Beachwood"
		}, {
			"Name" : "Beavercreek",
			"Code" : "Beavercreek"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Bedford Heights",
			"Code" : "Bedford Heights"
		}, {
			"Name" : "Bellaire",
			"Code" : "Bellaire"
		}, {
			"Name" : "Bellefontaine",
			"Code" : "Bellefontaine"
		}, {
			"Name" : "Bellevue",
			"Code" : "Bellevue"
		}, {
			"Name" : "Berea",
			"Code" : "Berea"
		}, {
			"Name" : "Bexley",
			"Code" : "Bexley"
		}, {
			"Name" : "Blacklick",
			"Code" : "Blacklick"
		}, {
			"Name" : "Blacklick Estates",
			"Code" : "Blacklick Estates"
		}, {
			"Name" : "Blanchester",
			"Code" : "Blanchester"
		}, {
			"Name" : "Blue Ash",
			"Code" : "Blue Ash"
		}, {
			"Name" : "Boardman",
			"Code" : "Boardman"
		}, {
			"Name" : "Bowling Green",
			"Code" : "Bowling Green"
		}, {
			"Name" : "Brecksville",
			"Code" : "Brecksville"
		}, {
			"Name" : "Bridgetown North",
			"Code" : "Bridgetown North"
		}, {
			"Name" : "Bristolville",
			"Code" : "Bristolville"
		}, {
			"Name" : "Broadview Heights",
			"Code" : "Broadview Heights"
		}, {
			"Name" : "Brook Park",
			"Code" : "Brook Park"
		}, {
			"Name" : "Brooklyn",
			"Code" : "Brooklyn"
		}, {
			"Name" : "Brunswick",
			"Code" : "Brunswick"
		}, {
			"Name" : "Bryan",
			"Code" : "Bryan"
		}, {
			"Name" : "Bucyrus",
			"Code" : "Bucyrus"
		}, {
			"Name" : "Burton",
			"Code" : "Burton"
		}, {
			"Name" : "Cambridge",
			"Code" : "Cambridge"
		}, {
			"Name" : "Campbell",
			"Code" : "Campbell"
		}, {
			"Name" : "Canal Winchester",
			"Code" : "Canal Winchester"
		}, {
			"Name" : "Canton",
			"Code" : "Canton"
		}, {
			"Name" : "Carlisle",
			"Code" : "Carlisle"
		}, {
			"Name" : "Celina",
			"Code" : "Celina"
		}, {
			"Name" : "Centerville",
			"Code" : "Centerville"
		}, {
			"Name" : "Chagrin Falls",
			"Code" : "Chagrin Falls"
		}, {
			"Name" : "Chardon",
			"Code" : "Chardon"
		}, {
			"Name" : "Cheshire",
			"Code" : "Cheshire"
		}, {
			"Name" : "Chillicothe",
			"Code" : "Chillicothe"
		}, {
			"Name" : "Chippewa Lake",
			"Code" : "Chippewa Lake"
		}, {
			"Name" : "Cincinnati",
			"Code" : "Cincinnati"
		}, {
			"Name" : "Circleville",
			"Code" : "Circleville"
		}, {
			"Name" : "Cleveland",
			"Code" : "Cleveland"
		}, {
			"Name" : "Cleveland Heights",
			"Code" : "Cleveland Heights"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Conneaut",
			"Code" : "Conneaut"
		}, {
			"Name" : "Coshocton",
			"Code" : "Coshocton"
		}, {
			"Name" : "Cuyahoga Falls",
			"Code" : "Cuyahoga Falls"
		}, {
			"Name" : "Dayton",
			"Code" : "Dayton"
		}, {
			"Name" : "Defiance",
			"Code" : "Defiance"
		}, {
			"Name" : "Delaware",
			"Code" : "Delaware"
		}, {
			"Name" : "Dover",
			"Code" : "Dover"
		}, {
			"Name" : "Dublin",
			"Code" : "Dublin"
		}, {
			"Name" : "East Cleveland",
			"Code" : "East Cleveland"
		}, {
			"Name" : "East Liverpool",
			"Code" : "East Liverpool"
		}, {
			"Name" : "Eastlake",
			"Code" : "Eastlake"
		}, {
			"Name" : "Elyria",
			"Code" : "Elyria"
		}, {
			"Name" : "Englewood",
			"Code" : "Englewood"
		}, {
			"Name" : "Euclid",
			"Code" : "Euclid"
		}, {
			"Name" : "Fairborn",
			"Code" : "Fairborn"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Fairview Park",
			"Code" : "Fairview Park"
		}, {
			"Name" : "Findlay",
			"Code" : "Findlay"
		}, {
			"Name" : "Finneytown",
			"Code" : "Finneytown"
		}, {
			"Name" : "Forest Park",
			"Code" : "Forest Park"
		}, {
			"Name" : "Fort MacKinley",
			"Code" : "Fort MacKinley"
		}, {
			"Name" : "Fostoria",
			"Code" : "Fostoria"
		}, {
			"Name" : "Fremont",
			"Code" : "Fremont"
		}, {
			"Name" : "Gahanna",
			"Code" : "Gahanna"
		}, {
			"Name" : "Galion",
			"Code" : "Galion"
		}, {
			"Name" : "Garfield Heights",
			"Code" : "Garfield Heights"
		}, {
			"Name" : "Girard",
			"Code" : "Girard"
		}, {
			"Name" : "Glenwillow",
			"Code" : "Glenwillow"
		}, {
			"Name" : "Green",
			"Code" : "Green"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Grove City",
			"Code" : "Grove City"
		}, {
			"Name" : "Hamilton",
			"Code" : "Hamilton"
		}, {
			"Name" : "Harrison",
			"Code" : "Harrison"
		}, {
			"Name" : "Hilliard",
			"Code" : "Hilliard"
		}, {
			"Name" : "Hiram",
			"Code" : "Hiram"
		}, {
			"Name" : "Holland",
			"Code" : "Holland"
		}, {
			"Name" : "Huber Heights",
			"Code" : "Huber Heights"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Ironton",
			"Code" : "Ironton"
		}, {
			"Name" : "Kent",
			"Code" : "Kent"
		}, {
			"Name" : "Kettering",
			"Code" : "Kettering"
		}, {
			"Name" : "Kidron",
			"Code" : "Kidron"
		}, {
			"Name" : "Lakewood",
			"Code" : "Lakewood"
		}, {
			"Name" : "Lancaster",
			"Code" : "Lancaster"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lewis Center",
			"Code" : "Lewis Center"
		}, {
			"Name" : "Lima",
			"Code" : "Lima"
		}, {
			"Name" : "Lincoln Village",
			"Code" : "Lincoln Village"
		}, {
			"Name" : "Lorain",
			"Code" : "Lorain"
		}, {
			"Name" : "Loveland",
			"Code" : "Loveland"
		}, {
			"Name" : "Lyndhurst",
			"Code" : "Lyndhurst"
		}, {
			"Name" : "Macedonia",
			"Code" : "Macedonia"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Maineville",
			"Code" : "Maineville"
		}, {
			"Name" : "Mansfield",
			"Code" : "Mansfield"
		}, {
			"Name" : "Maple Heights",
			"Code" : "Maple Heights"
		}, {
			"Name" : "Marietta",
			"Code" : "Marietta"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Marysville",
			"Code" : "Marysville"
		}, {
			"Name" : "Mason",
			"Code" : "Mason"
		}, {
			"Name" : "Massillon",
			"Code" : "Massillon"
		}, {
			"Name" : "Maumee",
			"Code" : "Maumee"
		}, {
			"Name" : "Mayfield Heights",
			"Code" : "Mayfield Heights"
		}, {
			"Name" : "Medina",
			"Code" : "Medina"
		}, {
			"Name" : "Mentor",
			"Code" : "Mentor"
		}, {
			"Name" : "Miamisburg",
			"Code" : "Miamisburg"
		}, {
			"Name" : "Middleburg Heights",
			"Code" : "Middleburg Heights"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Millbury",
			"Code" : "Millbury"
		}, {
			"Name" : "Mineral City",
			"Code" : "Mineral City"
		}, {
			"Name" : "Minster",
			"Code" : "Minster"
		}, {
			"Name" : "Mount Gilead",
			"Code" : "Mount Gilead"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "Nelsonville",
			"Code" : "Nelsonville"
		}, {
			"Name" : "New Albany",
			"Code" : "New Albany"
		}, {
			"Name" : "New Philadelphia",
			"Code" : "New Philadelphia"
		}, {
			"Name" : "Newark",
			"Code" : "Newark"
		}, {
			"Name" : "Niles",
			"Code" : "Niles"
		}, {
			"Name" : "North Canton",
			"Code" : "North Canton"
		}, {
			"Name" : "North College Hill",
			"Code" : "North College Hill"
		}, {
			"Name" : "North Lewisburg",
			"Code" : "North Lewisburg"
		}, {
			"Name" : "North Olmsted",
			"Code" : "North Olmsted"
		}, {
			"Name" : "North Ridgeville",
			"Code" : "North Ridgeville"
		}, {
			"Name" : "North Royalton",
			"Code" : "North Royalton"
		}, {
			"Name" : "Northbrook",
			"Code" : "Northbrook"
		}, {
			"Name" : "Northfield",
			"Code" : "Northfield"
		}, {
			"Name" : "Northview",
			"Code" : "Northview"
		}, {
			"Name" : "Norton",
			"Code" : "Norton"
		}, {
			"Name" : "Norwalk",
			"Code" : "Norwalk"
		}, {
			"Name" : "Norwood",
			"Code" : "Norwood"
		}, {
			"Name" : "Oberlin",
			"Code" : "Oberlin"
		}, {
			"Name" : "Ohio",
			"Code" : "Ohio"
		}, {
			"Name" : "Oregon",
			"Code" : "Oregon"
		}, {
			"Name" : "Overlook-Page Manor",
			"Code" : "Overlook-Page Manor"
		}, {
			"Name" : "Oxford",
			"Code" : "Oxford"
		}, {
			"Name" : "Painesville",
			"Code" : "Painesville"
		}, {
			"Name" : "Parma",
			"Code" : "Parma"
		}, {
			"Name" : "Parma Heights",
			"Code" : "Parma Heights"
		}, {
			"Name" : "Peninsula",
			"Code" : "Peninsula"
		}, {
			"Name" : "Perrysburg",
			"Code" : "Perrysburg"
		}, {
			"Name" : "Pickerington",
			"Code" : "Pickerington"
		}, {
			"Name" : "Piqua",
			"Code" : "Piqua"
		}, {
			"Name" : "Portage Lakes",
			"Code" : "Portage Lakes"
		}, {
			"Name" : "Portsmouth",
			"Code" : "Portsmouth"
		}, {
			"Name" : "Powell",
			"Code" : "Powell"
		}, {
			"Name" : "Ravenna",
			"Code" : "Ravenna"
		}, {
			"Name" : "Reading",
			"Code" : "Reading"
		}, {
			"Name" : "Reynoldsburg",
			"Code" : "Reynoldsburg"
		}, {
			"Name" : "Rittman",
			"Code" : "Rittman"
		}, {
			"Name" : "Riverside",
			"Code" : "Riverside"
		}, {
			"Name" : "Rocky River",
			"Code" : "Rocky River"
		}, {
			"Name" : "Rossford",
			"Code" : "Rossford"
		}, {
			"Name" : "Salem",
			"Code" : "Salem"
		}, {
			"Name" : "Sandusky",
			"Code" : "Sandusky"
		}, {
			"Name" : "Seven Hills",
			"Code" : "Seven Hills"
		}, {
			"Name" : "Seville",
			"Code" : "Seville"
		}, {
			"Name" : "Shaker Heights",
			"Code" : "Shaker Heights"
		}, {
			"Name" : "Sharonville",
			"Code" : "Sharonville"
		}, {
			"Name" : "Sheffield Lake",
			"Code" : "Sheffield Lake"
		}, {
			"Name" : "Shelby",
			"Code" : "Shelby"
		}, {
			"Name" : "Sidney",
			"Code" : "Sidney"
		}, {
			"Name" : "Solon",
			"Code" : "Solon"
		}, {
			"Name" : "South Euclid",
			"Code" : "South Euclid"
		}, {
			"Name" : "Springdale",
			"Code" : "Springdale"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Steubenville",
			"Code" : "Steubenville"
		}, {
			"Name" : "Stow",
			"Code" : "Stow"
		}, {
			"Name" : "Streetsboro",
			"Code" : "Streetsboro"
		}, {
			"Name" : "Strongsville",
			"Code" : "Strongsville"
		}, {
			"Name" : "Struthers",
			"Code" : "Struthers"
		}, {
			"Name" : "Sylvania",
			"Code" : "Sylvania"
		}, {
			"Name" : "Tallmadge",
			"Code" : "Tallmadge"
		}, {
			"Name" : "Tiffin",
			"Code" : "Tiffin"
		}, {
			"Name" : "Toledo",
			"Code" : "Toledo"
		}, {
			"Name" : "Trotwood",
			"Code" : "Trotwood"
		}, {
			"Name" : "Troy",
			"Code" : "Troy"
		}, {
			"Name" : "Twinsburg",
			"Code" : "Twinsburg"
		}, {
			"Name" : "University Heights",
			"Code" : "University Heights"
		}, {
			"Name" : "Upper Arlington",
			"Code" : "Upper Arlington"
		}, {
			"Name" : "Urbana",
			"Code" : "Urbana"
		}, {
			"Name" : "Valley Glen",
			"Code" : "Valley Glen"
		}, {
			"Name" : "Van Wert",
			"Code" : "Van Wert"
		}, {
			"Name" : "Vandalia",
			"Code" : "Vandalia"
		}, {
			"Name" : "Vermilion",
			"Code" : "Vermilion"
		}, {
			"Name" : "Wadsworth",
			"Code" : "Wadsworth"
		}, {
			"Name" : "Warren",
			"Code" : "Warren"
		}, {
			"Name" : "Warrensville Heights",
			"Code" : "Warrensville Heights"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "Waverly",
			"Code" : "Waverly"
		}, {
			"Name" : "West Carrollton City",
			"Code" : "West Carrollton City"
		}, {
			"Name" : "West Chester",
			"Code" : "West Chester"
		}, {
			"Name" : "Westerville",
			"Code" : "Westerville"
		}, {
			"Name" : "Westlake",
			"Code" : "Westlake"
		}, {
			"Name" : "White Oak",
			"Code" : "White Oak"
		}, {
			"Name" : "Whitehall",
			"Code" : "Whitehall"
		}, {
			"Name" : "Wickliffe",
			"Code" : "Wickliffe"
		}, {
			"Name" : "Willoughby",
			"Code" : "Willoughby"
		}, {
			"Name" : "Willowick",
			"Code" : "Willowick"
		}, {
			"Name" : "Wilmington",
			"Code" : "Wilmington"
		}, {
			"Name" : "Winesburg",
			"Code" : "Winesburg"
		}, {
			"Name" : "Wooster",
			"Code" : "Wooster"
		}, {
			"Name" : "Worthington",
			"Code" : "Worthington"
		}, {
			"Name" : "Xenia",
			"Code" : "Xenia"
		}, {
			"Name" : "Yellow Springs",
			"Code" : "Yellow Springs"
		}, {
			"Name" : "Youngstown",
			"Code" : "Youngstown"
		}, {
			"Name" : "Zanesville",
			"Code" : "Zanesville"
		} ]
	}, {
		"Name" : "Oklahoma",
		"Code" : "OK",
		"City" : [ {
			"Name" : "Ada",
			"Code" : "Ada"
		}, {
			"Name" : "Altus",
			"Code" : "Altus"
		}, {
			"Name" : "Ardmore",
			"Code" : "Ardmore"
		}, {
			"Name" : "Bartlesville",
			"Code" : "Bartlesville"
		}, {
			"Name" : "Bethany",
			"Code" : "Bethany"
		}, {
			"Name" : "Bixby",
			"Code" : "Bixby"
		}, {
			"Name" : "Broken Arrow",
			"Code" : "Broken Arrow"
		}, {
			"Name" : "Catoosa",
			"Code" : "Catoosa"
		}, {
			"Name" : "Chickasha",
			"Code" : "Chickasha"
		}, {
			"Name" : "Choctaw",
			"Code" : "Choctaw"
		}, {
			"Name" : "Claremore",
			"Code" : "Claremore"
		}, {
			"Name" : "Del City",
			"Code" : "Del City"
		}, {
			"Name" : "Duncan",
			"Code" : "Duncan"
		}, {
			"Name" : "Durant",
			"Code" : "Durant"
		}, {
			"Name" : "Edmond",
			"Code" : "Edmond"
		}, {
			"Name" : "El Reno",
			"Code" : "El Reno"
		}, {
			"Name" : "Elk City",
			"Code" : "Elk City"
		}, {
			"Name" : "Enid",
			"Code" : "Enid"
		}, {
			"Name" : "Fort Sill",
			"Code" : "Fort Sill"
		}, {
			"Name" : "Grove",
			"Code" : "Grove"
		}, {
			"Name" : "Guthrie",
			"Code" : "Guthrie"
		}, {
			"Name" : "Heavener",
			"Code" : "Heavener"
		}, {
			"Name" : "Hugo",
			"Code" : "Hugo"
		}, {
			"Name" : "Lawton",
			"Code" : "Lawton"
		}, {
			"Name" : "Lindsay",
			"Code" : "Lindsay"
		}, {
			"Name" : "MacAlester",
			"Code" : "MacAlester"
		}, {
			"Name" : "Miami",
			"Code" : "Miami"
		}, {
			"Name" : "Midwest City",
			"Code" : "Midwest City"
		}, {
			"Name" : "Moore",
			"Code" : "Moore"
		}, {
			"Name" : "Morrison",
			"Code" : "Morrison"
		}, {
			"Name" : "Muskogee",
			"Code" : "Muskogee"
		}, {
			"Name" : "Mustang",
			"Code" : "Mustang"
		}, {
			"Name" : "Norman",
			"Code" : "Norman"
		}, {
			"Name" : "Oklahoma City",
			"Code" : "Oklahoma City"
		}, {
			"Name" : "Okmulgee",
			"Code" : "Okmulgee"
		}, {
			"Name" : "Owasso",
			"Code" : "Owasso"
		}, {
			"Name" : "Pawnee",
			"Code" : "Pawnee"
		}, {
			"Name" : "Ponca City",
			"Code" : "Ponca City"
		}, {
			"Name" : "Rattan",
			"Code" : "Rattan"
		}, {
			"Name" : "Sand Springs",
			"Code" : "Sand Springs"
		}, {
			"Name" : "Sapulpa",
			"Code" : "Sapulpa"
		}, {
			"Name" : "Shawnee",
			"Code" : "Shawnee"
		}, {
			"Name" : "Stillwater",
			"Code" : "Stillwater"
		}, {
			"Name" : "Sulphur",
			"Code" : "Sulphur"
		}, {
			"Name" : "Tahlequah",
			"Code" : "Tahlequah"
		}, {
			"Name" : "The Village",
			"Code" : "The Village"
		}, {
			"Name" : "Tulsa",
			"Code" : "Tulsa"
		}, {
			"Name" : "Weatherford",
			"Code" : "Weatherford"
		}, {
			"Name" : "Welch",
			"Code" : "Welch"
		}, {
			"Name" : "Woodward",
			"Code" : "Woodward"
		}, {
			"Name" : "Yukon",
			"Code" : "Yukon"
		} ]
	}, {
		"Name" : "Oregon",
		"Code" : "OR",
		"City" : [ {
			"Name" : "Albany",
			"Code" : "Albany"
		}, {
			"Name" : "Aloha",
			"Code" : "Aloha"
		}, {
			"Name" : "Altamont",
			"Code" : "Altamont"
		}, {
			"Name" : "Arleta",
			"Code" : "Arleta"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Astoria",
			"Code" : "Astoria"
		}, {
			"Name" : "Baker City",
			"Code" : "Baker City"
		}, {
			"Name" : "Beaverton",
			"Code" : "Beaverton"
		}, {
			"Name" : "Bend",
			"Code" : "BZO"
		}, {
			"Name" : "Canby",
			"Code" : "Canby"
		}, {
			"Name" : "Cave Junction",
			"Code" : "Cave Junction"
		}, {
			"Name" : "Cedar Hills",
			"Code" : "Cedar Hills"
		}, {
			"Name" : "Cedar Mill",
			"Code" : "Cedar Mill"
		}, {
			"Name" : "Central Point",
			"Code" : "Central Point"
		}, {
			"Name" : "City of The Dalles",
			"Code" : "City of The Dalles"
		}, {
			"Name" : "Coos Bay",
			"Code" : "COB"
		}, {
			"Name" : "Corvallis",
			"Code" : "YCV"
		}, {
			"Name" : "Creswell",
			"Code" : "Creswell"
		}, {
			"Name" : "Dallas",
			"Code" : "DAC"
		}, {
			"Name" : "Donald",
			"Code" : "Donald"
		}, {
			"Name" : "Eugene",
			"Code" : "EUG"
		}, {
			"Name" : "Forest Grove",
			"Code" : "Forest Grove"
		}, {
			"Name" : "Four Corners",
			"Code" : "Four Corners"
		}, {
			"Name" : "Gladstone",
			"Code" : "Gladstone"
		}, {
			"Name" : "Glide",
			"Code" : "Glide"
		}, {
			"Name" : "Grants Pass",
			"Code" : "XFX"
		}, {
			"Name" : "Gresham",
			"Code" : "Gresham"
		}, {
			"Name" : "Hayesville",
			"Code" : "Hayesville"
		}, {
			"Name" : "Hazelwood",
			"Code" : "Hazelwood"
		}, {
			"Name" : "Hermiston",
			"Code" : "Hermiston"
		}, {
			"Name" : "Hillsboro",
			"Code" : "Hillsboro"
		}, {
			"Name" : "Hood River",
			"Code" : "HDX"
		}, {
			"Name" : "Hubbard",
			"Code" : "Hubbard"
		}, {
			"Name" : "John Day",
			"Code" : "John Day"
		}, {
			"Name" : "Jordan Valley",
			"Code" : "Jordan Valley"
		}, {
			"Name" : "Keizer",
			"Code" : "Keizer"
		}, {
			"Name" : "Klamath Falls",
			"Code" : "Klamath Falls"
		}, {
			"Name" : "La Grande",
			"Code" : "La Grande"
		}, {
			"Name" : "Lake Oswego",
			"Code" : "Lake Oswego"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lincoln",
			"Code" : "Lincoln"
		}, {
			"Name" : "MacMinnville",
			"Code" : "MacMinnville"
		}, {
			"Name" : "Medford",
			"Code" : "MFR"
		}, {
			"Name" : "Milwaukie",
			"Code" : "Milwaukie"
		}, {
			"Name" : "Newberg",
			"Code" : "Newberg"
		}, {
			"Name" : "Newport",
			"Code" : "Newport"
		}, {
			"Name" : "North Bend",
			"Code" : "North Bend"
		}, {
			"Name" : "Oak Grove",
			"Code" : "Oak Grove"
		}, {
			"Name" : "Oatfield",
			"Code" : "Oatfield"
		}, {
			"Name" : "OBrien",
			"Code" : "OBrien"
		}, {
			"Name" : "Ontario",
			"Code" : "Ontario"
		}, {
			"Name" : "Oregon City",
			"Code" : "Oregon City"
		}, {
			"Name" : "Pendleton",
			"Code" : "Pendleton"
		}, {
			"Name" : "Portland",
			"Code" : "PDX"
		}, {
			"Name" : "Redmond",
			"Code" : "Redmond"
		}, {
			"Name" : "Riddle",
			"Code" : "Riddle"
		}, {
			"Name" : "River Road",
			"Code" : "River Road"
		}, {
			"Name" : "Roseburg",
			"Code" : "Roseburg"
		}, {
			"Name" : "Salem",
			"Code" : "SLE"
		}, {
			"Name" : "Sherwood",
			"Code" : "Sherwood"
		}, {
			"Name" : "Springfield",
			"Code" : "SPY"
		}, {
			"Name" : "Sublimity",
			"Code" : "Sublimity"
		}, {
			"Name" : "Sutherlin",
			"Code" : "Sutherlin"
		}, {
			"Name" : "Talent",
			"Code" : "Talent"
		}, {
			"Name" : "Tigard",
			"Code" : "Tigard"
		}, {
			"Name" : "Troutdale",
			"Code" : "Troutdale"
		}, {
			"Name" : "Tualatin",
			"Code" : "Tualatin"
		}, {
			"Name" : "Turner",
			"Code" : "Turner"
		}, {
			"Name" : "Vaughn",
			"Code" : "Vaughn"
		}, {
			"Name" : "West Linn",
			"Code" : "West Linn"
		}, {
			"Name" : "Wilsonville",
			"Code" : "Wilsonville"
		}, {
			"Name" : "Woodburn",
			"Code" : "Woodburn"
		} ]
	}, {
		"Name" : "Pennsylvania",
		"Code" : "PA",
		"City" : [ {
			"Name" : "Akron",
			"Code" : "Akron"
		}, {
			"Name" : "Aliquippa",
			"Code" : "Aliquippa"
		}, {
			"Name" : "Allentown",
			"Code" : "AEW"
		}, {
			"Name" : "Altoona",
			"Code" : "Altoona"
		}, {
			"Name" : "Ambler",
			"Code" : "Ambler"
		}, {
			"Name" : "Amityville",
			"Code" : "Amityville"
		}, {
			"Name" : "Ardmore",
			"Code" : "Ardmore"
		}, {
			"Name" : "Audubon",
			"Code" : "Audubon"
		}, {
			"Name" : "Back Mountain",
			"Code" : "Back Mountain"
		}, {
			"Name" : "Baldwin",
			"Code" : "Baldwin"
		}, {
			"Name" : "Bangor",
			"Code" : "Bangor"
		}, {
			"Name" : "Beaver Falls",
			"Code" : "Beaver Falls"
		}, {
			"Name" : "Belle Vernon",
			"Code" : "Belle Vernon"
		}, {
			"Name" : "Bensalem",
			"Code" : "Bensalem"
		}, {
			"Name" : "Berwick",
			"Code" : "Berwick"
		}, {
			"Name" : "Berwyn",
			"Code" : "Berwyn"
		}, {
			"Name" : "Bethel Park",
			"Code" : "Bethel Park"
		}, {
			"Name" : "Bethlehem",
			"Code" : "Bethlehem"
		}, {
			"Name" : "Bloomsburg",
			"Code" : "Bloomsburg"
		}, {
			"Name" : "Boyertown",
			"Code" : "Boyertown"
		}, {
			"Name" : "Bradford",
			"Code" : "Bradford"
		}, {
			"Name" : "Brentwood",
			"Code" : "Brentwood"
		}, {
			"Name" : "Bridgeport",
			"Code" : "Bridgeport"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Brockway",
			"Code" : "Brockway"
		}, {
			"Name" : "Broomall",
			"Code" : "Broomall"
		}, {
			"Name" : "Bushkill",
			"Code" : "Bushkill"
		}, {
			"Name" : "Butler",
			"Code" : "Butler"
		}, {
			"Name" : "Camp Hill",
			"Code" : "Camp Hill"
		}, {
			"Name" : "Canonsburg",
			"Code" : "Canonsburg"
		}, {
			"Name" : "Carbondale",
			"Code" : "Carbondale"
		}, {
			"Name" : "Carlisle",
			"Code" : "Carlisle"
		}, {
			"Name" : "Carnegie",
			"Code" : "Carnegie"
		}, {
			"Name" : "Carnot Moon",
			"Code" : "Carnot Moon"
		}, {
			"Name" : "Chambersburg",
			"Code" : "Chambersburg"
		}, {
			"Name" : "Chester",
			"Code" : "Chester"
		}, {
			"Name" : "Chester Springs",
			"Code" : "Chester Springs"
		}, {
			"Name" : "Clarks Summit",
			"Code" : "Clarks Summit"
		}, {
			"Name" : "Coatesville",
			"Code" : "Coatesville"
		}, {
			"Name" : "Colonial Park",
			"Code" : "Colonial Park"
		}, {
			"Name" : "Columbia",
			"Code" : "Columbia"
		}, {
			"Name" : "Conshohocken",
			"Code" : "Conshohocken"
		}, {
			"Name" : "Coraopolis",
			"Code" : "Coraopolis"
		}, {
			"Name" : "Corry",
			"Code" : "Corry"
		}, {
			"Name" : "Cranberry Township",
			"Code" : "Cranberry Township"
		}, {
			"Name" : "Cresco",
			"Code" : "Cresco"
		}, {
			"Name" : "Croydon",
			"Code" : "Croydon"
		}, {
			"Name" : "Dallas",
			"Code" : "Dallas"
		}, {
			"Name" : "Dallastown",
			"Code" : "Dallastown"
		}, {
			"Name" : "Darby",
			"Code" : "Darby"
		}, {
			"Name" : "Darby Township",
			"Code" : "Darby Township"
		}, {
			"Name" : "Downingtown",
			"Code" : "Downingtown"
		}, {
			"Name" : "Drexel Hill",
			"Code" : "Drexel Hill"
		}, {
			"Name" : "Duncansville",
			"Code" : "Duncansville"
		}, {
			"Name" : "Dunmore",
			"Code" : "Dunmore"
		}, {
			"Name" : "East Norriton",
			"Code" : "East Norriton"
		}, {
			"Name" : "East Stroudsburg",
			"Code" : "East Stroudsburg"
		}, {
			"Name" : "Easton",
			"Code" : "Easton"
		}, {
			"Name" : "Economy",
			"Code" : "Economy"
		}, {
			"Name" : "Edinboro",
			"Code" : "Edinboro"
		}, {
			"Name" : "Elizabethtown",
			"Code" : "Elizabethtown"
		}, {
			"Name" : "Elkins Park",
			"Code" : "Elkins Park"
		}, {
			"Name" : "Emmaus",
			"Code" : "Emmaus"
		}, {
			"Name" : "Ephrata",
			"Code" : "Ephrata"
		}, {
			"Name" : "Erdenheim",
			"Code" : "Erdenheim"
		}, {
			"Name" : "Erie",
			"Code" : "Erie"
		}, {
			"Name" : "Erwinna",
			"Code" : "Erwinna"
		}, {
			"Name" : "Exton",
			"Code" : "Exton"
		}, {
			"Name" : "Feasterville",
			"Code" : "Feasterville"
		}, {
			"Name" : "Folcroft",
			"Code" : "Folcroft"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Franklin Park",
			"Code" : "Franklin Park"
		}, {
			"Name" : "Frederick",
			"Code" : "Frederick"
		}, {
			"Name" : "Fullerton",
			"Code" : "Fullerton"
		}, {
			"Name" : "Furlong",
			"Code" : "Furlong"
		}, {
			"Name" : "Gettysburg",
			"Code" : "Gettysburg"
		}, {
			"Name" : "Gibsonia",
			"Code" : "Gibsonia"
		}, {
			"Name" : "Glenside",
			"Code" : "Glenside"
		}, {
			"Name" : "Gordonville",
			"Code" : "Gordonville"
		}, {
			"Name" : "Greensburg",
			"Code" : "Greensburg"
		}, {
			"Name" : "Gwynedd",
			"Code" : "Gwynedd"
		}, {
			"Name" : "Hampden Township",
			"Code" : "Hampden Township"
		}, {
			"Name" : "Hanover",
			"Code" : "Hanover"
		}, {
			"Name" : "Harleysville",
			"Code" : "Harleysville"
		}, {
			"Name" : "Harrisburg",
			"Code" : "Harrisburg"
		}, {
			"Name" : "Harrison Township",
			"Code" : "Harrison Township"
		}, {
			"Name" : "Hatboro",
			"Code" : "Hatboro"
		}, {
			"Name" : "Haverford",
			"Code" : "Haverford"
		}, {
			"Name" : "Havertown",
			"Code" : "Havertown"
		}, {
			"Name" : "Hazleton",
			"Code" : "Hazleton"
		}, {
			"Name" : "Hermitage",
			"Code" : "Hermitage"
		}, {
			"Name" : "Hershey",
			"Code" : "Hershey"
		}, {
			"Name" : "Hollidaysburg",
			"Code" : "Hollidaysburg"
		}, {
			"Name" : "Horsham",
			"Code" : "Horsham"
		}, {
			"Name" : "Huntingdon Valley",
			"Code" : "Huntingdon Valley"
		}, {
			"Name" : "Indiana",
			"Code" : "Indiana"
		}, {
			"Name" : "Irvine",
			"Code" : "Irvine"
		}, {
			"Name" : "Ivyland",
			"Code" : "Ivyland"
		}, {
			"Name" : "Jeannette",
			"Code" : "Jeannette"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Jenkintown",
			"Code" : "Jenkintown"
		}, {
			"Name" : "Johnstown",
			"Code" : "Johnstown"
		}, {
			"Name" : "Kempton",
			"Code" : "Kempton"
		}, {
			"Name" : "Kennett Square",
			"Code" : "Kennett Square"
		}, {
			"Name" : "King of Prussia",
			"Code" : "King of Prussia"
		}, {
			"Name" : "Kingston",
			"Code" : "Kingston"
		}, {
			"Name" : "Kutztown",
			"Code" : "Kutztown"
		}, {
			"Name" : "Lafayette Hill",
			"Code" : "Lafayette Hill"
		}, {
			"Name" : "Lancaster",
			"Code" : "Lancaster"
		}, {
			"Name" : "Landenberg",
			"Code" : "Landenberg"
		}, {
			"Name" : "Langhorne",
			"Code" : "Langhorne"
		}, {
			"Name" : "Lansdale",
			"Code" : "Lansdale"
		}, {
			"Name" : "Lansdowne",
			"Code" : "Lansdowne"
		}, {
			"Name" : "Lansford",
			"Code" : "Lansford"
		}, {
			"Name" : "Laurys Station",
			"Code" : "Laurys Station"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lehighton",
			"Code" : "Lehighton"
		}, {
			"Name" : "Levittown",
			"Code" : "Levittown"
		}, {
			"Name" : "Lincoln University",
			"Code" : "Lincoln University"
		}, {
			"Name" : "Linesville",
			"Code" : "Linesville"
		}, {
			"Name" : "Linwood",
			"Code" : "Linwood"
		}, {
			"Name" : "Lower Burrell",
			"Code" : "Lower Burrell"
		}, {
			"Name" : "Lower Merion",
			"Code" : "Lower Merion"
		}, {
			"Name" : "MacCandless Township",
			"Code" : "MacCandless Township"
		}, {
			"Name" : "MacKeesport",
			"Code" : "MacKeesport"
		}, {
			"Name" : "Malvern",
			"Code" : "Malvern"
		}, {
			"Name" : "Meadville",
			"Code" : "Meadville"
		}, {
			"Name" : "Mechanicsburg",
			"Code" : "Mechanicsburg"
		}, {
			"Name" : "Media",
			"Code" : "Media"
		}, {
			"Name" : "Merion Station",
			"Code" : "Merion Station"
		}, {
			"Name" : "Middleburg",
			"Code" : "Middleburg"
		}, {
			"Name" : "Mifflinville",
			"Code" : "Mifflinville"
		}, {
			"Name" : "Milanville",
			"Code" : "Milanville"
		}, {
			"Name" : "Milford",
			"Code" : "Milford"
		}, {
			"Name" : "Millersburg",
			"Code" : "Millersburg"
		}, {
			"Name" : "Monessen",
			"Code" : "Monessen"
		}, {
			"Name" : "Moscow",
			"Code" : "Moscow"
		}, {
			"Name" : "Mount Carmel",
			"Code" : "Mount Carmel"
		}, {
			"Name" : "Mount Lebanon",
			"Code" : "Mount Lebanon"
		}, {
			"Name" : "Mountville",
			"Code" : "Mountville"
		}, {
			"Name" : "Munhall",
			"Code" : "Munhall"
		}, {
			"Name" : "Municipality of Monroeville",
			"Code" : "Municipality of Monroeville"
		}, {
			"Name" : "Municipality of Murrysville",
			"Code" : "Municipality of Murrysville"
		}, {
			"Name" : "N. Charleroi",
			"Code" : "N. Charleroi"
		}, {
			"Name" : "Nanticoke",
			"Code" : "Nanticoke"
		}, {
			"Name" : "Narberth",
			"Code" : "Narberth"
		}, {
			"Name" : "Natrona Heights",
			"Code" : "Natrona Heights"
		}, {
			"Name" : "Nazareth",
			"Code" : "Nazareth"
		}, {
			"Name" : "Nether Providence Township",
			"Code" : "Nether Providence Township"
		}, {
			"Name" : "New Buffalo",
			"Code" : "New Buffalo"
		}, {
			"Name" : "New Carlisle",
			"Code" : "New Carlisle"
		}, {
			"Name" : "New Castle",
			"Code" : "New Castle"
		}, {
			"Name" : "New Cumberland",
			"Code" : "New Cumberland"
		}, {
			"Name" : "New Hope",
			"Code" : "New Hope"
		}, {
			"Name" : "New Kensington",
			"Code" : "New Kensington"
		}, {
			"Name" : "Newton",
			"Code" : "Newton"
		}, {
			"Name" : "Newtown",
			"Code" : "Newtown"
		}, {
			"Name" : "Newville",
			"Code" : "Newville"
		}, {
			"Name" : "Norristown",
			"Code" : "Norristown"
		}, {
			"Name" : "North East",
			"Code" : "North East"
		}, {
			"Name" : "North Versailles",
			"Code" : "North Versailles"
		}, {
			"Name" : "North Wales",
			"Code" : "North Wales"
		}, {
			"Name" : "Oaks",
			"Code" : "Oaks"
		}, {
			"Name" : "Oil City",
			"Code" : "Oil City"
		}, {
			"Name" : "Olyphant",
			"Code" : "Olyphant"
		}, {
			"Name" : "Orrtanna",
			"Code" : "Orrtanna"
		}, {
			"Name" : "Orwigsburg",
			"Code" : "Orwigsburg"
		}, {
			"Name" : "Oxford",
			"Code" : "Oxford"
		}, {
			"Name" : "Paoli",
			"Code" : "Paoli"
		}, {
			"Name" : "Parksburg",
			"Code" : "Parksburg"
		}, {
			"Name" : "Penn Hills",
			"Code" : "Penn Hills"
		}, {
			"Name" : "Philadelphia",
			"Code" : "PHL"
		}, {
			"Name" : "Phildelphia",
			"Code" : "Phildelphia"
		}, {
			"Name" : "Phoenixville",
			"Code" : "Phoenixville"
		}, {
			"Name" : "Pipersville",
			"Code" : "Pipersville"
		}, {
			"Name" : "Pittsburgh",
			"Code" : "PIT"
		}, {
			"Name" : "Pleasantville",
			"Code" : "Pleasantville"
		}, {
			"Name" : "Plum",
			"Code" : "Plum"
		}, {
			"Name" : "Pocono Summit",
			"Code" : "Pocono Summit"
		}, {
			"Name" : "Pottstown",
			"Code" : "Pottstown"
		}, {
			"Name" : "Pottsville",
			"Code" : "Pottsville"
		}, {
			"Name" : "Primos",
			"Code" : "Primos"
		}, {
			"Name" : "Progress",
			"Code" : "Progress"
		}, {
			"Name" : "Prospect",
			"Code" : "Prospect"
		}, {
			"Name" : "Quakertown",
			"Code" : "Quakertown"
		}, {
			"Name" : "Radnor Township",
			"Code" : "Radnor Township"
		}, {
			"Name" : "Reading",
			"Code" : "Reading"
		}, {
			"Name" : "Robinson Township",
			"Code" : "Robinson Township"
		}, {
			"Name" : "Roseto",
			"Code" : "Roseto"
		}, {
			"Name" : "Ross Township",
			"Code" : "Ross Township"
		}, {
			"Name" : "Royersford",
			"Code" : "Royersford"
		}, {
			"Name" : "Saint Marys",
			"Code" : "Saint Marys"
		}, {
			"Name" : "Sarver",
			"Code" : "Sarver"
		}, {
			"Name" : "Saxonburg",
			"Code" : "Saxonburg"
		}, {
			"Name" : "Scott Township",
			"Code" : "Scott Township"
		}, {
			"Name" : "Scranton",
			"Code" : "Scranton"
		}, {
			"Name" : "Seward",
			"Code" : "Seward"
		}, {
			"Name" : "Sewickley",
			"Code" : "Sewickley"
		}, {
			"Name" : "Shaler Township",
			"Code" : "Shaler Township"
		}, {
			"Name" : "Sharon",
			"Code" : "Sharon"
		}, {
			"Name" : "Shermans Dale",
			"Code" : "Shermans Dale"
		}, {
			"Name" : "Somerset",
			"Code" : "Somerset"
		}, {
			"Name" : "Souderton",
			"Code" : "Souderton"
		}, {
			"Name" : "South Park Township",
			"Code" : "South Park Township"
		}, {
			"Name" : "Southampton",
			"Code" : "Southampton"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "State College",
			"Code" : "State College"
		}, {
			"Name" : "Strasburg",
			"Code" : "Strasburg"
		}, {
			"Name" : "Sunbury",
			"Code" : "Sunbury"
		}, {
			"Name" : "Susquehanna",
			"Code" : "Susquehanna"
		}, {
			"Name" : "Swissvale",
			"Code" : "Swissvale"
		}, {
			"Name" : "Tamaqua",
			"Code" : "Tamaqua"
		}, {
			"Name" : "Taylor",
			"Code" : "Taylor"
		}, {
			"Name" : "Telford",
			"Code" : "Telford"
		}, {
			"Name" : "Trevose",
			"Code" : "Trevose"
		}, {
			"Name" : "Turtle Creek",
			"Code" : "Turtle Creek"
		}, {
			"Name" : "Tyrone",
			"Code" : "Tyrone"
		}, {
			"Name" : "Uniontown",
			"Code" : "Uniontown"
		}, {
			"Name" : "Upper Darby",
			"Code" : "Upper Darby"
		}, {
			"Name" : "Upper Providence Township",
			"Code" : "Upper Providence Township"
		}, {
			"Name" : "Upper Saint Clair",
			"Code" : "Upper Saint Clair"
		}, {
			"Name" : "Vanderbilt",
			"Code" : "Vanderbilt"
		}, {
			"Name" : "Warminster",
			"Code" : "Warminster"
		}, {
			"Name" : "Warren",
			"Code" : "Warren"
		}, {
			"Name" : "Warrendale",
			"Code" : "Warrendale"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "Waterford",
			"Code" : "Waterford"
		}, {
			"Name" : "Waverly",
			"Code" : "Waverly"
		}, {
			"Name" : "Wayne",
			"Code" : "Wayne"
		}, {
			"Name" : "Waynesboro",
			"Code" : "Waynesboro"
		}, {
			"Name" : "West Chester",
			"Code" : "West Chester"
		}, {
			"Name" : "West Mifflin",
			"Code" : "West Mifflin"
		}, {
			"Name" : "West Norriton",
			"Code" : "West Norriton"
		}, {
			"Name" : "West Point",
			"Code" : "West Point"
		}, {
			"Name" : "Wexford",
			"Code" : "Wexford"
		}, {
			"Name" : "Whitehall",
			"Code" : "Whitehall"
		}, {
			"Name" : "Wilcox",
			"Code" : "Wilcox"
		}, {
			"Name" : "Wilkes-Barre",
			"Code" : "Wilkes-Barre"
		}, {
			"Name" : "Wilkinsburg",
			"Code" : "Wilkinsburg"
		}, {
			"Name" : "Williamsport",
			"Code" : "Williamsport"
		}, {
			"Name" : "Willow Grove",
			"Code" : "Willow Grove"
		}, {
			"Name" : "Womelsdorf",
			"Code" : "Womelsdorf"
		}, {
			"Name" : "Woodlyn",
			"Code" : "Woodlyn"
		}, {
			"Name" : "Woolrich",
			"Code" : "Woolrich"
		}, {
			"Name" : "Wyncote",
			"Code" : "Wyncote"
		}, {
			"Name" : "Wyndmoor",
			"Code" : "Wyndmoor"
		}, {
			"Name" : "Wynnewood",
			"Code" : "Wynnewood"
		}, {
			"Name" : "Yardley",
			"Code" : "Yardley"
		}, {
			"Name" : "Yeadon",
			"Code" : "Yeadon"
		}, {
			"Name" : "York",
			"Code" : "York"
		} ]
	}, {
		"Name" : "Rhode Island",
		"Code" : "RI",
		"City" : [ {
			"Name" : "Barrington",
			"Code" : "Barrington"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Burrillville",
			"Code" : "Burrillville"
		}, {
			"Name" : "Central Falls",
			"Code" : "Central Falls"
		}, {
			"Name" : "Charlestown",
			"Code" : "Charlestown"
		}, {
			"Name" : "Coventry",
			"Code" : "Coventry"
		}, {
			"Name" : "Cranston",
			"Code" : "Cranston"
		}, {
			"Name" : "Cumberland",
			"Code" : "Cumberland"
		}, {
			"Name" : "East Greenwich",
			"Code" : "East Greenwich"
		}, {
			"Name" : "East Providence",
			"Code" : "East Providence"
		}, {
			"Name" : "Glocester",
			"Code" : "Glocester"
		}, {
			"Name" : "Hopkinton",
			"Code" : "Hopkinton"
		}, {
			"Name" : "Johnston",
			"Code" : "Johnston"
		}, {
			"Name" : "Lincoln",
			"Code" : "Lincoln"
		}, {
			"Name" : "Middletown",
			"Code" : "Middletown"
		}, {
			"Name" : "Narragansett",
			"Code" : "Narragansett"
		}, {
			"Name" : "Newport",
			"Code" : "Newport"
		}, {
			"Name" : "North Kingstown",
			"Code" : "North Kingstown"
		}, {
			"Name" : "North Providence",
			"Code" : "North Providence"
		}, {
			"Name" : "North Smithfield",
			"Code" : "North Smithfield"
		}, {
			"Name" : "Pawtucket",
			"Code" : "Pawtucket"
		}, {
			"Name" : "Portsmouth",
			"Code" : "Portsmouth"
		}, {
			"Name" : "Providence",
			"Code" : "Providence"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Scituate",
			"Code" : "Scituate"
		}, {
			"Name" : "Smithfield",
			"Code" : "Smithfield"
		}, {
			"Name" : "South Kingstown",
			"Code" : "South Kingstown"
		}, {
			"Name" : "Tiverton",
			"Code" : "Tiverton"
		}, {
			"Name" : "Warren",
			"Code" : "Warren"
		}, {
			"Name" : "Warwick",
			"Code" : "Warwick"
		}, {
			"Name" : "West Warwick",
			"Code" : "West Warwick"
		}, {
			"Name" : "Westerly",
			"Code" : "Westerly"
		}, {
			"Name" : "Woonsocket",
			"Code" : "Woonsocket"
		} ]
	}, {
		"Name" : "South Carolina",
		"Code" : "SC",
		"City" : [ {
			"Name" : "Aiken",
			"Code" : "Aiken"
		}, {
			"Name" : "Anderson",
			"Code" : "Anderson"
		}, {
			"Name" : "Beaufort",
			"Code" : "Beaufort"
		}, {
			"Name" : "Bluffton",
			"Code" : "Bluffton"
		}, {
			"Name" : "Cayce",
			"Code" : "Cayce"
		}, {
			"Name" : "Charleston",
			"Code" : "Charleston"
		}, {
			"Name" : "Clemson",
			"Code" : "Clemson"
		}, {
			"Name" : "Columbia",
			"Code" : "Columbia"
		}, {
			"Name" : "Conway",
			"Code" : "Conway"
		}, {
			"Name" : "Easley",
			"Code" : "Easley"
		}, {
			"Name" : "Florence",
			"Code" : "Florence"
		}, {
			"Name" : "Forest Acres",
			"Code" : "Forest Acres"
		}, {
			"Name" : "Fort Mill",
			"Code" : "Fort Mill"
		}, {
			"Name" : "Gaffney",
			"Code" : "Gaffney"
		}, {
			"Name" : "Goose Creek",
			"Code" : "Goose Creek"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Greenwood",
			"Code" : "Greenwood"
		}, {
			"Name" : "Greer",
			"Code" : "Greer"
		}, {
			"Name" : "Hanahan",
			"Code" : "Hanahan"
		}, {
			"Name" : "Hilton Head Island",
			"Code" : "Hilton Head Island"
		}, {
			"Name" : "Irmo",
			"Code" : "Irmo"
		}, {
			"Name" : "Lexington",
			"Code" : "Lexington"
		}, {
			"Name" : "Mauldin",
			"Code" : "Mauldin"
		}, {
			"Name" : "Mount Pleasant",
			"Code" : "Mount Pleasant"
		}, {
			"Name" : "Myrtle Beach",
			"Code" : "Myrtle Beach"
		}, {
			"Name" : "Newberry",
			"Code" : "Newberry"
		}, {
			"Name" : "North Augusta",
			"Code" : "North Augusta"
		}, {
			"Name" : "North Charleston",
			"Code" : "North Charleston"
		}, {
			"Name" : "North Myrtle Beach",
			"Code" : "North Myrtle Beach"
		}, {
			"Name" : "Orangeburg",
			"Code" : "Orangeburg"
		}, {
			"Name" : "Port Royal",
			"Code" : "Port Royal"
		}, {
			"Name" : "Rock Hill",
			"Code" : "Rock Hill"
		}, {
			"Name" : "Simpsonville",
			"Code" : "Simpsonville"
		}, {
			"Name" : "Spartanburg",
			"Code" : "Spartanburg"
		}, {
			"Name" : "Summerville",
			"Code" : "Summerville"
		}, {
			"Name" : "Sumter",
			"Code" : "Sumter"
		}, {
			"Name" : "West Columbia",
			"Code" : "West Columbia"
		} ]
	}, {
		"Name" : "South Dakota",
		"Code" : "SD",
		"City" : [ {
			"Name" : "Aberdeen",
			"Code" : "Aberdeen"
		}, {
			"Name" : "Belle Fourche",
			"Code" : "Belle Fourche"
		}, {
			"Name" : "Box Elder",
			"Code" : "Box Elder"
		}, {
			"Name" : "Brandon",
			"Code" : "Brandon"
		}, {
			"Name" : "Brookings",
			"Code" : "Brookings"
		}, {
			"Name" : "Harrisburg",
			"Code" : "Harrisburg"
		}, {
			"Name" : "Huron",
			"Code" : "Huron"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Mitchell",
			"Code" : "Mitchell"
		}, {
			"Name" : "Pierre",
			"Code" : "Pierre"
		}, {
			"Name" : "Rapid City",
			"Code" : "Rapid City"
		}, {
			"Name" : "Sioux Falls",
			"Code" : "Sioux Falls"
		}, {
			"Name" : "Spearfish",
			"Code" : "Spearfish"
		}, {
			"Name" : "Sturgis",
			"Code" : "Sturgis"
		}, {
			"Name" : "Vermillion",
			"Code" : "Vermillion"
		}, {
			"Name" : "Watertown",
			"Code" : "Watertown"
		}, {
			"Name" : "Yankton",
			"Code" : "Yankton"
		} ]
	}, {
		"Name" : "Tennessee",
		"Code" : "TN",
		"City" : [ {
			"Name" : "Adamsville",
			"Code" : "Adamsville"
		}, {
			"Name" : "Alcoa",
			"Code" : "Alcoa"
		}, {
			"Name" : "Antioch",
			"Code" : "Antioch"
		}, {
			"Name" : "Arlington",
			"Code" : "Arlington"
		}, {
			"Name" : "Athens",
			"Code" : "Athens"
		}, {
			"Name" : "Bartlett",
			"Code" : "Bartlett"
		}, {
			"Name" : "Bell Buckle",
			"Code" : "Bell Buckle"
		}, {
			"Name" : "Bloomingdale",
			"Code" : "Bloomingdale"
		}, {
			"Name" : "Blountville",
			"Code" : "Blountville"
		}, {
			"Name" : "Brentwood",
			"Code" : "Brentwood"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Brownsville",
			"Code" : "Brownsville"
		}, {
			"Name" : "Burns",
			"Code" : "Burns"
		}, {
			"Name" : "Chattanooga",
			"Code" : "Chattanooga"
		}, {
			"Name" : "Clarksville",
			"Code" : "Clarksville"
		}, {
			"Name" : "Cleveland",
			"Code" : "Cleveland"
		}, {
			"Name" : "Collierville",
			"Code" : "Collierville"
		}, {
			"Name" : "Columbia",
			"Code" : "Columbia"
		}, {
			"Name" : "Cookeville",
			"Code" : "Cookeville"
		}, {
			"Name" : "Cornersville",
			"Code" : "Cornersville"
		}, {
			"Name" : "Crossville",
			"Code" : "Crossville"
		}, {
			"Name" : "Dayton",
			"Code" : "Dayton"
		}, {
			"Name" : "Dickson",
			"Code" : "Dickson"
		}, {
			"Name" : "Dyersburg",
			"Code" : "Dyersburg"
		}, {
			"Name" : "East Brainerd",
			"Code" : "East Brainerd"
		}, {
			"Name" : "East Ridge",
			"Code" : "East Ridge"
		}, {
			"Name" : "Elizabethton",
			"Code" : "Elizabethton"
		}, {
			"Name" : "Farragut",
			"Code" : "Farragut"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Gainesboro",
			"Code" : "Gainesboro"
		}, {
			"Name" : "Gallatin",
			"Code" : "Gallatin"
		}, {
			"Name" : "Gatlinburg",
			"Code" : "Gatlinburg"
		}, {
			"Name" : "Germantown",
			"Code" : "Germantown"
		}, {
			"Name" : "Goodlettsville",
			"Code" : "Goodlettsville"
		}, {
			"Name" : "Greeneville",
			"Code" : "Greeneville"
		}, {
			"Name" : "Hendersonville",
			"Code" : "Hendersonville"
		}, {
			"Name" : "Hixson",
			"Code" : "Hixson"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Johnson City",
			"Code" : "Johnson City"
		}, {
			"Name" : "Kingsport",
			"Code" : "Kingsport"
		}, {
			"Name" : "Knoxville",
			"Code" : "Knoxville"
		}, {
			"Name" : "Kodak",
			"Code" : "Kodak"
		}, {
			"Name" : "La Vergne",
			"Code" : "La Vergne"
		}, {
			"Name" : "Lawrenceburg",
			"Code" : "Lawrenceburg"
		}, {
			"Name" : "Lebanon",
			"Code" : "Lebanon"
		}, {
			"Name" : "Lenoir City",
			"Code" : "Lenoir City"
		}, {
			"Name" : "Lewisburg",
			"Code" : "Lewisburg"
		}, {
			"Name" : "MacMinnville",
			"Code" : "MacMinnville"
		}, {
			"Name" : "Maryville",
			"Code" : "Maryville"
		}, {
			"Name" : "Memphis",
			"Code" : "Memphis"
		}, {
			"Name" : "Middle Valley",
			"Code" : "Middle Valley"
		}, {
			"Name" : "Millington",
			"Code" : "Millington"
		}, {
			"Name" : "Morristown",
			"Code" : "Morristown"
		}, {
			"Name" : "Mulberry",
			"Code" : "Mulberry"
		}, {
			"Name" : "Murfreesboro",
			"Code" : "Murfreesboro"
		}, {
			"Name" : "Nashville",
			"Code" : "Nashville"
		}, {
			"Name" : "Oak Ridge",
			"Code" : "Oak Ridge"
		}, {
			"Name" : "Ooltewah",
			"Code" : "Ooltewah"
		}, {
			"Name" : "Pinson",
			"Code" : "Pinson"
		}, {
			"Name" : "Red Bank",
			"Code" : "Red Bank"
		}, {
			"Name" : "Selmer",
			"Code" : "Selmer"
		}, {
			"Name" : "Sevierville",
			"Code" : "Sevierville"
		}, {
			"Name" : "Shelbyville",
			"Code" : "Shelbyville"
		}, {
			"Name" : "Smithville",
			"Code" : "Smithville"
		}, {
			"Name" : "Smyrna",
			"Code" : "Smyrna"
		}, {
			"Name" : "Spring City",
			"Code" : "Spring City"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Tazewell",
			"Code" : "Tazewell"
		}, {
			"Name" : "Trenton",
			"Code" : "Trenton"
		}, {
			"Name" : "Tullahoma",
			"Code" : "Tullahoma"
		}, {
			"Name" : "Union City",
			"Code" : "Union City"
		} ]
	}, {
		"Name" : "Texas",
		"Code" : "TX",
		"City" : [ {
			"Name" : "Abilene",
			"Code" : "Abilene"
		}, {
			"Name" : "Addison",
			"Code" : "Addison"
		}, {
			"Name" : "Alamo",
			"Code" : "Alamo"
		}, {
			"Name" : "Aldine",
			"Code" : "Aldine"
		}, {
			"Name" : "Alice",
			"Code" : "Alice"
		}, {
			"Name" : "Allen",
			"Code" : "Allen"
		}, {
			"Name" : "Alvin",
			"Code" : "Alvin"
		}, {
			"Name" : "Amarillo",
			"Code" : "Amarillo"
		}, {
			"Name" : "Anderson Mill",
			"Code" : "Anderson Mill"
		}, {
			"Name" : "Andrews",
			"Code" : "Andrews"
		}, {
			"Name" : "Angleton",
			"Code" : "Angleton"
		}, {
			"Name" : "Argyle",
			"Code" : "Argyle"
		}, {
			"Name" : "Arlington",
			"Code" : "Arlington"
		}, {
			"Name" : "Aspermont",
			"Code" : "Aspermont"
		}, {
			"Name" : "Atascocita",
			"Code" : "Atascocita"
		}, {
			"Name" : "Athens",
			"Code" : "Athens"
		}, {
			"Name" : "Austin",
			"Code" : "Austin"
		}, {
			"Name" : "Austinn",
			"Code" : "Austinn"
		}, {
			"Name" : "austinn",
			"Code" : "austinn"
		}, {
			"Name" : "Azle",
			"Code" : "Azle"
		}, {
			"Name" : "Balch Springs",
			"Code" : "Balch Springs"
		}, {
			"Name" : "Barry",
			"Code" : "Barry"
		}, {
			"Name" : "Bay City",
			"Code" : "Bay City"
		}, {
			"Name" : "Baytown",
			"Code" : "Baytown"
		}, {
			"Name" : "Beaumont",
			"Code" : "Beaumont"
		}, {
			"Name" : "Bedford",
			"Code" : "Bedford"
		}, {
			"Name" : "Beeville",
			"Code" : "Beeville"
		}, {
			"Name" : "Bellaire",
			"Code" : "Bellaire"
		}, {
			"Name" : "Belton",
			"Code" : "Belton"
		}, {
			"Name" : "Benbrook",
			"Code" : "Benbrook"
		}, {
			"Name" : "Big Spring",
			"Code" : "Big Spring"
		}, {
			"Name" : "Bluff Dale",
			"Code" : "Bluff Dale"
		}, {
			"Name" : "Boerne",
			"Code" : "Boerne"
		}, {
			"Name" : "Borger",
			"Code" : "Borger"
		}, {
			"Name" : "Breckenridge",
			"Code" : "Breckenridge"
		}, {
			"Name" : "Brenham",
			"Code" : "Brenham"
		}, {
			"Name" : "Brownfield",
			"Code" : "Brownfield"
		}, {
			"Name" : "Brownsville",
			"Code" : "Brownsville"
		}, {
			"Name" : "Brownwood",
			"Code" : "Brownwood"
		}, {
			"Name" : "Bryan",
			"Code" : "Bryan"
		}, {
			"Name" : "Buda",
			"Code" : "Buda"
		}, {
			"Name" : "Burkburnett",
			"Code" : "Burkburnett"
		}, {
			"Name" : "Burleson",
			"Code" : "Burleson"
		}, {
			"Name" : "Campbell",
			"Code" : "Campbell"
		}, {
			"Name" : "Canyon",
			"Code" : "Canyon"
		}, {
			"Name" : "Canyon Lake",
			"Code" : "Canyon Lake"
		}, {
			"Name" : "Carrollton",
			"Code" : "Carrollton"
		}, {
			"Name" : "Cat Spring",
			"Code" : "Cat Spring"
		}, {
			"Name" : "Cedar Hill",
			"Code" : "Cedar Hill"
		}, {
			"Name" : "Cedar Park",
			"Code" : "Cedar Park"
		}, {
			"Name" : "Celina",
			"Code" : "Celina"
		}, {
			"Name" : "Center",
			"Code" : "Center"
		}, {
			"Name" : "Channelview",
			"Code" : "Channelview"
		}, {
			"Name" : "City of Dallas",
			"Code" : "City of Dallas"
		}, {
			"Name" : "Cleburne",
			"Code" : "Cleburne"
		}, {
			"Name" : "Cloverleaf",
			"Code" : "Cloverleaf"
		}, {
			"Name" : "Clute",
			"Code" : "Clute"
		}, {
			"Name" : "College Station",
			"Code" : "College Station"
		}, {
			"Name" : "Colleyville",
			"Code" : "Colleyville"
		}, {
			"Name" : "Columbus",
			"Code" : "Columbus"
		}, {
			"Name" : "Comanche",
			"Code" : "Comanche"
		}, {
			"Name" : "Conroe",
			"Code" : "Conroe"
		}, {
			"Name" : "Converse",
			"Code" : "Converse"
		}, {
			"Name" : "Coppell",
			"Code" : "Coppell"
		}, {
			"Name" : "Copperas Cove",
			"Code" : "Copperas Cove"
		}, {
			"Name" : "Corinth",
			"Code" : "Corinth"
		}, {
			"Name" : "Corpus Christi",
			"Code" : "Corpus Christi"
		}, {
			"Name" : "Corsicana",
			"Code" : "Corsicana"
		}, {
			"Name" : "Cotulla",
			"Code" : "Cotulla"
		}, {
			"Name" : "Crandall",
			"Code" : "Crandall"
		}, {
			"Name" : "Cypress",
			"Code" : "Cypress"
		}, {
			"Name" : "Dallas",
			"Code" : "Dallas"
		}, {
			"Name" : "Dayton",
			"Code" : "Dayton"
		}, {
			"Name" : "Deer Park",
			"Code" : "Deer Park"
		}, {
			"Name" : "Del Rio",
			"Code" : "Del Rio"
		}, {
			"Name" : "Denison",
			"Code" : "Denison"
		}, {
			"Name" : "Denton",
			"Code" : "Denton"
		}, {
			"Name" : "DeSoto",
			"Code" : "DeSoto"
		}, {
			"Name" : "Dickinson",
			"Code" : "Dickinson"
		}, {
			"Name" : "Donna",
			"Code" : "Donna"
		}, {
			"Name" : "Dumas",
			"Code" : "Dumas"
		}, {
			"Name" : "Duncanville",
			"Code" : "Duncanville"
		}, {
			"Name" : "Eagle Pass",
			"Code" : "Eagle Pass"
		}, {
			"Name" : "Edinburg",
			"Code" : "Edinburg"
		}, {
			"Name" : "El Campo",
			"Code" : "El Campo"
		}, {
			"Name" : "El Paso",
			"Code" : "El Paso"
		}, {
			"Name" : "Elmendorf",
			"Code" : "Elmendorf"
		}, {
			"Name" : "Ennis",
			"Code" : "Ennis"
		}, {
			"Name" : "Euless",
			"Code" : "Euless"
		}, {
			"Name" : "Fairfield",
			"Code" : "Fairfield"
		}, {
			"Name" : "Farmers Branch",
			"Code" : "Farmers Branch"
		}, {
			"Name" : "Flower Mound",
			"Code" : "Flower Mound"
		}, {
			"Name" : "Forest Hill",
			"Code" : "Forest Hill"
		}, {
			"Name" : "Forney",
			"Code" : "Forney"
		}, {
			"Name" : "Fort Bliss",
			"Code" : "Fort Bliss"
		}, {
			"Name" : "Fort Hood",
			"Code" : "Fort Hood"
		}, {
			"Name" : "Fort Worth",
			"Code" : "Fort Worth"
		}, {
			"Name" : "Freeport",
			"Code" : "Freeport"
		}, {
			"Name" : "Friendswood",
			"Code" : "Friendswood"
		}, {
			"Name" : "Frisco",
			"Code" : "Frisco"
		}, {
			"Name" : "Gainesville",
			"Code" : "Gainesville"
		}, {
			"Name" : "Galena Park",
			"Code" : "Galena Park"
		}, {
			"Name" : "Galveston",
			"Code" : "Galveston"
		}, {
			"Name" : "Garland",
			"Code" : "Garland"
		}, {
			"Name" : "Gatesville",
			"Code" : "Gatesville"
		}, {
			"Name" : "Georgetown",
			"Code" : "Georgetown"
		}, {
			"Name" : "Grand Prairie",
			"Code" : "Grand Prairie"
		}, {
			"Name" : "Grandview",
			"Code" : "Grandview"
		}, {
			"Name" : "Grapeland",
			"Code" : "Grapeland"
		}, {
			"Name" : "Grapevine",
			"Code" : "Grapevine"
		}, {
			"Name" : "Greenville",
			"Code" : "Greenville"
		}, {
			"Name" : "Gregory",
			"Code" : "Gregory"
		}, {
			"Name" : "Groves",
			"Code" : "Groves"
		}, {
			"Name" : "Haltom City",
			"Code" : "Haltom City"
		}, {
			"Name" : "Harker Heights",
			"Code" : "Harker Heights"
		}, {
			"Name" : "Harlingen",
			"Code" : "Harlingen"
		}, {
			"Name" : "Henderson",
			"Code" : "Henderson"
		}, {
			"Name" : "Hereford",
			"Code" : "Hereford"
		}, {
			"Name" : "Hewitt",
			"Code" : "Hewitt"
		}, {
			"Name" : "Highland Village",
			"Code" : "Highland Village"
		}, {
			"Name" : "Hillsboro",
			"Code" : "Hillsboro"
		}, {
			"Name" : "Houston",
			"Code" : "Houston"
		}, {
			"Name" : "Humble",
			"Code" : "Humble"
		}, {
			"Name" : "Huntsville",
			"Code" : "Huntsville"
		}, {
			"Name" : "Hurst",
			"Code" : "Hurst"
		}, {
			"Name" : "Ingleside",
			"Code" : "Ingleside"
		}, {
			"Name" : "Irving",
			"Code" : "Irving"
		}, {
			"Name" : "Jacksonville",
			"Code" : "Jacksonville"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Jollyville",
			"Code" : "Jollyville"
		}, {
			"Name" : "Justin",
			"Code" : "Justin"
		}, {
			"Name" : "Katy",
			"Code" : "Katy"
		}, {
			"Name" : "Kaufman",
			"Code" : "Kaufman"
		}, {
			"Name" : "Keller",
			"Code" : "Keller"
		}, {
			"Name" : "Kemah",
			"Code" : "Kemah"
		}, {
			"Name" : "Kemp",
			"Code" : "Kemp"
		}, {
			"Name" : "Kerrville",
			"Code" : "Kerrville"
		}, {
			"Name" : "Kilgore",
			"Code" : "Kilgore"
		}, {
			"Name" : "Killeen",
			"Code" : "Killeen"
		}, {
			"Name" : "Kingsville",
			"Code" : "Kingsville"
		}, {
			"Name" : "Kingwood",
			"Code" : "Kingwood"
		}, {
			"Name" : "La Marque",
			"Code" : "La Marque"
		}, {
			"Name" : "La Porte",
			"Code" : "La Porte"
		}, {
			"Name" : "Lackland Air Force Base",
			"Code" : "Lackland Air Force Base"
		}, {
			"Name" : "Lago Vista",
			"Code" : "Lago Vista"
		}, {
			"Name" : "Lake Jackson",
			"Code" : "Lake Jackson"
		}, {
			"Name" : "Lamesa",
			"Code" : "Lamesa"
		}, {
			"Name" : "Lampasas",
			"Code" : "Lampasas"
		}, {
			"Name" : "Lancaster",
			"Code" : "Lancaster"
		}, {
			"Name" : "Laredo",
			"Code" : "Laredo"
		}, {
			"Name" : "League City",
			"Code" : "League City"
		}, {
			"Name" : "Leon Valley",
			"Code" : "Leon Valley"
		}, {
			"Name" : "Levelland",
			"Code" : "Levelland"
		}, {
			"Name" : "Lewisville",
			"Code" : "Lewisville"
		}, {
			"Name" : "Liberty Hill",
			"Code" : "Liberty Hill"
		}, {
			"Name" : "Lindsay",
			"Code" : "Lindsay"
		}, {
			"Name" : "Little Elm",
			"Code" : "Little Elm"
		}, {
			"Name" : "Live Oak",
			"Code" : "Live Oak"
		}, {
			"Name" : "Llano",
			"Code" : "Llano"
		}, {
			"Name" : "Lockhart",
			"Code" : "Lockhart"
		}, {
			"Name" : "Longview",
			"Code" : "Longview"
		}, {
			"Name" : "Lubbock",
			"Code" : "Lubbock"
		}, {
			"Name" : "Lufkin",
			"Code" : "Lufkin"
		}, {
			"Name" : "Lumberton",
			"Code" : "Lumberton"
		}, {
			"Name" : "MacAllen",
			"Code" : "MacAllen"
		}, {
			"Name" : "MacKinney",
			"Code" : "MacKinney"
		}, {
			"Name" : "Magnolia",
			"Code" : "Magnolia"
		}, {
			"Name" : "Malakoff",
			"Code" : "Malakoff"
		}, {
			"Name" : "Mansfield",
			"Code" : "Mansfield"
		}, {
			"Name" : "Marshall",
			"Code" : "Marshall"
		}, {
			"Name" : "McAllen",
			"Code" : "McAllen"
		}, {
			"Name" : "McKinney",
			"Code" : "McKinney"
		}, {
			"Name" : "Medina",
			"Code" : "Medina"
		}, {
			"Name" : "Mercedes",
			"Code" : "Mercedes"
		}, {
			"Name" : "Mesquite",
			"Code" : "Mesquite"
		}, {
			"Name" : "Midland",
			"Code" : "Midland"
		}, {
			"Name" : "Mineral Wells",
			"Code" : "Mineral Wells"
		}, {
			"Name" : "Mission",
			"Code" : "Mission"
		}, {
			"Name" : "Mission Bend",
			"Code" : "Mission Bend"
		}, {
			"Name" : "Missouri City",
			"Code" : "Missouri City"
		}, {
			"Name" : "Montgomery",
			"Code" : "Montgomery"
		}, {
			"Name" : "Mount Pleasant",
			"Code" : "Mount Pleasant"
		}, {
			"Name" : "Murphy",
			"Code" : "Murphy"
		}, {
			"Name" : "Nacogdoches",
			"Code" : "Nacogdoches"
		}, {
			"Name" : "Nederland",
			"Code" : "Nederland"
		}, {
			"Name" : "New Braunfels",
			"Code" : "New Braunfels"
		}, {
			"Name" : "New Caney",
			"Code" : "New Caney"
		}, {
			"Name" : "North Richland Hills",
			"Code" : "North Richland Hills"
		}, {
			"Name" : "North Zulch",
			"Code" : "North Zulch"
		}, {
			"Name" : "Odessa",
			"Code" : "Odessa"
		}, {
			"Name" : "Orange",
			"Code" : "Orange"
		}, {
			"Name" : "Ovalo",
			"Code" : "Ovalo"
		}, {
			"Name" : "Palestine",
			"Code" : "Palestine"
		}, {
			"Name" : "Pampa",
			"Code" : "Pampa"
		}, {
			"Name" : "Paris",
			"Code" : "Paris"
		}, {
			"Name" : "Pasadena",
			"Code" : "Pasadena"
		}, {
			"Name" : "Pearland",
			"Code" : "Pearland"
		}, {
			"Name" : "Pecan Grove",
			"Code" : "Pecan Grove"
		}, {
			"Name" : "Pecos",
			"Code" : "Pecos"
		}, {
			"Name" : "Pflugerville",
			"Code" : "Pflugerville"
		}, {
			"Name" : "Pharr",
			"Code" : "Pharr"
		}, {
			"Name" : "Pinehurst",
			"Code" : "Pinehurst"
		}, {
			"Name" : "Plainview",
			"Code" : "Plainview"
		}, {
			"Name" : "Plano",
			"Code" : "Plano"
		}, {
			"Name" : "Pontotoc",
			"Code" : "Pontotoc"
		}, {
			"Name" : "Port Arthur",
			"Code" : "Port Arthur"
		}, {
			"Name" : "Port Lavaca",
			"Code" : "Port Lavaca"
		}, {
			"Name" : "Port Neches",
			"Code" : "Port Neches"
		}, {
			"Name" : "Portland",
			"Code" : "Portland"
		}, {
			"Name" : "Pottsboro",
			"Code" : "Pottsboro"
		}, {
			"Name" : "Princeton",
			"Code" : "Princeton"
		}, {
			"Name" : "Richardson",
			"Code" : "Richardson"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Rio Grande City",
			"Code" : "Rio Grande City"
		}, {
			"Name" : "Robstown",
			"Code" : "Robstown"
		}, {
			"Name" : "Rockport",
			"Code" : "Rockport"
		}, {
			"Name" : "Rockwall",
			"Code" : "Rockwall"
		}, {
			"Name" : "Roma",
			"Code" : "Roma"
		}, {
			"Name" : "Rosenberg",
			"Code" : "Rosenberg"
		}, {
			"Name" : "Round Rock",
			"Code" : "Round Rock"
		}, {
			"Name" : "Rowlett",
			"Code" : "Rowlett"
		}, {
			"Name" : "Royse City",
			"Code" : "Royse City"
		}, {
			"Name" : "Sachse",
			"Code" : "Sachse"
		}, {
			"Name" : "Saginaw",
			"Code" : "Saginaw"
		}, {
			"Name" : "San Angelo",
			"Code" : "San Angelo"
		}, {
			"Name" : "San Antonio",
			"Code" : "San Antonio"
		}, {
			"Name" : "San Benito",
			"Code" : "San Benito"
		}, {
			"Name" : "San Juan",
			"Code" : "San Juan"
		}, {
			"Name" : "San Marcos",
			"Code" : "San Marcos"
		}, {
			"Name" : "Santa Fe",
			"Code" : "Santa Fe"
		}, {
			"Name" : "Schertz",
			"Code" : "Schertz"
		}, {
			"Name" : "Seabrook",
			"Code" : "Seabrook"
		}, {
			"Name" : "Seagoville",
			"Code" : "Seagoville"
		}, {
			"Name" : "Seguin",
			"Code" : "Seguin"
		}, {
			"Name" : "Sherman",
			"Code" : "Sherman"
		}, {
			"Name" : "Slaton",
			"Code" : "Slaton"
		}, {
			"Name" : "Smithville",
			"Code" : "Smithville"
		}, {
			"Name" : "Snyder",
			"Code" : "Snyder"
		}, {
			"Name" : "Socorro",
			"Code" : "Socorro"
		}, {
			"Name" : "South Houston",
			"Code" : "South Houston"
		}, {
			"Name" : "South Padre Island",
			"Code" : "South Padre Island"
		}, {
			"Name" : "Southlake",
			"Code" : "Southlake"
		}, {
			"Name" : "Spring",
			"Code" : "Spring"
		}, {
			"Name" : "Stafford",
			"Code" : "Stafford"
		}, {
			"Name" : "Stephenville",
			"Code" : "Stephenville"
		}, {
			"Name" : "Strawn",
			"Code" : "Strawn"
		}, {
			"Name" : "Sugar Land",
			"Code" : "Sugar Land"
		}, {
			"Name" : "Sulphur Springs",
			"Code" : "Sulphur Springs"
		}, {
			"Name" : "Sweetwater",
			"Code" : "Sweetwater"
		}, {
			"Name" : "Taylor",
			"Code" : "Taylor"
		}, {
			"Name" : "Temple",
			"Code" : "Temple"
		}, {
			"Name" : "Terrell",
			"Code" : "Terrell"
		}, {
			"Name" : "Texarkana",
			"Code" : "Texarkana"
		}, {
			"Name" : "Texas City",
			"Code" : "Texas City"
		}, {
			"Name" : "The Colony",
			"Code" : "The Colony"
		}, {
			"Name" : "The Woodlands",
			"Code" : "The Woodlands"
		}, {
			"Name" : "Tomball",
			"Code" : "Tomball"
		}, {
			"Name" : "Tyler",
			"Code" : "Tyler"
		}, {
			"Name" : "Universal City",
			"Code" : "Universal City"
		}, {
			"Name" : "University Park",
			"Code" : "University Park"
		}, {
			"Name" : "Uvalde",
			"Code" : "Uvalde"
		}, {
			"Name" : "Vernon",
			"Code" : "Vernon"
		}, {
			"Name" : "Victoria",
			"Code" : "Victoria"
		}, {
			"Name" : "Vidor",
			"Code" : "Vidor"
		}, {
			"Name" : "Waco",
			"Code" : "Waco"
		}, {
			"Name" : "Watauga",
			"Code" : "Watauga"
		}, {
			"Name" : "Waxahachie",
			"Code" : "Waxahachie"
		}, {
			"Name" : "Weatherford",
			"Code" : "Weatherford"
		}, {
			"Name" : "Weslaco",
			"Code" : "Weslaco"
		}, {
			"Name" : "West Odessa",
			"Code" : "West Odessa"
		}, {
			"Name" : "West University Place",
			"Code" : "West University Place"
		}, {
			"Name" : "White Settlement",
			"Code" : "White Settlement"
		}, {
			"Name" : "Wichita Falls",
			"Code" : "Wichita Falls"
		}, {
			"Name" : "Winnsboro",
			"Code" : "Winnsboro"
		}, {
			"Name" : "Woodway",
			"Code" : "Woodway"
		}, {
			"Name" : "Wylie",
			"Code" : "Wylie"
		}, {
			"Name" : "Yoakum",
			"Code" : "Yoakum"
		} ]
	}, {
		"Name" : "Utah",
		"Code" : "UT",
		"City" : [ {
			"Name" : "Alpine",
			"Code" : "Alpine"
		}, {
			"Name" : "American Fork",
			"Code" : "American Fork"
		}, {
			"Name" : "Bluffdale",
			"Code" : "Bluffdale"
		}, {
			"Name" : "Bountiful",
			"Code" : "Bountiful"
		}, {
			"Name" : "Brigham City",
			"Code" : "Brigham City"
		}, {
			"Name" : "Canyon Rim",
			"Code" : "Canyon Rim"
		}, {
			"Name" : "Castle Dale",
			"Code" : "Castle Dale"
		}, {
			"Name" : "Cedar City",
			"Code" : "Cedar City"
		}, {
			"Name" : "Centerville",
			"Code" : "Centerville"
		}, {
			"Name" : "Clearfield",
			"Code" : "Clearfield"
		}, {
			"Name" : "Clinton",
			"Code" : "Clinton"
		}, {
			"Name" : "Cottonwood Heights",
			"Code" : "Cottonwood Heights"
		}, {
			"Name" : "Cottonwood West",
			"Code" : "Cottonwood West"
		}, {
			"Name" : "Draper",
			"Code" : "Draper"
		}, {
			"Name" : "East Millcreek",
			"Code" : "East Millcreek"
		}, {
			"Name" : "Farmington",
			"Code" : "Farmington"
		}, {
			"Name" : "Holladay-Cottonwood",
			"Code" : "Holladay-Cottonwood"
		}, {
			"Name" : "Ivins",
			"Code" : "Ivins"
		}, {
			"Name" : "Kaysville",
			"Code" : "Kaysville"
		}, {
			"Name" : "Kearns",
			"Code" : "Kearns"
		}, {
			"Name" : "Layton",
			"Code" : "Layton"
		}, {
			"Name" : "Lehi",
			"Code" : "Lehi"
		}, {
			"Name" : "Logan",
			"Code" : "Logan"
		}, {
			"Name" : "Magna",
			"Code" : "Magna"
		}, {
			"Name" : "Mapleton",
			"Code" : "Mapleton"
		}, {
			"Name" : "Midvale",
			"Code" : "Midvale"
		}, {
			"Name" : "Millcreek",
			"Code" : "Millcreek"
		}, {
			"Name" : "Moab",
			"Code" : "Moab"
		}, {
			"Name" : "Monticello",
			"Code" : "Monticello"
		}, {
			"Name" : "Murray",
			"Code" : "Murray"
		}, {
			"Name" : "North Logan",
			"Code" : "North Logan"
		}, {
			"Name" : "North Ogden",
			"Code" : "North Ogden"
		}, {
			"Name" : "Ogden",
			"Code" : "Ogden"
		}, {
			"Name" : "Orem",
			"Code" : "Orem"
		}, {
			"Name" : "Panguitch",
			"Code" : "Panguitch"
		}, {
			"Name" : "Park City",
			"Code" : "Park City"
		}, {
			"Name" : "Payson",
			"Code" : "Payson"
		}, {
			"Name" : "Pleasant Grove",
			"Code" : "Pleasant Grove"
		}, {
			"Name" : "Provo",
			"Code" : "Provo"
		}, {
			"Name" : "Riverton",
			"Code" : "Riverton"
		}, {
			"Name" : "Roy",
			"Code" : "Roy"
		}, {
			"Name" : "Saint George",
			"Code" : "Saint George"
		}, {
			"Name" : "Salt Lake City",
			"Code" : "Salt Lake City"
		}, {
			"Name" : "Sandy",
			"Code" : "Sandy"
		}, {
			"Name" : "Santaquin",
			"Code" : "Santaquin"
		}, {
			"Name" : "South Jordan",
			"Code" : "South Jordan"
		}, {
			"Name" : "South Ogden",
			"Code" : "South Ogden"
		}, {
			"Name" : "South Salt Lake",
			"Code" : "South Salt Lake"
		}, {
			"Name" : "Spanish Fork",
			"Code" : "Spanish Fork"
		}, {
			"Name" : "Springville",
			"Code" : "Springville"
		}, {
			"Name" : "Taylorsville",
			"Code" : "Taylorsville"
		}, {
			"Name" : "Tooele",
			"Code" : "Tooele"
		}, {
			"Name" : "Tremonton",
			"Code" : "Tremonton"
		}, {
			"Name" : "Union",
			"Code" : "Union"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "West Jordan",
			"Code" : "West Jordan"
		}, {
			"Name" : "West Valley City",
			"Code" : "West Valley City"
		}, {
			"Name" : "Woods Cross",
			"Code" : "Woods Cross"
		} ]
	}, {
		"Name" : "Vermont",
		"Code" : "VT",
		"City" : [ {
			"Name" : "Barre",
			"Code" : "Barre"
		}, {
			"Name" : "Bennington",
			"Code" : "Bennington"
		}, {
			"Name" : "Brattleboro",
			"Code" : "Brattleboro"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Cabot",
			"Code" : "Cabot"
		}, {
			"Name" : "Colchester",
			"Code" : "Colchester"
		}, {
			"Name" : "Danville",
			"Code" : "Danville"
		}, {
			"Name" : "Dorset",
			"Code" : "Dorset"
		}, {
			"Name" : "Dummerston",
			"Code" : "Dummerston"
		}, {
			"Name" : "East Corinth",
			"Code" : "East Corinth"
		}, {
			"Name" : "East Fairfield",
			"Code" : "East Fairfield"
		}, {
			"Name" : "East Randolph",
			"Code" : "East Randolph"
		}, {
			"Name" : "Essex",
			"Code" : "Essex"
		}, {
			"Name" : "Essex Junction",
			"Code" : "Essex Junction"
		}, {
			"Name" : "Grand Isle",
			"Code" : "Grand Isle"
		}, {
			"Name" : "Hartford",
			"Code" : "Hartford"
		}, {
			"Name" : "Jericho",
			"Code" : "Jericho"
		}, {
			"Name" : "Manchester",
			"Code" : "Manchester"
		}, {
			"Name" : "Manchester Center",
			"Code" : "Manchester Center"
		}, {
			"Name" : "Middlebury",
			"Code" : "Middlebury"
		}, {
			"Name" : "Milton",
			"Code" : "Milton"
		}, {
			"Name" : "Montpelier",
			"Code" : "Montpelier"
		}, {
			"Name" : "Putney",
			"Code" : "Putney"
		}, {
			"Name" : "Randolph",
			"Code" : "Randolph"
		}, {
			"Name" : "Rochester",
			"Code" : "Rochester"
		}, {
			"Name" : "Rutland",
			"Code" : "Rutland"
		}, {
			"Name" : "Saint Albans",
			"Code" : "Saint Albans"
		}, {
			"Name" : "Saint Johnsbury",
			"Code" : "Saint Johnsbury"
		}, {
			"Name" : "Saxtons River",
			"Code" : "Saxtons River"
		}, {
			"Name" : "South Burlington",
			"Code" : "South Burlington"
		}, {
			"Name" : "South Strafford",
			"Code" : "South Strafford"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Townshend",
			"Code" : "Townshend"
		}, {
			"Name" : "Tunbridge",
			"Code" : "Tunbridge"
		}, {
			"Name" : "Van",
			"Code" : "Van"
		}, {
			"Name" : "Vernon",
			"Code" : "Vernon"
		}, {
			"Name" : "Wallingford",
			"Code" : "Wallingford"
		}, {
			"Name" : "Watisfield",
			"Code" : "Watisfield"
		}, {
			"Name" : "West Brookfield",
			"Code" : "West Brookfield"
		}, {
			"Name" : "West Charleston",
			"Code" : "West Charleston"
		}, {
			"Name" : "West Newbury",
			"Code" : "West Newbury"
		}, {
			"Name" : "Williston",
			"Code" : "Williston"
		}, {
			"Name" : "Winooski",
			"Code" : "Winooski"
		} ]
	}, {
		"Name" : "Virginia",
		"Code" : "VA",
		"City" : [ {
			"Name" : "Abingdon",
			"Code" : "Abingdon"
		}, {
			"Name" : "Alexandria",
			"Code" : "Alexandria"
		}, {
			"Name" : "Annandale",
			"Code" : "Annandale"
		}, {
			"Name" : "Arlington",
			"Code" : "Arlington"
		}, {
			"Name" : "Ashburn",
			"Code" : "Ashburn"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Aylett",
			"Code" : "Aylett"
		}, {
			"Name" : "Bailey's Crossroads",
			"Code" : "Bailey's Crossroads"
		}, {
			"Name" : "Blacksburg",
			"Code" : "Blacksburg"
		}, {
			"Name" : "Bland",
			"Code" : "Bland"
		}, {
			"Name" : "Bluefield",
			"Code" : "Bluefield"
		}, {
			"Name" : "Bon Air",
			"Code" : "Bon Air"
		}, {
			"Name" : "Bristol",
			"Code" : "Bristol"
		}, {
			"Name" : "Burke",
			"Code" : "Burke"
		}, {
			"Name" : "Cave Spring",
			"Code" : "Cave Spring"
		}, {
			"Name" : "Centreville",
			"Code" : "Centreville"
		}, {
			"Name" : "Chantilly",
			"Code" : "Chantilly"
		}, {
			"Name" : "Charlottesville",
			"Code" : "Charlottesville"
		}, {
			"Name" : "Chesapeake",
			"Code" : "Chesapeake"
		}, {
			"Name" : "Chester",
			"Code" : "Chester"
		}, {
			"Name" : "Christiansburg",
			"Code" : "Christiansburg"
		}, {
			"Name" : "Churchville",
			"Code" : "Churchville"
		}, {
			"Name" : "Clifton",
			"Code" : "Clifton"
		}, {
			"Name" : "Colonial Heights",
			"Code" : "Colonial Heights"
		}, {
			"Name" : "Culloden",
			"Code" : "Culloden"
		}, {
			"Name" : "Dale City",
			"Code" : "Dale City"
		}, {
			"Name" : "Danville",
			"Code" : "Danville"
		}, {
			"Name" : "Dublin",
			"Code" : "Dublin"
		}, {
			"Name" : "Eagle Rock",
			"Code" : "Eagle Rock"
		}, {
			"Name" : "East Highland Park",
			"Code" : "East Highland Park"
		}, {
			"Name" : "Faber",
			"Code" : "Faber"
		}, {
			"Name" : "Fairfax",
			"Code" : "Fairfax"
		}, {
			"Name" : "Falls Church",
			"Code" : "Falls Church"
		}, {
			"Name" : "Fishersville",
			"Code" : "Fishersville"
		}, {
			"Name" : "Fort Hunt",
			"Code" : "Fort Hunt"
		}, {
			"Name" : "Fort Valley",
			"Code" : "Fort Valley"
		}, {
			"Name" : "Franconia",
			"Code" : "Franconia"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Fredericksburg",
			"Code" : "Fredericksburg"
		}, {
			"Name" : "Front Royal",
			"Code" : "Front Royal"
		}, {
			"Name" : "Gainesville",
			"Code" : "Gainesville"
		}, {
			"Name" : "Glen Allen",
			"Code" : "Glen Allen"
		}, {
			"Name" : "Gloucester",
			"Code" : "Gloucester"
		}, {
			"Name" : "Goochland",
			"Code" : "Goochland"
		}, {
			"Name" : "Great Falls",
			"Code" : "Great Falls"
		}, {
			"Name" : "Groveton",
			"Code" : "Groveton"
		}, {
			"Name" : "Hampton",
			"Code" : "Hampton"
		}, {
			"Name" : "Harrisonburg",
			"Code" : "Harrisonburg"
		}, {
			"Name" : "Henrico",
			"Code" : "Henrico"
		}, {
			"Name" : "Herndon",
			"Code" : "Herndon"
		}, {
			"Name" : "Highland Springs",
			"Code" : "Highland Springs"
		}, {
			"Name" : "Hollins",
			"Code" : "Hollins"
		}, {
			"Name" : "Hopewell",
			"Code" : "Hopewell"
		}, {
			"Name" : "Hybla Valley",
			"Code" : "Hybla Valley"
		}, {
			"Name" : "Idylwood",
			"Code" : "Idylwood"
		}, {
			"Name" : "Irvington",
			"Code" : "Irvington"
		}, {
			"Name" : "Jamesville",
			"Code" : "Jamesville"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Keen Mountain",
			"Code" : "Keen Mountain"
		}, {
			"Name" : "Keswick",
			"Code" : "Keswick"
		}, {
			"Name" : "Lake Ridge",
			"Code" : "Lake Ridge"
		}, {
			"Name" : "Lakeside",
			"Code" : "Lakeside"
		}, {
			"Name" : "Laurel",
			"Code" : "Laurel"
		}, {
			"Name" : "Leesburg",
			"Code" : "Leesburg"
		}, {
			"Name" : "Lincolnia",
			"Code" : "Lincolnia"
		}, {
			"Name" : "Lorton",
			"Code" : "Lorton"
		}, {
			"Name" : "Lynchburg",
			"Code" : "Lynchburg"
		}, {
			"Name" : "MacLean",
			"Code" : "MacLean"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Madison Heights",
			"Code" : "Madison Heights"
		}, {
			"Name" : "Manassas",
			"Code" : "Manassas"
		}, {
			"Name" : "Marion",
			"Code" : "Marion"
		}, {
			"Name" : "Martinsville",
			"Code" : "Martinsville"
		}, {
			"Name" : "Mclean",
			"Code" : "Mclean"
		}, {
			"Name" : "Mechanicsville",
			"Code" : "Mechanicsville"
		}, {
			"Name" : "Melfa",
			"Code" : "Melfa"
		}, {
			"Name" : "Midlothian",
			"Code" : "Midlothian"
		}, {
			"Name" : "Montclair",
			"Code" : "Montclair"
		}, {
			"Name" : "Montross",
			"Code" : "Montross"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "Newington",
			"Code" : "Newington"
		}, {
			"Name" : "Newport News",
			"Code" : "Newport News"
		}, {
			"Name" : "Norfolk",
			"Code" : "Norfolk"
		}, {
			"Name" : "North Springfield",
			"Code" : "North Springfield"
		}, {
			"Name" : "Oakton",
			"Code" : "Oakton"
		}, {
			"Name" : "Orange",
			"Code" : "Orange"
		}, {
			"Name" : "Petersburg",
			"Code" : "Petersburg"
		}, {
			"Name" : "Poquoson",
			"Code" : "Poquoson"
		}, {
			"Name" : "Portsmouth",
			"Code" : "Portsmouth"
		}, {
			"Name" : "Radford",
			"Code" : "Radford"
		}, {
			"Name" : "Reston",
			"Code" : "Reston"
		}, {
			"Name" : "Richmond",
			"Code" : "Richmond"
		}, {
			"Name" : "Roanoke",
			"Code" : "Roanoke"
		}, {
			"Name" : "Rose Hill",
			"Code" : "Rose Hill"
		}, {
			"Name" : "Salem",
			"Code" : "Salem"
		}, {
			"Name" : "Seaford",
			"Code" : "Seaford"
		}, {
			"Name" : "South Boston",
			"Code" : "South Boston"
		}, {
			"Name" : "Springfield",
			"Code" : "Springfield"
		}, {
			"Name" : "Stafford",
			"Code" : "Stafford"
		}, {
			"Name" : "Staffordshire",
			"Code" : "Staffordshire"
		}, {
			"Name" : "Staunton",
			"Code" : "Staunton"
		}, {
			"Name" : "Sterling",
			"Code" : "Sterling"
		}, {
			"Name" : "Suffolk",
			"Code" : "Suffolk"
		}, {
			"Name" : "Sugarland Run",
			"Code" : "Sugarland Run"
		}, {
			"Name" : "Tappahannock",
			"Code" : "Tappahannock"
		}, {
			"Name" : "Timberlake",
			"Code" : "Timberlake"
		}, {
			"Name" : "Triangle",
			"Code" : "Triangle"
		}, {
			"Name" : "Tuckahoe",
			"Code" : "Tuckahoe"
		}, {
			"Name" : "Tysons Corner",
			"Code" : "Tysons Corner"
		}, {
			"Name" : "Vienna",
			"Code" : "Vienna"
		}, {
			"Name" : "Virginia Beach",
			"Code" : "Virginia Beach"
		}, {
			"Name" : "Warrenton",
			"Code" : "Warrenton"
		}, {
			"Name" : "Washington",
			"Code" : "Washington"
		}, {
			"Name" : "Waterford",
			"Code" : "Waterford"
		}, {
			"Name" : "Waynesboro",
			"Code" : "Waynesboro"
		}, {
			"Name" : "West Springfield",
			"Code" : "West Springfield"
		}, {
			"Name" : "Williamsburg",
			"Code" : "Williamsburg"
		}, {
			"Name" : "Winchester",
			"Code" : "Winchester"
		}, {
			"Name" : "Wolf Trap",
			"Code" : "Wolf Trap"
		}, {
			"Name" : "Woodbridge",
			"Code" : "Woodbridge"
		}, {
			"Name" : "Wytheville",
			"Code" : "Wytheville"
		}, {
			"Name" : "Yorktown",
			"Code" : "Yorktown"
		} ]
	}, {
		"Name" : "Washington",
		"Code" : "WA",
		"City" : [ {
			"Name" : "Aberdeen",
			"Code" : "Aberdeen"
		}, {
			"Name" : "Airway Heights",
			"Code" : "Airway Heights"
		}, {
			"Name" : "Alderwood Manor",
			"Code" : "Alderwood Manor"
		}, {
			"Name" : "Anacortes",
			"Code" : "Anacortes"
		}, {
			"Name" : "Arlington",
			"Code" : "Arlington"
		}, {
			"Name" : "Auburn",
			"Code" : "Auburn"
		}, {
			"Name" : "Bainbridge Island",
			"Code" : "Bainbridge Island"
		}, {
			"Name" : "Battle Ground",
			"Code" : "Battle Ground"
		}, {
			"Name" : "Bellevue",
			"Code" : "Bellevue"
		}, {
			"Name" : "Bellingham",
			"Code" : "Bellingham"
		}, {
			"Name" : "Bingen",
			"Code" : "Bingen"
		}, {
			"Name" : "Blaine",
			"Code" : "Blaine"
		}, {
			"Name" : "Bothell",
			"Code" : "Bothell"
		}, {
			"Name" : "Bremerton",
			"Code" : "Bremerton"
		}, {
			"Name" : "Bryn Mawr-Skyway",
			"Code" : "Bryn Mawr-Skyway"
		}, {
			"Name" : "Buckley",
			"Code" : "Buckley"
		}, {
			"Name" : "Burien",
			"Code" : "Burien"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Camano Island",
			"Code" : "Camano Island"
		}, {
			"Name" : "Camas",
			"Code" : "Camas"
		}, {
			"Name" : "Cascade-Fairwood",
			"Code" : "Cascade-Fairwood"
		}, {
			"Name" : "Centralia",
			"Code" : "Centralia"
		}, {
			"Name" : "Chehalis",
			"Code" : "Chehalis"
		}, {
			"Name" : "Cheney",
			"Code" : "Cheney"
		}, {
			"Name" : "Clear Lake",
			"Code" : "Clear Lake"
		}, {
			"Name" : "Colbert",
			"Code" : "Colbert"
		}, {
			"Name" : "Cottage Lake",
			"Code" : "Cottage Lake"
		}, {
			"Name" : "Covington-Sawyer-Wilderness",
			"Code" : "Covington-Sawyer-Wilderness"
		}, {
			"Name" : "Des Moines",
			"Code" : "Des Moines"
		}, {
			"Name" : "Duvall",
			"Code" : "Duvall"
		}, {
			"Name" : "East Hill-Meridian",
			"Code" : "East Hill-Meridian"
		}, {
			"Name" : "East Renton Highlands",
			"Code" : "East Renton Highlands"
		}, {
			"Name" : "East Wenatchee Bench",
			"Code" : "East Wenatchee Bench"
		}, {
			"Name" : "Eastsound",
			"Code" : "Eastsound"
		}, {
			"Name" : "Eatonville",
			"Code" : "Eatonville"
		}, {
			"Name" : "Edgewood-North Hill",
			"Code" : "Edgewood-North Hill"
		}, {
			"Name" : "Edmonds",
			"Code" : "Edmonds"
		}, {
			"Name" : "Elk Plain",
			"Code" : "Elk Plain"
		}, {
			"Name" : "Ellensburg",
			"Code" : "Ellensburg"
		}, {
			"Name" : "Enumclaw",
			"Code" : "Enumclaw"
		}, {
			"Name" : "Esperance",
			"Code" : "Esperance"
		}, {
			"Name" : "Everett",
			"Code" : "Everett"
		}, {
			"Name" : "Evergreen",
			"Code" : "Evergreen"
		}, {
			"Name" : "Fairchild",
			"Code" : "Fairchild"
		}, {
			"Name" : "Federal Way",
			"Code" : "Federal Way"
		}, {
			"Name" : "Ferndale",
			"Code" : "Ferndale"
		}, {
			"Name" : "Fircrest",
			"Code" : "Fircrest"
		}, {
			"Name" : "Ford",
			"Code" : "Ford"
		}, {
			"Name" : "Fort Lewis",
			"Code" : "Fort Lewis"
		}, {
			"Name" : "Friday Harbor",
			"Code" : "Friday Harbor"
		}, {
			"Name" : "Gig Harbor",
			"Code" : "Gig Harbor"
		}, {
			"Name" : "Graham",
			"Code" : "Graham"
		}, {
			"Name" : "Harbour Pointe",
			"Code" : "Harbour Pointe"
		}, {
			"Name" : "Inglewood-Finn Hill",
			"Code" : "Inglewood-Finn Hill"
		}, {
			"Name" : "Issaquah",
			"Code" : "Issaquah"
		}, {
			"Name" : "Kelso",
			"Code" : "Kelso"
		}, {
			"Name" : "Kenmore",
			"Code" : "Kenmore"
		}, {
			"Name" : "Kennewick",
			"Code" : "Kennewick"
		}, {
			"Name" : "Kent",
			"Code" : "Kent"
		}, {
			"Name" : "Kingsgate",
			"Code" : "Kingsgate"
		}, {
			"Name" : "Kirkland",
			"Code" : "Kirkland"
		}, {
			"Name" : "Lacey",
			"Code" : "Lacey"
		}, {
			"Name" : "Lake Serene-North Lynnwood",
			"Code" : "Lake Serene-North Lynnwood"
		}, {
			"Name" : "Lakeland North",
			"Code" : "Lakeland North"
		}, {
			"Name" : "Lakeland South",
			"Code" : "Lakeland South"
		}, {
			"Name" : "Lakewood",
			"Code" : "Lakewood"
		}, {
			"Name" : "Longview",
			"Code" : "Longview"
		}, {
			"Name" : "Lynnwood",
			"Code" : "Lynnwood"
		}, {
			"Name" : "Martha Lake",
			"Code" : "Martha Lake"
		}, {
			"Name" : "Marysville",
			"Code" : "Marysville"
		}, {
			"Name" : "Mercer Island",
			"Code" : "Mercer Island"
		}, {
			"Name" : "Minnehaha",
			"Code" : "Minnehaha"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Moses Lake",
			"Code" : "Moses Lake"
		}, {
			"Name" : "Mossyrock",
			"Code" : "Mossyrock"
		}, {
			"Name" : "Mount Vernon",
			"Code" : "Mount Vernon"
		}, {
			"Name" : "Mountlake Terrace",
			"Code" : "Mountlake Terrace"
		}, {
			"Name" : "Mukilteo",
			"Code" : "Mukilteo"
		}, {
			"Name" : "Newport Hills",
			"Code" : "Newport Hills"
		}, {
			"Name" : "North City-Ridgecrest",
			"Code" : "North City-Ridgecrest"
		}, {
			"Name" : "North Creek",
			"Code" : "North Creek"
		}, {
			"Name" : "North Marysville",
			"Code" : "North Marysville"
		}, {
			"Name" : "Oak Harbor",
			"Code" : "Oak Harbor"
		}, {
			"Name" : "Ocean Shores",
			"Code" : "Ocean Shores"
		}, {
			"Name" : "Olympia",
			"Code" : "Olympia"
		}, {
			"Name" : "Opportunity",
			"Code" : "Opportunity"
		}, {
			"Name" : "Orchards South",
			"Code" : "Orchards South"
		}, {
			"Name" : "Orting",
			"Code" : "Orting"
		}, {
			"Name" : "Paine Field-Lake Stickney",
			"Code" : "Paine Field-Lake Stickney"
		}, {
			"Name" : "Parkland",
			"Code" : "Parkland"
		}, {
			"Name" : "Pasco",
			"Code" : "Pasco"
		}, {
			"Name" : "Picnic Point-North Lynnwood",
			"Code" : "Picnic Point-North Lynnwood"
		}, {
			"Name" : "Pine Lake",
			"Code" : "Pine Lake"
		}, {
			"Name" : "Port Angeles",
			"Code" : "Port Angeles"
		}, {
			"Name" : "Port Hadlock",
			"Code" : "Port Hadlock"
		}, {
			"Name" : "Port Ludlow",
			"Code" : "Port Ludlow"
		}, {
			"Name" : "Port Orchard",
			"Code" : "Port Orchard"
		}, {
			"Name" : "Poulsbo",
			"Code" : "Poulsbo"
		}, {
			"Name" : "Pullman",
			"Code" : "Pullman"
		}, {
			"Name" : "Puyallup",
			"Code" : "Puyallup"
		}, {
			"Name" : "Redmond",
			"Code" : "Redmond"
		}, {
			"Name" : "Renton",
			"Code" : "Renton"
		}, {
			"Name" : "Republic",
			"Code" : "Republic"
		}, {
			"Name" : "Richland",
			"Code" : "Richland"
		}, {
			"Name" : "Riverton-Boulevard Park",
			"Code" : "Riverton-Boulevard Park"
		}, {
			"Name" : "Sahalee",
			"Code" : "Sahalee"
		}, {
			"Name" : "Salmon Creek",
			"Code" : "Salmon Creek"
		}, {
			"Name" : "Sammamish",
			"Code" : "Sammamish"
		}, {
			"Name" : "SeaTac",
			"Code" : "SeaTac"
		}, {
			"Name" : "Seattle",
			"Code" : "Seattle"
		}, {
			"Name" : "Seattle Hill-Silver Firs",
			"Code" : "Seattle Hill-Silver Firs"
		}, {
			"Name" : "Sedro Woolley",
			"Code" : "Sedro Woolley"
		}, {
			"Name" : "Shelton",
			"Code" : "Shelton"
		}, {
			"Name" : "Shoreline",
			"Code" : "Shoreline"
		}, {
			"Name" : "Silverdale",
			"Code" : "Silverdale"
		}, {
			"Name" : "Snohomish",
			"Code" : "Snohomish"
		}, {
			"Name" : "South Hill",
			"Code" : "South Hill"
		}, {
			"Name" : "South Prairie",
			"Code" : "South Prairie"
		}, {
			"Name" : "South Seattle",
			"Code" : "South Seattle"
		}, {
			"Name" : "Spanaway",
			"Code" : "Spanaway"
		}, {
			"Name" : "Spokane",
			"Code" : "Spokane"
		}, {
			"Name" : "Sumas",
			"Code" : "Sumas"
		}, {
			"Name" : "Sumner",
			"Code" : "Sumner"
		}, {
			"Name" : "Sunnyside",
			"Code" : "Sunnyside"
		}, {
			"Name" : "Tacoma",
			"Code" : "Tacoma"
		}, {
			"Name" : "Tukwila",
			"Code" : "Tukwila"
		}, {
			"Name" : "Tumwater",
			"Code" : "Tumwater"
		}, {
			"Name" : "University Place",
			"Code" : "University Place"
		}, {
			"Name" : "Vancouver",
			"Code" : "Vancouver"
		}, {
			"Name" : "Vashon",
			"Code" : "Vashon"
		}, {
			"Name" : "Walla Walla",
			"Code" : "Walla Walla"
		}, {
			"Name" : "Washougal",
			"Code" : "Washougal"
		}, {
			"Name" : "Wenatchee",
			"Code" : "Wenatchee"
		}, {
			"Name" : "West Lake Stevens",
			"Code" : "West Lake Stevens"
		}, {
			"Name" : "White Center",
			"Code" : "White Center"
		}, {
			"Name" : "White Salmon",
			"Code" : "White Salmon"
		}, {
			"Name" : "White Swan",
			"Code" : "White Swan"
		}, {
			"Name" : "Woodinville",
			"Code" : "Woodinville"
		}, {
			"Name" : "Yakima",
			"Code" : "Yakima"
		}, {
			"Name" : "Yelm",
			"Code" : "Yelm"
		} ]
	}, {
		"Name" : "West Virginia",
		"Code" : "WV",
		"City" : [ {
			"Name" : "Beckley",
			"Code" : "Beckley"
		}, {
			"Name" : "Bluefield",
			"Code" : "Bluefield"
		}, {
			"Name" : "Bridgeport",
			"Code" : "Bridgeport"
		}, {
			"Name" : "Buckhannon",
			"Code" : "Buckhannon"
		}, {
			"Name" : "Charles Town",
			"Code" : "Charles Town"
		}, {
			"Name" : "Charleston",
			"Code" : "Charleston"
		}, {
			"Name" : "Clarksburg",
			"Code" : "Clarksburg"
		}, {
			"Name" : "Dunbar",
			"Code" : "Dunbar"
		}, {
			"Name" : "Elkins",
			"Code" : "Elkins"
		}, {
			"Name" : "Fairmont",
			"Code" : "Fairmont"
		}, {
			"Name" : "Grafton",
			"Code" : "Grafton"
		}, {
			"Name" : "Huntington",
			"Code" : "Huntington"
		}, {
			"Name" : "Hurricane",
			"Code" : "Hurricane"
		}, {
			"Name" : "Keyser",
			"Code" : "Keyser"
		}, {
			"Name" : "Lewisburg",
			"Code" : "Lewisburg"
		}, {
			"Name" : "Martinsburg",
			"Code" : "Martinsburg"
		}, {
			"Name" : "Morgantown",
			"Code" : "Morgantown"
		}, {
			"Name" : "Moundsville",
			"Code" : "Moundsville"
		}, {
			"Name" : "New Martinsville",
			"Code" : "New Martinsville"
		}, {
			"Name" : "Nitro",
			"Code" : "Nitro"
		}, {
			"Name" : "Oak Hill",
			"Code" : "Oak Hill"
		}, {
			"Name" : "Parkersburg",
			"Code" : "Parkersburg"
		}, {
			"Name" : "Point Pleasant",
			"Code" : "Point Pleasant"
		}, {
			"Name" : "Princeton",
			"Code" : "Princeton"
		}, {
			"Name" : "Ranson",
			"Code" : "Ranson"
		}, {
			"Name" : "Ravenswood",
			"Code" : "Ravenswood"
		}, {
			"Name" : "South Charleston",
			"Code" : "South Charleston"
		}, {
			"Name" : "St. Albans",
			"Code" : "St. Albans"
		}, {
			"Name" : "Summersville",
			"Code" : "Summersville"
		}, {
			"Name" : "Vienna",
			"Code" : "Vienna"
		}, {
			"Name" : "Weirton",
			"Code" : "Weirton"
		}, {
			"Name" : "Weston",
			"Code" : "Weston"
		}, {
			"Name" : "Westover",
			"Code" : "Westover"
		}, {
			"Name" : "Wheeling",
			"Code" : "Wheeling"
		} ]
	}, {
		"Name" : "Wisconsin",
		"Code" : "WI",
		"City" : [ {
			"Name" : "Adams",
			"Code" : "Adams"
		}, {
			"Name" : "Allouez",
			"Code" : "Allouez"
		}, {
			"Name" : "Appleton",
			"Code" : "Appleton"
		}, {
			"Name" : "Ashland",
			"Code" : "Ashland"
		}, {
			"Name" : "Ashwaubenon",
			"Code" : "Ashwaubenon"
		}, {
			"Name" : "Baraboo",
			"Code" : "Baraboo"
		}, {
			"Name" : "Beaver Dam",
			"Code" : "Beaver Dam"
		}, {
			"Name" : "Beloit",
			"Code" : "Beloit"
		}, {
			"Name" : "Brookfield",
			"Code" : "Brookfield"
		}, {
			"Name" : "Brown Deer",
			"Code" : "Brown Deer"
		}, {
			"Name" : "Burlington",
			"Code" : "Burlington"
		}, {
			"Name" : "Caledonia",
			"Code" : "Caledonia"
		}, {
			"Name" : "Carter",
			"Code" : "Carter"
		}, {
			"Name" : "Cedarburg",
			"Code" : "Cedarburg"
		}, {
			"Name" : "Chippewa Falls",
			"Code" : "Chippewa Falls"
		}, {
			"Name" : "Cudahy",
			"Code" : "Cudahy"
		}, {
			"Name" : "De Pere",
			"Code" : "De Pere"
		}, {
			"Name" : "Deer Park",
			"Code" : "Deer Park"
		}, {
			"Name" : "Delafield",
			"Code" : "Delafield"
		}, {
			"Name" : "Eau Claire",
			"Code" : "Eau Claire"
		}, {
			"Name" : "Elkhorn",
			"Code" : "Elkhorn"
		}, {
			"Name" : "Elroy",
			"Code" : "Elroy"
		}, {
			"Name" : "Fitchburg",
			"Code" : "Fitchburg"
		}, {
			"Name" : "Fond du Lac",
			"Code" : "Fond du Lac"
		}, {
			"Name" : "Fort Atkinson",
			"Code" : "Fort Atkinson"
		}, {
			"Name" : "Franklin",
			"Code" : "Franklin"
		}, {
			"Name" : "Galesville",
			"Code" : "Galesville"
		}, {
			"Name" : "Germantown",
			"Code" : "Germantown"
		}, {
			"Name" : "Glen Flora",
			"Code" : "Glen Flora"
		}, {
			"Name" : "Glendale",
			"Code" : "Glendale"
		}, {
			"Name" : "Goodman",
			"Code" : "Goodman"
		}, {
			"Name" : "Grafton",
			"Code" : "Grafton"
		}, {
			"Name" : "Green Bay",
			"Code" : "Green Bay"
		}, {
			"Name" : "Greendale",
			"Code" : "Greendale"
		}, {
			"Name" : "Greenfield",
			"Code" : "Greenfield"
		}, {
			"Name" : "Hartford",
			"Code" : "Hartford"
		}, {
			"Name" : "Hartland",
			"Code" : "Hartland"
		}, {
			"Name" : "Howard",
			"Code" : "Howard"
		}, {
			"Name" : "Hudson",
			"Code" : "Hudson"
		}, {
			"Name" : "Janesville",
			"Code" : "Janesville"
		}, {
			"Name" : "Jefferson",
			"Code" : "Jefferson"
		}, {
			"Name" : "Junction City",
			"Code" : "Junction City"
		}, {
			"Name" : "Kaukauna",
			"Code" : "Kaukauna"
		}, {
			"Name" : "Kenosha",
			"Code" : "Kenosha"
		}, {
			"Name" : "Kiel",
			"Code" : "Kiel"
		}, {
			"Name" : "Kohler",
			"Code" : "Kohler"
		}, {
			"Name" : "La Crosse",
			"Code" : "La Crosse"
		}, {
			"Name" : "Little Chute",
			"Code" : "Little Chute"
		}, {
			"Name" : "Madison",
			"Code" : "Madison"
		}, {
			"Name" : "Manitowoc",
			"Code" : "Manitowoc"
		}, {
			"Name" : "Marinette",
			"Code" : "Marinette"
		}, {
			"Name" : "Marshfield",
			"Code" : "Marshfield"
		}, {
			"Name" : "Medford",
			"Code" : "Medford"
		}, {
			"Name" : "Menasha",
			"Code" : "Menasha"
		}, {
			"Name" : "Menomonee Falls",
			"Code" : "Menomonee Falls"
		}, {
			"Name" : "Menomonie",
			"Code" : "Menomonie"
		}, {
			"Name" : "Mequon",
			"Code" : "Mequon"
		}, {
			"Name" : "Merrill",
			"Code" : "Merrill"
		}, {
			"Name" : "Middleton",
			"Code" : "Middleton"
		}, {
			"Name" : "Milwaukee",
			"Code" : "Milwaukee"
		}, {
			"Name" : "Mineral Point",
			"Code" : "Mineral Point"
		}, {
			"Name" : "Monroe",
			"Code" : "Monroe"
		}, {
			"Name" : "Mount Pleasant",
			"Code" : "Mount Pleasant"
		}, {
			"Name" : "Mukwonago",
			"Code" : "Mukwonago"
		}, {
			"Name" : "Muskego",
			"Code" : "Muskego"
		}, {
			"Name" : "Neenah",
			"Code" : "Neenah"
		}, {
			"Name" : "New Berlin",
			"Code" : "New Berlin"
		}, {
			"Name" : "New Richmond",
			"Code" : "New Richmond"
		}, {
			"Name" : "Oak Creek",
			"Code" : "Oak Creek"
		}, {
			"Name" : "Oconomowoc",
			"Code" : "Oconomowoc"
		}, {
			"Name" : "Onalaska",
			"Code" : "Onalaska"
		}, {
			"Name" : "Orfordville",
			"Code" : "Orfordville"
		}, {
			"Name" : "Oshkosh",
			"Code" : "Oshkosh"
		}, {
			"Name" : "Pigeon Falls",
			"Code" : "Pigeon Falls"
		}, {
			"Name" : "Platteville",
			"Code" : "Platteville"
		}, {
			"Name" : "Pleasant Prairie",
			"Code" : "Pleasant Prairie"
		}, {
			"Name" : "Plover",
			"Code" : "Plover"
		}, {
			"Name" : "Port Washington",
			"Code" : "Port Washington"
		}, {
			"Name" : "Portage",
			"Code" : "Portage"
		}, {
			"Name" : "Pound",
			"Code" : "Pound"
		}, {
			"Name" : "Racine",
			"Code" : "Racine"
		}, {
			"Name" : "Reedsburg",
			"Code" : "Reedsburg"
		}, {
			"Name" : "Rhinelander",
			"Code" : "Rhinelander"
		}, {
			"Name" : "River Falls",
			"Code" : "River Falls"
		}, {
			"Name" : "Saint Francis",
			"Code" : "Saint Francis"
		}, {
			"Name" : "Sheboygan",
			"Code" : "Sheboygan"
		}, {
			"Name" : "Shorewood",
			"Code" : "Shorewood"
		}, {
			"Name" : "South Milwaukee",
			"Code" : "South Milwaukee"
		}, {
			"Name" : "Spring Valley",
			"Code" : "Spring Valley"
		}, {
			"Name" : "Stevens Point",
			"Code" : "Stevens Point"
		}, {
			"Name" : "Stoughton",
			"Code" : "Stoughton"
		}, {
			"Name" : "Strum",
			"Code" : "Strum"
		}, {
			"Name" : "Sturtevant",
			"Code" : "Sturtevant"
		}, {
			"Name" : "Sun Prairie",
			"Code" : "Sun Prairie"
		}, {
			"Name" : "Superior",
			"Code" : "Superior"
		}, {
			"Name" : "Three Lakes",
			"Code" : "Three Lakes"
		}, {
			"Name" : "Tomah",
			"Code" : "Tomah"
		}, {
			"Name" : "Two Rivers",
			"Code" : "Two Rivers"
		}, {
			"Name" : "Washington Island",
			"Code" : "Washington Island"
		}, {
			"Name" : "Waterford",
			"Code" : "Waterford"
		}, {
			"Name" : "Watertown",
			"Code" : "Watertown"
		}, {
			"Name" : "Waukesha",
			"Code" : "Waukesha"
		}, {
			"Name" : "Waupun",
			"Code" : "Waupun"
		}, {
			"Name" : "Wausau",
			"Code" : "Wausau"
		}, {
			"Name" : "Wautoma",
			"Code" : "Wautoma"
		}, {
			"Name" : "Wauwatosa",
			"Code" : "Wauwatosa"
		}, {
			"Name" : "West Allis",
			"Code" : "West Allis"
		}, {
			"Name" : "West Bend",
			"Code" : "West Bend"
		}, {
			"Name" : "Weston",
			"Code" : "Weston"
		}, {
			"Name" : "Whitefish Bay",
			"Code" : "Whitefish Bay"
		}, {
			"Name" : "Whitewater",
			"Code" : "Whitewater"
		}, {
			"Name" : "Wisconsin Rapids",
			"Code" : "Wisconsin Rapids"
		} ]
	}, {
		"Name" : "Wyoming",
		"Code" : "WY",
		"City" : [ {
			"Name" : "Buffalo",
			"Code" : "Buffalo"
		}, {
			"Name" : "Casper",
			"Code" : "Casper"
		}, {
			"Name" : "Cheyenne",
			"Code" : "Cheyenne"
		}, {
			"Name" : "Cody",
			"Code" : "Cody"
		}, {
			"Name" : "Douglas",
			"Code" : "Douglas"
		}, {
			"Name" : "Evanston",
			"Code" : "Evanston"
		}, {
			"Name" : "Gillette",
			"Code" : "Gillette"
		}, {
			"Name" : "Green River",
			"Code" : "Green River"
		}, {
			"Name" : "Jackson",
			"Code" : "Jackson"
		}, {
			"Name" : "Lander",
			"Code" : "Lander"
		}, {
			"Name" : "Laramie",
			"Code" : "Laramie"
		}, {
			"Name" : "Powell",
			"Code" : "Powell"
		}, {
			"Name" : "Rawlins",
			"Code" : "Rawlins"
		}, {
			"Name" : "Riverton",
			"Code" : "Riverton"
		}, {
			"Name" : "Rock Springs",
			"Code" : "Rock Springs"
		}, {
			"Name" : "Sheridan",
			"Code" : "Sheridan"
		}, {
			"Name" : "Torrington",
			"Code" : "Torrington"
		}, {
			"Name" : "Worland",
			"Code" : "Worland"
		} ]
	} ]
}, {
	"Name" : "Japan",
	"Code" : "081",
	"State" : [ {
		"Name" : "Aichi",
		"Code" : "23"
	}, {
		"Name" : "Akita",
		"Code" : "5"
	}, {
		"Name" : "Aomori",
		"Code" : "2"
	}, {
		"Name" : "Chiba",
		"Code" : "12"
	}, {
		"Name" : "Ehime",
		"Code" : "38"
	}, {
		"Name" : "Fukui",
		"Code" : "18"
	}, {
		"Name" : "Fukuoka",
		"Code" : "40"
	}, {
		"Name" : "Fukushima",
		"Code" : "7"
	}, {
		"Name" : "Gifu",
		"Code" : "21"
	}, {
		"Name" : "Gunma",
		"Code" : "10"
	}, {
		"Name" : "Hiroshima",
		"Code" : "34"
	}, {
		"Name" : "Hokkaido",
		"Code" : "1"
	}, {
		"Name" : "Hyogo",
		"Code" : "28"
	}, {
		"Name" : "Ibaraki",
		"Code" : "8"
	}, {
		"Name" : "Ishikawa",
		"Code" : "17"
	}, {
		"Name" : "Iwate",
		"Code" : "3"
	}, {
		"Name" : "Kagawa",
		"Code" : "37"
	}, {
		"Name" : "Kagoshima",
		"Code" : "46"
	}, {
		"Name" : "Kanagawa",
		"Code" : "14"
	}, {
		"Name" : "Kochi",
		"Code" : "39"
	}, {
		"Name" : "Kumamoto",
		"Code" : "43"
	}, {
		"Name" : "Kyoto",
		"Code" : "26"
	}, {
		"Name" : "Mie",
		"Code" : "24"
	}, {
		"Name" : "Miyagi",
		"Code" : "4"
	}, {
		"Name" : "Miyazaki",
		"Code" : "45"
	}, {
		"Name" : "Nagano",
		"Code" : "20"
	}, {
		"Name" : "Nagasaki",
		"Code" : "42"
	}, {
		"Name" : "Nara",
		"Code" : "29"
	}, {
		"Name" : "Niigata",
		"Code" : "15"
	}, {
		"Name" : "Oita",
		"Code" : "44"
	}, {
		"Name" : "Okayama",
		"Code" : "33"
	}, {
		"Name" : "Okinawa",
		"Code" : "47"
	}, {
		"Name" : "Osaka",
		"Code" : "27"
	}, {
		"Name" : "Saga",
		"Code" : "41"
	}, {
		"Name" : "Saitama",
		"Code" : "11"
	}, {
		"Name" : "Shiga",
		"Code" : "25"
	}, {
		"Name" : "Shimane",
		"Code" : "32"
	}, {
		"Name" : "Shizuoka",
		"Code" : "22"
	}, {
		"Name" : "Tochigi",
		"Code" : "9"
	}, {
		"Name" : "Tokushima",
		"Code" : "36"
	}, {
		"Name" : "Tokyo",
		"Code" : "13"
	}, {
		"Name" : "Tottori",
		"Code" : "31"
	}, {
		"Name" : "Toyama",
		"Code" : "16"
	}, {
		"Name" : "Wakayama",
		"Code" : "30"
	}, {
		"Name" : "Yamagata",
		"Code" : "6"
	}, {
		"Name" : "Yamaguchi",
		"Code" : "35"
	}, {
		"Name" : "Yamanashi",
		"Code" : "19"
	} ]
}, {
	"Name" : "China",
	"Code" : "086",
	"State" : [ {
		"Name" : "Anhui",
		"Code" : "34",
		"City" : [ {
			"Name" : "Anqing",
			"Code" : "8"
		}, {
			"Name" : "Bengbu",
			"Code" : "3"
		}, {
			"Name" : "Bozhou",
			"Code" : "16"
		}, {
			"Name" : "Chizhou",
			"Code" : "17"
		}, {
			"Name" : "Chuzhou",
			"Code" : "11"
		}, {
			"Name" : "Fuyang",
			"Code" : "12"
		}, {
			"Name" : "Hefei",
			"Code" : "1"
		}, {
			"Name" : "Huaibei",
			"Code" : "6"
		}, {
			"Name" : "Huainan",
			"Code" : "4"
		}, {
			"Name" : "Huangshan",
			"Code" : "10"
		}, {
			"Name" : "Lu'an",
			"Code" : "15"
		}, {
			"Name" : "Ma'anshan",
			"Code" : "5"
		}, {
			"Name" : "Suzhou",
			"Code" : "13"
		}, {
			"Name" : "Tongling",
			"Code" : "7"
		}, {
			"Name" : "Wuhu",
			"Code" : "2"
		}, {
			"Name" : "Xuancheng",
			"Code" : "18"
		} ]
	}, {
		"Name" : "Beijing",
		"Code" : "11",
		"City" : [ {
			"Name" : "Changping",
			"Code" : "21"
		}, {
			"Name" : "Chaoyang",
			"Code" : "5"
		}, {
			"Name" : "Chongwen",
			"Code" : "3"
		}, {
			"Name" : "Daxing",
			"Code" : "24"
		}, {
			"Name" : "Dongcheng",
			"Code" : "1"
		}, {
			"Name" : "Fangshan",
			"Code" : "11"
		}, {
			"Name" : "Fengtai",
			"Code" : "6"
		}, {
			"Name" : "Haidian",
			"Code" : "8"
		}, {
			"Name" : "Huairou",
			"Code" : "27"
		}, {
			"Name" : "Mentougou",
			"Code" : "9"
		}, {
			"Name" : "Miyun",
			"Code" : "28"
		}, {
			"Name" : "Pinggu",
			"Code" : "26"
		}, {
			"Name" : "Shijingshan",
			"Code" : "7"
		}, {
			"Name" : "Shunyi",
			"Code" : "13"
		}, {
			"Name" : "Tongzhou",
			"Code" : "12"
		}, {
			"Name" : "Xicheng",
			"Code" : "2"
		}, {
			"Name" : "Yanqing",
			"Code" : "29"
		} ]
	}, {
		"Name" : "Chongqing",
		"Code" : "50",
		"City" : [ {
			"Name" : "Ba'nan",
			"Code" : "13"
		}, {
			"Name" : "Beibei",
			"Code" : "9"
		}, {
			"Name" : "Bishan",
			"Code" : "27"
		}, {
			"Name" : "Changshou",
			"Code" : "21"
		}, {
			"Name" : "Chengkou",
			"Code" : "29"
		}, {
			"Name" : "Dadukou",
			"Code" : "4"
		}, {
			"Name" : "Dazu",
			"Code" : "25"
		}, {
			"Name" : "Dianjiang",
			"Code" : "31"
		}, {
			"Name" : "Fengdu",
			"Code" : "30"
		}, {
			"Name" : "Fengjie",
			"Code" : "36"
		}, {
			"Name" : "Fuling",
			"Code" : "2"
		}, {
			"Name" : "Hechuan",
			"Code" : "82"
		}, {
			"Name" : "Jiangbei",
			"Code" : "5"
		}, {
			"Name" : "Jiangjin",
			"Code" : "81"
		}, {
			"Name" : "Jiulongpo",
			"Code" : "7"
		}, {
			"Name" : "Kaixian",
			"Code" : "34"
		}, {
			"Name" : "Kaixian",
			"Code" : "85"
		}, {
			"Name" : "Liangping",
			"Code" : "28"
		}, {
			"Name" : "Nan'an",
			"Code" : "8"
		}, {
			"Name" : "Liangjiangxinqu",
			"Code" : "84"
		}, {
			"Name" : "Pengshui Miao-Tujia Autonomous Country",
			"Code" : "43"
		}, {
			"Name" : "Qianjiang",
			"Code" : "39"
		}, {
			"Name" : "Qijiang",
			"Code" : "22"
		}, {
			"Name" : "Rongchang",
			"Code" : "26"
		}, {
			"Name" : "Shapingba",
			"Code" : "6"
		}, {
			"Name" : "Shizhu Tujia Autonomous Country",
			"Code" : "40"
		}, {
			"Name" : "Shuangqiao",
			"Code" : "11"
		}, {
			"Name" : "Tongliang",
			"Code" : "24"
		}, {
			"Name" : "Tongnan",
			"Code" : "23"
		}, {
			"Name" : "Wansheng",
			"Code" : "10"
		}, {
			"Name" : "Wanzhou",
			"Code" : "1"
		}, {
			"Name" : "Wulong",
			"Code" : "32"
		}, {
			"Name" : "Wushan",
			"Code" : "37"
		}, {
			"Name" : "Wuxi",
			"Code" : "38"
		}, {
			"Name" : "Xiushan Tujia-Miao Autonomous Country",
			"Code" : "41"
		}, {
			"Name" : "Yongchuan",
			"Code" : "83"
		}, {
			"Name" : "Youyang Tujia-Miao Autonomous Country",
			"Code" : "42"
		}, {
			"Name" : "Yubei",
			"Code" : "12"
		}, {
			"Name" : "Yunyang",
			"Code" : "35"
		}, {
			"Name" : "Yuzhong",
			"Code" : "3"
		}, {
			"Name" : "Zhongxian",
			"Code" : "33"
		} ]
	}, {
		"Name" : "Fujian",
		"Code" : "35",
		"City" : [ {
			"Name" : "Fuzhou",
			"Code" : "1"
		}, {
			"Name" : "Longyan",
			"Code" : "8"
		}, {
			"Name" : "Nanping",
			"Code" : "7"
		}, {
			"Name" : "Ningde",
			"Code" : "9"
		}, {
			"Name" : "Putian",
			"Code" : "3"
		}, {
			"Name" : "Quanzhou",
			"Code" : "5"
		}, {
			"Name" : "Sanming",
			"Code" : "4"
		}, {
			"Name" : "Xiamen",
			"Code" : "2"
		}, {
			"Name" : "Zhangzhou",
			"Code" : "6"
		} ]
	}, {
		"Name" : "Gansu",
		"Code" : "62",
		"City" : [ {
			"Name" : "Baiyin",
			"Code" : "3"
		}, {
			"Name" : "Dingxi",
			"Code" : "11"
		}, {
			"Name" : "Gannan Tibetan Autonomous Prefecture",
			"Code" : "30"
		}, {
			"Name" : "Jiayuguan",
			"Code" : "5"
		}, {
			"Name" : "Jinchang",
			"Code" : "2"
		}, {
			"Name" : "Jiuquan",
			"Code" : "9"
		}, {
			"Name" : "Lanzhou",
			"Code" : "1"
		}, {
			"Name" : "Linxia Hui Autonomous Prefecture",
			"Code" : "29"
		}, {
			"Name" : "Longnan",
			"Code" : "12"
		}, {
			"Name" : "Pingliang",
			"Code" : "8"
		}, {
			"Name" : "Qingyang",
			"Code" : "10"
		}, {
			"Name" : "Tianshui",
			"Code" : "4"
		}, {
			"Name" : "Wuwei",
			"Code" : "6"
		}, {
			"Name" : "Zhangye",
			"Code" : "7"
		} ]
	}, {
		"Name" : "Guangdong",
		"Code" : "44",
		"City" : [ {
			"Name" : "Chaozhou",
			"Code" : "51"
		}, {
			"Name" : "Dongguan",
			"Code" : "19"
		}, {
			"Name" : "Foshan",
			"Code" : "6"
		}, {
			"Name" : "Guangzhou",
			"Code" : "1"
		}, {
			"Name" : "Heyuan",
			"Code" : "16"
		}, {
			"Name" : "Huizhou",
			"Code" : "13"
		}, {
			"Name" : "Jiangmen",
			"Code" : "7"
		}, {
			"Name" : "Jieyang",
			"Code" : "52"
		}, {
			"Name" : "Maoming",
			"Code" : "9"
		}, {
			"Name" : "Meizhou",
			"Code" : "14"
		}, {
			"Name" : "Qingyuan",
			"Code" : "18"
		}, {
			"Name" : "Shantou",
			"Code" : "5"
		}, {
			"Name" : "Shanwei",
			"Code" : "15"
		}, {
			"Name" : "Shaoguan",
			"Code" : "2"
		}, {
			"Name" : "Shenzhen",
			"Code" : "3"
		}, {
			"Name" : "Yangjiang",
			"Code" : "17"
		}, {
			"Name" : "Yunfu",
			"Code" : "53"
		}, {
			"Name" : "Zhanjiang",
			"Code" : "8"
		}, {
			"Name" : "Zhaoqing",
			"Code" : "12"
		}, {
			"Name" : "Zhongshan",
			"Code" : "20"
		}, {
			"Name" : "Zhuhai",
			"Code" : "4"
		} ]
	}, {
		"Name" : "Guangxi",
		"Code" : "45",
		"City" : [ {
			"Name" : "Baise",
			"Code" : "10"
		}, {
			"Name" : "Beihai",
			"Code" : "5"
		}, {
			"Name" : "Chongzuo",
			"Code" : "14"
		}, {
			"Name" : "Fangchenggang",
			"Code" : "6"
		}, {
			"Name" : "Guigang",
			"Code" : "8"
		}, {
			"Name" : "Guilin",
			"Code" : "3"
		}, {
			"Name" : "Hechi",
			"Code" : "12"
		}, {
			"Name" : "Hezhou",
			"Code" : "11"
		}, {
			"Name" : "Laibin",
			"Code" : "13"
		}, {
			"Name" : "Liuzhou",
			"Code" : "2"
		}, {
			"Name" : "Nanning",
			"Code" : "1"
		}, {
			"Name" : "Qinzhou",
			"Code" : "7"
		}, {
			"Name" : "Wuzhou",
			"Code" : "4"
		}, {
			"Name" : "Yulin",
			"Code" : "9"
		} ]
	}, {
		"Name" : "Guizhou",
		"Code" : "52",
		"City" : [ {
			"Name" : "Anshun",
			"Code" : "4"
		}, {
			"Name" : "Bijie",
			"Code" : "24"
		}, {
			"Name" : "Guiyang",
			"Code" : "1"
		}, {
			"Name" : "Liupanshui",
			"Code" : "2"
		}, {
			"Name" : "Qiandongnan Miao-Dong Autonomous Prefecture",
			"Code" : "26"
		}, {
			"Name" : "Qiannan Buyi Autonomous Prefecture",
			"Code" : "27"
		}, {
			"Name" : "Qianxinan Buyi-Miao Autonomous Prefecture",
			"Code" : "23"
		}, {
			"Name" : "Tongren",
			"Code" : "22"
		}, {
			"Name" : "Zunyi",
			"Code" : "3"
		} ]
	}, {
		"Name" : "Hainan",
		"Code" : "46",
		"City" : [ {
			"Name" : "Baisha Li Autonomous County",
			"Code" : "A30"
		}, {
			"Name" : "Baoting Li-Miao Autonomous County",
			"Code" : "A35"
		}, {
			"Name" : "Cengmai",
			"Code" : "A27"
		}, {
			"Name" : "Danzhou",
			"Code" : "93"
		}, {
			"Name" : "Ding'an",
			"Code" : "A25"
		}, {
			"Name" : "Dongfang",
			"Code" : "97"
		}, {
			"Name" : "Haikou",
			"Code" : "1"
		}, {
			"Name" : "Jiang Li Autonomous County",
			"Code" : "A31"
		}, {
			"Name" : "Ledong Li Autonomous County",
			"Code" : "A33"
		}, {
			"Name" : "Lingao",
			"Code" : "A28"
		}, {
			"Name" : "Lingshui Li Autonomous County",
			"Code" : "A34"
		}, {
			"Name" : "Qionghai",
			"Code" : "92"
		}, {
			"Name" : "Qiongzhong Li-Miao Autonomous County",
			"Code" : "A36"
		}, {
			"Name" : "Shansha",
			"Code" : "3"
		}, {
			"Name" : "Sanya",
			"Code" : "2"
		}, {
			"Name" : "Tunchang",
			"Code" : "A26"
		}, {
			"Name" : "Wanning",
			"Code" : "96"
		}, {
			"Name" : "Wenchang",
			"Code" : "95"
		}, {
			"Name" : "Wuzhishan",
			"Code" : "91"
		} ]
	}, {
		"Name" : "Hebei",
		"Code" : "13",
		"City" : [ {
			"Name" : "Baoding",
			"Code" : "6"
		}, {
			"Name" : "Cangzhou",
			"Code" : "9"
		}, {
			"Name" : "Chengde",
			"Code" : "8"
		}, {
			"Name" : "Handan",
			"Code" : "4"
		}, {
			"Name" : "Hengshui",
			"Code" : "11"
		}, {
			"Name" : "Langfang",
			"Code" : "10"
		}, {
			"Name" : "Qinhuangdao",
			"Code" : "3"
		}, {
			"Name" : "Shijiazhuang",
			"Code" : "1"
		}, {
			"Name" : "Tangshan",
			"Code" : "2"
		}, {
			"Name" : "Xingtai",
			"Code" : "5"
		}, {
			"Name" : "Zhangjiakou",
			"Code" : "7"
		} ]
	}, {
		"Name" : "Heilongjiang",
		"Code" : "23",
		"City" : [ {
			"Name" : "Da Hinggan Ling",
			"Code" : "27"
		}, {
			"Name" : "Daqing",
			"Code" : "6"
		}, {
			"Name" : "Harbin",
			"Code" : "1"
		}, {
			"Name" : "Hegang",
			"Code" : "4"
		}, {
			"Name" : "Heihe",
			"Code" : "11"
		}, {
			"Name" : "Jiamusi",
			"Code" : "8"
		}, {
			"Name" : "Jixi",
			"Code" : "3"
		}, {
			"Name" : "Mudanjiang",
			"Code" : "10"
		}, {
			"Name" : "Qiqihar",
			"Code" : "2"
		}, {
			"Name" : "Qitaihe",
			"Code" : "9"
		}, {
			"Name" : "Shuangyashan",
			"Code" : "5"
		}, {
			"Name" : "Suihua",
			"Code" : "12"
		}, {
			"Name" : "Yichun",
			"Code" : "7"
		} ]
	}, {
		"Name" : "Henan",
		"Code" : "41",
		"City" : [ {
			"Name" : "Anyang",
			"Code" : "5"
		}, {
			"Name" : "Hebi",
			"Code" : "6"
		}, {
			"Name" : "Jiaozuo",
			"Code" : "8"
		}, {
			"Name" : "Jiyuan",
			"Code" : "18"
		}, {
			"Name" : "Kaifeng",
			"Code" : "2"
		}, {
			"Name" : "Luohe",
			"Code" : "11"
		}, {
			"Name" : "Luoyang",
			"Code" : "3"
		}, {
			"Name" : "Nanyang",
			"Code" : "13"
		}, {
			"Name" : "Pingdingshan",
			"Code" : "4"
		}, {
			"Name" : "Puyang",
			"Code" : "9"
		}, {
			"Name" : "Sanmenxia",
			"Code" : "12"
		}, {
			"Name" : "Shangqiu",
			"Code" : "14"
		}, {
			"Name" : "Xinxiang",
			"Code" : "7"
		}, {
			"Name" : "Xinyang",
			"Code" : "15"
		}, {
			"Name" : "Xuchang",
			"Code" : "10"
		}, {
			"Name" : "Zhengzhou",
			"Code" : "1"
		}, {
			"Name" : "Zhoukou",
			"Code" : "16"
		}, {
			"Name" : "Zhumadian",
			"Code" : "17"
		} ]
	}, {
		"Name" : "Hongkong SAR",
		"Code" : "81"
	}, {
		"Name" : "Hubei",
		"Code" : "42",
		"City" : [ {
			"Name" : "Enshi Tujia-Miao Autonomous Prefecture",
			"Code" : "28"
		}, {
			"Name" : "Ezhou",
			"Code" : "7"
		}, {
			"Name" : "Huanggang",
			"Code" : "11"
		}, {
			"Name" : "Huangshi",
			"Code" : "2"
		}, {
			"Name" : "Jingmen",
			"Code" : "8"
		}, {
			"Name" : "Jingzhou",
			"Code" : "10"
		}, {
			"Name" : "Qianjiang",
			"Code" : "95"
		}, {
			"Name" : "Shennongjia",
			"Code" : "A21"
		}, {
			"Name" : "Shiyan",
			"Code" : "3"
		}, {
			"Name" : "Suizhou",
			"Code" : "13"
		}, {
			"Name" : "Tianmen",
			"Code" : "96"
		}, {
			"Name" : "Wuhan",
			"Code" : "1"
		}, {
			"Name" : "Xiangyang",
			"Code" : "6"
		}, {
			"Name" : "Xianning",
			"Code" : "12"
		}, {
			"Name" : "Xiantao",
			"Code" : "94"
		}, {
			"Name" : "Xiaogan",
			"Code" : "9"
		}, {
			"Name" : "Yichang",
			"Code" : "5"
		} ]
	}, {
		"Name" : "Hunan",
		"Code" : "43",
		"City" : [ {
			"Name" : "Changde",
			"Code" : "7"
		}, {
			"Name" : "Changsha",
			"Code" : "1"
		}, {
			"Name" : "Chenzhou",
			"Code" : "10"
		}, {
			"Name" : "Hengyang",
			"Code" : "4"
		}, {
			"Name" : "Huaihua",
			"Code" : "12"
		}, {
			"Name" : "Loudi",
			"Code" : "13"
		}, {
			"Name" : "Shaoyang",
			"Code" : "5"
		}, {
			"Name" : "Xiangtan",
			"Code" : "3"
		}, {
			"Name" : "Xiangxi Tujia-Miao Autonomous Prefecture",
			"Code" : "31"
		}, {
			"Name" : "Yiyang",
			"Code" : "9"
		}, {
			"Name" : "Yongzhou",
			"Code" : "11"
		}, {
			"Name" : "Yueyang",
			"Code" : "6"
		}, {
			"Name" : "Zhangjiajie",
			"Code" : "8"
		}, {
			"Name" : "Zhuzhou",
			"Code" : "2"
		} ]
	}, {
		"Name" : "Inner Mongolia",
		"Code" : "15",
		"City" : [ {
			"Name" : "Alxa",
			"Code" : "29"
		}, {
			"Name" : "Baotou",
			"Code" : "2"
		}, {
			"Name" : "Bayannur",
			"Code" : "8"
		}, {
			"Name" : "Chifeng",
			"Code" : "4"
		}, {
			"Name" : "Hohhot",
			"Code" : "1"
		}, {
			"Name" : "Hulun Buir",
			"Code" : "7"
		}, {
			"Name" : "Ordos",
			"Code" : "6"
		}, {
			"Name" : "Tongliao",
			"Code" : "5"
		}, {
			"Name" : "Ulan Qab",
			"Code" : "9"
		}, {
			"Name" : "Wuhai",
			"Code" : "3"
		}, {
			"Name" : "Xilin Gol",
			"Code" : "25"
		}, {
			"Name" : "Xing'an",
			"Code" : "22"
		} ]
	}, {
		"Name" : "Jiangsu",
		"Code" : "32",
		"City" : [ {
			"Name" : "Changzhou",
			"Code" : "4"
		}, {
			"Name" : "Huai'an",
			"Code" : "8"
		}, {
			"Name" : "Lianyungang",
			"Code" : "7"
		}, {
			"Name" : "Nanjing",
			"Code" : "1"
		}, {
			"Name" : "Nantong",
			"Code" : "6"
		}, {
			"Name" : "Suqian",
			"Code" : "13"
		}, {
			"Name" : "Suzhou",
			"Code" : "5"
		}, {
			"Name" : "Taizhou",
			"Code" : "12"
		}, {
			"Name" : "Wuxi",
			"Code" : "2"
		}, {
			"Name" : "Xuzhou",
			"Code" : "3"
		}, {
			"Name" : "Yancheng",
			"Code" : "9"
		}, {
			"Name" : "Yangzhou",
			"Code" : "10"
		}, {
			"Name" : "Zhenjiang",
			"Code" : "11"
		} ]
	}, {
		"Name" : "Jiangxi",
		"Code" : "36",
		"City" : [ {
			"Name" : "Fuzhou",
			"Code" : "10"
		}, {
			"Name" : "Ganzhou",
			"Code" : "7"
		}, {
			"Name" : "Ji'an",
			"Code" : "8"
		}, {
			"Name" : "Jingdezhen",
			"Code" : "2"
		}, {
			"Name" : "Jiujiang",
			"Code" : "4"
		}, {
			"Name" : "Nanchang",
			"Code" : "1"
		}, {
			"Name" : "Pingxiang",
			"Code" : "3"
		}, {
			"Name" : "Shangrao",
			"Code" : "11"
		}, {
			"Name" : "Xinyu",
			"Code" : "5"
		}, {
			"Name" : "Yichun",
			"Code" : "9"
		}, {
			"Name" : "Yingtan",
			"Code" : "6"
		} ]
	}, {
		"Name" : "Jilin",
		"Code" : "22",
		"City" : [ {
			"Name" : "Baicheng",
			"Code" : "8"
		}, {
			"Name" : "Baishan",
			"Code" : "6"
		}, {
			"Name" : "Changchun",
			"Code" : "1"
		}, {
			"Name" : "Jilin",
			"Code" : "2"
		}, {
			"Name" : "Liaoyuan",
			"Code" : "4"
		}, {
			"Name" : "Siping",
			"Code" : "3"
		}, {
			"Name" : "Songyuan",
			"Code" : "7"
		}, {
			"Name" : "Tonghua",
			"Code" : "5"
		}, {
			"Name" : "Yanbian Korean Autonomous Prefecture",
			"Code" : "24"
		} ]
	}, {
		"Name" : "Liaoning",
		"Code" : "21",
		"City" : [ {
			"Name" : "Anshan",
			"Code" : "3"
		}, {
			"Name" : "Benxi",
			"Code" : "5"
		}, {
			"Name" : "Chaoyang",
			"Code" : "13"
		}, {
			"Name" : "Dalian",
			"Code" : "2"
		}, {
			"Name" : "Dandong",
			"Code" : "6"
		}, {
			"Name" : "Fushun",
			"Code" : "4"
		}, {
			"Name" : "Fuxin",
			"Code" : "9"
		}, {
			"Name" : "Huludao",
			"Code" : "14"
		}, {
			"Name" : "Jinzhou",
			"Code" : "7"
		}, {
			"Name" : "Liaoyang",
			"Code" : "10"
		}, {
			"Name" : "Panjin",
			"Code" : "11"
		}, {
			"Name" : "Shenyang",
			"Code" : "1"
		}, {
			"Name" : "Tieling",
			"Code" : "12"
		}, {
			"Name" : "Yingkou",
			"Code" : "8"
		} ]
	}, {
		"Name" : "Macao SAR",
		"Code" : "82"
	}, {
		"Name" : "Ningxia",
		"Code" : "64",
		"City" : [ {
			"Name" : "Guyuan",
			"Code" : "4"
		}, {
			"Name" : "Shizuishan",
			"Code" : "2"
		}, {
			"Name" : "Wuzhong",
			"Code" : "3"
		}, {
			"Name" : "Yinchuan",
			"Code" : "1"
		}, {
			"Name" : "Zhongwei",
			"Code" : "5"
		} ]
	}, {
		"Name" : "Qinghai",
		"Code" : "63",
		"City" : [ {
			"Name" : "Guoluo Tibetan Autonomous Prefecture",
			"Code" : "26"
		}, {
			"Name" : "Haibei Tibetan Autonomous Prefecture",
			"Code" : "22"
		}, {
			"Name" : "Haidong",
			"Code" : "21"
		}, {
			"Name" : "Hainan Tibetan Autonomous Prefecture",
			"Code" : "25"
		}, {
			"Name" : "Haixi Mongol-Tibetan Autonomous Prefecture",
			"Code" : "28"
		}, {
			"Name" : "Huangnan Tibetan Autonomous Prefecture",
			"Code" : "23"
		}, {
			"Name" : "Xining",
			"Code" : "1"
		}, {
			"Name" : "Yushu Tibetan Autonomous Prefecture",
			"Code" : "27"
		} ]
	}, {
		"Name" : "Shaanxi",
		"Code" : "61",
		"City" : [ {
			"Name" : "Ankang",
			"Code" : "9"
		}, {
			"Name" : "Baoji",
			"Code" : "3"
		}, {
			"Name" : "Hanzhong",
			"Code" : "7"
		}, {
			"Name" : "Shangluo",
			"Code" : "10"
		}, {
			"Name" : "Tongchuan",
			"Code" : "2"
		}, {
			"Name" : "Weinan",
			"Code" : "5"
		}, {
			"Name" : "Xi'an",
			"Code" : "1"
		}, {
			"Name" : "Xianyang",
			"Code" : "4"
		}, {
			"Name" : "Yan'an",
			"Code" : "6"
		}, {
			"Name" : "Yulin",
			"Code" : "8"
		} ]
	}, {
		"Name" : "Shandong",
		"Code" : "37",
		"City" : [ {
			"Name" : "Binzhou",
			"Code" : "16"
		}, {
			"Name" : "Dezhou",
			"Code" : "14"
		}, {
			"Name" : "Dongying",
			"Code" : "5"
		}, {
			"Name" : "Heze",
			"Code" : "17"
		}, {
			"Name" : "Jinan",
			"Code" : "1"
		}, {
			"Name" : "Jining",
			"Code" : "8"
		}, {
			"Name" : "Laiwu",
			"Code" : "12"
		}, {
			"Name" : "Liaocheng",
			"Code" : "15"
		}, {
			"Name" : "Linyi",
			"Code" : "13"
		}, {
			"Name" : "Qingdao",
			"Code" : "2"
		}, {
			"Name" : "Rizhao",
			"Code" : "11"
		}, {
			"Name" : "Tai'an",
			"Code" : "9"
		}, {
			"Name" : "Weifang",
			"Code" : "7"
		}, {
			"Name" : "Weihai",
			"Code" : "10"
		}, {
			"Name" : "Yantai",
			"Code" : "6"
		}, {
			"Name" : "Zaozhuang",
			"Code" : "4"
		}, {
			"Name" : "Zibo",
			"Code" : "3"
		} ]
	}, {
		"Name" : "Shanghai",
		"Code" : "31",
		"City" : [ {
			"Name" : "Baoshan",
			"Code" : "13"
		}, {
			"Name" : "Changning",
			"Code" : "5"
		}, {
			"Name" : "Chongming",
			"Code" : "30"
		}, {
			"Name" : "Fengxian",
			"Code" : "26"
		}, {
			"Name" : "Hongkou",
			"Code" : "9"
		}, {
			"Name" : "Huangpu",
			"Code" : "1"
		}, {
			"Name" : "Jiading",
			"Code" : "14"
		}, {
			"Name" : "Jing'an",
			"Code" : "6"
		}, {
			"Name" : "Jinshan",
			"Code" : "16"
		}, {
			"Name" : "Luwan",
			"Code" : "3"
		}, {
			"Name" : "Minhang",
			"Code" : "12"
		}, {
			"Name" : "Pudong New Area",
			"Code" : "15"
		}, {
			"Name" : "Putuo",
			"Code" : "7"
		}, {
			"Name" : "Qingpu",
			"Code" : "29"
		}, {
			"Name" : "Songjiang",
			"Code" : "17"
		}, {
			"Name" : "Xuhui",
			"Code" : "4"
		}, {
			"Name" : "Yangpu",
			"Code" : "11"
		}, {
			"Name" : "Zhabei",
			"Code" : "8"
		} ]
	}, {
		"Name" : "Shanxi",
		"Code" : "14",
		"City" : [ {
			"Name" : "Changzhi",
			"Code" : "4"
		}, {
			"Name" : "Datong",
			"Code" : "2"
		}, {
			"Name" : "Jincheng",
			"Code" : "5"
		}, {
			"Name" : "Jinzhong",
			"Code" : "7"
		}, {
			"Name" : "Linfen",
			"Code" : "10"
		}, {
			"Name" : "luliang",
			"Code" : "11"
		}, {
			"Name" : "Shuozhou",
			"Code" : "6"
		}, {
			"Name" : "Taiyuan",
			"Code" : "1"
		}, {
			"Name" : "Xinzhou",
			"Code" : "9"
		}, {
			"Name" : "Yangquan",
			"Code" : "3"
		}, {
			"Name" : "Yuncheng",
			"Code" : "8"
		} ]
	}, {
		"Name" : "Sichuan",
		"Code" : "51",
		"City" : [ {
			"Name" : "Aba Tibetan-Qiang Autonomous Prefecture",
			"Code" : "32"
		}, {
			"Name" : "Bazhong",
			"Code" : "19"
		}, {
			"Name" : "Chengdu",
			"Code" : "1"
		}, {
			"Name" : "Dazhou",
			"Code" : "17"
		}, {
			"Name" : "Deyang",
			"Code" : "6"
		}, {
			"Name" : "Garze Tibetan Autonomous Prefecture",
			"Code" : "33"
		}, {
			"Name" : "Guang'an",
			"Code" : "16"
		}, {
			"Name" : "Guangyuan",
			"Code" : "8"
		}, {
			"Name" : "Leshan",
			"Code" : "11"
		}, {
			"Name" : "Liangshan Yi Autonomous Prefecture",
			"Code" : "34"
		}, {
			"Name" : "Luzhou",
			"Code" : "5"
		}, {
			"Name" : "Meishan",
			"Code" : "14"
		}, {
			"Name" : "Mianyang",
			"Code" : "7"
		}, {
			"Name" : "Nanchong",
			"Code" : "13"
		}, {
			"Name" : "Neijiang",
			"Code" : "10"
		}, {
			"Name" : "Panzhihua",
			"Code" : "4"
		}, {
			"Name" : "Suining",
			"Code" : "9"
		}, {
			"Name" : "Ya'an",
			"Code" : "18"
		}, {
			"Name" : "Yibin",
			"Code" : "15"
		}, {
			"Name" : "Zigong",
			"Code" : "3"
		}, {
			"Name" : "Ziyang",
			"Code" : "20"
		} ]
	}, {
		"Name" : "Taiwan",
		"Code" : "71",
		"City" : [ {
			"Name" : "Changhwa County",
			"Code" : "14"
		}, {
			"Name" : "Chiayi City",
			"Code" : "7"
		}, {
			"Name" : "Chiayi County",
			"Code" : "17"
		}, {
			"Name" : "Hsinchu City",
			"Code" : "6"
		}, {
			"Name" : "Hsinchu County",
			"Code" : "11"
		}, {
			"Name" : "Hualian County",
			"Code" : "23"
		}, {
			"Name" : "Ilan County",
			"Code" : "9"
		}, {
			"Name" : "Kaohsiung City",
			"Code" : "2"
		}, {
			"Name" : "Kaohsiung County",
			"Code" : "19"
		}, {
			"Name" : "Keelung City",
			"Code" : "3"
		}, {
			"Name" : "Miaoli County",
			"Code" : "12"
		}, {
			"Name" : "Nantou County",
			"Code" : "15"
		}, {
			"Name" : "Penghu County",
			"Code" : "21"
		}, {
			"Name" : "Pingtung County",
			"Code" : "20"
		}, {
			"Name" : "Taichung City",
			"Code" : "4"
		}, {
			"Name" : "Taichung County",
			"Code" : "13"
		}, {
			"Name" : "Tainan City",
			"Code" : "5"
		}, {
			"Name" : "Tainan County",
			"Code" : "18"
		}, {
			"Name" : "Taipei City",
			"Code" : "1"
		}, {
			"Name" : "Taipei County",
			"Code" : "8"
		}, {
			"Name" : "Taitung County",
			"Code" : "22"
		}, {
			"Name" : "Taoyuan County",
			"Code" : "10"
		}, {
			"Name" : "Yunnlin County",
			"Code" : "16"
		} ]
	}, {
		"Name" : "Tianjin",
		"Code" : "12",
		"City" : [ {
			"Name" : "Baodi",
			"Code" : "24"
		}, {
			"Name" : "Beichen",
			"Code" : "13"
		}, {
			"Name" : "Binghaixinqu",
			"Code" : "26"
		}, {
			"Name" : "Dongli",
			"Code" : "10"
		}, {
			"Name" : "Hebei",
			"Code" : "5"
		}, {
			"Name" : "Hedong",
			"Code" : "2"
		}, {
			"Name" : "Heping",
			"Code" : "1"
		}, {
			"Name" : "Hexi",
			"Code" : "3"
		}, {
			"Name" : "Hongqiao",
			"Code" : "6"
		}, {
			"Name" : "Jinghai",
			"Code" : "23"
		}, {
			"Name" : "Jinnan",
			"Code" : "12"
		}, {
			"Name" : "Jixian",
			"Code" : "25"
		}, {
			"Name" : "Nankai",
			"Code" : "4"
		}, {
			"Name" : "Ninghe",
			"Code" : "21"
		}, {
			"Name" : "Wuqing",
			"Code" : "22"
		}, {
			"Name" : "Xiqing",
			"Code" : "11"
		} ]
	}, {
		"Name" : "Tibet",
		"Code" : "54",
		"City" : [ {
			"Name" : "Lhasa",
			"Code" : "1"
		}, {
			"Name" : "Nagqu",
			"Code" : "24"
		}, {
			"Name" : "Ngari",
			"Code" : "25"
		}, {
			"Name" : "Nyingchi",
			"Code" : "26"
		}, {
			"Name" : "Qamdo",
			"Code" : "21"
		}, {
			"Name" : "Shannan",
			"Code" : "22"
		}, {
			"Name" : "Xigaze",
			"Code" : "23"
		} ]
	}, {
		"Name" : "Xinjiang",
		"Code" : "65",
		"City" : [ {
			"Name" : "Aksu",
			"Code" : "29"
		}, {
			"Name" : "Alar",
			"Code" : "92"
		}, {
			"Name" : "Altay",
			"Code" : "43"
		}, {
			"Name" : "Bayingolin Mongol Autonomous Prefecture",
			"Code" : "28"
		}, {
			"Name" : "Beitun",
			"Code" : "95"
		}, {
			"Name" : "Bortala Mongol Autonomous Prefecture",
			"Code" : "27"
		}, {
			"Name" : "Changji Hui Autonomous Prefecture",
			"Code" : "23"
		}, {
			"Name" : "Hami",
			"Code" : "22"
		}, {
			"Name" : "Hotan",
			"Code" : "32"
		}, {
			"Name" : "Ili Kazakh Autonomous Prefecture",
			"Code" : "40"
		}, {
			"Name" : "Karamay",
			"Code" : "2"
		}, {
			"Name" : "Kashi",
			"Code" : "31"
		}, {
			"Name" : "Kizilsu Kirgiz Autonomous Prefecture",
			"Code" : "30"
		}, {
			"Name" : "Shihezi",
			"Code" : "91"
		}, {
			"Name" : "Tacheng",
			"Code" : "42"
		}, {
			"Name" : "Tumsuk",
			"Code" : "93"
		}, {
			"Name" : "Turpan",
			"Code" : "21"
		}, {
			"Name" : "Urumqi",
			"Code" : "1"
		}, {
			"Name" : "Wujiaqu",
			"Code" : "94"
		} ]
	}, {
		"Name" : "Yunnan",
		"Code" : "53",
		"City" : [ {
			"Name" : "Baoshan",
			"Code" : "5"
		}, {
			"Name" : "Chuxiong Yi Autonomous Prefecture",
			"Code" : "23"
		}, {
			"Name" : "Dali Bai Autonomous Prefecture",
			"Code" : "29"
		}, {
			"Name" : "Dehong Dai-Jingpo Autonomous Prefecture",
			"Code" : "31"
		}, {
			"Name" : "Diqing Tibetan Autonomous Prefecture",
			"Code" : "34"
		}, {
			"Name" : "Honghe Hani-Yi Autonomous Prefecture",
			"Code" : "25"
		}, {
			"Name" : "Kunming",
			"Code" : "1"
		}, {
			"Name" : "Lijiang",
			"Code" : "7"
		}, {
			"Name" : "Lincang",
			"Code" : "9"
		}, {
			"Name" : "Nujiang Lisu Autonomous Prefecture",
			"Code" : "33"
		}, {
			"Name" : "Pu'er",
			"Code" : "8"
		}, {
			"Name" : "Qujing",
			"Code" : "3"
		}, {
			"Name" : "Wenshan Zhuang-Miao Autonomous Prefecture",
			"Code" : "26"
		}, {
			"Name" : "Xishuangbanna Dai Autonomous Prefecture",
			"Code" : "28"
		}, {
			"Name" : "Yuxi",
			"Code" : "4"
		}, {
			"Name" : "Zhaotong",
			"Code" : "6"
		} ]
	}, {
		"Name" : "Zhejiang",
		"Code" : "33",
		"City" : [ {
			"Name" : "Hangzhou",
			"Code" : "1"
		}, {
			"Name" : "Huzhou",
			"Code" : "5"
		}, {
			"Name" : "Jiaxing",
			"Code" : "4"
		}, {
			"Name" : "Jinhua",
			"Code" : "7"
		}, {
			"Name" : "Lishui",
			"Code" : "11"
		}, {
			"Name" : "Ningbo",
			"Code" : "2"
		}, {
			"Name" : "Quzhou",
			"Code" : "8"
		}, {
			"Name" : "Shaoxing",
			"Code" : "6"
		}, {
			"Name" : "Taizhou",
			"Code" : "10"
		}, {
			"Name" : "Wenzhou",
			"Code" : "3"
		}, {
			"Name" : "Zhoushan",
			"Code" : "9"
		} ]
	} ]
}, {
	"Name" : "Canada",
	"Code" : "124",
	"State" : [ {
		"Name" : "Abbotsford",
		"Code" : "ABB"
	}, {
		"Name" : "Barrie",
		"Code" : "BAR"
	}, {
		"Name" : "Brampton",
		"Code" : "BRP"
	}, {
		"Name" : "Calgary",
		"Code" : "CAL"
	}, {
		"Name" : "Cape Breton",
		"Code" : "CBR"
	}, {
		"Name" : "Charlottetown",
		"Code" : "CHA"
	}, {
		"Name" : "Edmonton",
		"Code" : "EDM"
	}, {
		"Name" : "Fredericton",
		"Code" : "FRE"
	}, {
		"Name" : "Guelph",
		"Code" : "GLP"
	}, {
		"Name" : "Halifax",
		"Code" : "HAL"
	}, {
		"Name" : "Hamilton",
		"Code" : "HAM"
	}, {
		"Name" : "Iqaluit",
		"Code" : "IQL"
	}, {
		"Name" : "Kelowna",
		"Code" : "KWL"
	}, {
		"Name" : "Kingston",
		"Code" : "KGN"
	}, {
		"Name" : "London",
		"Code" : "LOD"
	}, {
		"Name" : "Montreal",
		"Code" : "MTR"
	}, {
		"Name" : "Oshawa",
		"Code" : "OSH"
	}, {
		"Name" : "Ottawa",
		"Code" : "OTT"
	}, {
		"Name" : "Quebec",
		"Code" : "QUE"
	}, {
		"Name" : "Regina",
		"Code" : "REG"
	}, {
		"Name" : "Saint-John's",
		"Code" : "SJB"
	}, {
		"Name" : "Saskatoon",
		"Code" : "SAK"
	}, {
		"Name" : "Sherbrooke",
		"Code" : "SBE"
	}, {
		"Name" : "St. Catharines",
		"Code" : "SCA"
	}, {
		"Name" : "Sudbury",
		"Code" : "SUD"
	}, {
		"Name" : "Thunder Bay",
		"Code" : "THU"
	}, {
		"Name" : "Toronto",
		"Code" : "TOR"
	}, {
		"Name" : "Trois-Rivieres",
		"Code" : "TRR"
	}, {
		"Name" : "Vancouver",
		"Code" : "VAN"
	}, {
		"Name" : "Victoria",
		"Code" : "VIC"
	}, {
		"Name" : "Whitehorse",
		"Code" : "YXY"
	}, {
		"Name" : "Windsor",
		"Code" : "WDR"
	}, {
		"Name" : "Winnipeg",
		"Code" : "WNP"
	}, {
		"Name" : "Yellowknife",
		"Code" : "YZF"
	} ]
}, {
	"Name" : "Afghanistan",
	"Code" : "093",
	"State" : [ {
		"Name" : "Herat",
		"Code" : "HEA"
	}, {
		"Name" : "Kabul",
		"Code" : "KBL"
	}, {
		"Name" : "Kandahar",
		"Code" : "KDH"
	}, {
		"Name" : "Mazar-i Sharif",
		"Code" : "MZR"
	} ]
}, {
	"Name" : "Aland lslands",
	"Code" : "ALA"
}, {
	"Name" : "Albania",
	"Code" : "355",
	"State" : [ {
		"Name" : "Berat",
		"Code" : "BR"
	}, {
		"Name" : "Diber",
		"Code" : "DI"
	}, {
		"Name" : "Durres",
		"Code" : "DR"
	}, {
		"Name" : "Elbasan",
		"Code" : "EL"
	}, {
		"Name" : "Fier",
		"Code" : "FR"
	}, {
		"Name" : "Gjirokaster",
		"Code" : "GJ"
	}, {
		"Name" : "Korce",
		"Code" : "KO"
	}, {
		"Name" : "Kukes",
		"Code" : "KU"
	}, {
		"Name" : "Lezhe",
		"Code" : "LE"
	}, {
		"Name" : "Shkoder",
		"Code" : "SH"
	}, {
		"Name" : "Tirane",
		"Code" : "TR"
	}, {
		"Name" : "Vlore",
		"Code" : "VL"
	} ]
}, {
	"Name" : "Algeria",
	"Code" : "213",
	"State" : [ {
		"Name" : "Adrar",
		"Code" : "ADR"
	}, {
		"Name" : "Ain Defla",
		"Code" : "ADE"
	}, {
		"Name" : "Ain Temouchent",
		"Code" : "ATE"
	}, {
		"Name" : "Alger",
		"Code" : "ALG"
	}, {
		"Name" : "Annaba",
		"Code" : "AAE"
	}, {
		"Name" : "Batna",
		"Code" : "BAT"
	}, {
		"Name" : "Bechar",
		"Code" : "BEC"
	}, {
		"Name" : "Bejaia",
		"Code" : "BJA"
	}, {
		"Name" : "Biskra",
		"Code" : "BIS"
	}, {
		"Name" : "Blida",
		"Code" : "BLI"
	}, {
		"Name" : "Bordj Bou Arreridj",
		"Code" : "BOR"
	}, {
		"Name" : "Bouira",
		"Code" : "BOA"
	}, {
		"Name" : "Boumerdes",
		"Code" : "BOU"
	}, {
		"Name" : "Chlef",
		"Code" : "CHL"
	}, {
		"Name" : "Constantine",
		"Code" : "CZL"
	}, {
		"Name" : "Djelfa",
		"Code" : "DJE"
	}, {
		"Name" : "El Bayadh",
		"Code" : "EBA"
	}, {
		"Name" : "El Oued",
		"Code" : "EOU"
	}, {
		"Name" : "El Tarf",
		"Code" : "ETA"
	}, {
		"Name" : "Ghardaia",
		"Code" : "GHA"
	}, {
		"Name" : "Guelma",
		"Code" : "GUE"
	}, {
		"Name" : "Illizi",
		"Code" : "ILL"
	}, {
		"Name" : "Jijel",
		"Code" : "JIJ"
	}, {
		"Name" : "Khenchela",
		"Code" : "KHE"
	}, {
		"Name" : "Laghouat",
		"Code" : "LAG"
	}, {
		"Name" : "Mascara",
		"Code" : "MUA"
	}, {
		"Name" : "Medea",
		"Code" : "MED"
	}, {
		"Name" : "Mila",
		"Code" : "MIL"
	}, {
		"Name" : "Mostaganem",
		"Code" : "MOS"
	}, {
		"Name" : "Msila",
		"Code" : "MSI"
	}, {
		"Name" : "Naama",
		"Code" : "NAA"
	}, {
		"Name" : "Oran",
		"Code" : "ORA"
	}, {
		"Name" : "Ouargla",
		"Code" : "OUA"
	}, {
		"Name" : "Oum el Bouaghi",
		"Code" : "OEB"
	}, {
		"Name" : "Relizane",
		"Code" : "REL"
	}, {
		"Name" : "Saida",
		"Code" : "SAI"
	}, {
		"Name" : "Setif",
		"Code" : "SET"
	}, {
		"Name" : "Sidi Bel Abbes",
		"Code" : "SBA"
	}, {
		"Name" : "Skikda",
		"Code" : "SKI"
	}, {
		"Name" : "Souk Ahras",
		"Code" : "SAH"
	}, {
		"Name" : "Tamanghasset",
		"Code" : "TAM"
	}, {
		"Name" : "Tebessa",
		"Code" : "TEB"
	}, {
		"Name" : "Tiaret",
		"Code" : "TIA"
	}, {
		"Name" : "Tindouf",
		"Code" : "TIN"
	}, {
		"Name" : "Tipaza",
		"Code" : "TIP"
	}, {
		"Name" : "Tissemsilt",
		"Code" : "TIS"
	}, {
		"Name" : "Tizi Ouzou",
		"Code" : "IOU"
	}, {
		"Name" : "Tlemcen",
		"Code" : "TLE"
	} ]
}, {
	"Name" : "American Samoa",
	"Code" : "684",
	"State" : [ {
		"Name" : "Aana",
		"Code" : "AAN"
	}, {
		"Name" : "Aigaile Tai",
		"Code" : "AIT"
	}, {
		"Name" : "Atua",
		"Code" : "ATU"
	}, {
		"Name" : "Faasaleleaga",
		"Code" : "FAA"
	}, {
		"Name" : "Gagaemauga",
		"Code" : "GMG"
	}, {
		"Name" : "Gagaifomauga",
		"Code" : "GFG"
	}, {
		"Name" : "Palauli",
		"Code" : "PAL"
	}, {
		"Name" : "Satupaitea",
		"Code" : "SAT"
	}, {
		"Name" : "Savaii",
		"Code" : "SAV"
	}, {
		"Name" : "Tuamasaga",
		"Code" : "TUA"
	}, {
		"Name" : "Upolu",
		"Code" : "UPO"
	}, {
		"Name" : "Vaao Fonoti",
		"Code" : "VAF"
	}, {
		"Name" : "Vaisigano",
		"Code" : "VAI"
	} ]
}, {
	"Name" : "Andorra",
	"Code" : "376",
	"State" : [ {
		"Name" : "Andorra la Vella",
		"Code" : "7"
	}, {
		"Name" : "Canillo",
		"Code" : "2"
	}, {
		"Name" : "Encamp",
		"Code" : "3"
	}, {
		"Name" : "Escaldes-Engordany",
		"Code" : "8"
	}, {
		"Name" : "La Massana",
		"Code" : "4"
	}, {
		"Name" : "Ordino",
		"Code" : "5"
	}, {
		"Name" : "Sant Julia de Laria",
		"Code" : "6"
	} ]
}, {
	"Name" : "Angola",
	"Code" : "244",
	"State" : [ {
		"Name" : "Bengo",
		"Code" : "BGO"
	}, {
		"Name" : "Benguela",
		"Code" : "BGU"
	}, {
		"Name" : "Bie",
		"Code" : "BIE"
	}, {
		"Name" : "Cabinda",
		"Code" : "CAB"
	}, {
		"Name" : "Cuando Cubango",
		"Code" : "CCU"
	}, {
		"Name" : "Cuanza Norte",
		"Code" : "CNO"
	}, {
		"Name" : "Cuanza Sul",
		"Code" : "CUS"
	}, {
		"Name" : "Cunene",
		"Code" : "CNN"
	}, {
		"Name" : "Huambo",
		"Code" : "HUA"
	}, {
		"Name" : "Huila",
		"Code" : "HUI"
	}, {
		"Name" : "Luanda",
		"Code" : "LUA"
	}, {
		"Name" : "Lunda Norte",
		"Code" : "LNO"
	}, {
		"Name" : "Lunda Sul",
		"Code" : "LSU"
	}, {
		"Name" : "Malanje",
		"Code" : "MAL"
	}, {
		"Name" : "Moxico",
		"Code" : "MOX"
	}, {
		"Name" : "Namibe",
		"Code" : "NAM"
	}, {
		"Name" : "Uige",
		"Code" : "UIG"
	}, {
		"Name" : "Zaire",
		"Code" : "ZAI"
	} ]
}, {
	"Name" : "Anguilla",
	"Code" : "126"
}, {
	"Name" : "Antarctica",
	"Code" : "672"
}, {
	"Name" : "Antigua and Barbuda",
	"Code" : "128"
}, {
	"Name" : "Argentina",
	"Code" : "054",
	"State" : [ {
		"Name" : "Bahia Blanca",
		"Code" : "BHI"
	}, {
		"Name" : "Buenos Aires",
		"Code" : "BUE"
	}, {
		"Name" : "Catamarca",
		"Code" : "CTC"
	}, {
		"Name" : "Comodoro Rivadavia",
		"Code" : "CRD"
	}, {
		"Name" : "Concordia",
		"Code" : "COC"
	}, {
		"Name" : "Cordoba",
		"Code" : "COR"
	}, {
		"Name" : "Corrientes",
		"Code" : "CNQ"
	}, {
		"Name" : "Formosa",
		"Code" : "FMA"
	}, {
		"Name" : "Jujuy",
		"Code" : "JUJ"
	}, {
		"Name" : "La Plata",
		"Code" : "LPG"
	}, {
		"Name" : "La Rioja",
		"Code" : "IRJ"
	}, {
		"Name" : "Mar del Plata",
		"Code" : "MDQ"
	}, {
		"Name" : "Mendoza",
		"Code" : "MDZ"
	}, {
		"Name" : "Neuquen",
		"Code" : "NQN"
	}, {
		"Name" : "Parana",
		"Code" : "PRA"
	}, {
		"Name" : "Posadas",
		"Code" : "PSS"
	}, {
		"Name" : "Rawson",
		"Code" : "RWO"
	}, {
		"Name" : "Resistencia",
		"Code" : "RES"
	}, {
		"Name" : "Rio Cuarto",
		"Code" : "RCU"
	}, {
		"Name" : "Rio Gallegos",
		"Code" : "RGL"
	}, {
		"Name" : "Rosario",
		"Code" : "ROS"
	}, {
		"Name" : "Salta",
		"Code" : "SLA"
	}, {
		"Name" : "San Juan",
		"Code" : "UAQ"
	}, {
		"Name" : "San Miguel de Tucuman",
		"Code" : "SMC"
	}, {
		"Name" : "San Nicolas",
		"Code" : "SNS"
	}, {
		"Name" : "San Rafael",
		"Code" : "AFA"
	}, {
		"Name" : "San Luis",
		"Code" : "LUQ"
	}, {
		"Name" : "Santa Fe",
		"Code" : "SFN"
	}, {
		"Name" : "Santa Rosa",
		"Code" : "RSA"
	}, {
		"Name" : "Santiago del Estero",
		"Code" : "SDE"
	}, {
		"Name" : "Trelew",
		"Code" : "REL"
	}, {
		"Name" : "Ushuaia",
		"Code" : "USH"
	}, {
		"Name" : "Viedma",
		"Code" : "VDM"
	}, {
		"Name" : "Villa Krause",
		"Code" : "VLK"
	} ]
}, {
	"Name" : "Armenia",
	"Code" : "374",
	"State" : [ {
		"Name" : "Aragacotn",
		"Code" : "AGT"
	}, {
		"Name" : "Ararat",
		"Code" : "ARA"
	}, {
		"Name" : "Armavir",
		"Code" : "ARM"
	}, {
		"Name" : "Gelarkunik",
		"Code" : "GEG"
	}, {
		"Name" : "Kotayk",
		"Code" : "KOT"
	}, {
		"Name" : "Lorri",
		"Code" : "LOR"
	}, {
		"Name" : "Shirak",
		"Code" : "SHI"
	}, {
		"Name" : "Syunik",
		"Code" : "SYU"
	}, {
		"Name" : "Tavus",
		"Code" : "TAV"
	}, {
		"Name" : "VayocJor",
		"Code" : "VAY"
	}, {
		"Name" : "Yerevan",
		"Code" : "EVN"
	} ]
}, {
	"Name" : "Aruba",
	"Code" : "297"
}, {
	"Name" : "Ascension Island",
	"Code" : "ASC"
}, {
	"Name" : "Australia",
	"Code" : "061",
	"State" : [ {
		"Name" : "Canberra",
		"Code" : "ACT",
		"City" : {
			"Name" : "Canberra",
			"Code" : "CBR"
		}
	}, {
		"Name" : "New South Wales",
		"Code" : "NSW",
		"City" : [ {
			"Name" : "Newcastle",
			"Code" : "NTL"
		}, {
			"Name" : "Sydney",
			"Code" : "HBS"
		}, {
			"Name" : "Wollongong",
			"Code" : "WOL"
		} ]
	}, {
		"Name" : "Northern Territory",
		"Code" : "NT",
		"City" : [ {
			"Name" : "Darwin",
			"Code" : "DRW"
		}, {
			"Name" : "Palmerston",
			"Code" : "PAL"
		} ]
	}, {
		"Name" : "Queensland",
		"Code" : "QLD",
		"City" : [ {
			"Name" : "Brisbane",
			"Code" : "BNE"
		}, {
			"Name" : "Cairns",
			"Code" : "CNS"
		}, {
			"Name" : "Caloundra",
			"Code" : "CUD"
		}, {
			"Name" : "Gold Coast",
			"Code" : "OOL"
		}, {
			"Name" : "Toowoomba",
			"Code" : "TWB"
		}, {
			"Name" : "Townsville",
			"Code" : "TSV"
		} ]
	}, {
		"Name" : "South Australia",
		"Code" : "SA",
		"City" : [ {
			"Name" : "Adelaide",
			"Code" : "ADL"
		}, {
			"Name" : "Mount Gambier",
			"Code" : "MGB"
		}, {
			"Name" : "Murray Bridge",
			"Code" : "MYB"
		}, {
			"Name" : "Port Augusta",
			"Code" : "PUG"
		}, {
			"Name" : "Port Lincoln",
			"Code" : "PLO"
		}, {
			"Name" : "Port Pirie",
			"Code" : "PPI"
		}, {
			"Name" : "Victor Harbor",
			"Code" : "VHA"
		}, {
			"Name" : "Whyalla",
			"Code" : "WAY"
		} ]
	}, {
		"Name" : "Tasmania",
		"Code" : "TAS",
		"City" : [ {
			"Name" : "Burnie",
			"Code" : "BWT"
		}, {
			"Name" : "Devonport",
			"Code" : "DPO"
		}, {
			"Name" : "Hobart",
			"Code" : "HBA"
		}, {
			"Name" : "Launceston",
			"Code" : "LST"
		} ]
	}, {
		"Name" : "Victoria",
		"Code" : "VIC",
		"City" : [ {
			"Name" : "Geelong",
			"Code" : "GEX"
		}, {
			"Name" : "Melbourne",
			"Code" : "MEL"
		} ]
	}, {
		"Name" : "Western Australia",
		"Code" : "WA",
		"City" : [ {
			"Name" : "Albany",
			"Code" : "ALH"
		}, {
			"Name" : "Bunbury",
			"Code" : "BUY"
		}, {
			"Name" : "Fremantle",
			"Code" : "FRE"
		}, {
			"Name" : "Geraldton",
			"Code" : "GET"
		}, {
			"Name" : "Kalgoorlie",
			"Code" : "KGI"
		}, {
			"Name" : "Mandurah",
			"Code" : "MDU"
		}, {
			"Name" : "Perth",
			"Code" : "PER"
		} ]
	} ]
}, {
	"Name" : "Austria",
	"Code" : "043",
	"State" : [ {
		"Name" : "Burgenland",
		"Code" : "BUR"
	}, {
		"Name" : "Carinthia",
		"Code" : "CAT"
	}, {
		"Name" : "Lower Austria",
		"Code" : "LAU"
	}, {
		"Name" : "Salzburg",
		"Code" : "SZG"
	}, {
		"Name" : "Styria",
		"Code" : "STY"
	}, {
		"Name" : "Tyrol",
		"Code" : "TYR"
	}, {
		"Name" : "Upper Austria",
		"Code" : "UAU"
	}, {
		"Name" : "Vienna",
		"Code" : "VDD"
	}, {
		"Name" : "Vorarlberg",
		"Code" : "VOR"
	} ]
}, {
	"Name" : "Azerbaijan",
	"Code" : "994",
	"State" : [ {
		"Name" : "Abseron",
		"Code" : "ABS"
	}, {
		"Name" : "Ganca",
		"Code" : "GA"
	}, {
		"Name" : "Kalbacar",
		"Code" : "KAL"
	}, {
		"Name" : "Lankaran",
		"Code" : "LAN"
	}, {
		"Name" : "Mil-Qarabax",
		"Code" : "MQA"
	}, {
		"Name" : "Mugan-Salyan",
		"Code" : "MSA"
	}, {
		"Name" : "Nagorni-Qarabax",
		"Code" : "NQA"
	}, {
		"Name" : "Naxcivan",
		"Code" : "NX"
	}, {
		"Name" : "Priaraks",
		"Code" : "PRI"
	}, {
		"Name" : "Qazax",
		"Code" : "QAZ"
	}, {
		"Name" : "Saki",
		"Code" : "SA"
	}, {
		"Name" : "Sirvan",
		"Code" : "SIR"
	}, {
		"Name" : "Sumqayit",
		"Code" : "SMC"
	}, {
		"Name" : "Xacmaz",
		"Code" : "XAC"
	} ]
}, {
	"Name" : "Bahamas",
	"Code" : "BHS"
}, {
	"Name" : "Bahrain",
	"Code" : "973",
	"State" : [ {
		"Name" : "Al-Gharbiyah",
		"Code" : "10"
	}, {
		"Name" : "Al-Hadd",
		"Code" : "1"
	}, {
		"Name" : "Al-Manamah",
		"Code" : "3"
	}, {
		"Name" : "Al-Muharraq",
		"Code" : "2"
	}, {
		"Name" : "Al-Wusta",
		"Code" : "7"
	}, {
		"Name" : "Ar-Rifa",
		"Code" : "9"
	}, {
		"Name" : "Ash-Shamaliyah",
		"Code" : "5"
	}, {
		"Name" : "Hammad",
		"Code" : "12"
	}, {
		"Name" : "Isa",
		"Code" : "8"
	} ]
}, {
	"Name" : "Bangladesh",
	"Code" : "880",
	"State" : [ {
		"Name" : "Chittagong",
		"Code" : "CGP"
	}, {
		"Name" : "Dhaka",
		"Code" : "DAC"
	}, {
		"Name" : "Khulna",
		"Code" : "KHL"
	} ]
}, {
	"Name" : "Barbados",
	"Code" : "246"
}, {
	"Name" : "Belgium",
	"Code" : "032",
	"State" : [ {
		"Name" : "Antwerpen",
		"Code" : "VAN"
	}, {
		"Name" : "Brabant-Wallone",
		"Code" : "WBR"
	}, {
		"Name" : "Brussels",
		"Code" : "BRU"
	}, {
		"Name" : "Hainaut",
		"Code" : "WHT"
	}, {
		"Name" : "Liege",
		"Code" : "WLG"
	}, {
		"Name" : "Limburg",
		"Code" : "VLI"
	}, {
		"Name" : "Luxembourg",
		"Code" : "WLX"
	}, {
		"Name" : "Namur",
		"Code" : "WNA"
	}, {
		"Name" : "Oost-Vlaanderen",
		"Code" : "VOV"
	}, {
		"Name" : "Vlaams-Brabant",
		"Code" : "VBR"
	}, {
		"Name" : "West-Vlaanderen",
		"Code" : "VWV"
	} ]
}, {
	"Name" : "Belize",
	"Code" : "501",
	"State" : [ {
		"Name" : "Belize",
		"Code" : "BZ"
	}, {
		"Name" : "Cayo",
		"Code" : "CY"
	}, {
		"Name" : "Corozal",
		"Code" : "CR"
	}, {
		"Name" : "Orange Walk",
		"Code" : "OW"
	}, {
		"Name" : "Stann Creek",
		"Code" : "SC"
	}, {
		"Name" : "Toledo",
		"Code" : "TO"
	} ]
}, {
	"Name" : "Benin",
	"Code" : "229",
	"State" : [ {
		"Name" : "Alibori",
		"Code" : "AL"
	}, {
		"Name" : "Atakora",
		"Code" : "AK"
	}, {
		"Name" : "Atlantique",
		"Code" : "AQ"
	}, {
		"Name" : "Bohicon",
		"Code" : "BOH"
	}, {
		"Name" : "Borgou",
		"Code" : "BO"
	}, {
		"Name" : "Collines",
		"Code" : "CO"
	}, {
		"Name" : "Donga",
		"Code" : "DO"
	}, {
		"Name" : "Kouffo",
		"Code" : "KO"
	}, {
		"Name" : "Littoral",
		"Code" : "LI"
	}, {
		"Name" : "Mono",
		"Code" : "MO"
	}, {
		"Name" : "Oueme",
		"Code" : "OU"
	}, {
		"Name" : "Plateau",
		"Code" : "PL"
	}, {
		"Name" : "Zou",
		"Code" : "ZO"
	} ]
}, {
	"Name" : "Bermuda",
	"Code" : "441"
}, {
	"Name" : "Bhutan",
	"Code" : "BTN"
}, {
	"Name" : "Bolivia",
	"Code" : "591",
	"State" : [ {
		"Name" : "Chuquisaca",
		"Code" : "CHU"
	}, {
		"Name" : "Cochabamba",
		"Code" : "CBB"
	}, {
		"Name" : "El Alto",
		"Code" : "ALT"
	}, {
		"Name" : "El Beni",
		"Code" : "BEN"
	}, {
		"Name" : "La Paz",
		"Code" : "LPB"
	}, {
		"Name" : "Oruro",
		"Code" : "ORU"
	}, {
		"Name" : "Pando",
		"Code" : "PAN"
	}, {
		"Name" : "Potosi",
		"Code" : "POI"
	}, {
		"Name" : "Quillacollo",
		"Code" : "QUI"
	}, {
		"Name" : "Sacaba",
		"Code" : "SAC"
	}, {
		"Name" : "Santa Cruz",
		"Code" : "SRZ"
	}, {
		"Name" : "Tarija",
		"Code" : "TJA"
	} ]
}, {
	"Name" : "Bosnia and Herzegovina",
	"Code" : "387",
	"State" : [ {
		"Name" : "Bosansko-Podrinjski",
		"Code" : "FBP"
	}, {
		"Name" : "Hercegovacko-Bosanski",
		"Code" : "FHB"
	}, {
		"Name" : "Hercegovacko-Neretvanski",
		"Code" : "FHN"
	}, {
		"Name" : "Posavski",
		"Code" : "FPO"
	}, {
		"Name" : "Sarajevo",
		"Code" : "FSA"
	}, {
		"Name" : "Srednjo-Bosanski",
		"Code" : "FSB"
	}, {
		"Name" : "Tomislavgrad",
		"Code" : "FTO"
	}, {
		"Name" : "Tuzlanski-Podrinjski",
		"Code" : "FTU"
	}, {
		"Name" : "Unsko-Sanski",
		"Code" : "FUS"
	}, {
		"Name" : "Zapadno-Hercegovaki",
		"Code" : "FZH"
	}, {
		"Name" : "Zenicko-Dobojski",
		"Code" : "FZE"
	} ]
}, {
	"Name" : "Botswana",
	"Code" : "267"
}, {
	"Name" : "Bouvet Island",
	"Code" : "BVT"
}, {
	"Name" : "Brazil",
	"Code" : "055",
	"State" : [ {
		"Name" : "Acre",
		"Code" : "AC"
	}, {
		"Name" : "Alagoas",
		"Code" : "AL"
	}, {
		"Name" : "Amapa",
		"Code" : "AP"
	}, {
		"Name" : "Amazonas",
		"Code" : "AM"
	}, {
		"Name" : "Bahia",
		"Code" : "BA"
	}, {
		"Name" : "Brasilia",
		"Code" : "BSB"
	}, {
		"Name" : "Ceara",
		"Code" : "CE"
	}, {
		"Name" : "Espirito Santo",
		"Code" : "ES"
	}, {
		"Name" : "Goias",
		"Code" : "GO"
	}, {
		"Name" : "Maranhao",
		"Code" : "MA"
	}, {
		"Name" : "Mato Grosso",
		"Code" : "MT"
	}, {
		"Name" : "Mato Grosso do Sul",
		"Code" : "MS"
	}, {
		"Name" : "Minas Gerais",
		"Code" : "MG"
	}, {
		"Name" : "Para",
		"Code" : "PA"
	}, {
		"Name" : "Paraiba",
		"Code" : "PB"
	}, {
		"Name" : "Parana",
		"Code" : "PR"
	}, {
		"Name" : "Pernambuco",
		"Code" : "PE"
	}, {
		"Name" : "Piaui",
		"Code" : "PI"
	}, {
		"Name" : "Rio de Janeiro",
		"Code" : "RJ"
	}, {
		"Name" : "Rio Grande do Norte",
		"Code" : "RN"
	}, {
		"Name" : "Rio Grande do Sul",
		"Code" : "RS"
	}, {
		"Name" : "Rondonia",
		"Code" : "RO"
	}, {
		"Name" : "Roraima",
		"Code" : "RR"
	}, {
		"Name" : "Santa Catarina",
		"Code" : "SC"
	}, {
		"Name" : "Sao Paulo",
		"Code" : "SP"
	}, {
		"Name" : "Sergipe",
		"Code" : "SE"
	}, {
		"Name" : "Tocantins",
		"Code" : "TO"
	} ]
}, {
	"Name" : "British Indian Ocean Territory",
	"Code" : "IOT"
}, {
	"Name" : "Brunei",
	"Code" : "673"
}, {
	"Name" : "Bulgaria",
	"Code" : "359",
	"State" : [ {
		"Name" : "Burgas",
		"Code" : "BOJ"
	}, {
		"Name" : "Grad Sofiya",
		"Code" : "GSO"
	}, {
		"Name" : "Khaskovo",
		"Code" : "KHO"
	}, {
		"Name" : "Lovech",
		"Code" : "LVP"
	}, {
		"Name" : "Montana",
		"Code" : "OZA"
	}, {
		"Name" : "Plovdiv",
		"Code" : "PDV"
	}, {
		"Name" : "Ruse",
		"Code" : "ROU"
	}, {
		"Name" : "Sofiya",
		"Code" : "SOF"
	}, {
		"Name" : "Varna",
		"Code" : "VAR"
	} ]
}, {
	"Name" : "Burkina Faso",
	"Code" : "226",
	"State" : [ {
		"Name" : "Bale",
		"Code" : "BAL"
	}, {
		"Name" : "Bam",
		"Code" : "BAM"
	}, {
		"Name" : "Banwa",
		"Code" : "BAN"
	}, {
		"Name" : "Bazega",
		"Code" : "BAZ"
	}, {
		"Name" : "Bougouriba",
		"Code" : "BOR"
	}, {
		"Name" : "Boulgou",
		"Code" : "BLG"
	}, {
		"Name" : "Boulkiemde",
		"Code" : "BOK"
	}, {
		"Name" : "Comoe",
		"Code" : "COM"
	}, {
		"Name" : "Ganzourgou",
		"Code" : "GAN"
	}, {
		"Name" : "Gnagna",
		"Code" : "GNA"
	}, {
		"Name" : "Gourma",
		"Code" : "GOU"
	}, {
		"Name" : "Houet",
		"Code" : "HOU"
	}, {
		"Name" : "Ioba",
		"Code" : "IOA"
	}, {
		"Name" : "Kadiogo",
		"Code" : "KAD"
	}, {
		"Name" : "Kenedougou",
		"Code" : "KEN"
	}, {
		"Name" : "Komondjari",
		"Code" : "KOO"
	}, {
		"Name" : "Kompienga",
		"Code" : "KOP"
	}, {
		"Name" : "Kossi",
		"Code" : "KOS"
	}, {
		"Name" : "Koulpelogo",
		"Code" : "KOL"
	}, {
		"Name" : "Kouritenga",
		"Code" : "KOT"
	}, {
		"Name" : "Kourweogo",
		"Code" : "KOW"
	}, {
		"Name" : "Leraba",
		"Code" : "LER"
	}, {
		"Name" : "Loroum",
		"Code" : "LOR"
	}, {
		"Name" : "Mouhoun",
		"Code" : "MOU"
	}, {
		"Name" : "Nahouri",
		"Code" : "NAH"
	}, {
		"Name" : "Namentenga",
		"Code" : "NAM"
	}, {
		"Name" : "Nayala",
		"Code" : "NAY"
	}, {
		"Name" : "Noumbiel",
		"Code" : "NOU"
	}, {
		"Name" : "Oubritenga",
		"Code" : "OUB"
	}, {
		"Name" : "Oudalan",
		"Code" : "OUD"
	}, {
		"Name" : "Passore",
		"Code" : "PAS"
	}, {
		"Name" : "Poni",
		"Code" : "PON"
	}, {
		"Name" : "Sanguie",
		"Code" : "SAG"
	}, {
		"Name" : "Sanmatenga",
		"Code" : "SAM"
	}, {
		"Name" : "Seno",
		"Code" : "SEN"
	}, {
		"Name" : "Sissili",
		"Code" : "SIS"
	}, {
		"Name" : "Soum",
		"Code" : "SOM"
	}, {
		"Name" : "Sourou",
		"Code" : "SOR"
	}, {
		"Name" : "Tapoa",
		"Code" : "TAP"
	}, {
		"Name" : "Tuy",
		"Code" : "TUY"
	}, {
		"Name" : "Yagha",
		"Code" : "YAG"
	}, {
		"Name" : "Yatenga",
		"Code" : "YAT"
	}, {
		"Name" : "Ziro",
		"Code" : "ZIR"
	}, {
		"Name" : "Zondoma",
		"Code" : "ZOD"
	}, {
		"Name" : "Zoundweogo",
		"Code" : "ZOW"
	} ]
}, {
	"Name" : "Burundi",
	"Code" : "257",
	"State" : [ {
		"Name" : "Bubanza",
		"Code" : "BB"
	}, {
		"Name" : "Bujumbura Mairie",
		"Code" : "BM"
	}, {
		"Name" : "Bujumbura Rural",
		"Code" : "BU"
	}, {
		"Name" : "Bururi",
		"Code" : "BR"
	}, {
		"Name" : "Cankuzo",
		"Code" : "CA"
	}, {
		"Name" : "Cibitoke",
		"Code" : "CI"
	}, {
		"Name" : "Gitega",
		"Code" : "GI"
	}, {
		"Name" : "Karuzi",
		"Code" : "KR"
	}, {
		"Name" : "Kayanza",
		"Code" : "KY"
	}, {
		"Name" : "Kirundo",
		"Code" : "KI"
	}, {
		"Name" : "Makamba",
		"Code" : "MA"
	}, {
		"Name" : "Muramvya",
		"Code" : "MU"
	}, {
		"Name" : "Muyinga",
		"Code" : "MY"
	}, {
		"Name" : "Mwaro",
		"Code" : "MW"
	}, {
		"Name" : "Ngozi",
		"Code" : "NG"
	}, {
		"Name" : "Rutana",
		"Code" : "RT"
	}, {
		"Name" : "Ruyigi",
		"Code" : "RY"
	} ]
}, {
	"Name" : "Cambodia",
	"Code" : "855",
	"State" : [ {
		"Name" : "Banteay Mean Chey",
		"Code" : "BM"
	}, {
		"Name" : "Bat Dambang",
		"Code" : "BA"
	}, {
		"Name" : "Kampong Cham",
		"Code" : "KM"
	}, {
		"Name" : "Kampong Chhnang",
		"Code" : "KZC"
	}, {
		"Name" : "Kampong Spoe",
		"Code" : "KO"
	}, {
		"Name" : "Kampong Thum",
		"Code" : "KZK"
	}, {
		"Name" : "Kampot",
		"Code" : "KMT"
	}, {
		"Name" : "Kandal",
		"Code" : "KL"
	}, {
		"Name" : "Kaoh Kong",
		"Code" : "KKZ"
	}, {
		"Name" : "Kracheh",
		"Code" : "KH"
	}, {
		"Name" : "Krong Keb",
		"Code" : "KB"
	}, {
		"Name" : "Krong Pailin",
		"Code" : "PL"
	}, {
		"Name" : "Krong Preah",
		"Code" : "KA"
	}, {
		"Name" : "Mondol Kiri",
		"Code" : "MWV"
	}, {
		"Name" : "Otdar Mean Chey",
		"Code" : "OC"
	}, {
		"Name" : "Phnum Penh",
		"Code" : "PNH"
	}, {
		"Name" : "Pouthĭsat",
		"Code" : "PO"
	}, {
		"Name" : "Preah Vihear",
		"Code" : "PR"
	}, {
		"Name" : "Prey Veng",
		"Code" : "PG"
	}, {
		"Name" : "Rotanak Kiri",
		"Code" : "RBE"
	}, {
		"Name" : "Siem Reab",
		"Code" : "REP"
	}, {
		"Name" : "Stoeng Treng",
		"Code" : "TNX"
	}, {
		"Name" : "Svay Rieng",
		"Code" : "SVR"
	}, {
		"Name" : "Takev",
		"Code" : "TK"
	} ]
}, {
	"Name" : "Cameroon",
	"Code" : "237",
	"State" : [ {
		"Name" : "Adamaoua",
		"Code" : "ADA"
	}, {
		"Name" : "Centre",
		"Code" : "CEN"
	}, {
		"Name" : "Est",
		"Code" : "EST"
	}, {
		"Name" : "Extreme-Nord",
		"Code" : "EXN"
	}, {
		"Name" : "Littoral",
		"Code" : "LIT"
	}, {
		"Name" : "Nord",
		"Code" : "NOR"
	}, {
		"Name" : "Nord-Oueste",
		"Code" : "NOT"
	}, {
		"Name" : "Ouest",
		"Code" : "OUE"
	}, {
		"Name" : "Sud",
		"Code" : "SUD"
	}, {
		"Name" : "Sud-Oueste",
		"Code" : "SOU"
	} ]
}, {
	"Name" : "Cape Verde",
	"Code" : "238",
	"State" : [ {
		"Name" : "Boa Vista",
		"Code" : "BV"
	}, {
		"Name" : "Brava",
		"Code" : "BR"
	}, {
		"Name" : "Fogo",
		"Code" : "FO"
	}, {
		"Name" : "Maio",
		"Code" : "MA"
	}, {
		"Name" : "Mosteiros",
		"Code" : "MO"
	}, {
		"Name" : "Paul",
		"Code" : "PA"
	}, {
		"Name" : "Porto Novo",
		"Code" : "PN"
	}, {
		"Name" : "Praia",
		"Code" : "PR"
	}, {
		"Name" : "Ribeira Grande",
		"Code" : "RG"
	}, {
		"Name" : "Sal",
		"Code" : "SL"
	}, {
		"Name" : "Santa Catarina",
		"Code" : "CA"
	}, {
		"Name" : "Santa Cruz",
		"Code" : "CR"
	}, {
		"Name" : "Santiago",
		"Code" : "IA"
	}, {
		"Name" : "Santo Antao",
		"Code" : "SA"
	}, {
		"Name" : "Sao Domingos",
		"Code" : "SD"
	}, {
		"Name" : "Sao Filipe",
		"Code" : "SF"
	}, {
		"Name" : "Sao Miguel",
		"Code" : "SM"
	}, {
		"Name" : "Sao Nicolau",
		"Code" : "SN"
	}, {
		"Name" : "Sao Vicente",
		"Code" : "SV"
	}, {
		"Name" : "Tarrafal",
		"Code" : "TA"
	} ]
}, {
	"Name" : "Cayman Islands",
	"Code" : "345"
}, {
	"Name" : "Central African Republic",
	"Code" : "236",
	"State" : [ {
		"Name" : "Bamingui-Bangoran",
		"Code" : "BB"
	}, {
		"Name" : "Bangui",
		"Code" : "BGF"
	}, {
		"Name" : "Basse-Kotto",
		"Code" : "BK"
	}, {
		"Name" : "Bimbo",
		"Code" : "BI"
	}, {
		"Name" : "Haute-Kotto",
		"Code" : "HK"
	}, {
		"Name" : "Haut-Mbomou",
		"Code" : "HM"
	}, {
		"Name" : "Kemo",
		"Code" : "KG"
	}, {
		"Name" : "Lobaye",
		"Code" : "LB"
	}, {
		"Name" : "Mambere-Kadei",
		"Code" : "HS"
	}, {
		"Name" : "Mbomou",
		"Code" : "MB"
	}, {
		"Name" : "Nana-Gribizi",
		"Code" : "KB"
	}, {
		"Name" : "Nana-Mambere",
		"Code" : "NM"
	}, {
		"Name" : "Ombella-Mpoko",
		"Code" : "MP"
	}, {
		"Name" : "Ouaka",
		"Code" : "UK"
	}, {
		"Name" : "Ouham",
		"Code" : "AC"
	}, {
		"Name" : "Ouham-Pende",
		"Code" : "OP"
	}, {
		"Name" : "Sangha-Mbaere",
		"Code" : "SE"
	}, {
		"Name" : "Vakaga",
		"Code" : "VK"
	} ]
}, {
	"Name" : "Chad",
	"Code" : "235"
}, {
	"Name" : "Chile",
	"Code" : "056",
	"State" : [ {
		"Name" : "Libertador",
		"Code" : "LI"
	}, {
		"Name" : "Magallanes y Antartica Chilena",
		"Code" : "MA"
	}, {
		"Name" : "Metropolitana de Santiago",
		"Code" : "RM"
	}, {
		"Name" : "Region de Alsen del General Carlos Ibanez del",
		"Code" : "AI"
	}, {
		"Name" : "Region de Antofagasta",
		"Code" : "AN"
	}, {
		"Name" : "Region de Atacama",
		"Code" : "AT"
	}, {
		"Name" : "Region de Coquimbo",
		"Code" : "CO"
	}, {
		"Name" : "Region de la Araucania",
		"Code" : "AR"
	}, {
		"Name" : "Region de los Lagos",
		"Code" : "LL"
	}, {
		"Name" : "Region de Tarapaca",
		"Code" : "TA"
	}, {
		"Name" : "Region de Valparaiso",
		"Code" : "VS"
	}, {
		"Name" : "Region del Biobio",
		"Code" : "BI"
	}, {
		"Name" : "Region del Maule",
		"Code" : "ML"
	} ]
}, {
	"Name" : "Christmas Island",
	"Code" : "061"
}, {
	"Name" : "Cocos(Keeling)Islands",
	"Code" : "061"
}, {
	"Name" : "Colombia",
	"Code" : "057",
	"State" : [ {
		"Name" : "Amazonas",
		"Code" : "AMZ"
	}, {
		"Name" : "Antioquia",
		"Code" : "ANT"
	}, {
		"Name" : "Arauca",
		"Code" : "ARA"
	}, {
		"Name" : "Atlantico",
		"Code" : "ATL"
	}, {
		"Name" : "Bogota",
		"Code" : "BDC"
	}, {
		"Name" : "Bolivar",
		"Code" : "BOL"
	}, {
		"Name" : "Boyaca",
		"Code" : "BOY"
	}, {
		"Name" : "Caldas",
		"Code" : "CAL"
	}, {
		"Name" : "Caqueta",
		"Code" : "CAQ"
	}, {
		"Name" : "Casanare",
		"Code" : "CAS"
	}, {
		"Name" : "Cauca",
		"Code" : "CAU"
	}, {
		"Name" : "Cesar",
		"Code" : "CES"
	}, {
		"Name" : "Choco",
		"Code" : "CHO"
	}, {
		"Name" : "Cordoba",
		"Code" : "COR"
	}, {
		"Name" : "Cundinamarca",
		"Code" : "CAM"
	}, {
		"Name" : "Guainia",
		"Code" : "GNA"
	}, {
		"Name" : "Guaviare",
		"Code" : "GVR"
	}, {
		"Name" : "Huila",
		"Code" : "HUI"
	}, {
		"Name" : "La Guajira",
		"Code" : "GJR"
	}, {
		"Name" : "Magdalena",
		"Code" : "MAG"
	}, {
		"Name" : "Meta",
		"Code" : "MET"
	}, {
		"Name" : "Narino",
		"Code" : "NAR"
	}, {
		"Name" : "Norte de Santander",
		"Code" : "NDS"
	}, {
		"Name" : "Putumayo",
		"Code" : "PUT"
	}, {
		"Name" : "Quindio",
		"Code" : "QUI"
	}, {
		"Name" : "Risaralda",
		"Code" : "RIS"
	}, {
		"Name" : "San Andres y Providencia",
		"Code" : "SAP"
	}, {
		"Name" : "Santander",
		"Code" : "SAN"
	}, {
		"Name" : "Sucre",
		"Code" : "SUC"
	}, {
		"Name" : "Tolima",
		"Code" : "TOL"
	}, {
		"Name" : "Valle del Cauca",
		"Code" : "VDC"
	}, {
		"Name" : "Vaupes",
		"Code" : "VAU"
	}, {
		"Name" : "Vichada",
		"Code" : "VIC"
	} ]
}, {
	"Name" : "Comoros",
	"Code" : "269"
}, {
	"Name" : "Congo",
	"Code" : "242"
}, {
	"Name" : "Congo(DRC)",
	"Code" : "243"
}, {
	"Name" : "Cook Islands",
	"Code" : "682"
}, {
	"Name" : "Costa Rica",
	"Code" : "506",
	"State" : [ {
		"Name" : "Alajuela",
		"Code" : "A"
	}, {
		"Name" : "Cartago",
		"Code" : "C"
	}, {
		"Name" : "Guanacaste",
		"Code" : "G"
	}, {
		"Name" : "Heredia",
		"Code" : "H"
	}, {
		"Name" : "Limon",
		"Code" : "L"
	}, {
		"Name" : "Puntarenas",
		"Code" : "P"
	}, {
		"Name" : "San Jose",
		"Code" : "SJ"
	} ]
}, {
	"Name" : "Cote d'Ivoire",
	"Code" : "225",
	"State" : [ {
		"Name" : "Agnebi",
		"Code" : "AG"
	}, {
		"Name" : "Bafing",
		"Code" : "BF"
	}, {
		"Name" : "Bas-Sassandra",
		"Code" : "BS"
	}, {
		"Name" : "Denguele",
		"Code" : "DE"
	}, {
		"Name" : "Fromager",
		"Code" : "FR"
	}, {
		"Name" : "Haut-Sassandra",
		"Code" : "HT"
	}, {
		"Name" : "Lacs",
		"Code" : "LC"
	}, {
		"Name" : "Lagunes",
		"Code" : "LG"
	}, {
		"Name" : "Marahoue",
		"Code" : "MR"
	}, {
		"Name" : "Montagnes",
		"Code" : "DH"
	}, {
		"Name" : "Moyen-Cavally",
		"Code" : "MV"
	}, {
		"Name" : "Moyen-Comoe",
		"Code" : "MC"
	}, {
		"Name" : "Nzi-Comoe",
		"Code" : "NC"
	}, {
		"Name" : "Savanes",
		"Code" : "SV"
	}, {
		"Name" : "Sud-Bandama",
		"Code" : "SB"
	}, {
		"Name" : "Sud-Comoe",
		"Code" : "SC"
	}, {
		"Name" : "Vallee du Bandama",
		"Code" : "VB"
	}, {
		"Name" : "Worodougou",
		"Code" : "WR"
	}, {
		"Name" : "Zanzan",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Croatia",
	"Code" : "385",
	"State" : [ {
		"Name" : "Bjelovarsko-Bilogorska",
		"Code" : "7"
	}, {
		"Name" : "Brodsko-Posavska",
		"Code" : "12"
	}, {
		"Name" : "Dubrovacko-Neretvanska",
		"Code" : "19"
	}, {
		"Name" : "Grad Zagreb",
		"Code" : "21"
	}, {
		"Name" : "Istarska",
		"Code" : "18"
	}, {
		"Name" : "Karlovacka",
		"Code" : "4"
	}, {
		"Name" : "Koprivnicko-Krizevacka",
		"Code" : "6"
	}, {
		"Name" : "Krapinsko-Zagorska",
		"Code" : "2"
	}, {
		"Name" : "Licko-Senjska",
		"Code" : "9"
	}, {
		"Name" : "Medimurska",
		"Code" : "20"
	}, {
		"Name" : "Osjecko-Baranjska",
		"Code" : "14"
	}, {
		"Name" : "Pozega-Slavonia",
		"Code" : "11"
	}, {
		"Name" : "Primorsko-Goranska",
		"Code" : "8"
	}, {
		"Name" : "Sibensko-Kninska",
		"Code" : "15"
	}, {
		"Name" : "Sisacko-Moslavacka",
		"Code" : "3"
	}, {
		"Name" : "Splitsko-Dalmatinska",
		"Code" : "17"
	}, {
		"Name" : "Varazdinska",
		"Code" : "5"
	}, {
		"Name" : "Viroviticko-Podravska",
		"Code" : "10"
	}, {
		"Name" : "Vukovarsko-Srijemska",
		"Code" : "16"
	}, {
		"Name" : "Zadarska",
		"Code" : "13"
	}, {
		"Name" : "Zagrebacka",
		"Code" : "1"
	} ]
}, {
	"Name" : "Cuba",
	"Code" : "053",
	"State" : [ {
		"Name" : "Camaguey",
		"Code" : "9"
	}, {
		"Name" : "Ciego de Avila",
		"Code" : "8"
	}, {
		"Name" : "Cienfuegos",
		"Code" : "6"
	}, {
		"Name" : "Ciudad de la Habana",
		"Code" : "3"
	}, {
		"Name" : "Granma",
		"Code" : "12"
	}, {
		"Name" : "Guantanamo",
		"Code" : "14"
	}, {
		"Name" : "Holguin",
		"Code" : "11"
	}, {
		"Name" : "Isla de la Juventud",
		"Code" : "99"
	}, {
		"Name" : "La Habana",
		"Code" : "2"
	}, {
		"Name" : "Las Tunas",
		"Code" : "10"
	}, {
		"Name" : "Manzanillo",
		"Code" : "MZO"
	}, {
		"Name" : "Matanzas",
		"Code" : "4"
	}, {
		"Name" : "Mayari",
		"Code" : "MAY"
	}, {
		"Name" : "Pinar del Rio",
		"Code" : "1"
	}, {
		"Name" : "Sancti Spiritus",
		"Code" : "7"
	}, {
		"Name" : "Santiago de Cuba",
		"Code" : "13"
	}, {
		"Name" : "Villa Clara",
		"Code" : "5"
	} ]
}, {
	"Name" : "Cyprus",
	"Code" : "357",
	"State" : [ {
		"Name" : "Famagusta",
		"Code" : "4"
	}, {
		"Name" : "Kyrenia",
		"Code" : "6"
	}, {
		"Name" : "Larnaca",
		"Code" : "3"
	}, {
		"Name" : "Limassol",
		"Code" : "2"
	}, {
		"Name" : "Nicosia",
		"Code" : "1"
	}, {
		"Name" : "Pafos",
		"Code" : "5"
	} ]
}, {
	"Name" : "Czech Republic",
	"Code" : "420",
	"State" : [ {
		"Name" : "Jihomoravsky",
		"Code" : "JC"
	}, {
		"Name" : "Karlovarsky",
		"Code" : "KA"
	}, {
		"Name" : "Kralovehradecky",
		"Code" : "KR"
	}, {
		"Name" : "Liberecky",
		"Code" : "LI"
	}, {
		"Name" : "Moravskoslezsky",
		"Code" : "MO"
	}, {
		"Name" : "Olomoucky",
		"Code" : "OL"
	}, {
		"Name" : "Pardubicky",
		"Code" : "PA"
	}, {
		"Name" : "Plzensky",
		"Code" : "PL"
	}, {
		"Name" : "Prague",
		"Code" : "PR"
	}, {
		"Name" : "Stredocesky",
		"Code" : "ST"
	}, {
		"Name" : "Ustecky",
		"Code" : "US"
	}, {
		"Name" : "Vysocina",
		"Code" : "VY"
	}, {
		"Name" : "Zlinsky",
		"Code" : "ZL"
	} ]
}, {
	"Name" : "Denmark",
	"Code" : "045",
	"State" : [ {
		"Name" : "Aarhus",
		"Code" : "AR"
	}, {
		"Name" : "Bornholm",
		"Code" : "BO"
	}, {
		"Name" : "Copenhagen",
		"Code" : "CPH"
	}, {
		"Name" : "Frederiksborg",
		"Code" : "FRE"
	}, {
		"Name" : "Fyn",
		"Code" : "FY"
	}, {
		"Name" : "Nordjylland",
		"Code" : "VSV"
	}, {
		"Name" : "Ribe",
		"Code" : "RIB"
	}, {
		"Name" : "Ringkoebing",
		"Code" : "RKG"
	}, {
		"Name" : "Roskilde",
		"Code" : "RKE"
	}, {
		"Name" : "Soenderjylland",
		"Code" : "VBI"
	}, {
		"Name" : "Storstroem",
		"Code" : "ST"
	}, {
		"Name" : "Vejle",
		"Code" : "VEJ"
	}, {
		"Name" : "Vestsjaelland",
		"Code" : "VS"
	}, {
		"Name" : "Viborg",
		"Code" : "VIB"
	} ]
}, {
	"Name" : "Djibouti",
	"Code" : "253",
	"State" : [ {
		"Name" : "Ali Sabih",
		"Code" : "S"
	}, {
		"Name" : "Dikhil",
		"Code" : "K"
	}, {
		"Name" : "Obock",
		"Code" : "O"
	}, {
		"Name" : "Tadjoura",
		"Code" : "T"
	} ]
}, {
	"Name" : "Dominica",
	"Code" : "767"
}, {
	"Name" : "Dominican Republic",
	"Code" : "809"
}, {
	"Name" : "Ecuador",
	"Code" : "593",
	"State" : [ {
		"Name" : "Azuay",
		"Code" : "A"
	}, {
		"Name" : "Bolivar",
		"Code" : "B"
	}, {
		"Name" : "Canar",
		"Code" : "F"
	}, {
		"Name" : "Carchi",
		"Code" : "C"
	}, {
		"Name" : "Chimborazo",
		"Code" : "H"
	}, {
		"Name" : "Cotopaxi",
		"Code" : "X"
	}, {
		"Name" : "El Oro",
		"Code" : "O"
	}, {
		"Name" : "Esmeraldas",
		"Code" : "E"
	}, {
		"Name" : "Galapagos",
		"Code" : "W"
	}, {
		"Name" : "Guayas",
		"Code" : "G"
	}, {
		"Name" : "Imbabura",
		"Code" : "I"
	}, {
		"Name" : "Loja",
		"Code" : "L"
	}, {
		"Name" : "Los Rios",
		"Code" : "R"
	}, {
		"Name" : "Manabi",
		"Code" : "M"
	}, {
		"Name" : "Morona-Santiago",
		"Code" : "S"
	}, {
		"Name" : "Napo, Orellana",
		"Code" : "D"
	}, {
		"Name" : "Pastaza",
		"Code" : "Y"
	}, {
		"Name" : "Pichincha",
		"Code" : "P"
	}, {
		"Name" : "Sucumbios",
		"Code" : "U"
	}, {
		"Name" : "Tungurahua",
		"Code" : "T"
	}, {
		"Name" : "Zamora-Chinchipe",
		"Code" : "Z"
	} ]
}, {
	"Name" : "Egypt",
	"Code" : "020",
	"State" : [ {
		"Name" : "Al Ghurdaqah",
		"Code" : "GBY"
	}, {
		"Name" : "Alexandria",
		"Code" : "ALY"
	}, {
		"Name" : "Aswan",
		"Code" : "ASW"
	}, {
		"Name" : "Cairo",
		"Code" : "CAI"
	}, {
		"Name" : "Shubra al Khaymah",
		"Code" : "SKH"
	} ]
}, {
	"Name" : "El Salvador",
	"Code" : "503",
	"State" : [ {
		"Name" : "Ahuachapan",
		"Code" : "AH"
	}, {
		"Name" : "Apopa",
		"Code" : "APO"
	}, {
		"Name" : "Cabanas",
		"Code" : "CA"
	}, {
		"Name" : "Centro Sur",
		"Code" : "CS"
	}, {
		"Name" : "Chalatenango",
		"Code" : "CH"
	}, {
		"Name" : "Cuscatlan",
		"Code" : "CU"
	}, {
		"Name" : "Delgado",
		"Code" : "DE"
	}, {
		"Name" : "Ilopango",
		"Code" : "IL"
	}, {
		"Name" : "Kie-Ntem",
		"Code" : "KN"
	}, {
		"Name" : "La Libertad",
		"Code" : "LB"
	}, {
		"Name" : "La Paz",
		"Code" : "PZ"
	}, {
		"Name" : "La Union",
		"Code" : "UN"
	}, {
		"Name" : "Litoral",
		"Code" : "LI"
	}, {
		"Name" : "Mejicanos",
		"Code" : "MEJ"
	}, {
		"Name" : "Morazan",
		"Code" : "MO"
	}, {
		"Name" : "San Miguel",
		"Code" : "SM"
	}, {
		"Name" : "San Salvador",
		"Code" : "SS"
	}, {
		"Name" : "San Vicente",
		"Code" : "SV"
	}, {
		"Name" : "Santa Ana",
		"Code" : "SA"
	}, {
		"Name" : "Sonsonate",
		"Code" : "SO"
	}, {
		"Name" : "Soyapango",
		"Code" : "SOY"
	}, {
		"Name" : "Usulutan",
		"Code" : "US"
	}, {
		"Name" : "Wele-Nzas",
		"Code" : "WN"
	} ]
}, {
	"Name" : "Eritrea",
	"Code" : "291",
	"State" : [ {
		"Name" : "Anseba",
		"Code" : "KE"
	}, {
		"Name" : "Debub",
		"Code" : "DE"
	}, {
		"Name" : "Debubawi Keyih Bahri",
		"Code" : "DK"
	}, {
		"Name" : "Gash Barka",
		"Code" : "BR"
	}, {
		"Name" : "Maekel",
		"Code" : "MA"
	}, {
		"Name" : "Semenawi Keyih Bahri",
		"Code" : "SK"
	} ]
}, {
	"Name" : "Estonia",
	"Code" : "372",
	"State" : [ {
		"Name" : "Harju",
		"Code" : "37"
	}, {
		"Name" : "Hiiu",
		"Code" : "39"
	}, {
		"Name" : "Ida-Viru",
		"Code" : "44"
	}, {
		"Name" : "Jarva",
		"Code" : "51"
	}, {
		"Name" : "Jogeva",
		"Code" : "49"
	}, {
		"Name" : "Laane",
		"Code" : "57"
	}, {
		"Name" : "Laane-Viru",
		"Code" : "59"
	}, {
		"Name" : "Parnu",
		"Code" : "67"
	}, {
		"Name" : "Polva",
		"Code" : "65"
	}, {
		"Name" : "Rapla",
		"Code" : "70"
	}, {
		"Name" : "Saare",
		"Code" : "74"
	}, {
		"Name" : "Tartu",
		"Code" : "78"
	}, {
		"Name" : "Valga",
		"Code" : "82"
	}, {
		"Name" : "Viljandi",
		"Code" : "84"
	}, {
		"Name" : "Voru",
		"Code" : "86"
	} ]
}, {
	"Name" : "Ethiopia",
	"Code" : "251",
	"State" : [ {
		"Name" : "Adis abeba",
		"Code" : "AA"
	}, {
		"Name" : "Afar",
		"Code" : "AF"
	}, {
		"Name" : "Amara",
		"Code" : "AH"
	}, {
		"Name" : "Binshangul Gumuz",
		"Code" : "BG"
	}, {
		"Name" : "Dire Dawa",
		"Code" : "DD"
	}, {
		"Name" : "Gambela Hizboch",
		"Code" : "GB"
	}, {
		"Name" : "Hareri  Hizb",
		"Code" : "HR"
	}, {
		"Name" : "Oromiya",
		"Code" : "OR"
	}, {
		"Name" : "Sumale",
		"Code" : "SM"
	}, {
		"Name" : "Tigray",
		"Code" : "TG"
	}, {
		"Name" : "YeDebub Biheroch",
		"Code" : "SN"
	} ]
}, {
	"Name" : "Falkland Islands",
	"Code" : "500"
}, {
	"Name" : "Faroe Islands",
	"Code" : "298"
}, {
	"Name" : "Fiji Islands",
	"Code" : "679"
}, {
	"Name" : "Finland",
	"Code" : "358",
	"State" : [ {
		"Name" : "Espoo",
		"Code" : "ESP"
	}, {
		"Name" : "Hameenlinna",
		"Code" : "HMY"
	}, {
		"Name" : "Helsinki",
		"Code" : "HEL"
	}, {
		"Name" : "Joensuu",
		"Code" : "JOE"
	}, {
		"Name" : "Kajaani",
		"Code" : "KAJ"
	}, {
		"Name" : "Kokkola",
		"Code" : "KOK"
	}, {
		"Name" : "Kotka",
		"Code" : "KTK"
	}, {
		"Name" : "Kuopio",
		"Code" : "KUO"
	}, {
		"Name" : "Lahti",
		"Code" : "LHI"
	}, {
		"Name" : "Lappeenranta",
		"Code" : "LPP"
	}, {
		"Name" : "Mariehamn",
		"Code" : "MHQ"
	}, {
		"Name" : "Mikkeli",
		"Code" : "MIK"
	}, {
		"Name" : "Oulu",
		"Code" : "OLU"
	}, {
		"Name" : "Pori",
		"Code" : "POR"
	}, {
		"Name" : "Porvoo",
		"Code" : "PRV"
	}, {
		"Name" : "Rovaniemi",
		"Code" : "RVN"
	}, {
		"Name" : "Tampere",
		"Code" : "TMP"
	}, {
		"Name" : "Turku",
		"Code" : "TKU"
	}, {
		"Name" : "Vaasa",
		"Code" : "VAA"
	}, {
		"Name" : "Vantaa",
		"Code" : "VAT"
	} ]
}, {
	"Name" : "France",
	"Code" : "033",
	"State" : [ {
		"Name" : "Aix-en-Provence",
		"Code" : "QXB"
	}, {
		"Name" : "Ajaccio",
		"Code" : "AJA"
	}, {
		"Name" : "Amiens",
		"Code" : "AMI"
	}, {
		"Name" : "Arles",
		"Code" : "ARL"
	}, {
		"Name" : "Besancon",
		"Code" : "BSN"
	}, {
		"Name" : "Caen",
		"Code" : "CFR"
	}, {
		"Name" : "Chalons-en-Champagne",
		"Code" : "CSM"
	}, {
		"Name" : "Dijon",
		"Code" : "DIJ"
	}, {
		"Name" : "Frejus",
		"Code" : "FRJ"
	}, {
		"Name" : "Lille",
		"Code" : "LLE"
	}, {
		"Name" : "Limoges",
		"Code" : "LIG"
	}, {
		"Name" : "Lyon",
		"Code" : "LIO"
	}, {
		"Name" : "Marseille",
		"Code" : "MRS"
	}, {
		"Name" : "Metz",
		"Code" : "MZM"
	}, {
		"Name" : "Montpellier",
		"Code" : "MPL"
	}, {
		"Name" : "Nantes",
		"Code" : "NTE"
	}, {
		"Name" : "Nice",
		"Code" : "NCE"
	}, {
		"Name" : "Orleans",
		"Code" : "ORR"
	}, {
		"Name" : "Paris",
		"Code" : "PAR"
	}, {
		"Name" : "Rennes",
		"Code" : "RNS"
	}, {
		"Name" : "Rouen",
		"Code" : "URO"
	}, {
		"Name" : "Toulouse",
		"Code" : "TLS"
	}, {
		"Name" : "Valence",
		"Code" : "VAA"
	} ]
}, {
	"Name" : "Frech Polynesia",
	"Code" : "689"
}, {
	"Name" : "French Guiana",
	"Code" : "594"
}, {
	"Name" : "French Southern and Antarctic Lands",
	"Code" : "ATF"
}, {
	"Name" : "Gabon",
	"Code" : "241",
	"State" : [ {
		"Name" : "Estuaire",
		"Code" : "ES"
	}, {
		"Name" : "Haut-Ogooue",
		"Code" : "HO"
	}, {
		"Name" : "Moyen-Ogooue",
		"Code" : "MO"
	}, {
		"Name" : "Ngounie",
		"Code" : "NG"
	}, {
		"Name" : "Nyanga",
		"Code" : "NY"
	}, {
		"Name" : "Ogooue-Ivindo",
		"Code" : "OI"
	}, {
		"Name" : "Ogooue-Lolo",
		"Code" : "OL"
	}, {
		"Name" : "Ogooue-Maritime",
		"Code" : "OM"
	}, {
		"Name" : "Woleu-Ntem",
		"Code" : "WN"
	} ]
}, {
	"Name" : "Gambia",
	"Code" : "GMB"
}, {
	"Name" : "Georgia",
	"Code" : "995"
}, {
	"Name" : "Germany",
	"Code" : "049",
	"State" : [ {
		"Name" : "Ansbach",
		"Code" : "ANS"
	}, {
		"Name" : "Arnsberg",
		"Code" : "ARN"
	}, {
		"Name" : "Augsburg",
		"Code" : "AGB"
	}, {
		"Name" : "Bayreuth",
		"Code" : "BYU"
	}, {
		"Name" : "Berlin",
		"Code" : "BE"
	}, {
		"Name" : "Bielefeld",
		"Code" : "BFE"
	}, {
		"Name" : "Bochum",
		"Code" : "BOM"
	}, {
		"Name" : "Bremen",
		"Code" : "HB"
	}, {
		"Name" : "Brunswick",
		"Code" : "BRW"
	}, {
		"Name" : "Chemnitz",
		"Code" : "CHE"
	}, {
		"Name" : "Cologne",
		"Code" : "CGN"
	}, {
		"Name" : "Darmstadt",
		"Code" : "DAR"
	}, {
		"Name" : "Dessau",
		"Code" : "DES"
	}, {
		"Name" : "Detmold",
		"Code" : "DET"
	}, {
		"Name" : "Dresden",
		"Code" : "DRS"
	}, {
		"Name" : "Dusseldorf",
		"Code" : "DUS"
	}, {
		"Name" : "Erfurt",
		"Code" : "ERF"
	}, {
		"Name" : "Frankfurt",
		"Code" : "FFO"
	}, {
		"Name" : "Freiburg",
		"Code" : "FBG"
	}, {
		"Name" : "GieBen",
		"Code" : "GBN"
	}, {
		"Name" : "Halle",
		"Code" : "HAE"
	}, {
		"Name" : "Hamburg",
		"Code" : "HH"
	}, {
		"Name" : "Hannover",
		"Code" : "HAJ"
	}, {
		"Name" : "Karlsruhe",
		"Code" : "KAE"
	}, {
		"Name" : "Kassel",
		"Code" : "KAS"
	}, {
		"Name" : "Kiel",
		"Code" : "KEL"
	}, {
		"Name" : "Koblenz",
		"Code" : "KOB"
	}, {
		"Name" : "Landshut",
		"Code" : "LDH"
	}, {
		"Name" : "Leipzig",
		"Code" : "LEJ"
	}, {
		"Name" : "Luneburg",
		"Code" : "LBG"
	}, {
		"Name" : "Magdeburg",
		"Code" : "MAG"
	}, {
		"Name" : "Mainz",
		"Code" : "MAI"
	}, {
		"Name" : "Mannheim",
		"Code" : "MHG"
	}, {
		"Name" : "Muenster",
		"Code" : "MUN"
	}, {
		"Name" : "Munich",
		"Code" : "MUC"
	}, {
		"Name" : "Nuremberg",
		"Code" : "NUE"
	}, {
		"Name" : "Potsdam",
		"Code" : "POT"
	}, {
		"Name" : "Schwerin",
		"Code" : "SWH"
	}, {
		"Name" : "Stuttgart",
		"Code" : "STR"
	}, {
		"Name" : "Trier",
		"Code" : "TRI"
	}, {
		"Name" : "Wiesbaden",
		"Code" : "WIB"
	}, {
		"Name" : "Wuerzburg",
		"Code" : "WUG"
	} ]
}, {
	"Name" : "Ghana",
	"Code" : "233",
	"State" : [ {
		"Name" : "Ashanti",
		"Code" : "AS"
	}, {
		"Name" : "Brong Ahafo",
		"Code" : "BA"
	}, {
		"Name" : "Central",
		"Code" : "CE"
	}, {
		"Name" : "Eastern",
		"Code" : "EA"
	}, {
		"Name" : "Greater Accra",
		"Code" : "GA"
	}, {
		"Name" : "Northern",
		"Code" : "NO"
	}, {
		"Name" : "Obuasi",
		"Code" : "OBU"
	}, {
		"Name" : "Upper East",
		"Code" : "UE"
	}, {
		"Name" : "Upper West",
		"Code" : "UW"
	}, {
		"Name" : "Volta",
		"Code" : "VO"
	}, {
		"Name" : "Western",
		"Code" : "WE"
	} ]
}, {
	"Name" : "Gibraltar",
	"Code" : "350"
}, {
	"Name" : "Greece",
	"Code" : "030",
	"State" : [ {
		"Name" : "Athens",
		"Code" : "ATH"
	}, {
		"Name" : "Chanion",
		"Code" : "CHQ"
	}, {
		"Name" : "Cyclades",
		"Code" : "CY"
	}, {
		"Name" : "Dodecanese",
		"Code" : "DO"
	}, {
		"Name" : "Irakleiou",
		"Code" : "HER"
	}, {
		"Name" : "Lasithiou",
		"Code" : "LST"
	}, {
		"Name" : "Lesbos",
		"Code" : "LES"
	}, {
		"Name" : "Peiraievs",
		"Code" : "PRI"
	}, {
		"Name" : "Rethymnis",
		"Code" : "RET"
	}, {
		"Name" : "Samos",
		"Code" : "SMI"
	} ]
}, {
	"Name" : "Greenland",
	"Code" : "299"
}, {
	"Name" : "Grenada",
	"Code" : "473"
}, {
	"Name" : "Guadeloupe",
	"Code" : "590"
}, {
	"Name" : "Guam",
	"Code" : "671"
}, {
	"Name" : "Guatemala",
	"Code" : "502",
	"State" : [ {
		"Name" : "Alta Verapaz",
		"Code" : "AV"
	}, {
		"Name" : "Baja Verapaz",
		"Code" : "BV"
	}, {
		"Name" : "Chimaltenango",
		"Code" : "CM"
	}, {
		"Name" : "Chiquimula",
		"Code" : "CQ"
	}, {
		"Name" : "El Progreso",
		"Code" : "PR"
	}, {
		"Name" : "Escuintla",
		"Code" : "ES"
	}, {
		"Name" : "Guatemala",
		"Code" : "GU"
	}, {
		"Name" : "Huehuetenango",
		"Code" : "HU"
	}, {
		"Name" : "Izabal",
		"Code" : "IZ"
	}, {
		"Name" : "Jalapa",
		"Code" : "JA"
	}, {
		"Name" : "Jutiapa",
		"Code" : "JU"
	}, {
		"Name" : "Mixco",
		"Code" : "MIX"
	}, {
		"Name" : "Peten",
		"Code" : "PE"
	}, {
		"Name" : "Quetzaltenango",
		"Code" : "QZ"
	}, {
		"Name" : "Quiche",
		"Code" : "QC"
	}, {
		"Name" : "Retalhuleu",
		"Code" : "RE"
	}, {
		"Name" : "Sacatepequez",
		"Code" : "ST"
	}, {
		"Name" : "San Marcos",
		"Code" : "SM"
	}, {
		"Name" : "Santa Rosa",
		"Code" : "SR"
	}, {
		"Name" : "Solola",
		"Code" : "SO"
	}, {
		"Name" : "Suchitepequez",
		"Code" : "SU"
	}, {
		"Name" : "Totonicapan",
		"Code" : "TO"
	}, {
		"Name" : "Villa Nueva",
		"Code" : "VIN"
	}, {
		"Name" : "Zacapa",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Guernsey",
	"Code" : "481"
}, {
	"Name" : "Guinea",
	"Code" : "224",
	"State" : [ {
		"Name" : "Boke",
		"Code" : "BOK"
	}, {
		"Name" : "Conakry",
		"Code" : "CNK"
	}, {
		"Name" : "Faranah",
		"Code" : "FRN"
	}, {
		"Name" : "Kankan",
		"Code" : "KNK"
	}, {
		"Name" : "Kindia",
		"Code" : "KND"
	}, {
		"Name" : "Labe",
		"Code" : "LAB"
	}, {
		"Name" : "Mamou",
		"Code" : "MAM"
	}, {
		"Name" : "Nzerekore",
		"Code" : "NZR"
	} ]
}, {
	"Name" : "Guinea-Bissau",
	"Code" : "245"
}, {
	"Name" : "Guyana",
	"Code" : "592",
	"State" : [ {
		"Name" : "Barima-Waini",
		"Code" : "BW"
	}, {
		"Name" : "Cuyuni-Mazaruni",
		"Code" : "CM"
	}, {
		"Name" : "Demerara-Mahaica",
		"Code" : "DM"
	}, {
		"Name" : "East Berbice-Corentyne",
		"Code" : "EC"
	}, {
		"Name" : "Essequibo Islands-West Demerara",
		"Code" : "EW"
	}, {
		"Name" : "Mahaica-Berbice",
		"Code" : "MB"
	}, {
		"Name" : "Pomeroon-Supenaam",
		"Code" : "PM"
	}, {
		"Name" : "Potaro-Siparuni",
		"Code" : "PI"
	}, {
		"Name" : "Upper Demerara-Berbice",
		"Code" : "UD"
	}, {
		"Name" : "Upper Takutu-Upper Essequibo",
		"Code" : "UT"
	} ]
}, {
	"Name" : "Haiti",
	"Code" : "509"
}, {
	"Name" : "Heard Island and McDonald Islands",
	"Code" : "HMD"
}, {
	"Name" : "Honduras",
	"Code" : "504",
	"State" : [ {
		"Name" : "Atlantida",
		"Code" : "AT"
	}, {
		"Name" : "Choloma",
		"Code" : "CHO"
	}, {
		"Name" : "Choluteca",
		"Code" : "CH"
	}, {
		"Name" : "Colon",
		"Code" : "CL"
	}, {
		"Name" : "Comayagua",
		"Code" : "CM"
	}, {
		"Name" : "Copan",
		"Code" : "CP"
	}, {
		"Name" : "Cortes",
		"Code" : "CR"
	}, {
		"Name" : "El Paraiso",
		"Code" : "PA"
	}, {
		"Name" : "Francisco Morazan",
		"Code" : "FM"
	}, {
		"Name" : "Gracias a Dios",
		"Code" : "GD"
	}, {
		"Name" : "Intibuca",
		"Code" : "IN"
	}, {
		"Name" : "Islas de la Bahia",
		"Code" : "IB"
	}, {
		"Name" : "La Paz",
		"Code" : "PZ"
	}, {
		"Name" : "Lempira",
		"Code" : "LE"
	}, {
		"Name" : "Ocotepeque",
		"Code" : "OC"
	}, {
		"Name" : "Olancho",
		"Code" : "OL"
	}, {
		"Name" : "Santa Barbara",
		"Code" : "SB"
	}, {
		"Name" : "Valle",
		"Code" : "VA"
	}, {
		"Name" : "Yoro",
		"Code" : "YO"
	} ]
}, {
	"Name" : "Hungary",
	"Code" : "036",
	"State" : [ {
		"Name" : "Bacs-Kiskun",
		"Code" : "BK"
	}, {
		"Name" : "Baranya",
		"Code" : "BA"
	}, {
		"Name" : "Bekes",
		"Code" : "BE"
	}, {
		"Name" : "Borsod-Abauj-Zemplen",
		"Code" : "BZ"
	}, {
		"Name" : "Budapest",
		"Code" : "BU"
	}, {
		"Name" : "Csongrad",
		"Code" : "CS"
	}, {
		"Name" : "Fejer",
		"Code" : "FE"
	}, {
		"Name" : "Gyor-Moson-Sopron",
		"Code" : "GS"
	}, {
		"Name" : "Hajdu-Bihar",
		"Code" : "HB"
	}, {
		"Name" : "Heves",
		"Code" : "HE"
	}, {
		"Name" : "Jasz-Nagykun-Szolnok",
		"Code" : "JN"
	}, {
		"Name" : "Komarom-Esztergom",
		"Code" : "KE"
	}, {
		"Name" : "Nograd",
		"Code" : "NO"
	}, {
		"Name" : "Pest",
		"Code" : "PE"
	}, {
		"Name" : "Somogy",
		"Code" : "SO"
	}, {
		"Name" : "Szabolcs-Szatmar-Bereg",
		"Code" : "SZ"
	}, {
		"Name" : "Tolna",
		"Code" : "TO"
	}, {
		"Name" : "Vas",
		"Code" : "VA"
	}, {
		"Name" : "Veszprem",
		"Code" : "VE"
	}, {
		"Name" : "Zala",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Iceland",
	"Code" : "354"
}, {
	"Name" : "India",
	"Code" : "091",
	"State" : [ {
		"Name" : "Aizawl",
		"Code" : "AJL"
	}, {
		"Name" : "Bangalore",
		"Code" : "BLR"
	}, {
		"Name" : "Bhopal",
		"Code" : "BHO"
	}, {
		"Name" : "Bhubaneswar",
		"Code" : "BBI"
	}, {
		"Name" : "Calcutta",
		"Code" : "CCU"
	}, {
		"Name" : "Chandigarh",
		"Code" : "IXC"
	}, {
		"Name" : "Chennai",
		"Code" : "MAA"
	}, {
		"Name" : "Coimbatore",
		"Code" : "CJB"
	}, {
		"Name" : "Daman",
		"Code" : "DAM"
	}, {
		"Name" : "Diu",
		"Code" : "DIU"
	}, {
		"Name" : "Gangtok",
		"Code" : "GTO"
	}, {
		"Name" : "Imphal",
		"Code" : "IMF"
	}, {
		"Name" : "Indore",
		"Code" : "IDR"
	}, {
		"Name" : "Jabalpur",
		"Code" : "JLR"
	}, {
		"Name" : "Jaipur",
		"Code" : "JAI"
	}, {
		"Name" : "Jalandhar",
		"Code" : "JUC"
	}, {
		"Name" : "Jodhpur",
		"Code" : "JDH"
	}, {
		"Name" : "Karaikal",
		"Code" : "KRK"
	}, {
		"Name" : "Kavaratti",
		"Code" : "KVA"
	}, {
		"Name" : "Kohima",
		"Code" : "KOM"
	}, {
		"Name" : "Madurai",
		"Code" : "IXM"
	}, {
		"Name" : "Mahe",
		"Code" : "MAH"
	}, {
		"Name" : "New Delhi",
		"Code" : "ICD"
	}, {
		"Name" : "Pondicherry",
		"Code" : "PNY"
	}, {
		"Name" : "Sambalpur",
		"Code" : "SLR"
	}, {
		"Name" : "Shillong",
		"Code" : "SHL"
	}, {
		"Name" : "Silvassa",
		"Code" : "SIL"
	}, {
		"Name" : "Trivandrum",
		"Code" : "TRV"
	}, {
		"Name" : "Udaipur",
		"Code" : "UDR"
	}, {
		"Name" : "Yanam",
		"Code" : "SRV"
	} ]
}, {
	"Name" : "Indonesia",
	"Code" : "062",
	"State" : [ {
		"Name" : "Aceh",
		"Code" : "AC"
	}, {
		"Name" : "Bali",
		"Code" : "BA"
	}, {
		"Name" : "Banten",
		"Code" : "BT"
	}, {
		"Name" : "Bengkulu",
		"Code" : "BE"
	}, {
		"Name" : "Daerah Istimewa Yogyakarta",
		"Code" : "YO"
	}, {
		"Name" : "Daerah Tingkat I Kalimantan Barat",
		"Code" : "KB"
	}, {
		"Name" : "Irian Jaya",
		"Code" : "IJ"
	}, {
		"Name" : "Jakarta Raya",
		"Code" : "JK"
	}, {
		"Name" : "Jambi",
		"Code" : "JA"
	}, {
		"Name" : "Java Barat",
		"Code" : "JB"
	}, {
		"Name" : "Java Tengah",
		"Code" : "JT"
	}, {
		"Name" : "Java Timur",
		"Code" : "JI"
	}, {
		"Name" : "Kalimantan Selatan",
		"Code" : "KS"
	}, {
		"Name" : "Kalimantan Tengah",
		"Code" : "KT"
	}, {
		"Name" : "Kalimantan Timur",
		"Code" : "KI"
	}, {
		"Name" : "Kepulauan Bangka Belitung",
		"Code" : "BB"
	}, {
		"Name" : "Lampung",
		"Code" : "LA"
	}, {
		"Name" : "Maluku",
		"Code" : "MA"
	}, {
		"Name" : "Nusa Tenggara Barat",
		"Code" : "NB"
	}, {
		"Name" : "Nusa Tenggara Timur",
		"Code" : "NT"
	}, {
		"Name" : "Riau",
		"Code" : "RI"
	}, {
		"Name" : "Sulawesi Selatan",
		"Code" : "SN"
	}, {
		"Name" : "Sulawesi Tengah",
		"Code" : "ST"
	}, {
		"Name" : "Sulawesi Tenggara",
		"Code" : "SG"
	}, {
		"Name" : "Sulawesi Utara",
		"Code" : "SA"
	}, {
		"Name" : "Sumatera Barat",
		"Code" : "SR"
	}, {
		"Name" : "Sumatera Selatan",
		"Code" : "SS"
	}, {
		"Name" : "Sumatera Utara",
		"Code" : "SU"
	} ]
}, {
	"Name" : "Iran",
	"Code" : "098"
}, {
	"Name" : "Iraq",
	"Code" : "964"
}, {
	"Name" : "Ireland",
	"Code" : "353",
	"State" : [ {
		"Name" : "Carlow",
		"Code" : "CW"
	}, {
		"Name" : "Cavan",
		"Code" : "CV"
	}, {
		"Name" : "Clare",
		"Code" : "CL"
	}, {
		"Name" : "Cork",
		"Code" : "CK"
	}, {
		"Name" : "Donegal",
		"Code" : "DG"
	}, {
		"Name" : "Dublin",
		"Code" : "DB"
	}, {
		"Name" : "Galway",
		"Code" : "GW"
	}, {
		"Name" : "Kerry",
		"Code" : "KR"
	}, {
		"Name" : "Kildare",
		"Code" : "KD"
	}, {
		"Name" : "Kilkenny",
		"Code" : "KK"
	}, {
		"Name" : "Laois",
		"Code" : "LA"
	}, {
		"Name" : "Leitrim",
		"Code" : "LR"
	}, {
		"Name" : "Limerick",
		"Code" : "LM"
	}, {
		"Name" : "Longford",
		"Code" : "LF"
	}, {
		"Name" : "Louth",
		"Code" : "LT"
	}, {
		"Name" : "Mayo",
		"Code" : "MY"
	}, {
		"Name" : "Meath",
		"Code" : "MT"
	}, {
		"Name" : "Monaghan",
		"Code" : "MG"
	}, {
		"Name" : "Offaly",
		"Code" : "OF"
	}, {
		"Name" : "Roscommon",
		"Code" : "RC"
	}, {
		"Name" : "Sligo",
		"Code" : "SL"
	}, {
		"Name" : "Tipperary",
		"Code" : "TP"
	}, {
		"Name" : "Waterford",
		"Code" : "WF"
	}, {
		"Name" : "Westmeath",
		"Code" : "WM"
	}, {
		"Name" : "Wexford",
		"Code" : "WX"
	}, {
		"Name" : "Wicklow",
		"Code" : "WK"
	} ]
}, {
	"Name" : "Isle of Man",
	"Code" : "IMN"
}, {
	"Name" : "Israel",
	"Code" : "972",
	"State" : [ {
		"Name" : "Ashdod",
		"Code" : "ASH"
	}, {
		"Name" : "Bat Yam",
		"Code" : "BAT"
	}, {
		"Name" : "Beersheba",
		"Code" : "BEV"
	}, {
		"Name" : "Haifa",
		"Code" : "HFA"
	}, {
		"Name" : "Holon",
		"Code" : "HOL"
	}, {
		"Name" : "Jerusalem",
		"Code" : "J"
	}, {
		"Name" : "Netanya",
		"Code" : "NAT"
	}, {
		"Name" : "Tel Aviv-Yafo",
		"Code" : "TLV"
	} ]
}, {
	"Name" : "Italy",
	"Code" : "039",
	"State" : [ {
		"Name" : "Alessandria",
		"Code" : "ALE"
	}, {
		"Name" : "Ancona",
		"Code" : "AOI"
	}, {
		"Name" : "Aosta",
		"Code" : "AOT"
	}, {
		"Name" : "Ascoli Piceno",
		"Code" : "ASP"
	}, {
		"Name" : "Asti",
		"Code" : "AST"
	}, {
		"Name" : "Bari",
		"Code" : "BRI"
	}, {
		"Name" : "Benevento",
		"Code" : "BEN"
	}, {
		"Name" : "Bergamo",
		"Code" : "BGO"
	}, {
		"Name" : "Biella",
		"Code" : "BIE"
	}, {
		"Name" : "Bologna",
		"Code" : "BLQ"
	}, {
		"Name" : "Brescia",
		"Code" : "BRC"
	}, {
		"Name" : "Brindisi",
		"Code" : "BDS"
	}, {
		"Name" : "Cagliari",
		"Code" : "CAG"
	}, {
		"Name" : "Campobasso",
		"Code" : "COB"
	}, {
		"Name" : "Caserta",
		"Code" : "CST"
	}, {
		"Name" : "Catania",
		"Code" : "CTA"
	}, {
		"Name" : "Catanzaro",
		"Code" : "QCZ"
	}, {
		"Name" : "Como",
		"Code" : "CIY"
	}, {
		"Name" : "Cosenza",
		"Code" : "QCS"
	}, {
		"Name" : "Crotone",
		"Code" : "CRV"
	}, {
		"Name" : "Cuneo",
		"Code" : "CUN"
	}, {
		"Name" : "Ferrara",
		"Code" : "FRR"
	}, {
		"Name" : "Firenze",
		"Code" : "FLR"
	}, {
		"Name" : "Foggia",
		"Code" : "FOG"
	}, {
		"Name" : "Genova",
		"Code" : "CAX"
	}, {
		"Name" : "Isernia",
		"Code" : "ISE"
	}, {
		"Name" : "L'Aquila",
		"Code" : "LAQ"
	}, {
		"Name" : "La Spezia",
		"Code" : "SPE"
	}, {
		"Name" : "Lecce",
		"Code" : "LCC"
	}, {
		"Name" : "Lecco",
		"Code" : "LCO"
	}, {
		"Name" : "Livorno",
		"Code" : "LIV"
	}, {
		"Name" : "Massa-Carrara",
		"Code" : "MCR"
	}, {
		"Name" : "Matera",
		"Code" : "MTR"
	}, {
		"Name" : "Messina",
		"Code" : "MSN"
	}, {
		"Name" : "Milano",
		"Code" : "MIL"
	}, {
		"Name" : "Modena",
		"Code" : "MOD"
	}, {
		"Name" : "Monza e Brianza",
		"Code" : "MZA"
	}, {
		"Name" : "Naples",
		"Code" : "NAP"
	}, {
		"Name" : "Novara",
		"Code" : "NVR"
	}, {
		"Name" : "Nuoro",
		"Code" : "QNU"
	}, {
		"Name" : "Olbia-Tempio",
		"Code" : "OLB"
	}, {
		"Name" : "Oristano",
		"Code" : "QOS"
	}, {
		"Name" : "Palermo",
		"Code" : "PMO"
	}, {
		"Name" : "Parma",
		"Code" : "PMF"
	}, {
		"Name" : "Pavia",
		"Code" : "PAV"
	}, {
		"Name" : "Perugia",
		"Code" : "PEG"
	}, {
		"Name" : "Pisa",
		"Code" : "PSA"
	}, {
		"Name" : "Pordenone",
		"Code" : "PRD"
	}, {
		"Name" : "Potenza",
		"Code" : "QPO"
	}, {
		"Name" : "Reggio Calabria",
		"Code" : "REG"
	}, {
		"Name" : "Reggio Emilia",
		"Code" : "RNE"
	}, {
		"Name" : "Roma",
		"Code" : "ROM"
	}, {
		"Name" : "Salerno",
		"Code" : "SAL"
	}, {
		"Name" : "Sassari",
		"Code" : "QSS"
	}, {
		"Name" : "Savona",
		"Code" : "SVN"
	}, {
		"Name" : "Siena",
		"Code" : "SNA"
	}, {
		"Name" : "Syracuse",
		"Code" : "SYR"
	}, {
		"Name" : "Taranto",
		"Code" : "TAR"
	}, {
		"Name" : "Trapani",
		"Code" : "TPS"
	}, {
		"Name" : "Trento",
		"Code" : "TRT"
	}, {
		"Name" : "Trieste",
		"Code" : "TRS"
	}, {
		"Name" : "Turin",
		"Code" : "TRN"
	}, {
		"Name" : "Udine",
		"Code" : "UDN"
	}, {
		"Name" : "Venice",
		"Code" : "VCE"
	}, {
		"Name" : "Vercelli",
		"Code" : "VRL"
	}, {
		"Name" : "Viterbo",
		"Code" : "VIT"
	} ]
}, {
	"Name" : "Jamaica",
	"Code" : "876",
	"State" : [ {
		"Name" : "Clarendon",
		"Code" : "CLA"
	}, {
		"Name" : "Hanover",
		"Code" : "HAN"
	}, {
		"Name" : "Kingston",
		"Code" : "KIN"
	}, {
		"Name" : "Manchester",
		"Code" : "MAN"
	}, {
		"Name" : "Portland",
		"Code" : "POR"
	}, {
		"Name" : "St. Andrews",
		"Code" : "AND"
	}, {
		"Name" : "St. Ann",
		"Code" : "ANN"
	}, {
		"Name" : "St. Catherine",
		"Code" : "CAT"
	}, {
		"Name" : "St. Elizabeth",
		"Code" : "ELI"
	}, {
		"Name" : "St. James",
		"Code" : "JAM"
	}, {
		"Name" : "St. Mary",
		"Code" : "MAR"
	}, {
		"Name" : "St. Thomas",
		"Code" : "THO"
	}, {
		"Name" : "Trelawny",
		"Code" : "TRL"
	}, {
		"Name" : "Westmoreland",
		"Code" : "WML"
	} ]
}, {
	"Name" : "Jersey",
	"Code" : "JEY"
}, {
	"Name" : "Jordan",
	"Code" : "962",
	"State" : [ {
		"Name" : "Allun",
		"Code" : "AJ"
	}, {
		"Name" : "Amman",
		"Code" : "AM"
	}, {
		"Name" : "Aqaba",
		"Code" : "AQ"
	}, {
		"Name" : "Balqa",
		"Code" : "BA"
	}, {
		"Name" : "Irbid",
		"Code" : "IR"
	}, {
		"Name" : "Jarash",
		"Code" : "JA"
	}, {
		"Name" : "Karak",
		"Code" : "KA"
	}, {
		"Name" : "Maan",
		"Code" : "MN"
	}, {
		"Name" : "Madaba",
		"Code" : "MD"
	}, {
		"Name" : "Mafraq",
		"Code" : "MF"
	}, {
		"Name" : "Rusayfah",
		"Code" : "RU"
	}, {
		"Name" : "Tafiela",
		"Code" : "TA"
	}, {
		"Name" : "Zarqa",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Kazakhstan",
	"Code" : "073",
	"State" : [ {
		"Name" : "Aksu",
		"Code" : "AKS"
	}, {
		"Name" : "Almaty",
		"Code" : "ALA"
	}, {
		"Name" : "Aqmola",
		"Code" : "AKM"
	}, {
		"Name" : "Aqtobe",
		"Code" : "AKT"
	}, {
		"Name" : "Arkalyk",
		"Code" : "AYK"
	}, {
		"Name" : "Arys",
		"Code" : "ARY"
	}, {
		"Name" : "Astana",
		"Code" : "AST"
	}, {
		"Name" : "Atyrau",
		"Code" : "ATY"
	}, {
		"Name" : "Balkhash",
		"Code" : "BXH"
	}, {
		"Name" : "Batys Qazaqstan",
		"Code" : "ZAP"
	}, {
		"Name" : "Ekibastuz",
		"Code" : "EKB"
	}, {
		"Name" : "Kapchagay",
		"Code" : "KAP"
	}, {
		"Name" : "Karazhal",
		"Code" : "KZO"
	}, {
		"Name" : "Kentau",
		"Code" : "KEN"
	}, {
		"Name" : "Kurchatov",
		"Code" : "KUR"
	}, {
		"Name" : "Leninogorsk",
		"Code" : "LEN"
	}, {
		"Name" : "Lisakovsk",
		"Code" : "LKK"
	}, {
		"Name" : "Mangghystau",
		"Code" : "MAN"
	}, {
		"Name" : "Ongtustik Qazaqstan",
		"Code" : "KGT"
	}, {
		"Name" : "Pavlodar",
		"Code" : "PAV"
	}, {
		"Name" : "Qaraghandy",
		"Code" : "KAR"
	}, {
		"Name" : "Qostanay",
		"Code" : "KST"
	}, {
		"Name" : "Qyzylorda",
		"Code" : "KZY"
	}, {
		"Name" : "Rudny",
		"Code" : "RUD"
	}, {
		"Name" : "Saran",
		"Code" : "SAR"
	}, {
		"Name" : "Semey",
		"Code" : "SEM"
	}, {
		"Name" : "Shakhtinsk",
		"Code" : "SAK"
	}, {
		"Name" : "Shyghys Qazaqstan",
		"Code" : "VOS"
	}, {
		"Name" : "Soltustik Qazaqstan",
		"Code" : "SEV"
	}, {
		"Name" : "Stepnogorsk",
		"Code" : "STE"
	}, {
		"Name" : "Tekeli",
		"Code" : "TEK"
	}, {
		"Name" : "Temirtau",
		"Code" : "TEM"
	}, {
		"Name" : "Turkestan",
		"Code" : "TUR"
	}, {
		"Name" : "Zhambyl",
		"Code" : "DMB"
	}, {
		"Name" : "Zhanaozen",
		"Code" : "ZHA"
	}, {
		"Name" : "Zhezkazgan",
		"Code" : "DZH"
	}, {
		"Name" : "Zyryanovsk",
		"Code" : "ZYR"
	} ]
}, {
	"Name" : "Kenya",
	"Code" : "254",
	"State" : [ {
		"Name" : "Baringo",
		"Code" : "BAR"
	}, {
		"Name" : "Bomet",
		"Code" : "BOM"
	}, {
		"Name" : "Bungoma",
		"Code" : "BUN"
	}, {
		"Name" : "Busia",
		"Code" : "BUS"
	}, {
		"Name" : "Central",
		"Code" : "CE"
	}, {
		"Name" : "Elgeyo-Marakwet",
		"Code" : "EMA"
	}, {
		"Name" : "Embu",
		"Code" : "EMB"
	}, {
		"Name" : "Garissa",
		"Code" : "GAS"
	}, {
		"Name" : "Homa Bay",
		"Code" : "HOB"
	}, {
		"Name" : "Isiolo",
		"Code" : "ISI"
	}, {
		"Name" : "Kajiado",
		"Code" : "KAJ"
	}, {
		"Name" : "Kakamega",
		"Code" : "KAK"
	}, {
		"Name" : "Kericho",
		"Code" : "KEY"
	}, {
		"Name" : "Kiambu",
		"Code" : "KIA"
	}, {
		"Name" : "Kilifi",
		"Code" : "KIL"
	}, {
		"Name" : "Kirinyaga",
		"Code" : "KIR"
	}, {
		"Name" : "Kisii",
		"Code" : "KII"
	}, {
		"Name" : "Kisumu",
		"Code" : "KIS"
	}, {
		"Name" : "Kitui",
		"Code" : "KIT"
	}, {
		"Name" : "Kwale",
		"Code" : "KWA"
	}, {
		"Name" : "Laikipia",
		"Code" : "LAI"
	}, {
		"Name" : "Lamu",
		"Code" : "LAU"
	}, {
		"Name" : "Machakos",
		"Code" : "MAC"
	}, {
		"Name" : "Makueni",
		"Code" : "MAK"
	}, {
		"Name" : "Mandera",
		"Code" : "MAN"
	}, {
		"Name" : "Marsabit",
		"Code" : "RBT"
	}, {
		"Name" : "Meru",
		"Code" : "MER"
	}, {
		"Name" : "Migori",
		"Code" : "MIG"
	}, {
		"Name" : "Mombasa",
		"Code" : "MOM"
	}, {
		"Name" : "Muranga",
		"Code" : "MUR"
	}, {
		"Name" : "Nairobi",
		"Code" : "NA"
	}, {
		"Name" : "Nakuru",
		"Code" : "NUU"
	}, {
		"Name" : "Nandi",
		"Code" : "NAN"
	}, {
		"Name" : "Narok",
		"Code" : "NAR"
	}, {
		"Name" : "Nithi",
		"Code" : "NIT"
	}, {
		"Name" : "Nyamira",
		"Code" : "NYM"
	}, {
		"Name" : "Nyandarua",
		"Code" : "NYN"
	}, {
		"Name" : "Nyeri",
		"Code" : "NYE"
	}, {
		"Name" : "Samburu",
		"Code" : "UAS"
	}, {
		"Name" : "Siaya",
		"Code" : "SIA"
	}, {
		"Name" : "Taita-Taveta",
		"Code" : "TTA"
	}, {
		"Name" : "Tana River",
		"Code" : "TRI"
	}, {
		"Name" : "Trans-Nzoia",
		"Code" : "TNZ"
	}, {
		"Name" : "Turkana",
		"Code" : "TUR"
	}, {
		"Name" : "Uasin Gishu",
		"Code" : "UGI"
	}, {
		"Name" : "Vihiga",
		"Code" : "VIH"
	}, {
		"Name" : "Wajir",
		"Code" : "WJR"
	}, {
		"Name" : "West Pokot",
		"Code" : "WPO"
	} ]
}, {
	"Name" : "Kiribati",
	"Code" : "686",
	"State" : [ {
		"Name" : "Gilberts Islands",
		"Code" : "GIL"
	}, {
		"Name" : "Line Islands",
		"Code" : "LIN"
	}, {
		"Name" : "Phoenix Islands",
		"Code" : "PHO"
	} ]
}, {
	"Name" : "Korea",
	"Code" : "082",
	"State" : [ {
		"Name" : "Busan",
		"Code" : "26"
	}, {
		"Name" : "Chungcheongbuk-do",
		"Code" : "43",
		"City" : [ {
			"Name" : "Andong",
			"Code" : "ADG"
		}, {
			"Name" : "Bonghwa County",
			"Code" : "BHA"
		}, {
			"Name" : "Cheongdo County",
			"Code" : "CDO"
		}, {
			"Name" : "Cheongsong County",
			"Code" : "CSG"
		}, {
			"Name" : "Chilgok County",
			"Code" : "CGK"
		}, {
			"Name" : "Gimcheon",
			"Code" : "KMC"
		}, {
			"Name" : "Goryeong County",
			"Code" : "GRG"
		}, {
			"Name" : "Gumi",
			"Code" : "KUM"
		}, {
			"Name" : "Gunwi County",
			"Code" : "GWI"
		}, {
			"Name" : "Gyeongju",
			"Code" : "GJU"
		}, {
			"Name" : "Gyeongsan",
			"Code" : "GYS"
		}, {
			"Name" : "Mungyeong",
			"Code" : "MGG"
		}, {
			"Name" : "Pohang",
			"Code" : "KPO"
		}, {
			"Name" : "Sangju",
			"Code" : "SJU"
		}, {
			"Name" : "Seongju County",
			"Code" : "SEJ"
		}, {
			"Name" : "Uiseong County",
			"Code" : "USG"
		}, {
			"Name" : "Uljin County",
			"Code" : "UJN"
		}, {
			"Name" : "Ulleung County",
			"Code" : "ULG"
		}, {
			"Name" : "Yecheon County",
			"Code" : "YEC"
		}, {
			"Name" : "Yeongcheon",
			"Code" : "YCH"
		}, {
			"Name" : "Yeongdeok County",
			"Code" : "YDK"
		}, {
			"Name" : "Yeongju",
			"Code" : "YEJ"
		}, {
			"Name" : "Yeongyang County",
			"Code" : "YYG"
		} ]
	}, {
		"Name" : "Chungcheongnam-do",
		"Code" : "44",
		"City" : [ {
			"Name" : "Changnyeong County",
			"Code" : "CNG"
		}, {
			"Name" : "Changwon",
			"Code" : "CHW"
		}, {
			"Name" : "Geochang County",
			"Code" : "GCH"
		}, {
			"Name" : "Geoje",
			"Code" : "KJE"
		}, {
			"Name" : "Gimhae",
			"Code" : "KMH"
		}, {
			"Name" : "Goseong County",
			"Code" : "GSO"
		}, {
			"Name" : "Hadong County",
			"Code" : "HDG"
		}, {
			"Name" : "Haman County",
			"Code" : "HAN"
		}, {
			"Name" : "Hamyang County",
			"Code" : "HYG"
		}, {
			"Name" : "Hapcheon County",
			"Code" : "HCE"
		}, {
			"Name" : "Jinhae",
			"Code" : "CHF"
		}, {
			"Name" : "Jinju",
			"Code" : "HIN"
		}, {
			"Name" : "Masan",
			"Code" : "MAS"
		}, {
			"Name" : "Miryang",
			"Code" : "MIR"
		}, {
			"Name" : "Namhae County",
			"Code" : "NHE"
		}, {
			"Name" : "Sacheon",
			"Code" : "SAH"
		}, {
			"Name" : "Sancheong County",
			"Code" : "SCH"
		}, {
			"Name" : "Tongyeong",
			"Code" : "TYG"
		}, {
			"Name" : "Uiryeong County",
			"Code" : "URG"
		}, {
			"Name" : "Yangsan",
			"Code" : "YSN"
		} ]
	}, {
		"Name" : "Daegu",
		"Code" : "27",
		"City" : [ {
			"Name" : "Daegu",
			"Code" : "TAE"
		}, {
			"Name" : "Dalseong-gun",
			"Code" : "DSG"
		}, {
			"Name" : "Suseong-gu",
			"Code" : "SUS"
		} ]
	}, {
		"Name" : "Daejeon",
		"Code" : "30"
	}, {
		"Name" : "Gangwon-do",
		"Code" : "42",
		"City" : [ {
			"Name" : "Cheorwon County",
			"Code" : "CWN"
		}, {
			"Name" : "Chuncheon",
			"Code" : "CHC"
		}, {
			"Name" : "Donghae",
			"Code" : "TGH"
		}, {
			"Name" : "Gangneung",
			"Code" : "KAG"
		}, {
			"Name" : "Goseong County",
			"Code" : "GSG"
		}, {
			"Name" : "Hoengseong County",
			"Code" : "HSG"
		}, {
			"Name" : "Hongcheon County",
			"Code" : "HCN"
		}, {
			"Name" : "Hwacheon County",
			"Code" : "HCH"
		}, {
			"Name" : "Inje County",
			"Code" : "IJE"
		}, {
			"Name" : "Jeongseon County",
			"Code" : "JSE"
		}, {
			"Name" : "Pyeongchang County",
			"Code" : "POG"
		}, {
			"Name" : "Samcheok",
			"Code" : "SUK"
		}, {
			"Name" : "Sokcho",
			"Code" : "SHO"
		}, {
			"Name" : "Taebaek",
			"Code" : "TBK"
		}, {
			"Name" : "Wonju",
			"Code" : "WJU"
		}, {
			"Name" : "Yanggu County",
			"Code" : "YGU"
		}, {
			"Name" : "Yangyang County",
			"Code" : "YNY"
		}, {
			"Name" : "Yeongwol County",
			"Code" : "YWL"
		} ]
	}, {
		"Name" : "Gwangju",
		"Code" : "29"
	}, {
		"Name" : "Jeju-do",
		"Code" : "41"
	}, {
		"Name" : "Gyeongsangbuk-do",
		"Code" : "47",
		"City" : [ {
			"Name" : "Buan County",
			"Code" : "PUS"
		}, {
			"Name" : "Gimje",
			"Code" : "GJE"
		}, {
			"Name" : "Gochang County",
			"Code" : "GCG"
		}, {
			"Name" : "Gunsan",
			"Code" : "KUV"
		}, {
			"Name" : "Iksan",
			"Code" : "IKS"
		}, {
			"Name" : "Imsil County",
			"Code" : "ISL"
		}, {
			"Name" : "Jangsu County",
			"Code" : "JSU"
		}, {
			"Name" : "Jeongeup",
			"Code" : "JEO"
		}, {
			"Name" : "Jeonju",
			"Code" : "JNJ"
		}, {
			"Name" : "Jinan County",
			"Code" : "JAN"
		}, {
			"Name" : "Muju County",
			"Code" : "MJU"
		}, {
			"Name" : "Namwon",
			"Code" : "NWN"
		}, {
			"Name" : "Sunchang County",
			"Code" : "SCG"
		}, {
			"Name" : "Wanju County",
			"Code" : "WAJ"
		} ]
	}, {
		"Name" : "Gyeongsangnam-do",
		"Code" : "48",
		"City" : [ {
			"Name" : "Boseong County",
			"Code" : "BSG"
		}, {
			"Name" : "Damyang County",
			"Code" : "DYA"
		}, {
			"Name" : "Gangjin County",
			"Code" : "GJN"
		}, {
			"Name" : "Goheung County",
			"Code" : "GHG"
		}, {
			"Name" : "Gokseong County",
			"Code" : "GSE"
		}, {
			"Name" : "Gurye County",
			"Code" : "GRE"
		}, {
			"Name" : "Gwangyang",
			"Code" : "KAN"
		}, {
			"Name" : "Haenam County",
			"Code" : "HAE"
		}, {
			"Name" : "Hampyeong County",
			"Code" : "HPG"
		}, {
			"Name" : "Hwasun County",
			"Code" : "HSN"
		}, {
			"Name" : "Jangheung County",
			"Code" : "JHG"
		}, {
			"Name" : "Jangseong County",
			"Code" : "JSN"
		}, {
			"Name" : "Jindo County",
			"Code" : "JDO"
		}, {
			"Name" : "Mokpo",
			"Code" : "MOK"
		}, {
			"Name" : "Muan County",
			"Code" : "MAN"
		}, {
			"Name" : "Naju",
			"Code" : "NJU"
		}, {
			"Name" : "Sinan County",
			"Code" : "SAN"
		}, {
			"Name" : "Suncheon",
			"Code" : "SYS"
		}, {
			"Name" : "Wando County",
			"Code" : "WND"
		}, {
			"Name" : "Yeongam County",
			"Code" : "YAM"
		}, {
			"Name" : "Yeonggwang County",
			"Code" : "YGG"
		}, {
			"Name" : "Yeosu",
			"Code" : "YOS"
		} ]
	}, {
		"Name" : "Incheon",
		"Code" : "28"
	}, {
		"Name" : "Gyeonggi-do",
		"Code" : "49",
		"City" : [ {
			"Name" : "Ansan",
			"Code" : "ASN"
		}, {
			"Name" : "Anseong",
			"Code" : "ASG"
		}, {
			"Name" : "Anyang",
			"Code" : "ANY"
		}, {
			"Name" : "Bucheon",
			"Code" : "BCN"
		}, {
			"Name" : "Dongducheon",
			"Code" : "DDC"
		}, {
			"Name" : "Gapyeong County",
			"Code" : "GPG"
		}, {
			"Name" : "Gimpo",
			"Code" : "GMP"
		}, {
			"Name" : "Goyang",
			"Code" : "GYG"
		}, {
			"Name" : "Gunpo",
			"Code" : "GUN"
		}, {
			"Name" : "Guri",
			"Code" : "GRI"
		}, {
			"Name" : "Gwacheon",
			"Code" : "GCN"
		}, {
			"Name" : "Gwangju",
			"Code" : "KWU"
		}, {
			"Name" : "Gwangmyeong",
			"Code" : "GMG"
		}, {
			"Name" : "Hanam",
			"Code" : "HNM"
		}, {
			"Name" : "Hwaseong",
			"Code" : "HCH"
		}, {
			"Name" : "Icheon",
			"Code" : "ICE"
		}, {
			"Name" : "Namyangju",
			"Code" : "NYU"
		}, {
			"Name" : "Osan",
			"Code" : "OSN"
		}, {
			"Name" : "Paju",
			"Code" : "PJU"
		}, {
			"Name" : "Pocheon",
			"Code" : "POC"
		}, {
			"Name" : "Pyeongtaek",
			"Code" : "PTK"
		}, {
			"Name" : "Seongnam",
			"Code" : "SEO"
		}, {
			"Name" : "Siheung",
			"Code" : "SHE"
		}, {
			"Name" : "Suwon",
			"Code" : "SUO"
		}, {
			"Name" : "Uijeongbu",
			"Code" : "UIJ"
		}, {
			"Name" : "Uiwang",
			"Code" : "UWN"
		}, {
			"Name" : "Yangju",
			"Code" : "YYU"
		}, {
			"Name" : "Yangpyeong County",
			"Code" : "YPG"
		}, {
			"Name" : "Yeoju County",
			"Code" : "YJU"
		}, {
			"Name" : "Yeoncheon County",
			"Code" : "YCN"
		}, {
			"Name" : "Yongin",
			"Code" : "YNG"
		} ]
	}, {
		"Name" : "Jeollabuk-do",
		"Code" : "45",
		"City" : [ {
			"Name" : "Boeun County",
			"Code" : "BEN"
		}, {
			"Name" : "Cheongju",
			"Code" : "CJJ"
		}, {
			"Name" : "Cheongwon County",
			"Code" : "CWO"
		}, {
			"Name" : "Chungju",
			"Code" : "CHU"
		}, {
			"Name" : "Danyang County",
			"Code" : "DYG"
		}, {
			"Name" : "Eumseong County",
			"Code" : "ESG"
		}, {
			"Name" : "Goesan County",
			"Code" : "GSN"
		}, {
			"Name" : "Jecheon",
			"Code" : "JCH"
		}, {
			"Name" : "Jeungpyeong County",
			"Code" : "JYG"
		}, {
			"Name" : "Jincheon County",
			"Code" : "JCN"
		}, {
			"Name" : "Okcheon County",
			"Code" : "OCN"
		}, {
			"Name" : "Yeongdong County",
			"Code" : "YDG"
		} ]
	}, {
		"Name" : "Jeollanam-do",
		"Code" : "46",
		"City" : [ {
			"Name" : "Asan",
			"Code" : "ASA"
		}, {
			"Name" : "Boryeong",
			"Code" : "BOR"
		}, {
			"Name" : "Buyeo County",
			"Code" : "BYO"
		}, {
			"Name" : "Cheonan",
			"Code" : "CHO"
		}, {
			"Name" : "Cheongyang County",
			"Code" : "CYG"
		}, {
			"Name" : "Dangjin County",
			"Code" : "TJI"
		}, {
			"Name" : "Geumsan County",
			"Code" : "GSA"
		}, {
			"Name" : "Gongju",
			"Code" : "GOJ"
		}, {
			"Name" : "Gyeryong",
			"Code" : "GYE"
		}, {
			"Name" : "Hongseong County",
			"Code" : "HSE"
		}, {
			"Name" : "Nonsan",
			"Code" : "NSN"
		}, {
			"Name" : "Seocheon County",
			"Code" : "SCE"
		}, {
			"Name" : "Seosan",
			"Code" : "SSA"
		}, {
			"Name" : "Taean County",
			"Code" : "TAN"
		}, {
			"Name" : "Yeongi County",
			"Code" : "YGI"
		}, {
			"Name" : "Yesan County",
			"Code" : "YOS"
		} ]
	}, {
		"Name" : "Seoul",
		"Code" : "11"
	}, {
		"Name" : "Ulsan",
		"Code" : "31"
	} ]
}, {
	"Name" : "Kuwait",
	"Code" : "965"
}, {
	"Name" : "Kyrgyzstan",
	"Code" : "996",
	"State" : [ {
		"Name" : "Batken",
		"Code" : "B"
	}, {
		"Name" : "Bishkek",
		"Code" : "GB"
	}, {
		"Name" : "Chuy",
		"Code" : "C"
	}, {
		"Name" : "Jalal-Abad",
		"Code" : "J"
	}, {
		"Name" : "Kant",
		"Code" : "KAN"
	}, {
		"Name" : "Karabalta",
		"Code" : "KBA"
	}, {
		"Name" : "Kara-Kol",
		"Code" : "KKO"
	}, {
		"Name" : "Kok-Jangak",
		"Code" : "KJ"
	}, {
		"Name" : "Mailuu-Suu",
		"Code" : "MS"
	}, {
		"Name" : "Naryn",
		"Code" : "N"
	}, {
		"Name" : "Osh",
		"Code" : "O"
	}, {
		"Name" : "Suluktu",
		"Code" : "SU"
	}, {
		"Name" : "Talas",
		"Code" : "T"
	}, {
		"Name" : "Tash-Kumyr",
		"Code" : "TK"
	}, {
		"Name" : "Uzgen",
		"Code" : "UG"
	}, {
		"Name" : "Ysyk-Kol",
		"Code" : "Y"
	} ]
}, {
	"Name" : "Laos",
	"Code" : "856",
	"State" : [ {
		"Name" : "Attapu",
		"Code" : "AT"
	}, {
		"Name" : "Bokeo",
		"Code" : "BK"
	}, {
		"Name" : "Bolikhamxai",
		"Code" : "BL"
	}, {
		"Name" : "Champasak",
		"Code" : "CH"
	}, {
		"Name" : "Houaphan",
		"Code" : "HO"
	}, {
		"Name" : "Khammouan",
		"Code" : "KH"
	}, {
		"Name" : "Louang Namtha",
		"Code" : "LM"
	}, {
		"Name" : "Louangphrabang",
		"Code" : "LP"
	}, {
		"Name" : "Oudomxai",
		"Code" : "OU"
	}, {
		"Name" : "Phongsali",
		"Code" : "PH"
	}, {
		"Name" : "Saravan",
		"Code" : "SL"
	}, {
		"Name" : "Savannakhet",
		"Code" : "SV"
	}, {
		"Name" : "Vientiane",
		"Code" : "VI"
	}, {
		"Name" : "Xaignabouri",
		"Code" : "XA"
	}, {
		"Name" : "Xaisomboun",
		"Code" : "XN"
	}, {
		"Name" : "Xekong",
		"Code" : "XE"
	}, {
		"Name" : "Xiangkhoang",
		"Code" : "XI"
	} ]
}, {
	"Name" : "Latvia",
	"Code" : "371",
	"State" : [ {
		"Name" : "Aizkraukles",
		"Code" : "AIZ"
	}, {
		"Name" : "Aluksnes",
		"Code" : "ALU"
	}, {
		"Name" : "Balvu",
		"Code" : "BAL"
	}, {
		"Name" : "Bauskas",
		"Code" : "BAU"
	}, {
		"Name" : "Cesu",
		"Code" : "CES"
	}, {
		"Name" : "Daugavpils",
		"Code" : "DGR"
	}, {
		"Name" : "Dobeles",
		"Code" : "DOB"
	}, {
		"Name" : "Gulbenes",
		"Code" : "GUL"
	}, {
		"Name" : "Jekabpils",
		"Code" : "JEK"
	}, {
		"Name" : "Jelgavas",
		"Code" : "JGR"
	}, {
		"Name" : "Kraslavas",
		"Code" : "KRA"
	}, {
		"Name" : "Kuldigas",
		"Code" : "KUL"
	}, {
		"Name" : "Liepajas",
		"Code" : "LPK"
	}, {
		"Name" : "Limbazu",
		"Code" : "LIM"
	}, {
		"Name" : "Ludzas",
		"Code" : "LUD"
	}, {
		"Name" : "Madonas",
		"Code" : "MAD"
	}, {
		"Name" : "Ogres",
		"Code" : "OGR"
	}, {
		"Name" : "Preilu",
		"Code" : "PRE"
	}, {
		"Name" : "Rezeknes",
		"Code" : "RZR"
	}, {
		"Name" : "Rigas",
		"Code" : "RGA"
	}, {
		"Name" : "Saldus",
		"Code" : "SAL"
	}, {
		"Name" : "Talsu",
		"Code" : "TAL"
	}, {
		"Name" : "Tukuma",
		"Code" : "TUK"
	}, {
		"Name" : "Valkas",
		"Code" : "VLK"
	}, {
		"Name" : "Valmieras",
		"Code" : "VLM"
	}, {
		"Name" : "Ventspils",
		"Code" : "VSL"
	} ]
}, {
	"Name" : "Lebanon",
	"Code" : "961",
	"State" : [ {
		"Name" : "Al-Biqa",
		"Code" : "BI"
	}, {
		"Name" : "Al-Janub",
		"Code" : "JA"
	}, {
		"Name" : "An-Nabatiyah",
		"Code" : "NA"
	}, {
		"Name" : "Ash-Shamal",
		"Code" : "AS"
	}, {
		"Name" : "Bayrut",
		"Code" : "BA"
	}, {
		"Name" : "Jabal Lubnan",
		"Code" : "JL"
	} ]
}, {
	"Name" : "Lesotho",
	"Code" : "266",
	"State" : [ {
		"Name" : "Berea",
		"Code" : "D"
	}, {
		"Name" : "Butha-Buthe",
		"Code" : "B"
	}, {
		"Name" : "Leribe",
		"Code" : "C"
	}, {
		"Name" : "Mafeteng",
		"Code" : "E"
	}, {
		"Name" : "Maseru",
		"Code" : "A"
	}, {
		"Name" : "Mohales Hoek",
		"Code" : "F"
	}, {
		"Name" : "Mokhotlong",
		"Code" : "J"
	}, {
		"Name" : "Qachas Nek",
		"Code" : "H"
	}, {
		"Name" : "Quthing",
		"Code" : "G"
	}, {
		"Name" : "Thaba-Tseka",
		"Code" : "K"
	} ]
}, {
	"Name" : "Liberia",
	"Code" : "231",
	"State" : [ {
		"Name" : "Bomi",
		"Code" : "BM"
	}, {
		"Name" : "Bong",
		"Code" : "BG"
	}, {
		"Name" : "Bopolu",
		"Code" : "BOP"
	}, {
		"Name" : "Fish Town",
		"Code" : "FT"
	}, {
		"Name" : "Gbarpolu",
		"Code" : "GBA"
	}, {
		"Name" : "Grand Bassa",
		"Code" : "GB"
	}, {
		"Name" : "Grand Cape Mount",
		"Code" : "CM"
	}, {
		"Name" : "Grand Gedeh",
		"Code" : "GG"
	}, {
		"Name" : "Grand Kru",
		"Code" : "GK"
	}, {
		"Name" : "Lofa",
		"Code" : "LO"
	}, {
		"Name" : "Margibi",
		"Code" : "MG"
	}, {
		"Name" : "Maryland",
		"Code" : "MY"
	}, {
		"Name" : "Montserrado",
		"Code" : "MO"
	}, {
		"Name" : "Nimba",
		"Code" : "NI"
	}, {
		"Name" : "River Cess",
		"Code" : "RI"
	}, {
		"Name" : "River Gee",
		"Code" : "RG"
	}, {
		"Name" : "Sinoe",
		"Code" : "SI"
	} ]
}, {
	"Name" : "Libya",
	"Code" : "218"
}, {
	"Name" : "Liechtenstein",
	"Code" : "423"
}, {
	"Name" : "Lithuania",
	"Code" : "370",
	"State" : [ {
		"Name" : "Akmenes",
		"Code" : "AKM"
	}, {
		"Name" : "Alytus",
		"Code" : "AL"
	}, {
		"Name" : "Kaunas",
		"Code" : "KA"
	}, {
		"Name" : "Klaipeda",
		"Code" : "KL"
	}, {
		"Name" : "Marijampole",
		"Code" : "MA"
	}, {
		"Name" : "Panevezys",
		"Code" : "PA"
	}, {
		"Name" : "Siauliai",
		"Code" : "SI"
	}, {
		"Name" : "Taurages",
		"Code" : "TA"
	}, {
		"Name" : "Telsiu",
		"Code" : "TE"
	}, {
		"Name" : "Utenos",
		"Code" : "UT"
	}, {
		"Name" : "Vilnius",
		"Code" : "VI"
	} ]
}, {
	"Name" : "Luxembourg",
	"Code" : "352",
	"State" : [ {
		"Name" : "Diekirch",
		"Code" : "DD"
	}, {
		"Name" : "Grevenmacher",
		"Code" : "GG"
	}, {
		"Name" : "Luxembourg",
		"Code" : "LL"
	} ]
}, {
	"Name" : "Macedonia,Former Yugoslav Republic of",
	"Code" : "389"
}, {
	"Name" : "Madagascar",
	"Code" : "261",
	"State" : [ {
		"Name" : "Antananarivo",
		"Code" : "AN"
	}, {
		"Name" : "Antsiranana",
		"Code" : "AS"
	}, {
		"Name" : "Fianarantsoa",
		"Code" : "FN"
	}, {
		"Name" : "Mahajanga",
		"Code" : "MJ"
	}, {
		"Name" : "Toamasina",
		"Code" : "TM"
	}, {
		"Name" : "Toliary",
		"Code" : "TL"
	} ]
}, {
	"Name" : "Malawi",
	"Code" : "265",
	"State" : [ {
		"Name" : "Central",
		"Code" : "C"
	}, {
		"Name" : "Northern",
		"Code" : "N"
	}, {
		"Name" : "Southern",
		"Code" : "S"
	} ]
}, {
	"Name" : "Malaysia",
	"Code" : "060",
	"State" : [ {
		"Name" : "Johor",
		"Code" : "JH",
		"City" : [ {
			"Name" : "Batu Pahat",
			"Code" : "BAT"
		}, {
			"Name" : "Johor Bahru",
			"Code" : "JHB"
		}, {
			"Name" : "Kluang",
			"Code" : "KLA"
		}, {
			"Name" : "Kota Tinggi",
			"Code" : "KTI"
		}, {
			"Name" : "Mersing",
			"Code" : "MEP"
		}, {
			"Name" : "Muar",
			"Code" : "MUA"
		}, {
			"Name" : "Pontian",
			"Code" : "POW"
		}, {
			"Name" : "Segamat",
			"Code" : "SGM"
		} ]
	}, {
		"Name" : "Kedah",
		"Code" : "KD",
		"City" : [ {
			"Name" : "Baling",
			"Code" : "BLZ"
		}, {
			"Name" : "Bandar Baharu",
			"Code" : "BMA"
		}, {
			"Name" : "Kota Setar",
			"Code" : "KOR"
		}, {
			"Name" : "Kuala Muda",
			"Code" : "KMU"
		}, {
			"Name" : "Kubang Pasu",
			"Code" : "KPA"
		}, {
			"Name" : "Kulim",
			"Code" : "KLM"
		}, {
			"Name" : "Langkawi",
			"Code" : "LGK"
		}, {
			"Name" : "Padang Terap",
			"Code" : "PGT"
		}, {
			"Name" : "Pendang",
			"Code" : "PEN"
		} ]
	}, {
		"Name" : "Kelantan",
		"Code" : "KN",
		"City" : [ {
			"Name" : "Bachok",
			"Code" : "BAC"
		}, {
			"Name" : "Gua Musang",
			"Code" : "GMU"
		}, {
			"Name" : "Jeli",
			"Code" : "JEL"
		}, {
			"Name" : "Kota Bharu",
			"Code" : "KBR"
		}, {
			"Name" : "Kuala Krai",
			"Code" : "KUG"
		}, {
			"Name" : "Machang",
			"Code" : "MAC"
		}, {
			"Name" : "Pasir Mas",
			"Code" : "PMA"
		}, {
			"Name" : "Pasir Putih",
			"Code" : "PPU"
		}, {
			"Name" : "Tanah Merah",
			"Code" : "TMR"
		}, {
			"Name" : "Tumpat",
			"Code" : "TUM"
		} ]
	}, {
		"Name" : "Kuala Lumpur",
		"Code" : "KL",
		"City" : {
			"Name" : "Kuala Lumpur",
			"Code" : "KUL"
		}
	}, {
		"Name" : "Labuan",
		"Code" : "LB",
		"City" : [ {
			"Name" : "Labuan",
			"Code" : "LBU"
		}, {
			"Name" : "Victoria",
			"Code" : "VIC"
		} ]
	}, {
		"Name" : "Malacca",
		"Code" : "ML",
		"City" : [ {
			"Name" : "Alor Gajah",
			"Code" : "AOG"
		}, {
			"Name" : "Jasin",
			"Code" : "JAS"
		}, {
			"Name" : "Melaka",
			"Code" : "MEL"
		} ]
	}, {
		"Name" : "Negeri Sembilan",
		"Code" : "NS",
		"City" : [ {
			"Name" : "Jelebu",
			"Code" : "JEL"
		}, {
			"Name" : "Jempol",
			"Code" : "JEP"
		}, {
			"Name" : "Kuala Pilah",
			"Code" : "KPI"
		}, {
			"Name" : "Port Dickson",
			"Code" : "PDI"
		}, {
			"Name" : "Rembau",
			"Code" : "REM"
		}, {
			"Name" : "Seremban",
			"Code" : "SRB"
		}, {
			"Name" : "Tampin",
			"Code" : "TAI"
		} ]
	}, {
		"Name" : "Pahang",
		"Code" : "PG",
		"City" : [ {
			"Name" : "Bentong",
			"Code" : "BEN"
		}, {
			"Name" : "Bera",
			"Code" : "BER"
		}, {
			"Name" : "Cameron Highlands",
			"Code" : "CAH"
		}, {
			"Name" : "Jerantut",
			"Code" : "JER"
		}, {
			"Name" : "Kuala Lipis",
			"Code" : "KUL"
		}, {
			"Name" : "Kuantan",
			"Code" : "KUA"
		}, {
			"Name" : "Maran",
			"Code" : "MAR"
		}, {
			"Name" : "Pekan",
			"Code" : "PEK"
		}, {
			"Name" : "Raub",
			"Code" : "RAU"
		}, {
			"Name" : "Rompin",
			"Code" : "TOM"
		}, {
			"Name" : "Temerloh",
			"Code" : "TEM"
		} ]
	}, {
		"Name" : "Perak",
		"Code" : "PK",
		"City" : [ {
			"Name" : "Batu Gajah",
			"Code" : "BGA"
		}, {
			"Name" : "Ipoh",
			"Code" : "IPH"
		}, {
			"Name" : "Kuala Kangsar",
			"Code" : "KAR"
		}, {
			"Name" : "Lumut",
			"Code" : "LUM"
		}, {
			"Name" : "Sungai Siput",
			"Code" : "SSP"
		}, {
			"Name" : "Taiping",
			"Code" : "TPG"
		}, {
			"Name" : "Tanjung Malim",
			"Code" : "TAM"
		}, {
			"Name" : "Teluk Intan",
			"Code" : "TAS"
		} ]
	}, {
		"Name" : "Perlis",
		"Code" : "PS",
		"City" : {
			"Name" : "Kangar",
			"Code" : "KGR"
		}
	}, {
		"Name" : "Pulau Pinang",
		"Code" : "PH",
		"City" : [ {
			"Name" : "Bukit Mertajam",
			"Code" : "BMJ"
		}, {
			"Name" : "Butterworth",
			"Code" : "BWH"
		}, {
			"Name" : "George Town",
			"Code" : "PEN"
		}, {
			"Name" : "Nibong Tebal",
			"Code" : "NTE"
		} ]
	}, {
		"Name" : "Sabah",
		"Code" : "SB",
		"City" : [ {
			"Name" : "Beaufort",
			"Code" : "BEF"
		}, {
			"Name" : "Beluran",
			"Code" : "BEL"
		}, {
			"Name" : "Keningau",
			"Code" : "KEG"
		}, {
			"Name" : "Kinabatangan",
			"Code" : "KBT"
		}, {
			"Name" : "Kota Belud",
			"Code" : "KBD"
		}, {
			"Name" : "Kota Kinabalu",
			"Code" : "BKI"
		}, {
			"Name" : "Kota Marudu",
			"Code" : "KMU"
		}, {
			"Name" : "Kuala Penyu",
			"Code" : "KPU"
		}, {
			"Name" : "Kudat",
			"Code" : "KUD"
		}, {
			"Name" : "Kunak",
			"Code" : "KUN"
		}, {
			"Name" : "Lahad Datu",
			"Code" : "LDU"
		}, {
			"Name" : "Nabawan",
			"Code" : "NAB"
		}, {
			"Name" : "Papar",
			"Code" : "PAP"
		}, {
			"Name" : "Penampang",
			"Code" : "PMP"
		}, {
			"Name" : "Pitas",
			"Code" : "PIT"
		}, {
			"Name" : "Ranau",
			"Code" : "RNU"
		}, {
			"Name" : "Sandakan",
			"Code" : "SDK"
		}, {
			"Name" : "Semporna",
			"Code" : "SMM"
		}, {
			"Name" : "Sipitang",
			"Code" : "SPT"
		}, {
			"Name" : "Tambunan",
			"Code" : "TAB"
		}, {
			"Name" : "Tawau",
			"Code" : "TAW"
		}, {
			"Name" : "Tenom",
			"Code" : "TEN"
		}, {
			"Name" : "Tuaran",
			"Code" : "TUR"
		} ]
	}, {
		"Name" : "Sarawak",
		"Code" : "SR",
		"City" : [ {
			"Name" : "Betong",
			"Code" : "BTG"
		}, {
			"Name" : "Bintulu",
			"Code" : "BTU"
		}, {
			"Name" : "Kapit",
			"Code" : "KPI"
		}, {
			"Name" : "Kuching",
			"Code" : "KCH"
		}, {
			"Name" : "Limbang",
			"Code" : "LMN"
		}, {
			"Name" : "Miri",
			"Code" : "MYY"
		}, {
			"Name" : "Mukah",
			"Code" : "MKM"
		}, {
			"Name" : "Samarahan",
			"Code" : "SMH"
		}, {
			"Name" : "Sarikei",
			"Code" : "SAR"
		}, {
			"Name" : "Sibu",
			"Code" : "SBW"
		}, {
			"Name" : "Sri Aman",
			"Code" : "SAM"
		} ]
	}, {
		"Name" : "Selangor",
		"Code" : "SL",
		"City" : [ {
			"Name" : "Gombak",
			"Code" : "GOM"
		}, {
			"Name" : "Hulu Langat",
			"Code" : "HUL"
		}, {
			"Name" : "Hulu Selangor",
			"Code" : "HUS"
		}, {
			"Name" : "Kuala Langat",
			"Code" : "KLG"
		}, {
			"Name" : "Kuala Selangor",
			"Code" : "KSL"
		}, {
			"Name" : "Petaling",
			"Code" : "PJA"
		}, {
			"Name" : "Sabak Bernam",
			"Code" : "SBM"
		}, {
			"Name" : "Sepang",
			"Code" : "SEP"
		} ]
	}, {
		"Name" : "Terengganu",
		"Code" : "TR",
		"City" : [ {
			"Name" : "Besut",
			"Code" : "BES"
		}, {
			"Name" : "Dungun",
			"Code" : "DGN"
		}, {
			"Name" : "Hulu",
			"Code" : "HUL"
		}, {
			"Name" : "Kemaman",
			"Code" : "KEM"
		}, {
			"Name" : "Kuala Terengganu",
			"Code" : "TGG"
		}, {
			"Name" : "Marang",
			"Code" : "MAR"
		}, {
			"Name" : "Setiu",
			"Code" : "SET"
		} ]
	} ]
}, {
	"Name" : "Maldives",
	"Code" : "960",
	"State" : [ {
		"Name" : "Addu Atoll",
		"Code" : "ADD"
	}, {
		"Name" : "Faadhippolhu",
		"Code" : "FAA"
	}, {
		"Name" : "Felidhu Atoll",
		"Code" : "FEA"
	}, {
		"Name" : "Foammulah",
		"Code" : "FMU"
	}, {
		"Name" : "Hadhdhunmathi",
		"Code" : "HDH"
	}, {
		"Name" : "Kolhumadulu",
		"Code" : "KLH"
	}, {
		"Name" : "Male",
		"Code" : "MAL"
	}, {
		"Name" : "Male Atoll",
		"Code" : "MAA"
	}, {
		"Name" : "Mulakatholhu",
		"Code" : "MUA"
	}, {
		"Name" : "North Ari Atoll",
		"Code" : "AAD"
	}, {
		"Name" : "North Huvadhu Atoll",
		"Code" : "HAD"
	}, {
		"Name" : "North Maalhosmadhulu",
		"Code" : "MAD"
	}, {
		"Name" : "North Miladhunmadhulu",
		"Code" : "MLD"
	}, {
		"Name" : "North Nilandhe Atoll",
		"Code" : "NAD"
	}, {
		"Name" : "North Thiladhunmathi",
		"Code" : "THD"
	}, {
		"Name" : "South Ari Atoll",
		"Code" : "AAU"
	}, {
		"Name" : "South Huvadhu Atoll",
		"Code" : "HAU"
	}, {
		"Name" : "South Maalhosmadulu",
		"Code" : "MAU"
	}, {
		"Name" : "South Miladhunmadhulu",
		"Code" : "MLU"
	}, {
		"Name" : "South Nilandhe Atoll",
		"Code" : "NAU"
	}, {
		"Name" : "South Thiladhunmathi",
		"Code" : "THU"
	} ]
}, {
	"Name" : "Mali",
	"Code" : "223",
	"State" : [ {
		"Name" : "Bamako",
		"Code" : "CD"
	}, {
		"Name" : "Gao",
		"Code" : "GA"
	}, {
		"Name" : "Kayes",
		"Code" : "KY"
	}, {
		"Name" : "Kidal",
		"Code" : "KD"
	}, {
		"Name" : "Koulikoro",
		"Code" : "KL"
	}, {
		"Name" : "Mopti",
		"Code" : "MP"
	}, {
		"Name" : "Segou",
		"Code" : "SG"
	}, {
		"Name" : "Sikasso",
		"Code" : "SK"
	}, {
		"Name" : "Tombouctou",
		"Code" : "TB"
	} ]
}, {
	"Name" : "Malta",
	"Code" : "356"
}, {
	"Name" : "Marshall Islands",
	"Code" : "692"
}, {
	"Name" : "Martinique",
	"Code" : "596"
}, {
	"Name" : "Mauritania",
	"Code" : "222",
	"State" : [ {
		"Name" : "Adrar",
		"Code" : "AD"
	}, {
		"Name" : "Brakna",
		"Code" : "BR"
	}, {
		"Name" : "Dakhlet Nouadhibou",
		"Code" : "DN"
	}, {
		"Name" : "El-Acaba",
		"Code" : "AS"
	}, {
		"Name" : "Gorgol",
		"Code" : "GO"
	}, {
		"Name" : "Guidimaka",
		"Code" : "GM"
	}, {
		"Name" : "Hodh ech-Chargui",
		"Code" : "HC"
	}, {
		"Name" : "Hodh el-Gharbi",
		"Code" : "HG"
	}, {
		"Name" : "Inchiri",
		"Code" : "IN"
	}, {
		"Name" : "Nouakchott",
		"Code" : "NO"
	}, {
		"Name" : "Tagant",
		"Code" : "TA"
	}, {
		"Name" : "Tiris Zemmour",
		"Code" : "TZ"
	}, {
		"Name" : "Trarza",
		"Code" : "TR"
	} ]
}, {
	"Name" : "Mauritius",
	"Code" : "230"
}, {
	"Name" : "Mayotte",
	"Code" : "269"
}, {
	"Name" : "Mexico",
	"Code" : "052",
	"State" : [ {
		"Name" : "Acapulco",
		"Code" : "ACA"
	}, {
		"Name" : "Aguascalientes",
		"Code" : "AGU"
	}, {
		"Name" : "Benito Juare",
		"Code" : "BJU"
	}, {
		"Name" : "Campeche",
		"Code" : "CAM"
	}, {
		"Name" : "Carmen",
		"Code" : "CAR"
	}, {
		"Name" : "Celaya",
		"Code" : "CLY"
	}, {
		"Name" : "Cheturnal",
		"Code" : "CTM"
	}, {
		"Name" : "Chihuahua",
		"Code" : "CHH"
	}, {
		"Name" : "Chilpancingo",
		"Code" : "CHI"
	}, {
		"Name" : "Coatzacoalcos",
		"Code" : "COA"
	}, {
		"Name" : "Colima",
		"Code" : "COL"
	}, {
		"Name" : "Cuernavaca",
		"Code" : "CVC"
	}, {
		"Name" : "Culiacan",
		"Code" : "CUL"
	}, {
		"Name" : "Durango",
		"Code" : "DUR"
	}, {
		"Name" : "Ensenada",
		"Code" : "ESE"
	}, {
		"Name" : "Guadalajara",
		"Code" : "GDL"
	}, {
		"Name" : "Guanajuato",
		"Code" : "GUA"
	}, {
		"Name" : "Hermosillo",
		"Code" : "HMO"
	}, {
		"Name" : "Irapuato",
		"Code" : "IRP"
	}, {
		"Name" : "Jalapa",
		"Code" : "JAL"
	}, {
		"Name" : "Juarez",
		"Code" : "JUZ"
	}, {
		"Name" : "La Paz",
		"Code" : "LAP"
	}, {
		"Name" : "Leon",
		"Code" : "LEN"
	}, {
		"Name" : "Los Mochis",
		"Code" : "LMM"
	}, {
		"Name" : "Matamoros",
		"Code" : "MAM"
	}, {
		"Name" : "Mazatlan",
		"Code" : "MZT"
	}, {
		"Name" : "Merida",
		"Code" : "MID"
	}, {
		"Name" : "Mexicali",
		"Code" : "MXL"
	}, {
		"Name" : "Mexico City",
		"Code" : "MEX"
	}, {
		"Name" : "Monclova",
		"Code" : "LOV"
	}, {
		"Name" : "Monterrey",
		"Code" : "MTY"
	}, {
		"Name" : "Morelia",
		"Code" : "MLM"
	}, {
		"Name" : "Nogales",
		"Code" : "NOG"
	}, {
		"Name" : "Nuevo Laredo",
		"Code" : "NLE"
	}, {
		"Name" : "Oaxaca",
		"Code" : "OAX"
	}, {
		"Name" : "Obregon",
		"Code" : "OBR"
	}, {
		"Name" : "Orizaba",
		"Code" : "ORI"
	}, {
		"Name" : "Pachuca",
		"Code" : "PAC"
	}, {
		"Name" : "Poza Rica de Hidalgo",
		"Code" : "PRH"
	}, {
		"Name" : "Puebla",
		"Code" : "PUE"
	}, {
		"Name" : "Puerto Vallarta",
		"Code" : "PVR"
	}, {
		"Name" : "Queretaro",
		"Code" : "QUE"
	}, {
		"Name" : "Reynosa",
		"Code" : "REX"
	}, {
		"Name" : "Saltillo",
		"Code" : "SLW"
	}, {
		"Name" : "San Luis Potosi",
		"Code" : "SLP"
	}, {
		"Name" : "Tampico",
		"Code" : "TAM"
	}, {
		"Name" : "Tapachula",
		"Code" : "TAP"
	}, {
		"Name" : "Tehuacan",
		"Code" : "TCN"
	}, {
		"Name" : "Tepic",
		"Code" : "TPQ"
	}, {
		"Name" : "Tijuana",
		"Code" : "TIJ"
	}, {
		"Name" : "Tlaxcala",
		"Code" : "TLA"
	}, {
		"Name" : "Toluca",
		"Code" : "TLC"
	}, {
		"Name" : "Torreon",
		"Code" : "TRC"
	}, {
		"Name" : "Tuxtla Gutierrez",
		"Code" : "TGZ"
	}, {
		"Name" : "Uruapan",
		"Code" : "UPN"
	}, {
		"Name" : "Valles",
		"Code" : "VHM"
	}, {
		"Name" : "Veracruz",
		"Code" : "VER"
	}, {
		"Name" : "Victoria",
		"Code" : "VIC"
	}, {
		"Name" : "Villahermosa",
		"Code" : "VSA"
	}, {
		"Name" : "Zacatecas",
		"Code" : "ZAC"
	} ]
}, {
	"Name" : "Micronesia",
	"Code" : "691"
}, {
	"Name" : "Moldova",
	"Code" : "373"
}, {
	"Name" : "Monaco",
	"Code" : "377"
}, {
	"Name" : "Mongolia",
	"Code" : "976",
	"State" : [ {
		"Name" : "Arhangay",
		"Code" : "73"
	}, {
		"Name" : "Bayanhongor",
		"Code" : "69"
	}, {
		"Name" : "Bayan-Ulgiy",
		"Code" : "71"
	}, {
		"Name" : "Bulgan",
		"Code" : "67"
	}, {
		"Name" : "Darhan-Uul",
		"Code" : "37"
	}, {
		"Name" : "Dornod",
		"Code" : "61"
	}, {
		"Name" : "Dornogovi",
		"Code" : "63"
	}, {
		"Name" : "Dundgovi",
		"Code" : "59"
	}, {
		"Name" : "Dzavhan",
		"Code" : "57"
	}, {
		"Name" : "Govi-Altay",
		"Code" : "65"
	}, {
		"Name" : "Govisumber",
		"Code" : "64"
	}, {
		"Name" : "Hentiy",
		"Code" : "39"
	}, {
		"Name" : "Hovd",
		"Code" : "43"
	}, {
		"Name" : "Hovsgol",
		"Code" : "41"
	}, {
		"Name" : "Orhon",
		"Code" : "35"
	}, {
		"Name" : "Selenge",
		"Code" : "49"
	}, {
		"Name" : "Suhbaatar",
		"Code" : "51"
	}, {
		"Name" : "Tov",
		"Code" : "47"
	}, {
		"Name" : "Ulaanbaatar hot",
		"Code" : "1"
	}, {
		"Name" : "Umnogovi",
		"Code" : "UMN"
	}, {
		"Name" : "Uvorhangay",
		"Code" : "UVO"
	}, {
		"Name" : "Uvs",
		"Code" : "46"
	} ]
}, {
	"Name" : "Montserrat",
	"Code" : "664"
}, {
	"Name" : "Morocco",
	"Code" : "212",
	"State" : [ {
		"Name" : "Casablanca",
		"Code" : "CBL"
	}, {
		"Name" : "Fes",
		"Code" : "FES"
	}, {
		"Name" : "Marrakech",
		"Code" : "MRK"
	}, {
		"Name" : "Meknes",
		"Code" : "MKN"
	}, {
		"Name" : "Oujda",
		"Code" : "OUJ"
	}, {
		"Name" : "Rabat",
		"Code" : "RSA"
	}, {
		"Name" : "Tangier",
		"Code" : "TGR"
	}, {
		"Name" : "Tetouan",
		"Code" : "TET"
	}, {
		"Name" : "Western Sahara",
		"Code" : "WSH"
	} ]
}, {
	"Name" : "Mozambique",
	"Code" : "258"
}, {
	"Name" : "Myanmar",
	"Code" : "MMR",
	"State" : [ {
		"Name" : "Ayeyarwady",
		"Code" : "AY"
	}, {
		"Name" : "Bago",
		"Code" : "BG"
	}, {
		"Name" : "Chin",
		"Code" : "CH"
	}, {
		"Name" : "Kachin",
		"Code" : "KC"
	}, {
		"Name" : "Kayah",
		"Code" : "KH"
	}, {
		"Name" : "Kayin",
		"Code" : "KN"
	}, {
		"Name" : "Magway",
		"Code" : "MG"
	}, {
		"Name" : "Mandalay",
		"Code" : "MD"
	}, {
		"Name" : "Mon",
		"Code" : "MN"
	}, {
		"Name" : "Rakhine",
		"Code" : "RK"
	}, {
		"Name" : "Sagaing",
		"Code" : "SG"
	}, {
		"Name" : "Shan",
		"Code" : "SH"
	}, {
		"Name" : "Tanintharyi",
		"Code" : "TN"
	}, {
		"Name" : "Yangon",
		"Code" : "YG"
	} ]
}, {
	"Name" : "Namibia",
	"Code" : "264",
	"State" : [ {
		"Name" : "Caprivi",
		"Code" : "CA"
	}, {
		"Name" : "Erongo",
		"Code" : "ER"
	}, {
		"Name" : "Hardap",
		"Code" : "HA"
	}, {
		"Name" : "Karas",
		"Code" : "KR"
	}, {
		"Name" : "Khomas",
		"Code" : "KH"
	}, {
		"Name" : "Kunene",
		"Code" : "KU"
	}, {
		"Name" : "Ohangwena",
		"Code" : "OW"
	}, {
		"Name" : "Okavango",
		"Code" : "KV"
	}, {
		"Name" : "Omaheke",
		"Code" : "OK"
	}, {
		"Name" : "Omusati",
		"Code" : "OT"
	}, {
		"Name" : "Oshana",
		"Code" : "ON"
	}, {
		"Name" : "Oshikoto",
		"Code" : "OO"
	}, {
		"Name" : "Otjozondjupa",
		"Code" : "OJ"
	} ]
}, {
	"Name" : "Nauru",
	"Code" : "674"
}, {
	"Name" : "Nepal",
	"Code" : "977",
	"State" : [ {
		"Name" : "Bagmati",
		"Code" : "BA"
	}, {
		"Name" : "Bheri",
		"Code" : "BH"
	}, {
		"Name" : "Dhawalagiri",
		"Code" : "DH"
	}, {
		"Name" : "Gandaki",
		"Code" : "GA"
	}, {
		"Name" : "Janakpur",
		"Code" : "JA"
	}, {
		"Name" : "Karnali",
		"Code" : "KA"
	}, {
		"Name" : "Kosi",
		"Code" : "KO"
	}, {
		"Name" : "Lumbini",
		"Code" : "LU"
	}, {
		"Name" : "Mahakali",
		"Code" : "MA"
	}, {
		"Name" : "Mechi",
		"Code" : "ME"
	}, {
		"Name" : "Narayani",
		"Code" : "NA"
	}, {
		"Name" : "Rapti",
		"Code" : "RA"
	}, {
		"Name" : "Seti",
		"Code" : "SE"
	}, {
		"Name" : "Sogarmatha",
		"Code" : "SA"
	} ]
}, {
	"Name" : "Netherlands",
	"Code" : "031",
	"State" : [ {
		"Name" : "'s-Hertogenbosch",
		"Code" : "HTB"
	}, {
		"Name" : "Almere",
		"Code" : "AER"
	}, {
		"Name" : "Amersfoort",
		"Code" : "AME"
	}, {
		"Name" : "Amsterdam",
		"Code" : "AMS"
	}, {
		"Name" : "Apeldoorn",
		"Code" : "APE"
	}, {
		"Name" : "Arnhem",
		"Code" : "ARN"
	}, {
		"Name" : "Assen",
		"Code" : "ASS"
	}, {
		"Name" : "Breda",
		"Code" : "BRD"
	}, {
		"Name" : "Dordrecht",
		"Code" : "DOR"
	}, {
		"Name" : "Ede",
		"Code" : "EDE"
	}, {
		"Name" : "Eindhoven",
		"Code" : "EIN"
	}, {
		"Name" : "Emmen",
		"Code" : "EMM"
	}, {
		"Name" : "Enschede",
		"Code" : "ENS"
	}, {
		"Name" : "Groningen",
		"Code" : "GRQ"
	}, {
		"Name" : "Haarlem",
		"Code" : "HRA"
	}, {
		"Name" : "Hague",
		"Code" : "HAG"
	}, {
		"Name" : "Hoofddorp",
		"Code" : "HFD"
	}, {
		"Name" : "Leeuwarden",
		"Code" : "LWR"
	}, {
		"Name" : "Leiden",
		"Code" : "LID"
	}, {
		"Name" : "Lelystad",
		"Code" : "LEY"
	}, {
		"Name" : "Maastricht",
		"Code" : "MST"
	}, {
		"Name" : "Middelburg",
		"Code" : "MDL"
	}, {
		"Name" : "Nijmegen",
		"Code" : "NIJ"
	}, {
		"Name" : "Rotterdam",
		"Code" : "RTM"
	}, {
		"Name" : "Tilburg",
		"Code" : "TLB"
	}, {
		"Name" : "Utrecht",
		"Code" : "UTC"
	}, {
		"Name" : "Zoetermeer",
		"Code" : "ZTM"
	}, {
		"Name" : "Zwolle",
		"Code" : "ZWO"
	} ]
}, {
	"Name" : "Netherlands Antilles",
	"Code" : "599"
}, {
	"Name" : "New Caledonia",
	"Code" : "687"
}, {
	"Name" : "New Zealand",
	"Code" : "064",
	"State" : [ {
		"Name" : "Auckland",
		"Code" : "AUK"
	}, {
		"Name" : "Blenheim",
		"Code" : "BHE"
	}, {
		"Name" : "Christchurch",
		"Code" : "CHC"
	}, {
		"Name" : "Dunedin",
		"Code" : "DUD"
	}, {
		"Name" : "Far North",
		"Code" : "FNR"
	}, {
		"Name" : "Gisborne",
		"Code" : "GIS"
	}, {
		"Name" : "Greymouth",
		"Code" : "GMN"
	}, {
		"Name" : "Hamilton",
		"Code" : "HLZ"
	}, {
		"Name" : "Hastings",
		"Code" : "HAS"
	}, {
		"Name" : "Invercargill",
		"Code" : "IVC"
	}, {
		"Name" : "Kaipara",
		"Code" : "KAI"
	}, {
		"Name" : "Manukau",
		"Code" : "MNK"
	}, {
		"Name" : "Napier",
		"Code" : "NPE"
	}, {
		"Name" : "Nelson",
		"Code" : "NSN"
	}, {
		"Name" : "New Plymouth",
		"Code" : "NPL"
	}, {
		"Name" : "North Shore",
		"Code" : "NSH"
	}, {
		"Name" : "Palmerston North",
		"Code" : "PMR"
	}, {
		"Name" : "Richmond",
		"Code" : "RMD"
	}, {
		"Name" : "Stratford",
		"Code" : "STR"
	}, {
		"Name" : "Taumarunui",
		"Code" : "TAU"
	}, {
		"Name" : "Waitakere",
		"Code" : "WAE"
	}, {
		"Name" : "Wanganui",
		"Code" : "WAG"
	}, {
		"Name" : "Whakatane",
		"Code" : "WHK"
	}, {
		"Name" : "Whangarei",
		"Code" : "WRE"
	} ]
}, {
	"Name" : "Nicaragua",
	"Code" : "505",
	"State" : [ {
		"Name" : "Atlantico Norte",
		"Code" : "AN"
	}, {
		"Name" : "Atlantico Sur",
		"Code" : "AS"
	}, {
		"Name" : "Boaco",
		"Code" : "BO"
	}, {
		"Name" : "Carazo",
		"Code" : "CA"
	}, {
		"Name" : "Chinandega",
		"Code" : "CD"
	}, {
		"Name" : "Chontales",
		"Code" : "CT"
	}, {
		"Name" : "Esteli",
		"Code" : "ES"
	}, {
		"Name" : "Granada",
		"Code" : "GR"
	}, {
		"Name" : "Jinotega",
		"Code" : "JI"
	}, {
		"Name" : "Leon",
		"Code" : "LE"
	}, {
		"Name" : "Madriz",
		"Code" : "MD"
	}, {
		"Name" : "Managua",
		"Code" : "MN"
	}, {
		"Name" : "Masaya",
		"Code" : "MS"
	}, {
		"Name" : "Matagalpa",
		"Code" : "MT"
	}, {
		"Name" : "Nueva Segovia",
		"Code" : "NS"
	}, {
		"Name" : "Rio San Juan",
		"Code" : "SJ"
	}, {
		"Name" : "Rivas",
		"Code" : "RV"
	} ]
}, {
	"Name" : "Niger",
	"Code" : "227",
	"State" : [ {
		"Name" : "Agadez",
		"Code" : "AJY"
	}, {
		"Name" : "Diffa",
		"Code" : "DIF"
	}, {
		"Name" : "Dosso",
		"Code" : "DSS"
	}, {
		"Name" : "Maradi",
		"Code" : "MFQ"
	}, {
		"Name" : "Niamey C.U.",
		"Code" : "NIM"
	}, {
		"Name" : "Tahoua",
		"Code" : "THZ"
	}, {
		"Name" : "Tillaberi",
		"Code" : "TIL"
	}, {
		"Name" : "Zinder",
		"Code" : "ZND"
	} ]
}, {
	"Name" : "Nigeria",
	"Code" : "234",
	"State" : [ {
		"Name" : "Abuja",
		"Code" : "ABV"
	}, {
		"Name" : "Ibadan",
		"Code" : "IBA"
	}, {
		"Name" : "Kano",
		"Code" : "KAN"
	}, {
		"Name" : "Lagos",
		"Code" : "LOS"
	}, {
		"Name" : "Ogbomosho",
		"Code" : "OGB"
	} ]
}, {
	"Name" : "Niue",
	"Code" : "683"
}, {
	"Name" : "North Korea",
	"Code" : "850",
	"State" : [ {
		"Name" : "Ch'ongjin",
		"Code" : "CHO"
	}, {
		"Name" : "Haeju",
		"Code" : "HAE"
	}, {
		"Name" : "Hamhung",
		"Code" : "HAM"
	}, {
		"Name" : "Hyesan",
		"Code" : "HYE"
	}, {
		"Name" : "Kaesong",
		"Code" : "KSN"
	}, {
		"Name" : "Kanggye",
		"Code" : "KAN"
	}, {
		"Name" : "Namp'o",
		"Code" : "NAM"
	}, {
		"Name" : "Naseon",
		"Code" : "NAS"
	}, {
		"Name" : "Pyongyang",
		"Code" : "FNJ"
	}, {
		"Name" : "Sariwon",
		"Code" : "SAR"
	}, {
		"Name" : "Sinuiju",
		"Code" : "SII"
	}, {
		"Name" : "Wonsan",
		"Code" : "WON"
	} ]
}, {
	"Name" : "Norway",
	"Code" : "047",
	"State" : [ {
		"Name" : "Akershus",
		"Code" : "2"
	}, {
		"Name" : "Aust-Agder",
		"Code" : "9"
	}, {
		"Name" : "Buskerud",
		"Code" : "6"
	}, {
		"Name" : "Finnmark",
		"Code" : "20"
	}, {
		"Name" : "Hedmark",
		"Code" : "4"
	}, {
		"Name" : "Hordaland",
		"Code" : "12"
	}, {
		"Name" : "More og Romsdal",
		"Code" : "15"
	}, {
		"Name" : "Nordland",
		"Code" : "18"
	}, {
		"Name" : "Nord-Trondelag",
		"Code" : "17"
	}, {
		"Name" : "Oppland",
		"Code" : "5"
	}, {
		"Name" : "Oslo",
		"Code" : "3"
	}, {
		"Name" : "Ostfold",
		"Code" : "1"
	}, {
		"Name" : "Rogaland",
		"Code" : "11"
	}, {
		"Name" : "Sogn og Fjordane",
		"Code" : "14"
	}, {
		"Name" : "Sor-Trondelag",
		"Code" : "16"
	}, {
		"Name" : "Telemark",
		"Code" : "8"
	}, {
		"Name" : "Troms",
		"Code" : "19"
	}, {
		"Name" : "Vest-Agder",
		"Code" : "10"
	}, {
		"Name" : "Vestfold",
		"Code" : "7"
	} ]
}, {
	"Name" : "Oman",
	"Code" : "968",
	"State" : [ {
		"Name" : "Ad-Dakhiliyah",
		"Code" : "DA"
	}, {
		"Name" : "Al-Batinah",
		"Code" : "BA"
	}, {
		"Name" : "Al-Wusta",
		"Code" : "WU"
	}, {
		"Name" : "Ash-Sharqiyah",
		"Code" : "SH"
	}, {
		"Name" : "Az-Zahirah",
		"Code" : "ZA"
	}, {
		"Name" : "Masqat",
		"Code" : "MA"
	}, {
		"Name" : "Musandam",
		"Code" : "MU"
	}, {
		"Name" : "Zufar",
		"Code" : "ZU"
	} ]
}, {
	"Name" : "Pakistan",
	"Code" : "092",
	"State" : [ {
		"Name" : "Faisalabad",
		"Code" : "LYP"
	}, {
		"Name" : "Gujranwala",
		"Code" : "GUJ"
	}, {
		"Name" : "Hyderabad",
		"Code" : "HDD"
	}, {
		"Name" : "Islamabad",
		"Code" : "ISB"
	}, {
		"Name" : "Karachi",
		"Code" : "KCT"
	}, {
		"Name" : "Lahore",
		"Code" : "LHE"
	}, {
		"Name" : "Multan",
		"Code" : "MUX"
	}, {
		"Name" : "Peshawar",
		"Code" : "PEW"
	}, {
		"Name" : "Rawalpindi",
		"Code" : "RWP"
	} ]
}, {
	"Name" : "Palau",
	"Code" : "680"
}, {
	"Name" : "Palestinian Authority",
	"Code" : "PSE",
	"State" : [ {
		"Name" : "Gaza Strip",
		"Code" : "GZ"
	}, {
		"Name" : "West Bank",
		"Code" : "WE"
	} ]
}, {
	"Name" : "Panama",
	"Code" : "507"
}, {
	"Name" : "Papua New Guinea",
	"Code" : "675",
	"State" : [ {
		"Name" : "Bougainville",
		"Code" : "BV"
	}, {
		"Name" : "East New Britain",
		"Code" : "EB"
	}, {
		"Name" : "East Sepik",
		"Code" : "ES"
	}, {
		"Name" : "Eastern Highlands",
		"Code" : "EH"
	}, {
		"Name" : "Enga",
		"Code" : "EN"
	}, {
		"Name" : "Gulf",
		"Code" : "GU"
	}, {
		"Name" : "Madang",
		"Code" : "MD"
	}, {
		"Name" : "Manus",
		"Code" : "MN"
	}, {
		"Name" : "Milne Bay",
		"Code" : "MB"
	}, {
		"Name" : "Morobe",
		"Code" : "MR"
	}, {
		"Name" : "New Ireland",
		"Code" : "NI"
	}, {
		"Name" : "Northern",
		"Code" : "NO"
	}, {
		"Name" : "Port Moresby",
		"Code" : "NC"
	}, {
		"Name" : "Sandaun",
		"Code" : "SA"
	}, {
		"Name" : "Simbu",
		"Code" : "SI"
	}, {
		"Name" : "Southern Highlands",
		"Code" : "SH"
	}, {
		"Name" : "West New Britain",
		"Code" : "WB"
	}, {
		"Name" : "Western",
		"Code" : "WE"
	}, {
		"Name" : "Western Highlands",
		"Code" : "WH"
	} ]
}, {
	"Name" : "Paraguay",
	"Code" : "595",
	"State" : [ {
		"Name" : "Alto Paraguay",
		"Code" : "AG"
	}, {
		"Name" : "Alto Parana",
		"Code" : "AN"
	}, {
		"Name" : "Amambay",
		"Code" : "AM"
	}, {
		"Name" : "Asuncion",
		"Code" : "AS"
	}, {
		"Name" : "Boqueron",
		"Code" : "BO"
	}, {
		"Name" : "Caaguazu",
		"Code" : "CG"
	}, {
		"Name" : "Caazapa",
		"Code" : "CZ"
	}, {
		"Name" : "Canindeyu",
		"Code" : "CN"
	}, {
		"Name" : "Central",
		"Code" : "CE"
	}, {
		"Name" : "Concepcion",
		"Code" : "CC"
	}, {
		"Name" : "Cordillera",
		"Code" : "CD"
	}, {
		"Name" : "Guaira",
		"Code" : "GU"
	}, {
		"Name" : "Itapua",
		"Code" : "IT"
	}, {
		"Name" : "Misiones",
		"Code" : "MI"
	}, {
		"Name" : "Neembucu",
		"Code" : "NE"
	}, {
		"Name" : "Paraguari",
		"Code" : "PA"
	}, {
		"Name" : "Presidente Hayes",
		"Code" : "PH"
	}, {
		"Name" : "San Pedro",
		"Code" : "SP"
	} ]
}, {
	"Name" : "Peru",
	"Code" : "051",
	"State" : [ {
		"Name" : "Amazonas",
		"Code" : "AM"
	}, {
		"Name" : "Ancash",
		"Code" : "AN"
	}, {
		"Name" : "Apurimac",
		"Code" : "AP"
	}, {
		"Name" : "Arequipa",
		"Code" : "AR"
	}, {
		"Name" : "Ayacucho",
		"Code" : "AY"
	}, {
		"Name" : "Cajamarca",
		"Code" : "CJ"
	}, {
		"Name" : "Callao",
		"Code" : "CL"
	}, {
		"Name" : "Chimbote",
		"Code" : "CHM"
	}, {
		"Name" : "Chincha Alta",
		"Code" : "CHI"
	}, {
		"Name" : "Cusco",
		"Code" : "CU"
	}, {
		"Name" : "Huancavelica",
		"Code" : "HV"
	}, {
		"Name" : "Huanuco",
		"Code" : "HO"
	}, {
		"Name" : "Ica",
		"Code" : "IC"
	}, {
		"Name" : "Juliaca",
		"Code" : "JUL"
	}, {
		"Name" : "Junin",
		"Code" : "JU"
	}, {
		"Name" : "La Libertad",
		"Code" : "LD"
	}, {
		"Name" : "Lambayeque",
		"Code" : "LY"
	}, {
		"Name" : "Lima",
		"Code" : "LI"
	}, {
		"Name" : "Loreto",
		"Code" : "LO"
	}, {
		"Name" : "Madre de Dios",
		"Code" : "MD"
	}, {
		"Name" : "Moquegua",
		"Code" : "MO"
	}, {
		"Name" : "Pasco",
		"Code" : "PA"
	}, {
		"Name" : "Piura",
		"Code" : "PI"
	}, {
		"Name" : "Puno",
		"Code" : "PU"
	}, {
		"Name" : "San Martin",
		"Code" : "SM"
	}, {
		"Name" : "Sullana",
		"Code" : "SUL"
	}, {
		"Name" : "Tacna",
		"Code" : "TA"
	}, {
		"Name" : "Tumbes",
		"Code" : "TU"
	}, {
		"Name" : "Ucayali",
		"Code" : "UC"
	} ]
}, {
	"Name" : "Philippines",
	"Code" : "063",
	"State" : [ {
		"Name" : "Caloocan",
		"Code" : "CAO"
	}, {
		"Name" : "Cebu",
		"Code" : "CEB"
	}, {
		"Name" : "Davao",
		"Code" : "DOR"
	}, {
		"Name" : "Manila",
		"Code" : "MNL"
	} ]
}, {
	"Name" : "Pitcairn Islands",
	"Code" : "PCN"
}, {
	"Name" : "Poland",
	"Code" : "048",
	"State" : [ {
		"Name" : "Biała Podlaska",
		"Code" : "BAP"
	}, {
		"Name" : "Białystok",
		"Code" : "BIA"
	}, {
		"Name" : "Bydgoszcz",
		"Code" : "BZG"
	}, {
		"Name" : "Bytom",
		"Code" : "BYT"
	}, {
		"Name" : "Chełm",
		"Code" : "CHO"
	}, {
		"Name" : "Chorzow",
		"Code" : "CHZ"
	}, {
		"Name" : "Ciechanow",
		"Code" : "CIE"
	}, {
		"Name" : "Dabrowa Gornicza",
		"Code" : "DAB"
	}, {
		"Name" : "Elbląg",
		"Code" : "ELB"
	}, {
		"Name" : "Gdansk",
		"Code" : "GDN"
	}, {
		"Name" : "Gdynia",
		"Code" : "GDY"
	}, {
		"Name" : "Gliwice",
		"Code" : "GWC"
	}, {
		"Name" : "Gorzow Wlkp",
		"Code" : "GOW"
	}, {
		"Name" : "Grudziadz",
		"Code" : "GRU"
	}, {
		"Name" : "Jaworzno",
		"Code" : "JAW"
	}, {
		"Name" : "Jelenia Gora",
		"Code" : "JEG"
	}, {
		"Name" : "Kalisz",
		"Code" : "KAL"
	}, {
		"Name" : "Katowice",
		"Code" : "KTW"
	}, {
		"Name" : "Kielce",
		"Code" : "KLC"
	}, {
		"Name" : "Konin",
		"Code" : "KON"
	}, {
		"Name" : "Koszalin",
		"Code" : "OSZ"
	}, {
		"Name" : "Krakow",
		"Code" : "KRK"
	}, {
		"Name" : "Krosno",
		"Code" : "KRO"
	}, {
		"Name" : "Legnica",
		"Code" : "LEG"
	}, {
		"Name" : "Leszno",
		"Code" : "LEZ"
	}, {
		"Name" : "Lodz",
		"Code" : "LOD"
	}, {
		"Name" : "Lomza",
		"Code" : "QOY"
	}, {
		"Name" : "Lublin",
		"Code" : "LUL"
	}, {
		"Name" : "Mysłowice",
		"Code" : "MYL"
	}, {
		"Name" : "Nowy Sacz",
		"Code" : "NOW"
	}, {
		"Name" : "Olsztyn",
		"Code" : "OLS"
	}, {
		"Name" : "Opole",
		"Code" : "OPO"
	}, {
		"Name" : "Ostrołeka",
		"Code" : "OSS"
	}, {
		"Name" : "Piła",
		"Code" : "PIL"
	}, {
		"Name" : "Piotrkow",
		"Code" : "PIO"
	}, {
		"Name" : "Plock",
		"Code" : "PLO"
	}, {
		"Name" : "Poznan",
		"Code" : "POZ"
	}, {
		"Name" : "Przemysl",
		"Code" : "PRZ"
	}, {
		"Name" : "Radom",
		"Code" : "RDM"
	}, {
		"Name" : "Ruda Sl",
		"Code" : "RDS"
	}, {
		"Name" : "Rzeszow",
		"Code" : "RZE"
	}, {
		"Name" : "Siedlce",
		"Code" : "SDC"
	}, {
		"Name" : "Siemianowice Sl",
		"Code" : "SOW"
	}, {
		"Name" : "Sieradz",
		"Code" : "SIR"
	}, {
		"Name" : "Skierniewice",
		"Code" : "SKI"
	}, {
		"Name" : "Slupsk",
		"Code" : "SLP"
	}, {
		"Name" : "Sopot",
		"Code" : "SOP"
	}, {
		"Name" : "Sosnowiec",
		"Code" : "SWC"
	}, {
		"Name" : "Suwałki",
		"Code" : "SWL"
	}, {
		"Name" : "Swietochłowice",
		"Code" : "SWT"
	}, {
		"Name" : "Swinoujscie",
		"Code" : "SWI"
	}, {
		"Name" : "Szczecin",
		"Code" : "SZZ"
	}, {
		"Name" : "Tarnobrzeg",
		"Code" : "QEP"
	}, {
		"Name" : "Tarnow",
		"Code" : "TAR"
	}, {
		"Name" : "Torun",
		"Code" : "TOR"
	}, {
		"Name" : "Tychy",
		"Code" : "TYY"
	}, {
		"Name" : "Walbrzych",
		"Code" : "WZH"
	}, {
		"Name" : "Warszawa",
		"Code" : "WAW"
	}, {
		"Name" : "Wlocławek",
		"Code" : "WLO"
	}, {
		"Name" : "Wroclaw",
		"Code" : "WRO"
	}, {
		"Name" : "Zabrze",
		"Code" : "ZAB"
	}, {
		"Name" : "Zamosc",
		"Code" : "ZAM"
	}, {
		"Name" : "Zielona Gora",
		"Code" : "IEG"
	} ]
}, {
	"Name" : "Portugal",
	"Code" : "351",
	"State" : [ {
		"Name" : "Alentejo Central",
		"Code" : "ALC"
	}, {
		"Name" : "Alentejo Litoral",
		"Code" : "ALL"
	}, {
		"Name" : "Alto Alentejo",
		"Code" : "AAT"
	}, {
		"Name" : "Alto Tros-os-Montes",
		"Code" : "ATM"
	}, {
		"Name" : "Ave",
		"Code" : "AES"
	}, {
		"Name" : "Baixo Alentejo",
		"Code" : "BAL"
	}, {
		"Name" : "Baixo Mondego",
		"Code" : "BMO"
	}, {
		"Name" : "Baixo Vouga",
		"Code" : "BVO"
	}, {
		"Name" : "Beira Interior Norte",
		"Code" : "BIN"
	}, {
		"Name" : "Beira Interior Sul",
		"Code" : "BIS"
	}, {
		"Name" : "Cavado",
		"Code" : "CAV"
	}, {
		"Name" : "Cova da Beira",
		"Code" : "CLB"
	}, {
		"Name" : "Douro",
		"Code" : "MDR"
	}, {
		"Name" : "Entre Douro e Vouga",
		"Code" : "EDV"
	}, {
		"Name" : "Faro",
		"Code" : "FAO"
	}, {
		"Name" : "Funchal",
		"Code" : "FUN"
	}, {
		"Name" : "Leziria do Tejo",
		"Code" : "LTE"
	}, {
		"Name" : "Lisboa",
		"Code" : "LIS"
	}, {
		"Name" : "Medio Tejo",
		"Code" : "MTE"
	}, {
		"Name" : "Minho-Lima",
		"Code" : "MLI"
	}, {
		"Name" : "Oeste",
		"Code" : "OES"
	}, {
		"Name" : "Peninsula de Setubal",
		"Code" : "PSE"
	}, {
		"Name" : "Pinhal Interior Norte",
		"Code" : "PIN"
	}, {
		"Name" : "Pinhal Interior Sul",
		"Code" : "PIS"
	}, {
		"Name" : "Pinhal Litoral",
		"Code" : "PLT"
	}, {
		"Name" : "Ponta Delgada",
		"Code" : "PDL"
	}, {
		"Name" : "Porto",
		"Code" : "VDP"
	}, {
		"Name" : "Serra da Estrela",
		"Code" : "SES"
	}, {
		"Name" : "Tamega",
		"Code" : "TAM"
	} ]
}, {
	"Name" : "Puerto Rico",
	"Code" : "787"
}, {
	"Name" : "Qatar",
	"Code" : "974",
	"State" : [ {
		"Name" : "Ad Dawhah",
		"Code" : "DW"
	}, {
		"Name" : "Al Ghuwariyah",
		"Code" : "GW"
	}, {
		"Name" : "Al Jumaliyah",
		"Code" : "JM"
	}, {
		"Name" : "Al Khawr",
		"Code" : "KR"
	}, {
		"Name" : "Al Wakrah",
		"Code" : "WK"
	}, {
		"Name" : "Ar Rayyan",
		"Code" : "RN"
	}, {
		"Name" : "Jariyan al Batnah",
		"Code" : "JB"
	}, {
		"Name" : "Madinat ach Shamal",
		"Code" : "MS"
	}, {
		"Name" : "Umm Salal",
		"Code" : "UL"
	} ]
}, {
	"Name" : "Reunion",
	"Code" : "262"
}, {
	"Name" : "Romania",
	"Code" : "040",
	"State" : [ {
		"Name" : "Alba Iulia",
		"Code" : "AL"
	}, {
		"Name" : "Alexandria",
		"Code" : "AD"
	}, {
		"Name" : "Arad",
		"Code" : "AR"
	}, {
		"Name" : "Bacau",
		"Code" : "BA"
	}, {
		"Name" : "Baia Mare",
		"Code" : "BM"
	}, {
		"Name" : "Bistrita",
		"Code" : "BN"
	}, {
		"Name" : "Botosani",
		"Code" : "BO"
	}, {
		"Name" : "Braila",
		"Code" : "BL"
	}, {
		"Name" : "Brasov",
		"Code" : "BS"
	}, {
		"Name" : "Bucuresti",
		"Code" : "BC"
	}, {
		"Name" : "Buzau",
		"Code" : "BZ"
	}, {
		"Name" : "Calarasi",
		"Code" : "CR"
	}, {
		"Name" : "Cluj-Napoca",
		"Code" : "CN"
	}, {
		"Name" : "Constanta",
		"Code" : "CT"
	}, {
		"Name" : "Craiova",
		"Code" : "DO"
	}, {
		"Name" : "Deva",
		"Code" : "DE"
	}, {
		"Name" : "Drobeta-Turnu Severin",
		"Code" : "DT"
	}, {
		"Name" : "Focsani",
		"Code" : "FO"
	}, {
		"Name" : "Galati",
		"Code" : "GL"
	}, {
		"Name" : "Giurgiu",
		"Code" : "GG"
	}, {
		"Name" : "Iasi",
		"Code" : "IS"
	}, {
		"Name" : "Miercurea-Ciuc",
		"Code" : "MC"
	}, {
		"Name" : "Oradea",
		"Code" : "OR"
	}, {
		"Name" : "Piatra Neamt",
		"Code" : "PN"
	}, {
		"Name" : "Pitesti",
		"Code" : "PI"
	}, {
		"Name" : "Ploiesti",
		"Code" : "PL"
	}, {
		"Name" : "Resita",
		"Code" : "RE"
	}, {
		"Name" : "Satu Mare",
		"Code" : "SM"
	}, {
		"Name" : "Sfantu-Gheorghe",
		"Code" : "SG"
	}, {
		"Name" : "Sibiu",
		"Code" : "SO"
	}, {
		"Name" : "Slatina",
		"Code" : "ST"
	}, {
		"Name" : "Slobozia",
		"Code" : "SB"
	}, {
		"Name" : "Suceava",
		"Code" : "SU"
	}, {
		"Name" : "Targovişte",
		"Code" : "TA"
	}, {
		"Name" : "Timisoara",
		"Code" : "TI"
	}, {
		"Name" : "Tirgu Mures",
		"Code" : "TM"
	}, {
		"Name" : "Tirgu-Jiu",
		"Code" : "TJ"
	}, {
		"Name" : "Tulcea",
		"Code" : "TU"
	}, {
		"Name" : "Vaslui",
		"Code" : "VA"
	}, {
		"Name" : "XRimnicu Vilcea",
		"Code" : "VI"
	}, {
		"Name" : "Zalau",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Russia",
	"Code" : "007",
	"State" : [ {
		"Name" : "Abakan",
		"Code" : "ABA"
	}, {
		"Name" : "Aginskoye",
		"Code" : "AGI"
	}, {
		"Name" : "Anadyr",
		"Code" : "DYR"
	}, {
		"Name" : "Arkhangelsk",
		"Code" : "ARK"
	}, {
		"Name" : "Astrakhan",
		"Code" : "AST"
	}, {
		"Name" : "Barnaul",
		"Code" : "BAX"
	}, {
		"Name" : "Belgorod",
		"Code" : "BEL"
	}, {
		"Name" : "Birobidzan",
		"Code" : "BBZ"
	}, {
		"Name" : "Blagoveshchensk",
		"Code" : "BQS"
	}, {
		"Name" : "Bryansk",
		"Code" : "BRY"
	}, {
		"Name" : "Chabarovsk",
		"Code" : "COK"
	}, {
		"Name" : "Cheboksary",
		"Code" : "CSY"
	}, {
		"Name" : "Chelyabinsk",
		"Code" : "CHE"
	}, {
		"Name" : "Cherkessk",
		"Code" : "CKS"
	}, {
		"Name" : "Chita",
		"Code" : "CHI"
	}, {
		"Name" : "Elista",
		"Code" : "ESL"
	}, {
		"Name" : "Gorno-Altajsk",
		"Code" : "GOA"
	}, {
		"Name" : "Grozny",
		"Code" : "GRV"
	}, {
		"Name" : "Irkutsk",
		"Code" : "IKT"
	}, {
		"Name" : "Ivanovo",
		"Code" : "IVO"
	}, {
		"Name" : "Izhevsk",
		"Code" : "IJK"
	}, {
		"Name" : "Jakutsk",
		"Code" : "JAK"
	}, {
		"Name" : "Jaroslavl",
		"Code" : "JAR"
	}, {
		"Name" : "Jekaterinburg",
		"Code" : "JEK"
	}, {
		"Name" : "Juzno-Sachalinsk",
		"Code" : "JSA"
	}, {
		"Name" : "Kaliningrad",
		"Code" : "KGD"
	}, {
		"Name" : "Kaluga",
		"Code" : "KLF"
	}, {
		"Name" : "Kazan",
		"Code" : "KZN"
	}, {
		"Name" : "Kemerovo",
		"Code" : "KEM"
	}, {
		"Name" : "Khanty-Mansiysk",
		"Code" : "KHM"
	}, {
		"Name" : "Kirov",
		"Code" : "KIR"
	}, {
		"Name" : "Kostroma",
		"Code" : "KOS"
	}, {
		"Name" : "Krasnodar",
		"Code" : "KRR"
	}, {
		"Name" : "Krasnojarsk",
		"Code" : "KYA"
	}, {
		"Name" : "Kudymkar",
		"Code" : "KUD"
	}, {
		"Name" : "Kurgan",
		"Code" : "KRO"
	}, {
		"Name" : "Kursk",
		"Code" : "URS"
	}, {
		"Name" : "Kyzyl",
		"Code" : "KYZ"
	}, {
		"Name" : "Lipeck",
		"Code" : "LIP"
	}, {
		"Name" : "Magadan",
		"Code" : "MAG"
	}, {
		"Name" : "Magas",
		"Code" : "IN"
	}, {
		"Name" : "Makhachkala",
		"Code" : "MCX"
	}, {
		"Name" : "Maykop",
		"Code" : "MAY"
	}, {
		"Name" : "Moscow",
		"Code" : "MOW"
	}, {
		"Name" : "Murmansk",
		"Code" : "MMK"
	}, {
		"Name" : "Nalchik",
		"Code" : "NAL"
	}, {
		"Name" : "Naryan-Mar",
		"Code" : "NNM"
	}, {
		"Name" : "Niznij Novgorod",
		"Code" : "GOJ"
	}, {
		"Name" : "Novosibirsk",
		"Code" : "NVS"
	}, {
		"Name" : "Omsk",
		"Code" : "OMS"
	}, {
		"Name" : "Orel",
		"Code" : "ORL"
	}, {
		"Name" : "Orenburg",
		"Code" : "ORE"
	}, {
		"Name" : "Palana",
		"Code" : "PAL"
	}, {
		"Name" : "Penza",
		"Code" : "PNZ"
	}, {
		"Name" : "Perm",
		"Code" : "PER"
	}, {
		"Name" : "Petropavlovsk-Kamchatskiy",
		"Code" : "PKC"
	}, {
		"Name" : "Petrozavodsk",
		"Code" : "PES"
	}, {
		"Name" : "Pskov",
		"Code" : "PSK"
	}, {
		"Name" : "Rostov-na-Donu",
		"Code" : "ROS"
	}, {
		"Name" : "Ryazan",
		"Code" : "RYA"
	}, {
		"Name" : "Salekhard",
		"Code" : "SLY"
	}, {
		"Name" : "Samara",
		"Code" : "SAM"
	}, {
		"Name" : "Saransk",
		"Code" : "SKX"
	}, {
		"Name" : "Saratov",
		"Code" : "SAR"
	}, {
		"Name" : "Smolensk",
		"Code" : "LNX"
	}, {
		"Name" : "St. Peterburg",
		"Code" : "SPE"
	}, {
		"Name" : "Stavropol",
		"Code" : "STA"
	}, {
		"Name" : "Syktyvkar",
		"Code" : "SCW"
	}, {
		"Name" : "Tambov",
		"Code" : "TAM"
	}, {
		"Name" : "Tomsk",
		"Code" : "TOM"
	}, {
		"Name" : "Tula",
		"Code" : "TUL"
	}, {
		"Name" : "Tver",
		"Code" : "TVE"
	}, {
		"Name" : "Tyumen",
		"Code" : "TYU"
	}, {
		"Name" : "Ufa",
		"Code" : "UFA"
	}, {
		"Name" : "Ulan-Ude",
		"Code" : "UUD"
	}, {
		"Name" : "Uljanovsk",
		"Code" : "ULY"
	}, {
		"Name" : "Ust-Ordynsky",
		"Code" : "UOB"
	}, {
		"Name" : "Velikij Novgorod",
		"Code" : "VUS"
	}, {
		"Name" : "Vladikavkaz",
		"Code" : "VLA"
	}, {
		"Name" : "Vladimir",
		"Code" : "VMR"
	}, {
		"Name" : "Vladivostok",
		"Code" : "VVO"
	}, {
		"Name" : "Volgograd",
		"Code" : "VOG"
	}, {
		"Name" : "Vologda",
		"Code" : "VLG"
	}, {
		"Name" : "Voronezh",
		"Code" : "VOR"
	}, {
		"Name" : "Yoshkar-Ola",
		"Code" : "YOL"
	} ]
}, {
	"Name" : "Rwanda",
	"Code" : "250",
	"State" : [ {
		"Name" : "Butare",
		"Code" : "BU"
	}, {
		"Name" : "Byumba",
		"Code" : "BY"
	}, {
		"Name" : "Cyangugu",
		"Code" : "CY"
	}, {
		"Name" : "Gikongoro",
		"Code" : "GK"
	}, {
		"Name" : "Gisenyi",
		"Code" : "GS"
	}, {
		"Name" : "Gitarama",
		"Code" : "GT"
	}, {
		"Name" : "Kabuga",
		"Code" : "KA"
	}, {
		"Name" : "Kibungo",
		"Code" : "KG"
	}, {
		"Name" : "Kibuye",
		"Code" : "KY"
	}, {
		"Name" : "Kigali-Ngali",
		"Code" : "KR"
	}, {
		"Name" : "Kigali-Ville",
		"Code" : "KV"
	}, {
		"Name" : "Nyanza",
		"Code" : "NY"
	}, {
		"Name" : "Ruhango",
		"Code" : "RH"
	}, {
		"Name" : "Ruhengeri",
		"Code" : "RU"
	}, {
		"Name" : "Rwamagana",
		"Code" : "RW"
	}, {
		"Name" : "Umutara",
		"Code" : "UM"
	} ]
}, {
	"Name" : "Samoa",
	"Code" : "685"
}, {
	"Name" : "San Marino",
	"Code" : "378"
}, {
	"Name" : "Sao Tome and Principe",
	"Code" : "239"
}, {
	"Name" : "Saudi Arabia",
	"Code" : "966",
	"State" : [ {
		"Name" : "Abha",
		"Code" : "AHB"
	}, {
		"Name" : "Al Bahah",
		"Code" : "BH"
	}, {
		"Name" : "Al-Hufuf",
		"Code" : "HFF"
	}, {
		"Name" : "Al-Jubayl",
		"Code" : "JBI"
	}, {
		"Name" : "Al-Kharj",
		"Code" : "AKH"
	}, {
		"Name" : "Al-Mubarraz",
		"Code" : "MBR"
	}, {
		"Name" : "Arar",
		"Code" : "ARA"
	}, {
		"Name" : "At Tarif",
		"Code" : "TAR"
	}, {
		"Name" : "Buraydah",
		"Code" : "BUR"
	}, {
		"Name" : "Dammam",
		"Code" : "DAM"
	}, {
		"Name" : "Hafar al-Batin",
		"Code" : "HBT"
	}, {
		"Name" : "Hail",
		"Code" : "HL"
	}, {
		"Name" : "Jiddah",
		"Code" : "JED"
	}, {
		"Name" : "Jizan",
		"Code" : "JZ"
	}, {
		"Name" : "Khamis Mushayt",
		"Code" : "KMX"
	}, {
		"Name" : "Makkah",
		"Code" : "ML"
	}, {
		"Name" : "Medina",
		"Code" : "MED"
	}, {
		"Name" : "Najran",
		"Code" : "NR"
	}, {
		"Name" : "Riyad",
		"Code" : "RD"
	}, {
		"Name" : "Sakaka",
		"Code" : "SAK"
	}, {
		"Name" : "Tabuk",
		"Code" : "TB"
	}, {
		"Name" : "Yanbu al-Bahr",
		"Code" : "YNB"
	} ]
}, {
	"Name" : "Senegal",
	"Code" : "221",
	"State" : [ {
		"Name" : "Dakar",
		"Code" : "DA"
	}, {
		"Name" : "Diourbel",
		"Code" : "DI"
	}, {
		"Name" : "Fatick",
		"Code" : "FA"
	}, {
		"Name" : "Kaolack",
		"Code" : "KA"
	}, {
		"Name" : "Kolda",
		"Code" : "KO"
	}, {
		"Name" : "Louga",
		"Code" : "LO"
	}, {
		"Name" : "Matam",
		"Code" : "MA"
	}, {
		"Name" : "Saint-Louis",
		"Code" : "SL"
	}, {
		"Name" : "Tambacounda",
		"Code" : "TA"
	}, {
		"Name" : "Thies",
		"Code" : "TH"
	}, {
		"Name" : "Ziguinchor",
		"Code" : "ZI"
	} ]
}, {
	"Name" : "Serbia,Montenegro",
	"Code" : "381",
	"State" : [ {
		"Name" : "Beograd",
		"Code" : "BEG"
	}, {
		"Name" : "Kragujevac",
		"Code" : "KGV"
	}, {
		"Name" : "Nis",
		"Code" : "INI"
	}, {
		"Name" : "Novi Sad",
		"Code" : "NVS"
	}, {
		"Name" : "Podgorica",
		"Code" : "POD"
	}, {
		"Name" : "Pristina",
		"Code" : "PRN"
	}, {
		"Name" : "Subotica",
		"Code" : "SUB"
	}, {
		"Name" : "Zemun",
		"Code" : "ZEM"
	} ]
}, {
	"Name" : "Seychelles",
	"Code" : "248"
}, {
	"Name" : "Sierra Leone",
	"Code" : "232",
	"State" : [ {
		"Name" : "Eastern",
		"Code" : "E"
	}, {
		"Name" : "Northern",
		"Code" : "N"
	}, {
		"Name" : "Southern",
		"Code" : "S"
	}, {
		"Name" : "Western",
		"Code" : "W"
	} ]
}, {
	"Name" : "Singapore",
	"Code" : "065"
}, {
	"Name" : "Slovakia",
	"Code" : "421",
	"State" : [ {
		"Name" : "Banskobystricky",
		"Code" : "BBY"
	}, {
		"Name" : "Bratislavsky",
		"Code" : "BTS"
	}, {
		"Name" : "Koricky",
		"Code" : "KOR"
	}, {
		"Name" : "Nitriansky",
		"Code" : "NRA"
	}, {
		"Name" : "Prerovsky",
		"Code" : "POV"
	}, {
		"Name" : "Rilinsky",
		"Code" : "RIL"
	}, {
		"Name" : "Trenriansky",
		"Code" : "TRE"
	}, {
		"Name" : "Trnavsky",
		"Code" : "TNA"
	} ]
}, {
	"Name" : "Slovenia",
	"Code" : "386",
	"State" : [ {
		"Name" : "Dolenjska",
		"Code" : "DLJ"
	}, {
		"Name" : "Gorenjska",
		"Code" : "GSZ"
	}, {
		"Name" : "Goriska",
		"Code" : "GSK"
	}, {
		"Name" : "Koroska",
		"Code" : "KOR"
	}, {
		"Name" : "Notranjsko-kraska",
		"Code" : "NKR"
	}, {
		"Name" : "Obalno-kraska",
		"Code" : "OKR"
	}, {
		"Name" : "Osrednjeslovenska",
		"Code" : "OSR"
	}, {
		"Name" : "Podravska",
		"Code" : "POD"
	}, {
		"Name" : "Pomurska",
		"Code" : "POM"
	}, {
		"Name" : "Savinjska",
		"Code" : "SAV"
	}, {
		"Name" : "Spodnjeposavska",
		"Code" : "SPO"
	}, {
		"Name" : "Zasavska",
		"Code" : "ZAS"
	} ]
}, {
	"Name" : "Solomon Islands",
	"Code" : "677",
	"State" : [ {
		"Name" : "Central Islands",
		"Code" : "CE"
	}, {
		"Name" : "Choiseul",
		"Code" : "CH"
	}, {
		"Name" : "Guadalcanal",
		"Code" : "GC"
	}, {
		"Name" : "Honiara",
		"Code" : "HO"
	}, {
		"Name" : "Isabel",
		"Code" : "IS"
	}, {
		"Name" : "Makira",
		"Code" : "MK"
	}, {
		"Name" : "Malaita",
		"Code" : "ML"
	}, {
		"Name" : "Rennell and Bellona",
		"Code" : "RB"
	}, {
		"Name" : "Temotu",
		"Code" : "TM"
	}, {
		"Name" : "Western",
		"Code" : "WE"
	} ]
}, {
	"Name" : "Somalia",
	"Code" : "252"
}, {
	"Name" : "South Africa",
	"Code" : "027",
	"State" : [ {
		"Name" : "Barkley East",
		"Code" : "BAE"
	}, {
		"Name" : "Beaufort West",
		"Code" : "BEW"
	}, {
		"Name" : "Bisho",
		"Code" : "BIY"
	}, {
		"Name" : "Bloemfontein",
		"Code" : "BFN"
	}, {
		"Name" : "Bredasdorp",
		"Code" : "BDD"
	}, {
		"Name" : "Bronkhorstspruit",
		"Code" : "BHT"
	}, {
		"Name" : "Cape Town",
		"Code" : "CPT"
	}, {
		"Name" : "De Aar",
		"Code" : "DAA"
	}, {
		"Name" : "Dundee",
		"Code" : "DUN"
	}, {
		"Name" : "Durban",
		"Code" : "DUR"
	}, {
		"Name" : "East London",
		"Code" : "ELS"
	}, {
		"Name" : "George",
		"Code" : "GRJ"
	}, {
		"Name" : "Giyani",
		"Code" : "GIY"
	}, {
		"Name" : "Groblersdal",
		"Code" : "GBD"
	}, {
		"Name" : "Ixopo",
		"Code" : "IXO"
	}, {
		"Name" : "Johannesburg",
		"Code" : "JNB"
	}, {
		"Name" : "Kimberley",
		"Code" : "KIM"
	}, {
		"Name" : "Klerksdorp",
		"Code" : "KXE"
	}, {
		"Name" : "Kuruman",
		"Code" : "KMH"
	}, {
		"Name" : "Ladysmith",
		"Code" : "LAY"
	}, {
		"Name" : "Middelburg",
		"Code" : "MDB"
	}, {
		"Name" : "Mkuze",
		"Code" : "MZQ"
	}, {
		"Name" : "Moorreesburg",
		"Code" : "MOO"
	}, {
		"Name" : "Mount Ayliff",
		"Code" : "MAY"
	}, {
		"Name" : "Nelspruit",
		"Code" : "NLP"
	}, {
		"Name" : "Newcastle",
		"Code" : "NCS"
	}, {
		"Name" : "Nylstroom",
		"Code" : "NYL"
	}, {
		"Name" : "Pietermaritzburg",
		"Code" : "PZB"
	}, {
		"Name" : "Pietersburg",
		"Code" : "PTG"
	}, {
		"Name" : "Port Elizabeth",
		"Code" : "PLZ"
	}, {
		"Name" : "Port Shepstone",
		"Code" : "PSS"
	}, {
		"Name" : "Pretoria",
		"Code" : "PRY"
	}, {
		"Name" : "Queenstown",
		"Code" : "UTW"
	}, {
		"Name" : "Randfontein",
		"Code" : "RFT"
	}, {
		"Name" : "Richards Bay",
		"Code" : "RCB"
	}, {
		"Name" : "Rustenburg",
		"Code" : "RSB"
	}, {
		"Name" : "Sasolburg",
		"Code" : "SAS"
	}, {
		"Name" : "Secunda",
		"Code" : "ZEC"
	}, {
		"Name" : "Springbok",
		"Code" : "SBU"
	}, {
		"Name" : "Thohoyandou",
		"Code" : "THY"
	}, {
		"Name" : "Thulamahashe",
		"Code" : "TLH"
	}, {
		"Name" : "Trompsburg",
		"Code" : "TPB"
	}, {
		"Name" : "Ulundi",
		"Code" : "ULD"
	}, {
		"Name" : "Umtata",
		"Code" : "UTT"
	}, {
		"Name" : "Upington",
		"Code" : "UTN"
	}, {
		"Name" : "Vereeniging",
		"Code" : "VGG"
	}, {
		"Name" : "Vryburg",
		"Code" : "VRU"
	}, {
		"Name" : "Welkom",
		"Code" : "WEL"
	}, {
		"Name" : "Witsieshoek",
		"Code" : "WSH"
	}, {
		"Name" : "Worcester",
		"Code" : "WOR"
	} ]
}, {
	"Name" : "Spain",
	"Code" : "034",
	"State" : [ {
		"Name" : "Alava",
		"Code" : "ALA"
	}, {
		"Name" : "Albacete",
		"Code" : "ALB"
	}, {
		"Name" : "Alicante",
		"Code" : "ALC"
	}, {
		"Name" : "Almeria",
		"Code" : "LEI"
	}, {
		"Name" : "Asturias",
		"Code" : "AST"
	}, {
		"Name" : "Avila",
		"Code" : "AVI"
	}, {
		"Name" : "Badajoz",
		"Code" : "BJZ"
	}, {
		"Name" : "Baleares",
		"Code" : "BLR"
	}, {
		"Name" : "Barcelona",
		"Code" : "BCN"
	}, {
		"Name" : "Burgos",
		"Code" : "BUR"
	}, {
		"Name" : "Caceres",
		"Code" : "CCS"
	}, {
		"Name" : "Cadiz",
		"Code" : "CAD"
	}, {
		"Name" : "Castellon",
		"Code" : "CAS"
	}, {
		"Name" : "Cludad Real",
		"Code" : "CIR"
	}, {
		"Name" : "Cordoba",
		"Code" : "ODB"
	}, {
		"Name" : "Cuenca",
		"Code" : "CUE"
	}, {
		"Name" : "Gerona",
		"Code" : "GRO"
	}, {
		"Name" : "Granada",
		"Code" : "GRX"
	}, {
		"Name" : "Guadalajara",
		"Code" : "GUA"
	}, {
		"Name" : "Guipuzcoa",
		"Code" : "GUI"
	}, {
		"Name" : "Huelva",
		"Code" : "HUV"
	}, {
		"Name" : "Huesca",
		"Code" : "HUC"
	}, {
		"Name" : "Jaen",
		"Code" : "JAE"
	}, {
		"Name" : "La Coruna",
		"Code" : "LCG"
	}, {
		"Name" : "La Rioja",
		"Code" : "ARL"
	}, {
		"Name" : "Las Palmas",
		"Code" : "LPA"
	}, {
		"Name" : "Leon",
		"Code" : "LEN"
	}, {
		"Name" : "Lleida",
		"Code" : "LLE"
	}, {
		"Name" : "Madrid",
		"Code" : "MAD"
	}, {
		"Name" : "Malaga",
		"Code" : "AGP"
	}, {
		"Name" : "Murcia",
		"Code" : "MJV"
	}, {
		"Name" : "Navarra",
		"Code" : "NVV"
	}, {
		"Name" : "Orense",
		"Code" : "ORE"
	}, {
		"Name" : "Palencia",
		"Code" : "PAC"
	}, {
		"Name" : "Provincia de Lugo",
		"Code" : "LGO"
	}, {
		"Name" : "Provincia de Pontevedra",
		"Code" : "PEV"
	}, {
		"Name" : "Salamanca",
		"Code" : "SLM"
	}, {
		"Name" : "Santa Cruz de Tenerife",
		"Code" : "SCT"
	}, {
		"Name" : "Santander",
		"Code" : "SDR"
	}, {
		"Name" : "Segovia",
		"Code" : "SEG"
	}, {
		"Name" : "Sevilla",
		"Code" : "SVQ"
	}, {
		"Name" : "Soria",
		"Code" : "SOR"
	}, {
		"Name" : "Tarragona",
		"Code" : "TAR"
	}, {
		"Name" : "Teruel",
		"Code" : "TER"
	}, {
		"Name" : "Toledo",
		"Code" : "TOL"
	}, {
		"Name" : "Valencia",
		"Code" : "VLC"
	}, {
		"Name" : "Valladolid",
		"Code" : "VLL"
	}, {
		"Name" : "Vizcaya",
		"Code" : "VSE"
	}, {
		"Name" : "Zamora",
		"Code" : "ZMR"
	}, {
		"Name" : "Zaragoza",
		"Code" : "ZAZ"
	} ]
}, {
	"Name" : "Sri Lanka",
	"Code" : "094",
	"State" : [ {
		"Name" : "Ampara",
		"Code" : "AMP"
	}, {
		"Name" : "Anuradhapura",
		"Code" : "ADP"
	}, {
		"Name" : "Badulla",
		"Code" : "BAD"
	}, {
		"Name" : "Batticaloa",
		"Code" : "BTC"
	}, {
		"Name" : "Colombo",
		"Code" : "CMB"
	}, {
		"Name" : "Galle",
		"Code" : "GAL"
	}, {
		"Name" : "Gampaha",
		"Code" : "GAM"
	}, {
		"Name" : "Hambantota",
		"Code" : "HBA"
	}, {
		"Name" : "Jaffna",
		"Code" : "JAF"
	}, {
		"Name" : "Kalutara",
		"Code" : "KLT"
	}, {
		"Name" : "Kandy",
		"Code" : "KAN"
	}, {
		"Name" : "Kegalle",
		"Code" : "KEG"
	}, {
		"Name" : "Kilinochchi",
		"Code" : "KIL"
	}, {
		"Name" : "Kurunegala",
		"Code" : "KUR"
	}, {
		"Name" : "Mannar",
		"Code" : "MAN"
	}, {
		"Name" : "Matale",
		"Code" : "MAT"
	}, {
		"Name" : "Matara",
		"Code" : "MAA"
	}, {
		"Name" : "Monaragala",
		"Code" : "MON"
	}, {
		"Name" : "Mullathivu",
		"Code" : "MUL"
	}, {
		"Name" : "Nuwara Eliya",
		"Code" : "NUE"
	}, {
		"Name" : "Polonnaruwa",
		"Code" : "POL"
	}, {
		"Name" : "Puttalam",
		"Code" : "PUT"
	}, {
		"Name" : "Ratnapura",
		"Code" : "RAT"
	}, {
		"Name" : "Trincomalee",
		"Code" : "TRR"
	}, {
		"Name" : "Vavuniya",
		"Code" : "VAV"
	} ]
}, {
	"Name" : "Sudan",
	"Code" : "249",
	"State" : [ {
		"Name" : "Aali an-Nil",
		"Code" : "ANB"
	}, {
		"Name" : "Al Wasta",
		"Code" : "WDH"
	}, {
		"Name" : "Al-Istiwaiyah",
		"Code" : "SIS"
	}, {
		"Name" : "Al-Khartum",
		"Code" : "KRT"
	}, {
		"Name" : "Ash-Shamaliyah",
		"Code" : "ASH"
	}, {
		"Name" : "Ash-Sharqiyah",
		"Code" : "SHA"
	}, {
		"Name" : "Bahr al-Ghazal",
		"Code" : "SBG"
	}, {
		"Name" : "Darfur",
		"Code" : "SDA"
	}, {
		"Name" : "Kurdufan",
		"Code" : "GKU"
	} ]
}, {
	"Name" : "Suriname",
	"Code" : "597",
	"State" : [ {
		"Name" : "Brokopondo",
		"Code" : "BR"
	}, {
		"Name" : "Commewijne",
		"Code" : "CM"
	}, {
		"Name" : "Coronie",
		"Code" : "CR"
	}, {
		"Name" : "Marowijne",
		"Code" : "MA"
	}, {
		"Name" : "Nickerie",
		"Code" : "NI"
	}, {
		"Name" : "Para",
		"Code" : "PA"
	}, {
		"Name" : "Paramaribo",
		"Code" : "PM"
	}, {
		"Name" : "Saramacca",
		"Code" : "SA"
	}, {
		"Name" : "Sipaliwini",
		"Code" : "SI"
	}, {
		"Name" : "Wanica",
		"Code" : "WA"
	} ]
}, {
	"Name" : "Svalbard and Jan Mayen",
	"Code" : "047"
}, {
	"Name" : "Swaziland",
	"Code" : "268"
}, {
	"Name" : "Sweden",
	"Code" : "046",
	"State" : [ {
		"Name" : "Blekinge",
		"Code" : "K"
	}, {
		"Name" : "Dalarnas",
		"Code" : "DLN"
	}, {
		"Name" : "Gavleborgs",
		"Code" : "X"
	}, {
		"Name" : "Gotlands",
		"Code" : "I"
	}, {
		"Name" : "Hallands",
		"Code" : "N"
	}, {
		"Name" : "Jamtlands",
		"Code" : "Z"
	}, {
		"Name" : "Jonkopings",
		"Code" : "F"
	}, {
		"Name" : "Kalmar",
		"Code" : "H"
	}, {
		"Name" : "Kronobergs",
		"Code" : "G"
	}, {
		"Name" : "Norrbottens",
		"Code" : "BD"
	}, {
		"Name" : "Orebro",
		"Code" : "T"
	}, {
		"Name" : "Skane",
		"Code" : "M"
	}, {
		"Name" : "Sodermanlands",
		"Code" : "D"
	}, {
		"Name" : "Stockholms",
		"Code" : "AB"
	}, {
		"Name" : "Uppsala",
		"Code" : "C"
	}, {
		"Name" : "Ustergotland",
		"Code" : "UGL"
	}, {
		"Name" : "Varmlands",
		"Code" : "S"
	}, {
		"Name" : "Vasterbottens",
		"Code" : "AC"
	}, {
		"Name" : "Vasternorrlands",
		"Code" : "Y"
	}, {
		"Name" : "Vastmanlands",
		"Code" : "U"
	}, {
		"Name" : "Vastra Gotalands",
		"Code" : "O"
	} ]
}, {
	"Name" : "Switzerland",
	"Code" : "041",
	"State" : [ {
		"Name" : "Aargau",
		"Code" : "AG"
	}, {
		"Name" : "Appenzell Ausserrhon",
		"Code" : "AR"
	}, {
		"Name" : "Appenzell Innerrhodn",
		"Code" : "AI"
	}, {
		"Name" : "Basel Landschaft",
		"Code" : "BL"
	}, {
		"Name" : "Basel－Sstadt",
		"Code" : "BS"
	}, {
		"Name" : "Bern",
		"Code" : "BE"
	}, {
		"Name" : "Freiburg",
		"Code" : "FR"
	}, {
		"Name" : "Geneve",
		"Code" : "GE"
	}, {
		"Name" : "Glarus",
		"Code" : "GL"
	}, {
		"Name" : "Graubünden",
		"Code" : "GR"
	}, {
		"Name" : "Jura",
		"Code" : "JU"
	}, {
		"Name" : "Lausanne",
		"Code" : "LA"
	}, {
		"Name" : "Luzern",
		"Code" : "LU"
	}, {
		"Name" : "Neuchatel",
		"Code" : "NE"
	}, {
		"Name" : "Nidwalden",
		"Code" : "NW"
	}, {
		"Name" : "Obwalden",
		"Code" : "OW"
	}, {
		"Name" : "Schaffhausen",
		"Code" : "SH"
	}, {
		"Name" : "Schwyz",
		"Code" : "SZ"
	}, {
		"Name" : "Solothurn",
		"Code" : "SO"
	}, {
		"Name" : "St.Gallen",
		"Code" : "SG"
	}, {
		"Name" : "Thurgau",
		"Code" : "TG"
	}, {
		"Name" : "Ticino",
		"Code" : "TI"
	}, {
		"Name" : "Uri",
		"Code" : "UR"
	}, {
		"Name" : "Vaud",
		"Code" : "VD"
	}, {
		"Name" : "Wallis",
		"Code" : "VS"
	}, {
		"Name" : "Zug",
		"Code" : "ZG"
	}, {
		"Name" : "Zurich",
		"Code" : "ZH"
	} ]
}, {
	"Name" : "Syria",
	"Code" : "963",
	"State" : [ {
		"Name" : "Al Ghab",
		"Code" : "GH"
	}, {
		"Name" : "Al Hasakah",
		"Code" : "HA"
	}, {
		"Name" : "Al Ladhiqiyah",
		"Code" : "LA"
	}, {
		"Name" : "Al Qunaytirah",
		"Code" : "QU"
	}, {
		"Name" : "Al-Qamishli",
		"Code" : "QA"
	}, {
		"Name" : "Ar Raqqah",
		"Code" : "RQ"
	}, {
		"Name" : "As Suwayda",
		"Code" : "SU"
	}, {
		"Name" : "Dara",
		"Code" : "DA"
	}, {
		"Name" : "Dayr az Zawr",
		"Code" : "DZ"
	}, {
		"Name" : "Halab",
		"Code" : "HL"
	}, {
		"Name" : "Hamah",
		"Code" : "HM"
	}, {
		"Name" : "Hims",
		"Code" : "HI"
	}, {
		"Name" : "Idlib",
		"Code" : "ID"
	}, {
		"Name" : "Madinat Dimashq",
		"Code" : "DI"
	}, {
		"Name" : "Rif Dimashq",
		"Code" : "RD"
	}, {
		"Name" : "Tartus",
		"Code" : "TA"
	} ]
}, {
	"Name" : "Tajikistan",
	"Code" : "992",
	"State" : [ {
		"Name" : "Dushanbe",
		"Code" : "DYU"
	}, {
		"Name" : "Isfara",
		"Code" : "ISF"
	}, {
		"Name" : "Kanibadam",
		"Code" : "KAN"
	}, {
		"Name" : "Khorugh",
		"Code" : "KHO"
	}, {
		"Name" : "Khujand",
		"Code" : "KHU"
	}, {
		"Name" : "Kofarnihon",
		"Code" : "KOF"
	}, {
		"Name" : "Kulob",
		"Code" : "KLB"
	}, {
		"Name" : "Kurgan-Tjube",
		"Code" : "KTJ"
	}, {
		"Name" : "Nurek",
		"Code" : "NUR"
	}, {
		"Name" : "Pendzhikent",
		"Code" : "PJK"
	}, {
		"Name" : "Rogun",
		"Code" : "RGU"
	}, {
		"Name" : "Sarband",
		"Code" : "SBA"
	}, {
		"Name" : "Taboshar",
		"Code" : "TBS"
	}, {
		"Name" : "Tursunzade",
		"Code" : "TSZ"
	}, {
		"Name" : "Ura-Tjube",
		"Code" : "UTJ"
	} ]
}, {
	"Name" : "Tanzania",
	"Code" : "255",
	"State" : [ {
		"Name" : "Arusha",
		"Code" : "AR"
	}, {
		"Name" : "Dar es Salaam",
		"Code" : "DS"
	}, {
		"Name" : "Dodoma",
		"Code" : "DO"
	}, {
		"Name" : "Iringa",
		"Code" : "IR"
	}, {
		"Name" : "Kagera",
		"Code" : "KA"
	}, {
		"Name" : "Kaskazini Pemba",
		"Code" : "PN"
	}, {
		"Name" : "Kaskazini Unguja",
		"Code" : "UN"
	}, {
		"Name" : "Kigoma",
		"Code" : "KI"
	}, {
		"Name" : "Kilimanjaro",
		"Code" : "KJ"
	}, {
		"Name" : "Kusini Pemba",
		"Code" : "PS"
	}, {
		"Name" : "Kusini Unguja",
		"Code" : "US"
	}, {
		"Name" : "Lindi",
		"Code" : "LN"
	}, {
		"Name" : "Manyara",
		"Code" : "MY"
	}, {
		"Name" : "Mara",
		"Code" : "MR"
	}, {
		"Name" : "Mbeya",
		"Code" : "MB"
	}, {
		"Name" : "Mjini Magharibi",
		"Code" : "MM"
	}, {
		"Name" : "Morogoro",
		"Code" : "MO"
	}, {
		"Name" : "Mtwara",
		"Code" : "MT"
	}, {
		"Name" : "Mwanza",
		"Code" : "MW"
	}, {
		"Name" : "Pwani",
		"Code" : "PW"
	}, {
		"Name" : "Rukwa",
		"Code" : "RK"
	}, {
		"Name" : "Ruvuma",
		"Code" : "RV"
	}, {
		"Name" : "Shinyanga",
		"Code" : "SH"
	}, {
		"Name" : "Singida",
		"Code" : "SI"
	}, {
		"Name" : "Tabora",
		"Code" : "TB"
	}, {
		"Name" : "Tanga",
		"Code" : "TN"
	}, {
		"Name" : "Zanzibar",
		"Code" : "ZN"
	} ]
}, {
	"Name" : "Thailand",
	"Code" : "066",
	"State" : [ {
		"Name" : "Amnat Charoen",
		"Code" : "37"
	}, {
		"Name" : "Ang Thong",
		"Code" : "15"
	}, {
		"Name" : "Bangkok",
		"Code" : "10"
	}, {
		"Name" : "Buri Ram",
		"Code" : "31"
	}, {
		"Name" : "Chachoengsao",
		"Code" : "24"
	}, {
		"Name" : "Chai Nat",
		"Code" : "18"
	}, {
		"Name" : "Chaiyaphum",
		"Code" : "36"
	}, {
		"Name" : "Chanthaburi",
		"Code" : "22"
	}, {
		"Name" : "Chiang Mai",
		"Code" : "50"
	}, {
		"Name" : "Chiang Rai",
		"Code" : "57"
	}, {
		"Name" : "Chon Buri",
		"Code" : "20"
	}, {
		"Name" : "Chumphon",
		"Code" : "86"
	}, {
		"Name" : "Kalasin",
		"Code" : "46"
	}, {
		"Name" : "Kamphaeng Phet",
		"Code" : "62"
	}, {
		"Name" : "Kanchanaburi",
		"Code" : "71"
	}, {
		"Name" : "Khon Kaen",
		"Code" : "40"
	}, {
		"Name" : "Krabi",
		"Code" : "81"
	}, {
		"Name" : "Lamphun",
		"Code" : "51"
	}, {
		"Name" : "Loei",
		"Code" : "42"
	}, {
		"Name" : "Lop Buri",
		"Code" : "16"
	}, {
		"Name" : "Mae Hong Son",
		"Code" : "58"
	}, {
		"Name" : "Maha Sarakham",
		"Code" : "44"
	}, {
		"Name" : "Mukdahan",
		"Code" : "49"
	}, {
		"Name" : "Nakhon Nayok",
		"Code" : "26"
	}, {
		"Name" : "Nakhon Pathom",
		"Code" : "73"
	}, {
		"Name" : "Nakhon Phanom",
		"Code" : "48"
	}, {
		"Name" : "Nakhon Sawan",
		"Code" : "60"
	}, {
		"Name" : "Nakhon Si Thammarat",
		"Code" : "80"
	}, {
		"Name" : "Nan",
		"Code" : "55"
	}, {
		"Name" : "Narathiwat",
		"Code" : "96"
	}, {
		"Name" : "Nong Bua Lamphu",
		"Code" : "39"
	}, {
		"Name" : "Nong Khai",
		"Code" : "43"
	}, {
		"Name" : "Nonthaburi",
		"Code" : "12"
	}, {
		"Name" : "Pathum Thani",
		"Code" : "13"
	}, {
		"Name" : "Pattani",
		"Code" : "94"
	}, {
		"Name" : "Phangnga",
		"Code" : "82"
	}, {
		"Name" : "Phatthalung",
		"Code" : "93"
	}, {
		"Name" : "Phayao",
		"Code" : "56"
	}, {
		"Name" : "Phetchabun",
		"Code" : "76"
	}, {
		"Name" : "Phetchaburi",
		"Code" : "78"
	}, {
		"Name" : "Phichit",
		"Code" : "66"
	}, {
		"Name" : "Phitsanulok",
		"Code" : "65"
	}, {
		"Name" : "Phra Nakhon Si Ayutthaya",
		"Code" : "14"
	}, {
		"Name" : "Phrae",
		"Code" : "54"
	}, {
		"Name" : "Phuket",
		"Code" : "83"
	}, {
		"Name" : "Prachin Buri",
		"Code" : "25"
	}, {
		"Name" : "Prachuap Khiri Khan",
		"Code" : "77"
	}, {
		"Name" : "Ranong",
		"Code" : "85"
	}, {
		"Name" : "Ratchaburi",
		"Code" : "70"
	}, {
		"Name" : "Rayong",
		"Code" : "21"
	}, {
		"Name" : "Roi Et",
		"Code" : "45"
	}, {
		"Name" : "Sa Kaeo",
		"Code" : "27"
	}, {
		"Name" : "Sakon Nakhon",
		"Code" : "47"
	}, {
		"Name" : "Samut Prakan",
		"Code" : "11"
	}, {
		"Name" : "Samut Sakhon",
		"Code" : "74"
	}, {
		"Name" : "Samut Songkhram",
		"Code" : "75"
	}, {
		"Name" : "Saraburi",
		"Code" : "19"
	}, {
		"Name" : "Satun",
		"Code" : "91"
	}, {
		"Name" : "Si sa ket",
		"Code" : "33"
	}, {
		"Name" : "Sing Buri",
		"Code" : "17"
	}, {
		"Name" : "Songkhla",
		"Code" : "90"
	}, {
		"Name" : "Sukhothai",
		"Code" : "64"
	}, {
		"Name" : "Suphan Buri",
		"Code" : "72"
	}, {
		"Name" : "Surat Thani",
		"Code" : "84"
	}, {
		"Name" : "Surin",
		"Code" : "32"
	}, {
		"Name" : "Tak",
		"Code" : "63"
	}, {
		"Name" : "Trang",
		"Code" : "92"
	}, {
		"Name" : "Trat",
		"Code" : "23"
	}, {
		"Name" : "Ubon Ratchathani",
		"Code" : "34"
	}, {
		"Name" : "Udon Thani",
		"Code" : "41"
	}, {
		"Name" : "Uthai Thani",
		"Code" : "61"
	}, {
		"Name" : "Uttaradit",
		"Code" : "53"
	}, {
		"Name" : "Yala",
		"Code" : "95"
	}, {
		"Name" : "Yasothon",
		"Code" : "35"
	} ]
}, {
	"Name" : "Timor-Leste",
	"Code" : "TLS",
	"State" : [ {
		"Name" : "Aileu",
		"Code" : "AL"
	}, {
		"Name" : "Ainaro",
		"Code" : "AN"
	}, {
		"Name" : "Ambeno",
		"Code" : "AM"
	}, {
		"Name" : "Baucau",
		"Code" : "BA"
	}, {
		"Name" : "Bobonaro",
		"Code" : "BO"
	}, {
		"Name" : "Dili",
		"Code" : "DI"
	}, {
		"Name" : "Ermera",
		"Code" : "ER"
	}, {
		"Name" : "Kovalima",
		"Code" : "KO"
	}, {
		"Name" : "Lautem",
		"Code" : "LA"
	}, {
		"Name" : "Liquica",
		"Code" : "LI"
	}, {
		"Name" : "Manatuto",
		"Code" : "MT"
	}, {
		"Name" : "Manofahi",
		"Code" : "MF"
	}, {
		"Name" : "Viqueque",
		"Code" : "VI"
	} ]
}, {
	"Name" : "Togo",
	"Code" : "228",
	"State" : [ {
		"Name" : "Centre",
		"Code" : "C"
	}, {
		"Name" : "Kara",
		"Code" : "K"
	}, {
		"Name" : "Maritime",
		"Code" : "M"
	}, {
		"Name" : "Plateaux",
		"Code" : "P"
	}, {
		"Name" : "Savanes",
		"Code" : "S"
	} ]
}, {
	"Name" : "Tokelau",
	"Code" : "690"
}, {
	"Name" : "Tonga",
	"Code" : "676",
	"State" : [ {
		"Name" : "Eua",
		"Code" : "E"
	}, {
		"Name" : "Haapai",
		"Code" : "H"
	}, {
		"Name" : "Niuas",
		"Code" : "N"
	}, {
		"Name" : "Tongatapu",
		"Code" : "T"
	}, {
		"Name" : "Vavau",
		"Code" : "V"
	} ]
}, {
	"Name" : "Trinidad and Tobago",
	"Code" : "868"
}, {
	"Name" : "Tristan da Cunha",
	"Code" : "TAA"
}, {
	"Name" : "Tunisia",
	"Code" : "216",
	"State" : [ {
		"Name" : "Ariana",
		"Code" : "AR"
	}, {
		"Name" : "Beja",
		"Code" : "BJ"
	}, {
		"Name" : "Ben Arous",
		"Code" : "BA"
	}, {
		"Name" : "Bizerte",
		"Code" : "BI"
	}, {
		"Name" : "Gabes",
		"Code" : "GB"
	}, {
		"Name" : "Gafsa",
		"Code" : "GF"
	}, {
		"Name" : "Jendouba",
		"Code" : "JE"
	}, {
		"Name" : "Kairouan",
		"Code" : "KR"
	}, {
		"Name" : "Kasserine",
		"Code" : "KS"
	}, {
		"Name" : "Kebili",
		"Code" : "KB"
	}, {
		"Name" : "Le Kef",
		"Code" : "LK"
	}, {
		"Name" : "Mahdia",
		"Code" : "MH"
	}, {
		"Name" : "Manouba",
		"Code" : "MN"
	}, {
		"Name" : "Medenine",
		"Code" : "ME"
	}, {
		"Name" : "Monastir",
		"Code" : "MO"
	}, {
		"Name" : "Nabeul",
		"Code" : "NA"
	}, {
		"Name" : "Sfax",
		"Code" : "SF"
	}, {
		"Name" : "Sidi Bouzid",
		"Code" : "SD"
	}, {
		"Name" : "Siliana",
		"Code" : "SL"
	}, {
		"Name" : "Sousse",
		"Code" : "SO"
	}, {
		"Name" : "Tataouine",
		"Code" : "TA"
	}, {
		"Name" : "Tozeur",
		"Code" : "TO"
	}, {
		"Name" : "Tunis",
		"Code" : "TU"
	}, {
		"Name" : "Zaghouan",
		"Code" : "ZA"
	} ]
}, {
	"Name" : "Turkey",
	"Code" : "090",
	"State" : [ {
		"Name" : "Adana",
		"Code" : "ADA"
	}, {
		"Name" : "Adiyaman",
		"Code" : "ADI"
	}, {
		"Name" : "Afyon",
		"Code" : "AFY"
	}, {
		"Name" : "Agri",
		"Code" : "AGR"
	}, {
		"Name" : "Aksaray",
		"Code" : "AKS"
	}, {
		"Name" : "Amasya",
		"Code" : "AMA"
	}, {
		"Name" : "Ankara",
		"Code" : "ANK"
	}, {
		"Name" : "Antalya",
		"Code" : "ANT"
	}, {
		"Name" : "Ardahan",
		"Code" : "ARD"
	}, {
		"Name" : "Artvin",
		"Code" : "ART"
	}, {
		"Name" : "Aydin",
		"Code" : "AYI"
	}, {
		"Name" : "Balikesir",
		"Code" : "BAL"
	}, {
		"Name" : "Bartin",
		"Code" : "BAR"
	}, {
		"Name" : "Batman",
		"Code" : "BAT"
	}, {
		"Name" : "Bayburt",
		"Code" : "BAY"
	}, {
		"Name" : "Bilecik",
		"Code" : "BIL"
	}, {
		"Name" : "Bingol",
		"Code" : "BIN"
	}, {
		"Name" : "Bitlis",
		"Code" : "BIT"
	}, {
		"Name" : "Bolu",
		"Code" : "BOL"
	}, {
		"Name" : "Burdur",
		"Code" : "BRD"
	}, {
		"Name" : "Bursa",
		"Code" : "BRS"
	}, {
		"Name" : "Canakkale",
		"Code" : "CKL"
	}, {
		"Name" : "Cankiri",
		"Code" : "CKR"
	}, {
		"Name" : "Corum",
		"Code" : "COR"
	}, {
		"Name" : "Denizli",
		"Code" : "DEN"
	}, {
		"Name" : "Diyarbakir",
		"Code" : "DIY"
	}, {
		"Name" : "Edirne",
		"Code" : "EDI"
	}, {
		"Name" : "Elazig",
		"Code" : "ELA"
	}, {
		"Name" : "Erzincan",
		"Code" : "EZC"
	}, {
		"Name" : "Erzurum",
		"Code" : "EZR"
	}, {
		"Name" : "Eskisehir",
		"Code" : "ESK"
	}, {
		"Name" : "Gaziantep",
		"Code" : "GAZ"
	}, {
		"Name" : "Giresun",
		"Code" : "GIR"
	}, {
		"Name" : "Gumushane",
		"Code" : "GMS"
	}, {
		"Name" : "Hakkari",
		"Code" : "HKR"
	}, {
		"Name" : "Hatay",
		"Code" : "HTY"
	}, {
		"Name" : "Icel",
		"Code" : "ICE"
	}, {
		"Name" : "Igdir",
		"Code" : "IGD"
	}, {
		"Name" : "Isparta",
		"Code" : "ISP"
	}, {
		"Name" : "Istanbul",
		"Code" : "IST"
	}, {
		"Name" : "Izmir",
		"Code" : "IZM"
	}, {
		"Name" : "Kahraman Maras",
		"Code" : "KAH"
	}, {
		"Name" : "Karabuk",
		"Code" : "KRB"
	}, {
		"Name" : "Karaman",
		"Code" : "KRM"
	}, {
		"Name" : "Kars",
		"Code" : "KRS"
	}, {
		"Name" : "Kastamonu",
		"Code" : "KAS"
	}, {
		"Name" : "Kayseri",
		"Code" : "KAY"
	}, {
		"Name" : "Kilis",
		"Code" : "KLS"
	}, {
		"Name" : "Kirikkale",
		"Code" : "KRK"
	}, {
		"Name" : "Kirklareli",
		"Code" : "KLR"
	}, {
		"Name" : "Kirsehir",
		"Code" : "KRH"
	}, {
		"Name" : "Kocaeli",
		"Code" : "KOC"
	}, {
		"Name" : "Konya",
		"Code" : "KON"
	}, {
		"Name" : "Kutahya",
		"Code" : "KUT"
	}, {
		"Name" : "Malatya",
		"Code" : "MAL"
	}, {
		"Name" : "Manisa",
		"Code" : "MAN"
	}, {
		"Name" : "Mardin",
		"Code" : "MAR"
	}, {
		"Name" : "Mugla",
		"Code" : "MUG"
	}, {
		"Name" : "Mus",
		"Code" : "MUS"
	}, {
		"Name" : "Nevsehir",
		"Code" : "NEV"
	}, {
		"Name" : "Nigde",
		"Code" : "NIG"
	}, {
		"Name" : "Ordu",
		"Code" : "ORD"
	}, {
		"Name" : "Rize",
		"Code" : "RIZ"
	}, {
		"Name" : "Sakarya",
		"Code" : "SAK"
	}, {
		"Name" : "Samsun",
		"Code" : "SAM"
	}, {
		"Name" : "Siirt",
		"Code" : "SII"
	}, {
		"Name" : "Sinop",
		"Code" : "SIN"
	}, {
		"Name" : "Sirnak",
		"Code" : "SIR"
	}, {
		"Name" : "Sivas",
		"Code" : "SIV"
	}, {
		"Name" : "Tekirdag",
		"Code" : "TEL"
	}, {
		"Name" : "Tokat",
		"Code" : "TOK"
	}, {
		"Name" : "Trabzon",
		"Code" : "TRA"
	}, {
		"Name" : "Tunceli",
		"Code" : "TUN"
	}, {
		"Name" : "Urfa",
		"Code" : "URF"
	}, {
		"Name" : "Usak",
		"Code" : "USK"
	}, {
		"Name" : "Van",
		"Code" : "VAN"
	}, {
		"Name" : "Yozgat",
		"Code" : "YOZ"
	}, {
		"Name" : "Zonguldak",
		"Code" : "ZON"
	} ]
}, {
	"Name" : "Turkmenistan",
	"Code" : "993",
	"State" : [ {
		"Name" : "Ahal",
		"Code" : "A"
	}, {
		"Name" : "Ashgabat",
		"Code" : "ASB"
	}, {
		"Name" : "Balkan",
		"Code" : "B"
	}, {
		"Name" : "Dashoguz",
		"Code" : "D"
	}, {
		"Name" : "Lebap",
		"Code" : "L"
	}, {
		"Name" : "Mary",
		"Code" : "M"
	}, {
		"Name" : "Nebitdag",
		"Code" : "NEB"
	} ]
}, {
	"Name" : "Turks and Caicos Islands",
	"Code" : "649"
}, {
	"Name" : "Tuvalu",
	"Code" : "688"
}, {
	"Name" : "Uganda",
	"Code" : "256",
	"State" : [ {
		"Name" : "Adjumani",
		"Code" : "ADJ"
	}, {
		"Name" : "Apac",
		"Code" : "APC"
	}, {
		"Name" : "Arua",
		"Code" : "ARU"
	}, {
		"Name" : "Bugiri",
		"Code" : "BUG"
	}, {
		"Name" : "Bundibugyo",
		"Code" : "BUN"
	}, {
		"Name" : "Bushenyi",
		"Code" : "BSH"
	}, {
		"Name" : "Busia",
		"Code" : "BUS"
	}, {
		"Name" : "Gulu",
		"Code" : "GUL"
	}, {
		"Name" : "Hoima",
		"Code" : "HOI"
	}, {
		"Name" : "Iganga",
		"Code" : "IGA"
	}, {
		"Name" : "Jinja",
		"Code" : "JIN"
	}, {
		"Name" : "Kabale",
		"Code" : "KBL"
	}, {
		"Name" : "Kabarole",
		"Code" : "KAR"
	}, {
		"Name" : "Kaberamaido",
		"Code" : "KAB"
	}, {
		"Name" : "Kalangala",
		"Code" : "KAL"
	}, {
		"Name" : "Kampala",
		"Code" : "KMP"
	}, {
		"Name" : "Kamuli",
		"Code" : "KML"
	}, {
		"Name" : "Kamwenge",
		"Code" : "KAM"
	}, {
		"Name" : "Kanungu",
		"Code" : "KAN"
	}, {
		"Name" : "Kapchorwa",
		"Code" : "KPC"
	}, {
		"Name" : "Kasese",
		"Code" : "KAS"
	}, {
		"Name" : "Katakwi",
		"Code" : "KTK"
	}, {
		"Name" : "Kayunga",
		"Code" : "KAY"
	}, {
		"Name" : "Kibaale",
		"Code" : "KBA"
	}, {
		"Name" : "Kiboga",
		"Code" : "KIB"
	}, {
		"Name" : "Kisoro",
		"Code" : "KIS"
	}, {
		"Name" : "Kitgum",
		"Code" : "KIT"
	}, {
		"Name" : "Kotido",
		"Code" : "KOT"
	}, {
		"Name" : "Kumi",
		"Code" : "KUM"
	}, {
		"Name" : "Kyenjojo",
		"Code" : "KYE"
	}, {
		"Name" : "Lira",
		"Code" : "LIR"
	}, {
		"Name" : "Luwero",
		"Code" : "LUW"
	}, {
		"Name" : "Masaka",
		"Code" : "MAS"
	}, {
		"Name" : "Masindi",
		"Code" : "MSN"
	}, {
		"Name" : "Mayuge",
		"Code" : "MAY"
	}, {
		"Name" : "Mbale",
		"Code" : "MBA"
	}, {
		"Name" : "Mbarara",
		"Code" : "MBR"
	}, {
		"Name" : "Moroto",
		"Code" : "MRT"
	}, {
		"Name" : "Moyo",
		"Code" : "MOY"
	}, {
		"Name" : "Mpigi",
		"Code" : "MPI"
	}, {
		"Name" : "Mubende",
		"Code" : "MUB"
	}, {
		"Name" : "Mukono",
		"Code" : "MUK"
	}, {
		"Name" : "Nakapiripirit",
		"Code" : "NAK"
	}, {
		"Name" : "Nakasongola",
		"Code" : "NKS"
	}, {
		"Name" : "Nebbi",
		"Code" : "NEB"
	}, {
		"Name" : "Ntungamo",
		"Code" : "NTU"
	}, {
		"Name" : "Pader",
		"Code" : "PAD"
	}, {
		"Name" : "Pallisa",
		"Code" : "PAL"
	}, {
		"Name" : "Rakai",
		"Code" : "RAK"
	}, {
		"Name" : "Rukungiri",
		"Code" : "RUK"
	}, {
		"Name" : "Sembabule",
		"Code" : "SEM"
	}, {
		"Name" : "Sironko",
		"Code" : "SIR"
	}, {
		"Name" : "Soroti",
		"Code" : "SOR"
	}, {
		"Name" : "Tororo",
		"Code" : "TOR"
	}, {
		"Name" : "Wakiso",
		"Code" : "WAK"
	}, {
		"Name" : "Yumbe",
		"Code" : "YUM"
	} ]
}, {
	"Name" : "Ukraine",
	"Code" : "380",
	"State" : [ {
		"Name" : "Cherkasy",
		"Code" : "71"
	}, {
		"Name" : "Chernihiv",
		"Code" : "74"
	}, {
		"Name" : "Chernivtsi",
		"Code" : "77"
	}, {
		"Name" : "Dnipropetrovsk",
		"Code" : "12"
	}, {
		"Name" : "Donetsk",
		"Code" : "14"
	}, {
		"Name" : "Ivano-Frankivsk",
		"Code" : "26"
	}, {
		"Name" : "Kharkiv",
		"Code" : "63"
	}, {
		"Name" : "Khersonsrka",
		"Code" : "65"
	}, {
		"Name" : "Khmelnytsky",
		"Code" : "68"
	}, {
		"Name" : "Kirovohrad",
		"Code" : "35"
	}, {
		"Name" : "Kyiv",
		"Code" : "30"
	}, {
		"Name" : "Luhansk",
		"Code" : "9"
	}, {
		"Name" : "Lviv",
		"Code" : "46"
	}, {
		"Name" : "Mykolayiv",
		"Code" : "48"
	}, {
		"Name" : "Odessa",
		"Code" : "51"
	}, {
		"Name" : "Poltava",
		"Code" : "53"
	}, {
		"Name" : "Respublika Krym",
		"Code" : "43"
	}, {
		"Name" : "Rivne",
		"Code" : "56"
	}, {
		"Name" : "Sumy",
		"Code" : "59"
	}, {
		"Name" : "Ternopil",
		"Code" : "61"
	}, {
		"Name" : "Vinnytsya",
		"Code" : "5"
	}, {
		"Name" : "Volyn",
		"Code" : "7"
	}, {
		"Name" : "Zakarpatska",
		"Code" : "21"
	}, {
		"Name" : "Zaporizhzhya",
		"Code" : "23"
	}, {
		"Name" : "Zhytomyr",
		"Code" : "18"
	} ]
}, {
	"Name" : "United Arab Emirates",
	"Code" : "971",
	"State" : [ {
		"Name" : "Abu Dhabi",
		"Code" : "AZ"
	}, {
		"Name" : "Al l'Ayn",
		"Code" : "AL"
	}, {
		"Name" : "Ash Shariqah",
		"Code" : "SH"
	}, {
		"Name" : "Dubai",
		"Code" : "DU"
	} ]
}, {
	"Name" : "United Kingdom",
	"Code" : "044",
	"State" : [ {
		"Name" : "England",
		"Code" : "ENG",
		"City" : [ {
			"Name" : "Bath",
			"Code" : "BAS"
		}, {
			"Name" : "Birmingham",
			"Code" : "BIR"
		}, {
			"Name" : "Bradford",
			"Code" : "BRD"
		}, {
			"Name" : "Brighton & Hove",
			"Code" : "BNH"
		}, {
			"Name" : "Bristol",
			"Code" : "BST"
		}, {
			"Name" : "Cambridge",
			"Code" : "CAM"
		}, {
			"Name" : "Canterbury",
			"Code" : "CNG"
		}, {
			"Name" : "Carlisle",
			"Code" : "CAX"
		}, {
			"Name" : "Chester",
			"Code" : "CEG"
		}, {
			"Name" : "Chichester",
			"Code" : "CST"
		}, {
			"Name" : "Coventry",
			"Code" : "COV"
		}, {
			"Name" : "Derby",
			"Code" : "DER"
		}, {
			"Name" : "Durham",
			"Code" : "DUR"
		}, {
			"Name" : "Ely",
			"Code" : "ELY"
		}, {
			"Name" : "Exeter",
			"Code" : "EXE"
		}, {
			"Name" : "Gloucester",
			"Code" : "GLO"
		}, {
			"Name" : "Hereford",
			"Code" : "HAF"
		}, {
			"Name" : "Kingston upon Hull",
			"Code" : "KUH"
		}, {
			"Name" : "Lancaster",
			"Code" : "LAN"
		}, {
			"Name" : "Leeds",
			"Code" : "LDS"
		}, {
			"Name" : "Leicester",
			"Code" : "LCE"
		}, {
			"Name" : "Lichfield",
			"Code" : "LHF"
		}, {
			"Name" : "Lincoln",
			"Code" : "LCN"
		}, {
			"Name" : "Liverpool",
			"Code" : "LIV"
		}, {
			"Name" : "London",
			"Code" : "LND"
		}, {
			"Name" : "Manchester",
			"Code" : "MAN"
		}, {
			"Name" : "Newcastle",
			"Code" : "NCL"
		}, {
			"Name" : "Norwich",
			"Code" : "NRW"
		}, {
			"Name" : "Nottingham",
			"Code" : "NGM"
		}, {
			"Name" : "Oxford",
			"Code" : "OXF"
		}, {
			"Name" : "Peterborough",
			"Code" : "PTE"
		}, {
			"Name" : "Plymouth",
			"Code" : "PLY"
		}, {
			"Name" : "Portsmouth",
			"Code" : "POR"
		}, {
			"Name" : "Preston",
			"Code" : "PRE"
		}, {
			"Name" : "Ripon",
			"Code" : "RIP"
		}, {
			"Name" : "Saint Albans",
			"Code" : "TBL"
		}, {
			"Name" : "Salford",
			"Code" : "SLF"
		}, {
			"Name" : "Salisbury",
			"Code" : "SLS"
		}, {
			"Name" : "Sheffield",
			"Code" : "SHE"
		}, {
			"Name" : "Southampton",
			"Code" : "STH"
		}, {
			"Name" : "Stoke-on-Trent",
			"Code" : "SOT"
		}, {
			"Name" : "Sunderland",
			"Code" : "SUN"
		}, {
			"Name" : "Truro",
			"Code" : "TRU"
		}, {
			"Name" : "Wakefield",
			"Code" : "WKF"
		}, {
			"Name" : "Wells",
			"Code" : "WLS"
		}, {
			"Name" : "Winchester",
			"Code" : "WNE"
		}, {
			"Name" : "Wolverhampton",
			"Code" : "WOV"
		}, {
			"Name" : "Worcester",
			"Code" : "WOR"
		}, {
			"Name" : "York",
			"Code" : "YOR"
		} ]
	}, {
		"Name" : "Northern Ireland",
		"Code" : "NIR",
		"City" : [ {
			"Name" : "Belfast",
			"Code" : "BFS"
		}, {
			"Name" : "Derry",
			"Code" : "DRY"
		}, {
			"Name" : "Lisburn",
			"Code" : "LSB"
		}, {
			"Name" : "Newry",
			"Code" : "NYM"
		} ]
	}, {
		"Name" : "Scotland",
		"Code" : "SCT",
		"City" : [ {
			"Name" : "Aberdeen",
			"Code" : "ABD"
		}, {
			"Name" : "Dundee",
			"Code" : "DND"
		}, {
			"Name" : "Edinburgh",
			"Code" : "EDH"
		}, {
			"Name" : "Glasgow",
			"Code" : "GLG"
		}, {
			"Name" : "Inverness",
			"Code" : "INV"
		}, {
			"Name" : "Stirling",
			"Code" : "STG"
		} ]
	}, {
		"Name" : "Wales",
		"Code" : "WLS",
		"City" : [ {
			"Name" : "Bangor",
			"Code" : "BAN"
		}, {
			"Name" : "Cardiff",
			"Code" : "CDF"
		}, {
			"Name" : "Newport",
			"Code" : "NWP"
		}, {
			"Name" : "Swansea",
			"Code" : "SWA"
		} ]
	} ]
}, {
	"Name" : "Uruguay",
	"Code" : "598",
	"State" : [ {
		"Name" : "Artigas",
		"Code" : "AR"
	}, {
		"Name" : "Canelones",
		"Code" : "CA"
	}, {
		"Name" : "Cerro Largo",
		"Code" : "CL"
	}, {
		"Name" : "Colonia",
		"Code" : "CO"
	}, {
		"Name" : "Durazno",
		"Code" : "DU"
	}, {
		"Name" : "Flores",
		"Code" : "FS"
	}, {
		"Name" : "Florida",
		"Code" : "FA"
	}, {
		"Name" : "Lavalleja",
		"Code" : "LA"
	}, {
		"Name" : "Maldonado",
		"Code" : "MA"
	}, {
		"Name" : "Montevideo",
		"Code" : "MO"
	}, {
		"Name" : "Paysandu",
		"Code" : "PA"
	}, {
		"Name" : "Rio Negro",
		"Code" : "RN"
	}, {
		"Name" : "Rivera",
		"Code" : "RV"
	}, {
		"Name" : "Rocha",
		"Code" : "RO"
	}, {
		"Name" : "Salto",
		"Code" : "SL"
	}, {
		"Name" : "San Jose",
		"Code" : "SJ"
	}, {
		"Name" : "Soriano",
		"Code" : "SO"
	}, {
		"Name" : "Tacuarembo",
		"Code" : "TAW"
	}, {
		"Name" : "Treinta y Tres",
		"Code" : "TT"
	} ]
}, {
	"Name" : "Uzbekistan",
	"Code" : "998",
	"State" : [ {
		"Name" : "Andijon",
		"Code" : "AN"
	}, {
		"Name" : "Buxoro",
		"Code" : "BU"
	}, {
		"Name" : "Fargona",
		"Code" : "FA"
	}, {
		"Name" : "Jizzax",
		"Code" : "JI"
	}, {
		"Name" : "Namangan",
		"Code" : "NG"
	}, {
		"Name" : "Navoiy",
		"Code" : "NW"
	}, {
		"Name" : "Qasqadaryo",
		"Code" : "QA"
	}, {
		"Name" : "Qoraqalpogiston",
		"Code" : "QR"
	}, {
		"Name" : "Samarqand",
		"Code" : "SA"
	}, {
		"Name" : "Sirdaryo",
		"Code" : "SI"
	}, {
		"Name" : "Surxondaryo",
		"Code" : "SU"
	}, {
		"Name" : "Toshkent",
		"Code" : "TK"
	}, {
		"Name" : "Toshkent Shahri",
		"Code" : "TO"
	}, {
		"Name" : "Xorazm",
		"Code" : "XO"
	} ]
}, {
	"Name" : "Vanuatu",
	"Code" : "678",
	"State" : [ {
		"Name" : "Malampa",
		"Code" : "MA"
	}, {
		"Name" : "Penama",
		"Code" : "PE"
	}, {
		"Name" : "Sanma",
		"Code" : "SA"
	}, {
		"Name" : "Shefa",
		"Code" : "SH"
	}, {
		"Name" : "Tafea",
		"Code" : "TA"
	}, {
		"Name" : "Torba",
		"Code" : "TO"
	} ]
}, {
	"Name" : "Venezuela",
	"Code" : "058",
	"State" : [ {
		"Name" : "Amazonas",
		"Code" : "Z"
	}, {
		"Name" : "Anzoategui",
		"Code" : "B"
	}, {
		"Name" : "Apure",
		"Code" : "C"
	}, {
		"Name" : "Aragua",
		"Code" : "D"
	}, {
		"Name" : "Barinas",
		"Code" : "E"
	}, {
		"Name" : "Bolivar",
		"Code" : "F"
	}, {
		"Name" : "Carabobo",
		"Code" : "G"
	}, {
		"Name" : "Caracas",
		"Code" : "A"
	}, {
		"Name" : "Cojedes",
		"Code" : "H"
	}, {
		"Name" : "Delta Amacuro",
		"Code" : "Y"
	}, {
		"Name" : "Dependencias Federales",
		"Code" : "W"
	}, {
		"Name" : "Estado Nueva Esparta",
		"Code" : "O"
	}, {
		"Name" : "Falcon",
		"Code" : "I"
	}, {
		"Name" : "Guarico",
		"Code" : "J"
	}, {
		"Name" : "Lara",
		"Code" : "K"
	}, {
		"Name" : "Merida",
		"Code" : "L"
	}, {
		"Name" : "Miranda",
		"Code" : "M"
	}, {
		"Name" : "Monagas",
		"Code" : "N"
	}, {
		"Name" : "Portuguesa",
		"Code" : "P"
	}, {
		"Name" : "Sucre",
		"Code" : "R"
	}, {
		"Name" : "Tachira",
		"Code" : "S"
	}, {
		"Name" : "Trujillo",
		"Code" : "T"
	}, {
		"Name" : "Yaracuy",
		"Code" : "U"
	}, {
		"Name" : "Zulia",
		"Code" : "V"
	} ]
}, {
	"Name" : "Vietnam",
	"Code" : "084",
	"State" : [ {
		"Name" : "Haiphong",
		"Code" : "HP"
	}, {
		"Name" : "Hanoi",
		"Code" : "HI"
	}, {
		"Name" : "Ho Chi Minh City",
		"Code" : "HC"
	} ]
}, {
	"Name" : "Virgin Islands",
	"Code" : "340"
}, {
	"Name" : "Wallis and Futuna",
	"Code" : "681"
}, {
	"Name" : "White Russia",
	"Code" : "375",
	"State" : [ {
		"Name" : "Bresckaja",
		"Code" : "BR"
	}, {
		"Name" : "Homelskaja",
		"Code" : "HO"
	}, {
		"Name" : "Hrodzenskaja",
		"Code" : "HR"
	}, {
		"Name" : "Mahileuskaja",
		"Code" : "MA"
	}, {
		"Name" : "Minsk",
		"Code" : "MI"
	}, {
		"Name" : "Vicebskaja",
		"Code" : "VI"
	} ]
}, {
	"Name" : "Yemen",
	"Code" : "967",
	"State" : [ {
		"Name" : "Abyan",
		"Code" : "AB"
	}, {
		"Name" : "Adan",
		"Code" : "AD"
	}, {
		"Name" : "Ad-Dali",
		"Code" : "DA"
	}, {
		"Name" : "Al-Bayda",
		"Code" : "BA"
	}, {
		"Name" : "Al-Hudaydah",
		"Code" : "HU"
	}, {
		"Name" : "Al-Jawf",
		"Code" : "JA"
	}, {
		"Name" : "Al-Mahrah",
		"Code" : "MR"
	}, {
		"Name" : "Al-Mahwit",
		"Code" : "MW"
	}, {
		"Name" : "Amran Sana",
		"Code" : "AM"
	}, {
		"Name" : "Ash-Shihr",
		"Code" : "ASR"
	}, {
		"Name" : "Dhamar",
		"Code" : "DH"
	}, {
		"Name" : "Hadramawt",
		"Code" : "HD"
	}, {
		"Name" : "Hajjah",
		"Code" : "HJ"
	}, {
		"Name" : "Ibb",
		"Code" : "IB"
	}, {
		"Name" : "Lahij",
		"Code" : "LA"
	}, {
		"Name" : "Marib",
		"Code" : "MA"
	}, {
		"Name" : "Sadah",
		"Code" : "SD"
	}, {
		"Name" : "Sana",
		"Code" : "SN"
	}, {
		"Name" : "Seiyun",
		"Code" : "GXF"
	}, {
		"Name" : "Shabwah",
		"Code" : "SH"
	}, {
		"Name" : "Taizz",
		"Code" : "TA"
	} ]
}, {
	"Name" : "Zambia",
	"Code" : "260",
	"State" : [ {
		"Name" : "Central",
		"Code" : "CE"
	}, {
		"Name" : "Copperbelt",
		"Code" : "CB"
	}, {
		"Name" : "Eastern",
		"Code" : "EA"
	}, {
		"Name" : "Luapula",
		"Code" : "LP"
	}, {
		"Name" : "Lusaka",
		"Code" : "LK"
	}, {
		"Name" : "Northern",
		"Code" : "NO"
	}, {
		"Name" : "North-Western",
		"Code" : "NW"
	}, {
		"Name" : "Southern",
		"Code" : "SO"
	}, {
		"Name" : "Western",
		"Code" : "WE"
	} ]
}, {
	"Name" : "Zimbabwe",
	"Code" : "263",
	"State" : [ {
		"Name" : "Bulawayo",
		"Code" : "BU"
	}, {
		"Name" : "Harare",
		"Code" : "HA"
	}, {
		"Name" : "Manicaland",
		"Code" : "ML"
	}, {
		"Name" : "Mashonaland Central",
		"Code" : "MC"
	}, {
		"Name" : "Mashonaland East",
		"Code" : "ME"
	}, {
		"Name" : "Mashonaland West",
		"Code" : "MW"
	}, {
		"Name" : "Masvingo",
		"Code" : "MV"
	}, {
		"Name" : "Matabeleland North",
		"Code" : "MN"
	}, {
		"Name" : "Matabeleland South",
		"Code" : "MS"
	}, {
		"Name" : "Midlands",
		"Code" : "MD"
	} ]
} ]