import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'VMDP.CAMPGN_DTL HDP VCS OPR' },
    position: { x: 100, y: 120 },
  },
  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'VMDP.CAMPGN_DTL HDP VDM OPR' },
    position: { x: 390, y: 120 },
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'VMDP.CAMPGN_DTL DB2 VDM OPR' },
    position: { x: 700, y: 120 },
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'VMDP.CAMPGN_DTL HDP VDM OPR2' },
    position: { x: 700, y: 300 },
  },
]

const initialEdges = [
  {
    id: 'horizontal-e1-2',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-2',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    animated: true,
  },
]

const HorizontalFlow = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), [])

  return (
    <>
      <div style={{ width: '100vw', height: '60vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        ></ReactFlow>
      </div>
      <figure className="text-center">
        <blockquote className="blockquote">
          For Graphical Representation,{' '}
          <Link to={'/campaign/load'}>
            <p className="text-primary" style={{ display: 'inline' }}>
              click here
            </p>
          </Link>
        </blockquote>
      </figure>
    </>
  )
}

export default HorizontalFlow
