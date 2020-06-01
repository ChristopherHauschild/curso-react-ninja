import {
  Paper,
  TableCell,
  TableContainer as MaterialTableContainer,
  TableHead,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'

export const TableContainer = styled(MaterialTableContainer).attrs({
  component: Paper
})`
  && {
    margin-bottom: 28px;
  }
`

export const TableTitle = styled(Typography).attrs({
  variant: 'h6'
})`
  && {
    padding: 28px;
  }
`

export const THead = styled(TableHead)`
  && {
    background: #20232a;
    color: #fff
  }
`
export const Th = styled(TableCell)`
  && {
    color: #fff;
  }
`
