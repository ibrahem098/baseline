/** Shopify CDN: Minification failed

Line 8:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 9:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 35:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class ImageWithPlaceholder extends HTMLElement {
  constructor() {
    super();

    this.imageEl = this.querySelector('img');

    if (!this.imageEl) {
      return;
    }

    this.loaded = this.imageEl.complete;

    if (this.loaded === false) {
      this.imageEl.addEventListener('load', this.imageLoadedHandler.bind(this));
    }
  }

  get loaded() {
    return this._loaded;
  }

  set loaded(value) {
    this._loaded = value;

    this.imageEl.classList.toggle('is-complete', value);
  }

  imageLoadedHandler(e) {
    this.loaded = this.imageEl.complete;
    this.imageEl.removeEventListener('load', this.imageLoadedHandler);
  }
}

customElements.define('image-with-placeholder', ImageWithPlaceholder);
