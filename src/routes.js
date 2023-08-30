import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Campaign = React.lazy(() => import('./views/Campaign/campaign'))
const Load = React.lazy(() => import('./views/Load/Load'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/campaign', name: 'Campaign', element: Campaign },
  { path: '/campaign/load', name: 'Load', element: Load },
]

export default routes
