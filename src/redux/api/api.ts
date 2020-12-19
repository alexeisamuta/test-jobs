import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://5f7998dbe402340016f9321f.mockapi.io/',
});

export const jobsAPI = {
    getJobs() {
        return instance.get('jobs')
    },
    getProviders() {
        return instance.get('providers')
    },
}