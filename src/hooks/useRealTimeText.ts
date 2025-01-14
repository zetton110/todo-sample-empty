import { useState } from 'react';

type UseRealTimeText = () => {
  text: string;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useRealTimeText: UseRealTimeText = () => {
  const [text, setText] = useState('');

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return { text, handleChangeText };
};
