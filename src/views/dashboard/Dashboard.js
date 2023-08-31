import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import DashboardNav from './Dashboardnav.js'
import DashboardAllSearch from './DashboardAllSearch.js'
import DashboardAll from './DashboardAll.js'
import Tabless from './tabless.js'
import Process from './process.js'
const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <Process />
    </>
  )
}

export default Dashboard
