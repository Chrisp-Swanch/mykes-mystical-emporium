import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { getHoroscope } from '../api/openAi'
import { Link } from 'react-router-dom'
import { Orb } from './Orb'

export function Form() {
  const [horoscope, setHoroscope] = useState('')
  const [formState, setFormState] = useState('')
  const [orbState, setOrbstate] = useState('/images/crystalball_static.png')

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()

    setOrbstate('/images/crystalball_loading.gif')
    const { text } = await getHoroscope(formState)
    setHoroscope(text)
    setOrbstate('/images/crystalball_static.png')
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget

    setFormState(value)
  }

  return (
    <>
      <div className="form">
        <Link to="/soulmate">
          <button>Find out my soulmate...</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor="birthdate">Enter your birthday: </label>
          <input
            id="birthdate"
            name="birthdate"
            type="text"
            value={formState}
            onChange={handleChange}
          />
          <button className="submit" type="submit">
            Tell me my future!
          </button>
        </form>
        <Orb image={orbState} />
        {horoscope != '' && <p>{horoscope}</p>}
      </div>
    </>
  )
}

export default Form
