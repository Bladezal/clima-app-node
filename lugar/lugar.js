const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '896d5d4ac6msh5fa0c0f0c90e25dp10119cjsnae6ed0972ee6' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la ciudad ${direccion}.`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return { direccion: location, lat, lng }
}

module.exports = {
    getLugarLatLng
}