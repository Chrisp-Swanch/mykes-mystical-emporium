import request from 'superagent'

interface Param {
  birthdate: string
}

export function getHoroscope(param: Param) {
  return request.post('/api/v1/testreq')
  .send(param)
  .then((res) => {return res})
  .catch(e => console.log(e))
}