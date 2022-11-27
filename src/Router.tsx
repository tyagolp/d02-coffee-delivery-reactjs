import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefautLayout'
import { Home } from './pages/Home'


export function Router(){
    return (
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    )
}