import Clipboard from '../../assets/Clipboard.png';
import styles from './styles.module.scss';


export function EmptyList () {
  return (
    <div className={styles.taskList}>
      <img src={Clipboard} alt="clipboard image" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}