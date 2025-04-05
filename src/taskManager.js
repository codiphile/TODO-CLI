import Conf from "conf";
import chalk from "chalk";

// Initialize config
const config = new Conf({
  projectName: "tasklist-cli",
  defaults: {
    tasks: [],
  },
});

/**
 * Get all tasks
 * @returns {Array} Array of task objects
 */
export const getTasks = () => {
  return config.get("tasks");
};

/**
 * Add a new task
 * @param {string} task Task description
 */
export const addTask = (task) => {
  const tasks = getTasks();
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    task,
    done: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  config.set("tasks", tasks);
  console.log(chalk.green(`Task added: ${task}`));
};

/**
 * Mark a task as done
 * @param {number} taskId Task ID
 */
export const markAsDone = (taskId) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(taskId));

  if (taskIndex === -1) {
    console.log(chalk.red(`Task with ID ${taskId} not found!`));
    return;
  }

  tasks[taskIndex].done = true;
  config.set("tasks", tasks);
  console.log(chalk.green(`Task "${tasks[taskIndex].task}" marked as done!`));
};

/**
 * Remove a task
 * @param {number} taskId Task ID
 */
export const removeTask = (taskId) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(taskId));

  if (taskIndex === -1) {
    console.log(chalk.red(`Task with ID ${taskId} not found!`));
    return;
  }

  const removedTask = tasks.splice(taskIndex, 1)[0];
  config.set("tasks", tasks);
  console.log(chalk.yellow(`Task "${removedTask.task}" removed!`));
};

/**
 * Clear all tasks
 */
export const clearTasks = () => {
  config.set("tasks", []);
};

/**
 * Display all tasks
 */
export const displayTasks = () => {
  const tasks = getTasks();

  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks found!"));
    return;
  }

  console.log("\n" + chalk.yellow.bold("Your Tasks:"));
  console.log("=".repeat(50));

  tasks.forEach((task) => {
    const status = task.done ? chalk.green("✓") : chalk.red("✗");
    const taskText = task.done ? chalk.gray(task.task) : chalk.white(task.task);
    console.log(`${status} [${chalk.yellow(task.id)}] ${taskText}`);
  });

  console.log("=".repeat(50) + "\n");
};
