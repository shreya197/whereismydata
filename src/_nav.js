import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilMonitor, cilNotes, cilSpeedometer, cilWarning } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: <p className="text-body">Dashboard</p>,
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
  {
    component: CNavItem,
    name: <p className="text-body">Monitoring</p>,
    to: 'Monitoring',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
  {
    component: CNavItem,
    name: <p className="text-body">Alerts</p>,
    to: 'Alerts',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
]

export default _nav
