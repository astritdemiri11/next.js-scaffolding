import styles from './Button.module.css';

export interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <div className={styles.container}>{text}</div>;
}
