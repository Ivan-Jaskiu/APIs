const url ="http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then( response => {
        username.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        useAvatar.scr = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updatedUser(id, userUpdate){
    axios.put(`${url}/${id}`, userUpdate)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


getUsers()
getUsers(1)
//addNewUser()

const newUser = {
    name: "Olivia Palito",
    avatar: "https://picsum.photos/200/300",
    city: "RJ"
}
const userUpdate = {
    name: "Marcelo Calves",
    avatar: "",
    city: "SC"
}
//updatedUser(1, userUpdate)


