'use client';
import { WrapperAnimate } from '../../components/wrapperAnimate';
import { useContentState } from '../../hooks/useContent';
import cn from 'classnames';
import styles from '../page.module.scss';

export default function IntroPage() {
  const {
    content,
    onNextHandler,
    setContent,
    singInMeta,
    comebackToStart,
  } = useContentState({limit: 1});

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
            <h3 className={cn(styles.lb)}>
              Добро пожаловать
              <br /> <p className={cn(styles.name)}>во вселенную NOVALOVA</p>
            </h3>
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
              Сегодня вы наконец-то
              <br /> <p className={cn(styles.name)}>найдете свою любовь !</p>
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
            <div className="flex-col items-center justify-center">
              <div>
                <h3 className={cn(styles.lb)}>
                  Войдите в метавселенную NOVALOVA
                </h3>
              </div>
              <div className="flex items-center justify-center mt-5">
                <button
                  type="button"
                  onClick={singInMeta}
                  className="duration-75 mt-10 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-2xl px-14 py-2.5 text-center font-medium tracking-wider"
                >
                  войти
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
