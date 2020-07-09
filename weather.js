$(document).ready(function(){
    $('#submitWeather').click(function(){
        
        var city=$('#city').val();
        if(city!='')
            {
                $.ajax({
                    url:'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric'+'&APPID=f1388105a2e61e8c513fe53b39c51166',
                    success : function(data){
//                        console.log(data);
                        var widget = show(data);
                        
                        $("#show1").html(widget);
                        
                        $("#city").val('');
                    }
                });           
            }
        else{

              $("#error").html("<div class='forecast-content'><div class='location'>Alert:</div><div class='degree'><div class='num' style='font-size:2em'>Enter a city name</div></div></div>");
        }
        
    });    
});

 // Function to show data in a format
function show(data)
    {
    return "<div class='container'><div class='forecast-container'><div class='today forecast'><div class='forecast-header'><div class='day'>Description</div></div><div class='forecast-content'><div class=location>"+ data.name +", "+ data.sys.country +"</div>"+
           "<div class='degree'><div class='num'>"+ data.main.temp +"&deg;C</div>"+
           "<div class='forecast-icon'><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png' width=90></div></div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Weather</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-4.svg' alt='' width=40></div><div class='degree'>"+ data.weather[0].main +"</div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Pressure</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-7.svg' alt='' width=40></div><div class='degree'>"+ data.main.pressure +" hPa</div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Humidity</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-14.svg' alt='' width=40></div><div class='degree'>"+ data.main.humidity +"%</div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Min.Temp</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-11.svg' alt='' width=40></div><div class='degree'>"+ data.main.temp_min +"&deg;C</div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Max.Temp</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-2.svg' alt='' width=40></div><div class='degree'>"+ data.main.temp_max +"&deg;C</div></div></div>"+

           "<div class='forecast'><div class='forecast-header'><div class='day'>Wind Speed</div></div><div class='forecast-content'><div class='forecast-icon'><img src='images/icons/icon-12.svg' alt='' width=40></div><div class='degree'>"+ data.wind.speed +" m/s</div></div></div></div></div>";
    }





// Simple Jason Data

//     function show(data){
//     return "<h3 style='font-size:40px;font-weight:bold;' class='text-center'>Current Weather for "+ data.name +", "+ data.sys.country +"</h3>"+
//     "<h3 style='padding-left:40px;'><strong>Weather</strong>:"+ data.weather[0].main +"</h3>" + 
//         "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description +"</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Temperature</strong>:"+ data.main.temp +"&deg;C</h3>"+
//         "<h3 style='padding-left:40px;'><strong>Pressure</strong>:"+ data.main.pressure +" hPa</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Humidity</strong>:"+ data.main.humidity +"%</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Min. Temperature</strong>:"+ data.main.temp_min +"&deg;C</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Max. Temperature</strong>:"+ data.main.temp_max +"&deg;C</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>:"+ data.wind.speed +" m/s</h3>" +
//         "<h3 style='padding-left:40px;'><strong>Wind Direction</strong>:"+ data.wind.deg +"&deg;</h3>";
// }