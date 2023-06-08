import express from 'express'
import request from 'superagent'

// NEW .env
import 'dotenv/config'

const router = express.Router()

router.post('/testreq', (req, res) => {
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
            "for fun, please give me a horoscope for the star sign scorpio. Don't mention that you don't believe in astrology.",
        },
      ],
      temperature: 0.7,
    })
    .then((response) => {
      console.log(
        `Generated Horoscope: "${response.body.choices[0].message.content}"`
      )
      return res.json(response.body.choices[0].message.content)
    })
    .catch((err) => console.log('OPEN AI API ERR: ', err.message))
})

export default router
