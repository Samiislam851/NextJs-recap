import axios from "axios";

const authName = "65d6e54dd2d038abc102b4b2";
const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
const base64Credentials = btoa(authName + ':' + authPass);

const clientAxios = axios.create({ baseURL: 'http://192.168.0.168:5000/' })

clientAxios.interceptors.request.use((request) => {

    const token = localStorage.getItem('basic-login')

    if (request.url?.startsWith('/auth/sign-in')) {

        request.headers.Authorization = `Basic ${base64Credentials}`

    } else {

        if (token) {
            request.headers['Content-Type'] = 'application/json'
            request.headers.Authorization = `Bearer ${token}`
        }
    }

    return request

})





clientAxios.interceptors.response.use((res) => {
    return res
},
    async (error) => {
        if (error.status == 401) {
            console.log('401 error encountered', error);
        }
    }

)


export default clientAxios

