async function getWeatherData(location) {
    const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=44U84TAKBGJZQ9BU7VJRFQADW`, {mode: 'cors'});
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}