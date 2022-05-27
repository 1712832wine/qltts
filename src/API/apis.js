import axios from "axios";

export const apis = {
    // auth
    getInterns: () => {
        return axios.get('http://127.0.0.1:8000/interns')
    },
    viewIntern: (id) => {
        return axios.get(`http://127.0.0.1:8000/interns/${id}`)
    },
    deleteIntern: (id) => {
        return axios.delete(`http://127.0.0.1:8000/interns/${id}`)
    }
};