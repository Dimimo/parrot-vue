/*
 *
 *  Copyright (c) 2020 Puerto Parrot. Written by Dimitri Mostrey for https// www.puertoparrot.com
 *  Contact me at admin@puertoparrot.com or admin@puertoparrot.com
 *
 */

const axios = require('axios')

export function login (credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/v1/login', credentials)
            .then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export function getLocalUser () {
    const userStr = localStorage.getItem('user')

    if (!userStr) {
        return null
    }

    return JSON.parse(userStr)
}
