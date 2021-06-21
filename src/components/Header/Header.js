import React from 'react'
import styled from 'styled-components/macro'

import {COLORS, WEIGHTS} from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <StyledLogo />
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  )
}

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 2rem;
  right: 0;
  bottom: 0;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  padding-bottom: 3px; /* Optical centering */
`

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2rem;
  min-width: 950px;
`

const Nav = styled.nav`
  gap: 1rem;
  display: flex;
  justify-content: center;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
