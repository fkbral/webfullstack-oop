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

  function MixinProtipaUI(classe) {
    return class extends classe {
      protipaUI() {
        return 'protipaUI'
      }
    }
  }

  function MixinFrontend(classe) {
    return class extends MixinProtipaUI(classe) {
      criaUI() {
        return 'criaUI'
      }
    }
  }

  function MixinCriaBancoDeDados(classe) {
    return class extends classe {
      criaBancoDeDados() {
        return 'criaBancoDeDados'
      }
    }
  }

  function MixinBackend(classe) {
    return class extends MixinCriaBancoDeDados(classe) {
      criaApiRest() {
        return 'criaApiRest'
      }
    }
  }

  function MixinDevops(classe) {
    return class extends MixinCriaBancoDeDados(classe) {
      gerenciaBancoDeDados() {
        return 'gerenciaBancoDeDados'
      }
      configuraDeploy() {
        return 'configuraDeploy'
      }
    }
  }

  class TI {
    lerCodigo() {
      return 'lerCodigo'
    }
  }

  class DesignerUI extends MixinProtipaUI(TI) {}
  class Backend extends MixinBackend(TI) {}
  class Frontend extends MixinFrontend(TI) {}
  class FullStack extends MixinBackend(Frontend) {}

  const renata = new DesignerUI()
  const bia = new FullStack()
  const tais = new Frontend()
  const roger = new Backend()

  console.log(renata.protipaUI())
  console.log(roger.criaApiRest())
  console.log(bia.protipaUI())
  console.log(bia.criaUI())
  console.log(bia.criaBancoDeDados())
  console.log(bia.criaApiRest())
  console.log(bia.lerCodigo())