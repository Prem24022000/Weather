
const ui = new UI();

const weather = new Weather('Delhi', 'india');

function getWeather(){
    weather.getWeather()
     .then(res => {
    ui.getDisplay(res);
    })
    .catch(err => console.log(err));
}

getWeather();