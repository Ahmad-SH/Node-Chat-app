//keep track of users
const users = []

//add users --> track users
const addUser = ({id,username,room})=>{
    // clean the data that privided from the client
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()


    // validate data
    if(!username || !room){
        return{
            error:'Username and Room are required!'
        }
    }
    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })
    
        if(existingUser){
                return {
                    error:'Username is in use!'
                }
        }
        //Store user
        const user = {id,username,room}
            users.push(user)
            return {user}
}

//remove users
const removeUser= (id)=>{
    //find the user by id index
// findeIndex is faster that filter --> it will stop when it finds a match unlike filter
    const index= users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0] // 1 number of items to be removed
    }

}


// fetch users
const getUser =(id)=>{
  return users.find((user)=>user.id === id)

}
//getUsersInRoom
const getUsersInRoom = (room)=>{
    return users.filter(user => user.room === room)
}
module.exports = {
    addUser,
    removeUser,
    getUsersInRoom,
    getUser
}