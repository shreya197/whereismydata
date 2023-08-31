import React, { useState } from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import HorizontalFlow from './pipeline'

const Buttons = () => {
  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () => {
    setShowComponent(!showComponent)
  }

  return (
    <>
      <div className="d-grid gap-2">
        <CDropdown direction="center">
          <CDropdownToggle color="success">Select Date</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem key={'30-08-18'} onClick={handleClick}>
              31 Aug
            </CDropdownItem>
            <CDropdownItem href="#" key={'29-08-18'}>
              30 Aug
            </CDropdownItem>
            <CDropdownItem href="#" key={'28-08-18'}>
              29 Aug
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      {showComponent && <HorizontalFlow />}
      <div>
        <br />
      </div>
    </>
  )
}

export default Buttons
