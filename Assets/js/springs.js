//dom selectors
const dropdownEl = document.querySelector("#dropdown");
let parknameEl = document.querySelector("#parkname");
let descriptionEl = document.querySelector("#description");
let distanceEl = document.querySelector("#distance");
let admissionEl = document.querySelector("#admission");
let petsEl = document.querySelector("#pets");
let stateparkEl = document.querySelector("#statepark");
let campingEl = document.querySelector("#camping");
let gatorEl = document.querySelector("#gator");
let scubaEl = document.querySelector("#scuba");
let ratingEl = document.querySelector("#rating");
let noteEl = document.querySelector("#notetext");
let pictureEl = document.querySelector("#picture")


//sset a default spring for the page, in case someone navigated here from somewhere other than index.html
let park = "Wekiwa Springs State Park";
let dropdownList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bobs River Place"];

// weather API variables
let locationEl = document.querySelector('#parkname');
let location = locationEl.innerHTML;
storedParks = JSON.parse(sessionStorage.getItem(location));

// Google Maps Variables
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname");
var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
var userCoords = JSON.parse(sessionStorage.getItem(`userLoc`));
var parkLoc;
var map = mapId;
let distance = sessionStorage.getItem("distance");
let marker;
var miles;
var zipcode;

function init() {
//populates the dropdown menu using shortname id's
  populateDropdown();
  
  // grabs the spring the user selected on index.html
  var userSelect = JSON.parse(sessionStorage.getItem(`shortName`))
  
  // cycle though each spring until we match what the user selected.   This will definitely need changed once we have a database.
  for (let i = 0; i < storedParks.length; i++) {
    let shortName = storedParks[i].name.substring(0,4);
    if(userSelect === shortName){
    park = storedParks[i]
    zipcode = park.zipcode
    populateParkInfo(park)
    }
 
    initMap();

  }
  getWeather();
 };

// This will run on page load to populate the drop down list
function populateDropdown() {
    for (let i = 0; i < dropdownList.length; i++) {
      let optionEl = document.createElement('option');
      optionEl.textContent = dropdownList[i];
      let options = dropdownEl.options;
      let optionExists = false;
      for (let j = 0; j < options.length; j++) {
        if (options[j].text === optionEl.text) {
          optionExists = true;
          break;
        }
      }
      // If the option does not exist, add it to the dropdown menu
      if (!optionExists) {
        dropdownEl.appendChild(optionEl);
      }
    }
};


// Add an event listener to the dropdown menu that listens for the 'change' event
dropdownEl.addEventListener("change", function() {
  const selectedPark = dropdownEl.value;
  const userRating = localStorage.getItem(selectedPark);

  // If the user has not rated this park, set the star display to 0
  if (userRating === null) {
    // Update the star display to show 0 stars
  }
  // If the user has rated this park, update the star display to show the user's rating
  else {
    // Update the star display to show the user's rating
  }
});

//populates the card displaying information about the user selected park
function populateParkInfo(park) {
  // Retrieve the user's rating for the selected park from local storage
  const savedString = park.name + " rating";
  let savedRating = JSON.parse(localStorage.getItem(savedString));
  // If there is no rating saved in local storage for the selected park, set savedRating to 0
  if (savedRating === null) {
    savedRating = 0;
  }
  // Loop through the star images
  for (let i = 1; i <= 5; i++) {
    // Get the element for the current star
    const starEl = document.getElementById("str" + i).parentElement;
    // If the index of the current star is less than or equal to the user's rating, add the 'checked' class to the element
    if (i <= savedRating) {
      starEl.classList.add("checked");
    }
    // If the index of the current star is greater than the user's rating, remove the 'checked' class from the element
    else {
      starEl.classList.remove("checked");
    }
  }

  // Update the other elements with the information for the selected park
  parknameEl.textContent = park.name;
  pictureEl.src = park.imageUrl;

  if (park.pets) {
    petsEl.textContent = "Pet Friendly";
  } else {
    petsEl.textContent = "Pets not allowed";
  }
  if (park.statepark) {
    stateparkEl.textContent = "This is a state park";
  } else {
    stateparkEl.textContent = "This is not a state park";
  }
  if (park.gatordanger) {
    gatorEl.textContent = "Beware of the gators";
  } else {
    gatorEl.textContent = "No gator danger";
  }
  if (park.camping) {
    campingEl.textContent = "Camping is allowed";
  } else {
    campingEl.textContent = "No camping";
  }
  if (park.scuba) {
    scubaEl.textContent = "Scuba diving is allowed";
  } else {
    scubaEl.textContent = "No scuba diving";
  }
  descriptionEl.textContent = park.description;
  distanceEl.textContent = distance;
  admissionEl.textContent = park.fees;
}

//creates a rating system that is personal to each user
function populatePersonalInfo(personalRating) {
  ratingEl.value = personalRating;
};

// Function for the star rating
$(document).ready(function(){
  // Check Radio-box
  $(".rating input:radio").attr("checked", false);

  $('.rating input').click(function () {
      $(".rating span").removeClass('checked');
      $(this).parent().addClass('checked');
  });

  $('input:radio').change(
    function(){
      var userRating = this.value;
      localStorage.setItem(park.name + " rating", userRating);
  }); 
});

//utilizes the weather api from rapidapi to display weather
function getWeather() {
  const API_KEY = '4a9c9446f7msh1bdc5860de01184p135179jsne7c04d560051';
  const API_HOST = 'weatherapi-com.p.rapidapi.com';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  // Send a GET request to the RapidAPI weather API
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipcode}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(zipcode)
      // Extract the relevant data from the response
      const cityName = data.location.name;
      const temperature = data.current.temp_f;
      const condition = data.current.condition.text;
      const iconUrl = data.current.condition.icon;

      // Update the HTML elements on the page
      document.getElementById('city').innerHTML = cityName;
      document.getElementById('temperature').innerHTML = `${temperature}°F`;
      document.getElementById('condition').innerHTML = condition;
      document.getElementById('icon').src = iconUrl;
      
    })
    .catch(err => console.error(err));
}

  // Loop through the array of objects
  

// Initialize and add the map
var mapId = document.getElementById("map");
var parkName = document.getElementById("parkname");
var storedParks = JSON.parse(sessionStorage.getItem(`parks`));
//const API_KEY = 'AIzaSyAUPFIpucG-X584hME5DFs-4Yu28ny2vVk';
var parkLat;
var parkLng;
var map = mapId;


  // Initialize the map
  function initMap() {

// Loop through the array of objects
for (var i = 0; i < storedParks.length; i++) {
  // Check if the element's value matches the title of the current object
  if (parkName.innerHTML == storedParks[i].name) {
    // If the values match, retrieve the value property of the object
    var parkLat = storedParks[i].lat;
    var parkLng = storedParks[i].lng;
    // You can now use the value variable in your code
    
  }
}


    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(parkLat, parkLng)
    };
    // Create the map
    const map = new google.maps.Map(mapId, mapOptions);
    // Add a marker to the map at the specified coordinates
    const marker = new google.maps.Marker({
      position: {lat: parkLat, lng: parkLng},
      map: map
    });


  };



// Click listeners
// Get the correct park array from session storage when the drop down list is used
$("#dropdown").on("change", function() {
  let value = dropdownEl.options[dropdownEl.selectedIndex].value;
  park = JSON.parse(sessionStorage.getItem(value));
  zipcode = park.zipcode
  populateParkInfo(park);
  getWeather(zipcode);
  initMap();
});


  
//calls the init function on page startup
init();
