import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

import data from '../../assets/data/processd.json'

const Tabless = () => {
  return (
    <>
      <div>${data[0].processId}</div>
    </>
  )
}

export default Tabless
