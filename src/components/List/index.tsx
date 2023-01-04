import styles from './styles.module.scss'

export function List() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listItem}>
        <input type='checkbox' />
        <span></span>
        <button></button>
      </div>
    </div>
  )
}