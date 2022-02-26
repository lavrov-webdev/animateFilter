import React from 'react'
import styled from 'styled-components';
import GameList from './components/GameList';
import CustomCheckbox from './components/common/CustomCheckbox';
import Filter from './components/Filter/Filter';

const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`

function App() {

  return (
    <Container>
      <Filter />
      <GameList />
    </Container>
  )
}

export default App
