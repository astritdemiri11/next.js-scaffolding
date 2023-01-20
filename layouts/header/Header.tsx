import styles from './Header.module.css';

export interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <div className={styles.container}>{text}</div>;
}
