import { useState } from "react"
import { getUserKey, createRoom } from "../api/api"

export default function Room() {
    
    const [user, setUser] = useState('user');
    const [userCount, setUserCount] = useState(0);
    const [token, setToken] = useState('')
    const [name, setName] = useState('')
    const [room, setRoom] = useState('pH1poljA6p')
    
    function getName(){
        setUserCount(userCount + 1)
        return `${user}${userCount}`
    }

    function getDataRoom(obj){
        console.log(obj);
        setToken(obj.sub)
    }

    function getRoom() {
        setUserCount(userCount + 1)
        setName(user + userCount)
        getUserKey(getDataRoom, name)
        console.log(room);
        return room.id
    }

    function setRoomToken(obj){
        console.log(obj);
    }

    function createRoomToken() {
        createRoom(setRoomToken)
    }

    async function getToken(){
        const name = getName()
        setName(name)
        let response = await localStorage.getItem('getUserKey')
        let tokens = await JSON.parse(response)
        setToken(tokens.refresh_token)
        console.log(tokens);
    }

    return (
            <>
            <section className="df-column gap-10">
            <button onClick={createRoomToken}>Create room</button>
            <button onClick={getRoom}>Join Room</button>
            <button onClick={getToken}>Get Token</button>
            {/* <p>Комната - {room}</p>
            <p>Имя - {name}</p> */}
            {token ? (<iframe
                src={`https://edu.livedigital.space/room/${room}?participantName=${name}&refreshToken=${token}`}
                id="userplayer"
                frameborder="0"
                width="880px"
                height="595px"
                allow="camera;microphone;fullscreen;accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;display-capture;" allowusermedia>
            </iframe>) : (<p>Здесь отобразится окно звонка когда придет токен</p>)}
             
            </section>
            
            </> 
            )

}