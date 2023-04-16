'use client';
import { useContentState } from '@/hooks/useContent';
import Image from 'next/image';
import { ButtonComponent } from '../button';

import { WrapperAnimate } from '../wrapperAnimate';

export const ContentAutoSlider = () => {
  const {
    content,
    onNextHandler,
    onChangeContent,
    isLoading,
    onActiveLoading,
    setContent,
    singInMeta,
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
      <div className="flex-col items-center justify-center">
        <Image src={'main_logo.svg'} height={200} width={200} alt="Logo" />
        <ButtonComponent text={'начать'} fn={goToIntro}/>
      </div>
    </WrapperAnimate>
  );

  // switch (content) {
  // case 0:
  //   return (
  //     // <WrapperAnimate
  //     //   onNextHandler={onNextHandler}
  //     //   isComeback={false}
  //     //   setContent={setContent}
  //     //   comebackToStart={comebackToStart}
  //     // >
  //     //   <div className="flex-col items-center justify-center">
  //     //     <Image src={'main_logo.svg'} height={200} width={200} alt="Logo" />
  //     //     <button
  //     //       type="button"
  //     //       onClick={() => onNextHandler(true)}
  //     //       className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //     //     >
  //     //       Начать
  //     //     </button>
  //     //   </div>
  //     // </WrapperAnimate>
  //   );
  // case 1:
  //   return (
  //     <WrapperAnimate
  //       onNextHandler={onNextHandler}
  //       isComeback={true}
  //       style={'animate-wiggle'}
  //       setContent={setContent}
  //       comebackToStart={comebackToStart}
  //     >
  //       <h3 className={cn(styles.lb)}>
  //         Добро пожаловать
  //         <br /> <p className={cn(styles.name)}>во вселенную NOVALOVA</p>
  //       </h3>
  //     </WrapperAnimate>
  //   );
  // case 2:
  //   return (
  //     <WrapperAnimate
  //       onNextHandler={onNextHandler}
  //       isComeback={true}
  //       style={'animate-wiggle2'}
  //       setContent={setContent}
  //       comebackToStart={comebackToStart}
  //     >
        // <h3 className={cn(styles.lb)}>
        //   Сегодня вы наконец-то
        //   <br /> <h3>найдете свою любовь !</h3>
        // </h3>
  //     </WrapperAnimate>
  //   );
  // case 3:
  // return (
  //   <WrapperAnimate
  //     onNextHandler={onNextHandler}
  //     isComeback={true}
  //     style={'animate-wiggle3'}
  //     setContent={setContent}
  //     comebackToStart={comebackToStart}
  //   >
  //     <div className="flex-col items-center justify-center">
  //       <div>
  //         <h3 className={cn(styles.lb)}>
  //           Войдите в метавселенную NOVALOVA
  //         </h3>
  //       </div>
  //       <div className="flex items-center justify-center mt-5">
  //         <button
  //           type="button"
  //           onClick={singInMeta}
  //           className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //         >
  //           войти
  //         </button>
  //       </div>
  //     </div>
  //   </WrapperAnimate>
  // );
  // case 3:
  //   return (
  //     <div className="animate-wiggle3 w-full h-screen flex items-center justify-center flex-col gap-5">
  //       <h3 className={cn(styles.lb)}>Я</h3>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(false)}
  //         className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         женщина
  //       </button>
  // <button
  //   type="button"
  //   onClick={() => onNextHandler(false)}
  //   className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  // >
  //   мужчина
  // </button>
  //     </div>
  //   );
  // case 4:
  //   return (
  //     <div className="animate-wiggle4 w-full  h-screen flex items-center justify-center flex-col gap-5">
  //       <div
  //         className="absolute border-collapse text-white left-10 top-10 h-16 w-16 ..."
  //         onClick={() => onChangeContent(3)}
  //       >
  //         <button
  //           type="button"
  //           className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-full text-center font-medium text-sm p-2.5"
  //         >
  //           <svg
  //             aria-hidden="true"
  //             className="w-5 h-5 rotate-180"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
  //               clipRule="evenodd"
  //             ></path>
  //           </svg>
  //         </button>
  //       </div>

        // <h3 className={cn(styles.lb)}>Сейчас я ищу ...</h3>
        // <button
        //   type="button"
        //   onClick={() => onNextHandler(true)}
        //   className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
        // >
        //   Долгосрочный партнер
        // </button>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(true)}
  //         className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         Долго или краткосрочно
  //       </button>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(true)}
  //         className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         Долго и краткосрочно
  //       </button>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(true)}
  //         className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         Просто повеселиться
  //       </button>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(true)}
  //         className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         Найти друзей
  //       </button>
  //       <button
  //         type="button"
  //         onClick={() => onNextHandler(true)}
  //         className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //       >
  //         Все еще разбираюсь
  //       </button>
  //     </div>
  //   );
  // case 5:
  //   return (
  //     <div className="animate-wiggle4 w-full  h-screen flex items-center justify-center flex-col gap-5">
  //       {isLoading ? (
  //         <div
  //           role="status"
  //           className="flex items-center justify-center flex-col gap-3"
  //         >
  //           <div>
  //             <svg
  //               aria-hidden="true"
  //               className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
  //               viewBox="0 0 100 101"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
  //                 fill="white"
  //               />
  //               <path
  //                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
  //                 fill="blue-500"
  //               />
  //             </svg>
  //           </div>

  //           <div className="text-white font-medium text-2xl">
  //             Выполняется поиск пары
  //           </div>
  //         </div>
  //       ) : (
  //         <>
  //           <div
  //             className="absolute border-collapse text-white left-10 top-10 h-16 w-16 ..."
  //             onClick={() => onChangeContent(4)}
  //           >
  //             <button
  //               type="button"
  //               className="duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-full text-center font-medium text-sm p-2.5"
  //             >
  //               <svg
  //                 aria-hidden="true"
  //                 className="w-5 h-5 rotate-180"
  //                 fill="currentColor"
  //                 viewBox="0 0 20 20"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   fillRule="evenodd"
  //                   d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
  //                   clipRule="evenodd"
  //                 ></path>
  //               </svg>
  //             </button>
  //           </div>
  //           <div className="relative ">
  //             <svg
  //               className="text-white w-10 h-10 fill-current"
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 512 512"
  //             >
  //               <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
  //             </svg>
  //           </div>
  //           <div className="absolute right-20 top-3/4 ">
  //             <svg
  //               className="text-white w-10 h-10 fill-current"
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 512 512"
  //             >
  //               <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
  //             </svg>
  //           </div>
  //           <div className="absolute left-20 top-3/4">
  //             <svg
  //               className="text-white w-10 h-10 fill-current"
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 512 512"
  //             >
  //               <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
  //             </svg>
  //           </div>
  //           <h3 className={cn(styles.lb)}>Поздравляем!</h3>
  //           <h3 className={cn(styles.lb)}>
  //             Мы нашли для Вас идеальную пару!
  //           </h3>
  //           <img
  //             className="inline-block h-30 w-30 rounded-full ring-2 ring-white"
  //             src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //             alt=""
  //           />
  //           <button
  //             type="button"
  //             onClick={() => router.push('/profile')}
  //             className="w-1/3 duration-75 hover:bg-white hover:text-blue-800 text-white border border-white rounded-lg text-2xl px-14 py-2.5 text-center font-medium tracking-wider font-serif"
  //           >
  //             Перейти в профиль
  //           </button>
  //         </>
  //       )}
  //     </div>
  //   );
  //   default:
  //     return null;
  // }
};
