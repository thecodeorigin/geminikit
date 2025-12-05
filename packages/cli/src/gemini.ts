import { spawn } from 'child_process';

export function runGemini(args: string[]) {
  const env = { ...process.env };
  
  // Filter out debugger/inspector related environment variables
  const keysToRemove = [
    'NODE_OPTIONS',
    'VSCODE_INSPECTOR_OPTIONS',
    'ELECTRON_RUN_AS_NODE',
    'DEBUG'
  ];

  keysToRemove.forEach(key => {
    delete env[key];
    // Also try case-insensitive removal
    for (const envKey in env) {
      if (envKey.toUpperCase() === key) {
        delete env[envKey];
      }
    }
  });

  // console.log('[GeminiKit] Starting Gemini CLI...');
  
  const child = spawn('gemini', args, {
    stdio: 'inherit',
    shell: true,
    env: env
  });

  child.on('error', (err) => {
    console.error('Failed to start gemini cli:', err);
    process.exit(1);
  });

  child.on('close', (code) => {
    process.exit(code || 0);
  });
  
  // Handle termination signals to kill child process
  const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
  signals.forEach((signal) => {
    process.on(signal, () => {
      if (!child.killed) {
        child.kill(signal as NodeJS.Signals);
      }
    });
  });
}
