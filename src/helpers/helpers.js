import axios from 'axios'
import { useToast } from "vue-toastification"

// Khởi tạo toast instance
const toast = useToast()

// Base URLs cho API
const baseURL = 'http://localhost:3000/words/'
const baseURL1 = 'http://localhost:3000/'

// Hàm xử lý lỗi chung
const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.error('API Error:', error)

        // Hiển thị thông báo lỗi 
        if (error.response) {
            toast.error(`${error.response.status}: ${error.response.statusText}`)
        } else if (error.request) {
            toast.error('Network error: Unable to connect to server')
        } else {
            toast.error('An unexpected error occurred')
        }

        // Re-throw error để component có thể xử lý thêm nếu cần
        throw error
    })

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
}

// Utility function để hiển thị thông báo thành công
export const showSuccessMessage = (message) => {
    toast.success(message)
}

// Utility function để hiển thị thông báo thông tin
export const showInfoMessage = (message) => {
    toast.info(message)
}

// Utility function để hiển thị thông báo cảnh báo
export const showWarningMessage = (message) => {
    toast.warning(message)
}

// Utility function để hiển thị thông báo báo lỗi
export const showErrorMessage = (message) => {
    toast.error(message)
}