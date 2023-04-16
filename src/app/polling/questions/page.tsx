'use client';
import { TemplateQuestions } from '@/components/TemplateQuestion';
import cn from 'classnames';
import styles from '../../page.module.scss';
import { useQuests } from '../../../hooks/useQuests';
import { useContentState } from '../../../hooks/useContent';

export default function QuestionsPage() {
  const { goToNextQS, state } = useQuests();
  const { setContent, comebackToStart } = useContentState({ limit: 0 });
  return (
    <div className={cn(styles.wrapper)}>
      <div className=" w-full h-screen flex items-center flex-col justify-center">
        <TemplateQuestions
          title={state?.name}
          listQuestions={state?.listQuestions}
          onNextHandler={goToNextQS}
          id={state?.id}
        />
      </div>

      <div className="absolute border-collapse text-white right-20 bottom-10 h-16 w-25">
        <button
          type="button"
          onClick={() => {
            setContent(0);
            comebackToStart();
          }}
          className="duration-75 hover:bg-white hover:text-indigo-500 text-white border border-white rounded-full text-1xl px-6 py-2.5 text-center font-medium tracking-wider"
        >
          начать заново
        </button>
      </div>
    </div>
  );
}
