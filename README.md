# Todo CLI

A simple command-line todo list application that displays your tasks at the top of your terminal.

## Installation

Clone this repository and install the package globally:

```bash
git clone https://github.com/yourusername/tasklist-cli.git
cd tasklist-cli
npm install
npm link
```

## Usage

The todo list will be displayed automatically whenever you open a new terminal instance.

### Commands

- **Add a new task:**

  ```
  todo add "Task description"
  ```

- **List all tasks:**

  ```
  todo list
  ```

- **Mark a task as done:**

  ```
  todo done <task-id>
  ```

- **Remove a task:**

  ```
  todo remove <task-id>
  ```

- **Clear all tasks:**
  ```
  todo clear
  ```

## Features

- Auto-display tasks at the top of your terminal
- Add, mark as done, remove, and clear tasks
- Colorful interface for better visualization
- Persistent storage of tasks

## License

ISC
