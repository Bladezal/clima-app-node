axios = require('axios');

let getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c0cb81ffa7af4e1243bf09f0ea7d5991`)

    let temp = resp.data.main.temp;

    return temp;
}



module.exports = {
    getClima
}