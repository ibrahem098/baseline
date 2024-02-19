/** Shopify CDN: Minification failed

Line 12:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 25:6 Transforming async functions to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('CartNote', () => {
    return {
      updating: false,
      note: '',
      init() {
        /**
         * Can’t use .fill here because it conflicts
         * with .debounce for some reason
         */
        this.note = this.$root.value;

        this.$watch('note', (value, oldValue) => {
          if (value !== oldValue) {
            this.updateNote();
          }
        });
      },
      async updateNote() {
        this.updating = true;

        await fetch(theme.routes.cart_update_url, {
          ...fetchConfigDefaults(),
          body: JSON.stringify({
            note: this.$root.value,
          }),
        });

        this.updating = false;
      },
    };
  });
});
