'use client';
import styles from './page.module.scss';
import cn from 'classnames';
import { ContentAutoSlider } from '@/components/ContentAutoSlider';

export default function Home() {
  return (
    <div className={cn(styles.wrapper)}>
      <ContentAutoSlider />
    </div>
  );
}
