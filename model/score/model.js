import config from './../../config/config.js'
const { host } = config
const api = `${host}/score/v1`

const model = {
  get: async function (num) {
    const res = await fetch(`${api}/get/${num}`, {
      credentials: 'include'
    })
    return res.json()
  }
}

export default model
