const ThreeBoxContent = (): JSX.Element => {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">This is title</h3>
        <p className="mt-4 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </p>
      </div>
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">This is title</h3>
        <p className="mt-4 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </p>
      </div>
      <div className="p-6 shadow-xl">
        <h3 className="mt-4 text-base">This is title</h3>
        <p className="mt-4 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </p>
      </div>
    </div>
  );
};
export default ThreeBoxContent;
