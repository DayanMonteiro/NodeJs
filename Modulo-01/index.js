/*
- Obter um usuário
- Obter o número de telefone de um usuário a partir de seu id
- Obter o endereço do usuário pelo ID
 */
// importamos um módulo interno do nodeJs

const util = require("util");

// const getAddressAsync = util.promisify(getAddress);

function getUser() {
  // quando der algum problema -> reject(ERRO)
  // quando der certo sucess -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error("Deu ruim de verdade!"));

      return resolve({
        id: 1,
        name: "Aladin",
        birthDate: new Date(),
      });
    }, 1000);
  });
}

function getPhone(idUser) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        number: "999885533",
        ddd: 11,
      });
    }, 2000);
  });
}

function getAddress(idUser) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        street: "Rua do morador",
        number: 123,
      });
    }, 2000);
  });
}

// 1° passo adicionar a palava async -> automaticamente ela retornará uma Promise

async function main() {
  try {
    const user = await getUser();
    const phone = await getPhone(user.id);
    const address = await getAddress(user.id);

    console.log(`
    Nome: ${user.name},
    Telefone: (${phone.ddd}) ${phone.number},
    Endereço: ${address.street}, ${address.number}
    `);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

main();

// SEGUNDO EX
// const userPromise = getUser();
// // para manipular o sucesso usamos a função .then
// // para maniular erros, usamos o .catch
// // user -> phone -> phone
// userPromise
//   .then(function (user) {
//     return getPhone(user.id).then(function resolvePhne(result) {
//       return {
//         user: {
//           name: user.name,
//           id: user.id,
//         },
//         phone: result,
//       };
//     });
//   })
//   .then(function (result) {
//     const address = getAddressAsync(result.user.id);
//     return address.then(function resolveAddress(resultAddress) {
//       return {
//         user: result.user,
//         phone: result.phone,
//         address: resultAddress,
//       };
//     });
//   })
//   .then(function (result) {
//     console.log(`
//       Nome: ${result.user.name}
//       Endereço: ${result.address.street}, ${result.address.number}
//       Telefone: (${result.phone.ddd}) ${result.phone.number}
//     `);
//   })

//   .catch(function (error) {
//     console.error("Deu ruim", error);
//   });

// PRIMEIRO EX:
// function userData(erro, user) {
//   console.log("user", user);
// }

// getUser(function userData(erro, user) {
//   if (erro) {
//     console.error("Erro ao obter usuário", erro);
//     return;
//   }
//   getPhone(user.id, function userPhone(erro1, phone) {
//     if (erro1) {
//       console.error("Erro ao obter telefone do usuário", erro);
//       return;
//     }
//     getAddress(user.id, function userAddress(erro2, address) {
//       if (erro2) {
//         console.error("Erro ao obter endereço do usuário", erro);
//         return;
//       }

//       console.log(`
//       Name: ${user.name},
//       Adrress: ${address.street}, ${address.number},
//       Phone: (${phone.ddd}) ${phone.number}
//       `);
//     });
//   });
// });

// console.log("phone", phone);
