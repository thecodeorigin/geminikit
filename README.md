<div align="center">
  <p>Sponsored by <a href="https://developers.google.com/program">Google Developer Program</a></p>
  <p>Made with ❤️ by member of <a href="https://gdg.community.dev/gdg-cloud-da-nang/">GDG Cloud Da Nang</a></p>
</div>

---

# `geminikit`

A comprehensive Gemini CLI workspace kit configured as a Bun monorepo. This package provides a pre-configured environment with advanced AI skills and tools, ready to be dropped into any project.

## Features

*   **Skill System**: Modular skills for specialized tasks.
    *   **Sequential Thinking**: Structured problem-solving methodology.
    *   **Chrome DevTools**: Browser automation and debugging.
    *   **AI Multimodal**: Audio, video, and image processing.
    *   **Code Review**: Protocols for rigorous code analysis.
    *   **Planning**: Structured planning workflow.
    *   **Debugging**: Systematic debugging framework.
    *   **Research**: Deep research and report generation.
*   **Bun Monorepo**: optimized for speed and modern JavaScript development.
*   **TypeScript**: Full type safety across all scripts and tools.
*   **GeminiKit CLI (`gk`)**: Dedicated CLI to manage the environment and logs.

## Installation

To use this kit in your project:

```bash
bun add geminikit
# or
npm install geminikit
```

After installation, run the setup command to configure the `.gemini` environment:

```bash
npx gk setup
```

## GeminiKit CLI (`gk`)

The package includes a dedicated CLI tool `gk` for managing the GeminiKit environment.

```bash
# Setup the environment (install Bun, Gemini CLI, and configure .gemini)
npx gk setup

# Check the health of the installation
npx gk doctor

# View and manage telemetry logs
npx gk log

# Show version information
npx gk --version

# Show help
npx gk --help
```

## Usage

### Gemini CLI Skills

Once installed and setup, you can use the Gemini CLI with the provided skills.

```bash
# Start a planning session
gemini plan "Implement a new authentication system"

# Perform deep research
gemini research "Current state of quantum computing"

# Automate a browser task
gemini chrome "Take a screenshot of google.com"

# Analyze media
gemini multimodal "Describe this image" --files image.jpg
```

### Direct Script Usage

You can also run the underlying scripts directly using `bun`:

```bash
# Run the sequential thinking processor
bun .gemini/skills/sequential-thinking/scripts/process-thought.ts --thought "Initial analysis" --number 1 --total 5

# Run a browser automation script
bun .gemini/skills/chrome-devtools/scripts/navigate.ts --url https://example.com
```

## Development

To contribute or modify this kit:

1.  Clone the repository.
2.  Run `bun install` to install dependencies.
3.  Make changes to skills in `.gemini/skills`.
4.  Run `bun tsc` to verify type safety.

## License

ISC

---

<div align="center">
  <p>Inspired by <a href="https://github.com/claudekit">claudekit.cc</a> and <a href="https://github.com/github/spec-kit">spec-kit</a></p>
</div>