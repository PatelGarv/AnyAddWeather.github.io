const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48b9c9250dmsh1c3f3954edc085dp195b2fjsnb049394ac546',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
    // city.toString();
    console.log(city);
    cityName.innerHTML = ` of `+ city.toUpperCase();
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
      
      
      sRice = new Date(response.sunrise);
      console.log(sRice)
      sunrise.innerHTML = `<small style="10px">${sRice.getHours()-7}:${sRice.getMinutes()}:${sRice.getSeconds()} AM</small>`;
      sSet = new Date(response.sunset);
      console.log(sSet)
      sunset.innerHTML =`<small style="10px">${(sSet.getHours()+4)-12}:${sSet.getMinutes()}:${sSet.getSeconds()} PM</small>`;

    })
    .catch((err) => console.error(err));
};


document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();       //to preven from reloading page on click...
    getWeather(Cityinput.value)
  });

// getWeather("Surat");



const tableData = (city) =>{
    console.log(city);
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then((response) => response.json())
    .then((response) => {


      document.getElementById(`${city}`+`-Cloud`).innerHTML = response.cloud_pct + ` μm`;
      document.getElementById(`${city}`+`-temp`).innerHTML = response.temp+ " ℃";
      document.getElementById(`${city}`+`-Max_temp`).innerHTML = response.max_temp+ " ℃";
      document.getElementById(`${city}`+`-Min_temp`).innerHTML = response.min_temp+ " ℃";
      document.getElementById(`${city}`+`-Feels_Like`).innerHTML = response.feels_like+ " ℃";
      document.getElementById(`${city}`+`-Humidity`).innerHTML = response.humidity+ "%";
      sRice = new Date(response.sunrise);
      document.getElementById(`${city}`+`-Sunrise`).innerHTML = `<small style="10px">${sRice.getHours()-7}:${sRice.getMinutes()}:${sRice.getSeconds()} AM</small>`;
      sSet = new Date(response.sunset);
      document.getElementById(`${city}`+`-Sunset`).innerHTML = `<small style="10px">${(sSet.getHours()+4)-12}:${sSet.getMinutes()}:${sSet.getSeconds()} PM</small>`;
      document.getElementById(`${city}`+`-Wind_Speed`).innerHTML = response.wind_speed+ " Km/h";
      document.getElementById(`${city}`+`-Wind_degrees`).innerHTML = response.wind_degrees+ "°";
    }).catch((err) => console.error(err));
};


tableData("Kolkata");
tableData("Beijing");
tableData("Boston");
tableData("London");