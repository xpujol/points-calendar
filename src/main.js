import React    from 'react';
import {render} from 'react-dom';
import App      from './app';

const store =
{
  startDay     : '2016-04-11T00:00:00.000Z',
  holidays     : [2],
  percentage   : 70,
  participants :
  [
    {name : 'Patri',  absent: []},
    {name : 'Meri',   absent: []},
    {name : 'Xevi',   absent: []},
    {name : 'Patxi',  absent: []},
    {name : 'Carles', absent: [5, 6, 7, 8]}
  ]
};

render(<App {...store} />, document.getElementById('root'));
