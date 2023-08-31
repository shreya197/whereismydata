import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

import DashboardNav from '../dashboard/Dashboardnav.js'
import DashboardAllSearch from '../dashboard/DashboardAllSearch.js'
import DashboardAll from '../dashboard/DashboardAll.js'
import Buttons from './buttons.js'
import CampaignInfo from './CampaignInfo.js'
import HorizontalFlow from './pipeline.js'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
    <>
      <DashboardNav />
      <DashboardAllSearch />
      <CampaignInfo />
      <DashboardAll />
      <Buttons />
    </>
  )
}

export default Campaign
