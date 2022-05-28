import axios from "axios";

export const apis = {
    getInterns: (page) => {
        return axios.get(`http://127.0.0.1:8000/interns?page=${page}`)
    },
    viewIntern: (id) => {
        return axios.get(`http://127.0.0.1:8000/interns/${id}`)
    },
    deleteIntern: (id) => {
        return axios.delete(`http://127.0.0.1:8000/interns/${id}`)

    },
    createIntern: (values) => {
        return axios.post('http://127.0.0.1:8000/interns', values)
    },
    editIntern: (id, values) => {
        return axios.put(`http://127.0.0.1:8000/interns/${id}`, values)
    }
};