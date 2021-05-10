import styled from 'styled-components'
import {container} from '../global'
import {Link} from 'react-router-dom'
import {FaMagento} from 'react-icons/fa'

export const Nav = styled.nav`
background-color: #101522;
height :80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 456
`
;

export const NavbarContainer = styled(container)`
display:flex;
justify-content: space-between;
height: 80px;
`;
export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center
`;
export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem`
