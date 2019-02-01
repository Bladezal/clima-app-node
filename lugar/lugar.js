const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyC7Hb6N6LTQ6-BT6rPEtH0kq0IHXiVN-uk`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}.`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return { direccion: location.formatted_address, lat: coords.lat, lng: coords.lng }
}

module.exports = {
    getLugarLatLng,
    axios
}