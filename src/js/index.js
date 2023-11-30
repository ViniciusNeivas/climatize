const apiKey = '6f83c27024a74e8283e211921232311';
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener('click', async () =>{
    const city  = document.getElementById('search-input').value;
    
    if(!city) return ;

    const datas = await searchCityData(city);
    
    if (datas) fillDataScreen(datas, city)

    async function searchCityData(city){
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`

        const response = await fetch(apiUrl)

        if(response.status !== 200) return
        
        const apiDatas = response.json();
        return apiDatas;

        console.log(apiUrl);
    }
    
    function fillDataScreen(datas, city) {
        const temperature = datas.current.temp_c;
        const condition = datas.current.condition.text;
        const humidity = datas.current.humidity;
        const windSpeed = datas.current.wind_kph;
        const weatherConditionIcon = datas.current.condition.icon;
        
        document.getElementById("city").textContent = city;
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("condition").textContent = condition;
        document.getElementById("humidity").textContent = `${humidity} %`;
        document.getElementById("wind-speed").textContent = `${windSpeed} Km/h`;
        document.getElementById("weather-condition-icon").setAttribute("src", weatherConditionIcon )  
    }
})



