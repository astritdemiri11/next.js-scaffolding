import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  text: string;
}

export default function BaseTemplate({ text }: BaseTemplateProps) {
  return <div className={styles.container}>{text}</div>;
}
