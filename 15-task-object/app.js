'use strict';

const toDoList = {
  tasks: [
    {
      id: 1,
      priority: 1,
      title: 'Помыть посуду',
    },
  ],

  addTask: function (idTask, priorityTask, nameTask) {
    this.tasks.push({
      id: idTask,
      priority: priorityTask,
      title: nameTask,
    });
  },

  deleteTask: function (idTask) {
    const taskIndexLookup = this.tasks.find((el) => el.id === idTask);
    const idIndex = this.tasks.indexOf(taskIndexLookup);

    if (taskIndexLookup !== undefined) {
      this.tasks.splice(idIndex, 1);
    } else {
      console.log(`нет задачи с id: ${idTask}`);
    }
  },

  changeNameOrPriority: function (idTask, newPriority, newNameTask) {
    return this.tasks.find((el) => {
      if (el.id == idTask && newNameTask !== undefined) {
        el.priority = newPriority;
        el.title = newNameTask;
        console.log(newNameTask);
      } else {
        el.priority = newPriority;
      }
    });
  },

  sortPriorityTasks: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};



