import TodoLogo from '../../assets/TodoLogo.svg';
import styles from './styles.module.scss';


export function Header() {
  return (
    <div className={styles.topContainer}>
        <img src={TodoLogo} alt="Logo" />
      </div>
  )
}