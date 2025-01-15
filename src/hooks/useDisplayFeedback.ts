import { ChangeEvent, useState } from 'react';

type UseDisplayFeedback = () => {
  inputValue: string;
  feedbackList: string[];
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  return {
    inputValue,
    feedbackList,
    handleInputChange,
    handleSubmit,
  };
};
