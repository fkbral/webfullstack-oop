// Em um time de desenvolvimento temos os seguintes tipos de desenvolvedores
// com as mínimas competências esperadas:
  // Backend:
  //    métodos: lerCodigo, criaBancoDeDados, criaApiRest
  // Devops:
  //    métodos: lerCodigo, criaBancoDeDados, gerenciaBancoDeDados, configuraDeploy
  // Frontend:
  //   métodos: lerCodigo, protipaUI, criaUI
  // DesignerUI:
  //    métodos: lerCodigo, protipaUI
  // Fullstack:
  //   métodos: lerCodigo, criaBancoDeDados, protipaUI, criaUI, criaApiRest
  // TI:
  //   métodos: lerCodigo

  class TI {
    lerCodigo() {}
  }

  class DesignerUI extends TI {
    protipaUI() {
      return 'protipaUI'
    }
  }

  class Frontend extends DesignerUI {
    criaUI() {
      return 'criaUI'
    }
  }

  function criaBancoDeDados(contexto) {
    contexto.banco = 'novo banco'
    return 'criaBancoDeDados'
  }

  class Backend extends TI {
    criaBancoDeDados() {
      this.banco = 'novo banco'
      return 'criaBancoDeDados'
    }

    criaApiRest() {
      return 'criaApiRest'
    }
  }

  class FullStack extends TI {
    protipaUI() {
      return 'protipaUI'
    }

    criaUI() {
      return 'criaUI'
    }

    criaBancoDeDados() {
      return 'criaBancoDeDados'
    }

    criaApiRest() {
      return 'criaApiRest'
    }
  }

  // class FullStack extends Backend {
  //   protipaUI() {
  //     return 'protipaUI'
  //   }

  //   criaUI() {
  //     return 'criaUI'
  //   }
  // }

  // class FullStack extends Frontend {
  //   criaBancoDeDados() {
  //     return 'criaBancoDeDados'
  //   }

  //   criaApiRest() {
  //     return 'criaApiRest'
  //   }
  // }

  const renata = new DesignerUI()

  console.log(renata.protipaUI())