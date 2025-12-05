#!/usr/bin/env node
import { runGemini } from './gemini';
import { handleLogCommand } from './log';

const args = process.argv.slice(2);

if (args[0] === 'log') {
  handleLogCommand(args.slice(1));
} else {
  runGemini(args);
}


