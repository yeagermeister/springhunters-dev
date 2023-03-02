// Select DOM elements
// const stateParkEl = document.querySelector('#statePark');
// const petFriendlyEl = document.querySelector('#petFriendly');
// const campingAllowedEl = document.querySelector('#campingAllowed');
// const gatorDangerEl = document.querySelector('#gatorDanger');
// const scubaDivingEl = document.querySelector('#scubaDiving');
// const pricingFeeEl = document.querySelector('#pricingFee');
// const zipCodeEl = document.querySelector('#zipCode');
// const submitEl = document.querySelector('#searchBtn');

// const cardContainerEl = document.querySelector("#spring-card");
// let cardEl;
var springarray;
// // Elements for the modal
// const modal = document.getElementById("myModal");
// const btnNew = document.getElementById("btnNew");
// const close = document.getElementsByClassName("close")[0];
// const newSpring = document.querySelector("#newSpring");
// const springNameM = document.querySelector("#springnamem");
// const descriptionM = document.querySelector("#descriptionm");
// const campingM = document.getElementById("campingm");
// const addressM = document.querySelector("#addressm");
// const petFriendlyM = document.getElementById("petfriendlym");

// Define Springs
// These variables have to be declared with let because the distance and weather icon will be updated


// let parks = [wekiwaSprings, silverSprings, rainbowSprings, rockSpringsRun, ginnieSprings, blueSpring, deLeonSprings, fanningSprings, manateeSprings, weekiWacheeSprings, itchetuckneeSprings, madisonSprings, royalSprings, bobsRiverPlace];
// let springList = ["Wekiwa Springs State Park", "Silver Springs State Park", "Rainbow Springs State Park", "Rock Springs Run State Reserve", "Ginnie Springs", "Blue Spring State Park", "DeLeon Springs State Park", "Fanning Springs State Park", "Manatee Springs State Park", "Weeki Wachee Springs State Park", "Ichetucknee Springs State Park", "Madison Springs", "Royal Springs", "Bobs River Place"];

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
// submitEl.addEventListener("click", function(event) {
//   event.preventDefault;

//   let userSP = stateParkEl.checked;
//   let userPet = petFriendlyEl.checked;
//   let userCamp = campingAllowedEl.checked;
//   let userScuba = scubaDivingEl.checked;
//   let userFee = pricingFeeEl.checked;
//   filterResults(userSP, userPet, userCamp, userScuba, userFee)
// });

// ******************************************
// *******Modal listeners *******************
// ******************************************
// btnNew.addEventListener("click", function() {
//   modal.style.display = "block";
// });
// close.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// listener for the "add a new spring" button
// newSpring.addEventListener("click", function(event) {
//   event.preventDefault;
 
//   let camp = "";
//   let pet = "'";
//   let spring = springNameM.value;
//   let desc = descriptionM.value;
//   if (campingM.checked) {
//     camp = "true";
//   } else {camp = false};
//   if (petFriendlyM.checked) {
//     pet = "true"
//   } else {pet = "false"};
//   let address = addressM.value;

//   let newspring = [spring, desc, camp, pet, address];
// //puts new spring in sessionstorage, displays a new page asking for patience and notifying a server admin.  This will be changed once we have a database.
//   sessionStorage.setItem("newspring", JSON.stringify(newspring));
//   document.location.assign("./newspring.html");
// });


// init();
function getsprings() {
	
	var requestSpringObjects = "http://127.0.0.1:3001/api/springs/";

	fetch(requestSpringObjects)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return springarray = data;
      console.log(data);
		});
}


// function getUserLoc(){
//   navigator.geolocation.getCurrentPosition(position => {
//     const userLat = position.coords.latitude;
//     const userLng = position.coords.longitude;
//     const userLoc = new google.maps.LatLng(userLat, userLng);
//     sessionStorage.setItem(`userLoc`, JSON.stringify(userLoc));
//     console.log(userLoc)
//     var locationLatLng = new google.maps.LatLng(spring.lat, spring.lng);
//     var distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, springLatLng)
//   })
// }
// function insertDistanceToPark(){
//   const distanceSpanEl = document.getElementById("#distance");
//   let distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(userLoc, );
//         let distanceInMiles = distanceInMeters / 1609.344;
//         let rounded = Math.round(distanceInMiles)
//         distanceSpanEl.textContent = rounded + ' miles away';
//   }
// getUserLoc();
getsprings().then(console.log(springarray));