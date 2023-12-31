import Form from './Form'
import Banner from './Banner'
import Sidebar from './Sidebar'

function Home() {
  return (
    <>
      <Banner />
      <section className="content">
        <Sidebar image="/images/chuck.png" />
        <Form />
        <Sidebar image="/images/zoltar.gif"/>
      </section>
    </>
  )
}

export default Home
