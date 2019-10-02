import React from 'react'
import styled from 'styled-components/native'
import Group from './Group'


const Container = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 8;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`


const numbers = () => {
  let arr: any[] = [];

  for (let i = 0; i < 9; i++) {
    let miniArr: any[] = [];

    for (let j = 0; miniArr.length < 9; j++) {
      let randomNumber: any = Math.floor(Math.random() * 9) + 1;
      if (miniArr.indexOf(randomNumber) === -1) {
        miniArr.push(randomNumber)
      } else {
        continue
      }
    }

    arr.push(miniArr);
  }
  return arr;
}


const Gameboard = () => {
  return (
    <Container>
      {
        numbers().map((arr, i) => {
          return <Group key={i} numbers={[...arr]} />
        })
      }
    </Container>
  )
}


export default Gameboard;
