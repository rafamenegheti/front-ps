import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agoravai-fausto.onrender.com/',
    credentials: true,
    timeout: 10000
})

export default api