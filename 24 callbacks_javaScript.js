setTimeout(function callback(){
  console.log('A')
}, 0)

for(let i = 0; i < 9999999999; i++);

console.log('B')
