/** Shopify CDN: Minification failed

Line 13:18 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 23:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 34:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('CartFooter', () => {
    return {
      footerRoot: null,
      _morphFooter(e) {
        const newFooterSection = querySelectorInHTMLString(
          '[data-cart-footer]',
          e.detail.response.sections['cart-footer']
        );

        Alpine.morph(
          this.footerRoot,
          newFooterSection ? newFooterSection.outerHTML : '',
          {
            updating(el, toEl, childrenOnly, skip) {
              if (
                el.classList &&
                el.classList.contains('additional-checkout-buttons')
              ) {
                skip();
              }
            },
          }
        );
      },
      init() {
        this.footerRoot = this.$root;

        window.addEventListener('baseline:cart:afteradditem', (e) => {
          this._morphFooter(e);
        });

        window.addEventListener('baseline:cart:cartqtychange', (e) => {
          this._morphFooter(e);
        });
      },
    };
  });
});
