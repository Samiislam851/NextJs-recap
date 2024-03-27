import axios from "axios";

const authName = "65d6e54dd2d038abc102b4b2";
const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
const base64Credentials = btoa(authName + ':' + authPass);

const clientAxios = axios.create({ baseURL: 'http://192.168.0.168:5000/' })









const refreshToken = async () => {
    const token = localStorage.getItem('basic-login-refresh-token')




    if (token) {



        try {

            const response = await clientAxios.post('/auth/sign-in', {
                refreshToken: token,

                grantType: 'refreshToken',
            })


            return response


        } catch (error) {

            console.log('error from refresh token function');

            return error
        }


    }
    return { error: { message: 'token is empty' } }


}











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



        if (error.response.data.status === 401 && !error.config.url.includes('sign-in')) {

            console.log('error config.................', error.config);

            try {

                const newInstance = await refreshToken();


                console.log('new Instance', newInstance);


                if (newInstance) {


                }



            } catch (error) {

            }





        }
    }

)


export default clientAxios

