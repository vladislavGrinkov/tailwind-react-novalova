import { useContentState } from '@/hooks/useContent';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import styles from '../../app/page.module.scss';
import { useTypedSelector } from '../../app/reducers/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { TypeRootState } from '@/app/init/store';

export const FoundProfile = () => {
  const { onChangeContent, isLoading } = useContentState({ limit: 0 });
  const router = useRouter();
  const { user } = useTypedSelector(
    (state: TypeRootState) => state.profileReducer,
    shallowEqual
  );
  const {images} = user;


  return (
    <div className="animate-wiggle4 w-full  h-screen flex items-center justify-center flex-col gap-5">
      <div className="flex relative">
        <h3 className={cn(styles.lb)}>Поздравляем!</h3>
        <div className="absolute left-80 right-0 bottom-10">
          <svg
            className="text-white w-10 h-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </svg>
        </div>
      </div>

      <h3 className={cn(styles.lb)}>Мы нашли для Вас идеальную пару!</h3>

      <div className="flex relative">
        <div className="absolute right-80 top-28 ">
          <svg
            className="text-white w-10 h-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </svg>
        </div>
        <img
          className="inline-block h-30 w-30 rounded-full ring-2 ring-white"
          src={images[0]}
          width={300}
          alt="avatar"
        />
        <div className="absolute left-96 bottom-0 ">
          <svg
            className="text-white w-10 h-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </svg>
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.push('/profile')}
        className="w-96 duration-75 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-2xl px-10 py-2.5 text-center font-medium tracking-wider"
      >
        перейти в профиль
      </button>
    </div>
  );
};
