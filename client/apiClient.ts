import request from 'superagent'

//Deprecated sample route

export function getGreeting(): Promise<string> {
  return request.get('/api/v1/greeting').then((res) => res.body.greeting)
}
