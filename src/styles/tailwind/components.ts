import type { Config } from 'tailwindcss';

export const componentsConfig: Partial<Config> = {
  theme: {
    extend: {
      // Navigation styles
      nav: {
        height: '4rem',
        'mobile-height': '3rem',
      },
      // Card styles
      card: {
        'border-radius': '0.75rem',
        'padding': '1.5rem',
        'shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      // Button styles
      button: {
        'primary': {
          'background': 'var(--primary)',
          'hover': 'var(--primary-dark)',
          'text': 'white',
        },
        'secondary': {
          'background': 'var(--secondary)',
          'hover': 'var(--secondary-dark)',
          'text': 'white',
        },
      },
    },
  },
};
