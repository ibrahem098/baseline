/** Shopify CDN: Minification failed

Line 12:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 14:10 Transforming const to the configured target environment ("es5") is not supported yet
Line 19:8 Transforming const to the configured target environment ("es5") is not supported yet
Line 22:10 Transforming const to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('RTE', () => {
    return {
      init() {
        this.$root.querySelectorAll('table').forEach((tableEl) => {
          const wrapper = wrap(tableEl);

          wrapper.classList.add('rte__table');
        });

        const iframeSelector = `iframe[src*="youtube.com"],iframe[src="vimeo"]`;

        this.$root.querySelectorAll(iframeSelector).forEach((extVideoEl) => {
          const wrapper = wrap(extVideoEl);

          wrapper.classList.add('rte__external-video');
        });
      },
    };
  });
});
