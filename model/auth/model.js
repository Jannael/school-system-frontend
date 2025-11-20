import config from '../../config/config.js'
const { host } = config
const api = `${host}/auth/v1`

const model = {
  // /request/code/
  requestCode: async function (account) {
    const res = await fetch(`${api}/request/code/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account })
    })
    return res.json()
  },
  verifyCode: async function (account, code) {
    const res = await fetch(`${api}/verify/code/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account, code })
    })

    return res.json()
  },
  requestRefreshTokenCode: async function (account, pwd) {
    const res = await fetch(`${api}/request/refreshToken/code/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account, pwd })
    })
    return res.json()
  },
  requestRefreshToken: async function (code) {
    const res = await fetch(`${api}/request/refreshToken/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    })
    return res.json()
  },
  requestAccessToken: async function () {
    const res = await fetch(`${api}/request/accessToken/`)
    return res.json()
  },
  accountRequestCode: async function (newAccount) {
    const res = await fetch(`${api}/account/request/code/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newAccount })
    })
    return res.json()
  },
  accountVerifyCode: async function (codeCurrentAccount, codeNewAccount) {
    const res = await fetch(`${api}/account/verify/code/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ codeCurrentAccount, codeNewAccount })
    })
    return res.json()
  },
  passwordRequestCode: async function (account) {
    const res = await fetch(`${api}/password/request/code/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account })
    })
    return res.json()
  },
  passwordVerifyCode: async function (account, code, newPwd) {
    const res = await fetch(`${api}/password/verify/code/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account, code, newPwd })
    })
    return res.json()
  },
  logOut: async function () {
    const res = await fetch(`${api}/request/logout/`, {
      method: 'POST'
    })
    return res.json()
  }
}

export default model
