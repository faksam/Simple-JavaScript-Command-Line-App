
console.log(geoFindMe());

function errorCallback(error) {
  alert('ERROR(' + error.code + '): ' + error.message);
};

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    console.log("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log("Your location is:");
    console.log("=================");
    console.log("Latitude is " + latitude + " Longitude is " + longitude );

	var request = require('request');
	request("https://maps.googleapis.com/maps/api/timezone/json?location=" + latitude + "," + longitude + "&timestamp=1458000000&key=AIzaSyBk-4bsVe_z9nM0Ucx6SdAZVmhp1cJytx0", function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  }
	})
    console.log(request);

    var img = new Image();
    request('http://google.com/doodle.png')
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";


  };

  function error() {
    console.log("Unable to retrieve your location");
  };

  console.log("Locating…");

  navigator.geolocation.getCurrentPosition(success, error);
}
