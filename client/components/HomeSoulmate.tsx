import Banner from './Banner'
import Sidebar from './Sidebar'
import Soulmate from './Soulmate'

function HomeSoulmate() {
  return (
    <>
      <Banner />
      <section className="content">
        <Sidebar image="/images/chuck.png"/>
        <Soulmate />
        <Sidebar image="/images/zoltar.gif"/>
      </section>
    </>
  )
}

export default HomeSoulmate
