import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { getHoroscope } from '../api/openAi'
import { Orb } from './Orb'

export function Form() {
  const [horoscope, setHoroscope] = useState('')
  const [formState, setFormState] = useState('')
  const [orbState, setOrbstate] = useState('/images/crystalball_static.png')

  // useEffect(() => {
  //   async function loadResponse() {
  //     const data = await api.getWidgets()
  //     setWidgets(data)
  //     console.log(data)
  //   }

  //   loadWidgets()
  // }, [])

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    console.log(formState)
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
    </>
  )
}

export default Form
