/** Shopify CDN: Minification failed

Line 8:34 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 10:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('Theme_ModalCart', ({ openOnAddToCart }) => {
    return {
      init() {
        if (openOnAddToCart === true) {
          document.body.addEventListener('baseline:cart:afteradditem', () => {
            Alpine.store('modals').closeAll();

            Alpine.store('modals').open('cart');
          });
        }

        Alpine.store('modals').register('cart', 'rightDrawer');
      },
    };
  });
});
