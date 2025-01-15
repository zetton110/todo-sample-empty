import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="フィードバックを入力してください"
          />
          <div className="flex justify-center">
            <Button label="送信する" variant="primary"></Button>
          </div>
          <div>
            <li>フィードバックです</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
