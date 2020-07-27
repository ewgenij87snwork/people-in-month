import React from 'react';

const Person = ({ item: { firstName, lastName } }) => {
  return (
    <li className='person show-person'>
      {firstName} {lastName}
    </li>
  );
};

export default Person;
