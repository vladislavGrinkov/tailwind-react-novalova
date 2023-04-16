import { FC } from 'react';
import { ButtonComponent } from './button';

export const WrapperAnimate: FC<TProps> = ({
  isComeback,
  children,
  style,
  comebackToStart,
  setContent,
}) => {
  return (
    <div>
      <div
        className={`${style} w-full  h-screen flex items-center justify-center`}
      >
        {children}
      </div>

      {isComeback && (
        <div className="absolute border-collapse text-white right-20 bottom-10 h-16 w-25">
          <button
            type="button"
            onClick={() => {
                setContent(0)
                comebackToStart();
            }}
            className="duration-75 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-1xl px-6 py-2.5 text-center font-medium tracking-wider"
          >
            начать заново
          </button>
        </div>
      )}
    </div>
  );
};

export type TProps = {
  onNextHandler: (value: boolean) => void;
  isComeback: boolean;
  children: any;
  style?: string;
  setContent: (value: number) => void;
  comebackToStart: () => void;
};
