/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}'
  ],

  theme: {
    extend: {
      color: {
        primary: 'var(--color-primary)',
        onPrimary: 'var(--color-onPrimary)',
        primaryHover: 'var(--color-primaryHover)',
      },

      spacing: {
        'button-x': 'var(--spacing-button-x)',
        'button-y': 'var(--spacing-button-y)',
      },

      borderRadius: {
        button2: 'var(--radius-button)',
      },

      fontFamily: {
        base: 'var(--font-family-base)',
      },

      // TODO: how to specify text-badge for color and for font-size?
      fontSize: {
        button: 'var(--font-size-button)',
        badge: 'var(--font-size-badge)'
      },

      fontWeight: {
        button: 'var(--font-weight-button)',
        badge: 'var(--font-weight-badge)',
      }
    }
  },

  plugins: []
};
