import React from 'react'
import styled from 'styled-components/macro'

import SHOES from '../../data'
import ShoeCard from '../ShoeCard'

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map(shoe => (
        <StyledShowCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`

const StyledShowCard = styled(ShoeCard)`
  flex: 1 0 250px;
`

export default ShoeGrid
