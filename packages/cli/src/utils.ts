import fs from 'fs';
import path from 'path';

export function getProjectRoot(): string {
  // If run via npm/bun, INIT_CWD is the directory where the command was run
  if (process.env.INIT_CWD) {
    return process.env.INIT_CWD;
  }
  return process.cwd();
}

export function readSettings(projectRoot: string): any {
  const settingsPath = path.join(projectRoot, '.gemini', 'settings.json');
  if (!fs.existsSync(settingsPath)) {
    return null;
  }
  const content = fs.readFileSync(settingsPath, 'utf-8');
  // Simple comment stripping
  const jsonContent = content.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
  try {
    return JSON.parse(jsonContent);
  } catch (e) {
    console.error('Failed to parse settings.json', e);
    return null;
  }
}
