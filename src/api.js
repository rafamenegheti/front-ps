import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-fausto.onrender.com/',
    timeout: 15000,
    headers: {
        'x-access-token': window.sessionStorage.getItem('app-data')
    }  
})

export default api