const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let row = [];
    for (let x = 0; x < letters.length; x++) {
      row.push(letters[x][i]);
    }
    verticalJoin.push(row);
  }
  //join the verticle
  const newVertJoin = verticalJoin.map(ls => ls.join(''));
  
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of newVertJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

//Pair Programming with @Su0112(Shruthi Neeraj) and @myfootasleep(Richard)