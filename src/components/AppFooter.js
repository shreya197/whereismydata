import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright &copy; 2023 </span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          VISA
        </a>
        <span> </span>
        <span>All rights reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
