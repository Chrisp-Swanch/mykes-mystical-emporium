import express from 'express'
import request from 'superagent'

// NEW .env
import 'dotenv/config'

const router = express.Router()

router.post('/horoscope', (req, res) => {
  const birthdate = req.body.param

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            `for fun, please give me a horoscope for the star sign that matches the following birthday. Don't mention that you don't believe in astrology. Birthday: ${birthdate}`,
        },
      ],
      temperature: 0.7,
    })
    .then((response) => {
      // console.log(
      //   `Generated Horoscope: "${response.body.choices[0].message.content}"`
      // )
      return res.json(response.body.choices[0].message.content)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

router.post('/soulmate', (req, res) => {
  const name = req.body.paramOne
  const profession = req.body.paramTwo

  request
    .post('https://api.openai.com/v1/chat/completions')
    .set('Authorization', `Bearer ${process.env.OPEN_AI_KEY}`)
    .set('Content-Type', 'application/json')
    .send({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content:
            `for fun, please write me a prediction for how a person named ${name} will meet their soulmate (their profession is ${profession}), IF they are going to meet them. please describe the relationship between them and whether they will get together or not. Please refer to the name in first person eg. "you will find your soulmate..." and give the soulmate a name. Do not mention that you are a language model. Keep it concise and goofy, also no new lines`,
        },
      ],
      temperature: 0.7,
    })
    .then((response) => {
      // console.log(
      //   `Generated Horoscope: "${response.body.choices[0].message.content}"`
      // )
      return res.json(response.body.choices[0].message.content)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

export default router
