'use client';
import cn from 'classnames';
import styles from '../page.module.scss';
import { useContentState } from '../../hooks/useContent';
import { WrapperAnimate } from '../../components/wrapperAnimate';
import Image from 'next/image';

export default function PollingPage() {
  const {
    content,
    onNextHandler,
    setContent,
    comebackToStart,
    goToQuest,
  } = useContentState({ limit: 2 });

  switch (content) {
    case 0:
      return (
        <div className={cn(styles.wrapper)}>
          <WrapperAnimate
            onNextHandler={onNextHandler}
            isComeback={true}
            style={'animate-wiggle'}
            setContent={setContent}
            comebackToStart={comebackToStart}
          >
            <div className="flex-col items-center justify-center">
              <Image
                src={'main_logo.svg'}
                height={200}
                width={200}
                alt="Logo"
              />
            </div>
          </WrapperAnimate>
        </div>
      );

    case 1:
      return (
        <div className={cn(styles.wrapper)}>
          <WrapperAnimate
            onNextHandler={onNextHandler}
            isComeback={true}
            style={'animate-wiggle2'}
            setContent={setContent}
            comebackToStart={comebackToStart}
          >
            <h3 className={cn(styles.lb)}>
              Добро пожаловать
              <br />
              <p className={cn(styles.name)}>
                в приложение для знакомств NOVALOVA
              </p>
            </h3>
          </WrapperAnimate>
        </div>
      );
    case 2:
      return (
        <div className={cn(styles.wrapper)}>
          <WrapperAnimate
            onNextHandler={onNextHandler}
            isComeback={true}
            style={'animate-wiggle3'}
            setContent={setContent}
            comebackToStart={comebackToStart}
          >
            <h3 className={cn(styles.lb)}>
              Сегодня вы наконец-то
              <br /> <h3>найдете свою любовь !</h3>
            </h3>
          </WrapperAnimate>
        </div>
      );
    case 3:
      return (
        <div className={cn(styles.wrapper)}>
          <WrapperAnimate
            onNextHandler={onNextHandler}
            isComeback={true}
            style={'animate-wiggle4'}
            setContent={setContent}
            comebackToStart={comebackToStart}
          >
            <div className="flex-col items-center justify-center">
              <div>
                <h3 className={cn(styles.lb)}>Пройдите опрос NOVALOVA</h3>
              </div>
              <div className="flex items-center justify-center mt-5">
                <button
                  type="button"
                  onClick={goToQuest}
                  className="duration-75 mt-10 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-2xl px-14 py-2.5 text-center font-medium tracking-wider"
                >
                  пройти
                </button>
              </div>
            </div>
          </WrapperAnimate>
        </div>
      );
    default:
      return <div className={cn(styles.wrapper)}></div>;
  }
}
