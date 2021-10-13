// Faça uma classe Perfil que tem as seguintes informações:  nome, avatar 
// (foto de perfil) e tema. Utilize acessors (get/set) para garantir que o tema 
// só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url 
// (iniciada com http ou https).

class Perfil {
  #tema
  #avatar

  constructor(nome, avatar, tema="dark") {
    this.nome = nome
    this.#avatar = this.#validaAvatar(avatar)
    this.#tema = this.#validaTema(tema)
  }

  get tema() {
    return this.#tema
  }

  set tema(temaEscolhido) {
    return (this.#validaTema(temaEscolhido))
  }

  get avatar() {
    return this.#avatar
  }

  set avatar(urlDoAvatar) {
    return this.#validaAvatar(urlDoAvatar)
  }

  #validaTema = (temaEscolhido) => {
    const temasValidos = ['light', 'dark']
    
    if (temasValidos.includes(temaEscolhido)) {
      this.#tema = temaEscolhido
    }

    if (!this.#tema) {
      this.#tema = 'dark'
    }

    return this.#tema
  }

  #validaAvatar = (urlDoAvatar) => {
    if (urlDoAvatar.startsWith("http") || urlDoAvatar.startsWith("https")) {
      this.#avatar = urlDoAvatar
    }

    if (!this.#avatar) {
      this.#avatar = 'url inválido'
    }

    return this.#avatar
  }
}

const urlConta = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

const conta = new Perfil("Ana", urlConta,  "light")

console.log(conta)
console.log(conta.nome)
console.log(conta.avatar)
console.log(conta.tema)

conta.avatar = "https://unsplash.com/photos/C8Ta0gwPbQg"
console.log(conta.avatar)

conta.tema = "dracula"

console.log(conta.tema)