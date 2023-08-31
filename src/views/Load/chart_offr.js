import React, { useState } from 'react'
import { CCard, CCardBody, CCardText, CCol, CNav, CNavItem, CNavLink, CRow } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
const charts_offr = () => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        <CCol>
          <div style={{ width: '500px', paddingRight: '50px' }}>
            <CChart
              xAxisID="hi"
              type="bar"
              data={{
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [
                  {
                    label: 'Extract',
                    barThickness: 15,
                    backgroundColor: '#1534CC',
                    data: [4940],
                  },
                ],
              }}
              labels="cuts"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Cuts',
                      color: 'black',
                    },
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Records',
                      color: 'black',
                    },
                    grid: {
                      color: getStyle('--cui-border-color-translucent'),
                    },
                    ticks: {
                      color: getStyle('--cui-body-color'),
                    },
                  },
                },
              }}
            />
          </div>
        </CCol>
        <CCol></CCol>
        <CCol xs>
          <CCard style={{ width: '12rem' }}>
            <CCardBody>
              <CCardText>TBIC_IMP_OFFR</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div style={{ width: '500px', paddingRight: '50px', height: '400px' }}>
        <CChart
          type="bar"
          data={{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: [
              {
                label: 'Load',
                barThickness: 15,
                backgroundColor: '#fdbb0a',
                data: [4940],
              },
            ],
          }}
          labels="cuts"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Cuts',
                  color: 'black',
                },
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Records',
                  color: 'black',
                },
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </div>
    </>
  )
}

export default charts_offr
