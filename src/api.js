import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agoravai-rafael.onrender.com/',
    // prefixUrl: 'http://localhost:3000',
    credentials: 'include',
    timeout: 10000
})

export default api