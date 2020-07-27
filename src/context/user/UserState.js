import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { GET_MONTHS } from '../types';
import { GET_PEOPLE } from '../types';

const UserState = (props) => {
  const initialState = {
    months: [],
    people: [],
    legend: [
      { minPeople: 10, color: 'red' },
      { minPeople: 6, color: 'green' },
      { minPeople: 2, color: 'blue' },
      { minPeople: 0, color: 'gray' },
    ],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const { months, legend, people } = state;

  const getUsers = async () => {
    const res = await axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
    const allUsers = res.data;

    // I. Формирование months[], куда потом будут рапределяться люди по соответствующим месяцам:
    // 1. Список названий месяцев
    // 2. Отсортированные по месяцам люди
    // 4. Соединение в один массив
    // 3. Назначение цвета месяца в зависимости от количества людей

    // 1.
    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // 2.
    let monthData = allUsers
      .map((person) => ({ ...person, dob: new Date(person.dob) }))
      .reduce((groupedbyMonths, person) => {
        const month = person.dob.getMonth();
        if (groupedbyMonths[month]) {
          groupedbyMonths[month].push(person);
        } else {
          groupedbyMonths[month] = [person];
        }
        return groupedbyMonths;
      }, {});

    // 3.
    for (let i = 0; i < 12; i++) {
      months.push({ month: monthName[i], data: monthData[i] });
    }

    // 4.
    months.map((item) => {
      return (item.color = legend.find((x) => item.data.length > x.minPeople).color);
    });

    dispatch({
      type: GET_MONTHS,
      payload: months,
    });
  };

  // II. Показ списка людей при наведении
  const showPeople = (data) => {
    dispatch({
      type: GET_PEOPLE,
      payload: data,
    });
  };
  return (
    <UserContext.Provider
      value={{
        getUsers,
        showPeople,
        months: months,
        people: people,
        legend: legend,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
