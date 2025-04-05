#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import * as taskManager from "./taskManager.js";

// Initialize the CLI
console.log(
  chalk.blue(figlet.textSync("Todo CLI", { horizontalLayout: "full" }))
);

program.version("1.0.0").description("A CLI todo list application");

program
  .command("add <task>")
  .description("Add a new task")
  .action((task) => {
    taskManager.addTask(task);
    taskManager.displayTasks();
  });

program
  .command("list")
  .description("List all tasks")
  .action(() => {
    taskManager.displayTasks();
  });

program
  .command("done <taskId>")
  .description("Mark a task as done")
  .action((taskId) => {
    taskManager.markAsDone(taskId);
    taskManager.displayTasks();
  });

program
  .command("remove <taskId>")
  .description("Remove a task")
  .action((taskId) => {
    taskManager.removeTask(taskId);
    taskManager.displayTasks();
  });

program
  .command("clear")
  .description("Clear all tasks")
  .action(() => {
    taskManager.clearTasks();
    console.log(chalk.green("All tasks cleared!"));
  });

// This will display the tasks on every terminal startup
if (process.argv.length === 2) {
  taskManager.displayTasks();
}

program.parse(process.argv);
