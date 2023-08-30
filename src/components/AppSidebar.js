import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import KLogo from '../assets/brand/images.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import './styles.css'
// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ backgroundColor: '#E4EDF8' }}>
        <div className="logo">
          <img
            className="imglogo"
            src={KLogo}
            alt="logo"
            style={{ height: '200px', width: '230px' }}
          />
        </div>
      </CSidebarBrand>
      <CSidebarNav style={{ backgroundColor: '#C3D7E5', color: 'black' }}>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        style={{ backgroundColor: '#E4EDF8', color: 'black' }}
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
