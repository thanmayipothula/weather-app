const getData = (city) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd92070052emsh20f6681bc0c2945p15da17jsnca82ca0f1570',
		    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	};
	return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
		  .then(response => response.json())
		  .then(data => data)
		  .catch(err => console.error(err));
}

const search = () =>{
	const city=document.getElementById('icity').value;
	getData(city)
    .then((res) => {
		displayData(res);
	}).catch((error)=>{
		console.log(error);
	})
}

const displayData =(wdata) => {
	document.getElementById('name').innerText=wdata.name;
	document.getElementById('maxtemp').innerText=wdata.main.temp_max;
	document.getElementById('mintemp').innerText=wdata.main.temp_min;
	document.getElementById('hum').innerText=wdata.main.humidity;
	document.getElementById('speed').innerText=wdata.wind.speed;
}

