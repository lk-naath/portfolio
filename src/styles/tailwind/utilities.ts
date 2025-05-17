import type { Config } from 'tailwindcss';

type CSSValue = string | Record<string, string>;
type CSSProperties = Record<string, CSSValue>;

export const utilitiesConfig: Partial<Config> = {
  theme: {
    extend: {
      // Common spacing values
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Common z-index values
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, CSSProperties>) => void }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to right, var(--primary), var(--secondary))',
        },
        '.glass-effect': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
      });
    },
  ],
};

