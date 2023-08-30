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
      <Buttons />
      <HorizontalFlow />
      <figure className="text-center">
        <blockquote className="blockquote">
          For Graphical Representation,{' '}
          <Link to={'/campaign/load'}>
            <p className="text-primary" style={{ display: 'inline' }}>
              click here
            </p>
          </Link>
        </blockquote>
      </figure>
    </>
  )
}

export default Campaign
