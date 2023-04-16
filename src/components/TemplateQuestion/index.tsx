import cn from 'classnames';
import styles from '../../app/page.module.scss';
import { useState } from 'react';
import { FoundProfile } from '../FoundProfile';

export const TemplateQuestions = ({
  onNextHandler,
  title,
  listQuestions,
  id,
}: TProps) => {
  const [isMatch, setMatch] = useState(false);

  if (isMatch) return <FoundProfile />

  return (
    <div className="w-full h-1/2 flex items-center justify-center flex-col gap-5">
      <div>
        <h3 className="text-white tracking-wider">Вопрос {id}/21</h3>
      </div>
      <div>
        <h3 className={cn(styles.lb)}>{title}</h3>
      </div>
      <div className={cn(styles.scrollbarHide)}>
        <div className="w-full flex items-center justify-center flex-col gap-3">
          {listQuestions?.map((item, index) => (
            <button
              key={`${item}` + index}
              type="button"
              onClick={() => {
                if(id === 21) {
                  setMatch(true);
                }
                onNextHandler(id + 1);
              }}
              className="duration-75  w-1/3 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-2xl px-14 py-2.5 text-center font-medium tracking-wider"
            >
              <p>{item}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export type TProps = {
  onNextHandler: (value: number) => void;
  title: string;
  listQuestions: Array<string>;
  id: number;
};
