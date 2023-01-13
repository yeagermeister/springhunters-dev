// Select DOM elements
const stateParkEl = document.querySelector('#statePark');
const petFriendlyEl = document.querySelector('#petFriendly');
const campingAllowedEl = document.querySelector('#campingAllowed');
const gatorDangerEl = document.querySelector('#gatorDanger');
const scubaDivingEl = document.querySelector('#scubaDiving');
const pricingFeeEl = document.querySelector('#pricingFee');
const zipCodeEl = document.querySelector('#zipCode');
const submitEl = document.querySelector('#searchBtn');

const cardContainerEl = document.querySelector("#card-container");
let cardEl;

// Elements for the modal
const modal = document.getElementById("myModal");
const btnNew = document.getElementById("btnNew");
const close = document.getElementsByClassName("close")[0];
const newSpring = document.querySelector("#newSpring");
const springNameM = document.querySelector("#springnamem");
const descriptionM = document.querySelector("#descriptionm");
const campingM = document.getElementById("campingm");
const addressM = document.querySelector("#addressm");
const petFriendlyM = document.getElementById("petfriendlym");

// Define Springs
// These variables have to be declared with let because the distance and weather icon will be updated
var storedParks = JSON.parse(sessionStorage.getItem(`parks`))
let wekiwaSprings = {
    name: 'Wekiwa Springs State Park',
    description: 'Wekiwa Springs State Park is a 7,000-acre Florida State Park in Apopka, Florida. With emerald springs feeding the Wekiwa River and lush tropical hammocks, this unique park just minutes from downtown Orlando is perfect for observing abundant wildlife or cooling off on a summer day',
    imageUrl: './Assets/images/Wekiwa-Springs-State-Park-FL.jpg', 
    distance: '',
    weather: '',
    zipcode: 32712,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.711243,
    lng: -81.463754
};
  
let silverSprings = {
    name: 'Silver Springs State Park',
    description: 'The 4,000-acre Silver Springs State Park encompasses not only the springs, but the entire 5-mile Silver River and surrounding sandhill forest.',
    imageUrl: './Assets/images/Silver-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34488,
    fees: "$8/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: true,
    scuba: false,
    lat: 29.2165,
    lng: -82.0570
};
  
let rainbowSprings = {
    name: 'Rainbow Springs State Park',
    description: 'Rainbow Springs State Park is a Florida State Park located on the southwest side of Dunnellon, Florida. The park includes the Rainbow River, a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Rainbow-Springs-Park.jpeg',
    distance: '',
    weather: '',
    zipcode: 34432,
    fees: "$2/person",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 29.1023,
    lng: -82.4379
};
  
let rockSpringsRun = {
    name: 'Rock Springs Run State Reserve',
    description: 'Rock Springs Run State Reserve is a 6,000-acre Florida State Park located in Sorrento, Florida. The park is home to the largest spring on the Wekiva River, Rock Springs, which flows into the Wekiva River.',
    imageUrl: './Assets/images/Rock-Springs-Reserve.jpg',
    distance: '',
    weather: '',
    zipcode: 32776,
    fees: "$5/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 28.7950,
    lng: -81.4527
};
  
let ginnieSprings = {
    name: 'Ginnie Springs',
    description: 'Ginnie Springs is a privately owned recreational park located in High Springs, Florida. The park is popular for scuba diving, swimming, and snorkeling, and is home to several underwater caves.',
    imageUrl: './Assets/images/Ginnie-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32643,
    fees: "$3/person",
    pets: false,
    statepark: false,
    camping: true,
    gatordanger: false,
    scuba: true,
    lat: 29.8343,
    lng: -82.7024
};
  
let blueSpring = {
    name: 'Blue Spring State Park',
    description: 'Blue Spring State Park is a Florida State Park located west of Orange City, Florida. The park is home to a first magnitude spring, which is the largest spring on the St. Johns River and a popular destination for swimming and manatee watching.',
    imageUrl: './Assets/images/Blue-Spring-State.jpg',
    distance: '',
    weather: '',
    zipcode: 32763,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.9480,
    lng: -81.3370
};
  
let deLeonSprings = {
    name: 'DeLeon Springs State Park',
    description: 'DeLeon Springs State Park is a Florida State Park located in DeLeon Springs, Florida. The park is home to DeLeon Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/DeLeon-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32130,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.1354,
    lng: -81.3621
};
  
let fanningSprings = {
    name: 'Fanning Springs State Park',
    description: 'Fanning Springs State Park is a Florida State Park located in Fanning Springs, Florida. The park is home to Fanning Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Fanning-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 32693,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.5905,
    lng: -82.9325
};
  
