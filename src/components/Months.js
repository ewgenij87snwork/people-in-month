import React, { useContext, useEffect } from 'react';
import Month from './Month';
import UserContext from '../context/user/UserContext';

const Months = () => {
  const userContext = useContext(UserContext);
  const { months, getUsers } = userContext;
  // Функция, переданная в useEffect, будет запущена после того, как рендер будет зафиксирован на экране.
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='months'>
      {Array.isArray(months) &&
        months.map((item, i, arr) => {
          return arr.length && <Month key={i} item={item} />;
        })}
    </div>
  );
};

export default Months;
