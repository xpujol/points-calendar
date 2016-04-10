const CHANGE_PERCENTAGE = 'Percentage/Change';

export function ChangePercentage(percentage)
{
  return {type : CHANGE_PERCENTAGE, percentage};
}

const defaultPercentage = parseInt(window.localStorage.percentage, 10) || 70;

const reducer = function(percentage = defaultPercentage, action)
{
  switch(action.type)
  {
    case CHANGE_PERCENTAGE:
      return action.percentage;
    default:
      return percentage;
  }
};

export default reducer;
