/*
- Obter um usuário
- Obter o número de telefone de um usuário a partir de seu id
- Obter o endereço do usuário pelo ID
 */

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "Aladin",
      birthDate: new Date(),
    });
  }, 1000);
}

function getPhone(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      number: "999885533",
      ddd: 11,
    });
  }, 2000);
}

function getAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "Rua do morador",
      number: 123,
    });
  }, 2000);
}

function userData(erro, user) {
  console.log("user", user);
}

getUser(function userData(erro, user) {
  if (erro) {
    console.error("Erro ao obter usuário", erro);
    return;
  }
  getPhone(user.id, function userPhone(erro1, phone) {
    if (erro1) {
      console.error("Erro ao obter telefone do usuário", erro);
      return;
    }
    getAddress(user.id, function userAddress(erro2, address) {
      if (erro2) {
        console.error("Erro ao obter endereço do usuário", erro);
        return;
      }

      console.log(`
      Name: ${user.name},
      Adrress: ${address.street}, ${address.number},
      Phone: (${phone.ddd}) ${phone.number}
      `);
    });
  });
});

// console.log("phone", phone);
