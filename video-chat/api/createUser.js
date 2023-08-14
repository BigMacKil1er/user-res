
import liveDigitalApi from "./defaultSettingsAxios";

export async function getUser(data) {
    try {
        const response = await liveDigitalApi.post('v1/users', JSON.stringify(data))
        localStorage.setItem('newUser', response.data)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
 
}