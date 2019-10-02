import React, { Component } from 'react'
import styled from 'styled-components/native'

interface Props {
  numbers: number[]
}

const Container = styled.View`
  width: 33.33%;
  height: 33.33%;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: #6a95a3; */
  justify-content: space-around;
  align-content: space-around;
`

const Number = styled.Text`
  width: 30%;
  height: 30%;
  color: #6a95a3;
  text-align: center;
  font-size: 20px;
  /* border: 1px solid white; */
`

const Group = ({ numbers }: Props) => {

  console.log(numbers)
  return (
    <Container>
      {
        numbers.map((number, i) => {
          console.log(number);
          return <Number key={i}>{number}</Number>
        })
      }
    </Container>
  )
}


export default Group;