let manateeSprings = {
    name: 'Manatee Springs State Park',
    description: 'Manatee Springs State Park is a Florida State Park located in Chiefland, Florida. The park is home to Manatee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving.',
    imageUrl: './Assets/images/Manatee-Spring-State.jpg',
    distance: '',
    weather: '',
    zipcode: 32626,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 29.4975,
    lng: -82.9758
};
  
let weekiWacheeSprings = {
    name: 'Weeki Wachee Springs State Park',
    description: 'Weeki Wachee Springs State Park is a Florida State Park located in Weeki Wachee, Florida. The park is home to Weeki Wachee Springs, a first magnitude spring and a popular destination for swimming, snorkeling, and scuba diving. The park is also known for its live mermaid shows.',
    imageUrl: './Assets/images/Weeki-Wachee-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: true,
    gatordanger: false,
    scuba: false,
    lat: 28.5179,
    lng: -82.5747
};

let itchetuckneeSprings = {
    name: 'Ichetucknee Springs State Park',
    description: 'Green space with river tubing in the summer',
    imageUrl: './Assets/images/Ichetucknee-Blue-Hole.jpg',
    distance: '',
    weather: '',
    zipcode: 32038,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: false,
    gatordanger: false,
    scuba: true,
    lat: 29.9911,
    lng: -82.7590
 };

let madisonSprings = {
    name: 'Madison Springs',
    description: 'State park in North Florida with a spring.',
    imageUrl: './Assets/images/Madison-Blue-Spring.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "$6/car",
    pets: false,
    statepark: true,
    camping: false,
    gatordanger: false,
    scuba: true,
    lat: 30.4813,
    lng: -83.2448
 };

 let royalSprings = {
    name: 'Royal Springs',
    description: 'Spring feeds the Suwanee river.  There is a 20ft. high diving platform above the spring. Picnic area in the park.  A couple rope swings along the river.',
    imageUrl: './Assets/images/Royal-Springs.jpg',
    distance: '',
    weather: '',
    zipcode: 34606,
    fees: "free",
    pets: false,
    statepark: false,
    camping: false,
    gatordanger: false,
    scuba: false,
    lat: 30.0842,
    lng: -83.0747
 };

 let bobsRiverPlace = {
    name: "Bobs River Place",
    description: "Bob's is a swimming hole on the Suwanee river.  It has slides, platforms and swings, among other activities.  Bob recently passed away, and the family is trying to get the place up and running for the 2023 season",
    imageUrl: './Assets/images/Bobs-River-Place.jpg',
    distance: '',
    weather: '',
    zipcode: 32008,
    fees: "free",
    pets: false,
    statepark: false,
    camping: false,
    gatordanger: false,
    scuba: false,
    lat: 29.7932,
    lng: -82.9238
 };


let parks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings, itchetuckneeSprings, madisonSprings, royalSprings, bobsRiverPlace];
let springList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bobs River Place"];

function init() {
  //For now are are using session storage to load all springs data into the users browser, this will not be needed once we have a database
  sessionStorage.setItem(`parks`, JSON.stringify(parks));
  for (let i = 0; i < parks.length; i++){
    sessionStorage.setItem(parks[i].name, JSON.stringify(parks[i]))
  }
  populateCards();
 };

 
// ******************************************
// ******* Generate a Springcard*************
// ******************************************
function populateCards() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    let parksAsLatLng = parks.map(function(park) {
      return new google.maps.LatLng(park.lat, park.lng);
    });

    for (let i = 0; i < parks.length; i++) {
      let storedParks = parks[i];

      let cardEl = document.createElement('article');
      cardEl.classList = "springcard bg-light";
      let shortName = parks[i].name.substring(0,4);
      cardEl.setAttribute("id", shortName)

      let headingEl = document.createElement('h2');
      headingEl.classList = "text-primary"
      headingEl.textContent = storedParks.name

      let imgEl = document.createElement('img');
      imgEl.classList = "card-image";
      imgEl.setAttribute("src", storedParks.imageUrl)
      imgEl.setAttribute("alt", "image of a spring")

      let paraEl = document.createElement('p');
      paraEl.textContent = storedParks.description;

      let cardFooterEl = document.createElement('p');
      cardFooterEl.setAttribute("id", "park" + [i])
 
      let distanceSpanEl = document.createElement('span');
      distanceSpanEl.classList = "distance-span";
      distanceSpanEl.setAttribute("id", "distance-" + i);
      //using google maps geography feature to map the distance between the users coordinates and the park displayed on the cards coordinates for display, and converting it to miles
      let distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(userLoc, parksAsLatLng[i]);
      let distanceInMiles = distanceInMeters / 1609.344;
      let rounded = Math.round(distanceInMiles)
      distanceSpanEl.textContent = rounded + ' miles away';

      let weatherEl = document.createElement('span');
      weatherEl.classList = "wicon"
      weatherEl.setAttribute("id", "weather" + i)
      let imageEl = document.createElement('img');
      

      cardContainerEl.appendChild(cardEl);
      cardEl.appendChild(headingEl);
      cardEl.appendChild(imgEl);
      cardEl.appendChild(paraEl);
      cardEl.appendChild(cardFooterEl);
      cardFooterEl.appendChild(distanceSpanEl);
      cardFooterEl.appendChild(weatherEl);
      weatherEl.appendChild(imageEl);
    }
  });
};

  // Send a GET request to the RapidAPI weather API
