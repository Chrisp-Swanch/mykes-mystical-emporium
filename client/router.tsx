import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'

import HomeSoulmate from './components/HomeSoulmate'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/soulmate" element={<HomeSoulmate />} />
    </Route>
  )
)

export default router
