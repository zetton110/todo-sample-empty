import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';

const Page: NextPage = () => {
  const { isHidden, handleClickShown, handleClickHidden } = useTextShowHidden();

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
