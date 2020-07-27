import React, { useContext } from 'react';
import UserContext from '../context/user/UserContext';

const Legend = () => {
  const userContext = useContext(UserContext);
  const { legend } = userContext;

  return (
    <div className='legend'>
      People in month:
      {Array.isArray(legend) &&
        legend
          .slice()
          .reverse()
          .map((item, i, arr) => {
            return (
              <div className='legend-case' key={i}>
                {' '}
                <div className={`legend-color ${item.color}`}></div>
                <div className='legend-title'>
                  {i === 0
                    ? ' - [' + item.minPeople + '-' + arr[i + 1].minPeople + '] '
                    : i > 0 && i < arr.length - 1
                    ? ' - [' + (item.minPeople + 1) + '-' + arr[i + 1].minPeople + '] '
                    : i === arr.length - 1
                    ? '- [' + (arr[arr.length - 1].minPeople + 1 + '+]')
                    : ''}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Legend;
