import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

interface CheckResult {
  passed: boolean;
  details?: string;
}

function checkGeminiKitVersion(): CheckResult {
  try {
    const packageJsonPath = join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return { passed: true, details: `(${packageJson.version})` };
  } catch (e) {
    return { passed: false };
  }
}

function checkBun(): CheckResult {
  try {
    const version = execSync('bun --version').toString().trim();
    return { passed: true, details: `(${version})` };
  } catch (e) {
    return { passed: false };
  }
}

function checkGeminiCLI(): CheckResult {
  try {
    const version = execSync('gemini --version').toString().trim();
    return { passed: true, details: `(${version})` };
  } catch (e) {
    return { passed: false };
  }
}

function checkGeminiConfig(): CheckResult {
  // We need to find where the package is installed and check for node_modules/.gemini
  // Assuming we are running from within the project or installed as a dependency
  
  // Strategy: Check current working directory's node_modules/.gemini
  // or check relative to the package location if possible, but usually we care about the user's project.
  
  const cwd = process.cwd();
  const configPath = join(cwd, 'node_modules', '.gemini');
  return { passed: existsSync(configPath) };
}

export function runDoctor() {
  console.log('Gemini Kit Doctor 🩺\n');

  const checks = [
    { name: 'Gemini Kit Installed', check: checkGeminiKitVersion },
    { name: 'Bun Installed', check: checkBun },
    { name: 'Gemini CLI Installed', check: checkGeminiCLI },
    { name: 'Gemini Configured (.gemini)', check: checkGeminiConfig },
  ];

  let allPassed = true;

  for (const { name, check } of checks) {
    const result = check();
    if (result.passed) {
      console.log(`✅ ${name} ${result.details || ''}`);
    } else {
      console.log(`❌ ${name}`);
      allPassed = false;
    }
  }

  console.log('');
  if (allPassed) {
    console.log('Everything looks good! You are ready to go. 🚀');
  } else {
    console.log('Some checks failed. Please fix the issues above. 🛠️');
    process.exit(1);
  }
}
