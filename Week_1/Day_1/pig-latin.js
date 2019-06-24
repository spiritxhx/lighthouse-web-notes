const args = process.argv;
// console.log(process.argv.length);

for (let i = 2; i < process.argv.length; i++) {
  let input = process.argv[i];
  let output = '';
  for (let j = 1; j < input.length; j++) {
    output+=input[j];
  }
  output+=input[0]+'ay ';
  console.log(output);
  
}