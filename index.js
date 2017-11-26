#!/usr/bin/env node

const prog = require('caporal');
const create = require('./lib/create');

prog
  .version('0.1.0')
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action(create);

prog.parse(process.argv);
