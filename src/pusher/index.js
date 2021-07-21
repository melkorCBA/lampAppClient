import Pusher from 'pusher-js';
// require('dotenv').config();
// console.log(process.env.PUSHER_API_KEY)
const pusher = new Pusher('ca4e51244feba8d2b3ff', {
    cluster: 'ap2'
})
export default pusher


