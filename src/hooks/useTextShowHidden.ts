import { useState } from 'react';

type UseTextShowHidden = () => {
  isHidden: boolean;
  handleClickShown: () => void;
  handleClickHidden: () => void;
};

export const useTextShowHidden: UseTextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClickShown = () => {
    setIsHidden(false);
  };
  const handleClickHidden = () => {
    setIsHidden(true);
  };
  return { isHidden, handleClickShown, handleClickHidden };
};
