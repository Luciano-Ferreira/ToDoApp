
import styles from './styles.module.scss';

import Trash from '../../assets/Trash.svg';

export function List() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listItem}>
        <input type='checkbox' />
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
        <button>
          <img src={Trash} alt='Logo' />
        </button>
      </div>
    </div>
  );
}
