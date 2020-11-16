import styled, {css} from 'styled-components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const StyledTable = styled.table`
  width: 100%;
  padding-top: 8px;
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

export const StyledTabs = styled(Tabs)`
  background-color: #f5f5f5;
  .MuiTabs-indicator {
    background-color: blue;
  }
  button {
    background-color: #e8e8e8;
  }
`

export const StyledTab = styled(Tab)`
`