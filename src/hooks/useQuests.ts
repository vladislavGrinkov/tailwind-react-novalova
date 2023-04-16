import { useState } from 'react';
import { data } from '../app/data/index';

export const useQuests = () => {
  const [dataQ, setDataQ] = useState(data);
  const [state, setState] = useState(dataQ[0]);

  const goToNextQS = (value: number) => {
    if (dataQ[value - 1]) {
      setState(dataQ[value - 1]);
      setDataQ(
        dataQ.map(item => {
          if (item.id === value) {
            return { ...item, isDone: true };
          }
          return item;
        })
      );
    }
  };

  return { goToNextQS, state, dataQ };
};
