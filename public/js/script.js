// Global vars

// This server var needs switched before deploying to heroku
let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";

// ***************************************
// ********  DOM elements  ***************
// ***************************************
const stateParkEl = document.querySelector('#statePark');
const petFriendlyEl = document.querySelector('#petFriendly');
const campingAllowedEl = document.querySelector('#campingAllowed');
const scubaDivingEl = document.querySelector('#scubaDiving');
const pricingFeeEl = document.querySelector('#pricingFee');
const submitEl = document.querySelector('#searchBtn');

// ***************************************
// ***********  Functions  ***************
// ***************************************

async function init() {
  const springarray = await fetchsprings();
    for (let i = 0; i < springarray.length; i++) {
      let j = i + 1;
      let distanceEl = document.querySelector(`#spring${j}`);
      let lat = springarray[i].lat;
      let lng = springarray[i].lng
      getUserLoc(lat, lng, distanceEl);
      let weatherEl = document.querySelector(`#weather${j}`);
      let zipcode = springarray[i].zipcode;
      getweather(zipcode, weatherEl)
    }
    getSprings();
};

// Get the springs from the database and populate the dropdown
function getSprings() {
  let conn = `${server}/api/springs/`;
  const dropdownEl = document.querySelector("#dropdown");
  fetch(conn)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          for (let i = 0; i < data.length; i++) {
              const anchor = document.createElement('a');
              anchor.href = `${server}/springs/${data[i].id}`
              anchor.innerText = `${data[i].name}`;
              anchor.classList = "dropdown-item"
              dropdownEl.appendChild(anchor);
          }
      });
};

  // Send a GET request to the RapidAPI weather API
function getweather(zipcode, weatherEl) {    
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
        // chooses which icon to display
        const temperature = data.current.temp_f;
        const iconUrl = data.current.condition.icon;
        let imageEl = document.createElement('img')
        imageEl.setAttribute("src", iconUrl);        
        weatherEl.appendChild(imageEl);
        // weatherEl.innerHTML(`${temperature}°F`);
      })
      //displays error message
      .catch(err => console.error(err));
};

// populates the springlist array for later use
async function fetchsprings() {
var requestSpringObjects = `${server}/api/springs/`;
const springlist = await (await fetch(requestSpringObjects)).json();
return springlist;
};

// function to populate the distance and weather spans
function getUserLoc(lat, lng, distanceEl) {
navigator.geolocation.getCurrentPosition(position => {
const userLat = position.coords.latitude;
const userLng = position.coords.longitude;
const userLatLng = new google.maps.LatLng(userLat, userLng);
var springLatLng = new google.maps.LatLng(lat, lng);
var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, springLatLng);
let distanceInMiles = distance / 1609.344;
let rounded = Math.round(distanceInMiles);
distanceEl.innerHTML = rounded + ' miles away';
})
};

// ******************************************
// *******Search listener *******************
// ******************************************
submitEl.addEventListener("click", async function(event) {
  event.preventDefault();

  let userSP = stateParkEl.checked;
  let userPet = petFriendlyEl.checked;
  let userCamp = campingAllowedEl.checked;
  let userScuba = scubaDivingEl.checked;
  let userFee = pricingFeeEl.checked;    
  let url = server;
  let i = 0;
// build up the url to pass to the api
  if (userSP === true) {i = i + 1};
  if (userPet === true) {i = i + 1};
  if (userCamp === true) {i = i + 1};
  if (userScuba === true) {i = i + 1};
  if (userFee === true) {i = i + 1};

  if (userSP === true) {url = url + "?spvalue=true"};
  if ( i > 1 ) {
    i = i - 1;
    url = url + "&";
  };
  if (userPet === true) {url = url + "?petvalue=true"};
  if ( i > 1 ) {
    i = i - 1;
    url = url + "&";
  };
  if (userCamp === true) {url = url + "?campingvalue=true"};
  if ( i > 1 ) {
    i = i - 1;
    url = url + "&";
  };
  if (userScuba === true) {url = url + "?scubavalue=true"};
  if ( i > 1 ) {
    i = i - 1;
    url = url + "&";
  };
  if (userFee === true) {url = url + "?userfee=true"};
  
  window.location.replace(url);
});

  init();
  
