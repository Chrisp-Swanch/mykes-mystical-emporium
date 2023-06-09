import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { getSoulMate } from '../api/openAi'

function Soulmate () {
  const [soulmate, setSoulmate] = useState('')
  const [nameState, setnameState] = useState('')
  const [profState, setProfState] = useState('')

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    const {text} = await getSoulMate(nameState, profState)
    setSoulmate(text)

  }

  function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget

    setnameState(value)
  }

  function handleProfChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget

    setProfState(value)
  }

  

  return <>
    <>
      <h2>Find out who your soulmate is...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={nameState}
          onChange={handleNameChange}
        />
        <label htmlFor="profession">Enter your profession: </label>
        <input
          id="profession"
          name="profession"
          type="text"
          value={profState}
          onChange={handleProfChange}
        />
        <button className="submit" type="submit">Tell me my future!</button>
      </form>
      {soulmate != '' && <p>{soulmate}</p>}
    </>
  </>
}

export default Soulmate