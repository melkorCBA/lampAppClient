import axios from 'axios';

const lampApiBaseUrl = process.env.LAMP_API_BASE_URL ?? ''

const getLamps = function () {
    return axios.get(`${lampApiBaseUrl}api/lamps`)

}

const getLamp = function (id) {
    return axios.get(`${lampApiBaseUrl}api/lamps/${id}`)
}

const updateLamp = function (id, lamp) {

    return axios.put(`${lampApiBaseUrl}api/lamps/${id}`, {
        enlightenerName: lamp.enlightenerName,
        status: lamp.status,
        priority: lamp.priority,
        porfilePic: lamp.porfilePic

    })
}

export { getLamps, getLamp, updateLamp }
