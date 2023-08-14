import axios from 'axios';
import key from './key';
import { TOKEN } from './token';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://moodhood-api.livedigital.space/v1/auth/token';

const url = PROXY_URL+API_URL
console.log(url);
const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  };

const body = {
    client_id: key.clientId,
    client_secret: key.clienSecret,
    grant_type: "password",
    username: '',
    password: ''
}

let password = 12345600



export async function getUserKey(callback, username) {
    password++
    body.password = password
    body.username = username
    const resp = null
    // try {
    //     const response = await axios({
    //         methods: 'post',
    //         url: PROXY_URL+API_URL,
    //         headers: headers,
    //         dataRaw: body
    //     })
    //     let data = await response.data
    //     localStorage.setItem('getUserKey', data)
    //     console.log(data);
    //     callback(data)
    // } catch (error) {
    //     console.log(error);
    //     let data = {
    //         token_type: "Bearer",
    //         access_token: null,
    //         refresh_token: null
    //       }
    //       callback(data)
    // }
    try {
        const response = await axios.post(url, key, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let data = await response.data
        localStorage.setItem('getUserKey', JSON.stringify(data))
        console.log(data);
        callback(data)
    } catch (error) {
        console.log(error);
        let data = {
            token_type: "Bearer",
            access_token: null,
            refresh_token: null
          }
          callback(data)
    }
}

export async function createRoom(callback) {
    try {
        const response = await axios({
            method: 'post',
            url: PROXY_URL+'https://moodhood-api.livedigital.space/v1/spaces/64c390a371b2f324fbe297a8/rooms',
            headers: headers,
            dataRaw: {
                name: "someName",
                isPublic: true,
                isScreensharingAllowed: true,
                isChatAllowed: true,
                type: "lesson"
              }
        })
        let dataRoom = await response.data
        localStorage.setItem('roomID', dataRoom)
        callback(dataRoom)
        return 
    } catch (error) {
        console.log(error);
        callback({
            alias: null
        }) 
    }
}