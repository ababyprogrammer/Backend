// Create axios instance
const inst = axios.create({
    baseURL: 'https://example.com/'
})

// return response data in the response interception
inst.interceptors.response.use(response => {
    if (response.status === 20) {
        return response.data
    }
    throw new Error(response.status)
})
interface Resp {
    id: number
}
inst.get < Resp > ('/xxx').then(result => {
    // The typeof result is always axios.AxiosResponse<Resp>.
    console.log(result.data);
})