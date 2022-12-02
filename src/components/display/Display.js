import React from 'react'
import Graph from '../graph/Graph'
import Table from '../table/Table'
import { DisplayContainer } from './DisplayStyles'

const Display = () => {
  return (
    <DisplayContainer>
        <Graph />
        <Table />
    </DisplayContainer>
  )
}

export default Display