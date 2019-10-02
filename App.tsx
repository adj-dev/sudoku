import React from 'react'
import styled from 'styled-components/native'
import Gameboard from './src/components/Gameboard'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: papayawhip;
`

export default function App() {
  return (
    <Container>
      <Gameboard />
    </Container>
  );
}
