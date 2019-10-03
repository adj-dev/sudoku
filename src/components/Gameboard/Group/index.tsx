import React from 'react'
import styled from 'styled-components/native'

interface Props {
  numbers: number[]
}


const Container = styled.View`
  width: 33.33%;
  height: 33.33%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`


const Number = styled.Text`
  width: 30%;
  height: 30%;
  color: #6a95a3;
  text-align: center;
  font-size: 20px;
`

const Group = ({ numbers }: Props) => {
  return (
    <Container>
      {
        numbers.map((number, i) => {
          return <Number key={i}>{number}</Number>
        })
      }
    </Container>
  )
}


export default Group;
