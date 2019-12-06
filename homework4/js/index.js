$(document).ready(function() {    
    var apiKey = "ec166694c73ecd42f000bf91e2ef2742" // Enter your API Key here        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop]

    var state_abbreviations = Object.keys(state_info);
    //var i = 0;

    function doCheck(state, state_abbreviations){
        //console.log(state_abbreviations[i]);
        //console.log(state);
        var latitude = state_info[state].lat;
        var longitude = state_info[state].lng;
        console.log(latitude);
        console.log(longitude);
        var url ="https://api.darksky.net/forecast/".concat(apiKey, "/", latitude.toString(10), ",", longitude.toString(10));

        console.log(url);
        console.log(state);

        $.ajax({url:url, async: false, dataType:"jsonp"}).then(function(data) {
            //console.log(data)
            var temperature = null;
            // TODO
            // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
            var temperature = data.currently.temperature;
            //var stateName = state_abbreviations[i];
            var temperature_color = "#808080";

            console.log("temp =" + temperature.toString(10));

            //$('#'+stateName).css('fill', "#808080");

            //TODO 
            // Default color gray
            // Create a series of if else blocks to set the color for the state based on the temperature
            // Less than equal to 10 should be blue
            if(temperature <= 10)
            {
                temperature_color = "#6495ED";
            }
            else if(temperature <= 20)
            {
                temperature_color = "#7FFFD4";
            }
            // Between 11 and 30 should be cyan
            else if(temperature <= 30)
            {
                temperature_color = "#0000FF";
            }
            else if(temperature <= 40)
            {
                temperature_color = "#008B8B";
            }
            // Between 31 and 50 should be green
            else if(temperature <= 50)
            {
                temperature_color = "#00BFFF";
            }
            else if(temperature <= 60)
            {
                temperature_color = "#F08080";
            }
            else if(temperature <= 70)
            {
                temperature_color = "#CD5C5C";
            }
            // Between 51 and 80 should be orange
            else if(temperature <= 80)
            {
                temperature_color = "#8B0000";
            }
            else if(temperature <= 90)
            {
                temperature_color = "#B22222";
            }
            // Greater than 80 should be red
            else
            {
                temperature_color = "#FF0000";
            }

            var unit = "#".concat(state);
            console.log(unit);
            $(unit).css({fill: temperature_color});   // Example on how to fill colors for your state.    
        });
        //i++;
    }

    for(var state in state_info){
        doCheck(state, state_abbreviations);
    }
});