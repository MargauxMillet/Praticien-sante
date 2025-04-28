import { Routes, Route } from 'react-router-dom'
import { Fragment, useContext, useState } from 'react'

import Home from "./pages/public/Home/index.jsx"
import Prices from "./pages/public/Prices/index.jsx"
import Booking from "./pages/public/Booking/index.jsx"
import About from "./pages/public/About/index.jsx"
import Legal from "./pages/public/Legal/index.jsx"
import SiteMap from "./pages/public/SiteMap/index.jsx"
import Connection from "./pages/admin/Connection/index.jsx"
import HomeAdmin from "./pages/admin/Home/index.jsx"
import History from "./pages/admin/History/index.jsx"
import AppointmentItem from "./pages/admin/AppointmentItem/index.jsx"
import AppointmentEdit from "./pages/admin/AppointmentEdit/index.jsx"
import AppointmentNew from "./pages/admin/AppointmentNew/index.jsx"
import Error from "./components/Error/index.jsx"

import Header from "./components/Header/index.jsx"
import Footer from "./components/Footer/index.jsx"

import {  HeaderContext, WindowContext } from './context/index.jsx'

function App() {
  const { headerImg, mainRef } = useContext(HeaderContext)
  const {windowWidth} = useContext(WindowContext)
  
  const marginTop = headerImg == '' ? '80px' : windowWidth > 500 ? '80vh' : '70vh'

  return (
    <Fragment>
      <Header />
      <div className="main" ref={mainRef} style={{marginTop: marginTop, backgroundColor: "white", position: "relative"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations-et-tarifs" element={<Prices />} />
          <Route path='/prendre-rdv' element={<Booking />} />
          <Route path='/a-propos' element={<About />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/plan-du-site" element={<SiteMap />} />
          
          <Route path="/administration/connexion" element={<Connection />} />
          <Route path="/administration-mes-rdv" element={<HomeAdmin />} />
          <Route path="/administration-mes-rdv/:id/view" element={<AppointmentItem />} />
          <Route path="/administration-mes-rdv/:id/edit" element={<AppointmentEdit />} />
          <Route path="/administration-mes-rdv/new" element={<AppointmentNew />} />
          <Route path="/administration-mes-rdv/historique" element={<History />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  )
}

export default App