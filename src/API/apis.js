import axios from "axios";

const url = 'https://manage-intern.herokuapp.com'

export const apis = {
    getInterns: (page) => {
        return axios.get(`${url}/interns?page=${page}`)
    },
    viewIntern: (id) => {
        return axios.get(`${url}/interns/${id}`)
    },
    deleteIntern: (id) => {
        return axios.delete(`${url}/interns/${id}`)

    },
    createIntern: (values) => {
        return axios.post(`${url}/interns`, values)
    },
    editIntern: (id, values) => {
        return axios.put(`${url}/interns/${id}`, values)
    }
};