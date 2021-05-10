import styled, {createGlobalStyle} from 'styled-components'


const Globalstyles = createGlobalStyle`
 * {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
     font-family: 'Source Sans Pro' sans-serif
 }
`

export const container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 50px;
    padding-left: 50px;
  }

`

export default Globalstyles














