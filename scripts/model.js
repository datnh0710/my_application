const datetime = new DateTime(0,0,0);
const localStore = window.localStorage;

const apiKey = "b957cdb14d71e81f1936858034934b04";
const url = (city)=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


//check if brower suopports or not
function checkLocal() {
    if (typeof (Storage) !== "undefined") {
        return 1;
    }
    return 0;
}

// read the local store if it have a date time before
function readDataLocalStore(item) {
    return localStore.getItem(item);
}

// save the data to localStore
function saveDataLocalStore(item, value) {
    localStore.setItem(item,value);
}

//format time
function formatTime(time){
    return time<10? `0${time}` : time;
}

// function change from K to C
function KtoC(K){
    return Math.floor(K-273.15);
}

//count time
function countdown(datetime){

    var tmp_time  = datepicker.value;
    //var tmp_time = datetime;
    if(tmp_time === ''){
        printMessagesError(1); // 1  == not pick the date yet.
        resetCountDown(new DateTime(0,0,0,0))
        return;
    }
    const PicketDate = new Date(tmp_time);
    const currentDate = new Date();

    if(PicketDate.getTime() <= currentDate.getTime()){
        printMessagesError(2); // 2 == pick the date smaller than today.
        resetCountDown(new DateTime(0,0,0,0))
        return;
    }

    const totalSeconds = (PicketDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    datetime = new DateTime(days,hours,mins,seconds);

    printCountDown(datetime);
    printMessagesError(0);
    

}
setInterval(countdown,1000);

// weather tab
// get weather
async function getWeatherByLocation(city){
    saveDataLocalStore('city',city);
    const resp = await fetch(url(city),{origin: "cors"});
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPages(respData);
}