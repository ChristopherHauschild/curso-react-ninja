import styled from 'styled-components'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

const Logo = styled(MainLogo)`
height: 50px;
width: 200px;

& path {
  fill: #61dafb;
}

& line {
  stroke: #61dafb;
}
`
export default Logo
