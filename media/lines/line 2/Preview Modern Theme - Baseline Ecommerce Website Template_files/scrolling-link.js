/** Shopify CDN: Minification failed

Line 11:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 13:8 Transforming const to the configured target environment ("es5") is not supported yet

**/
document.addEventListener('alpine:init', () => {
  Alpine.data(
    'Theme_ScrollingLink',
    () => ({
      init() {
        //observe this.$el for when element is visible
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              this.$el.tabIndex = entry.intersectionRatio === 1 ? 0 : -1;
            });
          },
          {
            rootMargin: '9999px 0px 9999px 0px',
            threshold: [0, 1],
          }
        );
        observer.observe(this.$el);
      }
    })
  );
});
