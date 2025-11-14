#!/usr/bin/env node

import { Command } from 'commander';
import pkg from '../package.json' assert { type: 'json' };

const { version } = pkg;

const program = new Command();

program
  .name('cli')
  .description('CLI application built with Commander')
  .version(version);

program
  .command('hello')
  .description('Say hello')

  .option('-n, --name <name>', 'Name to greet', 'World')
  .action((options) => {
    console.log(`Hello, ${options.name}!`);
  });

program
  .command('info')
  .description('Show CLI information')
  .action(() => {
    console.log('CLI Version:', version);
    console.log('Node Version:', process.version);
    console.log('Platform:', process.platform);
  });

if (process.argv.length <= 2) {
  program.outputHelp();
  process.exit(0);
}

program.parse(process.argv);
