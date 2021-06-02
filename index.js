

const printChar = (char, start, rows) => {
  if(start > rows) {
    return "";
  } else if(rows == 1) {
    return char;
  }

  console.log(`%c ${char.repeat(start)}`, 'color: lightblue')
  return printChar(char, start + 1, rows)
}
printChar("*", 1, 6)
printChar("#", 1, 6)
