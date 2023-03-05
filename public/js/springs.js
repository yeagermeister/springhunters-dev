let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";

let springZip = document.querySelector("#springZip").innerHTML.trim();
let zipcode = Number(springZip);
////////



let mapId = document.querySelector('#map');



function initMap(){
  let springLat = document.querySelector("#springlat").innerHTML.trim();
  let springLng = document.querySelector("#springlng").innerHTML.trim();
  var lat = Number(springLat);
  var lng = Number(springLng);
  
  var myLatLng = {lat: lat, lng: lng};
        // Set up the map options
        const mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(springLat, springLng)
        };
        // Create the map
        const map = new google.maps.Map(mapId, mapOptions);
        
        // Add a marker to the map at the specified coordinates
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
        });
      };
    
      
      
 
////////
let pictureEl = document.querySelector("#picture");
let temperatureEl = document.querySelector("#temperature");


let weatherEl = document.querySelector(`#weather`);
Number(weatherEl)
function init() {

//populates the dropdown menu using shortname id's
fetchsprings();
 
  getWeather(zipcode, weatherEl);
  initMap();
 };

// This will run on page load to populate the drop down list



// populates the springlist array for later use
async function fetchsprings() {
  var requestSpringObjects = `${server}/api/springs/`;
  const springlist = await (await fetch(requestSpringObjects)).json();
  return springlist;
  };

  

//utilizes the weather api from rapidapi to display weather
function getWeather(zipcode, weatherEl) {  
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

  

  
//calls the init function on page startup
init();
