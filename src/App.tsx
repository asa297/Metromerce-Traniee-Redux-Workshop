import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getCourses } from 'modules/courses/actions'

const TestPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  return (
    <div>
      <Au>test</Au>
    </div>
  )
}

export default TestPage

const Au = styled.div`
  color: red;
`
