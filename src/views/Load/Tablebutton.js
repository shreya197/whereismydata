import React, { useState } from 'react'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import Chart from './chart_campgn'
import Charts_offr from './chart_offr'
import Charts_run from './chart_run'
import Charts_tst_run from './chart_tst_run'

const Tablebutton = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [showComponent_offr, setShowComponent_offr] = useState(false)
  const [showComponent_run, setShowComponent_run] = useState(false)
  const [showComponent_tst_run, setShowComponent_tst_run] = useState(false)
  const handleClick_offr = () => {
    setShowComponent(false)
    setShowComponent_run(false)
    setShowComponent_tst_run(false)
    setShowComponent_offr(!showComponent_offr)
  }
  const handleClick = () => {
    setShowComponent_offr(false)
    setShowComponent_run(false)
    setShowComponent_tst_run(false)
    setShowComponent(!showComponent)
  }
  const handleClick_run = () => {
    setShowComponent(false)
    setShowComponent_offr(false)
    setShowComponent_tst_run(false)
    setShowComponent_run(!showComponent_run)
  }
  const handleClick_tst_run = () => {
    setShowComponent(false)
    setShowComponent_run(false)
    setShowComponent_offr(false)
    setShowComponent_tst_run(!showComponent_tst_run)
  }

  return (
    <>
      <div className="d-grid gap-2">
        <CDropdown direction="center">
          <CDropdownToggle color="success">Select Table name</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem key={'30-08-18'} onClick={handleClick}>
              TBIC_IMP_CAMPGN
            </CDropdownItem>
            <CDropdownItem key={'29-08-18'} onClick={handleClick_offr}>
              TBIC_IMP_OFFR
            </CDropdownItem>
            <CDropdownItem key={'28-08-18'} onClick={handleClick_run}>
              TBIC_IMP_CAMPGN_RUN
            </CDropdownItem>
            <CDropdownItem key={'28-08-18'} onClick={handleClick_tst_run}>
              TBIC_IMP_CAMPGN_TST_RUN
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
      {showComponent && <Chart />}
      {showComponent_offr && <Charts_offr />}
      {showComponent_run && <Charts_run />}
      {showComponent_tst_run && <Charts_tst_run />}
      <div>
        <br />
      </div>
    </>
  )
}

export default Tablebutton
