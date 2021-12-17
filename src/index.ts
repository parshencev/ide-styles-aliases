#!/usr/bin/env node

import { path as appRootPath } from 'app-root-path';
import { Command } from 'commander';
import { version, description } from '../package.json';
import path from 'path';

interface Options {
  watch: boolean,
  tsconfig: string,
  src: string
}

const options = new Command()
  .version(version)
  .description(description)
  .option('-w, --watch', 'Watch to tsconfig.json with extends and project files and add symbolic links automatically', false)
  .option('-t, --tsconfig <tsConfigPath>', 'Path to tsconfig.json', './tsconfig.json')
  .option('-s, --src <srcPath>', 'Path to code source. Ignore ./node_modules', './')
  .parse(process.argv)
  .opts<Options>();

console.log(appRootPath);
console.log(path.resolve(appRootPath, options.src));
console.log(path.resolve(appRootPath, options.tsconfig));
