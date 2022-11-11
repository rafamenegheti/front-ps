import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-fausto.onrender.com/',
    timeout: 5000  
})

export default api