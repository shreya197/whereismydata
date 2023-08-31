import React, { useState } from 'react'
import {
  CButton,
  CFormInput,
  CInputGroup,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import processd from '../../assets/data/processdesc.json'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
const Process = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <>
      <CInputGroup className="mb-3">
        <CFormInput
          placeholder="Filter pipelines"
          aria-label="Filter pipelines"
          aria-describedby="button-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <CButton type="button" color="secondary" variant="outline" id="button-addon2">
          <CIcon icon={cilSearch} style={{ color: 'black' }} />
        </CButton>
      </CInputGroup>
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
          {processd
            .filter((process) => {
              return search.toLowerCase() === ''
                ? process
                : process.processName.toLowerCase().includes(search)
            })
            .map((process) => (
              <CTableRow key={process.id}>
                {console.log(process)}
                <CTableDataCell>
                  <Link to={'/campaign'}>
                    <p className="text-primary">{process.processName}</p>
                  </Link>
                </CTableDataCell>
                <CTableDataCell>{process.processDesc}</CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Process
