'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


export const useContentState = ({limit = 0}: {limit: number}): ISend => {
  const [content, setContent] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const onNextHandler = (isLoading: boolean) => {
    setContent(content + 1);

    if (isLoading) {
      onActiveLoading();
    }
  };

  const goToIntro = () => {
    router.push('/intro');
  }

  const comebackToStart = () => {
    router.push('/');
  };

  const singInMeta = () => {
    window.location.href =
      'https://spaces.w3rlds.com/52270284-c34b-41bf-a603-b46099d9e296';
  };

  const goToQuest = () => {
    router.push('/polling/questions')
  }

  const onChangeContent = (value: number) => {
    setContent(value);
  };

  const onActiveLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (content <= limit) {
      setTimeout(() => {
        setContent(content + 1);
      }, 4000);
    }
  }, [content]);

  return {
    content,
    onNextHandler,
    onChangeContent,
    isLoading,
    onActiveLoading,
    setContent,
    singInMeta,
    comebackToStart,
    goToIntro,
    goToQuest,
  };
};

interface ISend {
  content: number;
  onNextHandler: (isLoading: boolean) => void;
  onChangeContent: (value: number) => void;
  isLoading: boolean;
  onActiveLoading: () => void;
  setContent: (value: number) => void;
  singInMeta: () => void;
  comebackToStart: () => void;
  goToIntro: () => void;
  goToQuest: () => void;
}
