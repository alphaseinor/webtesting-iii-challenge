import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard.js'

describe('<Dashboard />', () => {
  //does this thing render
  test('Does it render', () => {
    render(<Dashboard />)
  })
})