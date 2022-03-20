// counter tab
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function printCountDown(datetime){
    daysEl.innerHTML = datetime.days;
    hoursEl.innerHTML = formatTime(datetime.hours);
    minsEl.innerHTML = formatTime(datetime.mins);
    secondsEl.innerHTML = formatTime(datetime.seconds);
}

function resetCountDown(){
    daysEl.innerHTML = "0";
    hoursEl.innerHTML = '0';
    minsEl.innerHTML = '0';
    secondsEl.innerHTML = '0';
}

function printDatePicker(date_time){
    datepicker.value = date_time;
}



function printMessagesError(messages_code){
    const messages_error = document.getElementById("messages_error");
    if(messages_code === 0){
        messages_error.innerText = '';
    }else if(messages_code === 1){
        messages_error.innerText = "Please Pick Your Date which You want to Count!";
    }else if(messages_code === 2){
        messages_error.innerText = "Please Pick another Day greater Than Today!";
    }
}


// weather tab

function addWeatherToPages(data){
    const temp=  KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML= `        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small> <h2>${data.name}<\h2>`;

    //clean
    //main.innerHTML="";
    main.appendChild(weather);
}

function addCityInput(city){
    search.value = city;
}