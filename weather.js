let weather = {
	'apiKey': "25edf8923e4ee5e7762dcd621a01458f",
	'altKey': "b1b15e88fa797225412429c1c50c122a1",
	fetchWeather: function(city){
		fetch("./weatherAPI.js")
		.then((response)=>response.json())
		.then((data)=> this.displayWeather(data))
	},
	displayWeather: function(data){
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind

		document.querySelector(".city").innerHTML = "Weather in " + name;
		document.querySelector(".temp").innerHTML = temp+"°c";
		document.querySelector(".description").innerHTML = description;
		document.querySelector(".humidity").innerHTML = "Humidity: "+humidity+"%";
		document.querySelector(".wind").innerHTML = "Wind speed: "+speed+"km/hr";
		document.querySelector(".weather").classList.remove("loading")
	},
	search: function(){
		// console.log(this)
		weather.fetchWeather(document.querySelector(".search-bar").value)
	}
}

document.querySelector("button").addEventListener("click", function(){
	 weather.search()
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
	if(event.key == "Enter") {
		weather.search()
	}
})