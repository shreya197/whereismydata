import React, { useState } from 'react'
import {
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import greencircle from '../../assets/images/greencircle.png'
import greentickcircle from '../../assets/images/greentickcircle.png'
import bluecircle from '../../assets/images/bluecircle.png'
import blueinp from '../../assets/images/blueinp.jpg'
import circle from '../../assets/images/circle.jpg'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { Link } from 'react-router-dom'
const Process = () => {
  return (
    <>
      <CTable align="middle" responsive color="info" striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className="w-25">
              Process
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-25">
              Description
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>
              <Link to={'/campaign'}>
                <p className="text-primary">Campaign</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>Lorem impsum jnmkdsmokmjkn</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <Link to={'/campaign'}>
                <p className="text-primary">Campaign</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>Lorem impsum jnmkdsmokmjkn</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <Link to={'/campaign'}>
                <p className="text-primary">Campaign</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>Lorem impsum jnmkdsmokmjkn</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <Link to={'/campaign'}>
                <p className="text-primary">Campaign</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>Lorem impsum jnmkdsmokmjkn</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Process
