import request from 'superagent'


export function getHoroscope(param: string): Promise<any>{
  return request.post('/api/v1/openAI/horoscope')
  .send({param})
  .then((res) => {return res})
  .catch(e => console.log(e))
}

export function getSoulMate(paramOne: string, paramTwo: string): Promise<any>{
  return request.post('/api/v1/openAI/soulmate')
  .send({paramOne, paramTwo})
  .then((res) => {return res})
  .catch(e => console.log(e))
}