import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { getSoulMate } from '../api/openAi'
import { Link } from 'react-router-dom'
import { Orb } from './Orb'

function Soulmate () {
  const [soulmate, setSoulmate] = useState('')
  const [nameState, setnameState] = useState('')
  const [profState, setProfState] = useState('')
  const [orbState, setOrbstate] = useState('/images/crystalball_static.png')


  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    setOrbstate('/images/crystalball_loading.gif')
    const {text} = await getSoulMate(nameState, profState)
    setSoulmate(text)
    setOrbstate('/images/crystalball_static.png')


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
      <Link to='/'><button>Take me to my fortune...</button></Link>
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
        <button className="submit" type="submit">Reveal my soulmate!</button>
      </form>
      <Orb image={orbState} />
      {soulmate != '' && <p>{soulmate}</p>}
    </>
  </>
}

export default Soulmate