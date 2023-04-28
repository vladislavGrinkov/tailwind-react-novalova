'use client';
import { useContentState } from '@/hooks/useContent';
import Image from 'next/image';
import { ButtonComponent } from '../button';

import { WrapperAnimate } from '../wrapperAnimate';

export const ContentAutoSlider = () => {
  const {
    onNextHandler,
    setContent,
    comebackToStart,
    goToIntro,
  } = useContentState({limit: 0});


  return (
    <WrapperAnimate
      onNextHandler={onNextHandler}
      isComeback={false}
      setContent={setContent}
      comebackToStart={comebackToStart}
    >
      <div className="flex-col items-center justify-center ">
        <img src={'/main_logo.svg'} height={300} width={300} alt="Logo" />
        <div className='flex items-center justify-center'><ButtonComponent text={'начать'} fn={goToIntro}/></div>
      </div>
    </WrapperAnimate>
  );
};
