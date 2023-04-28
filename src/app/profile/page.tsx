'use client';
import Image from 'next/image';
import Logo from '../../../public/prof_logo.png';
import { useState } from 'react';
import { useContentState } from '../../hooks/useContent';
import { useTypedSelector } from '../reducers/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Second() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { setContent, comebackToStart } = useContentState({ limit: 0 });
  const { user } = useTypedSelector(
    state => state.profileReducer,
    shallowEqual
  );
  const { images, age, about, location, name } = user;

  if (!name) {
    router.push('/polling/questions');
    return <div>loading...</div>
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
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src={images[0]}
              alt=""
            />
            <button
              type="button"
              onClick={() => {
                setContent(0);
                comebackToStart();
              }}
              className="duration-75 ml-3 hover:bg-fuchsia-400 hover:text-white text-fuchsia-400  border border-fuchsia-400 rounded-full text-l px-3 py-1.5 text-center tracking-wider"
            >
              выйти
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            Сегодня вы наконец найдете свою любовь !
          </div>
        </div>
      </nav>
      <main className="h-full w-full flex flex-col sm:flex-row flex-grow gap-4 px-5">
        <div className="flex-1 flex flex-col gap-3">
          <div className="shadow rounded-md h-auto flex flex-col gap-2 p-5 bg-white">
            <div>
              {name}, {age}
            </div>
            <div className="flex flex-row justify-between">
              <div>{location}</div>
              <div>Нравится</div>
            </div>
          </div>
          <div className="shadow rounded-md h-auto flex flex-col gap-4 p-5 bg-white">
            <div>О себе</div>
            <div>{about}</div>
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
            className="text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600 tracking-wider"
          >
            написать
          </button>
        </div>
      </main>

      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed top-1000 left-1000 right-500 z-50 p-4 flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow bg-fuchsia-400">
              <div className="flex items-start justify-between p-4 border-b rounded-t border-white">
                <h3 className="text-xl text-gray-900 dark:text-white">
                  Хотите пообщаться ? <br />
                </h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-white bg-transparent hover:bg-fuchsia-200 hover:text-fuchsia-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-fuchsia-600 dark:hover:text-white"
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

              <div className="p-6 space-y-6">
                <p className="text-white">
                  Отсканируйте QR-код на телефоне и перейдите по ссылке!
                </p>
                <div className="flex items-center justify-center">
                  <div className="bg-white w-1/3">
                    <img
                      height={300}
                      width={300}
                      src="qr_code.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
