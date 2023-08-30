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
import DashboardNav from './Dashboardnav.js'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { Link } from 'react-router-dom'
const DashboardAll = () => {
  return (
    <>
      <CTable align="middle" responsive>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className="w-25">
              Status
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-25">
              Process
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-25">
              SubProcess
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-25">
              Progress
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="w-25"></CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>
              <CButton color="success" variant="outline" disabled="true">
                <img
                  src={greencircle}
                  alt=""
                  style={{ height: '15px', width: '15px', paddingRight: '5px' }}
                ></img>
                Completed
              </CButton>
            </CTableDataCell>
            <CTableDataCell>Campaign</CTableDataCell>
            <CTableDataCell>
              {' '}
              <Link to={'/campaign/load'}>
                <p className="text-primary">Extract</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
            </CTableDataCell>
            <CTableDataCell>
              <CIcon icon={cilOptions}></CIcon>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <CButton color="info" variant="outline" disabled="true">
                <img
                  src={bluecircle}
                  alt=""
                  style={{ height: '20px', width: '20px', paddingRight: '5px' }}
                ></img>
                In Progress
              </CButton>
            </CTableDataCell>
            <CTableDataCell>Campaign</CTableDataCell>
            <CTableDataCell>
              <Link to={'/campaign/load'}>
                <p className="text-primary">Load</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={blueinp}
                alt=""
                style={{ height: '26px', width: '26px', paddingRight: '5px' }}
              ></img>
              <img
                src={circle}
                alt=""
                style={{ height: '30px', width: '30px', paddingRight: '5px' }}
              ></img>
              <img
                src={circle}
                alt=""
                style={{ height: '30px', width: '30px', paddingRight: '5px' }}
              ></img>
            </CTableDataCell>
            <CTableDataCell>
              <CIcon icon={cilOptions}></CIcon>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <CButton color="info" variant="outline" disabled="true">
                <img
                  src={bluecircle}
                  alt=""
                  style={{ height: '20px', width: '20px', paddingRight: '5px' }}
                ></img>
                In Progress
              </CButton>
            </CTableDataCell>
            <CTableDataCell>Campaign</CTableDataCell>
            <CTableDataCell>
              {' '}
              <Link to={'/campaign/load'}>
                <p className="text-primary">Load</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={blueinp}
                alt=""
                style={{ height: '26px', width: '26px', paddingRight: '5px' }}
              ></img>
              <img
                src={circle}
                alt=""
                style={{ height: '30px', width: '30px', paddingRight: '5px' }}
              ></img>
              <img
                src={circle}
                alt=""
                style={{ height: '30px', width: '30px', paddingRight: '5px' }}
              ></img>
              <img
                src={circle}
                alt=""
                style={{ height: '30px', width: '30px', paddingRight: '5px' }}
              ></img>
            </CTableDataCell>
            <CTableDataCell>
              <CIcon icon={cilOptions}></CIcon>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell>
              <CButton color="success" variant="outline" disabled="true">
                <img
                  src={greencircle}
                  style={{ height: '15px', width: '15px', paddingRight: '5px' }}
                ></img>
                Completed
              </CButton>
            </CTableDataCell>
            <CTableDataCell>Campaign</CTableDataCell>
            <CTableDataCell>
              {' '}
              <Link to={'/campaign/load'}>
                <p className="text-primary">Copy</p>
              </Link>
            </CTableDataCell>
            <CTableDataCell>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
              <img
                src={greentickcircle}
                alt=""
                style={{ height: '25px', width: '25px', paddingRight: '5px' }}
              ></img>
            </CTableDataCell>
            <CTableDataCell>
              <CIcon icon={cilOptions}></CIcon>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default DashboardAll
