import config from './../../config/config.js'
const { host } = config
const api = `${host}/user/v1`

const model = {
  get: async function () {
    const res = await fetch(`${api}/get/`, {
      method: 'GET',
      credentials: 'include'
    })
    return res.json()
  },
  create: async function (fullName, account, pwd, role) {
    const res = await fetch(`${api}/create/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullName, account, pwd, role })
    })
    return res.json()
  },
  update: async function (fullName, role) {
    const res = await fetch(`${api}/update/`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullName, role })
    })
    return res.json()
  },
  delete: async function () {
    const res = await fetch(`${api}/password/verify/code/`, {
      method: 'PATCH',
      credentials: 'include'
    })
    return res.json()
  },
  updateAccount: async function () {
    const res = await fetch(`${api}/update/account/`, {
      method: 'PATCH',
      credentials: 'include'
    })
    return res.json()
  },
  updatePassword: async function () {
    const res = await fetch(`${api}/update/password/`, {
      method: 'PATCH',
      credentials: 'include'
    })
    return res.json()
  }
}

export default model
