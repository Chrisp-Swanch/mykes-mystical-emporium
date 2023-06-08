import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
//import { getHoroscope } from '../apiClient'

interface Form {
  birthdate: string
}

export function Form() {
  // const [horoscope, setHoroscope] = useState(null as null | string)
  const [formState, setFormState] = useState({} as Form | any)

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
    console.log()
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget

    console.log('change!')
    setFormState({
      ...formState,
      birthdate: value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthdate">Birthdate: </label>
        <input
          id="birthdate"
          name="birthdate"
          type="date"
          value={formState}
          onChange={handleChange}
        />
      </form>
    </>
  )
}
