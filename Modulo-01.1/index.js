const EventEmitter = require("events");
class MyIssuer extends EventEmitter {}

const myIssuer = new MyIssuer();
const eventName = "usuario:click";
myIssuer.on(eventName, function (click) {
  console.log("um usuário clicou", click);
});

// criar simulação de eventos
// myIssuer.emit(eventName, "na barra de rolagem");
// myIssuer.emit(eventName, "no ok");

// let count = 0;
// setInterval(function () {
//   myIssuer.emit(eventName, "clicou no OK" + count++);
// }, 1000);

const stdin = process.openStdin();
stdin.addListener("data", function (value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
