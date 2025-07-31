class RegistroForm {
  elements = {
    titleInput: () => cy.get("#title"),
    titleFeedback: () => cy.get('#titleFeedback'),
    imagemUrl: () => cy.get('#imageUrl'),
    imageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }
  typeTitle(text) {
    if (!text) return;
    this.elements.titleInput().type(text)
  }
  typeUrl(url) {
    if (!url) return;
    this.elements.titleInput().type(url)
  }
}
const registroForm = new RegistroForm();

describe('Registro de imagem', () => {
  describe('Enviar uma imagem com entradas invalidas', () => {
    const imagem = {
      titulo: '',
      url: ''
    }

    it('Estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo do titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo do titulo`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão de envio', () => {
      registroForm.clickSubmit()
    })
    it('Então eu devo ver a mensagem "please type a title for the image" abaixo do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image.")
    })
    it('E eu devo ver a mensagem "please type a valid URL" acima do campo de URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
  describe('Enviar uma imagem com entradas validas', () => {
    const imagem = {
      titulo: '',
      url: ''
    }

    it('Estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo do titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo do titulo`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão de envio', () => {
      registroForm.clickSubmit()
    })
    it('Então eu devo ver a mensagem "please type a title for the image" abaixo do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image.")
    })
    it('E eu devo ver a mensagem "please type a valid URL" acima do campo de URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
})