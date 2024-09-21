import { Route, Routes } from 'react-router-dom'
import { App } from '../src/App'
import { Flores } from '../src/Flores'

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='flores' element={<Flores />} />
            <Route path='/*' element={<App />} />
        </Routes>
    </>

  )
}
