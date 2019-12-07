import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Controls from '../controls/Controls'
import Display from '../display/Display'

describe('<Controls />', () => {
  //test a mock button click
  test('Close button selected, show open', () => {
    const toggleClosedMock = jest.fn()
    const { getByText, findByText } = render(
      <Controls toggleClosed={toggleClosedMock} locked={false} />
    ) //mock props
    fireEvent.click(getByText(/close gate/i)) //click event
    expect(toggleClosedMock).toHaveBeenCalled()
    expect(findByText(/open gate/));
  })
  //test oppsite state of button with mock click
  test('Close button selected, show open', async () => {
    const toggleClosedMock = jest.fn()
    const { findByText } = render(
      <Controls toggleClosed={toggleClosedMock} closed={true} />
    ); //mock props
    fireEvent.click(await findByText(/open gate/i))
    expect(toggleClosedMock).toHaveBeenCalled()
    expect(findByText(/close gate/))
  })
  //does this thing render
  test('Does it render', () => {
    render(<Display />)
  })
})