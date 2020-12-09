export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28-api.hesweb.loc:8888',
    responseType: 'json',
    withCredentials: true,
})