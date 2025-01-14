type Props = {
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
};

const ThreeBoxContent = (props: Props): JSX.Element => {
  const { title1, content1, title2, content2, title3, content3 } = props;
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">{title1}</h3>
        <p className="mt-4 text-base">{content1}</p>
      </div>
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">{title2}</h3>
        <p className="mt-4 text-base">{content2}</p>
      </div>
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">{title3}</h3>
        <p className="mt-4 text-base">{content3}</p>
      </div>
    </div>
  );
};
export default ThreeBoxContent;
