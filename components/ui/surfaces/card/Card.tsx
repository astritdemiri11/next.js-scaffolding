import styles from './Card.module.css';

export interface CardProps {
  text: string;
}

export default function Card({ text }: CardProps) {
  return <div className={styles.container}>{text}</div>;
}
