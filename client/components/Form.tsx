import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { getHoroscope } from '../api/openAi'
import { Link } from 'react-router-dom'

export function Form() {
  const [horoscope, setHoroscope] = useState('')
  const [formState, setFormState] = useState('')

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log(formState)
    const {text} = await getHoroscope(formState)

    setHoroscope(text)

  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget

    setFormState(value)
  }

  return (
    <>
    <Link to='/soulmate'><button>Find out my soulmate...</button></Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthdate">Enter your birthday: </label>
        <input
          id="birthdate"
          name="birthdate"
          type="text"
          value={formState}
          onChange={handleChange}
        />
        <button className="submit" type="submit">Tell me my future!</button>
      </form>
      {horoscope != '' && <p>{horoscope}</p>}
    </>
  )
}

export default Form
