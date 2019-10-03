import React from 'react'
import styled from 'styled-components/native'
import Group from './Group'
import { generateBoard, testGen, tester } from '../../helpers/logic'


const Container = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 8;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`


const Gameboard = () => {

  const board: any[] = generateBoard();

  // testGen();
  tester();


  return (
    <Container>
      {
        board.map((arr, i) => {
          return <Group key={i} numbers={[...arr]} />
        })
      }
    </Container>
  )
}


export default Gameboard;