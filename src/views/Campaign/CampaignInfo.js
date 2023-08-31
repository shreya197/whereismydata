import React, { useState } from 'react'
import { CAlert, CAlertHeading, CNav, CNavItem, CNavLink } from '@coreui/react'

const CampaignInfo = () => {
  return (
    <>
      <CAlert color="success">
        This Dashboard is design to make real time monitoring of batch campaign Reporting Data. We
        can check the status of every campaigns . This dashboard tells us the records extracted by
        VDM process in every one hour and loaded into VDM reporting table
      </CAlert>
    </>
  )
}

export default CampaignInfo
