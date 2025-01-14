import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClickShown = () => {
    setIsHidden(false);
  };
  const handleClickHidden = () => {
    setIsHidden(true);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {!isHidden && <h2 className="mb-4 text-6xl">こんにちは</h2>}
          <div className="flex justify-center gap-x-4">
            <Button onClick={handleClickShown} label="表示" variant="primary" />
            <Button onClick={handleClickHidden} label="非表示" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
