import styles from './Footer.module.css';

export interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return <div className={styles.container}>{text}</div>;
}
