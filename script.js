
function getPos(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
      coords = pos.coords;
      latitude = coords.latitude;
      longitude = coords.longitude;
      url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=3ac03d188b01dc7785cf9f19e85f1179";
      $.getJSON(url,function(obj){
        $("#pos").html(obj.name+", "+obj.sys.country);
        $("#temp").html(Math.round(obj.main.temp-273,15) +"°C");
        icon = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
        descript = obj.weather[0].description.split("")
        descript[0] = descript[0].toUpperCase();
        description = descript.join("")
   $("#weather").html("<img src="+icon+">" +description);
      })


    })
  }
  else {
    alert("Please share your location in order to use this site.");

  }
};

getPos();
