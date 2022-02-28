const request = require('request')

const geocode = (address, callback) => {

    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibm9kZWpzdHJhaW5pbmciLCJhIjoiY2t6enh2NWltMGV3bzNkcWhzM3kxbHk4YyJ9.f7dCwIwok_z3TnqbfUGBUA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location service', undefined)
        }else if(body.features.length === 0) {
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode