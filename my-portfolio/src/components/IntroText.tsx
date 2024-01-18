import React from 'react';

const TextStatements: React.FC = () => {
  return (
    <>
      <div className="col-start-2 col-end-6 row-start-3 row-end-4 flex flex-col justify-center items-center mt-20">
        <p className="text-3xl md:text-4xl font-normal font-poppins" style={{ color: '#575454' }}>
          {"Hi! I'm Nicholas Hardy."}
        </p>
      </div>
      <div className='col-start-1 col-end-5 row-start-5 row-end-5 flex flex-col justify-center ml-20'>
        <p className="text-3xl md:text-4xl font-normal font-poppins mb-10" style={{ color: '#575454' }}>
          {"Engineer | Creator | Thinker | Doer"}
        </p>
        <p className="text-3xl md:text-4xl font-normal font-poppins" style={{ color: '#575454' }}>
          {"Welcome to my digital portfolio space"}
        </p>
      </div>
    </>
  );
};

export default TextStatements;
