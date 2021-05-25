import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export const getUsers = async () => await axios.get(`${url}/users`);

export const login = async (email, password) => {
    const response = await axios.post(`${url}/login`, {
        email: email,
        password: password,
    });
    return response;
};

export const postUser = async (user) => {
    const response = await axios.post(`${url}/login/register`, user);
    return response;
};
