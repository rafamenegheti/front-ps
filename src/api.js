import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-fausto.onrender.com/',
    timeout: 10000,
    // Envia os cookies seguros de volta em todas as requisições
    withCredentials: true
    /*headers: {
        'x-access-token': window.sessionStorage.getItem('app-data')
    }*/
})

export default api