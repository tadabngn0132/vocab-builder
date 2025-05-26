import axios from 'axios'
import { createApp } from 'vue'
import VueFlashMessage from 'vue-flash-message'
import { useToast } from "vue-toastification"

const toast = useToast()
const showFlashMessage = (message, type = 'info') => {
    toast[type](message)
}

const app = createApp({})
const baseURL = 'http://localhost:3000/words/'
const baseURL1 = 'http://localhost:3000/'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error')
    });

export const api = {
    getWord: handleError(async id => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    getWords: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deleteWord: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createWord: handleError(async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updateWord: handleError(async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    }),
    registerUser: handleError(async (name, email, password) => {
        const res = await axios.post(`${baseURL1}register`, { name, email, password});
        return res.data;
    }),
    loginUser: handleError(async (email, password) => {
        const res = await axios.post(`${baseURL1}login`, {email, password});
        return res.data;
    })
};