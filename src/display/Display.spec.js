import React from 'react'
import { render } from '@testing-library/react'
import Display from '../display/Display'

describe('<Display />', () => {
  test('Snapshot test', () => {
    const display = render('<Display />')
    expect(display).toMatchSnapshot()
  })

  test('if true, display closed', () => {
    const { getByText } = render(<Display closed={true} />)
    expect(getByText(/closed/i))
  })
    
  test('if false, show open', () => {
    const { getByText } = render(<Display closed={false} />)
    expect(getByText(/open/i))
  })
    
  test('if true, show locked', () => {
    const { getByText } = render(<Display locked={true} />)
    expect(getByText(/locked/i))
  })
    
  test('if false, show unlocked', () => {
    const { getByText } = render(<Display locked={false} />)
    expect(getByText(/unlocked/i))
  })

 
})