import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
`

// styles for text
const Title = styled.Text`
  font-size: 34px;
  color: #323232;
`

export default function App() {
  return (
    <Container>
      <Title>Hello!</Title>
    </Container>
  );
}
