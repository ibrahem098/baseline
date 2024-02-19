/** Shopify CDN: Minification failed

Line 12:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 17:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 33:27 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 38:29 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 43:25 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('Theme_Sidebar', () => ({
    init() {
      if (Shopify.designMode) {
        this._setUpDesignMode();
      }
    },
    _setUpDesignMode() {
      document.addEventListener(
        'shopify:section:select',
        this._sectionSelectedHandler.bind(this)
      );

      document.addEventListener(
        'shopify:section:deselect',
        this._sectionDeselectedHandler.bind(this)
      );

      document.addEventListener(
        'shopify:section:unload',
        this._sectionUnloadHandler.bind(this)
      );
    },
    _sectionSelectedHandler(e) {
      if (!e.target.contains(this.$root)) return;

      Alpine.store('modals').open('sidebar');
    },
    _sectionDeselectedHandler(e) {
      if (!e.target.contains(this.$root)) return;

      Alpine.store('modals').close('sidebar');
    },
    _sectionUnloadHandler(e) {
      if (!e.target.contains(this.$root)) return;

      document.removeEventListener(
        'shopify:section:select',
        this._sectionSelectedHandler
      );
      document.removeEventListener(
        'shopify:section:deselect',
        this._sectionDeelectedHandler
      );
      document.removeEventListener(
        'shopify:section:unload',
        this._sectionUnloaHandler
      );
    },
  }));
});
