import {createElement} from '../render';
const createMenuTemplate = () => (
  `<nav className="trip-controls__trip-tabs  trip-tabs">
    <a className="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a className="trip-tabs__btn" href="#">Stats</a>
   </nav>`);

export default class MenuView{
  #element = null;

  get template() {
    return createMenuTemplate();
  }

  get element() {
    if (!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
