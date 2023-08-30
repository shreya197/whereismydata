import React, { useState } from 'react'
import { CAlert, CAlertHeading, CNav, CNavItem, CNavLink } from '@coreui/react'

const CampaignInfo = () => {
  return (
    <>
      <CAlert color="success">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        </p>
        <p>
          Source Table: ABC <br /> Source Table Location: Loc1
        </p>
        <p>
          Destinantion Table: XYZ <br /> Destination Table Location: Loc2
        </p>
      </CAlert>
    </>
  )
}

export default CampaignInfo
