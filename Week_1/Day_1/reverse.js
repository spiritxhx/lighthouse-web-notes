const args = process.argv;
// console.log(process.argv.length);

for (let i = 2; i < process.argv.length; i++) {
  let input = process.argv[i];
  // console.log(input);

  let output = '';
  for (let j = 0; j < input.length; j++) {
    output += input[input.length - j - 1];
  }
  console.log(output);

}