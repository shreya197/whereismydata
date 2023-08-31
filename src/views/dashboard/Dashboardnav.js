import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import DashboardAll from './DashboardAll'
import DashboardAllSearch from './DashboardAllSearch'
const DashboardNav = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem role="presentation">
          <CNavLink
            active={activeKey === 1}
            component="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            All
          </CNavLink>
        </CNavItem>
      </CNav>
    </>
  )
}

export default DashboardNav
