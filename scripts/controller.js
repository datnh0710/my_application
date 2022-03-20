//counter tab
const datepicker = document.getElementById("datepicker");

//weather tab
const main = document.getElementById("main");
const search = document.getElementById("search");

function init() {
    // pre-check data from localStore counter tab
    storedTime = readDataLocalStore('time');
    if (storedTime !== '') {
        printDatePicker(storedTime);
        countdown(storedTime);
    }

    // counter tab
    const buttonTime = document.getElementById("btnTime");
    buttonTime.addEventListener("click", buttonTimeClick);


    // pre-check data from localStore weather tab
    storedCity = readDataLocalStore('city');
    console.log(storedCity);
    if (storedCity !== null) {
        addCityInput(storedCity);
        getWeatherByLocation(storedCity);
    }


    // weather tab
    const form = document.getElementById("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = search.value;
        if (city) {
            getWeatherByLocation(city);
        }
    });

}

function buttonTimeClick() {
    countdown(datepicker.value);
    saveDataLocalStore('time', datepicker.value);
}


init()


