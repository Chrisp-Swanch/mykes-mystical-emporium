import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Form from './components/Form'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Form />} />
  </Route>
))

export default router