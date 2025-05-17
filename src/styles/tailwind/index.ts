import type { Config } from 'tailwindcss';
import { baseConfig } from './base';
import { animationsConfig } from './animations';
import { componentsConfig } from './components';
import { utilitiesConfig } from './utilities';

const config: Config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      ...animationsConfig.theme?.extend,
      ...componentsConfig.theme?.extend,
      ...utilitiesConfig.theme?.extend,
    },
  },
  plugins: [
    ...(baseConfig.plugins || []),
    ...(utilitiesConfig.plugins || []),
  ],
};

export default config;
