import axios from "axios";
import { URL, INTERNS } from "../Constants/const"


export const apis = {
    getInterns: (page) => {
        return axios.get(`${URL}/${INTERNS}?page=${page}`)
    },
    viewIntern: (id) => {
        return axios.get(`${URL}/${INTERNS}/${id}`)
    },
    deleteIntern: (id) => {
        return axios.delete(`${URL}/${INTERNS}/${id}`)

    },
    createIntern: (values) => {
        return axios.post(`${URL}/${INTERNS}`, values)
    },
    editIntern: (id, values) => {
        return axios.put(`${URL}/${INTERNS}/${id}`, values)
    }
};