import { PlusCircle } from 'phosphor-react';
import { EmptyList } from '../../components/EmptyList';
import { List } from '../../components/List';

import styles from './styles.module.scss';

export function Main() {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.formTodo}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.content}>
        <header className={styles.headerBox}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.donedTasks}>
            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </header>
        <List />
      </div>
    </div>
  );
}
