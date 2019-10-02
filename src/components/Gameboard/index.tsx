import React from 'react'
import styled from 'styled-components/native'
import Group from './Group'

const Container = styled.View`
  width: 300px;
  height: 300px;
  /* border: 1px solid #4e70a6; */
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
  console.log('from the numbers method:', arr);
  return arr;
}

export default class Gameboard extends React.Component {
  render() {
    return (
      <Container>
        {
          numbers().map((arr, i) => {
            console.log('from the map method on numbers:', arr);

            return <Group key={i} numbers={[...arr]} />
          })
        }
      </Container>
    )
  }
}