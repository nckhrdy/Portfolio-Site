import React from 'react';

const Arrows: React.FC = () => {
  return (
    <>
      <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex justify-start items-end mb-20">
        <img src="/assets/Vector 1.svg" alt="Arrow 1" className="w-25 h-25" />
      </div>
      <div className="col-start-1 col-end-2 row-start-4 row-end-4 flex justify-start items-center ml-10 mb-10">
        <img src="/assets/Vector 2.svg" alt="Arrow 2" className="w-50 h-50" />
      </div>
      <div className="col-start-1 col-end-2 row-start-7 row-end-7 flex justify-start items-center ml-5 mb-5">
        <img src="/assets/ScrollArrow.svg" alt="Arrow 2" className="w-50 h-50" />
      </div>
    </>
  );
};

export default Arrows;
