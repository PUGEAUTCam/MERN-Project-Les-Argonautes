import axios from "axios";

export const API_ROUTES = {
    create: `http://localhost:5500/api/argonaute`,
    getAll: `http://localhost:5500/api/argonaute/getAllArgonautes`
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


