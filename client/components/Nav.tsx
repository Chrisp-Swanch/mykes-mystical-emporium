import { Link } from "react-router-dom"

function Nav() {
  return <>
    <Link to='/'><li>Home</li></Link>
    <Link to='/soulmate'><li>Find out your soulmate...</li></Link>
  </>
}

export default Nav