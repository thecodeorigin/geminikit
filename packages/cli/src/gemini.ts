import { spawn } from 'child_process';

export function runGemini(args: string[]) {
  const child = spawn('gemini', args, {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  child.on('error', (err) => {
    console.error('Failed to start gemini cli:', err);
    process.exit(1);
  });

  child.on('close', (code) => {
    process.exit(code || 0);
  });
}
