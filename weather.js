/* 
	IF YOU EVER WANT TO QUICKLY CHANGE THE FONT ON A WEB PAGE
	THIS IS HOW YOU DO IT 

	YOU'RE WELCOME :))
*/
var body = document.body
body.style.fontFamily = "Josefin Sans"

//
let weather = {
	'apiKey': "25edf8923e4ee5e7762dcd621a01458f",
	'API_KEY': "a1064ec8f051ec43d04e8d0e055bbec3",
	'altKey': "b1b15e88fa797225412429c1c50c122a1", //https://api.openweathermap.org/data/2.5/weather?q="cityname"&units=metric&appid="API_KEY"
	fetchWeather: function(city){
		// fetch("./weatherAPI.js")
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_KEY}`)
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