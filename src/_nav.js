import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBriefcase, cilCalculator, cilDrop, cilPencil, cilSpeedometer } from '@coreui/icons'
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
    name: <p className="text-body">Nav Option 1</p>,
    to: 'Nav Option 1',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
  {
    component: CNavItem,
    name: <p className="text-body">Nav Option 2</p>,
    to: 'Nav Option 2',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
  {
    component: CNavItem,
    name: <p className="text-body">Nav Option 3</p>,
    to: 'Nav Option 3',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
  {
    component: CNavItem,
    name: <p className="text-body">Nav Option 4</p>,
    to: 'Nav Option 4',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" style={{ color: 'black' }} />,
  },
]

export default _nav
