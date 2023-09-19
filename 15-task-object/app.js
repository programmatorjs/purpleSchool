'use strict';

const toDoList = {
  tasks: [
    {
      id: 1,
      priority: 1,
      title: 'Помыть посуду',
    },
  ],

  addTask: function (task) {
    this.tasks.push(task);
  },

  deleteTask: function (idTask) {
    const tasksToDelete = this.tasks.filter((task) => task.id === idTask);

    if (tasksToDelete.length > 0) {
      tasksToDelete.forEach((task) => {
        const idIndex = this.tasks.indexOf(task);
        this.tasks.splice(idIndex, 1);
      });
    } else {
      console.log(`нет задачи с id: ${idTask}`);
    }
  },

  changeNameOrPriority: function (idTask, taskForUpdate) {
    const taskIndex = this.tasks.findIndex((elem) => elem.id === idTask);
    if (taskIndex) {
      console.log(`Задачи с id ${idTask} не существует`);
      return;
    }

    const updateTask = {...this.tasks[taskIndex], ...taskForUpdate}

    this.tasks[taskIndex] = updateTask
  },

  sortPriorityTasks: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};


