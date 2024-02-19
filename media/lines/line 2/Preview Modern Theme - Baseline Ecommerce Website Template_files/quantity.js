/** Shopify CDN: Minification failed

Line 12:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 17:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 29:11 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 34:11 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 39:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 42:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
window.coreQuantity = {
  adjustQuantity(adjustCb) {
    if (typeof this.previousQuantity !== 'undefined') {
      this.previousQuantity = this.quantity;
    }

    const quantityBeforeAdjustment = this.quantity;

    adjustCb();

    this.dispatchInputEvent();

    if (this.quantity === quantityBeforeAdjustment) return;

    this.$nextTick(() => {
      this.dispatchChangeEvent();
    });
  },
  increment() {
    this.adjustQuantity(() => {
      this.$refs.quantityInput.stepUp();
    });
  },
  decrement() {
    this.adjustQuantity(() => {
      this.$refs.quantityInput.stepDown();
    });
  },
  dispatchInputEvent() {
    this.$refs.quantityInput.dispatchEvent(new Event('input'));
  },
  dispatchChangeEvent() {
    this.$refs.quantityInput.dispatchEvent(new Event('change'));
  },
};

document.addEventListener('alpine:init', () => {
  Alpine.data('Quantity', () => ({
    quantity: null,
    ...coreQuantity,
  }));
});
