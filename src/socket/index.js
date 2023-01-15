import io from 'socket.io-client'

//模块的作用: 收发消息
//创建连接
const socket = io()

//进行连接的监听
socket.on('connect',()=>{
    console.log('######已与服务器建立连接######')
})

export default socket