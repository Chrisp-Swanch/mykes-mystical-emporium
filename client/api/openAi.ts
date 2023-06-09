import request from 'superagent'


export function getHoroscope(param: string): Promise<any>{
  return request.post('/api/v1/openAI/horoscope')
  .send({param})
  .then((res) => {return res})
  .catch(e => console.log(e))
}