import styles from './Dialog.module.css';

export interface DialogProps {
  text: string;
}

export default function Dialog({ text }: DialogProps) {
  return <div className={styles.container}>{text}</div>;
}
