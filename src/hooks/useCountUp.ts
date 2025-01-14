import { useState } from 'react';

type UseCountUp = () => {
  count: number;
  onClickCountUp: () => void;
};

export const useCountUp = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
  };

  return { count, onClickCountUp };
};
