import React, { useState } from 'react'
import {
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import DashboardNav from './Dashboardnav.js'
import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const DashboardAllSearch = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CFormInput
          placeholder="Filter pipelines"
          aria-label="Filter pipelines"
          aria-describedby="button-addon2"
        />
        <CButton type="button" color="secondary" variant="outline" id="button-addon2">
          <CIcon icon={cilSearch} style={{ color: 'black' }} />
        </CButton>
      </CInputGroup>
    </>
  )
}

export default DashboardAllSearch
