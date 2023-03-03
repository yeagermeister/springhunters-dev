let springLat = document.querySelector("#springlat").innerHTML;
let springLng = document.querySelector("#springlng").innerHTML;
let mapId = document.querySelector('#map');
  function initMap() {
        // Set up the map options
        const mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(springLat, springLng)
        };
        // Create the map
        const map = new google.maps.Map(mapId, mapOptions);
        // Add a marker to the map at the specified coordinates
        const marker = new google.maps.Marker({
          position: {lat: springLat, lng: springLng},
          map: map
        });
    
    
      };
      initMap();