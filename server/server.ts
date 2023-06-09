import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import router from './apiRoutes'

const server = express()

//Deprecated sample route

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))
server.use('/api/v1/openAI', router)

export default server
