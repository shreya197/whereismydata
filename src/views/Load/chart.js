import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
const chartss = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ width: '400px', paddingRight: '50px' }}>
          <CChart
            type="bar"
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              datasets: [
                {
                  label: 'Extract',
                  barThickness: 15,
                  backgroundColor: '#1534CC',
                  data: [40, 20, 12, 39, 10, 40, 39, 100, 40, 70, 60, 50, 10, 20],
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
                  grid: {
                    color: getStyle('--cui-border-color-translucent'),
                  },
                  ticks: {
                    color: getStyle('--cui-body-color'),
                  },
                },
                y: {
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
        <div style={{ width: '400px', paddingRight: '50px', height: '400px' }}>
          <CChart
            type="bar"
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              datasets: [
                {
                  label: 'Load',
                  barThickness: 15,
                  backgroundColor: '#fdbb0a',
                  data: [40, 20, 12, 39, 10, 40, 39, 100, 40, 70, 60, 50, 10, 20],
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
                  grid: {
                    color: getStyle('--cui-border-color-translucent'),
                  },
                  ticks: {
                    color: getStyle('--cui-body-color'),
                  },
                },
                y: {
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
      </div>
    </>
  )
}

export default chartss
