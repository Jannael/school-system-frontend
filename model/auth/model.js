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
  }
}

export default model
