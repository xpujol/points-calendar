const ADD_HOLIDAY    = 'Holiday/AddHoliday';
const REMOVE_HOLIDAY = 'Holiday/RemoveHoliday';

export function AddHoliday(dayIndex)
{
  return {type : ADD_HOLIDAY, dayIndex};
}

export function RemoveHoliday(dayIndex)
{
  return {type : REMOVE_HOLIDAY, dayIndex};
}

const reducer = function(holidays = [], action)
{
  const {type, dayIndex} = action;
  switch(type)
  {
    case ADD_HOLIDAY:
      return [...holidays, dayIndex];
    case REMOVE_HOLIDAY:
      return holidays.filter(day => day !== dayIndex);
    default:
      return holidays;
  }
};

export default reducer;
