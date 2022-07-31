import { sveltekit } from '@sveltejs/kit/vite';
import dsv from '@rollup/plugin-dsv';
import path from 'path';

/** @type {import('vite').UserConfig} */

export default {
  plugins: [dsv(), sveltekit()],
  resolve: {
    // Set alias for top-level folders in the src folder
    alias: {
      $actions: path.resolve('./src/actions'),
      $components: path.resolve('./src/components'),
      $data: path.resolve('./src/data'),
      $functions: path.resolve('./src/functions'),
      $stores: path.resolve('./src/stores'),
      $styles: path.resolve('./src/styles'),
    },
  },
};
