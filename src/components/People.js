import React, { useContext } from 'react';
import Person from '../components/Person';
import UserContext from '../context/user/UserContext';

const People = () => {
  const userContext = useContext(UserContext);
  const { people } = userContext;
  return (
    <div className='people'>
      <ol>
        {Array.isArray(people) &&
          people.map((item, i, arr) => {
            return arr.length && <Person key={i} item={item} />;
          })}
      </ol>
    </div>
  );
};

export default People;
