import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
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

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="flex justify-center">
            <Button label="送信する" variant="primary" onClick={handleSubmit} />
          </div>
          <div>
            {feedbackList.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
