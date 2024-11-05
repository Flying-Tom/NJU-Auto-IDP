import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  esbuild: {
    // drop: ['console', 'debugger'],
    // pure: ['console.debug'],
    // pure: mode === 'production' ? ['console.log'] : []
  },
  plugins: [

    monkey({
      entry: 'src/main.ts',
      server: {
        open: false,
      },
      userscript: {
        name: 'NJU-Auto-IDP',
        namespace: 'Flying-Tom/NJU-Auto-IDP',
        author: 'Flying-Tom',
        version: '0.0.1',
        description: 'Auto pass NJU IDP check in some academic websites',
        license: 'MIT',
        icon: 'https://z1.ax1x.com/2023/11/21/pia2Gtg.png',
        match: [
          'https://ieeexplore.ieee.org/*document/*', // 0
          'https://dl.acm.org/doi/*', // 1
          'https://www.sciencedirect.com/*', // 2
        ],
      },
    }),
  ],
});
