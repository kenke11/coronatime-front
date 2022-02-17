import CoronaVaccineImg from '../CoronaVaccineImg';
import React from 'react';

const Registration = () => {
  return (
    <>
      <div className='flex-1 flex flex-col w-7/12 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'></div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <CoronaVaccineImg />
      </div>
    </>
  );
};

export default Registration;
