import Form from './Form'
import Banner from './Banner'
import Sidebar from './SidebarLeft'

function Home() {
  return (
    <>
      <Banner />
      <section className="content">
        <Sidebar />
        <Form />
        <Sidebar />
      </section>
    </>
  )
}

export default Home
