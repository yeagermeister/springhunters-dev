let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";

let springZip = document.querySelector("#springZip").innerHTML.trim();
let zipcode = Number(springZip);
console.log(typeof(zipcode));

 
//dom selectors
// const dropdownEl = document.querySelector("#dropdown");
// let parknameEl = document.querySelector("#parkname");
// let descriptionEl = document.querySelector("#description");
// let distanceEl = document.querySelector("#distance");
// let admissionEl = document.querySelector("#admission");
// let petsEl = document.querySelector("#pets");
// let stateparkEl = document.querySelector("#statepark");
// let campingEl = document.querySelector("#camping");
// let gatorEl = document.querySelector("#gator");
// let scubaEl = document.querySelector("#scuba");
// let ratingEl = document.querySelector("#rating");
// let noteEl = document.querySelector("#notetext");
let pictureEl = document.querySelector("#picture");
let temperatureEl = document.querySelector("#temperature");

//sset a default spring for the page, in case someone navigated here from somewhere other than index.html
// let park = "Wekiwa Springs State Park";
// let dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bobs River Place"];

// weather API variables
// let locationEl = document.querySelector('#parkname');
// let location = locationEl.innerHTML;
// storedParks = JSON.parse(sessionStorage.getItem(location));

// Google Maps Variables
// var mapId = document.getElementById("map");
// var parkName = document.getElementById("parkname");
// var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
// var userCoords = JSON.parse(sessionStorage.getItem(`userLoc`));
// var parkLoc;
// var map = mapId;
// let distance = sessionStorage.getItem("distance");
// let marker;
// var miles;
// var zipcode;
let weatherEl = document.querySelector(`#weather`);
Number(weatherEl)
function init() {

//populates the dropdown menu using shortname id's
fetchsprings();

getSprings()
 
  getWeather(zipcode, weatherEl);
 };

// This will run on page load to populate the drop down list
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


// populates the springlist array for later use
async function fetchsprings() {
  var requestSpringObjects = `${server}/api/springs/`;
  const springlist = await (await fetch(requestSpringObjects)).json();
  return springlist;
  };

  

//utilizes the weather api from rapidapi to display weather
function getWeather(zipcode, weatherEl) {  
  console.log(zipcode, "weather")  
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
      temperatureEl.innerText= `${temperature}°F`;
    })
    //displays error message
    .catch(err => console.error(err));
};

  // Loop through the array of objects
  

// Initialize and add the map
// var mapId = document.getElementById("map");
// var parkName = document.getElementById("parkname");
// var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
// //const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';
// var parkLat;
// var parkLng;
// var map = mapId;


//   // Initialize the map
//   function initMap() {

// // Loop through the array of objects
// for (var i = 0; i < storedParks.length; i++) {
//   // Check if the element's value matches the title of the current object
//   if (parkName.innerHTML == storedParks[i].name) {
//     // If the values match, retrieve the value property of the object
//     var parkLat = storedParks[i].lat;
//     var parkLng = storedParks[i].lng;
//     // You can now use the value variable in your code
    
//   }
// }


//     // Set up the map options
//     const mapOptions = {
//       zoom: 10,
//       center: new google.maps.LatLng(parkLat, parkLng)
//     };
//     // Create the map
//     const map = new google.maps.Map(mapId, mapOptions);
//     // Add a marker to the map at the specified coordinates
//     const marker = new google.maps.Marker({
//       position: {lat: parkLat, lng: parkLng},
//       map: map
//     });


//   };



// Click listeners
// Get the correct park array from session storage when the drop down list is used
// $("#dropdown").on("change", function() {
//   let value = dropdownEl.options[dropdownEl.selectedIndex].value;
//   park = JSON.parse(sessionStorage.getItem(value));
//   zipcode = park.zipcode
//   populateParkInfo(park);
//   getWeather(zipcode);
//   initMap();
// });


  
//calls the init function on page startup
init();
