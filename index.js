

const printChar = (start, rows) => {
  if(start > rows) {
    return "";
  } else if(rows == 1) {
    return char;
  }
  let char1 = "*";
  let char2 = "#"

  console.log(`%c ${char1.repeat(start)}`, 'color: lightblue')
  return printChar(start + 1, rows)

  console.log(`%c ${char2.repeat(start)}`, 'color: lightblue')
  return printChar(start + 1, rows)
}
printChar(1, 6)
