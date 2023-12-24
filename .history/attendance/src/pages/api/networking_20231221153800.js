// var baseURL = 'http://127.0.0.1:42600/api'

// async function getAllHistory() {
//     const res = await fetch(`${baseURL}/history/all`,{
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function getHistory(limit) {
//     const res = await fetch(`${baseURL}/history/get/${limit}`, {
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function getHistoryById(data) {
//     const res = await fetch(`${baseURL}/history/get-by-id/${data.id_card}/${data.from}/${data.to}`,{
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function filterHistory(data) {
//     const res = await fetch(`${baseURL}/history/filter/${data.from}/${data.to}/${data.sort}`,{
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function addHistory(data) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };
//     const res = await fetch(`${baseURL}/history/add`, requestOptions)
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// async function updateHistory(data) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };
//     const res = await fetch(`${baseURL}/history/update`, requestOptions)
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// async function getAllUser() {
//     const res = await fetch(`${baseURL}/user/all/`,{
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function getUserByIdCard(idCard) {
//     const res = await fetch(`${baseURL}/user/get-by-id-card/${idCard}`,{
//         method: 'GET',
//         headers: { "Access-Control-Allow-Origin": "*" },
//     })
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return resJson.result.data
//     }
//     else {
//         return null
//     }
// }

// async function addUser(data) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };
//     const res = await fetch(`${baseURL}/user/add/`, requestOptions)
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// async function editUser(data) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     };
//     const res = await fetch(`${baseURL}/user/update/`, requestOptions)
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// async function deleteUser(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     const res = await fetch(`${baseURL}/user/delete/${id}`, requestOptions)
//     const resJson = await res.json()
//     if (resJson.result.status === 'success') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// export {
//     getAllHistory,
//     getHistory,
//     getHistoryById,
//     filterHistory,
//     addHistory,
//     updateHistory,
//     getAllUser,
//     getUserByIdCard,
//     addUser,
//     editUser,
//     deleteUser
// }






import axios from 'axios';

var baseURL = 'http://192.168.211.175:42600/api/'

const axios_mysql = axios.create({
    baseURL: baseURL,
    headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials': true },
    timeout: 5000,
    withCredentials: true,
    crossDomain: true
});

async function postLogin(data) {
    // console.log('data', data)
    const res = await axios_mysql.post(`admin/login`, data)
    const resJson = await res.json()
    if (resJson.result.status === 'success') {
        return resJson.result.data
    }
    else {
        return null
    }
}

async function getAllHistory() {
    const res = await axios_mysql.get(`history/all`)
    const resJson = await res.json()
    if (resJson.result.status === 'success') {
        return resJson.result.data
    }
    else {
        return null
    }
}

async function getHistory(limit) {
    const res = await axios_mysql.get(`history/get/${limit}`)
    if (res.data.result.status === 'success') {
        return res.data.result.data
    }
    else {
        return null
    }
}

async function getHistoryById(data) {
    const res = await axios_mysql.get(`history/get-by-id/${data.id_card}/${data.from}/${data.to}`)
    if (res.data.result.status === 'success') {
        return res.data.result.data
    }
    else {
        return null
    }
}

async function filterHistory(data) {
    const res = await axios_mysql.get(`history/filter/${data.from}/${data.to}/${data.sort}`)
    if (res.data.result.status === 'success') {
        return res.data.result.data
    }
    else {
        return null
    }
}

async function addHistory(data) {
    const res = await axios_mysql.post(`history/add`, data)
    if (res.data.result.status === 'success') {
        return true
    }
    else {
        return false
    }
}

async function updateHistory(data) {
    const res = await axios_mysql.put(`history/update`, data)
    if (res.data.result.status === 'success') {
        return true
    }
    else {
        return false
    }
}

async function getAllUser() {
    const res = await axios_mysql.get(`user/all/`)
    if (res.data.result.status === 'success') {
        return res.data.result.data
    }
    else {
        return null
    }
}

async function getUserByIdCard(idCard) {
    const res = await axios_mysql.get(`user/get-by-id-card/${idCard}`)
    if (res.data.result.status === 'success') {
        return res.data.result.data
    }
    else {
        return null
    }
}

async function addUser(data) {
    const res = await axios_mysql.post(`user/add/`, data)
    if (res.data.result.status === 'success') {
        return true
    }
    else {
        return false
    }
}

async function editUser(data) {
    const res = await axios_mysql.put(`user/update/`, data)
    if (res.data.result.status === 'success') {
        return true
    }
    else {
        return false
    }
}

async function deleteUser(id) {
    const res = await axios_mysql.delete(`user/delete/${id}`)
    if (res.data.result.status === 'success') {
        return true
    }
    else {
        return false
    }
}

export {
    postLogin,
    getAllHistory,
    getHistory,
    getHistoryById,
    filterHistory,
    addHistory,
    updateHistory,
    getAllUser,
    getUserByIdCard,
    addUser,
    editUser,
    deleteUser
}