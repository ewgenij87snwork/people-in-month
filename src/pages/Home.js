import React from 'react';
import Months from '../components/Months';
import People from '../components/People';
import Legend from '../components/Legend';

const Home = () => {
  return (
    <div className='container'>
      <div className='flex-wrap'>
        <Months />
        <People />
      </div>
      <Legend />
    </div>
  );
};

export default Home;
