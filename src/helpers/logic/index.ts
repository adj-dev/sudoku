export const generateBoard = () => {
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

export const testGen = () => {
  // create an array of nine empty arrays
  let a = [...Array(9)].map(() => [])

  // generate first row
  let row1: number[] = [];

  for (let j = 0; row1.length < 9; j++) {
    let randomNumber: any = Math.floor(Math.random() * 9) + 1;
    if (row1.indexOf(randomNumber) === -1) {
      row1.push(randomNumber)
    } else {
      continue
    }
  }

  // generate second row
  let row2: number[] = [];

  for (let i = 0; row2.length < 9; i++) {
    let randomNumber: any = Math.floor(Math.random() * 9) + 1;

    if (row2.indexOf(randomNumber) === -1 && row1[row2.length - 1] !== randomNumber) {
      row2.push(randomNumber)
    } else {
      continue
    }
  }


  // fill the "first row" with randomly ordered numbers
  for (let i = 0; i <= 2; i++) {
    a[i].push(Math.floor(Math.random() * 9))
  }

  console.log(a);
}

export const tester = () => {
  // generate first row
  let row1: number[] = [];

  for (let j = 0; row1.length < 9; j++) {
    let randomNumber: any = Math.floor(Math.random() * 9) + 1;
    if (row1.indexOf(randomNumber) === -1) {
      row1.push(randomNumber)
    } else {
      continue
    }
  }

  // generate second row
  let row2: number[] = [];

  for (let i = 0; row2.length < 9; i++) {
    let randomNumber: any = Math.floor(Math.random() * 9) + 1;

    if (row2.indexOf(randomNumber) === -1 && row1[row2.length - 1] !== randomNumber) {
      row2.push(randomNumber)
    } else {
      continue
    }
  }

  console.log(row1, row2)
}