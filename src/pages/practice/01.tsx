import { NextPage } from 'next';

import ThreeBoxContent from '@/components/ThreeBoxContent';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <ThreeBoxContent
        title1="This is title"
        content1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
        title2="This is title"
        content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
        title3="This is title"
        content3="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
      />
      {/* {ThreeBoxContent({
        title1: 'This is title',
        content1:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
        title2: 'This is title',
        content2:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
        title3: 'This is title',
        content3:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
      })} */}
    </div>
  );
};

export default Page;
