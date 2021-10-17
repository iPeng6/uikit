const esbuild = require('esbuild');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const dirs = getDirectories('src');
console.log(dirs);

esbuild
  .build({
    entryPoints: ['src/index.ts', ...dirs.map((dir) => `${dir}/index.tsx`)],
    outdir: 'dist',
    outbase: 'src',
    bundle: false,
    sourcemap: false,
    minify: true,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1));
