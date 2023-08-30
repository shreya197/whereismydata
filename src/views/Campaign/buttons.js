import React, { useState } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
const Buttons = () => {
  return (
    <>
      <CDropdown style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <CDropdownToggle color="secondary">SubProcess</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Extract</CDropdownItem>
          <CDropdownItem href="#">Load</CDropdownItem>
          <CDropdownItem href="#">Copy</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <CDropdown>
        <CDropdownToggle color="secondary">Date</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#" key={'30-08-18'}>
            30 Aug
          </CDropdownItem>
          <CDropdownItem href="#" key={'29-08-18'}>
            29 Aug
          </CDropdownItem>
          <CDropdownItem href="#" key={'28-08-18'}>
            28 Aug
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <div>
        <br />
      </div>
    </>
  )
}

export default Buttons
