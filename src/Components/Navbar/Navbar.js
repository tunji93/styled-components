import React, {useState,useEffect} from 'react'
import {Button} from '../../global'
import {NavItemBtn, NavBtnLink, NavMenu, NavItems, NavLinks, Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon} from '../NavbarStyles'
import {FaTimes, FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true)

    const HandleButton = () => {
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=> {
        HandleButton()
    }, [])

    window.addEventListener('resize' , HandleButton)

    const handleClick = () => setClick(!click)
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                          <NavIcon />
                          ULTRA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                          {click? <FaTimes/>: <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                           <NavItems>
                               <NavLinks to = '/'>
                                   Home
                               </NavLinks>
                           </NavItems>
                           <NavItems>
                               <NavLinks to = '/services'>
                                   Services
                               </NavLinks>
                           </NavItems>
                           <NavItems>
                               <NavLinks to = '/products'>
                                   Products
                               </NavLinks>
                           </NavItems>
                           <NavItemBtn>
                               {button? (<NavBtnLink to ='/sign-up'>
                                   <Button primary>SIGN UP</Button>
                               </NavBtnLink>):
                               (<NavBtnLink to ='/sign-up'>
                               <Button  fontBig primary>SIGN UP</Button>
                           </NavBtnLink>)
                               }
                               
                           </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
