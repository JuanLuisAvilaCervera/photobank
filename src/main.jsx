import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Store from './app/store'
import { HomePage } from './page/homePage'
import { BrowserRouter, Routes, Route } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={Layout}>
            <Route path="" element = {HomePage}/>
            <Route path="collection" element={Collection}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
