import { formatDate } from './helpers'

describe('formatDate', () => {
  it('should properly format date', () => {
    const date = '2020-10-26T15:02:44Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toEqual('Monday, October 26, 2020, 9:02:44 AM')
  })
})