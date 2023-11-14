// more than one value
const x = 10;
const y = "Dayan";
const z = [1, 2];

console.log(x, y, z);

// print control
console.count(`O valor de x é: ${x}, contagem: `);
console.count(`O valor de x é: ${x}, contagem: `);
console.count(`O valor de x é: ${x}, contagem: `);

// variable between string
console.log("O nome é %s, e ele é programador", y);

//clear console
setTimeout(() => {
  console.clear();
}, 2000);
