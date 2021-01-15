class UI{
    constructor(){
        this.location = document.querySelector('.w-location');
        this.desc = document.querySelector('.w-desc');
        this.string = document.querySelector('.w-string');
        this.icon = document.querySelector('.w-icon');
        this.relative = document.querySelector('.relative');
        this.dewpoint = document.querySelector('.dewpoint');
        this.feel = document.querySelector('.feel');
        this.wind = document.querySelector('.wind');
    }

    getDisplay(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + '°C';
        this.icon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );

        this.relative.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.dewpoint.textContent = `Dewpoint: ${weather.wind.deg}F`;
        this.feel.textContent = `Visibility: ${weather.visibility}m`
        this.wind.textContent = `Wind: ${weather.wind.speed}MPH`;
    }
}