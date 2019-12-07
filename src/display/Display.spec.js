import React from 'react'
import { render } from '@testing-library/react'
import Display from '../display/Display'

describe('<Display />', () => {
  test('Snapshot test', () => {
    const display = render('<Display />')
    expect(display).toMatchSnapshot()
  })


})