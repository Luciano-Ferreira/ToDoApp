import { InputHTMLAttributes } from 'react';
import style from './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function CreateTodoInput({ name, ...rest }: Props) {
  <input
    className={style}
    placeholder='Adicione uma nova tarefa'
  >

  </input>
}