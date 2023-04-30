'use client';
import Image from 'next/image';
import Logo from '../../../public/prof_logo.png';
import { useState, useEffect } from 'react';
import { useContentState } from '../../hooks/useContent';
import { useTypedSelector } from '../reducers/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { useRouter } from 'next/navigation';
import { TypeRootState } from '../init/store';

export default function Second() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { setContent, comebackToStart } = useContentState({ limit: 0 });
  const { user } = useTypedSelector(
    (state: TypeRootState) => state.profileReducer,
    shallowEqual
  );
  const { images, age, about, location, name } = user;

  useEffect(() => {
    if (!name) router.push('/polling/questions');
  }, []);

  if (!name) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex max-h-full min-h-screen  flex-col gap-5 bg-fuchsia-100">
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-white w-full ">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full">
          <a className="flex items-center">
            <div className="absolute ">
              <Image
                src={Logo}
                width={120}
                height={10}
                objectFit="contain"
                alt="logo"
              />
            </div>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="relative w-10 h-10 overflow-hidden bg-fuchsia-400 rounded-full dark:bg-fuchsia-400">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={'avatar.png'}
                alt=""
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setContent(0);
                comebackToStart();
              }}
              className="duration-75 ml-3 hover:bg-fuchsia-400 hover:text-white text-fuchsia-400  border border-fuchsia-400 rounded-full text-sm px-2.5 py-1 text-center tracking-wider"
            >
              выйти
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <p className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-pink-600 via-purple-400 to-blue-600">
              Сегодня вы наконец найдете свою любовь !
            </p>
          </div>
        </div>
      </nav>
      <main className="h-full w-full flex flex-col sm:flex-row flex-grow gap-4 px-5">
        <div className="flex-1 flex flex-col gap-3">
          <div className="shadow rounded-md h-auto flex flex-col gap-2 p-5 bg-white">
            <div className="text-lg">
              {name}, {age}
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-zinc-500">{location}</div>
            </div>
          </div>
          <div className="shadow rounded-md h-auto flex flex-col gap-4 p-5 bg-white">
            <div className="text-lg">О себе</div>
            <div className="text-zinc-500">{about}</div>
          </div>

          <div className="flex flex-wrap w-full justify-start items-start">
            {images.map((path, index) => (
              <div key={path + index} className="flex w-1/4 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={path}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-first sm:w-60 flex flex-col gap-3 sticky">
          <div className="flex items-center justify-center">
            <img
              className="h-23 w-23 rounded-full ring-2 ring-white"
              src={images[0]}
              alt=""
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-full text-base px-6 py-3.5 text-center dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600 tracking-wider"
          >
            написать
          </button>
        </div>
      </main>

      {isOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-fuchsia-400 w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white">Хотите пообщаться ?</h3>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-white bg-transparent hover:text-fuchsia-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-fuchsia-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="relative p-6 flex gap-4 flex-col items-center justify-center h-auto">
                  <p className="text-white text-xl">
                    Отсканируйте QR-код на телефоне и перейдите по ссылке!
                  </p>
                  <div className="bg-white w-1/3">
                    <img height={800} width={800} src="/qr_code.jpg" />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="hover:bg-fuchsia-600 rounded-lg text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wide"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

        // <div
        //   aria-hidden="true"
        //   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        // >
        //   <div className="relative w-full max-w-2xl max-h-full">
        //     <div className="relative rounded-lg shadow bg-fuchsia-400">
        //       <div className="flex items-start justify-between p-4 border-b rounded-t border-white">
        // <h3 className="text-xl text-white dark:text-white">
        //   Хотите пообщаться ? <br />
        // </h3>
        // <button
        //   type="button"
        //   onClick={() => setOpen(false)}
        //   className="text-white bg-transparent hover:text-fuchsia-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-fuchsia-600 dark:hover:text-white"
        //   data-modal-hide="defaultModal"
        // >
        //   <svg
        //     aria-hidden="true"
        //     className="w-5 h-5"
        //     fill="currentColor"
        //     viewBox="0 0 20 20"
        //     xmlns="http://www.w3.org/2000/svg"
        //   >
        //     <path
        //       fillRule="evenodd"
        //       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //       clipRule="evenodd"
        //     ></path>
        //   </svg>
        // </button>
        //       </div>

        //       <div className="p-6 space-y-6">
        // <p className="text-white">
        //   Отсканируйте QR-код на телефоне и перейдите по ссылке!
        // </p>
        //         <div className="flex items-center justify-center">
        // <div className="bg-white w-1/3">
        //   <img height={300} width={300} src="/qr_code.jpg" />
        // </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
}
