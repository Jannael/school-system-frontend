import config from './../../config/config.js'
const { host } = config
const api = `${host}/score/v1`

const model = {
  get: async function (num) {
    const res = await fetch(`${api}/get/${num}`, {
      credentials: 'include'
    })
    return res.json()
  },
  newSemester: async function (subject) {
    const res = await fetch(`${api}/newSemester/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject })
    })
    return res.json()
  },
  update: async function (account, semester, subject, score, partial) {
    const res = await fetch(`${api}/newSemester/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, account, semester, score, partial })
    })
    return res.json()
  }
}

export default model
