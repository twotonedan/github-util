import styled, {css} from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  margin-top: 35px;
`

const StyledHeaderCell = styled.th`
  font-size: 20px;
`

const StyledRow = styled.tr`
  & td {
    padding: 15px;
    ${props => props && css`
      background: ${props['data-row-key'] % 2 ? '#f0f0f0' : '#e3fbff'};
    `}
  }
`

export const TableComponents = {
  table: StyledTable,
  header: {
    cell: StyledHeaderCell
  },
  body: {
    row: StyledRow
  }
}