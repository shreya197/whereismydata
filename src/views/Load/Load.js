import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import DashboardNav from '../dashboard/Dashboardnav'
import DashboardAllSearch from '../dashboard/DashboardAllSearch'
import DashboardAll from '../dashboard/DashboardAll'
import LoadDashboard from './loadDashboard'
import LoadInfo from '../Campaign/CampaignInfo'
import Chart from './chart_campgn'
import Tablebutton from './Tablebutton'

const Load = () => {
  return (
    <>
      <DashboardNav />
      <DashboardAllSearch />
      <Tablebutton />
    </>
  )
}

export default Load
