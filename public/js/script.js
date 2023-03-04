// Select DOM elements
const dropdownEl = document.querySelector("#dropdown");
let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";
const stateParkEl = document.querySelector('#statePark');
const petFriendlyEl = document.querySelector('#petFriendly');
const campingAllowedEl = document.querySelector('#campingAllowed');
const scubaDivingEl = document.querySelector('#scubaDiving');
const pricingFeeEl = document.querySelector('#pricingFee');
const submitEl = document.querySelector('#searchBtn');
// const distanceEl = document.querySelector()





// function init() {
//   //For now are are using session storage to load all springs data into the users browser, this will not be needed once we have a database
//   sessionStorage.setItem(`parks`, JSON.stringify(parks));
//   for (let i = 0; i < parks.length; i++){
//     sessionStorage.setItem(parks[i].name, JSON.stringify(parks[i]))
//   }
//   populateCards();
//  };

// ******************************************
// function finduserloc(){
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//     console.log(userLoc);
//   })};
//   let parksAsLatLng = parks.map(function(park) {
//     return new google.maps.LatLng(park.lat, park.lng);
//   });


// distanceSpanEl.classList = "distance-span";
// distanceSpanEl.setAttribute("id", "distance-" + i);
// //using google maps geography feature to map the distance between the users coordinates and the park displayed on the cards coordinates for display, and converting it to miles
// let distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(userLoc, parksAsLatLng[i]);
// let distanceInMiles = distanceInMeters / 1609.344;
// let rounded = Math.round(distanceInMiles)
// distanceSpanEl.textContent = rounded + ' miles away';

// let weatherEl = document.createElement('span');
// weatherEl.classList = "wicon"
// weatherEl.setAttribute("id", "weather" + i)
// let imageEl = document.createElement('img');

// // //   Send a GET request to the RapidAPI weather API
// // // function getweather(zipcode, imageEl) {    
// // //   const API_KEY = '4a9c9446f7msh1bdc5860de01184p135179jsne7c04d560051';
// // //   const API_HOST = 'weatherapi-com.p.rapidapi.com';
// // //   const options = {
// // //     method: 'GET',
// // //     headers: {
// // //       'X-RapidAPI-Key': API_KEY,
// // //       'X-RapidAPI-Host': API_HOST
// // //     }
// // //   };
// // //     //utilizes the zipcode from the static map array
// // //   fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipcode}`, options)
// // //     .then(response => response.json())
// // //     .then(data => {
// // //       const iconUrl = data.current.condition.icon;
// // //       imageEl.setAttribute("src", iconUrl);
// // //     })
// // //     .catch(err => console.error(err));
// // // };
// //  dd
// d

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
  let url = "http://localhost:3001/";
  let i = 0;

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
  console.log(url);
  window.location.replace(url);
});




// init();

async function fetchsprings() {

  var requestSpringObjects = `${server}/api/springs/`;

  const springlist = await (await fetch(requestSpringObjects)).json();
  return springlist;
};

function getsprings() {

  let conn = `${server}/api/springs/`;
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
  }

  async function init() {
    const springarray = await fetchsprings();
    for (let i = 0; i < springarray.length; i++) {
      let j = i + 1;
      let distanceEl = document.querySelector(`#spring${j}`);
      let lat = springarray[i].lat;
      let lng = springarray[i].lng
      getUserLoc(lat, lng, distanceEl);
    }
    getsprings();
  }
  init();
  
