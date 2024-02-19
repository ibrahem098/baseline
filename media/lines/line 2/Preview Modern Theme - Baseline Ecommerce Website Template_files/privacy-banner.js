/** Shopify CDN: Minification failed

Line 17:32 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 24:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 73:9 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 76:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 77:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 88:10 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 94:11 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 100:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 103:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 103:59 Transforming default arguments to the configured target environment ("es5") is not supported yet
... and 2 more hidden warnings

**/
document.addEventListener('alpine:init', () => {
  Alpine.data('PrivacyBanner', ({ enabled }) => ({
    ShopifyCustomerPrivacy: null,
    shown: false,
    enabled,
    sectionId: null,
    bottom: null,
    transition: false,
    init() {
      this.sectionId = this.$root.id;
      this.setUpBottom();

      if (!Shopify.designMode) {
        Shopify.loadFeatures(
          [
            {
              name: 'consent-tracking-api',
              version: '0.1',
            },
          ],
          (error) => {
            if (error) {
              throw error;
            }

            this.setUp();
          }
        );
      } else {
        if (window.theme.designMode.selected === this.sectionId) {
          if (this.enabled === true) {
            setTimeout(() => {
              this.shown = true;
            }, 200);
          } else {
            // It might be open from a previous instantiation
            setTimeout(() => {
              this.shown = false;
            }, 200);
          }
        }

        document.addEventListener('shopify:section:select', (e) => {
          if (!e.target.contains(this.$root)) return;

          if (!this.enabled) return;

          this.shown = true;
        });

        document.addEventListener('shopify:section:deselect', (e) => {
          if (!e.target.contains(this.$root)) return;

          this.shown = false;
        });
      }
    },
    setUp() {
      this.ShopifyCustomerPrivacy = window.Shopify.customerPrivacy;

      const userCanBeTracked = this.ShopifyCustomerPrivacy.userCanBeTracked();
      const userTrackingConsent =
        this.ShopifyCustomerPrivacy.getTrackingConsent();

      if (
        !userCanBeTracked &&
        userTrackingConsent === 'no_interaction' &&
        this.enabled
      ) {
        this.shown = true;
      }
    },
    accept() {
      this.ShopifyCustomerPrivacy.setTrackingConsent(
        true,
        () => (this.shown = false)
      );
    },
    decline() {
      this.ShopifyCustomerPrivacy.setTrackingConsent(
        false,
        () => (this.shown = false)
      );
    },
    setUpBottom() {
      this.bottom = this.$root.style.getPropertyValue('--bottom');

      const adjustBottom = (promoModalIsOpen, doTransition = true) => {
        if (!this.shown) return;

        if (doTransition) {
          this.transition = true;
        }

        this.$nextTick(() => {
          if (promoModalIsOpen === false) {
            this.bottom = '0';
          } else {
            const promoHeight = document
              .getElementById('promo-slot')
              .getBoundingClientRect().height;

            this.bottom = `${promoHeight}px`;

            if (doTransition) {
              setTimeout(() => {
                this.transition = false;
              }, 300);
            }
          }
        });
      };

      if (Alpine.store('modals').promo.open) {
        adjustBottom(true);
      }

      document.body.addEventListener('promo-is-open', () => {
        adjustBottom(true);
      });

      document.body.addEventListener('promo-is-closed', () => {
        adjustBottom(false);
      });

      const resizeObserver = new ResizeObserver(() => {
        adjustBottom(Alpine.store('modals').promo.open, false);
      });

      resizeObserver.observe(this.$root);
    },
  }));
});
