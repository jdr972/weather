$(document).ready(function(){


function getPos(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
      coords = pos.coords;
      latitude = coords.latitude;
      longitude = coords.longitude;
      url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=3ac03d188b01dc7785cf9f19e85f1179";
      $.getJSON(url,function(obj){
        $("#temp").html(Math.round(obj.main.temp-273,15) +"°C");
        icon = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
        descript = obj.weather[0].description.split("")
        descript[0] = descript[0].toUpperCase();
        description = descript.join("")
   $("#weather").html("<img src="+icon+">" +description);
        $("#pos").html(obj.name+", "+obj.sys.country)
        //Background color change to be added
      })

      /* reverse geolocating because openweather's API wouldn't return the right city sometimes
      reverseGeo = "http://api.opencagedata.com/geocode/v1/json?q="+ latitude +"+"+ longitude +"&key=213996c4ca9ae0d53e35a07bc57e0ea5"
      $.getJSON(reverseGeo,function(rev){
        $("#pos").html(rev.results[0].components.city+", "+rev.results[0].components.country );

      })
        */
    })
  }
  else {
    alert("Please share your location in order to use this site.");

  }
};

getPos();
$("#btn").click(function(){
  if($("#btn").html() == "°F"){
    var temperature = $("#temp").html();
    var arr_ = temperature.split("");
    arr_.pop();
    arr_.pop();
    temperature = 0;
    for(var i =0;i<arr_.length;i++){
      temperature += arr_[i];
      console.log(temperature);
    }
    temperature *= 1.8; temperature += 32;
    console.log(temperature);
    $("#temp").html(Math.round(temperature)+"°F");
    $("#btn").html('°C');

  }
  else if($("#btn").html() == "°C")
    {
    var temperature = $("#temp").html();
    var arr_ = temperature.split("");
    arr_.pop();
    arr_.pop();
       temperature = 0;
    for(var i =0;i<arr_.length;i++){
      temperature += arr_[i];
      console.log(temperature);
    }
    temperature -= 32; temperature /= 1.8;
    console.log(temperature);
    $("#temp").html(Math.round(temperature)+"°C");
    $("#btn").html('°F');

  }
});
