import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-6xl">こんにちは</h2>
          <div className="flex justify-center gap-x-4">
            <Button label="表示" variant="primary" />
            <Button label="非表示" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
