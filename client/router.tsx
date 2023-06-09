import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Form from './components/Form'

import Soulmate from './components/Soulmate'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Form />} />
    <Route path='/soulmate' element={<Soulmate />} />

  </Route>
))

export default router