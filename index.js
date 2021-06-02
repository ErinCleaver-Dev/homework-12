

const printChar = (char, start, rows) => {
  if(start > rows) {
    return "";
  }

  console.log(char * start)
  return printChar(char, start + 1, rows)
}

