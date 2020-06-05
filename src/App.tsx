import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda'
import styled from 'styled-components'

import { getRootTestState, getNumberState } from 'modules/au/selectors'
import { addNumber } from 'modules/au/actions'

const TestPage = () => {
  const dispatch = useDispatch()
  const numberState = useSelector(R.compose(getNumberState, getRootTestState))

  return (
    <div>
      <Au>test</Au>
      <h1>{numberState}</h1>
      <input onChange={(e) => dispatch(addNumber(Number(e.target.value)))} />
    </div>
  )
}

export default TestPage

const Au = styled.div`
  color: red;
`
