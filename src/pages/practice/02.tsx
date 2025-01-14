import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-center text-6xl">{count}</h2>
          <Button
            onClick={() => setCount((prevState) => prevState + 1)}
            label="カウントアップ"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
