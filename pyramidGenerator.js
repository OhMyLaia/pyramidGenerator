console.log("Hello World!");

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}
  const call = padRow("byLaia");
  console.log(call);


  for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

  let result = ""

  for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


