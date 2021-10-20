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
  //   métodos: lerCodigo, criaBancoDeDados, criaUI, criaApiRest
  // TI:
  //   métodos: lerCodigo

  const MixinBancoDeDados = (superClasse) => {
    return class extends superClasse {
      criaBancoDeDados() {}
      gerenciaBancoDeDados() {}
    }
  }

  const MixinCriaBancoDeDados = (superClasse) => {
    return class extends superClasse {
      criaBancoDeDados() {}
    }
  }