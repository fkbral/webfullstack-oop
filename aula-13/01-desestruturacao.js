   const array = ["primeiro", "segundo", "terceiro","quarto"]
   // desestruturação de arrays
   const [head, segundo, ...tail] = array

   const cliente = {nome: "Bruno", email: "bruno@hotmail.com", idade: 20}
   const nome = "Carla"
   // desestruturação de arrays
   const { nome: nomeDoCliente, email } = cliente
   console.log(nomeDoCliente)
   console.log(email)