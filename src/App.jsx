import React from 'react'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import ConnectPage from './Pages/ConnectPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div className='w-screen'>
     <Page1/>
     <Page2/>
      <Page3/>
     <ContactPage/>
    <ConnectPage/>
    </div>
  )
}

export default App