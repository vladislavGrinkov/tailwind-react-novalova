'use client';
import styles from './page.module.scss';
import cn from 'classnames';
import { ContentAutoSlider } from '@/components/ContentAutoSlider';
import { useSelector } from 'react-redux';
import { TypeRootState } from '@/app/init/store';
import { useTypedSelector } from './reducers/useTypedSelector';
import { useActions } from './reducers/useActions';
import { useEffect } from 'react';
import { useTimerRedirect } from '../hooks/useTimerRedirect';

export default function Home() {
  return (
    <div className={cn(styles.wrapper)}>
      <ContentAutoSlider />
    </div>
  );
}
