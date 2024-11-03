async function getWeatherData(location) {
    const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=44U84TAKBGJZQ9BU7VJRFQADW`, {mode: 'cors'});
    try {
        const response = await fetch(request);
        // const data = await response.json();
        // console.log(data)
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

function getFilteredData(data) {
    const appData = {
        address: data.resolvedAddress,
        currentConditions:
            {
                temp: data.currentConditions.temp,
                feelslike: data.currentConditions.feelslike,
                datetime: data.datetime
            },
        days: data.days.map(day => {
            return {
                tempmax: day.tempmax,
                tempmin: day.tempmin,
                datetime: day.datetime,
                conditions: day.conditions,
                dew: day.dew,
                humidity: day.humidity,
                windspeed: day.windspeed,
                pressure: day.pressure,
                visibility: day.visibility,
                sunrise: day.sunrise,
                sunset: day.sunset,
                hours: day.hours.map(hour => {
                    return {
                        datetime: hour.datetime,
                        conditions: hour.conditions,
                        humidity: hour.humidity,
                        windspeed: hour.windspeed,
                        pressure: hour.pressure,
                        visibility: hour.visibility,
                        temp: hour.temp,
                        feelslike: hour.feelslike
                    }
                })
            }
            }),
    };
    console.log(appData)
}

const data = getWeatherData('London');
data.then(result => getFilteredData(result))