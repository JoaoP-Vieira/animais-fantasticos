export default class Modal {
  constructor(open, close, container) {
    this.open = document.querySelector('[data-modal="abrir"]');
    this.close = document.querySelector('[data-modal="fechar"]');
    this.container = document.querySelector('[data-modal="container"]');


    // bind this ao callback para
    // fazer referência ao objeto
    // da classe

    this.eventToggleModal = this.eventToggleModal.bind();
    this.cliqueForaModal = this.cliqueForaModal.bind();
  };

  // abre ou fecha ou modal
  toggleModal() {
    this.container.classList.toggle('ativo');
  };

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  };

  // fecha o modal ao clicar no lado de fora
  cliqueForaModal(event) {
    if (event.target === this.container) {
      this.toggleModal();
    };
  };

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.open.addEventListener('click', this.eventToggleModal);
    this.close.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.open && this.close && this.container) {
      this.addModalEvent();
    }
    return this;
  }
}
