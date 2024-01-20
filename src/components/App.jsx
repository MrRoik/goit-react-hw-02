import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Option';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [values, setValues] = useState(() => JSON.parse(localStorage.getItem('saved-values')) || {
    good: 0,
    neutral: 0,
    bad: 0
  })

  const onUpdateFeedback = option => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  };
  
  const onReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

   useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);
  

  const totalFeedback = values.good + values.neutral + values.bad;

  const isHidden = totalFeedback === 0

  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options onUpdate={onUpdateFeedback} isHidden={isHidden} onReset={onReset} />
      {
        isHidden ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> 
      }
    </div>
  );
};
