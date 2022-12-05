import axios from "axios";

const apiPath = "https://argonauteapi.onrender.com/api"
//const apiPath = "http://localhost:5500"

export const API_ROUTES = {
    create: `${apiPath}/argonaute`,
    getAll: `${apiPath}/argonaute/getAllArgonautes`
}

export const createArgonaute = async (form) => {
    return await axios.post(API_ROUTES.create, form)
        .then((res) => res)
        .catch((error) => console.log(error))
}

export const getAllArgonautes = async () => {
    return await axios.get(API_ROUTES.getAll)
        .then((res) => res)
        .catch((error) => console.log(error))
}