function getweather(zipcode, imageEl) {    
  const API_KEY = '4a9c9446f7msh1bdc5860de01184p135179jsne7c04d560051';
  const API_HOST = 'weatherapi-com.p.rapidapi.com';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };
    //utilizes the zipcode from the static map array
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipcode}`, options)
    .then(response => response.json())
    .then(data => {
      const iconUrl = data.current.condition.icon;
      imageEl.setAttribute("src", iconUrl);
    })
    .catch(err => console.error(err));
};

// ******************************************
// ************Filter logic *****************
// ******************************************
function filterResults(userSP, userPet, userCamp, userGator, userScuba, userFee) {
    for (let i = 0; i < parks.length; i++) {
      let storedParks = parks[i];
      let shortName = "#" + parks[i].name.substring(0,4);
      let cardEl = document.querySelector(shortName);
      cardEl.classList = "springcard bg-light";
        if ((userSP === false) && (storedParks.statepark === true)) {
          cardEl.classList = "display-none";
        }
        if ((userSP === true) && (storedParks.statepark === false)) {
          cardEl.classList = "display-none";
        }
        if (userPet === true && storedParks.pets === false) {
          cardEl.classList = "display-none";
        }
        if ((userCamp === true && storedParks.camping === false)) {
          cardEl.classList = "display-none";
        }
        if (userGator === true && storedParks.gatordanger === false) {
          cardEl.classList = "display-none";
        }
        if (userScuba === true && storedParks.scuba === false) {
          cardEl.classList = "display-none";
        }
        if ((userFee === true) && (storedParks.fees !== "free")) {
          cardEl.classList = "display-none";
        }
    }
};

// ******************************************
// *******card click listener ***************
// ******************************************
cardContainerEl.addEventListener("click", function(event) {
  let element = event.target;
  let parent = element.parentElement;
  
  if (element.matches("article")) {
    let shortName = element.id;
    sessionStorage.setItem("shortName", JSON.stringify(shortName));   
    sessionStorage.setItem('distance', element.childNodes[3].childNodes[0].textContent);
    location.assign("./springs.html");
  }
  if (parent.matches("article")) {
    let shortName = parent.id;
    sessionStorage.setItem("shortName", JSON.stringify(shortName));
    sessionStorage.setItem('distance', parent.childNodes[3].childNodes[0].textContent);
    location.assign("./springs.html");
  }
});

// ******************************************
// *******Search listener *******************
// ******************************************
submitEl.addEventListener("click", function(event) {
  event.preventDefault;

  let userSP = stateParkEl.checked;
  let userPet = petFriendlyEl.checked;
  let userCamp = campingAllowedEl.checked;
  let userGator = gatorDangerEl.checked;
  let userScuba = scubaDivingEl.checked;
  let userFee = pricingFeeEl.checked;
  let zipCode = zipCodeEl.value.trim();
  filterResults(userSP, userPet, userCamp, userGator, userScuba, userFee, zipCode)
});

// ******************************************
// *******Modal listeners *******************
// ******************************************
btnNew.addEventListener("click", function() {
  modal.style.display = "block";
});
close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// listener for the "add a new spring" button
newSpring.addEventListener("click", function(event) {
  event.preventDefault;
 
  let camp = "";
  let pet = "'";
  let spring = springNameM.value;
  let desc = descriptionM.value;
  if (campingM.checked) {
    camp = "true";
  } else {camp = false};
  if (petFriendlyM.checked) {
    pet = "true"
  } else {pet = "false"};
  let address = addressM.value;

  let newspring = [spring, desc, camp, pet, address];
//puts new spring in sessionstorage, displays a new page asking for patience and notifying a server admin.  This will be changed once we have a database.
  sessionStorage.setItem("newspring", JSON.stringify(newspring));
  document.location.assign("./newspring.html");
});

init();



