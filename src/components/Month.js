import React, { Fragment, useContext } from 'react';
import UserContext from '../context/user/UserContext';
const Month = ({ item: { month, color, data } }) => {
  const userContext = useContext(UserContext);
  const { showPeople } = userContext;
  return (
    <Fragment>
      <div className={`month ${color}`} onMouseEnter={() => showPeople(data)} onMouseLeave={() => showPeople(false)}>
        {month}
      </div>
    </Fragment>
  );
};

export default Month;
