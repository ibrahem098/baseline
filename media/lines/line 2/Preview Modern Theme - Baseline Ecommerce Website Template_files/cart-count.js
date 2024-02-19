/** Shopify CDN: Minification failed

Line 13:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 22:26 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 30:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 31:6 Transforming let to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.store('cartCount', {
    count: (window.theme && window.theme.cartItemCount) || 0,
    init() {
      window.addEventListener('baseline:cart:afteradditem', (e) => {
        this._setFromFetchedSection(e.detail.response);
      });

      window.addEventListener('baseline:cart:cartqtychange', (e) => {
        this._setFromFetchedSection(e.detail.response);
      });
    },
    _setFromFetchedSection(data) {
      const countSectionHTML = data.sections['cart-item-count'];

      this.count = parseInt(
        parseDOMFromString(countSectionHTML).firstElementChild.innerText.trim(),
        10
      );
    },
    countWithText() {
      let string = theme.strings.itemCountOther;

      if (this.count === 1) {
        string = theme.strings.itemCountOne;
      }

      return string.replace('{{ count }}', this.count);
    },
  });
});
