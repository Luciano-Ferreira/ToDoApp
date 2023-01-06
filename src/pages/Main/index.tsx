import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, InvalidEvent, useState } from 'react';
import { Task } from '../../components/Task';

import styles from './styles.module.scss';

import { currentList } from './data';
import { EmptyList } from '../../components/EmptyList';
import { v4 } from 'uuid';

interface ITask {
  id?: string;
  description?: string;
  isDone?: boolean;
}

export function Main() {
  const [list, setList] = useState<ITask[]>(currentList);
  const [newTask, setNewTask] = useState({
    id: '',
    description: '',
    isDone: false,
  });

  const totalTasks = list.length;

  const totalDoneTasks = list.filter((task) => {
    return task.isDone === true;
  });

  function handleCreateNewTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const addTask = {
      id: v4(),
      description: event.target.task.value,
      isDone: false,
    };

    setList([...list, addTask]);

    setNewTask({ id: '', description: '', isDone: false });
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask((task) => {
      return {
        ...newTask,
        description: event.target.value,
        id: v4(),
      };
    });
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatorio!');
  }

  function changeChecked(taskId: string) {
    const newTasksListChecked = list.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setList(newTasksListChecked);
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = list?.filter((task) => {
      return task.id !== taskId;
    });
    setList(tasksWithoutDeletedOne);
  }

  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleCreateNewTask} className={styles.formTodo}>
        <input
          name="task"
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask.description}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.content}>
        <header className={styles.headerBox}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>{totalTasks}</span>
          </div>
          {totalTasks === 0 ? (
            <div className={styles.donedTasks}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          ) : (
            <div className={styles.donedTasks}>
              <strong>Concluídas</strong>
              <span>
                {totalDoneTasks.length} de {totalTasks}
              </span>
            </div>
          )}
        </header>
        {list.length === 0 ? (
          <EmptyList />
        ) : (
          <div className={styles.listContainer}>
            {list.map((task) => (
              <Task
                key={task.id}
                onCheck={changeChecked}
                onDelete={deleteTask}
                {...task}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
