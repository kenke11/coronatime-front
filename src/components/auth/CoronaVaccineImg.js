import React from 'react';

const CoronaVaccineImg = () => {
  return (
    <img
      className='absolute inset-0 h-full w-full object-cover h-full'
      src={`${process.env.REACT_APP_API_URL}/images/covid-vaccine.png`}
      alt={'coronatime'}
    />
  );
};

export default CoronaVaccineImg;
