// import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'

function App() {


  return (
   <AuthProvider>
      <BrowserRouter>
        {/* <Switch> */}
          <Route path='/profile'>
            <ProtectedLayout>
              <h1>Logado com sucesso</h1>
            </ProtectedLayout>
          </Route>
          
          <Route path='/login'>
            
          </Route>
        {/* </Switch> */}
      </BrowserRouter>
   </AuthProvider>
  )
}

export default App
