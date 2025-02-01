import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'https://finance-app-backend-kappa.vercel.app/'
})

export default ApiInstance;