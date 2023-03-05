let springLat = document.querySelector("#springlat").innerHTML.trim();
let springLng = document.querySelector("#springlng").innerHTML.trim();
function initMap(springLat, springLng) {
  function stringToNum(lat, lng) {
    let numLat = Number(lat);
    let numLng = Number(lng);
    console.log(numLat, numLng)
    return [numLat, numLng];
  }

  let [numSpringLat, numSpringLng] = stringToNum(springLat, springLng);
  console.log(numSpringLat); // -25.2744
  console.log(numSpringLng); // -81.4638

  return [numSpringLat, numSpringLng];
}


let mapId = document.querySelector('#map');

console.log(springLat, springLng)

let [numSpringLat, numSpringLng] = initMap(springLat, springLng);
console.log(numSpringLat, numSpringLng); // -25.2744 -81.4638

        // Set up the map options
        const mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(springLat, springLng)
        };
        // Create the map
        const map = new google.maps.Map(mapId, mapOptions);
        // Add a marker to the map at the specified coordinates
       
    
    
      
      initMap();